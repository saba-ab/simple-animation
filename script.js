var audio = new Audio("./media/aphex-twin.mp3");

function playAudio() {
  audio.play();
}

document.addEventListener("click", playAudio);
