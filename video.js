function changeVideoOnLoad() {
    const videoSources = [
        'waterfall2.mp4',
        'bubble.mp4',
        'rain.mp4',
        'desert.mp4',
    ];

    const videoElement = document.getElementById('myVideo');

    const lastPlayedIndex = sessionStorage.getItem('lastPlayedIndex');

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * videoSources.length);
    } while (randomIndex === lastPlayedIndex);

    const randomVideoSource = videoSources[randomIndex];
    videoElement.src = randomVideoSource;

    sessionStorage.setItem('lastPlayedIndex', randomIndex);
}