# ChronoForge
## Digital Harmonic Time Engine

ChronoForge is a culturally-aligned digital implementation of the 13-Moon Dreamspell harmonic calendar, synchronized with the Gregorian system and the authentic 260-day Tzolkin cycle.

This is **not a calendar app**. It is a time-shaping instrument that preserves the mathematical integrity, tonal structure, and cosmological framework of the original system.

Built with **pure HTML, CSS, and Vanilla JavaScript**.

No frameworks. No dependencies. No distortion of source cosmology.

---

## What ChronoForge Does

ChronoForge synchronizes two systems:
- **Gregorian calendar** (civil time)
- **13-Moon harmonic calendar** (galactic time)

For every selected day, it calculates:

| Element | Description |
|---------|-------------|
| **Gregorian Day** | Civil date with weekday |
| **Moon** | Current moon name, day position, guidance |
| **Galactic Tone** | Number + name (e.g., "8 - Galactic") |
| **Solar Seal** | Name with tribe color |
| **Kin Number** | 1–260 identity |
| **Kin Full Name** | Color + Tone + Seal (e.g., "Red Magnetic Moon") |
| **Wavespell** | Current 13-day wavespell and position |
| **Oracle Cross** | Analog, Antipode, Occult, and Guide relationships |
| **Galactic Day** | Dali, Seli, Gamma, Kali, Alpha, Limi, or Sillio with chakra |
| **Moon Guidance** | Motivational harmonic theme |

---

## Core Structure

ChronoForge follows the traditional framework without reinterpretation:

| Element | Count |
|---------|-------|
| Moons | 13 |
| Days per Moon | 28 |
| Harmonic cycle | 364 days |
| Tzolkin cycle | 260 days |
| Galactic Tones | 13 |
| Solar Seals | 20 |
| Wavespell cycle | 13 days |

### 13 Galactic Tones

| Tone | Name | Tone | Name |
|------|------|------|------|
| 1 | Magnetic | 8 | Galactic |
| 2 | Lunar | 9 | Solar |
| 3 | Electric | 10 | Planetary |
| 4 | Self-Existing | 11 | Spectral |
| 5 | Overtone | 12 | Crystal |
| 6 | Rhythmic | 13 | Cosmic |
| 7 | Resonant | | |

### 20 Solar Seals with Tribe Colors

| # | Seal | Color | # | Seal | Color |
|---|------|-------|---|------|-------|
| 1 | Dragon | Red | 11 | Monkey | Blue |
| 2 | Wind | White | 12 | Human | Yellow |
| 3 | Night | Blue | 13 | Skywalker | Red |
| 4 | Seed | Yellow | 14 | Wizard | White |
| 5 | Serpent | Red | 15 | Eagle | Blue |
| 6 | World-Bridger | White | 16 | Warrior | Yellow |
| 7 | Hand | Blue | 17 | Earth | Red |
| 8 | Star | Yellow | 18 | Mirror | White |
| 9 | Moon | Red | 19 | Storm | Blue |
| 10 | Dog | White | 20 | Sun | Yellow |

**No derivative naming. No alternate reinterpretations.**

---

## Features

### Calendar System
- 13 Moons × 28 days with fixed perpetual date ranges
- Automatic Tzolkin calculation (Tone + Seal) based on actual date
- Authentic seal and tone names
- Correct 260-day cycling with modulo arithmetic
- Day Out of Time special handling (July 25)

### Synchronization
- Gregorian day display with proper formatting
- Precise Gregorian equivalent range per Moon
- Real-time date detection that updates at midnight
- Click-based day selection with visual feedback
- Active Moon and Day highlighting

### Information Panel
For each selected day, ChronoForge displays:
- **Moon Identity**: Name, guidance, month number
- **Date & Position**: Moon day, Gregorian date, galactic day with chakra
- **Kin Identity**: Kin number, full kin name, tribe color
- **Tone & Seal**: Tone with action/power, seal with tribe
- **Oracle**: Analog, Antipode, Occult, and Guide relationships
- **Wavespell**: Current wavespell name, position, and kin range

### Navigation & Interaction
- Previous/Next day arrows with wrap-around navigation
- Toggle between current moon only and full cycle view
- Keyboard navigation (left/right arrow keys)
- Auto-refresh at midnight with visual notification
- Compact mode toggle for tighter spacing
- Multiple detail levels (Basic, Standard, Complete)

### User Interface
- Clean, responsive grid layout
- Tribe color coding (Red, White, Blue, Yellow)
- Galactic week day indicators with chakra abbreviations
- Sticky header with current date and navigation
- Floating auto-refresh indicator
- Toast notifications for day changes
- Print-friendly styles

---

## Architecture

### File Structure
```
index.html
styles.css
script.js
```

The system runs entirely **client-side** with no backend requirements.

### Logic Flow

1. **Reference anchor**: July 26 of current/preceding year anchors the 260-day Tzolkin cycle
2. **Offset calculation**: Days since cycle start determine all harmonic values
3. **Kin determination**: `((dayNumber - 1) % 260) + 1`
4. **Tone cycling**: `(kin - 1) % 13` maps to 13 tones
5. **Seal cycling**: `(kin - 1) % 20` maps to 20 seals
6. **Moon index**: `Math.floor(daysSinceStart / 28)` determines current moon
7. **Galactic day**: `(daysSinceStart - 1) % 7` maps to 7 galactic week days
8. **Oracle relationships**: Harmonic seal mathematics derive the four oracle positions
9. **Wavespell**: `Math.floor((kin - 1) / 13)` determines the 13-day wavespell

**All calculations are dynamic. No hardcoded day mappings.**

---

## Cultural Alignment

ChronoForge respects the source cosmology by preserving:

- **13 Galactic Tones** with their full names and attributes
- **20 Solar Seals** with authentic names and tribe colors
- **260-day Tzolkin cycle** with correct modulo cycling
- **Wavespell structure** (13-day harmonic cycles)
- **Oracle Cross logic** based on seal harmonics
- **28-day Moon structure** with fixed perpetual dates
- **Day Out of Time** as the 365th day with special significance

**This is not a hybrid system. It follows the traditional Dreamspell framework.**

---

## How to Use

1. **Open the application** – The current date is automatically detected and highlighted
2. **Navigate days** – Use the arrow buttons in the header or click directly on any day
3. **View details** – The information panel updates with complete harmonic data for the selected day
4. **Toggle views** – Click "Show Full Cycle" to see all moons, or "Hide Extra Months" to focus on the current moon
5. **Adjust settings** – Use the gear icon to change detail level, color scheme, and toggle features
6. **Keyboard shortcuts** – Left/right arrow keys navigate between days

The interface is designed for both **casual exploration** and **deep harmonic study**.

---

## Philosophy

**Time is not linear. It is harmonic.**

Modern time fragments attention through mechanical segmentation. Harmonic time restores pattern recognition through cyclic resonance.

ChronoForge bridges civil time and galactic mathematics into a single interactive engine. It is not about scheduling or productivity. It is about **alignment** – understanding where you stand in the larger cycles of galactic time.

Every click reveals another layer of the harmonic matrix. Every day has its place in the 260-key codex. Every kin has its oracle, its wavespell, its tribe, and its purpose.

---

## Roadmap

### Near-term
- [ ] Persist user settings in localStorage
- [ ] Tribal color dynamic accenting across UI
- [ ] Smooth moon transition animations
- [ ] Multi-cycle browsing (past/future years)

### Mid-term
- [ ] Kin search engine (find any kin by number or name)
- [ ] Advanced oracle visualization with relationship mapping
- [ ] Export selected day as image or card
- [ ] Sacred geometry theme mode

### Long-term
- [ ] Progressive Web App (PWA) support with offline access
- [ ] Lunar phase integration
- [ ] Dreamspell birthday calculator
- [ ] 52-year cycle tracking with galactic notation

---

## Technical Details

| Aspect | Implementation |
|--------|----------------|
| Language | Vanilla JavaScript (ES6) |
| Styling | CSS3 with CSS variables |
| Markup | HTML5 semantic elements |
| Date handling | Native JavaScript Date object |
| Responsive | Mobile-first with multiple breakpoints |
| Performance | No external libraries, minimal DOM operations |
| State management | Pure JavaScript with event-driven updates |

---

## About the Creator

**Virxee** (Millenian N. Ngangmi) is a systems architect and software engineer; I build structured, high-performance digital experiences at the intersection of logic, culture, and intelligent systems.

I design scalable tools, clean architectures, and intentional products that balance precision with clarity.

### What I Build

| Type | Focus |
|------|-------|
| 🌐 Web Applications | Custom platforms, WordPress, Shopify, interactive tools |
| 📱 Mobile Apps | Flutter-based applications |
| ⚙️ Automation Systems | Internal tools, workflow engines |
| 🧠 Data Engines | Intelligent, structured information systems |
| 🌀 Time-Based Interfaces | Harmonic calendars, cyclic systems like **ChronoForge** |

### Core Competencies

- Software Architecture
- UI Engineering
- Systems Design
- Product Iteration
- Cross-Platform Development (Flutter)
- WordPress Development

### Connect / Work with Me

📧 **Email:** ngangmi.virxee@gmail.com  
🐦 **X (Twitter):** [@NgangmiR](https://x.com/NgangmiR)  
🌍 **Website:** [virxee.netlify.app](https://virxee.netlify.app) *(SMMA & software projects)*  
💼 **GitHub Sponsors:** [@V-XY](https://github.com/sponsors/V-XY)  
☕ **Support:** [Buy Me a Coffee](https://buymeacoffee.com/virxee) *(coming soon)*

### Open to Opportunities

- Freelance software projects
- System design collaborations
- Product engineering partnerships
- Strategic technical consulting

---

## License

MIT License © 2026 Virxee

---

**Virxee** · Founder  
ngangmi.virxee@gmail.com

*Building with precision and purpose.*
