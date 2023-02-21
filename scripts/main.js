var storyObject = [{ id: 1,
    title: "De Kikker en de Os",
    language: "Dutch",
    imgUrl: "",
    summary: "Een Os kwam naar een rietachtig poel om te drinken. Toen hij zwaar in het water plonsde, trapte hij een jonge Kikker in de modder. De oude Kikker miste het jonge diertje snel en vroeg aan zijn broers en zussen wat er van hem was geworden. &ldquo;Een grote monster,&rdquo; zei een van hen, &ldquo;stepte op onze kleine broer met een van zijn enorme voeten!&rdquo; &ldquo;Groot was hij!&rdquo; zei de oude Kikker, zich opblazend. &ldquo;Was hij zo groot als dit?&rdquo; &ldquo;Oh, veel groter!&rdquo; riepen ze. De Kikker blies zich nog meer op. &ldquo;Hij kon niet groter zijn dan dit,&rdquo; zei ze. Maar de kleine Kikkers verklaarden allemaal dat het monster veel, veel groter was en de oude Kikker bleef zich steeds meer opblazen totdat ze opeens barstte."
}, { id: 2,
    title: "De Kikker en de Os",
    language: "Dutch",
    imgUrl: "",
    summary: "Een Os kwam naar een rietachtig poel om te drinken. Toen hij zwaar in het water plonsde, trapte hij een jonge Kikker in de modder. De oude Kikker miste het jonge diertje snel en vroeg aan zijn broers en zussen wat er van hem was geworden. &ldquo;Een grote monster,&rdquo; zei een van hen, &ldquo;stepte op onze kleine broer met een van zijn enorme voeten!&rdquo; &ldquo;Groot was hij!&rdquo; zei de oude Kikker, zich opblazend. &ldquo;Was hij zo groot als dit?&rdquo; &ldquo;Oh, veel groter!&rdquo; riepen ze. De Kikker blies zich nog meer op. &ldquo;Hij kon niet groter zijn dan dit,&rdquo; zei ze. Maar de kleine Kikkers verklaarden allemaal dat het monster veel, veel groter was en de oude Kikker bleef zich steeds meer opblazen totdat ze opeens barstte."
}, { id: 3,
    title: "De Kikker en de Os",
    language: "Dutch",
    imgUrl: "",
    summary: "Een Os kwam naar een rietachtig poel om te drinken. Toen hij zwaar in het water plonsde, trapte hij een jonge Kikker in de modder. De oude Kikker miste het jonge diertje snel en vroeg aan zijn broers en zussen wat er van hem was geworden. &ldquo;Een grote monster,&rdquo; zei een van hen, &ldquo;stepte op onze kleine broer met een van zijn enorme voeten!&rdquo; &ldquo;Groot was hij!&rdquo; zei de oude Kikker, zich opblazend. &ldquo;Was hij zo groot als dit?&rdquo; &ldquo;Oh, veel groter!&rdquo; riepen ze. De Kikker blies zich nog meer op. &ldquo;Hij kon niet groter zijn dan dit,&rdquo; zei ze. Maar de kleine Kikkers verklaarden allemaal dat het monster veel, veel groter was en de oude Kikker bleef zich steeds meer opblazen totdat ze opeens barstte."
}, { id: 4,
    title: "De Kikker en de Os",
    language: "Dutch",
    imgUrl: "",
    summary: "Een Os kwam naar een rietachtig poel om te drinken. Toen hij zwaar in het water plonsde, trapte hij een jonge Kikker in de modder. De oude Kikker miste het jonge diertje snel en vroeg aan zijn broers en zussen wat er van hem was geworden. &ldquo;Een grote monster,&rdquo; zei een van hen, &ldquo;stepte op onze kleine broer met een van zijn enorme voeten!&rdquo; &ldquo;Groot was hij!&rdquo; zei de oude Kikker, zich opblazend. &ldquo;Was hij zo groot als dit?&rdquo; &ldquo;Oh, veel groter!&rdquo; riepen ze. De Kikker blies zich nog meer op. &ldquo;Hij kon niet groter zijn dan dit,&rdquo; zei ze. Maar de kleine Kikkers verklaarden allemaal dat het monster veel, veel groter was en de oude Kikker bleef zich steeds meer opblazen totdat ze opeens barstte."
}, { id: 5,
    title: "De Kikker en de Os",
    language: "Dutch",
    imgUrl: "",
    summary: "Een Os kwam naar een rietachtig poel om te drinken. Toen hij zwaar in het water plonsde, trapte hij een jonge Kikker in de modder. De oude Kikker miste het jonge diertje snel en vroeg aan zijn broers en zussen wat er van hem was geworden. &ldquo;Een grote monster,&rdquo; zei een van hen, &ldquo;stepte op onze kleine broer met een van zijn enorme voeten!&rdquo; &ldquo;Groot was hij!&rdquo; zei de oude Kikker, zich opblazend. &ldquo;Was hij zo groot als dit?&rdquo; &ldquo;Oh, veel groter!&rdquo; riepen ze. De Kikker blies zich nog meer op. &ldquo;Hij kon niet groter zijn dan dit,&rdquo; zei ze. Maar de kleine Kikkers verklaarden allemaal dat het monster veel, veel groter was en de oude Kikker bleef zich steeds meer opblazen totdat ze opeens barstte."
}];

// load stories on page load

window.addEventListener("load", () => {
    var stories = document.getElementById("stories");
    var storyList = document.createElement("ul");
    storyList.className = "story-list";
    stories.appendChild(storyList);

    
    storyObject.map((story) => {
        const storyListItem = document.createElement("li");
        storyListItem.className = "story-list-item";
        storyList.appendChild(storyListItem);
      
        const storyImg = document.createElement("img");
        storyImg.className = "story-img";
        storyImg.src = story.imgUrl;
        storyListItem.appendChild(storyImg);
      
        const storyTitle = document.createElement("h3");
        storyTitle.className = "story-title";
        storyTitle.innerHTML = story.title;
        storyListItem.appendChild(storyTitle);
      
        const storySummary = document.createElement("p");
        storySummary.className = "story-summary";
        storySummary.innerHTML = story.summary;
        storyListItem.appendChild(storySummary);
      });
});

const synth = window.speechSynthesis;

// Add a click event listener to the <p> element
document.addEventListener("click", (e) => {
        // Get the text content of the <p> element
        const text = e.target.textContent;
        // TODO: change target paragrapth class to button when its added
        const targetParagraph = document.querySelector(".story-summary");

        if (e.target != targetParagraph && synth.speaking) {
            synth.cancel();
            return;
        }
        
        if (e.target == targetParagraph) {
            const utterThis = new SpeechSynthesisUtterance(text);
        
            utterThis.onend = (event) => {
              console.log("SpeechSynthesisUtterance.onend");
            };
        
            utterThis.onerror = (event) => {
              console.error("SpeechSynthesisUtterance.onerror" + " " + event.error);
            };

            synth.speak(utterThis);
          } else {
            console.log("Not a story summary");
        }     
});