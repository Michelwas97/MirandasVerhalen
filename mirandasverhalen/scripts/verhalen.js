function loadSongs(array) {

    for (var i = 0; i < songObjects.length; i++) {
      var songItem = songObjects[i];
  
      newRow = document.createElement('tr');
      newRow.id = songItem.id;
      tableBody.appendChild(newRow);
  
      var coverColumn = document.createElement('td');
      coverColumn.className = "cover-column";
      newRow.appendChild(coverColumn);
  
      var playButton = document.createElement('img');
      playButton.className = "play-song-button";
      playButton.id = "play-button-icon-" + newRow.id;
      playButton.src = "images/icons/song-play-button.svg";
      coverColumn.appendChild(playButton);
  
      var songIcon = document.createElement('img');
      songIcon.className = "play-song-button hidden";
      songIcon.id = "sound-icon-" + newRow.id;
      songIcon.src = "images/icons/sound-icon-active.svg";
      coverColumn.appendChild(songIcon);
  
      var coverFigure = document.createElement('figure');
      coverColumn.appendChild(coverFigure);
  
      var coverImg = document.createElement('img');
      coverImg.className = "playlist__song-cover";
      coverImg.src = songItem.coverArt;
      coverFigure.appendChild(coverImg);
  
      var titleColumn = document.createElement('td');
      var title = document.createTextNode(songItem.title);
      titleColumn.className = "title-column";
      titleColumn.appendChild(title);
      newRow.appendChild(titleColumn);  