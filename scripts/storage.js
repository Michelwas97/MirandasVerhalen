import storyApi from "./storyApi.js";
// function to create story list

export async function renderStorySection() {
    // Get story list from the API
    const apiStoryList = await storyApi.getStories();

    const routerView = document.getElementById("router-view");
    routerView.removeAttribute("class", "empty-state");
    routerView.setAttribute("class", "story-state");

    const routerViewTitle = document.createElement("h2");
    routerViewTitle.innerHTML = "Verhalen";
    routerViewTitle.className = "view-list-title";
    routerView.appendChild(routerViewTitle);

    const storyList = document.createElement("ul");
    storyList.className = "view-list";
    routerView.appendChild(storyList);

    
    apiStoryList.map((list) => {
        // create story list item
        const storyListItem = document.createElement("li");
        storyListItem.className = "view-list-item";
        storyList.appendChild(storyListItem);
      
        // create story image
        const storyImg = document.createElement("img");
        storyImg.className = "view-img";
        storyImg.src = list.imgUrl;
        storyListItem.appendChild(storyImg);
      
        // create story info container
        const storyInfo = document.createElement("div");
        storyInfo.className = "view-info";
        storyListItem.appendChild(storyInfo);

            // create story title and append to info container
            const storyTitle = document.createElement("h3");
            storyTitle.className = "view-title";
            storyTitle.innerHTML = list.title;
            storyInfo.appendChild(storyTitle);
      
            // create story summary and append to info container
            const storySummary = document.createElement("p");
            storySummary.className = "view-summary";
            storySummary.innerHTML = list.summary;
            storyInfo.appendChild(storySummary);

        // create story button append to list item
        const storyButton = document.createElement("button");
        storyButton.className = "view-button";
        storyListItem.appendChild(storyButton);

        // create story svg appearance and append to button
        const iconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        const iconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        const iconCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

        iconSvg.classList.add('view-button-appearance');
        iconSvg.setAttribute("fill", "none");
        iconSvg.setAttribute("viewBox", "0 0 146 146");
        iconSvg.setAttribute("width", "146");
        iconSvg.setAttribute("height", "146");

        iconPath.setAttribute(
            "d",
            "M57.0972 109.209C55.0372 110.511 52.9525 110.587 50.8431 109.437C48.7337 108.287 47.677 106.508 47.6729 104.101V41.9039C47.6729 39.5002 48.7296 37.7214 50.8431 36.5676C52.9567 35.4139 55.0413 35.49 57.0972 36.796L107.463 67.8943C109.317 69.0962 110.244 70.7988 110.244 73.0023C110.244 75.2057 109.317 76.9083 107.463 78.1102L57.0972 109.209Z"
          );
        iconPath.setAttribute("fill", "#FF7151");

        iconCircle.setAttribute("cx", "73");
        iconCircle.setAttribute("cy", "73");
        iconCircle.setAttribute("r", "72");
        iconCircle.setAttribute("stroke", "#FF7151");
        iconCircle.setAttribute("stroke-width", "2");

        iconSvg.appendChild(iconPath);
        iconSvg.appendChild(iconCircle);
        storyButton.appendChild(iconSvg);

        // generate functie maken voor svg
        // documenteren en data via link van robert opensheet
      });
};

export async function renderEmptyState() {
    const routerView = document.getElementById("router-view");
    routerView.removeAttribute("class", "story-state");
    routerView.setAttribute("class", "empty-state");

    const emptyStateTitle = document.createElement("h2");
    emptyStateTitle.className = "view-list-title";
    emptyStateTitle.innerHTML = "Geen verhalen gevonden";
    routerView.appendChild(emptyStateTitle);

    const emptyStateList = document.createElement("ul");
    emptyStateList.className = "view-list";
    routerView.appendChild(emptyStateList);

    for (let i = 0; i < 4; i++) {
        const emptyStateItem = document.createElement("li");
        emptyStateItem.className = "view-list-item";
        emptyStateList.appendChild(emptyStateItem);

        const emptyStateThumbnail = document.createElement("img");
        emptyStateThumbnail.className = "view-img";
        emptyStateThumbnail.src = "https://via.placeholder.com/150";
        emptyStateItem.appendChild(emptyStateThumbnail);

        const emptyStateInfo = document.createElement("div");
        emptyStateInfo.className = "view-info";
        emptyStateItem.appendChild(emptyStateInfo);

            const emptyStateTitle = document.createElement("h3");
            emptyStateTitle.className = "view-title";
            emptyStateTitle.innerHTML = "Klik op Luisteren knop om te zoeken naar verhalen.";
            emptyStateInfo.appendChild(emptyStateTitle);

            const emptyStateSummary = document.createElement("p");
            emptyStateSummary.className = "view-summary";
            emptyStateSummary.innerHTML = "Nog geen samenvatting van verhaal gevonden";
            emptyStateInfo.appendChild(emptyStateSummary);
      }
};