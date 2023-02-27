import { renderStoryList } from "./storage.js";
import { setupSpeechSynthesis } from "./synthesizer.js";

window.addEventListener('load', () => {

  const currentStoryList = renderStoryList();
  const speak = setupSpeechSynthesis();
});

// SOURCE: chat.openai.com/chat
const navLink = document.querySelector('a[href="#stories"]');

navLink.addEventListener('click', (e) => {
    e.preventDefault();

    const target = document.querySelector(navLink.getAttribute('href'));
    const targetPosition = target.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1500; // Adjust this value to set the scroll speed
    let start = null;

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percent = Math.min(progress / duration, 1);
      window.scrollTo(0, startPosition + distance * easeInOut(percent));
      if (progress < duration) window.requestAnimationFrame(step);
    }

    function easeInOut(t) {
      // Use a cubic-bezier curve for easing with an ease-in-out effect
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * (t - 1)) * (2 * (t - 1)) + 1;
    }


    window.requestAnimationFrame(step);
});