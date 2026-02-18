import { PHASE_LENGTH, TOTAL_PHASES } from "./phaseConfig.js";

class ChronoState {
  constructor() {
    this.startDate = new Date("2001-01-04"); // Canon anchor
    this.today = new Date();

    this.currentCycle = 1;
    this.currentPhaseIndex = 0;
    this.currentDayInPhase = 1;

    this.selectedDay = null;

    // Metrics stored per phase/day
    // Structure:
    // {
    //   phaseIndex: {
    //     dayNumber: { mood, task, focus, notes }
    //   }
    // }
    this.metrics = {};
  }

  /* =============================
     CALENDAR CALCULATION
  ============================== */

  calculatePosition() {
    const msPerDay = 1000 * 60 * 60 * 24;
    const elapsedDays = Math.floor(
      (this.today - this.startDate) / msPerDay
    );

    const totalDaysPerCycle = PHASE_LENGTH * TOTAL_PHASES;

    this.currentCycle =
      Math.floor(elapsedDays / totalDaysPerCycle) + 1;

    const dayInCycle = elapsedDays % totalDaysPerCycle;

    this.currentPhaseIndex =
      Math.floor(dayInCycle / PHASE_LENGTH);

    this.currentDayInPhase =
      (dayInCycle % PHASE_LENGTH) + 1;

    this.selectedDay = this.currentDayInPhase;
  }

  /* =============================
     METRICS MANAGEMENT
  ============================== */

  getDayMetrics(phaseIndex, day) {
    if (!this.metrics[phaseIndex]) {
      this.metrics[phaseIndex] = {};
    }

    if (!this.metrics[phaseIndex][day]) {
      this.metrics[phaseIndex][day] = {
        mood: 6,
        task: 0,
        focus: 5,
        notes: ""
      };
    }

    return this.metrics[phaseIndex][day];
  }

  updateDayMetrics(phaseIndex, day, data) {
    if (!this.metrics[phaseIndex]) {
      this.metrics[phaseIndex] = {};
    }

    this.metrics[phaseIndex][day] = {
      ...this.getDayMetrics(phaseIndex, day),
      ...data
    };
  }

  /* =============================
     DERIVED STATS
  ============================== */

  calculatePhaseStats(phaseIndex) {
    const phaseData = this.metrics[phaseIndex] || {};
    const days = Object.values(phaseData);

    if (days.length === 0) {
      return {
        avgEnergy: 0,
        totalOutput: 0,
        avgQuality: 0,
        consistency: 0
      };
    }

    const totalEnergy = days.reduce((sum, d) => sum + d.mood, 0);
    const totalOutput = days.reduce((sum, d) => sum + d.task, 0);
    const totalFocus = days.reduce((sum, d) => sum + d.focus, 0);

    return {
      avgEnergy: (totalEnergy / days.length).toFixed(1),
      totalOutput,
      avgQuality: (totalFocus / days.length).toFixed(1),
      consistency: Math.round(
        (days.filter(d => d.task > 0).length / PHASE_LENGTH) * 100
      )
    };
  }
}

export const state = new ChronoState();
