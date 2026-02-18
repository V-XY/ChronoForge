import { engine } from "../core/engine.js";
import { PHASES } from "../core/phaseConfig.js";

class ChronoRender {

  /* =============================
     FULL RENDER
  ============================== */

  renderAll() {
    this.renderPhaseInfo();
    this.renderCalendar();
    this.renderStats();
    this.renderProgressBars();
    this.renderSelectedDayMetrics();
  }

  /* =============================
     PHASE INFO
  ============================== */

  renderPhaseInfo() {
    const phase = engine.getCurrentPhase();

    document.getElementById("phaseName").textContent =
      `${phase.name} Phase`;

    document.getElementById("phaseFocus").textContent =
      `Focus: ${phase.focus}`;

    document.getElementById("phaseKPI").textContent =
      `KPI: ${phase.kpi}`;

    document.getElementById("phaseKillRule").textContent =
      `Kill Rule: ${phase.killRule}`;
  }

  /* =============================
     CALENDAR GRID
  ============================== */

  renderCalendar() {
    const calendarData = engine.generatePhaseCalendar();
    const container = document.getElementById("calendarGrid");

    container.innerHTML = "";

    calendarData.forEach(day => {
      const div = document.createElement("div");
      div.classList.add("day");

      if (day.isToday) {
        div.classList.add("current-day");
      }

      div.dataset.day = day.dayNumber;

      div.innerHTML = `
        <strong>${day.dayNumber}</strong>
        <small>${day.gregorian}</small>
      `;

      container.appendChild(div);
    });
  }

  /* =============================
     STATS SUMMARY
  ============================== */

  renderStats() {
    const stats = engine.getPhaseStats();

    document.getElementById("avgEnergy").textContent =
      stats.avgEnergy || "–";

    document.getElementById("totalOutput").textContent =
      stats.totalOutput || "–";

    document.getElementById("avgQuality").textContent =
      stats.avgQuality || "–";

    document.getElementById("consistency").textContent =
      stats.consistency !== undefined
        ? stats.consistency + "%"
        : "–";
  }

  /* =============================
     PROGRESS BARS
  ============================== */

  renderProgressBars() {
    const phasePercent = engine.getPhaseProgressPercent();
    const cyclePercent = engine.getCycleProgressPercent();

    document.getElementById("phaseProgress").style.width =
      `${phasePercent}%`;

    document.getElementById("cycleProgress").style.width =
      `${cyclePercent}%`;
  }

  /* =============================
     METRICS FORM
  ============================== */

  renderSelectedDayMetrics() {
    const metrics = engine.getMetricsForSelectedDay();

    document.getElementById("focusSlider").value =
      metrics.focus;

    document.getElementById("focusValue").textContent =
      metrics.focus;

    document.getElementById("taskCompleted").value =
      metrics.task;

    document.getElementById("notesInput").value =
      metrics.notes;

    document
      .querySelectorAll("#moodPicker button")
      .forEach(btn => btn.classList.remove("active"));

    const activeBtn = document.querySelector(
      `#moodPicker button[data-energy="${metrics.mood}"]`
    );

    if (activeBtn) activeBtn.classList.add("active");
  }
}

export const render = new ChronoRender();
