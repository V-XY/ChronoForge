import { storage } from "./core/storage.js";
import { engine } from "./core/engine.js";
import { render } from "./ui/render.js";
import { events } from "./ui/events.js";

class ChronoApp {

  initialize() {

    /* =============================
       LOAD STORED DATA
    ============================== */

    storage.load();

    /* =============================
       DEFAULT SELECTED DAY
       (Today if exists, else 1)
    ============================== */

    const today = new Date().getDate();
    engine.setSelectedDay(today);

    /* =============================
       INITIAL RENDER
    ============================== */

    render.renderCalendar();
    render.renderSelectedDayMetrics();
    render.renderStats();

    /* =============================
       BIND EVENTS
    ============================== */

    events.initialize();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const app = new ChronoApp();
  app.initialize();
});
