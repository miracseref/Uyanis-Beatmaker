const keys = Array.from(document.querySelectorAll(".key"));
const looper = new Array();

function playSound(e) {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const key = document.querySelector(`div[data-key='${e.keyCode}']`);

  if (!audio) return;

  looper.push(audio);
  key.classList.add("playing");
  setInterval(() => {
    // while (e.keyCode !== "27") {
    for (let i = 0; i < looper.length; i++) {
      // looper[i].currentTime = 0;
      looper[i].play();
      console.log(looper[i]);
    }
    // }
  }, 500);
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
