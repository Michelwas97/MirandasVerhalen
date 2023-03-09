import { storyObject } from "./storage.js";

export function setupSpeechSynthesis() {
    const synth = window.speechSynthesis;
    const storyList = document.querySelector('.view-list');
  
    if (storyList) {
      storyList.addEventListener('click', (e) => {
        const listItem = e.target.closest('.view-list-item');
  
        // Check if synth is speaking
        if (synth.speaking) {
          synth.cancel();
          return;
        }
  
        if (listItem) {
          const listItems = Array.from(storyList.children);
          const index = listItems.indexOf(listItem) + 1;
  
          const story = storyObject.find((story) => story.id === index);
          const summaryUtterance = new SpeechSynthesisUtterance(story.summary);
  
          summaryUtterance.onend = (event) => {
            console.log("SpeechSynthesisUtterance.onend");
          };
  
          summaryUtterance.onerror = (event) => {
            console.error("SpeechSynthesisUtterance.onerror" + " " + event.error);
          };
  
          synth.speak(summaryUtterance);
        } else {
          console.log("Not a story summary");
        }
      });
    }
  }