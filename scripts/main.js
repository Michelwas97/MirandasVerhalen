import { renderStoryList } from "./storage.js";
import { setupSpeechSynthesis } from "./synthesizer.js";

document.addEventListener('DOMContentLoaded', async () => {
  routie('stories', function() {
    //this gets called when hash == #stories
    renderStoryList();
  });
});

window.addEventListener('load', () => {
  const speak = setupSpeechSynthesis();
});