/** @format */

let audio = new Audio();

export async function play() {
  audio.src = "assets/album/01.mp3";
  audio.load();
  audio.play();
}

export async function stop() {
  audio.src = "";
  audio.load();
  audio.play();
}
