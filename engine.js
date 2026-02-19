// ============================== //
// 13 MOON DREAMSPELL CALENDAR JS //
// ============================== //

// --- DATA SETUP ---

// Fixed 13 Moon Names with Fixed Date Ranges (Perpetual)
const moons = [
  { 
    name: "Magnetic Moon", 
    number: 1, 
    startMonth: 7, startDay: 26, 
    endMonth: 8, endDay: 22,
    guidance: "Unify your intention",
    action: "Attract",
    power: "Purpose"
  },
  { 
    name: "Lunar Moon", 
    number: 2, 
    startMonth: 8, startDay: 23, 
    endMonth: 9, endDay: 19,
    guidance: "Flow with emotion",
    action: "Polarize",
    power: "Challenge"
  },
  { 
    name: "Electric Moon", 
    number: 3, 
    startMonth: 9, startDay: 20, 
    endMonth: 10, endDay: 17,
    guidance: "Activate your service",
    action: "Bond",
    power: "Service"
  },
  { 
    name: "Self-Existing Moon", 
    number: 4, 
    startMonth: 10, startDay: 18, 
    endMonth: 11, endDay: 14,
    guidance: "Define stability",
    action: "Measure",
    power: "Form"
  },
  { 
    name: "Overtone Moon", 
    number: 5, 
    startMonth: 11, startDay: 15, 
    endMonth: 12, endDay: 12,
    guidance: "Command integrity",
    action: "Empower",
    power: "Radiance"
  },
  { 
    name: "Rhythmic Moon", 
    number: 6, 
    startMonth: 12, startDay: 13, 
    endMonth: 1, endDay: 9,
    guidance: "Balance your relationships",
    action: "Organize",
    power: "Equality"
  },
  { 
    name: "Resonant Moon", 
    number: 7, 
    startMonth: 1, startDay: 10, 
    endMonth: 2, endDay: 6,
    guidance: "Channel inspiration",
    action: "Inspire",
    power: "Channeling"
  },
  { 
    name: "Galactic Moon", 
    number: 8, 
    startMonth: 2, startDay: 7, 
    endMonth: 3, endDay: 6,
    guidance: "Harmonize your purpose",
    action: "Model",
    power: "Integrity"
  },
  { 
    name: "Solar Moon", 
    number: 9, 
    startMonth: 3, startDay: 7, 
    endMonth: 4, endDay: 3,
    guidance: "Realize growth",
    action: "Pulse",
    power: "Realization"
  },
  { 
    name: "Planetary Moon", 
    number: 10, 
    startMonth: 4, startDay: 4, 
    endMonth: 5, endDay: 1,
    guidance: "Perfect your order",
    action: "Produce",
    power: "Manifestation"
  },
  { 
    name: "Spectral Moon", 
    number: 11, 
    startMonth: 5, startDay: 2, 
    endMonth: 5, endDay: 29,
    guidance: "Release fear",
    action: "Dissolve",
    power: "Liberation"
  },
  { 
    name: "Crystal Moon", 
    number: 12, 
    startMonth: 5, startDay: 30, 
    endMonth: 6, endDay: 26,
    guidance: "Dedicate your service",
    action: "Universalize",
    power: "Cooperation"
  },
  { 
    name: "Cosmic Moon", 
    number: 13, 
    startMonth: 6, startDay: 27, 
    endMonth: 7, endDay: 24,
    guidance: "Purify completion",
    action: "Transcend",
    power: "Presence"
  }
];

// 20 Solar Seals
const seals = [
  "Dragon", "Wind", "Night", "Seed", "Serpent",
  "World-Bridger", "Hand", "Star", "Moon", "Dog",
  "Monkey", "Human", "Skywalker", "Wizard", "Eagle",
  "Warrior", "Earth", "Mirror", "Storm", "Sun"
];

// 13 Galactic Tones
const tones = [
  "Magnetic", "Lunar", "Electric", "Self-Existing", "Overtone",
  "Rhythmic", "Resonant", "Galactic", "Solar", "Planetary",
  "Spectral", "Crystal", "Cosmic"
];

// Seal Colors (Tribes)
const sealColors = {
  "Dragon": "Red", "Wind": "White", "Night": "Blue", "Seed": "Yellow",
  "Serpent": "Red", "World-Bridger": "White", "Hand": "Blue", "Star": "Yellow",
  "Moon": "Red", "Dog": "White", "Monkey": "Blue", "Human": "Yellow",
  "Skywalker": "Red", "Wizard": "White", "Eagle": "Blue", "Warrior": "Yellow",
  "Earth": "Red", "Mirror": "White", "Storm": "Blue", "Sun": "Yellow"
};

// Tone Attributes
const toneAttributes = [
  { tone: "Magnetic", action: "Unify", power: "Attract", essence: "Purpose" },
  { tone: "Lunar", action: "Polarize", power: "Stabilize", essence: "Challenge" },
  { tone: "Electric", action: "Activate", power: "Bond", essence: "Service" },
  { tone: "Self-Existing", action: "Define", power: "Measure", essence: "Form" },
  { tone: "Overtone", action: "Command", power: "Empower", essence: "Radiance" },
  { tone: "Rhythmic", action: "Balance", power: "Organize", essence: "Equality" },
  { tone: "Resonant", action: "Channel", power: "Inspire", essence: "Attunement" },
  { tone: "Galactic", action: "Harmonize", power: "Model", essence: "Integrity" },
  { tone: "Solar", action: "Pulse", power: "Realize", essence: "Growth" },
  { tone: "Planetary", action: "Perfect", power: "Produce", essence: "Manifestation" },
  { tone: "Spectral", action: "Release", power: "Dissolve", essence: "Liberation" },
  { tone: "Crystal", action: "Dedicate", power: "Universalize", essence: "Cooperation" },
  { tone: "Cosmic", action: "Transcend", power: "Endure", essence: "Presence" }
];

// Galactic Week Days
const galacticWeek = [
  { name: "Dali", color: "Yellow", chakra: "Crown", chakraNum: 7, element: "Light", abbr: "Cr" },
  { name: "Seli", color: "Red", chakra: "Root", chakraNum: 1, element: "Earth", abbr: "R" },
  { name: "Gamma", color: "White", chakra: "Third Eye", chakraNum: 6, element: "Sky", abbr: "3E" },
  { name: "Kali", color: "Blue", chakra: "Sacral", chakraNum: 2, element: "Water", abbr: "S" },
  { name: "Alpha", color: "Yellow", chakra: "Throat", chakraNum: 5, element: "Sound", abbr: "Th" },
  { name: "Limi", color: "Red", chakra: "Solar Plexus", chakraNum: 3, element: "Fire", abbr: "So" },
  { name: "Sillio", color: "White", chakra: "Heart", chakraNum: 4, element: "Air", abbr: "H" }
];

// Kin Relationships for Oracle
const kinRelations = {
  getAnalog: (kin) => {
    const analogKin = ((kin - 1 + 13) % 260) + 1;
    return getBasicKinInfo(analogKin);
  },
  getAntipode: (kin) => {
    const antipodeKin = ((kin - 1 + 130) % 260) + 1;
    return getBasicKinInfo(antipodeKin);
  },
  getOccult: (kin) => {
    const occultKin = ((kin - 1 + 39) % 260) + 1;
    return getBasicKinInfo(occultKin);
  },
  getGuide: (kin) => {
    const toneIndex = (kin - 1) % 13;
    const sealIndex = (kin - 1) % 20;
    const guideSealIndex = Math.floor(sealIndex / 4) * 4 + (toneIndex % 4);
    const guideKin = guideSealIndex + 1 + (Math.floor((kin - 1) / 20) * 20);
    return getBasicKinInfo(((guideKin - 1) % 260) + 1);
  }
};

// --- CONSTANTS ---
const DAY_OUT_OF_TIME = { month: 6, day: 25 }; // July 25

// --- DOM ELEMENTS ---
const monthsContainer = document.getElementById("monthsContainer");
const toggleBtn = document.getElementById("toggleFullCycle");
const settingsToggle = document.getElementById("settingsToggle");
const settingsMenu = document.getElementById("settingsMenu");
const detailLevel = document.getElementById("detailLevel");
const colorScheme = document.getElementById("colorScheme");
const showGalacticDays = document.getElementById("showGalacticDays");
const showOracle = document.getElementById("showOracle");
const showWavespell = document.getElementById("showWavespell");
const showBarsAndDots = document.getElementById("showBarsAndDots");
const compactMode = document.getElementById("compactMode");

// Header Navigation Elements
const prevDay = document.getElementById("prevDay");
const nextDay = document.getElementById("nextDay");
const headerDate = document.getElementById("headerDate");

// Info panel elements
const infoPanel = {
  moonName: document.getElementById("infoMoonName"),
  moonGuidance: document.getElementById("infoMoonGuidance"),
  dayPosition: document.getElementById("infoDayPosition"),
  gregorianDate: document.getElementById("infoGregorianDate"),
  galacticDay: document.getElementById("infoGalacticDay"),
  kin: document.getElementById("infoKin"),
  kinFull: document.getElementById("infoKinFull"),
  kinColor: document.getElementById("infoKinColor"),
  tone: document.getElementById("infoTone"),
  toneAction: document.getElementById("infoToneAction"),
  tonePower: document.getElementById("infoTonePower"),
  seal: document.getElementById("infoSeal"),
  analog: document.getElementById("infoAnalog"),
  antipode: document.getElementById("infoAntipode"),
  occult: document.getElementById("infoOccult"),
  guide: document.getElementById("infoGuide"),
  wavespell: document.getElementById("infoWavespell"),
  wavespellPosition: document.getElementById("infoWavespellPosition"),
  wavespellRange: document.getElementById("infoWavespellRange")
};

// Section elements for toggling
const sections = {
  galacticDayRow: document.getElementById("galacticDayRow"),
  kinFullRow: document.getElementById("kinFullRow"),
  kinColorRow: document.getElementById("kinColorRow"),
  toneActionRow: document.getElementById("toneActionRow"),
  tonePowerRow: document.getElementById("tonePowerRow"),
  oracleSection: document.getElementById("oracleSection"),
  wavespellSection: document.getElementById("wavespellSection"),
  dayOutOfTimeSection: document.getElementById("dayOutOfTimeSection")
};

// Other UI elements
const refreshIndicator = document.getElementById("refreshIndicator");
const toast = document.getElementById("toast");

// --- STATE ---
let today = new Date();
let activeMonthDiv = null;
let activeDayBtn = null;
let allMoonCards = [];
let allDays = []; // Master list of 365 days
let currentDetailLevel = 'standard';
let currentColorScheme = 'full';
let isCompact = true;
let isFullCycle = false;
let refreshTimer = null;
let lastRefreshDate = new Date();

// --- UTILITY FUNCTIONS ---

// Get current cycle start date (July 26 of appropriate year)
function getCurrentCycleStart() {
  const now = new Date();
  const year = now.getFullYear();
  const july26 = new Date(year, 6, 26);
  
  if (now < july26) {
    return new Date(year - 1, 6, 26);
  } else {
    return july26;
  }
}

// Get cycle start for a specific date
function getCycleStartForDate(date) {
  const year = date.getFullYear();
  const july26 = new Date(year, 6, 26);
  
  if (date < july26) {
    return new Date(year - 1, 6, 26);
  } else {
    return july26;
  }
}

// Format Gregorian Date
function formatGregorian(date) {
  const options = { weekday: "long", month: "long", day: "numeric", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

// Format Short Date (for ranges)
function formatShortDate(date) {
  const options = { month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

// Format Header Date (short)
function formatHeaderDate(date) {
  const options = { weekday: "short", month: "short", day: "numeric", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

// Check if date is Day Out of Time
function isDayOutOfTime(date) {
  return date.getMonth() === 6 && date.getDate() === 25;
}

// Calculate days since cycle start
function getDaysSinceCycleStart(date, cycleStart = null) {
  const start = cycleStart || getCycleStartForDate(date);
  const targetDate = new Date(date);
  targetDate.setHours(0, 0, 0, 0);
  start.setHours(0, 0, 0, 0);
  
  const diffTime = targetDate - start;
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}

// Get basic kin info (for oracle calculations)
function getBasicKinInfo(kin) {
  const toneIndex = (kin - 1) % 13;
  const sealIndex = (kin - 1) % 20;
  const seal = seals[sealIndex];
  return {
    kin: kin,
    tone: tones[toneIndex],
    seal: seal,
    color: sealColors[seal]
  };
}

// Get wavespell info
function getWavespell(kin) {
  const startKin = (Math.floor((kin - 1) / 13) * 13) + 1;
  const endKin = startKin + 12;
  const startSealIndex = (startKin - 1) % 20;
  const startSeal = seals[startSealIndex];
  const startColor = sealColors[startSeal];
  
  return {
    name: `${startColor} ${startSeal} Wavespell`,
    range: `Kin ${startKin}-${endKin}`,
    position: ((kin - 1) % 13) + 1,
    startKin: startKin,
    endKin: endKin
  };
}

// Enhanced Tzolkin calculation
function getTzolkin(dayNumber, date = null) {
  if (date && isDayOutOfTime(date)) {
  // DOAT is day 365 of cycle (index 364)
  const doatDayNumber = 364;
  const kin = (doatDayNumber % 260) + 1; // This gives 105 for 2025-2026
  
  const toneIndex = (kin - 1) % 13;
  const sealIndex = (kin - 1) % 20;
  const seal = seals[sealIndex];
  const color = sealColors[seal];
  const toneName = tones[toneIndex];
  const weekIndex = doatDayNumber % 7;
  
  return {
    isDayOutOfTime: true,
    kin: kin,
    kinFull: `${color} ${toneName} ${seal}`,
    color: color,
    tone: toneName,
    seal: seal,
    galacticDay: galacticWeek[weekIndex],
    message: "Forgive and let go"
  };
}
  
  const kin = ((dayNumber - 1) % 260) + 1;
  const toneIndex = (kin - 1) % 13;
  const sealIndex = (kin - 1) % 20;
  const seal = seals[sealIndex];
  const color = sealColors[seal];
  const toneName = tones[toneIndex];
  const toneAttr = toneAttributes[toneIndex];
  
  const weekIndex = (dayNumber - 1) % 7;
  const galacticDay = galacticWeek[weekIndex];
  
  const analog = kinRelations.getAnalog(kin);
  const antipode = kinRelations.getAntipode(kin);
  const occult = kinRelations.getOccult(kin);
  const guide = kinRelations.getGuide(kin);
  
  const wavespell = getWavespell(kin);
  
  return {
    kin: kin,
    tone: `${toneIndex + 1} - ${toneName}`,
    seal: seal,
    kinFull: `${color} ${toneName} ${seal}`,
    kinColor: color,
    toneName: toneName,
    toneNumber: toneIndex + 1,
    toneAction: toneAttr.action,
    tonePower: toneAttr.power,
    sealName: seal,
    sealColor: color,
    galacticDay: galacticDay.name,
    galacticChakra: galacticDay.chakra,
    analog: `${analog.color} ${analog.seal}`,
    antipode: `${antipode.color} ${antipode.seal}`,
    occult: `${occult.color} ${occult.seal}`,
    guide: `${guide.color} ${guide.seal}`,
    wavespell: wavespell.name,
    wavespellPosition: `Position ${wavespell.position} of 13`,
    wavespellRange: wavespell.range,
    isDayOutOfTime: false
  };
}

// Build master list of all 365 days
function buildMasterDayList() {
  allDays = [];
  const cycleStart = getCurrentCycleStart();
  
  moons.forEach((moon, moonIndex) => {
    for (let day = 0; day < 28; day++) {
      const date = new Date(cycleStart);
      date.setDate(cycleStart.getDate() + (moonIndex * 28) + day);
      
      allDays.push({
        moonIndex: moonIndex,
        dayIndex: day,
        date: date,
        dayOfCycle: (moonIndex * 28) + day
      });
    }
  });
  
  const doatDate = new Date(cycleStart);
  doatDate.setDate(cycleStart.getDate() + 364);
  allDays.push({
    moonIndex: -1,
    dayIndex: -1,
    date: doatDate,
    dayOfCycle: 364,
    isDOAT: true
  });
}

// --- UI UPDATE FUNCTIONS ---

// Show toast notification
function showToast(message) {
  toast.textContent = message;
  toast.classList.remove('hidden');
  setTimeout(() => {
    toast.classList.add('hidden');
  }, 3000);
}

// Apply color scheme
function applyColorScheme() {
  const scheme = colorScheme.value;
  currentColorScheme = scheme;
  
  document.body.classList.remove('color-scheme-full', 'color-scheme-minimal', 'color-scheme-monochrome');
  document.body.classList.add(`color-scheme-${scheme}`);
}

// Toggle compact mode
function toggleCompactMode(enabled) {
  isCompact = enabled;
  if (enabled) {
    document.body.classList.add('compact-mode');
  } else {
    document.body.classList.remove('compact-mode');
  }
}

// --- TOGGLE FULL CYCLE - FIXED VERSION ---
toggleBtn.addEventListener("click", () => {
  const isShowingAll = toggleBtn.dataset.showing === "true";
  
  if (isShowingAll) {
    // Currently showing all - hide non-active moons
    allMoonCards.forEach(card => {
      if (!card.classList.contains("active-month")) {
        card.style.display = "none";
      }
    });
    toggleBtn.textContent = "Show Full Cycle";
    toggleBtn.dataset.showing = "false";
    isFullCycle = false;
  } else {
    // Currently hiding - show all moons
    allMoonCards.forEach(card => {
      card.style.display = "flex";
    });
    toggleBtn.textContent = "Hide Extra Months";
    toggleBtn.dataset.showing = "true";
    isFullCycle = true;
  }
});

// Update info panel visibility based on settings
function updateInfoPanelVisibility() {
  const level = detailLevel.value;
  currentDetailLevel = level;
  
  const showGalactic = showGalacticDays.checked;
  const showOracleInfo = showOracle.checked && (level === 'complete');
  const showWavespellInfo = showWavespell.checked && (level === 'complete');
  
  if (sections.galacticDayRow) {
    sections.galacticDayRow.style.display = showGalactic ? 'flex' : 'none';
  }
  
  if (sections.kinFullRow) {
    sections.kinFullRow.style.display = level !== 'basic' ? 'flex' : 'none';
  }
  if (sections.kinColorRow) {
    sections.kinColorRow.style.display = level !== 'basic' ? 'flex' : 'none';
  }
  
  if (sections.toneActionRow) {
    sections.toneActionRow.style.display = level === 'complete' ? 'flex' : 'none';
  }
  if (sections.tonePowerRow) {
    sections.tonePowerRow.style.display = level === 'complete' ? 'flex' : 'none';
  }
  
  if (sections.oracleSection) {
    sections.oracleSection.style.display = showOracleInfo ? 'block' : 'none';
  }
  
  if (sections.wavespellSection) {
    sections.wavespellSection.style.display = showWavespellInfo ? 'block' : 'none';
  }
  
  applyColorScheme();
  toggleCompactMode(compactMode.checked);
}

// Update header date
function updateHeaderDate(date) {
  headerDate.textContent = formatHeaderDate(date);
}

// Update info panel with selected day data
function updateInfoPanel(moon, moonStartDate, moonEndDate, dayDate, dayIndex) {
  const cycleStart = getCycleStartForDate(dayDate);
  const daysSinceStart = getDaysSinceCycleStart(dayDate, cycleStart);
  
  if (isDayOutOfTime(dayDate)) {
    sections.dayOutOfTimeSection.style.display = 'block';
    document.querySelectorAll('.info-section:not(.day-out-of-time)').forEach(s => {
      s.style.display = 'none';
    });
    updateHeaderDate(dayDate);
    return;
  } else {
    sections.dayOutOfTimeSection.style.display = 'none';
    document.querySelectorAll('.info-section').forEach(s => {
      if (!s.classList.contains('day-out-of-time')) {
        s.style.display = 'block';
      }
    });
  }
  
  const tz = getTzolkin(daysSinceStart + 1, dayDate);
  
  // Update info panel
  infoPanel.moonName.textContent = moon.name;
  infoPanel.moonGuidance.textContent = `“${moon.guidance}”`;
  infoPanel.dayPosition.textContent = `${dayIndex + 1} of 28`;
  infoPanel.gregorianDate.textContent = formatHeaderDate(dayDate);
  infoPanel.galacticDay.textContent = tz.galacticDay;
  
  infoPanel.kin.textContent = tz.kin;
  infoPanel.kinFull.textContent = tz.kinFull;
  infoPanel.kinColor.textContent = tz.kinColor;
  
  infoPanel.tone.textContent = `${tz.toneNumber} - ${tz.toneName}`;
  infoPanel.toneAction.textContent = tz.toneAction;
  infoPanel.tonePower.textContent = tz.tonePower;
  infoPanel.seal.textContent = `${tz.sealName} (${tz.sealColor} Tribe)`;
  
  infoPanel.analog.textContent = tz.analog;
  infoPanel.antipode.textContent = tz.antipode;
  infoPanel.occult.textContent = tz.occult;
  infoPanel.guide.textContent = tz.guide;
  
  infoPanel.wavespell.textContent = tz.wavespell;
  infoPanel.wavespellPosition.textContent = tz.wavespellPosition;
  infoPanel.wavespellRange.textContent = tz.wavespellRange;
  
  // Update header
  updateHeaderDate(dayDate);
  
  // Apply color classes
  document.querySelectorAll('.info-section').forEach(section => {
    section.classList.remove('red-tribe', 'white-tribe', 'blue-tribe', 'yellow-tribe');
    section.classList.add(`${tz.kinColor.toLowerCase()}-tribe`);
  });
}

// Clear all active highlights
function clearHighlights() {
  if (activeMonthDiv) {
    activeMonthDiv.classList.remove("active-month");
  }
  if (activeDayBtn) {
    activeDayBtn.classList.remove("active-day");
  }
}

// Hide all moons except specified
function hideAllMoonsExcept(moonIndex) {
  allMoonCards.forEach((card, index) => {
    if (index !== moonIndex) {
      card.style.display = 'none';
    } else {
      card.style.display = 'flex';
    }
  });
  isFullCycle = false;
}

// Show all moons
function showAllMoons() {
  allMoonCards.forEach(card => {
    card.style.display = 'flex';
  });
  isFullCycle = true;
}

// Scroll to specific moon
function scrollToMoon(moonIndex) {
  const targetCard = allMoonCards[moonIndex];
  if (targetCard) {
    targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

// Highlight specific day
function highlightDay(moonIndex, dayIndex) {
  const moonCard = allMoonCards[moonIndex];
  if (!moonCard) return;
  
  const dayBtn = moonCard.querySelector(`.day-btn[data-d-index="${dayIndex}"]`);
  if (!dayBtn) return;
  
  clearHighlights();
  activeMonthDiv = moonCard;
  activeDayBtn = dayBtn;
  moonCard.classList.add('active-month');
  dayBtn.classList.add('active-day');
  
  const moon = moons[moonIndex];
  const cycleStart = getCycleStartForDate(today);
  const moonStartDate = new Date(cycleStart);
  moonStartDate.setDate(cycleStart.getDate() + (moonIndex * 28));
  const moonEndDate = new Date(moonStartDate);
  moonEndDate.setDate(moonStartDate.getDate() + 27);
  
  const dayDate = new Date(moonStartDate);
  dayDate.setDate(moonStartDate.getDate() + dayIndex);
  
  updateInfoPanel(moon, moonStartDate, moonEndDate, dayDate, dayIndex);
}

// Navigate to previous/next day
function navigateDay(direction) {
  if (allDays.length === 0) return;
  
  const currentDateStr = headerDate.textContent;
  let currentIndex = allDays.findIndex(day => 
    formatHeaderDate(day.date) === currentDateStr
  );
  
  if (currentIndex === -1) currentIndex = 0;
  
  let newIndex = currentIndex + direction;
  if (newIndex < 0) newIndex = allDays.length - 1;
  if (newIndex >= allDays.length) newIndex = 0;
  
  const targetDay = allDays[newIndex];
  
  if (!isFullCycle && targetDay.moonIndex !== -1) {
    hideAllMoonsExcept(targetDay.moonIndex);
  }
  
  if (targetDay.moonIndex !== -1) {
    scrollToMoon(targetDay.moonIndex);
    highlightDay(targetDay.moonIndex, targetDay.dayIndex);
  } else {
    const doatCard = document.querySelector('.day-out-of-time-card');
    if (doatCard) {
      clearHighlights();
      doatCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const cycleStart = getCycleStartForDate(targetDay.date);
      updateInfoPanel(null, null, null, targetDay.date, -1);
      updateHeaderDate(targetDay.date);
    }
  }
}

// Handle day button click
function handleDayClick(dayBtn, moon, moonStartDate, moonEndDate, dayDate, dayIndex, moonCard) {
  return function() {
    clearHighlights();
    
    activeMonthDiv = moonCard;
    activeDayBtn = dayBtn;
    moonCard.classList.add("active-month");
    dayBtn.classList.add("active-day");
    
    updateInfoPanel(moon, moonStartDate, moonEndDate, dayDate, dayIndex);
  };
}

// --- AUTO-REFRESH FUNCTIONS ---

function getMillisecondsUntilMidnight() {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setDate(now.getDate() + 1);
  midnight.setHours(0, 0, 0, 0);
  return midnight - now;
}

function refreshCalendarForNewDay() {
  const newToday = new Date();
  
  if (lastRefreshDate.toDateString() === newToday.toDateString()) {
    return;
  }
  
  today = newToday;
  lastRefreshDate = newToday;
  
  const cycleStart = getCurrentCycleStart();
  const daysSinceStart = getDaysSinceCycleStart(today, cycleStart);
  
  let newMoonIndex, newDayIndex;
  
  if (isDayOutOfTime(today)) {
    const doatCard = document.querySelector('.day-out-of-time-card');
    if (doatCard) {
      clearHighlights();
      doatCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    updateHeaderDate(today);
    showToast('✨ Day Out of Time has arrived');
    return;
  } else {
    newMoonIndex = Math.floor(daysSinceStart / 28);
    newDayIndex = daysSinceStart % 28;
  }
  
  if (isFullCycle) {
    clearHighlights();
    highlightDay(newMoonIndex, newDayIndex);
  } else {
    hideAllMoonsExcept(newMoonIndex);
    highlightDay(newMoonIndex, newDayIndex);
  }
  
  showToast('✨ New day has dawned');
}

function checkMissedMidnight() {
  if (!document.hidden) {
    const now = new Date();
    if (lastRefreshDate.toDateString() !== now.toDateString()) {
      refreshCalendarForNewDay();
    }
  }
}

function scheduleMidnightRefresh() {
  const msUntilMidnight = getMillisecondsUntilMidnight();
  
  if (refreshTimer) {
    clearTimeout(refreshTimer);
  }
  
  refreshTimer = setTimeout(() => {
    refreshCalendarForNewDay();
    scheduleMidnightRefresh();
  }, msUntilMidnight);
}

// --- RENDER MOONS ---

function renderMoons() {
  const cycleStart = getCurrentCycleStart();
  
  moons.forEach((moon, mIndex) => {
    const moonCard = document.createElement("div");
    moonCard.classList.add("moon-card");
    moonCard.dataset.monthIndex = mIndex;

    const moonStartDate = new Date(cycleStart);
    moonStartDate.setDate(cycleStart.getDate() + (mIndex * 28));
    const moonEndDate = new Date(moonStartDate);
    moonEndDate.setDate(moonStartDate.getDate() + 27);

    const moonHeader = document.createElement("div");
    moonHeader.className = "moon-header";
    moonHeader.innerHTML = `
      <div class="moon-identity">
        <h2 class="moon-name">${moon.name}</h2>
        <p class="moon-range">${formatShortDate(moonStartDate)} – ${formatShortDate(moonEndDate)} ${moonEndDate.getFullYear()}</p>
      </div>
      <div class="moon-metadata">
        <span class="moon-month">Month ${moon.number}</span>
        <span class="moon-year">${moon.action} • ${moon.power}</span>
      </div>
    `;

    const weekdays = document.createElement("div");
    weekdays.className = "weekdays";
    weekdays.innerHTML = `
      <span class="weekday-dali">Dali</span>
      <span class="weekday-seli">Seli</span>
      <span class="weekday-gamma">Gamma</span>
      <span class="weekday-kali">Kali</span>
      <span class="weekday-alpha">Alpha</span>
      <span class="weekday-limi">Limi</span>
      <span class="weekday-sillio">Sillio</span>
    `;

    const daysGrid = document.createElement("div");
    daysGrid.className = "days-grid";

    for (let d = 0; d < 28; d++) {
      const dayBtn = document.createElement("button");
      dayBtn.classList.add("day-btn");
      
      const dayDate = new Date(moonStartDate);
      dayDate.setDate(moonStartDate.getDate() + d);
      
      dayBtn.textContent = d + 1;
      dayBtn.dataset.mIndex = mIndex;
      dayBtn.dataset.dIndex = d;
      dayBtn.dataset.gDate = dayDate.toISOString();

      const daysSinceStart = getDaysSinceCycleStart(dayDate, cycleStart);
      if (daysSinceStart !== null) {
        const weekIndex = daysSinceStart % 7;
        dayBtn.classList.add(`galactic-${galacticWeek[weekIndex].name.toLowerCase()}`);
      }

      dayBtn.addEventListener("click", handleDayClick(
        dayBtn, moon, moonStartDate, moonEndDate, dayDate, d, moonCard
      ));

      daysGrid.appendChild(dayBtn);
    }

    moonCard.appendChild(moonHeader);
    moonCard.appendChild(weekdays);
    moonCard.appendChild(daysGrid);
    
    monthsContainer.appendChild(moonCard);
    allMoonCards.push(moonCard);
  });

  const doatDate = new Date(cycleStart);
  doatDate.setDate(cycleStart.getDate() + 364);
  const doatYear = doatDate.getFullYear();
  
  // Calculate DOAT kin for display
const doatDayNumber = 364;
const doatKin = (doatDayNumber % 260) + 1;
const doatToneIndex = (doatKin - 1) % 13;
const doatSealIndex = (doatKin - 1) % 20;
const doatSeal = seals[doatSealIndex];
const doatColor = sealColors[doatSeal];
const doatTone = tones[doatToneIndex];

const doatCard = document.createElement("div");
doatCard.className = "moon-card day-out-of-time-card";
doatCard.innerHTML = `
  <div class="moon-header">
    <div class="moon-identity">
      <h2 class="moon-name">Day Out of Time</h2>
      <p class="moon-range">July 25, ${doatYear}</p>
    </div>
    <div class="moon-metadata">
      <span class="moon-month">Gateway 13:20</span>
      <span class="moon-year">${doatColor} ${doatTone} ${doatSeal}</span>
    </div>
  </div>
  <div class="doat-message">
    <p>✨ ${doatColor} ${doatTone} ${doatSeal} • Kin ${doatKin} ✨</p>
    <p>13:20 Gateway of Forgiveness</p>
  </div>
`;
  
  monthsContainer.appendChild(doatCard);
  allMoonCards.push(doatCard);
}

// --- INITIALIZATION ---

function initializeCalendar() {
  buildMasterDayList();
  renderMoons();
  
  const cycleStart = getCurrentCycleStart();
  const daysSinceStart = getDaysSinceCycleStart(today, cycleStart);
  
  let currentMoonIndex, currentDayIndex;
  
  if (isDayOutOfTime(today)) {
    currentMoonIndex = 13;
    currentDayIndex = -1;
    hideAllMoonsExcept(13);
    const doatCard = document.querySelector('.day-out-of-time-card');
    if (doatCard) {
      doatCard.classList.add('active-month');
      updateHeaderDate(today);
    }
  } else {
    currentMoonIndex = Math.floor(daysSinceStart / 28);
    currentDayIndex = daysSinceStart % 28;
    hideAllMoonsExcept(currentMoonIndex);
    highlightDay(currentMoonIndex, currentDayIndex);
  }
}

// --- EVENT LISTENERS ---

settingsToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  settingsMenu.classList.toggle("hidden");
});

document.addEventListener("click", (e) => {
  if (!settingsToggle.contains(e.target) && !settingsMenu.contains(e.target)) {
    settingsMenu.classList.add("hidden");
  }
});

detailLevel.addEventListener("change", updateInfoPanelVisibility);
colorScheme.addEventListener("change", applyColorScheme);
showGalacticDays.addEventListener("change", updateInfoPanelVisibility);
showOracle.addEventListener("change", updateInfoPanelVisibility);
showWavespell.addEventListener("change", updateInfoPanelVisibility);
showBarsAndDots.addEventListener("change", updateInfoPanelVisibility);
compactMode.addEventListener("change", (e) => toggleCompactMode(e.target.checked));

prevDay.addEventListener("click", () => navigateDay(-1));
nextDay.addEventListener("click", () => navigateDay(1));

document.addEventListener('visibilitychange', checkMissedMidnight);

window.addEventListener('beforeunload', () => {
  if (refreshTimer) {
    clearTimeout(refreshTimer);
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    navigateDay(-1);
  } else if (e.key === "ArrowRight") {
    navigateDay(1);
  }
});

// --- START ---
window.addEventListener('load', () => {
  initializeCalendar();
  updateInfoPanelVisibility();
  scheduleMidnightRefresh();
  lastRefreshDate = new Date();
});
