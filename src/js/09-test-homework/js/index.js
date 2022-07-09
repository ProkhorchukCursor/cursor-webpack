// Audio

import note87 from "./do.mp3";
import note69 from "./re.mp3";
import note82 from "./fa.mp3";
import note84 from "./sol.mp3";
import note89 from "./lja.mp3";
import note65 from "./bas.mp3";
import note83 from "./close.mp3";
import note68 from "./hand.mp3";
import note70 from "./idea.mp3";
import note71 from "./ow.mp3";
import note74 from "./trel.mp3";
import note75 from "./vargan.mp3";
import note72 from "./sms.mp3";

// Elements

const keys = document.querySelectorAll(`.piano-key`);

const container = document.querySelector("#hw-09");

container.innerHTML = `
      <audio data-key="81" src="${note87}"></audio>
      <audio data-key="87" src="${note69}"></audio>
      <audio data-key="69" src="${note82}"></audio>
      <audio data-key="82" src="${note84}"></audio>
      <audio data-key="84" src="${note89}"></audio>
      <audio data-key="89" src="${note65}"></audio>
      <audio data-key="85" src="${note83}"></audio>
      <audio data-key="65" src="${note68}"></audio>
      <audio data-key="83" src="${note70}"></audio>
      <audio data-key="68" src="${note71}"></audio>
      <audio data-key="70" src="${note74}"></audio>
      <audio data-key="71" src="${note75}"></audio>
      <audio data-key="72" src="${note72}"></audio>
      <audio data-key="74" src="${note87}"></audio>
      <audio data-key="75" src="${note87}"></audio>
      `;

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

const playAudio = (key, audio) => {
 audio.currentTime = 0;
 audio.play();
 key.classList.add("playing");
};

const handlePlayKey = (e) => {
 if (e.repeat) return;
 const key = document.querySelector(`.piano-key[data-key="${e.keyCode}"]`);
 const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
 if (!audio) return;
 playAudio(key, audio);
};

const handlePlayClick = (e) => {
 if (e.repeat) return;
 let key;
 keys.forEach((el) => {
  if (el === e.target) key = el;
 });
 if (!key) return;
 const audio = document.querySelector(`audio[data-key="${key.dataset.key}"]`);
 if (!audio) return;
 playAudio(key, audio);
};

function removeTransition(e) {
 this.classList.remove("playing");
}

window.addEventListener("keydown", handlePlayKey);
window.addEventListener("click", handlePlayClick);
