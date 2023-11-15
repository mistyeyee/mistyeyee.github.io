
function toggleTheme() {
    var bodyElement = document.body;
    bodyElement.classList.toggle('dark-mode');
}

let toggleButton = document.getElementById("toggleButton");
toggleButton.onclick = toggleTheme;