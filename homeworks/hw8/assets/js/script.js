function toggleSongs() {
    const songsSecondHalf = document.getElementById('songs-second-half');
  
    if (songsSecondHalf) {
      songsSecondHalf.classList.toggle('hidden');
    }
  }

document.getElementById("toggle-button").onclick = toggleSongs;