import { state } from "./state.js";

const STORAGE_KEY = "chronoforge_state_v1";

class ChronoStorage {

  /* =============================
     SAVE STATE
  ============================== */

  save() {
    try {
      const payload = {
        metrics: state.metrics
      };

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(payload)
      );
    } catch (error) {
      console.error("Storage Save Failed:", error);
    }
  }

  /* =============================
     LOAD STATE
  ============================== */

  load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);

      if (!raw) return;

      const parsed = JSON.parse(raw);

      if (parsed.metrics) {
        state.metrics = parsed.metrics;
      }

    } catch (error) {
      console.warn("Storage Corrupted. Resetting.");
      this.clear();
    }
  }

  /* =============================
     CLEAR STATE
  ============================== */

  clear() {
    localStorage.removeItem(STORAGE_KEY);
    state.metrics = {};
  }
}

export const storage = new ChronoStorage();
