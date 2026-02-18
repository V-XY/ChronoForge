// assets/js/engine.js
export const PHASES = [
  { name: "Storm", color: "#007BFF", focus: "Action & Change", kpi: "Productivity", killRule: "Avoid Delay" },
  { name: "Moon", color: "#6F42C1", focus: "Reflection", kpi: "Clarity", killRule: "Distraction" },
  { name: "Seed", color: "#28A745", focus: "Growth", kpi: "Learning", killRule: "Stagnation" },
  // Add remaining 10 phases here...
];

export class ChronoEngine {
  constructor(startDate = null) {
    this.startDate = startDate ? new Date(startDate) : new Date('2001-01-04');
    this.phaseLength = 28; // Days per phase
    this.phases = PHASES;
    this.totalPhases = this.phases.length;
    this.today = new Date();
    this.currentPhaseIndex = 0;
    this.dayInPhase = 0;
    this.weekIndex = 0;
    this.cycleNumber = 0;
    this.selectedDay = null;

    this.userMetrics = {}; // Store per-day metrics

    this.calculateCurrentPhase();
  }

  calculateCurrentPhase() {
    const msPerDay = 1000 * 60 * 60 * 24;
    const elapsedDays = Math.floor((this.today - this.startDate) / msPerDay);
    const totalPhaseDays = this.phaseLength * this.totalPhases;
    this.cycleNumber = Math.floor(elapsedDays / totalPhaseDays) + 1;
    const dayInCycle = elapsedDays % totalPhaseDays;
    this.currentPhaseIndex = Math.floor(dayInCycle / this.phaseLength);
    this.dayInPhase = (dayInCycle % this.phaseLength) + 1;
    this.weekIndex = Math.floor((this.dayInPhase - 1) / 7) + 1;
    this.currentPhase = this.phases[this.currentPhaseIndex];
  }

  generateCalendarGrid(containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    for (let i = 1; i <= this.phaseLength; i++) {
      const dayBlock = document.createElement('div');
      dayBlock.classList.add('day');

      const dayOffset = i - this.dayInPhase;
      const equivalentDate = new Date(this.today);
      equivalentDate.setDate(equivalentDate.getDate() + dayOffset);
      const gDate = equivalentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

      dayBlock.innerHTML = `<span>Day ${i}</span><br><small>${gDate}</small>`;

      if (i === this.dayInPhase) dayBlock.classList.add('current-day');
      dayBlock.style.borderColor = this.currentPhase.color;

      dayBlock.dataset.day = i;
      dayBlock.addEventListener('click', () => {
        this.selectedDay = i;
        this.loadMetricsForDay(i);
      });

      container.appendChild(dayBlock);
    }
  }

  updatePhaseOverview() {
    document.getElementById('phaseName').textContent = this.currentPhase.name;
    document.getElementById('phaseFocus').textContent = `Focus: ${this.currentPhase.focus}`;
    document.getElementById('phaseKPI').textContent = `KPI: ${this.currentPhase.kpi}`;
    document.getElementById('phaseKillRule').textContent = `Kill Rule: ${this.currentPhase.killRule}`;
  }

  updateProgressBars() {
    const phasePercent = (this.dayInPhase / this.phaseLength) * 100;
    const cyclePercent = ((this.currentPhaseIndex * this.phaseLength + this.dayInPhase) /
      (this.totalPhases * this.phaseLength)) * 100;

    document.getElementById('phaseProgress').style.width = `${phasePercent}%`;
    document.getElementById('cycleProgress').style.width = `${cyclePercent}%`;
  }

  loadMetricsForDay(day) {
    const defaultMetrics = { mood: 6, task: 0, focus: 5, notes: '' };
    if (!this.userMetrics[day]) this.userMetrics[day] = defaultMetrics;

    // Pre-fill the form
    const metrics = this.userMetrics[day];
    document.getElementById('focusSlider').value = metrics.focus;
    document.getElementById('focusValue').textContent = metrics.focus;
    document.getElementById('notesInput').value = metrics.notes;
    document.getElementById('taskCompleted').value = metrics.task;

    // Mood button active highlight
    document.querySelectorAll('#moodPicker button').forEach(btn => btn.classList.remove('active'));
    const moodBtn = [...document.querySelectorAll('#moodPicker button')].find(b => b.dataset.energy == metrics.mood);
    if (moodBtn) moodBtn.classList.add('active');

    // Update summary
    this.calculateStats();
  }

  saveMetrics(day) {
    const mood = Number(document.querySelector('#moodPicker .active')?.dataset.energy || 6);
    const task = Number(document.getElementById('taskCompleted').value);
    const focus = Number(document.getElementById('focusSlider').value);
    const notes = document.getElementById('notesInput').value;

    this.userMetrics[day] = { mood, task, focus, notes };
    this.calculateStats();
  }

  calculateStats() {
    const metricsArr = Object.values(this.userMetrics);
    if (!metricsArr.length) return;

    const totalEnergy = metricsArr.reduce((acc, m) => acc + m.mood, 0);
    const totalOutput = metricsArr.reduce((acc, m) => acc + m.task, 0);
    const totalQuality = metricsArr.reduce((acc, m) => acc + m.focus, 0);

    const avgEnergy = (totalEnergy / metricsArr.length).toFixed(1);
    const avgQuality = (totalQuality / metricsArr.length).toFixed(1);
    const consistency = ((metricsArr.filter(m => m.task > 0).length / metricsArr.length) * 100).toFixed(0);

    document.getElementById('avgEnergy').textContent = avgEnergy;
    document.getElementById('totalOutput').textContent = totalOutput;
    document.getElementById('avgQuality').textContent = avgQuality;
    document.getElementById('consistency').textContent = consistency + '%';
  }

  setupFormListeners() {
    // Mood buttons
    document.querySelectorAll('#moodPicker button').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#moodPicker button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        if (this.selectedDay) this.saveMetrics(this.selectedDay);
      });
    });

    // Task Completed
    document.getElementById('taskCompleted').addEventListener('change', () => {
      if (this.selectedDay) this.saveMetrics(this.selectedDay);
    });

    // Focus slider
    const slider = document.getElementById('focusSlider');
    slider.addEventListener('input', () => {
      document.getElementById('focusValue').textContent = slider.value;
      if (this.selectedDay) this.saveMetrics(this.selectedDay);
    });

    // Notes
    document.getElementById('metricsForm').addEventListener('submit', e => {
      e.preventDefault();
      if (this.selectedDay) this.saveMetrics(this.selectedDay);
      alert('Metrics saved!');
    });
  }

  render() {
    this.generateCalendarGrid('calendarGrid');
    this.updatePhaseOverview();
    this.updateProgressBars();
    this.loadMetricsForDay(this.dayInPhase);
    this.setupFormListeners();
  }
}
