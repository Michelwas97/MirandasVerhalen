import { renderStorySection } from "./storage.js";
import { renderEmptyState } from "./storage.js";
import { setupSpeechSynthesis } from "./synthesizer.js";

const routerView = document.getElementById("router-view");

document.addEventListener('DOMContentLoaded', async () => {
  routie({
    '': function() {
      const viewListTitle = document.querySelector(".view-list-title");
      const viewList = document.querySelector(".view-list");

      if (routerView.classList.contains("story-state")) {
        routerView.removeChild(viewListTitle);
        routerView.removeChild(viewList);
      }

      //this gets called when hash == no hash and also checks if the router-view has the class story-state
      renderEmptyState();
    },
    'stories': function() {
      const viewListTitle = document.querySelector(".view-list-title");
      const viewList = document.querySelector(".view-list");
      
      if (routerView.classList.contains("empty-state")){
        routerView.removeChild(viewListTitle);
        routerView.removeChild(viewList);
        
        //this gets called when hash == #stories
        renderStorySection();
        setupSpeechSynthesis();
      }
    }
});
});