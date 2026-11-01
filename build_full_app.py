# build_full_app.py
import json
import re

print("Loading base files...")
with open('india_state_svg.json', 'r', encoding='utf-8') as f:
    india_svg_data = json.load(f)

with open('bharat_political_intelligence_map_first_indian_political_transparency_accountability_platform.html', 'r', encoding='utf-8', errors='replace') as f:
    existing_content = f.read()

def extract_const(text, name):
    pattern = rf'const {name}\s*=\s*([\[\{{].*?);(?=\s*const|\s*let|\s*var|\s*function|\s*//|\s*<script|\s*$)'
    m = re.search(pattern, text, re.DOTALL)
    if m:
        v = m.group(1).strip()
        v = v.replace('\ufffd', '').replace('?', '•').replace(',1 Cr', '₹1 Cr').replace('+\'', '→')
        return v
    return None

national_overview = extract_const(existing_content, 'NATIONAL_OVERVIEW')
states_and_uts = extract_const(existing_content, 'STATES_AND_UTS')
state_districts = extract_const(existing_content, 'STATE_DISTRICTS')
constituencies = extract_const(existing_content, 'CONSTITUENCIES')
politicians = extract_const(existing_content, 'POLITICIANS')
political_parties = extract_const(existing_content, 'POLITICAL_PARTIES')
public_projects = extract_const(existing_content, 'PUBLIC_PROJECTS')

svg_json_str = json.dumps(india_svg_data)

print("Base constants loaded. Generating index.html...")

# Now load the client-side JavaScript logic from a dedicated JS file or template
with open('client_app.js', 'r', encoding='utf-8') as f:
    client_js_code = f.read()

with open('app_template.html', 'r', encoding='utf-8') as f:
    html_template = f.read()

# Replace placeholders
final_html = html_template.replace('__INDIA_GEO_SVG__', svg_json_str)
final_html = final_html.replace('__NATIONAL_OVERVIEW__', national_overview)
final_html = final_html.replace('__STATES_AND_UTS__', states_and_uts)
final_html = final_html.replace('__STATE_DISTRICTS__', state_districts)
final_html = final_html.replace('__CONSTITUENCIES__', constituencies)
final_html = final_html.replace('__POLITICIANS__', politicians)
final_html = final_html.replace('__POLITICAL_PARTIES__', political_parties)
final_html = final_html.replace('__PUBLIC_PROJECTS__', public_projects)
final_html = final_html.replace('__CLIENT_JS_CODE__', client_js_code)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(final_html)

# Also synchronize existing HTML file
with open('bharat_political_intelligence_map_first_indian_political_transparency_accountability_platform.html', 'w', encoding='utf-8') as f:
    f.write(final_html)

print("index.html and existing HTML synchronized successfully!")
