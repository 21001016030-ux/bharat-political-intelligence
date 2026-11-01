# Bharat Political Intelligence (BPI) 🇮🇳
### An Interactive, Map-First Civic Intelligence & Political Exploration Platform for India

**Bharat Political Intelligence** transforms official Indian political data, Form 26 election affidavits, parliamentary performance records, and MPLADS public development funding into a visually stunning, fun, and accessible civic discovery platform.

Live Website: **[https://21001016030-ux.github.io/bharat-political-intelligence/](https://21001016030-ux.github.io/bharat-political-intelligence/)**

---

## 🌟 Key Features

1. **Map-First Exploration ("Make India the Hero")**
   - High-fidelity authentic vector topology of India covering all 28 States & 8 Union Territories.
   - Smooth hover glowing previews with live constituency metrics.
   - 5 interactive map modes with custom palettes and legends:
     - 🗳️ **Political Map**: Ruling coalitions & party representation across States & UTs.
     - 💰 **Wealth Map**: Declared personal assets per elected representative (₹ Cr scale).
     - ⚖️ **Criminal Cases Map**: Declared criminal case rate (ADR benchmark classification).
     - 📈 **Election Map**: Turnout rates and Lok Sabha seat density.
     - 🏗️ **Development Map**: MPLADS public development expenditure utilisation rate.

2. **Progressive Geographic Drill-Down**
   - **India → State → District → Constituency → MP / MLA**.
   - **State View**: Donut chart of legislative assembly seats, clickable district cards, prominent representative rosters.
   - **District View**: Census population, literacy rates, and intersecting Lok Sabha PCs with cross-district boundary overlap notes (e.g., Hisar PC covering Hisar, Jind, and Bhiwani).
   - **Constituency View**: 2024 Election result, vote shares, winning margins, historical representation timeline (2009–2024), and Census development indicators.

3. **Modern Politician Dossier Profile**
   - Modern profile modal (not a boring government table).
   - 6 detailed tabs:
     - **Overview**: Core snapshot (Net assets, liabilities, income, education, profession).
     - **Wealth & Assets**: Form 26 breakdown (Bank deposits, stocks/bonds, agricultural land, residential/commercial properties), self vs spouse vs dependents assets.
     - **Legal Records**: Strict neutral disclosures (FIR/case number, court, IPC & BNS legal sections, charge status, neutral disclaimer: *An FIR or pending trial is not a conviction*).
     - **Elections**: 2024 results, vote margins, historical electoral victories.
     - **Performance**: Attendance % (with ministerial exemption note where applicable), questions asked, debates, private member bills, and MPLADS progress bar.
     - **Sources**: Direct clickable links to original Form 26 affidavits, ADR reports, and Digital Sansad.

4. **Fun Discovery Suite**
   - **✨ Who Represents Me?**: 3-step interactive finder (State → District → Constituency → instant MP & MLA cards).
   - **⚖️ Politician Comparison Arena**: Side-by-side selection of two politicians with comparative tables and radar chart.
   - **📈 Wealth Trajectory Timeline**: Animated ECharts timeline of declared assets across election affidavits (2009, 2014, 2019, 2024).
   - **✨ Curious Civic Discoveries**: Rotating, source-backed insights on crorepati MPs, women representation, and split electoral anomalies.
   - **🔗 Shareable URL Routing**: Direct hash links (`#politician=ID`, `#state=HR`, `#discover`) with instant link copying and animated toast feedback.

5. **Design System & Performance**
   - Dark & Light mode toggle with smooth transitions.
   - Tailwind CSS, Google Inter & JetBrains Mono typography.
   - Fully client-side, zero paid API dependencies, 100% free-tier hosting on GitHub Pages.

---

## 🏛️ Primary Data Authorities

All information presented on Bharat Political Intelligence is sourced from official public records:
- **Election Commission of India (ECI):** Candidate Form 26 self-sworn affidavits, delimited constituency boundaries, and certified election results ([eci.gov.in](https://www.eci.gov.in)).
- **Association for Democratic Reforms (ADR) & MyNeta:** Structured candidate asset, liability, and criminal case disclosures ([adrindia.org](https://adrindia.org)).
- **Digital Sansad & PRS Legislative Research:** Parliamentary attendance, legislative questions, debates, and private member bills ([sansad.in](https://sansad.in)).
- **Ministry of Statistics and Programme Implementation (MoSPI):** eSAKSHI MPLADS physical works and expenditure tracking ([pib.gov.in](https://www.pib.gov.in)).

---

## ⚖️ Legal Safeguards & Neutrality Notice

- **Strict Legal Distinction:** Charges framed or pending investigations are explicitly labeled as *Pending Trial*; an FIR or charge sheet is never portrayed as a conviction.
- **Zero Subjective Scoring:** The platform does not generate subjective politician "grades", "ranks", or "scores".
- **DPDP Act Compliant:** Respects all public disclosure standards established under Section 33A of the Representation of the People Act, 1951.

---

## 🚀 Local Development

To run the platform locally:
```bash
# Clone the repository
git clone https://github.com/21001016030-ux/bharat-political-intelligence.git
cd bharat-political-intelligence

# Serve using any static file server
python -m http.server 8000
# Open http://localhost:8000 in your browser
```

---

## 📄 License

Open-source civic software released under the MIT License.
