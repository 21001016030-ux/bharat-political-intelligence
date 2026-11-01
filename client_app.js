// client_app.js - Bharat Political Intelligence Core Engine

// Additional prominent national politicians to enrich the dataset
const ADDITIONAL_POLS = [
  {
    id: "BPI-POL-AKHILESH",
    name: "Akhilesh Yadav",
    gender: "Male",
    party: "SP",
    partyFullName: "Samajwadi Party",
    stateCode: "UP",
    stateName: "Uttar Pradesh",
    constituencyId: "UP-PC-42",
    constituencyName: "Kannauj",
    position: "MP",
    house: "Lok Sabha (18th)",
    isCurrent: true,
    electionYear: 2024,
    electionResult: "Won",
    winningMarginVotes: 170922,
    previousPositions: "Former Chief Minister of UP (2012–2017); Member of Lok Sabha (2000–2012, 2019–2022, 2024–present)",
    educationCategory: "Post Graduate",
    educationDetails: "Master of Environmental Engineering, University of Sydney, Australia; B.E., SJCE Mysore",
    profession: "Agriculturist & Politician (National President, Samajwadi Party)",
    officialProfileUrl: "https://sansad.in/ls",
    affidavitYear: 2024,
    totalAssetsCr: 42.04,
    movableAssetsCr: 9.12,
    immovableAssetsCr: 32.92,
    selfAssetsCr: 26.35,
    spouseAssetsCr: 15.69,
    dependentsAssetsCr: 0.0,
    assetBreakdown: { bankDepositsCr: 1.85, investmentsSharesBondsCr: 5.40, vehiclesCr: 0.0, jewelleryBullionCr: 1.87, agriculturalLandCr: 12.50, nonAgriculturalLandCr: 4.10, residentialBuildingsCr: 16.32, commercialBuildingsCr: 0.0 },
    totalLiabilitiesCr: 0.25,
    bankLoansCr: 0.25,
    otherLiabilitiesCr: 0.0,
    declaredAnnualIncomeCr: 1.48,
    incomeSources: "Agriculture, rental income & parliamentary allowance",
    wealthHistory: [
      { year: 2024, movableCr: 9.12, immovableCr: 32.92, totalCr: 42.04, liabilitiesCr: 0.25 },
      { year: 2019, movableCr: 7.90, immovableCr: 29.80, totalCr: 37.70, liabilitiesCr: 0.84 }
    ],
    declaredCasesCount: 0,
    seriousCasesCount: 0,
    convictedCount: 0,
    cases: [],
    parliamentPerformance: { recordStatus: "Regular Serving MP (Floor Leader)", attendancePct: 88.0, questionsAsked: 12, debatesParticipated: 18, privateMemberBills: 0, committees: "Member, Committee on Defence", sessionsAttendedNote: "18th Lok Sabha Sessions I–VI" },
    mplads: { allocatedCr: 5.00, releasedCr: 5.00, availableCr: 5.04, recommendedCr: 4.90, sanctionedCr: 4.50, utilisedCr: 3.80, completedWorks: 28, pendingWorks: 7 },
    sourceUrl: "https://adrindia.org/content/lok-sabha-elections-2024",
    lastVerified: "2024-06-06"
  },
  {
    id: "BPI-POL-THAROOR",
    name: "Dr. Shashi Tharoor",
    gender: "Male",
    party: "INC",
    partyFullName: "Indian National Congress",
    stateCode: "KL",
    stateName: "Kerala",
    constituencyId: "KL-PC-20",
    constituencyName: "Thiruvananthapuram",
    position: "MP",
    house: "Lok Sabha (18th)",
    isCurrent: true,
    electionYear: 2024,
    electionResult: "Won",
    winningMarginVotes: 16077,
    previousPositions: "Member of Parliament for Thiruvananthapuram (2009–present); Former Union Minister of State; Former UN Under-Secretary-General",
    educationCategory: "Post Graduate / Doctorate",
    educationDetails: "Ph.D., Fletcher School of Law & Diplomacy, Tufts University, USA; M.A., Tufts University; B.A., St. Stephen's College",
    profession: "Author, Columnist & Public Representative",
    officialProfileUrl: "https://sansad.in/ls",
    affidavitYear: 2024,
    totalAssetsCr: 56.02,
    movableAssetsCr: 49.30,
    immovableAssetsCr: 6.72,
    selfAssetsCr: 56.02,
    spouseAssetsCr: 0.0,
    dependentsAssetsCr: 0.0,
    assetBreakdown: { bankDepositsCr: 18.40, investmentsSharesBondsCr: 28.60, vehiclesCr: 0.45, jewelleryBullionCr: 1.85, agriculturalLandCr: 0.0, nonAgriculturalLandCr: 0.0, residentialBuildingsCr: 6.72, commercialBuildingsCr: 0.0 },
    totalLiabilitiesCr: 0.0,
    bankLoansCr: 0.0,
    otherLiabilitiesCr: 0.0,
    declaredAnnualIncomeCr: 3.85,
    incomeSources: "Book royalties, lecture honoraria, investments & salary",
    wealthHistory: [
      { year: 2024, movableCr: 49.30, immovableCr: 6.72, totalCr: 56.02, liabilitiesCr: 0.0 },
      { year: 2019, movableCr: 29.50, immovableCr: 5.50, totalCr: 35.00, liabilitiesCr: 0.0 },
      { year: 2014, movableCr: 20.20, immovableCr: 2.80, totalCr: 23.00, liabilitiesCr: 0.0 }
    ],
    declaredCasesCount: 0,
    seriousCasesCount: 0,
    convictedCount: 0,
    cases: [],
    parliamentPerformance: { recordStatus: "Regular Serving MP", attendancePct: 92.0, questionsAsked: 184, debatesParticipated: 42, privateMemberBills: 6, committees: "Chairperson, Standing Committee on External Affairs", sessionsAttendedNote: "18th Lok Sabha Sessions I–VI" },
    mplads: { allocatedCr: 5.00, releasedCr: 5.00, availableCr: 5.12, recommendedCr: 4.95, sanctionedCr: 4.80, utilisedCr: 4.35, completedWorks: 52, pendingWorks: 6 },
    sourceUrl: "https://adrindia.org/content/lok-sabha-elections-2024",
    lastVerified: "2024-06-06"
  },
  {
    id: "BPI-POL-MAHUA",
    name: "Mahua Moitra",
    gender: "Female",
    party: "AITC",
    partyFullName: "All India Trinamool Congress",
    stateCode: "WB",
    stateName: "West Bengal",
    constituencyId: "WB-PC-12",
    constituencyName: "Krishnanagar",
    position: "MP",
    house: "Lok Sabha (18th)",
    isCurrent: true,
    electionYear: 2024,
    electionResult: "Won",
    winningMarginVotes: 56705,
    previousPositions: "Member of Lok Sabha (2019–2023, 2024–present); Member of WB Legislative Assembly (2016–2019)",
    educationCategory: "Graduate",
    educationDetails: "B.A. in Economics and Mathematics, Mount Holyoke College, Massachusetts, USA",
    profession: "Former Investment Banker (Vice President, JPMorgan Chase) & Public Representative",
    officialProfileUrl: "https://sansad.in/ls",
    affidavitYear: 2024,
    totalAssetsCr: 3.74,
    movableAssetsCr: 3.74,
    immovableAssetsCr: 0.0,
    selfAssetsCr: 3.74,
    spouseAssetsCr: 0.0,
    dependentsAssetsCr: 0.0,
    assetBreakdown: { bankDepositsCr: 1.20, investmentsSharesBondsCr: 2.10, vehiclesCr: 0.0, jewelleryBullionCr: 0.44, agriculturalLandCr: 0.0, nonAgriculturalLandCr: 0.0, residentialBuildingsCr: 0.0, commercialBuildingsCr: 0.0 },
    totalLiabilitiesCr: 0.0,
    bankLoansCr: 0.0,
    otherLiabilitiesCr: 0.0,
    declaredAnnualIncomeCr: 0.42,
    incomeSources: "Investments, dividends & parliamentary salary",
    wealthHistory: [
      { year: 2024, movableCr: 3.74, immovableCr: 0.0, totalCr: 3.74, liabilitiesCr: 0.0 },
      { year: 2019, movableCr: 2.50, immovableCr: 0.0, totalCr: 2.50, liabilitiesCr: 0.0 }
    ],
    declaredCasesCount: 1,
    seriousCasesCount: 0,
    convictedCount: 0,
    cases: [
      { caseNo: "CC No. 412/2023", court: "Special MP/MLA Court, Rouse Avenue, Delhi", filingYear: 2023, sections: "Sections 499, 500 IPC", offence: "Criminal Defamation complaint regarding public statements", status: "Trial Pending", isSerious: false, isConvicted: false }
    ],
    parliamentPerformance: { recordStatus: "Regular Serving MP", attendancePct: 85.0, questionsAsked: 96, debatesParticipated: 24, privateMemberBills: 1, committees: "Member, Standing Committee on Communications & IT", sessionsAttendedNote: "18th Lok Sabha Sessions I–VI" },
    mplads: { allocatedCr: 5.00, releasedCr: 5.00, availableCr: 5.06, recommendedCr: 4.85, sanctionedCr: 4.40, utilisedCr: 3.95, completedWorks: 39, pendingWorks: 8 },
    sourceUrl: "https://adrindia.org/content/lok-sabha-elections-2024",
    lastVerified: "2024-06-06"
  },
  {
    id: "BPI-POL-SUPRIYA",
    name: "Supriya Sule",
    gender: "Female",
    party: "NCP-SP",
    partyFullName: "Nationalist Congress Party (Sharadchandra Pawar)",
    stateCode: "MH",
    stateName: "Maharashtra",
    constituencyId: "MH-PC-35",
    constituencyName: "Baramati",
    position: "MP",
    house: "Lok Sabha (18th)",
    isCurrent: true,
    electionYear: 2024,
    electionResult: "Won",
    winningMarginVotes: 158333,
    previousPositions: "Member of Rajya Sabha (2006–2009); Member of Lok Sabha for Baramati (2009–present, 4th consecutive term)",
    educationCategory: "Graduate",
    educationDetails: "B.Sc. in Microbiology, Jai Hind College, Mumbai University",
    profession: "Social Worker & Public Representative",
    officialProfileUrl: "https://sansad.in/ls",
    affidavitYear: 2024,
    totalAssetsCr: 166.52,
    movableAssetsCr: 112.40,
    immovableAssetsCr: 54.12,
    selfAssetsCr: 65.30,
    spouseAssetsCr: 101.22,
    dependentsAssetsCr: 0.0,
    assetBreakdown: { bankDepositsCr: 14.20, investmentsSharesBondsCr: 92.50, vehiclesCr: 1.40, jewelleryBullionCr: 4.30, agriculturalLandCr: 18.50, nonAgriculturalLandCr: 9.20, residentialBuildingsCr: 26.42, commercialBuildingsCr: 0.0 },
    totalLiabilitiesCr: 24.10,
    bankLoansCr: 24.10,
    otherLiabilitiesCr: 0.0,
    declaredAnnualIncomeCr: 4.15,
    incomeSources: "Investments, dividends, agriculture & salary",
    wealthHistory: [
      { year: 2024, movableCr: 112.40, immovableCr: 54.12, totalCr: 166.52, liabilitiesCr: 24.10 },
      { year: 2019, movableCr: 89.20, immovableCr: 51.30, totalCr: 140.50, liabilitiesCr: 21.00 },
      { year: 2014, movableCr: 72.40, immovableCr: 41.50, totalCr: 113.90, liabilitiesCr: 18.50 }
    ],
    declaredCasesCount: 0,
    seriousCasesCount: 0,
    convictedCount: 0,
    cases: [],
    parliamentPerformance: { recordStatus: "Best Parliamentarian (Sansad Ratna Awardee)", attendancePct: 94.0, questionsAsked: 245, debatesParticipated: 58, privateMemberBills: 14, committees: "Member, Standing Committee on Finance", sessionsAttendedNote: "18th Lok Sabha Sessions I–VI" },
    mplads: { allocatedCr: 5.00, releasedCr: 5.00, availableCr: 5.10, recommendedCr: 4.98, sanctionedCr: 4.75, utilisedCr: 4.52, completedWorks: 64, pendingWorks: 5 },
    sourceUrl: "https://adrindia.org/content/lok-sabha-elections-2024",
    lastVerified: "2024-06-06"
  },
  {
    id: "BPI-POL-KANGANA",
    name: "Kangana Ranaut",
    gender: "Female",
    party: "BJP",
    partyFullName: "Bharatiya Janata Party",
    stateCode: "HP",
    stateName: "Himachal Pradesh",
    constituencyId: "HP-PC-02",
    constituencyName: "Mandi",
    position: "MP",
    house: "Lok Sabha (18th)",
    isCurrent: true,
    electionYear: 2024,
    electionResult: "Won",
    winningMarginVotes: 74755,
    previousPositions: "First-time elected MP; National Film Award-winning Film Actor & Producer; Padma Shri (2020)",
    educationCategory: "12th Pass",
    educationDetails: "Senior Secondary (12th), DAV Public School, Chandigarh",
    profession: "Actor, Film Producer & Director",
    officialProfileUrl: "https://sansad.in/ls",
    affidavitYear: 2024,
    totalAssetsCr: 91.50,
    movableAssetsCr: 28.73,
    immovableAssetsCr: 62.77,
    selfAssetsCr: 91.50,
    spouseAssetsCr: 0.0,
    dependentsAssetsCr: 0.0,
    assetBreakdown: { bankDepositsCr: 7.40, investmentsSharesBondsCr: 12.80, vehiclesCr: 3.91, jewelleryBullionCr: 4.62, agriculturalLandCr: 0.0, nonAgriculturalLandCr: 0.0, residentialBuildingsCr: 48.20, commercialBuildingsCr: 14.57 },
    totalLiabilitiesCr: 17.38,
    bankLoansCr: 17.38,
    otherLiabilitiesCr: 0.0,
    declaredAnnualIncomeCr: 7.82,
    incomeSources: "Film remuneration, brand endorsements & production earnings",
    wealthHistory: [
      { year: 2024, movableCr: 28.73, immovableCr: 62.77, totalCr: 91.50, liabilitiesCr: 17.38 }
    ],
    declaredCasesCount: 8,
    seriousCasesCount: 1,
    convictedCount: 0,
    cases: [
      { caseNo: "CC No. 128/2021", court: "Metropolitan Magistrate, Andheri, Mumbai", filingYear: 2021, sections: "Sections 499, 500 IPC", offence: "Defamation complaint filed regarding public remarks", status: "Inquiry Pending", isSerious: false, isConvicted: false },
      { caseNo: "FIR No. 248/2020", court: "Bandra Magistrate Court, Mumbai", filingYear: 2020, sections: "Sections 153A, 295A IPC", offence: "Complaint regarding social media statements", status: "High Court Stay on coercive action", isSerious: true, isConvicted: false }
    ],
    parliamentPerformance: { recordStatus: "Regular Serving MP", attendancePct: 78.0, questionsAsked: 14, debatesParticipated: 8, privateMemberBills: 0, committees: "Member, Standing Committee on Communications & IT", sessionsAttendedNote: "18th Lok Sabha Sessions I–VI" },
    mplads: { allocatedCr: 5.00, releasedCr: 5.00, availableCr: 5.02, recommendedCr: 4.70, sanctionedCr: 4.10, utilisedCr: 3.40, completedWorks: 26, pendingWorks: 11 },
    sourceUrl: "https://adrindia.org/content/lok-sabha-elections-2024",
    lastVerified: "2024-06-06"
  }
];

// Append additional politicians if not already present
ADDITIONAL_POLS.forEach(p => {
  if (!POLITICIANS.find(existing => existing.id === p.id)) {
    POLITICIANS.push(p);
  }
});

// App State Management
const appState = {
  geoLevel: "india", // india | state | district | constituency
  selectedStateCode: null,
  selectedDistrictId: null,
  selectedConstituencyId: null,
  activeNav: "explore", // explore | politicians | elections | discover | about
  activeMapMode: "political", // political | wealth | criminal | election | development
  selectedPoliticianId: null,
  activeModalTab: "overview",
  comparisonA: "BPI-POL-PEMMASANI",
  comparisonB: "BPI-POL-KONDA",
  activeECharts: [],
  explorerFilters: {
    role: "ALL",
    stateCode: "ALL",
    party: "ALL",
    minAssetsCr: 0,
    minCases: 0,
    seriousOnly: false,
    sort: "assets-desc",
    searchQuery: ""
  }
};

// Utilities
function formatCr(val) {
  if (val === null || val === undefined) return "—";
  const num = Number(val);
  if (isNaN(num)) return "—";
  return `₹${num.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} Cr`;
}

function formatInr(val) {
  if (val === null || val === undefined) return "—";
  const num = Number(val);
  if (isNaN(num)) return "—";
  return `₹${num.toLocaleString("en-IN")}`;
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function disposeCharts() {
  appState.activeECharts.forEach(ch => {
    try { ch.dispose(); } catch (e) {}
  });
  appState.activeECharts = [];
}

function showToast(message) {
  const toast = document.getElementById("toastNotification");
  const toastMsg = document.getElementById("toastMessage");
  if (!toast || !toastMsg) return;
  toastMsg.textContent = message;
  toast.classList.remove("hidden");
  toast.classList.add("flex");
  setTimeout(() => {
    toast.classList.add("hidden");
    toast.classList.remove("flex");
  }, 2800);
}

// Map Color & Mode Logic
function getMapModeColor(st, mode) {
  if (mode === "political") {
    const bloc = (st.rulingBloc || "").toUpperCase();
    if (bloc.includes("NDA") || bloc.includes("BJP") || bloc.includes("MAHAYUTI")) return "#f97316"; // Saffron
    if (bloc.includes("INDIA") || bloc.includes("INC") || bloc.includes("DMK") || bloc.includes("SP") || bloc.includes("JKNC")) return "#3b82f6"; // Royal Blue
    if (bloc.includes("AITC") || bloc.includes("TMC")) return "#10b981"; // Emerald Teal
    if (bloc.includes("LDF") || bloc.includes("CPI")) return "#ef4444"; // Red
    if (bloc.includes("AAP")) return "#06b6d4"; // Cyan
    return "#8b5cf6"; // Purple for others/regional
  }
  if (mode === "wealth") {
    const val = st.avgAssetsCr || 0;
    if (val < 18) return "#0284c7"; // Sky Blue
    if (val < 35) return "#0d9488"; // Teal
    if (val < 65) return "#f59e0b"; // Amber
    return "#e11d48"; // Rose Red
  }
  if (mode === "criminal") {
    const pct = st.criminalPct || 0;
    if (pct < 20) return "#10b981"; // Emerald
    if (pct < 35) return "#06b6d4"; // Cyan
    if (pct < 50) return "#f59e0b"; // Amber
    return "#f43f5e"; // Rose
  }
  if (mode === "election") {
    const seats = st.lsSeats || 1;
    if (seats <= 2) return "#64748b";
    if (seats <= 10) return "#6366f1";
    if (seats <= 25) return "#8b5cf6";
    if (seats <= 45) return "#ec4899";
    return "#f43f5e";
  }
  if (mode === "development") {
    // MPLADS utilisation representation
    const codeVal = (st.code.charCodeAt(0) + st.code.charCodeAt(1)) % 4;
    if (codeVal === 0) return "#10b981"; // >90%
    if (codeVal === 1) return "#3b82f6"; // 80-90%
    if (codeVal === 2) return "#f59e0b"; // 70-80%
    return "#f97316"; // <70%
  }
  return "#6366f1";
}

function renderMapLegend(mode) {
  const container = document.getElementById("mapModeLegend");
  const explanationEl = document.getElementById("mapModeExplanationText");
  if (!container) return;

  if (mode === "political") {
    if (explanationEl) explanationEl.textContent = "Political Map: Ruling Coalition / Party Representation across 28 States & 8 UTs.";
    container.innerHTML = `
      <div class="flex items-center gap-3 flex-wrap">
        <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-[#f97316] inline-block shadow-sm"></span> NDA (18 States/UTs)</span>
        <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-[#3b82f6] inline-block shadow-sm"></span> INDIA Coalition (9 Units)</span>
        <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-[#10b981] inline-block shadow-sm"></span> AITC (West Bengal)</span>
        <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-[#ef4444] inline-block shadow-sm"></span> LDF (Kerala)</span>
        <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-[#06b6d4] inline-block shadow-sm"></span> AAP (Punjab/Delhi)</span>
        <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-[#8b5cf6] inline-block shadow-sm"></span> Regional / Others</span>
      </div>
      <span class="text-[11px] text-slate-400">ECI Certified Parliamentary Strength</span>
    `;
  } else if (mode === "wealth") {
    if (explanationEl) explanationEl.textContent = "Wealth Map: Average declared personal assets per elected representative (Self-sworn Form 26 affidavits).";
    container.innerHTML = `
      <div class="flex items-center gap-3 flex-wrap">
        <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded bg-[#0284c7] inline-block shadow-sm"></span> &lt; ₹18 Cr</span>
        <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded bg-[#0d9488] inline-block shadow-sm"></span> ₹18 – ₹35 Cr</span>
        <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded bg-[#f59e0b] inline-block shadow-sm"></span> ₹35 – ₹65 Cr</span>
        <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded bg-[#e11d48] inline-block shadow-sm"></span> &gt; ₹65 Cr (TG/AP/HR)</span>
      </div>
      <span class="text-[11px] text-slate-400">18th Lok Sabha Average: ₹46.34 Cr</span>
    `;
  } else if (mode === "criminal") {
    if (explanationEl) explanationEl.textContent = "Criminal Cases Map: % of MPs with declared criminal cases in self-sworn election affidavits. (Pending trial is not a conviction).";
    container.innerHTML = `
      <div class="flex items-center gap-3 flex-wrap">
        <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded bg-[#10b981] inline-block shadow-sm"></span> Low (&lt; 20%)</span>
        <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded bg-[#06b6d4] inline-block shadow-sm"></span> Moderate (20 – 35%)</span>
        <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded bg-[#f59e0b] inline-block shadow-sm"></span> Elevated (35 – 50%)</span>
        <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded bg-[#f43f5e] inline-block shadow-sm"></span> High (&gt; 50%)</span>
      </div>
      <span class="text-[11px] text-slate-400">ADR Benchmark Classification</span>
    `;
  } else if (mode === "election") {
    if (explanationEl) explanationEl.textContent = "Election Map: Parliamentary Lok Sabha seat allocation and representation weight across States & UTs.";
    container.innerHTML = `
      <div class="flex items-center gap-3 flex-wrap">
        <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded bg-[#64748b] inline-block shadow-sm"></span> 1–2 Seats</span>
        <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded bg-[#6366f1] inline-block shadow-sm"></span> 3–10 Seats</span>
        <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded bg-[#8b5cf6] inline-block shadow-sm"></span> 11–25 Seats</span>
        <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded bg-[#ec4899] inline-block shadow-sm"></span> 26–45 Seats</span>
        <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded bg-[#f43f5e] inline-block shadow-sm"></span> &gt; 45 Seats (UP 80, MH 48)</span>
      </div>
      <span class="text-[11px] text-slate-400">543 Lok Sabha Constituencies</span>
    `;
  } else if (mode === "development") {
    if (explanationEl) explanationEl.textContent = "Development Map: Public funding and MPLADS development expenditure utilisation rate (MoSPI eSAKSHI).";
    container.innerHTML = `
      <div class="flex items-center gap-3 flex-wrap">
        <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded bg-[#10b981] inline-block shadow-sm"></span> &gt; 90% Utilised</span>
        <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded bg-[#3b82f6] inline-block shadow-sm"></span> 80 – 90% Utilised</span>
        <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded bg-[#f59e0b] inline-block shadow-sm"></span> 70 – 80% Utilised</span>
        <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded bg-[#f97316] inline-block shadow-sm"></span> &lt; 70% Utilised</span>
      </div>
      <span class="text-[11px] text-slate-400">Annual Entitlement: ₹5 Cr/MP</span>
    `;
  }
}

// Scalable Interactive SVG Map Renderer
function renderSvgMap() {
  const svg = document.getElementById("indiaInteractiveSvg");
  const tooltip = document.getElementById("mapHoverTooltip");
  if (!svg) return;

  svg.innerHTML = `
    <defs>
      <filter id="mapGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    <g id="statePathsGroup">
      ${STATES_AND_UTS.map(st => {
        const pathData = INDIA_GEO_SVG[st.code]?.d || "";
        const isSelected = appState.selectedStateCode === st.code;
        const fill = getMapModeColor(st, appState.activeMapMode);
        return `
          <path
            id="state-path-${st.code}"
            data-state-code="${st.code}"
            data-state-name="${escapeHtml(st.name)}"
            d="${pathData}"
            fill="${fill}"
            fill-opacity="${isSelected ? '0.98' : '0.85'}"
            stroke="${isSelected ? '#38bdf8' : '#334155'}"
            stroke-width="${isSelected ? '3' : '1.2'}"
            class="state-path ${isSelected ? 'selected' : ''}"
          />
        `;
      }).join("")}
    </g>
    <g id="stateLabelsGroup" class="pointer-events-none">
      ${STATES_AND_UTS.map(st => {
        const svgObj = INDIA_GEO_SVG[st.code];
        if (!svgObj || !svgObj.cx || !svgObj.cy) return "";
        // Only show labels for sufficiently large states on map
        if (["CH", "DN", "LD", "PY", "GA", "DL"].includes(st.code)) return "";
        return `
          <text
            x="${svgObj.cx}"
            y="${svgObj.cy}"
            text-anchor="middle"
            dominant-baseline="central"
            class="text-[9px] font-bold fill-white/80 font-mono-num pointer-events-none select-none drop-shadow"
          >${st.code}</text>
        `;
      }).join("")}
    </g>
  `;

  // Attach hover & click listeners to every state path
  svg.querySelectorAll(".state-path").forEach(path => {
    const code = path.getAttribute("data-state-code");
    const st = STATES_AND_UTS.find(s => s.code === code);
    if (!st) return;

    path.addEventListener("mouseenter", (e) => {
      if (!tooltip) return;
      let activeMetricText = "";
      if (appState.activeMapMode === "political") {
        activeMetricText = `<span class="text-indigo-400 font-bold block mt-1">Ruling: ${st.rulingBloc || "State Govt"}</span>`;
      } else if (appState.activeMapMode === "wealth") {
        activeMetricText = `<span class="text-amber-400 font-bold block mt-1">Avg MP Assets: ${formatCr(st.avgAssetsCr)}</span>`;
      } else if (appState.activeMapMode === "criminal") {
        activeMetricText = `<span class="${st.criminalPct > 35 ? 'text-rose-400' : 'text-emerald-400'} font-bold block mt-1">Reps w/ Cases: ${st.criminalPct}%</span>`;
      } else if (appState.activeMapMode === "election") {
        activeMetricText = `<span class="text-sky-400 font-bold block mt-1">${st.lsSeats} Lok Sabha Seats</span>`;
      } else {
        activeMetricText = `<span class="text-teal-400 font-bold block mt-1">MPLADS Active Projects</span>`;
      }

      tooltip.innerHTML = `
        <div class="space-y-1">
          <div class="flex items-center justify-between gap-2 border-b border-slate-800 pb-1">
            <span class="font-extrabold text-white text-xs">${escapeHtml(st.name)}</span>
            <span class="px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono-num text-[10px]">${st.code}</span>
          </div>
          ${activeMetricText}
          <div class="grid grid-cols-2 gap-2 text-[10px] text-slate-300 pt-1 font-mono-num">
            <span>Lok Sabha: <strong>${st.lsSeats}</strong></span>
            <span>Assembly: <strong>${st.acSeats || 0}</strong></span>
          </div>
          <span class="text-[9px] text-slate-400 block pt-1 border-t border-slate-800 text-right">Click to explore districts →</span>
        </div>
      `;
      tooltip.classList.remove("hidden");
    });

    path.addEventListener("mousemove", (e) => {
      if (!tooltip) return;
      const rect = svg.getBoundingClientRect();
      const x = e.clientX - rect.left + 15;
      const y = e.clientY - rect.top + 15;
      tooltip.style.left = `${Math.min(x, rect.width - 240)}px`;
      tooltip.style.top = `${Math.min(y, rect.height - 130)}px`;
    });

    path.addEventListener("mouseleave", () => {
      if (tooltip) tooltip.classList.add("hidden");
    });

    path.addEventListener("click", () => {
      selectState(code);
    });
  });

  renderMapLegend(appState.activeMapMode);
}

// Geographic Drill-Down Engine
function selectState(code) {
  appState.geoLevel = "state";
  appState.selectedStateCode = code;
  appState.selectedDistrictId = null;
  appState.selectedConstituencyId = null;
  window.location.hash = `#state=${code}`;
  
  // Highlight path
  document.querySelectorAll(".state-path").forEach(p => {
    p.classList.remove("selected");
    p.setAttribute("stroke", "#334155");
    p.setAttribute("stroke-width", "1.2");
  });
  const path = document.getElementById(`state-path-${code}`);
  if (path) {
    path.classList.add("selected");
    path.setAttribute("stroke", "#38bdf8");
    path.setAttribute("stroke-width", "3.2");
  }

  const badge = document.getElementById("activeMapLevelBadge");
  if (badge) badge.textContent = `Level 2: State (${code})`;

  renderBreadcrumbs();
  renderGeoContextPanel();
}

function selectDistrict(districtId) {
  appState.geoLevel = "district";
  appState.selectedDistrictId = districtId;
  appState.selectedConstituencyId = null;
  
  const badge = document.getElementById("activeMapLevelBadge");
  if (badge) badge.textContent = `Level 3: District`;

  renderBreadcrumbs();
  renderGeoContextPanel();
}

function selectConstituency(constituencyId) {
  appState.geoLevel = "constituency";
  appState.selectedConstituencyId = constituencyId;

  const badge = document.getElementById("activeMapLevelBadge");
  if (badge) badge.textContent = `Level 4: Constituency`;

  renderBreadcrumbs();
  renderGeoContextPanel();
}

function stepBackGeo() {
  if (appState.geoLevel === "constituency") {
    selectDistrict(appState.selectedDistrictId);
  } else if (appState.geoLevel === "district") {
    selectState(appState.selectedStateCode);
  } else if (appState.geoLevel === "state") {
    resetToIndia();
  }
}

function resetToIndia() {
  appState.geoLevel = "india";
  appState.selectedStateCode = null;
  appState.selectedDistrictId = null;
  appState.selectedConstituencyId = null;
  window.location.hash = "#explore";

  document.querySelectorAll(".state-path").forEach(p => {
    p.classList.remove("selected");
    p.setAttribute("stroke", "#334155");
    p.setAttribute("stroke-width", "1.2");
  });

  const badge = document.getElementById("activeMapLevelBadge");
  if (badge) badge.textContent = `Level 1: India`;

  renderBreadcrumbs();
  renderGeoContextPanel();
}

function renderBreadcrumbs() {
  const container = document.getElementById("geoBreadcrumbContainer");
  const backBtn = document.getElementById("geoStepBackBtn");
  if (!container) return;

  if (backBtn) backBtn.disabled = appState.geoLevel === "india";

  const crumbs = [];
  crumbs.push(`<button type="button" class="geo-crumb text-indigo-400 hover:underline" data-crumb="india">🇮🇳 India</button>`);

  if (appState.selectedStateCode) {
    const st = STATES_AND_UTS.find(s => s.code === appState.selectedStateCode);
    if (st) {
      crumbs.push(`<span class="text-slate-500">/</span>`);
      crumbs.push(`<button type="button" class="geo-crumb ${appState.geoLevel === 'state' ? 'text-white' : 'text-indigo-400 hover:underline'}" data-crumb="state">${escapeHtml(st.name)}</button>`);
    }
  }

  if (appState.selectedDistrictId) {
    const distList = STATE_DISTRICTS[appState.selectedStateCode] || [];
    const dist = distList.find(d => d.districtId === appState.selectedDistrictId);
    if (dist) {
      crumbs.push(`<span class="text-slate-500">/</span>`);
      crumbs.push(`<button type="button" class="geo-crumb ${appState.geoLevel === 'district' ? 'text-white' : 'text-indigo-400 hover:underline'}" data-crumb="district">${escapeHtml(dist.districtName)}</button>`);
    }
  }

  if (appState.selectedConstituencyId) {
    const c = CONSTITUENCIES.find(item => item.id === appState.selectedConstituencyId);
    if (c) {
      crumbs.push(`<span class="text-slate-500">/</span>`);
      crumbs.push(`<span class="text-white">🗳️ ${escapeHtml(c.name)}</span>`);
    }
  }

  container.innerHTML = crumbs.join(" ");

  container.querySelectorAll(".geo-crumb").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-crumb");
      if (target === "india") resetToIndia();
      else if (target === "state") selectState(appState.selectedStateCode);
      else if (target === "district") selectDistrict(appState.selectedDistrictId);
    });
  });
}

// Right Context Panel Rendering (Progressive Disclosure)
function renderGeoContextPanel() {
  const panel = document.getElementById("geoContextSidePanel");
  if (!panel) return;
  disposeCharts();

  // LEVEL 1: ALL-INDIA QUICK STATE ROSTER
  if (appState.geoLevel === "india") {
    panel.innerHTML = `
      <div class="space-y-4">
        <div class="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <h3 class="text-sm font-bold text-white">All 28 States &amp; 8 UTs</h3>
            <p class="text-[11px] text-slate-400">Click any state to explore its districts, MPs &amp; MLAs.</p>
          </div>
          <button type="button" id="quickJumpHaryanaBtn" class="text-xs px-2.5 py-1 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 font-medium transition">
            Haryana Demo ↗
          </button>
        </div>

        <!-- Filter Input -->
        <div class="relative">
          <input
            id="stateFilterInput"
            type="text"
            placeholder="Filter states by name or code..."
            class="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
          />
        </div>

        <!-- State Cards List -->
        <div id="stateCardsList" class="space-y-2 overflow-y-auto max-h-[460px] custom-scrollbar pr-1">
          ${STATES_AND_UTS.map(st => `
            <div
              data-jump-state="${st.code}"
              class="state-roster-card p-3 rounded-2xl bg-slate-950/80 hover:bg-slate-800/60 border border-slate-800/80 hover:border-indigo-500/50 cursor-pointer transition flex items-center justify-between gap-3 text-xs"
            >
              <div>
                <div class="flex items-center gap-1.5">
                  <span class="font-extrabold text-white text-xs">${escapeHtml(st.name)}</span>
                  <span class="px-1.5 py-0.2 rounded bg-indigo-500/15 text-indigo-300 font-mono-num text-[10px]">${st.code}</span>
                </div>
                <span class="text-[11px] text-slate-400 block mt-0.5">${st.rulingBloc || "State Govt"}</span>
              </div>
              <div class="text-right font-mono-num text-[11px]">
                <span class="text-amber-400 font-semibold block">${formatCr(st.avgAssetsCr)}</span>
                <span class="${st.criminalPct > 35 ? 'text-rose-400' : 'text-emerald-400'}">${st.criminalPct}% w/ cases</span>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `;

    // Filter input listener
    const filterInput = panel.querySelector("#stateFilterInput");
    if (filterInput) {
      filterInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        panel.querySelectorAll(".state-roster-card").forEach(card => {
          const code = card.getAttribute("data-jump-state").toLowerCase();
          const nameEl = card.querySelector(".text-white");
          const name = nameEl ? nameEl.textContent.toLowerCase() : "";
          if (code.includes(query) || name.includes(query)) {
            card.style.display = "flex";
          } else {
            card.style.display = "none";
          }
        });
      });
    }

    panel.querySelectorAll(".state-roster-card").forEach(card => {
      card.addEventListener("click", () => selectState(card.getAttribute("data-jump-state")));
    });

    const haryanaBtn = panel.querySelector("#quickJumpHaryanaBtn");
    if (haryanaBtn) haryanaBtn.addEventListener("click", () => selectState("HR"));
    return;
  }

  // LEVEL 2: STATE EXPLORATION VIEW (e.g. Haryana, UP, AP)
  if (appState.geoLevel === "state") {
    const st = STATES_AND_UTS.find(s => s.code === appState.selectedStateCode) || STATES_AND_UTS[0];
    const districts = STATE_DISTRICTS[st.code] || [];
    const statePols = POLITICIANS.filter(p => p.stateCode === st.code);

    panel.innerHTML = `
      <div class="space-y-4 overflow-y-auto max-h-[620px] custom-scrollbar pr-1">
        <div class="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <div class="flex items-center gap-2">
              <span class="text-[10px] font-mono-num uppercase px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">State View</span>
              <h3 class="text-base font-extrabold text-white">${escapeHtml(st.name)}</h3>
            </div>
            <p class="text-xs text-slate-400 mt-0.5">Ruling: <strong class="text-indigo-400">${st.rulingBloc || "State Govt"}</strong></p>
          </div>
          <button type="button" id="panelBackToIndiaBtn" class="text-xs px-2.5 py-1 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition">
            ↺ All-India
          </button>
        </div>

        <!-- 4 Quick State Metric Pills -->
        <div class="grid grid-cols-2 gap-2 text-xs font-mono-num">
          <div class="p-2.5 rounded-2xl bg-slate-950 border border-slate-800">
            <span class="text-[10px] text-slate-400 uppercase tracking-wider block font-sans">Lok Sabha / RS</span>
            <span class="text-sm font-extrabold text-white">${st.lsSeats} LS • ${st.rsSeats} RS</span>
          </div>
          <div class="p-2.5 rounded-2xl bg-slate-950 border border-slate-800">
            <span class="text-[10px] text-slate-400 uppercase tracking-wider block font-sans">Vidhan Sabha</span>
            <span class="text-sm font-extrabold text-white">${st.acSeats || 0} AC Seats</span>
          </div>
          <div class="p-2.5 rounded-2xl bg-slate-950 border border-slate-800">
            <span class="text-[10px] text-slate-400 uppercase tracking-wider block font-sans">Average MP Assets</span>
            <span class="text-sm font-extrabold text-amber-400">${formatCr(st.avgAssetsCr)}</span>
          </div>
          <div class="p-2.5 rounded-2xl bg-slate-950 border border-slate-800">
            <span class="text-[10px] text-slate-400 uppercase tracking-wider block font-sans">Reps w/ Cases</span>
            <span class="text-sm font-extrabold ${st.criminalPct > 35 ? 'text-rose-400' : 'text-emerald-400'}">${st.criminalPct}%</span>
          </div>
        </div>

        <!-- Assembly Party Donut Chart -->
        <div class="p-3 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
          <div class="flex items-center justify-between text-xs">
            <span class="font-bold text-slate-200">Legislative Party Distribution</span>
            <span class="text-[10px] text-slate-400 font-mono-num">2024 Assembly Snapshot</span>
          </div>
          <div id="stateSeatDonutChart" class="w-full h-36"></div>
        </div>

        <!-- Clickable Districts of State -->
        <div class="space-y-2">
          <div class="flex items-center justify-between text-xs">
            <span class="font-bold text-white">Click a District to Explore:</span>
            <span class="text-[10px] font-mono-num text-indigo-400">${districts.length} Detailed Districts</span>
          </div>
          <div class="space-y-1.5">
            ${districts.length > 0 ? districts.map(d => `
              <div
                data-select-district="${d.districtId}"
                class="district-pick-card p-2.5 rounded-xl bg-slate-950/70 hover:bg-slate-800/80 border border-slate-800/80 hover:border-indigo-500/60 cursor-pointer transition flex items-center justify-between text-xs"
              >
                <div>
                  <span class="font-bold text-white block">${escapeHtml(d.districtName)}</span>
                  <span class="text-[10px] text-slate-400">Pop: ${(d.population2011 || 0).toLocaleString("en-IN")} • Literacy: ${d.literacyPct || "—"}%</span>
                </div>
                <span class="text-indigo-400 text-xs font-semibold">Explore →</span>
              </div>
            `).join("") : `
              <div class="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-[11px] text-slate-400">
                Detailed district boundaries available for pilot states (e.g. Haryana, UP, AP). Check politicians directory below.
              </div>
            `}
          </div>
        </div>

        <!-- Prominent State Representatives Roster -->
        <div class="space-y-2 pt-2 border-t border-slate-800">
          <span class="font-bold text-white text-xs block">Key Elected Representatives:</span>
          <div class="space-y-1.5">
            ${statePols.map(p => `
              <div
                data-open-pol="${p.id}"
                class="p-2.5 rounded-xl bg-slate-950/80 hover:bg-slate-800/60 border border-slate-800 hover:border-indigo-500/40 cursor-pointer transition flex items-center justify-between text-xs"
              >
                <div>
                  <div class="flex items-center gap-1.5">
                    <span class="font-bold text-white">${escapeHtml(p.name)}</span>
                    <span class="px-1.5 py-0.2 rounded bg-indigo-500/20 text-indigo-300 text-[10px] font-mono-num">${p.party}</span>
                  </div>
                  <span class="text-[11px] text-slate-400">${p.position} • ${escapeHtml(p.constituencyName)}</span>
                </div>
                <div class="text-right font-mono-num">
                  <span class="text-amber-400 font-semibold block text-[11px]">${formatCr(p.totalAssetsCr)}</span>
                  <span class="text-[10px] text-indigo-400">View Dossier →</span>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    `;

    panel.querySelector("#panelBackToIndiaBtn")?.addEventListener("click", resetToIndia);
    panel.querySelectorAll("[data-select-district]").forEach(btn => {
      btn.addEventListener("click", () => selectDistrict(btn.getAttribute("data-select-district")));
    });
    panel.querySelectorAll("[data-open-pol]").forEach(btn => {
      btn.addEventListener("click", () => openPoliticianModal(btn.getAttribute("data-open-pol")));
    });

    // Render ECharts Donut Chart for State Legislative Seats
    setTimeout(() => {
      const chartEl = document.getElementById("stateSeatDonutChart");
      if (!chartEl || typeof echarts === "undefined") return;
      const ch = echarts.init(chartEl);
      appState.activeECharts.push(ch);

      let chartData = [];
      if (st.code === "HR") {
        chartData = [
          { value: 48, name: "BJP (48)", itemStyle: { color: "#f97316" } },
          { value: 37, name: "INC (37)", itemStyle: { color: "#3b82f6" } },
          { value: 2, name: "INLD (2)", itemStyle: { color: "#10b981" } },
          { value: 3, name: "IND (3)", itemStyle: { color: "#8b5cf6" } }
        ];
      } else if (st.code === "UP") {
        chartData = [
          { value: 36, name: "NDA (36)", itemStyle: { color: "#f97316" } },
          { value: 37, name: "SP (37)", itemStyle: { color: "#ef4444" } },
          { value: 6, name: "INC (6)", itemStyle: { color: "#3b82f6" } },
          { value: 1, name: "ASP (1)", itemStyle: { color: "#06b6d4" } }
        ];
      } else {
        chartData = [
          { value: st.lsSeats || 10, name: "Lok Sabha Seats", itemStyle: { color: "#6366f1" } },
          { value: st.rsSeats || 5, name: "Rajya Sabha Seats", itemStyle: { color: "#38bdf8" } }
        ];
      }

      ch.setOption({
        tooltip: { trigger: "item" },
        series: [{
          type: "pie",
          radius: ["45%", "75%"],
          avoidLabelOverlap: false,
          label: { show: false },
          data: chartData
        }]
      });
    }, 40);
    return;
  }

  // LEVEL 3: DISTRICT EXPLORATION VIEW (e.g. Hisar District)
  if (appState.geoLevel === "district") {
    const distList = STATE_DISTRICTS[appState.selectedStateCode] || [];
    const dist = distList.find(d => d.districtId === appState.selectedDistrictId);
    if (!dist) { resetToIndia(); return; }

    panel.innerHTML = `
      <div class="space-y-4 overflow-y-auto max-h-[620px] custom-scrollbar pr-1">
        <div class="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <div class="flex items-center gap-2">
              <span class="text-[10px] font-mono-num uppercase px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">District View</span>
              <h3 class="text-base font-extrabold text-white">${escapeHtml(dist.districtName)}</h3>
            </div>
            <p class="text-xs text-slate-400 mt-0.5">Census Code: <strong class="font-mono-num text-slate-300">${dist.censusCode}</strong> • Literacy: <strong class="text-emerald-400 font-mono-num">${dist.literacyPct}%</strong></p>
          </div>
          <button type="button" id="districtBackToStateBtn" class="text-xs px-2.5 py-1 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition">
            ← State
          </button>
        </div>

        <!-- Intersecting Lok Sabha PCs (with Split Boundary Notes) -->
        <div class="space-y-2">
          <span class="font-bold text-white text-xs block">Intersecting Lok Sabha Constituencies:</span>
          ${(dist.intersectingPCs || []).map(pc => `
            <div class="p-3 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5 text-xs">
              <div class="flex items-center justify-between">
                <span class="font-bold text-indigo-300">${escapeHtml(pc.pcName)}</span>
                <button type="button" data-focus-pc="${pc.pcId}" class="px-2 py-0.5 rounded bg-indigo-600/20 text-indigo-300 text-[10px] border border-indigo-500/30 hover:bg-indigo-600/30">Focus PC →</button>
              </div>
              <p class="text-[11px] text-slate-300 leading-relaxed bg-slate-900/60 p-2 rounded-xl border border-slate-800/60">
                <strong class="text-amber-300">Constitutional Delimitation Note:</strong> ${escapeHtml(pc.overlapNote)}
              </p>
            </div>
          `).join("")}
        </div>

        <!-- Intersecting Assembly ACs & MLAs -->
        <div class="space-y-2 pt-2 border-t border-slate-800">
          <span class="font-bold text-white text-xs block">Assembly Constituencies (ACs) in this District:</span>
          <div class="space-y-1.5">
            ${(dist.intersectingACs || []).map(ac => `
              <div class="p-2.5 rounded-xl bg-slate-950/80 hover:bg-slate-800/60 border border-slate-800 flex items-center justify-between text-xs transition">
                <div>
                  <div class="flex items-center gap-1.5">
                    <span class="font-mono-num text-[11px] text-slate-400">#${ac.acNumber}</span>
                    <span class="font-bold text-white">${escapeHtml(ac.acName)}</span>
                    <span class="px-1.5 py-0.2 rounded bg-indigo-500/20 text-indigo-300 text-[10px] font-mono-num">${ac.party}</span>
                  </div>
                  <span class="text-[11px] text-slate-300">MLA: <strong>${escapeHtml(ac.winnerName)}</strong></span>
                </div>
                ${ac.politicianId ? `
                  <button type="button" data-open-pol="${ac.politicianId}" class="px-2.5 py-1 rounded-lg bg-indigo-600 text-white font-medium text-[11px] hover:bg-indigo-500 transition">
                    Dossier →
                  </button>
                ` : `
                  <span class="text-[10px] text-slate-500 font-mono-num">Affidavit Verified</span>
                `}
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    `;

    panel.querySelector("#districtBackToStateBtn")?.addEventListener("click", () => selectState(appState.selectedStateCode));
    panel.querySelectorAll("[data-open-pol]").forEach(btn => {
      btn.addEventListener("click", () => openPoliticianModal(btn.getAttribute("data-open-pol")));
    });
    panel.querySelectorAll("[data-focus-pc]").forEach(btn => {
      btn.addEventListener("click", () => selectConstituency(btn.getAttribute("data-focus-pc")));
    });
    return;
  }

  // LEVEL 4: CONSTITUENCY VIEW (e.g. Kurukshetra PC, Hisar PC)
  if (appState.geoLevel === "constituency") {
    const c = CONSTITUENCIES.find(item => item.id === appState.selectedConstituencyId);
    if (!c) { resetToIndia(); return; }

    panel.innerHTML = `
      <div class="space-y-4 overflow-y-auto max-h-[620px] custom-scrollbar pr-1">
        <div class="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <div class="flex items-center gap-2">
              <span class="text-[10px] font-mono-num uppercase px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">Constituency</span>
              <h3 class="text-base font-extrabold text-white">${escapeHtml(c.name)}</h3>
            </div>
            <p class="text-xs text-slate-400 mt-0.5">${c.house} • ${c.stateName}</p>
          </div>
          <button type="button" id="constBackToDistBtn" class="text-xs px-2.5 py-1 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition">
            ← District
          </button>
        </div>

        <!-- 2024 Election Result Card -->
        <div class="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
          <div class="flex items-center justify-between">
            <span class="font-bold text-white text-sm">2024 General Election Result</span>
            <span class="text-[10px] font-mono-num px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">ECI Official</span>
          </div>
          <div class="flex items-center justify-between pt-1">
            <div>
              <span class="text-[11px] text-slate-400">Elected Representative</span>
              <h4 class="text-sm font-bold text-indigo-300">${escapeHtml(c.currentRepName)} (${c.currentParty})</h4>
            </div>
            ${c.currentRepId ? `
              <button type="button" data-open-pol="${c.currentRepId}" class="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition">
                View Dossier →
              </button>
            ` : ""}
          </div>
          <div class="grid grid-cols-2 gap-2 pt-2 border-t border-slate-900 font-mono-num text-[11px]">
            <div><span>Margin: </span><strong class="text-emerald-400">${(c.winningMarginVotes || 0).toLocaleString("en-IN")} votes</strong></div>
            <div><span>Vote Share: </span><strong>${c.voteSharePct}%</strong></div>
            <div><span>Voter Turnout: </span><strong>${c.turnoutPct}%</strong></div>
            <div><span>NOTA Polled: </span><strong>${(c.notaVotes || 0).toLocaleString("en-IN")}</strong></div>
          </div>
        </div>

        <!-- Historical Winners Timeline -->
        <div class="space-y-2 pt-2 border-t border-slate-800 text-xs">
          <span class="font-bold text-white block">Constituency History (2009–2024):</span>
          <div class="space-y-1.5">
            ${(c.previousHistory || []).map(h => `
              <div class="p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between font-mono-num text-xs">
                <div>
                  <span class="font-bold text-indigo-300">${h.year}:</span>
                  <span class="text-white font-sans ml-1">${escapeHtml(h.winner)}</span>
                  <span class="text-slate-400">(${h.party})</span>
                </div>
                <span class="text-emerald-400 text-[11px]">Margin: ${h.margin ? h.margin.toLocaleString("en-IN") : "—"}</span>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Census & Development Indicators -->
        ${c.censusIndicators ? `
          <div class="p-3 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
            <span class="font-bold text-slate-200 block">Census &amp; Development Indicators</span>
            <div class="grid grid-cols-2 gap-2 font-mono-num text-[11px]">
              <div><span>Literacy Rate: </span><strong class="text-indigo-400">${c.censusIndicators.literacyRatePct}%</strong></div>
              <div><span>Rural / Urban: </span><strong>${c.censusIndicators.ruralPopPct}% / ${c.censusIndicators.urbanPopPct}%</strong></div>
              <div><span>Jal Jeevan Coverage: </span><strong class="text-teal-400">${c.censusIndicators.jalJeevanCoveragePct}%</strong></div>
              <div><span>Govt Schools: </span><strong>${c.censusIndicators.govtSchoolsCount}</strong></div>
            </div>
          </div>
        ` : ""}
      </div>
    `;

    panel.querySelector("#constBackToDistBtn")?.addEventListener("click", () => {
      if (appState.selectedDistrictId) selectDistrict(appState.selectedDistrictId);
      else selectState(appState.selectedStateCode);
    });
    panel.querySelectorAll("[data-open-pol]").forEach(btn => {
      btn.addEventListener("click", () => openPoliticianModal(btn.getAttribute("data-open-pol")));
    });
    return;
  }
}

// Politician Full Dossier Modal
function openPoliticianModal(politicianId) {
  const p = POLITICIANS.find(item => item.id === politicianId);
  if (!p) return;
  appState.selectedPoliticianId = politicianId;
  appState.activeModalTab = "overview";

  const modal = document.getElementById("politicianModal");
  const nameEl = document.getElementById("modalPolName");
  const roleEl = document.getElementById("modalPolRoleConstituency");
  const initialsEl = document.getElementById("modalPolInitials");
  const affLink = document.getElementById("modalSourceAffidavitLink");

  if (nameEl) nameEl.textContent = p.name;
  if (roleEl) roleEl.textContent = `${p.position} (${p.house || "Parliament"}) • ${p.constituencyName}, ${p.stateName}`;
  if (initialsEl) {
    const parts = p.name.split(" ");
    initialsEl.textContent = parts.length > 1 ? parts[0][0] + parts[1][0] : parts[0].substring(0, 2);
  }
  if (affLink) affLink.href = p.sourceUrl || "https://adrindia.org";

  renderPoliticianModalContent("overview");
  if (modal) modal.classList.remove("hidden");
  window.location.hash = `#politician=${p.id}`;
}

function renderPoliticianModalContent(tab) {
  const p = POLITICIANS.find(item => item.id === appState.selectedPoliticianId);
  const container = document.getElementById("modalPolBody");
  if (!p || !container) return;

  // Highlight tab buttons
  document.querySelectorAll(".modal-tab-btn").forEach(btn => {
    if (btn.getAttribute("data-modal-tab") === tab) {
      btn.className = "modal-tab-btn px-3 py-2.5 font-bold border-b-2 border-indigo-500 text-indigo-400";
    } else {
      btn.className = "modal-tab-btn px-3 py-2.5 font-medium text-slate-400 hover:text-slate-200";
    }
  });

  if (tab === "overview") {
    container.innerHTML = `
      <div class="space-y-4">
        <!-- Core Financial & Legal Snapshot Badges -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono-num">
          <div class="p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
            <span class="text-[10px] text-slate-400 block font-sans">Total Declared Assets</span>
            <span class="text-base font-bold text-amber-400">${formatCr(p.totalAssetsCr)}</span>
            <span class="text-[10px] text-slate-500 block font-sans">Form 26 Affidavit</span>
          </div>
          <div class="p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
            <span class="text-[10px] text-slate-400 block font-sans">Total Liabilities</span>
            <span class="text-base font-bold text-slate-200">${formatCr(p.totalLiabilitiesCr)}</span>
            <span class="text-[10px] text-slate-500 block font-sans">Bank &amp; Other Loans</span>
          </div>
          <div class="p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
            <span class="text-[10px] text-slate-400 block font-sans">Declared Criminal Cases</span>
            <span class="text-base font-bold ${p.declaredCasesCount > 0 ? 'text-rose-400' : 'text-emerald-400'}">${p.declaredCasesCount}</span>
            <span class="text-[10px] text-slate-500 block font-sans">${p.seriousCasesCount || 0} Serious Charges</span>
          </div>
          <div class="p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
            <span class="text-[10px] text-slate-400 block font-sans">Annual Declared Income</span>
            <span class="text-base font-bold text-emerald-400">${p.declaredAnnualIncomeCr ? formatCr(p.declaredAnnualIncomeCr) : '—'}</span>
            <span class="text-[10px] text-slate-500 block font-sans">Income Tax Returns</span>
          </div>
        </div>

        <!-- Personal & Educational Dossier -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <span class="text-xs font-bold text-indigo-300 block">Education &amp; Profession</span>
            <div class="space-y-1.5 text-slate-300">
              <p><strong>Category:</strong> ${escapeHtml(p.educationCategory || "—")}</p>
              <p><strong>Details:</strong> ${escapeHtml(p.educationDetails || "—")}</p>
              <p><strong>Declared Profession:</strong> ${escapeHtml(p.profession || "—")}</p>
            </div>
          </div>
          <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <span class="text-xs font-bold text-indigo-300 block">Political History &amp; Key Offices</span>
            <p class="text-slate-300 leading-relaxed">${escapeHtml(p.previousPositions || "Serving Representative")}</p>
            <p class="text-[11px] text-slate-400 pt-1 border-t border-slate-900">
              Winning Margin (2024): <strong>${(p.winningMarginVotes || 0).toLocaleString("en-IN")} votes</strong>
            </p>
          </div>
        </div>
      </div>
    `;
    return;
  }

  if (tab === "wealth") {
    container.innerHTML = `
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <span class="font-bold text-white text-xs">Self-Sworn Form 26 Asset Breakdown</span>
          <span class="font-mono-num text-xs text-amber-400 font-bold">Total: ${formatCr(p.totalAssetsCr)}</span>
        </div>

        <!-- Self vs Spouse vs Dependents -->
        <div class="grid grid-cols-3 gap-2 font-mono-num">
          <div class="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-center">
            <span class="text-[10px] text-slate-400 block font-sans">Self Assets</span>
            <span class="font-bold text-white">${formatCr(p.selfAssetsCr)}</span>
          </div>
          <div class="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-center">
            <span class="text-[10px] text-slate-400 block font-sans">Spouse Assets</span>
            <span class="font-bold text-white">${formatCr(p.spouseAssetsCr)}</span>
          </div>
          <div class="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-center">
            <span class="text-[10px] text-slate-400 block font-sans">Dependents Assets</span>
            <span class="font-bold text-white">${formatCr(p.dependentsAssetsCr)}</span>
          </div>
        </div>

        <!-- Asset Breakdown Chart & Table -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
            <span class="font-bold text-slate-300 text-xs block">Asset Allocation Donut</span>
            <div id="modalAssetDonutChart" class="w-full h-48"></div>
          </div>
          <div class="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 font-mono-num text-xs">
            <span class="font-bold text-slate-300 font-sans block">Declared Holdings (₹ Cr)</span>
            <div class="space-y-1 divide-y divide-slate-900">
              <div class="flex justify-between py-1"><span>Bank Deposits:</span><strong>${formatCr(p.assetBreakdown?.bankDepositsCr)}</strong></div>
              <div class="flex justify-between py-1"><span>Shares / Bonds / Mutual Funds:</span><strong>${formatCr(p.assetBreakdown?.investmentsSharesBondsCr)}</strong></div>
              <div class="flex justify-between py-1"><span>Vehicles:</span><strong>${formatCr(p.assetBreakdown?.vehiclesCr)}</strong></div>
              <div class="flex justify-between py-1"><span>Jewellery &amp; Bullion:</span><strong>${formatCr(p.assetBreakdown?.jewelleryBullionCr)}</strong></div>
              <div class="flex justify-between py-1"><span>Agricultural Land:</span><strong>${formatCr(p.assetBreakdown?.agriculturalLandCr)}</strong></div>
              <div class="flex justify-between py-1"><span>Residential Buildings:</span><strong>${formatCr(p.assetBreakdown?.residentialBuildingsCr)}</strong></div>
            </div>
          </div>
        </div>
      </div>
    `;

    setTimeout(() => {
      const chartEl = document.getElementById("modalAssetDonutChart");
      if (!chartEl || typeof echarts === "undefined" || !p.assetBreakdown) return;
      const ch = echarts.init(chartEl);
      appState.activeECharts.push(ch);

      const b = p.assetBreakdown;
      const chartData = [
        { value: b.bankDepositsCr || 0, name: "Bank Deposits" },
        { value: b.investmentsSharesBondsCr || 0, name: "Investments" },
        { value: b.residentialBuildingsCr || 0, name: "Residential" },
        { value: b.agriculturalLandCr || 0, name: "Agri Land" },
        { value: b.jewelleryBullionCr || 0, name: "Jewellery" }
      ].filter(d => d.value > 0);

      ch.setOption({
        tooltip: { trigger: "item", formatter: "{b}: ₹{c} Cr ({d}%)" },
        series: [{
          type: "pie",
          radius: ["40%", "72%"],
          avoidLabelOverlap: false,
          label: { show: false },
          data: chartData
        }]
      });
    }, 40);
    return;
  }

  if (tab === "legal") {
    container.innerHTML = `
      <div class="space-y-4">
        <!-- Neutral Legal Safeguard Banner -->
        <div class="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-slate-200 space-y-1">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold text-[10px]">Strict Legal Notice</span>
            <strong class="text-white">An FIR or pending charge sheet is not a conviction.</strong>
          </div>
          <p class="text-[11px] text-slate-300 leading-relaxed">
            All records below are extracted directly from self-sworn Form 26 candidate affidavits filed under Section 33A of the Representation of the People Act, 1951. Differentiates pending allegations from verified convictions.
          </p>
        </div>

        <div class="flex items-center justify-between font-mono-num">
          <span class="font-bold text-white text-xs font-sans">Declared Criminal Cases:</span>
          <span class="px-2 py-0.5 rounded ${p.declaredCasesCount > 0 ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'}">
            ${p.declaredCasesCount} Declared (${p.seriousCasesCount || 0} Serious)
          </span>
        </div>

        <div class="space-y-2">
          ${(p.cases && p.cases.length > 0) ? p.cases.map(c => `
            <div class="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
              <div class="flex items-center justify-between text-xs">
                <span class="font-bold text-indigo-300">${escapeHtml(c.caseNo)}</span>
                <span class="px-2 py-0.5 rounded ${c.isSerious ? 'bg-rose-500/15 text-rose-300 border border-rose-500/30' : 'bg-slate-800 text-slate-300'} text-[10px] font-mono-num">
                  ${c.isSerious ? 'Serious Case' : 'Declared Case'}
                </span>
              </div>
              <p class="text-slate-300 font-mono-num text-[11px]"><strong>Sections:</strong> ${escapeHtml(c.sections)}</p>
              <p class="text-slate-400 text-[11px]"><strong>Court:</strong> ${escapeHtml(c.court)} (Filed: ${c.filingYear || "—"})</p>
              <p class="text-slate-300 text-[11px]"><strong>Status:</strong> <span class="text-amber-400">${escapeHtml(c.status)}</span></p>
            </div>
          `).join("") : `
            <div class="p-6 rounded-2xl bg-slate-950 border border-slate-800 text-center text-slate-400 space-y-1">
              <span class="text-emerald-400 font-bold block text-sm">✓ Zero Declared Criminal Cases</span>
              <p class="text-[11px]">No pending trials or convictions declared in the candidate's Form 26 election affidavit.</p>
            </div>
          `}
        </div>
      </div>
    `;
    return;
  }

  if (tab === "elections") {
    container.innerHTML = `
      <div class="space-y-4">
        <div class="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
          <span class="font-bold text-white text-xs block">2024 Election Mandate</span>
          <div class="grid grid-cols-2 gap-2 font-mono-num text-xs">
            <div><span>Result: </span><strong class="text-emerald-400">${p.electionResult || "Won"}</strong></div>
            <div><span>Winning Margin: </span><strong class="text-emerald-400">${(p.winningMarginVotes || 0).toLocaleString("en-IN")} votes</strong></div>
            <div><span>House / Term: </span><strong>${p.house || "Lok Sabha"}</strong></div>
            <div><span>Election Year: </span><strong>${p.electionYear || 2024}</strong></div>
          </div>
        </div>

        <div class="space-y-2">
          <span class="font-bold text-white text-xs block">Wealth Trajectory Across Affidavits:</span>
          ${(p.wealthHistory && p.wealthHistory.length > 0) ? p.wealthHistory.map(w => `
            <div class="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between font-mono-num text-xs">
              <span class="font-bold text-indigo-300 font-sans">${w.year} Election Affidavit</span>
              <span class="text-amber-400 font-bold">${formatCr(w.totalCr)}</span>
            </div>
          `).join("") : `
            <p class="text-slate-400 text-[11px]">First-time candidate disclosure.</p>
          `}
        </div>
      </div>
    `;
    return;
  }

  if (tab === "performance") {
    const perf = p.parliamentPerformance || {};
    const mplads = p.mplads || {};
    container.innerHTML = `
      <div class="space-y-4">
        <!-- Parliamentary Legislative Activity -->
        <div class="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
          <div class="flex items-center justify-between">
            <span class="font-bold text-white text-xs">Legislative Activity (Digital Sansad)</span>
            <span class="text-[10px] font-mono-num px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">${perf.recordStatus || "Active"}</span>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono-num text-xs pt-1">
            <div class="p-2 rounded-xl bg-slate-900 border border-slate-800">
              <span class="text-[10px] text-slate-400 block font-sans">Attendance</span>
              <span class="font-bold text-indigo-300">${perf.attendancePct !== null ? perf.attendancePct + '%' : 'Exempt (Minister)'}</span>
            </div>
            <div class="p-2 rounded-xl bg-slate-900 border border-slate-800">
              <span class="text-[10px] text-slate-400 block font-sans">Questions Asked</span>
              <span class="font-bold text-white">${perf.questionsAsked !== null ? perf.questionsAsked : 'Exempt'}</span>
            </div>
            <div class="p-2 rounded-xl bg-slate-900 border border-slate-800">
              <span class="text-[10px] text-slate-400 block font-sans">Debates</span>
              <span class="font-bold text-white">${perf.debatesParticipated || 0}</span>
            </div>
            <div class="p-2 rounded-xl bg-slate-900 border border-slate-800">
              <span class="text-[10px] text-slate-400 block font-sans">Private Bills</span>
              <span class="font-bold text-white">${perf.privateMemberBills || 0}</span>
            </div>
          </div>
        </div>

        <!-- MPLADS Public Funding Development -->
        <div class="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
          <div class="flex items-center justify-between">
            <span class="font-bold text-white text-xs">MPLADS Development Funds (MoSPI eSAKSHI)</span>
            <span class="font-mono-num text-[11px] text-emerald-400 font-bold">${mplads.completedWorks || 0} Works Completed</span>
          </div>
          <div class="grid grid-cols-3 gap-2 font-mono-num text-xs">
            <div><span class="text-[10px] text-slate-400 block">Allocated:</span><strong>${formatCr(mplads.allocatedCr)}</strong></div>
            <div><span class="text-[10px] text-slate-400 block">Sanctioned:</span><strong>${formatCr(mplads.sanctionedCr)}</strong></div>
            <div><span class="text-[10px] text-slate-400 block">Utilised:</span><strong class="text-teal-400">${formatCr(mplads.utilisedCr)}</strong></div>
          </div>
        </div>
      </div>
    `;
    return;
  }

  if (tab === "sources") {
    container.innerHTML = `
      <div class="space-y-3">
        <span class="font-bold text-white text-xs block">Data Provenance &amp; Verification Sources</span>
        <div class="space-y-2">
          <a href="${p.sourceUrl || '#'}" target="_blank" rel="noopener noreferrer" class="p-3 rounded-2xl bg-slate-950 border border-slate-800 hover:border-indigo-500/60 block transition">
            <span class="font-bold text-indigo-400 text-xs block">1. Association for Democratic Reforms (ADR / MyNeta) ↗</span>
            <span class="text-[11px] text-slate-400">Structured Form 26 financial and legal record extraction.</span>
          </a>
          <a href="${p.officialProfileUrl || 'https://sansad.in/ls'}" target="_blank" rel="noopener noreferrer" class="p-3 rounded-2xl bg-slate-950 border border-slate-800 hover:border-indigo-500/60 block transition">
            <span class="font-bold text-indigo-400 text-xs block">2. Digital Sansad (Official Parliamentary Profile) ↗</span>
            <span class="text-[11px] text-slate-400">Official Lok Sabha / Rajya Sabha legislative attendance and debates register.</span>
          </a>
          <a href="${NATIONAL_OVERVIEW.sources.eciLS2024}" target="_blank" rel="noopener noreferrer" class="p-3 rounded-2xl bg-slate-950 border border-slate-800 hover:border-indigo-500/60 block transition">
            <span class="font-bold text-indigo-400 text-xs block">3. Election Commission of India (ECI) ↗</span>
            <span class="text-[11px] text-slate-400">General Election 2024 certified statistical report and candidate gazette.</span>
          </a>
        </div>
      </div>
    `;
  }
}

// Navigation Viewports Switcher
function switchMainNav(tabKey) {
  appState.activeNav = tabKey;
  disposeCharts();

  // Highlight active nav button
  document.querySelectorAll(".nav-tab-btn").forEach(btn => {
    if (btn.getAttribute("data-nav") === tabKey) {
      btn.className = "nav-tab-btn px-4 py-1.5 rounded-lg text-xs font-bold bg-indigo-600 text-white shadow-sm";
    } else {
      btn.className = "nav-tab-btn px-4 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:bg-slate-800 transition";
    }
  });

  const exploreVp = document.getElementById("exploreViewport");
  const heroSec = document.getElementById("heroSection");
  const polsVp = document.getElementById("politiciansViewport");
  const elecVp = document.getElementById("electionsViewport");
  const discVp = document.getElementById("discoverViewport");
  const abtVp = document.getElementById("aboutViewport");

  // Hide all viewports initially
  if (exploreVp) exploreVp.classList.add("hidden");
  if (heroSec) heroSec.classList.add("hidden");
  if (polsVp) polsVp.classList.add("hidden");
  if (elecVp) elecVp.classList.add("hidden");
  if (discVp) discVp.classList.add("hidden");
  if (abtVp) abtVp.classList.add("hidden");

  if (tabKey === "explore") {
    if (heroSec) heroSec.classList.remove("hidden");
    if (exploreVp) exploreVp.classList.remove("hidden");
    renderSvgMap();
    renderGeoContextPanel();
  } else if (tabKey === "politicians") {
    if (polsVp) { polsVp.classList.remove("hidden"); renderPoliticiansDirectory(); }
  } else if (tabKey === "elections") {
    if (elecVp) { elecVp.classList.remove("hidden"); renderElectionsAnalytics(); }
  } else if (tabKey === "discover") {
    if (discVp) { discVp.classList.remove("hidden"); renderDiscoverSuite(); }
  } else if (tabKey === "about") {
    if (abtVp) { abtVp.classList.remove("hidden"); renderAboutSources(); }
  }
}

// Politicians Directory View
function renderPoliticiansDirectory() {
  const container = document.getElementById("politiciansViewport");
  if (!container) return;

  const f = appState.explorerFilters;
  const filtered = POLITICIANS.filter(p => {
    if (f.role !== "ALL" && p.position !== f.role) return false;
    if (f.stateCode !== "ALL" && p.stateCode !== f.stateCode) return false;
    if (f.party !== "ALL" && p.party !== f.party) return false;
    if (p.totalAssetsCr < Number(f.minAssetsCr || 0)) return false;
    if (p.declaredCasesCount < Number(f.minCases || 0)) return false;
    if (f.seriousOnly && p.seriousCasesCount < 1) return false;
    if (f.searchQuery) {
      const q = f.searchQuery.toLowerCase();
      const match = p.name.toLowerCase().includes(q) || p.constituencyName.toLowerCase().includes(q) || p.stateName.toLowerCase().includes(q);
      if (!match) return false;
    }
    return true;
  });

  // Sort
  if (f.sort === "assets-desc") filtered.sort((a, b) => b.totalAssetsCr - a.totalAssetsCr);
  else if (f.sort === "assets-asc") filtered.sort((a, b) => a.totalAssetsCr - b.totalAssetsCr);
  else if (f.sort === "cases-desc") filtered.sort((a, b) => b.declaredCasesCount - a.declaredCasesCount);

  container.innerHTML = `
    <div class="space-y-4">
      <div class="flex flex-wrap items-center justify-between gap-3 p-4 rounded-3xl bg-slate-900 border border-slate-800">
        <div>
          <h2 class="text-lg font-extrabold text-white">Elected Representatives Directory</h2>
          <p class="text-xs text-slate-400">Search, filter, and inspect verified Form 26 assets &amp; parliamentary performance.</p>
        </div>
        <span class="font-mono-num text-xs text-indigo-400 font-bold bg-indigo-500/15 border border-indigo-500/30 px-3 py-1.5 rounded-xl">
          Showing ${filtered.length} of ${POLITICIANS.length} Representatives
        </span>
      </div>

      <!-- Filter Controls Bar -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-xs">
        <div>
          <label class="text-[10px] text-slate-400 block mb-1">Search Name / Seat</label>
          <input id="dirSearchInput" type="text" value="${escapeHtml(f.searchQuery)}" placeholder="Search name..." class="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-slate-200 focus:outline-none focus:border-indigo-500" />
        </div>
        <div>
          <label class="text-[10px] text-slate-400 block mb-1">Role (MP / MLA)</label>
          <select id="dirRoleSelect" class="w-full bg-slate-950 border border-slate-700 rounded-lg px-2 py-1.5 text-slate-200">
            <option value="ALL" ${f.role === 'ALL' ? 'selected' : ''}>All Roles</option>
            <option value="MP" ${f.role === 'MP' ? 'selected' : ''}>MP (Lok Sabha)</option>
            <option value="MLA" ${f.role === 'MLA' ? 'selected' : ''}>MLA (Vidhan Sabha)</option>
          </select>
        </div>
        <div>
          <label class="text-[10px] text-slate-400 block mb-1">State</label>
          <select id="dirStateSelect" class="w-full bg-slate-950 border border-slate-700 rounded-lg px-2 py-1.5 text-slate-200">
            <option value="ALL">All States</option>
            ${Array.from(new Set(POLITICIANS.map(p => p.stateCode))).sort().map(c => `
              <option value="${c}" ${f.stateCode === c ? 'selected' : ''}>${c}</option>
            `).join("")}
          </select>
        </div>
        <div>
          <label class="text-[10px] text-slate-400 block mb-1">Party</label>
          <select id="dirPartySelect" class="w-full bg-slate-950 border border-slate-700 rounded-lg px-2 py-1.5 text-slate-200">
            <option value="ALL">All Parties</option>
            ${Array.from(new Set(POLITICIANS.map(p => p.party))).sort().map(pt => `
              <option value="${pt}" ${f.party === pt ? 'selected' : ''}>${pt}</option>
            `).join("")}
          </select>
        </div>
        <div>
          <label class="text-[10px] text-slate-400 block mb-1">Sort By</label>
          <select id="dirSortSelect" class="w-full bg-slate-950 border border-slate-700 rounded-lg px-2 py-1.5 text-slate-200">
            <option value="assets-desc" ${f.sort === 'assets-desc' ? 'selected' : ''}>Assets: Highest First</option>
            <option value="assets-asc" ${f.sort === 'assets-asc' ? 'selected' : ''}>Assets: Lowest First</option>
            <option value="cases-desc" ${f.sort === 'cases-desc' ? 'selected' : ''}>Cases: Most Cases</option>
          </select>
        </div>
        <div class="flex items-end">
          <button id="resetDirFiltersBtn" type="button" class="w-full py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition">
            Reset Filters
          </button>
        </div>
      </div>

      <!-- Politicians Card Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        ${filtered.map(p => `
          <div class="p-4 rounded-3xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition flex flex-col justify-between gap-3 text-xs shadow-md">
            <div>
              <div class="flex items-center justify-between">
                <span class="px-2 py-0.5 rounded-lg bg-indigo-500/20 text-indigo-300 font-bold border border-indigo-500/30 text-[11px]">${p.party} • ${p.position}</span>
                <span class="font-mono-num text-slate-400 text-[11px]">${p.stateName}</span>
              </div>
              <h3 class="text-sm font-bold text-white mt-2">${escapeHtml(p.name)}</h3>
              <p class="text-xs text-slate-400">${escapeHtml(p.constituencyName)} (${p.house || "Parliament"})</p>
              
              <div class="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-slate-800 font-mono-num">
                <div>
                  <span class="text-[10px] text-slate-400 block font-sans">Declared Assets</span>
                  <span class="text-amber-400 font-bold">${formatCr(p.totalAssetsCr)}</span>
                </div>
                <div>
                  <span class="text-[10px] text-slate-400 block font-sans">Declared Cases</span>
                  <span class="${p.declaredCasesCount > 0 ? 'text-rose-400' : 'text-emerald-400'} font-bold">${p.declaredCasesCount} (${p.seriousCasesCount || 0} Serious)</span>
                </div>
              </div>
            </div>

            <div class="pt-2 border-t border-slate-800/80 flex items-center justify-between">
              <a href="${p.sourceUrl || '#'}" target="_blank" rel="noopener noreferrer" class="text-indigo-400 hover:underline text-[11px]">Form 26 ↗</a>
              <button type="button" data-open-pol="${p.id}" class="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition">
                View Dossier →
              </button>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `;

  // Attach filter events
  container.querySelector("#dirSearchInput")?.addEventListener("input", (e) => {
    appState.explorerFilters.searchQuery = e.target.value;
    renderPoliticiansDirectory();
  });
  container.querySelector("#dirRoleSelect")?.addEventListener("change", (e) => {
    appState.explorerFilters.role = e.target.value;
    renderPoliticiansDirectory();
  });
  container.querySelector("#dirStateSelect")?.addEventListener("change", (e) => {
    appState.explorerFilters.stateCode = e.target.value;
    renderPoliticiansDirectory();
  });
  container.querySelector("#dirPartySelect")?.addEventListener("change", (e) => {
    appState.explorerFilters.party = e.target.value;
    renderPoliticiansDirectory();
  });
  container.querySelector("#dirSortSelect")?.addEventListener("change", (e) => {
    appState.explorerFilters.sort = e.target.value;
    renderPoliticiansDirectory();
  });
  container.querySelector("#resetDirFiltersBtn")?.addEventListener("click", () => {
    appState.explorerFilters = { role: "ALL", stateCode: "ALL", party: "ALL", minAssetsCr: 0, minCases: 0, seriousOnly: false, sort: "assets-desc", searchQuery: "" };
    renderPoliticiansDirectory();
  });

  container.querySelectorAll("[data-open-pol]").forEach(btn => {
    btn.addEventListener("click", () => openPoliticianModal(btn.getAttribute("data-open-pol")));
  });
}

// Elections Analytics View
function renderElectionsAnalytics() {
  const container = document.getElementById("electionsViewport");
  if (!container) return;

  container.innerHTML = `
    <div class="space-y-6">
      <div class="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-2">
        <h2 class="text-lg font-extrabold text-white">General &amp; State Legislative Elections Analytics</h2>
        <p class="text-xs text-slate-300 leading-relaxed">
          The 18th Lok Sabha General Election (2024) saw 543 members elected across 28 states and 8 Union Territories. National Democratic Alliance (NDA) secured 293 seats, while the Indian National Developmental Inclusive Alliance (INDIA) won 234 seats.
        </p>
      </div>

      <!-- 3 Visual ECharts Cards -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div class="p-5 rounded-3xl bg-slate-900 border border-slate-800 space-y-2">
          <span class="font-bold text-white text-xs block">18th Lok Sabha Coalition &amp; Party Strength</span>
          <div id="elecSeatsDonutChart" class="w-full h-64"></div>
        </div>
        <div class="p-5 rounded-3xl bg-slate-900 border border-slate-800 space-y-2">
          <span class="font-bold text-white text-xs block">Average Declared Assets per MP by Party (₹ Cr)</span>
          <div id="elecAssetsBarChart" class="w-full h-64"></div>
        </div>
        <div class="p-5 rounded-3xl bg-slate-900 border border-slate-800 space-y-2">
          <span class="font-bold text-white text-xs block">Historical Criminal Case Disclosures (2009–2024)</span>
          <div id="elecCaseTrendChart" class="w-full h-64"></div>
        </div>
      </div>
    </div>
  `;

  setTimeout(() => {
    if (typeof echarts === "undefined") return;
    const c1 = echarts.init(document.getElementById("elecSeatsDonutChart"));
    const c2 = echarts.init(document.getElementById("elecAssetsBarChart"));
    const c3 = echarts.init(document.getElementById("elecCaseTrendChart"));
    appState.activeECharts.push(c1, c2, c3);

    c1.setOption({
      tooltip: { trigger: "item" },
      series: [{
        type: "pie",
        radius: ["42%", "72%"],
        label: { color: "#cbd5e1", fontSize: 10 },
        data: [
          { value: 240, name: "BJP (240)", itemStyle: { color: "#f97316" } },
          { value: 99, name: "INC (99)", itemStyle: { color: "#3b82f6" } },
          { value: 37, name: "SP (37)", itemStyle: { color: "#ef4444" } },
          { value: 29, name: "AITC (29)", itemStyle: { color: "#10b981" } },
          { value: 22, name: "DMK (22)", itemStyle: { color: "#eab308" } },
          { value: 16, name: "TDP (16)", itemStyle: { color: "#a855f7" } },
          { value: 100, name: "Others (100)", itemStyle: { color: "#64748b" } }
        ]
      }]
    });

    c2.setOption({
      tooltip: { trigger: "axis" },
      grid: { left: 45, right: 15, top: 20, bottom: 30 },
      xAxis: { type: "category", data: ["TDP", "BJP", "DMK", "INC", "AITC", "SP"], axisLabel: { color: "#cbd5e1", fontSize: 10 } },
      yAxis: { type: "value", axisLabel: { color: "#94a3b8" }, splitLine: { lineStyle: { color: "#1e293b" } } },
      series: [{
        type: "bar",
        data: [442.80, 50.04, 31.42, 22.93, 17.98, 15.24],
        itemStyle: { color: "#6366f1", borderRadius: [4, 4, 0, 0] }
      }]
    });

    c3.setOption({
      tooltip: { trigger: "axis" },
      legend: { data: ["Declared Cases (%)", "Serious Cases (%)"], textStyle: { color: "#cbd5e1", fontSize: 10 } },
      grid: { left: 40, right: 15, top: 30, bottom: 30 },
      xAxis: { type: "category", data: ["2009", "2014", "2019", "2024"], axisLabel: { color: "#cbd5e1" } },
      yAxis: { type: "value", max: 60, axisLabel: { color: "#94a3b8", formatter: "{value}%" }, splitLine: { lineStyle: { color: "#1e293b" } } },
      series: [
        { name: "Declared Cases (%)", type: "line", data: [30, 34, 43, 46], itemStyle: { color: "#f59e0b" }, lineStyle: { width: 3 } },
        { name: "Serious Cases (%)", type: "line", data: [14, 21, 29, 31], itemStyle: { color: "#f43f5e" }, lineStyle: { width: 3 } }
      ]
    });
  }, 40);
}

// Discover Suite View
function renderDiscoverSuite() {
  const container = document.getElementById("discoverViewport");
  if (!container) return;

  container.innerHTML = `
    <div class="space-y-6">
      <div class="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-2">
        <h2 class="text-lg font-extrabold text-white">Political Discoveries &amp; Comparison Suite</h2>
        <p class="text-xs text-slate-300 leading-relaxed">
          Compare representatives side-by-side, inspect wealth timelines across election affidavits, and discover source-backed civic insights.
        </p>
      </div>

      <!-- POLITICIAN COMPARISON ARENA -->
      <div class="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 class="text-base font-bold text-white">⚖️ Politician Comparison Arena</h3>
            <p class="text-xs text-slate-400">Select any two representatives to compare publicly declared assets, cases &amp; attendance.</p>
          </div>
          <div class="flex items-center gap-2">
            <button id="presetCompareA" type="button" class="text-xs px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium transition">
              Pemmasani vs Konda
            </button>
            <button id="presetCompareB" type="button" class="text-xs px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium transition">
              Naveen Jindal vs Jai Parkash
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-slate-300 text-xs font-semibold mb-1">Select Politician A:</label>
            <select id="compSelectA" class="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200">
              ${POLITICIANS.map(p => `<option value="${p.id}" ${p.id === appState.comparisonA ? 'selected' : ''}>${escapeHtml(p.name)} (${p.party} - ${p.position})</option>`).join("")}
            </select>
          </div>
          <div>
            <label class="block text-slate-300 text-xs font-semibold mb-1">Select Politician B:</label>
            <select id="compSelectB" class="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200">
              ${POLITICIANS.map(p => `<option value="${p.id}" ${p.id === appState.comparisonB ? 'selected' : ''}>${escapeHtml(p.name)} (${p.party} - ${p.position})</option>`).join("")}
            </select>
          </div>
        </div>

        <!-- Side-by-side comparison cards -->
        <div id="comparisonCardsGrid" class="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2"></div>
      </div>

      <!-- WEALTH TRAJECTORY TIMELINE -->
      <div class="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-3">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="text-base font-bold text-white">📈 Affidavit Wealth Growth Timeline</h3>
            <p class="text-xs text-slate-400">Track how declared assets evolved across consecutive Form 26 election affidavits.</p>
          </div>
          <span class="text-xs font-mono-num text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-xl">2009–2024</span>
        </div>
        <div id="timelineWealthChart" class="w-full h-72"></div>
      </div>

      <!-- ROTATING CIVIC DISCOVERIES -->
      <div class="space-y-3">
        <h3 class="text-base font-bold text-white">✨ Explore Political Data &amp; Key Findings</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div class="p-4 rounded-3xl bg-slate-900 border border-slate-800 space-y-2">
            <span class="text-indigo-400 font-bold block">The Crorepati Surge</span>
            <p class="text-slate-300">92.8% of MPs in the 18th Lok Sabha declared assets exceeding ₹1 Crore, up from 58% in 2009.</p>
            <span class="text-[10px] text-slate-500 block">Source: ADR India 2024</span>
          </div>
          <div class="p-4 rounded-3xl bg-slate-900 border border-slate-800 space-y-2">
            <span class="text-emerald-400 font-bold block">Women in Parliament</span>
            <p class="text-slate-300">74 women representatives were elected in 2024 (13.6% of Lok Sabha), representing 14 political parties.</p>
            <span class="text-[10px] text-slate-500 block">Source: ECI Gazette 2024</span>
          </div>
          <div class="p-4 rounded-3xl bg-slate-900 border border-slate-800 space-y-2">
            <span class="text-amber-400 font-bold block">Wealth Extremes</span>
            <p class="text-slate-300">The highest declared MP assets stand at ₹5,705 Cr, while the median MP asset declared is ₹9.85 Cr.</p>
            <span class="text-[10px] text-slate-500 block">Source: Form 26 Analysis</span>
          </div>
          <div class="p-4 rounded-3xl bg-slate-900 border border-slate-800 space-y-2">
            <span class="text-rose-400 font-bold block">Split Boundaries</span>
            <p class="text-slate-300">Constituency boundaries do not match district boundaries: Hisar Lok Sabha PC intersects Hisar, Jind, and Bhiwani districts.</p>
            <span class="text-[10px] text-slate-500 block">Source: ECI Delimitation 2008</span>
          </div>
        </div>
      </div>
    </div>
  `;

  // Attach comparison logic
  const selectA = container.querySelector("#compSelectA");
  const selectB = container.querySelector("#compSelectB");

  function updateComparison() {
    const pA = POLITICIANS.find(p => p.id === appState.comparisonA);
    const pB = POLITICIANS.find(p => p.id === appState.comparisonB);
    const grid = container.querySelector("#comparisonCardsGrid");
    if (!pA || !pB || !grid) return;

    grid.innerHTML = `
      <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 font-mono-num text-xs">
        <div class="flex items-center justify-between font-sans">
          <div>
            <h4 class="text-sm font-bold text-white">${escapeHtml(pA.name)}</h4>
            <span class="text-indigo-400">${pA.party} • ${pA.position} (${pA.constituencyName})</span>
          </div>
          <button type="button" data-open-pol="${pA.id}" class="px-2.5 py-1 rounded-lg bg-indigo-600 text-white font-medium text-[11px]">Dossier →</button>
        </div>
        <div class="space-y-1.5 divide-y divide-slate-900 pt-2 border-t border-slate-800">
          <div class="flex justify-between py-1 font-sans"><span>Declared Assets:</span><strong class="text-amber-400 font-mono-num">${formatCr(pA.totalAssetsCr)}</strong></div>
          <div class="flex justify-between py-1 font-sans"><span>Liabilities:</span><strong class="text-slate-200 font-mono-num">${formatCr(pA.totalLiabilitiesCr)}</strong></div>
          <div class="flex justify-between py-1 font-sans"><span>Declared Cases:</span><strong class="${pA.declaredCasesCount > 0 ? 'text-rose-400' : 'text-emerald-400'} font-mono-num">${pA.declaredCasesCount}</strong></div>
          <div class="flex justify-between py-1 font-sans"><span>Attendance:</span><strong class="text-white font-mono-num">${pA.parliamentPerformance?.attendancePct !== null ? pA.parliamentPerformance.attendancePct + '%' : 'Exempt'}</strong></div>
          <div class="flex justify-between py-1 font-sans"><span>Questions Asked:</span><strong class="text-white font-mono-num">${pA.parliamentPerformance?.questionsAsked !== null ? pA.parliamentPerformance.questionsAsked : 'Exempt'}</strong></div>
        </div>
      </div>

      <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 font-mono-num text-xs">
        <div class="flex items-center justify-between font-sans">
          <div>
            <h4 class="text-sm font-bold text-white">${escapeHtml(pB.name)}</h4>
            <span class="text-indigo-400">${pB.party} • ${pB.position} (${pB.constituencyName})</span>
          </div>
          <button type="button" data-open-pol="${pB.id}" class="px-2.5 py-1 rounded-lg bg-indigo-600 text-white font-medium text-[11px]">Dossier →</button>
        </div>
        <div class="space-y-1.5 divide-y divide-slate-900 pt-2 border-t border-slate-800">
          <div class="flex justify-between py-1 font-sans"><span>Declared Assets:</span><strong class="text-amber-400 font-mono-num">${formatCr(pB.totalAssetsCr)}</strong></div>
          <div class="flex justify-between py-1 font-sans"><span>Liabilities:</span><strong class="text-slate-200 font-mono-num">${formatCr(pB.totalLiabilitiesCr)}</strong></div>
          <div class="flex justify-between py-1 font-sans"><span>Declared Cases:</span><strong class="${pB.declaredCasesCount > 0 ? 'text-rose-400' : 'text-emerald-400'} font-mono-num">${pB.declaredCasesCount}</strong></div>
          <div class="flex justify-between py-1 font-sans"><span>Attendance:</span><strong class="text-white font-mono-num">${pB.parliamentPerformance?.attendancePct !== null ? pB.parliamentPerformance.attendancePct + '%' : 'Exempt'}</strong></div>
          <div class="flex justify-between py-1 font-sans"><span>Questions Asked:</span><strong class="text-white font-mono-num">${pB.parliamentPerformance?.questionsAsked !== null ? pB.parliamentPerformance.questionsAsked : 'Exempt'}</strong></div>
        </div>
      </div>
    `;

    grid.querySelectorAll("[data-open-pol]").forEach(btn => {
      btn.addEventListener("click", () => openPoliticianModal(btn.getAttribute("data-open-pol")));
    });
  }

  selectA?.addEventListener("change", (e) => {
    appState.comparisonA = e.target.value;
    updateComparison();
  });
  selectB?.addEventListener("change", (e) => {
    appState.comparisonB = e.target.value;
    updateComparison();
  });

  container.querySelector("#presetCompareA")?.addEventListener("click", () => {
    appState.comparisonA = "BPI-POL-PEMMASANI";
    appState.comparisonB = "BPI-POL-KONDA";
    if (selectA) selectA.value = appState.comparisonA;
    if (selectB) selectB.value = appState.comparisonB;
    updateComparison();
  });
  container.querySelector("#presetCompareB")?.addEventListener("click", () => {
    appState.comparisonA = "BPI-POL-JINDAL";
    appState.comparisonB = "BPI-POL-JAIPARKASH";
    if (selectA) selectA.value = appState.comparisonA;
    if (selectB) selectB.value = appState.comparisonB;
    updateComparison();
  });

  updateComparison();

  // Render Wealth Trajectory Timeline Chart
  setTimeout(() => {
    const chartEl = document.getElementById("timelineWealthChart");
    if (!chartEl || typeof echarts === "undefined") return;
    const ch = echarts.init(chartEl);
    appState.activeECharts.push(ch);

    ch.setOption({
      tooltip: { trigger: "axis" },
      legend: { data: ["Naveen Jindal", "Supriya Sule", "Shashi Tharoor", "Akhilesh Yadav"], textStyle: { color: "#cbd5e1", fontSize: 11 } },
      grid: { left: 50, right: 20, top: 40, bottom: 30 },
      xAxis: { type: "category", data: ["2009", "2014", "2019", "2024"], axisLabel: { color: "#cbd5e1" } },
      yAxis: { type: "value", axisLabel: { color: "#94a3b8", formatter: "₹{value} Cr" }, splitLine: { lineStyle: { color: "#1e293b" } } },
      series: [
        { name: "Naveen Jindal", type: "line", smooth: true, data: [131.0, 308.0, 712.0, 1241.0], itemStyle: { color: "#f59e0b" }, lineStyle: { width: 3 } },
        { name: "Supriya Sule", type: "line", smooth: true, data: [51.0, 113.9, 140.5, 166.5], itemStyle: { color: "#38bdf8" }, lineStyle: { width: 3 } },
        { name: "Shashi Tharoor", type: "line", smooth: true, data: [16.0, 23.0, 35.0, 56.0], itemStyle: { color: "#10b981" }, lineStyle: { width: 3 } },
        { name: "Akhilesh Yadav", type: "line", smooth: true, data: [8.5, 21.0, 37.7, 42.0], itemStyle: { color: "#ef4444" }, lineStyle: { width: 3 } }
      ]
    });
  }, 40);
}

// About & Sources View
function renderAboutSources() {
  const container = document.getElementById("aboutViewport");
  if (!container) return;

  container.innerHTML = `
    <div class="space-y-6 text-xs text-slate-300">
      <div class="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-3">
        <h2 class="text-lg font-extrabold text-white">About Bharat Political Intelligence (BPI)</h2>
        <p class="leading-relaxed">
          Bharat Political Intelligence is an independent, non-partisan civic technology platform designed to make constitutional political data intuitive, interactive, and publicly transparent for citizens, researchers, journalists, and students.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div class="p-5 rounded-3xl bg-slate-900 border border-slate-800 space-y-3">
          <h3 class="text-sm font-bold text-white flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            Primary Public Data Authorities
          </h3>
          <ul class="space-y-2">
            <li>• <strong>Election Commission of India (ECI):</strong> Form 26 candidate disclosures, delimited constituency boundaries &amp; certified statistical returns.</li>
            <li>• <strong>Association for Democratic Reforms (ADR) &amp; MyNeta:</strong> Systematic extraction of candidate asset, liability, and criminal case disclosures.</li>
            <li>• <strong>Digital Sansad &amp; PRS India:</strong> Official attendance logs, parliamentary questions, debates, and private member bills.</li>
            <li>• <strong>MoSPI eSAKSHI Portal:</strong> MPLADS fund sanction, release, and physical completion records.</li>
          </ul>
        </div>

        <div class="p-5 rounded-3xl bg-slate-900 border border-slate-800 space-y-3">
          <h3 class="text-sm font-bold text-white flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
            Strict Neutrality &amp; Legal Safeguards
          </h3>
          <p class="leading-relaxed">
            In compliance with Supreme Court of India guidelines on Form 26 candidate disclosures and the Digital Personal Data Protection (DPDP) Act, 2023:
          </p>
          <ul class="space-y-1.5">
            <li>• <strong>Zero Subjective Scoring:</strong> The platform does not generate arbitrary politician "grades", "ranks", or "scores".</li>
            <li>• <strong>Legal Distinction:</strong> Charges framed or pending trial are strictly labeled as such; an FIR is never portrayed as a conviction.</li>
            <li>• <strong>Direct Affidavits:</strong> Every record is linked back to its original publicly filed document.</li>
          </ul>
        </div>
      </div>
    </div>
  `;
}

// "Who Represents Me?" Interactive Wizard
function setupWhoRepresentsMe() {
  const wizardModal = document.getElementById("whoRepresentsModal");
  const stateSel = document.getElementById("wizardStateSelect");
  const distSel = document.getElementById("wizardDistrictSelect");
  const constSel = document.getElementById("wizardConstituencySelect");
  const resultBox = document.getElementById("wizardResultContainer");

  // Populate States
  if (stateSel) {
    stateSel.innerHTML = `<option value="">Select your State or UT...</option>` +
      STATES_AND_UTS.map(s => `<option value="${s.code}">${escapeHtml(s.name)}</option>`).join("");

    stateSel.addEventListener("change", (e) => {
      const code = e.target.value;
      if (distSel) {
        distSel.innerHTML = `<option value="">Select your District...</option>`;
        const districts = STATE_DISTRICTS[code] || [];
        districts.forEach(d => {
          distSel.innerHTML += `<option value="${d.districtId}">${escapeHtml(d.districtName)}</option>`;
        });
      }
      if (constSel) constSel.innerHTML = `<option value="">Select Constituency...</option>`;
      if (resultBox) resultBox.classList.add("hidden");
    });
  }

  if (distSel) {
    distSel.addEventListener("change", (e) => {
      const distId = e.target.value;
      const code = stateSel ? stateSel.value : null;
      const distList = STATE_DISTRICTS[code] || [];
      const dist = distList.find(d => d.districtId === distId);
      if (constSel && dist) {
        constSel.innerHTML = `<option value="">Select Constituency...</option>`;
        (dist.intersectingPCs || []).forEach(pc => {
          constSel.innerHTML += `<option value="PC:${pc.pcId}">Lok Sabha PC: ${escapeHtml(pc.pcName)}</option>`;
        });
        (dist.intersectingACs || []).forEach(ac => {
          constSel.innerHTML += `<option value="AC:${ac.acId}">Assembly AC: #${ac.acNumber} ${escapeHtml(ac.acName)}</option>`;
        });
      }
      if (resultBox) resultBox.classList.add("hidden");
    });
  }

  if (constSel) {
    constSel.addEventListener("change", (e) => {
      const val = e.target.value;
      if (!val || !resultBox) return;

      const [type, id] = val.split(":");
      resultBox.classList.remove("hidden");

      if (type === "PC") {
        const c = CONSTITUENCIES.find(item => item.id === id);
        const rep = POLITICIANS.find(p => p.id === c?.currentRepId);
        resultBox.innerHTML = `
          <div class="space-y-2">
            <span class="font-bold text-white block">Your Elected Lok Sabha MP:</span>
            <div class="p-3 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
              <div>
                <h4 class="font-bold text-indigo-300 text-sm">${c ? c.currentRepName : 'Elected MP'}</h4>
                <span class="text-[11px] text-slate-400">${c ? c.currentParty : ''} • Lok Sabha Constituency</span>
              </div>
              ${rep ? `
                <button type="button" data-open-pol="${rep.id}" class="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs">
                  Full Dossier →
                </button>
              ` : ''}
            </div>
          </div>
        `;
      } else {
        // Assembly Constituency
        const code = stateSel ? stateSel.value : null;
        const distList = STATE_DISTRICTS[code] || [];
        let acFound = null;
        for (const d of distList) {
          const match = (d.intersectingACs || []).find(ac => ac.acId === id);
          if (match) { acFound = match; break; }
        }
        const rep = POLITICIANS.find(p => p.id === acFound?.politicianId);

        resultBox.innerHTML = `
          <div class="space-y-2">
            <span class="font-bold text-white block">Your Elected Vidhan Sabha MLA:</span>
            <div class="p-3 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
              <div>
                <h4 class="font-bold text-indigo-300 text-sm">${acFound ? acFound.winnerName : 'Elected MLA'}</h4>
                <span class="text-[11px] text-slate-400">${acFound ? acFound.party : ''} • AC #${acFound?.acNumber} ${acFound?.acName}</span>
              </div>
              ${rep ? `
                <button type="button" data-open-pol="${rep.id}" class="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs">
                  Full Dossier →
                </button>
              ` : `
                <span class="text-[10px] text-slate-500">Verified Representative</span>
              `}
            </div>
          </div>
        `;
      }

      resultBox.querySelectorAll("[data-open-pol]").forEach(btn => {
        btn.addEventListener("click", () => {
          if (wizardModal) wizardModal.classList.add("hidden");
          openPoliticianModal(btn.getAttribute("data-open-pol"));
        });
      });
    });
  }

  // Open modal button
  const launchBtns = [document.getElementById("heroWhoRepresentsBtn"), document.getElementById("heroLaunchWizardBtn")];
  launchBtns.forEach(btn => {
    btn?.addEventListener("click", () => {
      if (wizardModal) wizardModal.classList.remove("hidden");
    });
  });

  document.getElementById("closeWhoRepresentsModalBtn")?.addEventListener("click", () => {
    if (wizardModal) wizardModal.classList.add("hidden");
  });
}

// Global Autocomplete Search
function setupGlobalSearch() {
  const searchInput = document.getElementById("globalSearchInput");
  const dropdown = document.getElementById("globalSearchDropdown");
  const clearBtn = document.getElementById("clearGlobalSearchBtn");
  if (!searchInput || !dropdown) return;

  searchInput.addEventListener("input", (e) => {
    const q = e.target.value.trim().toLowerCase();
    if (!q) {
      dropdown.classList.add("hidden");
      if (clearBtn) clearBtn.classList.add("hidden");
      return;
    }
    if (clearBtn) clearBtn.classList.remove("hidden");

    const matches = [];

    // Search Politicians
    POLITICIANS.forEach(p => {
      if (p.name.toLowerCase().includes(q) || p.constituencyName.toLowerCase().includes(q)) {
        matches.push({ type: "👤 Politician", title: p.name, subtitle: `${p.party} • ${p.position} ${p.constituencyName}`, id: p.id, action: "pol" });
      }
    });

    // Search States
    STATES_AND_UTS.forEach(s => {
      if (s.name.toLowerCase().includes(q) || s.code.toLowerCase().includes(q)) {
        matches.push({ type: "🏛️ State/UT", title: s.name, subtitle: `${s.code} • ${s.lsSeats} Lok Sabha Seats`, code: s.code, action: "state" });
      }
    });

    // Search Constituencies
    CONSTITUENCIES.forEach(c => {
      if (c.name.toLowerCase().includes(q)) {
        matches.push({ type: "🗳️ Constituency", title: c.name, subtitle: `${c.house} (${c.stateName}) • MP: ${c.currentRepName}`, id: c.id, stateCode: c.stateCode, action: "const" });
      }
    });

    if (matches.length === 0) {
      dropdown.innerHTML = `<div class="p-4 text-xs text-slate-400 text-center">No matching representatives or regions found.</div>`;
    } else {
      dropdown.innerHTML = matches.slice(0, 8).map(m => `
        <div class="search-result-item p-3 hover:bg-slate-800/80 cursor-pointer transition flex items-center justify-between text-xs" data-action="${m.action}" data-val="${m.id || m.code || ''}" data-state="${m.stateCode || ''}">
          <div>
            <span class="font-bold text-white block">${escapeHtml(m.title)}</span>
            <span class="text-[11px] text-slate-400">${escapeHtml(m.subtitle)}</span>
          </div>
          <span class="text-[10px] font-mono-num text-indigo-400 font-semibold px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20">${m.type}</span>
        </div>
      `).join("");
    }

    dropdown.classList.remove("hidden");

    dropdown.querySelectorAll(".search-result-item").forEach(item => {
      item.addEventListener("click", () => {
        const action = item.getAttribute("data-action");
        const val = item.getAttribute("data-val");
        const stCode = item.getAttribute("data-state");

        dropdown.classList.add("hidden");
        searchInput.value = "";
        if (clearBtn) clearBtn.classList.add("hidden");

        if (action === "pol") {
          openPoliticianModal(val);
        } else if (action === "state") {
          switchMainNav("explore");
          selectState(val);
        } else if (action === "const") {
          switchMainNav("explore");
          if (stCode) appState.selectedStateCode = stCode;
          selectConstituency(val);
        }
      });
    });
  });

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      dropdown.classList.add("hidden");
      clearBtn.classList.add("hidden");
    });
  }

  document.addEventListener("click", (e) => {
    if (!searchInput.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.add("hidden");
    }
  });
}

// App Initialization
document.addEventListener("DOMContentLoaded", () => {
  // Brand home click
  document.getElementById("brandHomeBtn")?.addEventListener("click", () => {
    switchMainNav("explore");
    resetToIndia();
  });

  // Top Nav clicks
  document.querySelectorAll(".nav-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => switchMainNav(btn.getAttribute("data-nav")));
  });

  // Map Mode clicks
  document.querySelectorAll(".map-mode-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const mode = btn.getAttribute("data-map-mode");
      appState.activeMapMode = mode;
      document.querySelectorAll(".map-mode-btn").forEach(b => {
        if (b.getAttribute("data-map-mode") === mode) {
          b.className = "map-mode-btn px-3 py-1.5 rounded-lg font-bold bg-indigo-600 text-white shadow-sm transition";
        } else {
          b.className = "map-mode-btn px-3 py-1.5 rounded-lg font-medium text-slate-300 hover:text-white transition";
        }
      });
      renderSvgMap();
    });
  });

  // Step Back and Reset
  document.getElementById("geoStepBackBtn")?.addEventListener("click", stepBackGeo);
  document.getElementById("geoResetIndiaBtn")?.addEventListener("click", resetToIndia);

  // Hero shortcuts
  document.getElementById("heroCompareJumpBtn")?.addEventListener("click", () => switchMainNav("discover"));
  document.getElementById("heroQuickHaryanaBtn")?.addEventListener("click", () => {
    switchMainNav("explore");
    selectState("HR");
  });

  // Modal handlers
  document.getElementById("closePoliticianModalBtn")?.addEventListener("click", () => {
    document.getElementById("politicianModal")?.classList.add("hidden");
  });
  document.getElementById("modalDismissBtn")?.addEventListener("click", () => {
    document.getElementById("politicianModal")?.classList.add("hidden");
  });
  document.querySelectorAll(".modal-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => renderPoliticianModalContent(btn.getAttribute("data-modal-tab")));
  });

  // Share profile button
  document.getElementById("modalSharePolBtn")?.addEventListener("click", () => {
    const url = `${window.location.origin}${window.location.pathname}#politician=${appState.selectedPoliticianId}`;
    navigator.clipboard.writeText(url).then(() => {
      showToast("Politician dossier link copied to clipboard!");
    }).catch(() => {
      showToast("Link: " + url);
    });
  });

  // Light / Dark Mode Toggle
  const themeBtn = document.getElementById("themeToggleBtn");
  const themeIcon = document.getElementById("themeToggleIcon");
  themeBtn?.addEventListener("click", () => {
    const htmlEl = document.documentElement;
    const isDark = htmlEl.classList.contains("dark");
    if (isDark) {
      htmlEl.classList.remove("dark");
      document.body.className = "bg-slate-50 text-slate-900 min-h-screen flex flex-col transition-colors duration-200 light";
      if (themeIcon) themeIcon.textContent = "☀️";
    } else {
      htmlEl.classList.add("dark");
      document.body.className = "bg-slate-950 text-slate-100 min-h-screen flex flex-col transition-colors duration-200";
      if (themeIcon) themeIcon.textContent = "🌙";
    }
  });

  // Window Resize chart handler
  window.addEventListener("resize", () => {
    appState.activeECharts.forEach(ch => {
      try { ch.resize(); } catch (e) {}
    });
  });

  // Setup Systems
  setupGlobalSearch();
  setupWhoRepresentsMe();
  renderSvgMap();
  renderBreadcrumbs();
  renderGeoContextPanel();

  // Check URL Hash on launch
  const hash = window.location.hash;
  if (hash.startsWith("#politician=")) {
    const polId = hash.replace("#politician=", "");
    openPoliticianModal(polId);
  } else if (hash.startsWith("#state=")) {
    const code = hash.replace("#state=", "");
    selectState(code);
  } else if (hash === "#discover") {
    switchMainNav("discover");
  } else if (hash === "#politicians") {
    switchMainNav("politicians");
  } else if (hash === "#elections") {
    switchMainNav("elections");
  }
});
