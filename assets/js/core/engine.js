import { state } from "./state.js";
import { PHASES, PHASE_LENGTH, TOTAL_PHASES } from "./phaseConfig.js";

class ChronoEngine {
  constructor() {
    state.calculatePosition();
  }

  /* =============================
     CURRENT CONTEXT
  ============================== */

  getCurrentPhase() {
    return PHASES[state.currentPhaseIndex];
  }

  getCurrentDay() {
    return state.currentDayInPhase;
  }

  getCurrentCycle() {
    return state.currentCycle;
  }

  getSelectedDay() {
    return state.selectedDay;
  }

  setSelectedDay(day) {
    state.selectedDay = day;
  }

  /* =============================
     GREGORIAN CONVERSION
  ============================== */

  getGregorianForDay(day) {
    const today = new Date(state.today);

    const offset = day - state.currentDayInPhase;
    const target = new Date(today);
    target.setDate(today.getDate() + offset);

    return target.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  }

  /* =============================
     PHASE CALCULATIONS
  ============================== */

  getPhaseProgressPercent() {
    return Math.round(
      (state.currentDayInPhase / PHASE_LENGTH) * 100
    );
  }

  getCycleProgressPercent() {
    const daysCompleted =
      state.currentPhaseIndex * PHASE_LENGTH +
      state.currentDayInPhase;

    return Math.round(
      (daysCompleted / (PHASE_LENGTH * TOTAL_PHASES)) * 100
    );
  }

  /* =============================
     CALENDAR DATA GENERATION
  ============================== */

  generatePhaseCalendar() {
    const days = [];

    for (let day = 1; day <= PHASE_LENGTH; day++) {
      days.push({
        dayNumber: day,
        isToday: day === state.currentDayInPhase,
        gregorian: this.getGregorianForDay(day),
        metrics: state.getDayMetrics(
          state.currentPhaseIndex,
          day
        )
      });
    }

    return days;
  }

  /* =============================
     METRICS INTERFACE
  ============================== */

  getMetricsForSelectedDay() {
    return state.getDayMetrics(
      state.currentPhaseIndex,
      state.selectedDay
    );
  }

  updateMetricsForSelectedDay(data) {
    state.updateDayMetrics(
      state.currentPhaseIndex,
      state.selectedDay,
      data
    );
  }

  getPhaseStats() {
    return state.calculatePhaseStats(
      state.currentPhaseIndex
    );
  }
}

export const engine = new ChronoEngine();
