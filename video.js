function changeVideoOnLoad() {
    const videoSources = [
        'bubble.mp4',
        'water.mp4',
        'clock.mp4',
        'mountain.mp4',
        'water.mp4',
        'texture.mp4'
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