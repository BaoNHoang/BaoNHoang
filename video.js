
// scripts/video.js
const videoSources = [        
    'waterfall2.mp4',
    'bubble.mp4',
    'rain.mp4',
    'desert.mp4',
];

function getNextRandomVideo() {
  const lastPlayedIndex = parseInt(sessionStorage.getItem('lastPlayedIndex'), 10);
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * videoSources.length);
  } while (randomIndex === lastPlayedIndex && videoSources.length > 1);
  sessionStorage.setItem('lastPlayedIndex', randomIndex);
  return videoSources[randomIndex];
}

function changeVideo() {
  const videoElement = document.getElementById('myVideo');
  const sourceElement = videoElement.querySelector('source');
  sourceElement.src = getNextRandomVideo();
  videoElement.load();
  videoElement.play();
}

window.onload = function () {
  changeVideo();
  const video = document.getElementById('myVideo');
  video.addEventListener('ended', changeVideo);
};
