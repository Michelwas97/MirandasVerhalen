import { renderStorySection } from "./storage.js";
import { renderEmptyState } from "./storage.js";
import { setupSpeechSynthesis } from "./synthesizer.js";

document.addEventListener('DOMContentLoaded', async () => {
  routie({
    '': function() {
      //this gets called when hash == no hash (landing empty)
      renderEmptyState();
    },
    'stories': function() {
      //this gets called when hash == #stories
      renderStorySection();
    }
});
});

window.addEventListener('load', () => {
  const speak = setupSpeechSynthesis();
});