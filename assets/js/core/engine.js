export class ChronoEngine {
  constructor(birthDate) {
    this.birthDate = new Date(birthDate);
    this.today = new Date();
    this.daysInYear = this.isLeapYear(this.today.getFullYear()) ? 366 : 365;

    this.phases = [
      'Storm', 'Seed', 'Moon', 'Human', 'Sky', 'Dragon', 'Night',
      'Dog', 'Monkey', 'Warrior', 'Earth', 'Mirror', 'Wizard'
    ];

    // Phase color mapping (matches CSS classes)
    this.phaseClasses = [
      'phase-storm','phase-seed','phase-moon','phase-human','phase-sky',
      'phase-dragon','phase-night','phase-dog','phase-monkey','phase-warrior',
      'phase-earth','phase-mirror','phase-wizard'
    ];

    // Metrics storage (simple object; later can integrate localStorage or backend)
    this.metrics = {};
  }

  isLeapYear(year) {
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
  }

  getPhase(dayIndex) {
    // 13-phase repeating cycle
    return dayIndex % 13;
  }

  render() {
    const calendarGrid = document.getElementById('calendarGrid');
    calendarGrid.innerHTML = '';

    const startOfYear = new Date(this.today.getFullYear(), 0, 1);

    for (let i = 0; i < this.daysInYear; i++) {
      const dayDate = new Date(startOfYear);
      dayDate.setDate(startOfYear.getDate() + i);

      const dayDiv = document.createElement('div');
      dayDiv.classList.add('day');
      dayDiv.dataset.date = dayDate.toISOString().split('T')[0];

      // Phase assignment
      const phaseIndex = this.getPhase(i);
      dayDiv.classList.add(this.phaseClasses[phaseIndex]);
      dayDiv.dataset.phase = this.phases[phaseIndex];

      // Display: day of month
      dayDiv.innerHTML = `<small>${dayDate.getDate()}/${dayDate.getMonth()+1}</small>`;

      // Highlight current day
      if (dayDate.toDateString() === this.today.toDateString()) {
        dayDiv.classList.add('current-day');
      }

      // Click listener to load day metrics
      dayDiv.addEventListener('click', () => this.selectDay(dayDiv, dayDate, phaseIndex));

      calendarGrid.appendChild(dayDiv);
    }
  }

  selectDay(dayDiv, date, phaseIndex) {
    // Highlight selection
    document.querySelectorAll('.day.selected').forEach(d => d.classList.remove('selected'));
    dayDiv.classList.add('selected');

    // Update Phase Info
    document.getElementById('phaseName').textContent = this.phases[phaseIndex];
    document.getElementById('phaseFocus').textContent = 'Focus: –';
    document.getElementById('phaseKPI').textContent = 'KPI: –';
    document.getElementById('phaseKillRule').textContent = 'Kill Rule: –';

    // Load stored metrics if any
    const key = date.toISOString().split('T')[0];
    const dayMetrics = this.metrics[key] || {};

    // Mood
    document.querySelectorAll('#moodPicker button').forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.energy == dayMetrics.mood) btn.classList.add('active');
    });

    // Tasks
    document.getElementById('taskCompleted').value = dayMetrics.tasks || 0;

    // Focus
    const focusSlider = document.getElementById('focusSlider');
    focusSlider.value = dayMetrics.focus || 5;
    document.getElementById('focusValue').textContent = focusSlider.value;

    // Notes
    document.getElementById('notesInput').value = dayMetrics.notes || '';

    // Save form handler
    const form = document.getElementById('metricsForm');
    form.onsubmit = (e) => {
      e.preventDefault();
      this.metrics[key] = {
        mood: document.querySelector('#moodPicker button.active')?.dataset.energy || 0,
        tasks: parseInt(document.getElementById('taskCompleted').value),
        focus: parseInt(document.getElementById('focusSlider').value),
        notes: document.getElementById('notesInput').value
      };
      this.updateStats();
    };
  }

  updateStats() {
    const allMetrics = Object.values(this.metrics);
    if (!allMetrics.length) return;

    // Simple calculations
    const avgEnergy = allMetrics.reduce((a,b)=>a+(b.mood||0),0)/allMetrics.length;
    const totalOutput = allMetrics.reduce((a,b)=>a+(b.tasks||0),0);
    const avgQuality = allMetrics.reduce((a,b)=>a+(b.focus||0),0)/allMetrics.length;
    const consistency = (allMetrics.filter(m=>m.tasks>0).length / allMetrics.length)*100;

    document.getElementById('avgEnergy').textContent = avgEnergy.toFixed(1);
    document.getElementById('totalOutput').textContent = totalOutput;
    document.getElementById('avgQuality').textContent = avgQuality.toFixed(1);
    document.getElementById('consistency').textContent = consistency.toFixed(0) + '%';

    // Update progress bars (example: cycle progress)
    const cycleProgress = (allMetrics.length / this.daysInYear) * 100;
    document.getElementById('cycleProgress').style.width = `${cycleProgress}%`;

    const phaseProgress = ((allMetrics.length % 13) / 13) * 100;
    document.getElementById('phaseProgress').style.width = `${phaseProgress}%`;
  }
}
