console.log("Linked")

//variables

const player = document.querySelector('video');
const videoControls = document.querySelector('#video-controls');
const playButton = document.querySelector('#play-button');
const pauseButton = document.querySelector('#pause-button');
const stopButton = document.querySelector('#stop-button');
const volumeSlider = document.querySelector('#change-vol');
const fullScreen = document.querySelector("#full-screen")
const playerCon = document.querySelector('#player-container')

//if JS is loaded, then remove default controls
player.controls = false
videoControls.classList.remove('hidden');
//functions

function playVideo() {
    player.play();
}

function pauseVideo() {
    player.pause();
}

function stopVideo() {
    player.pause();
    player.currentTime = 1;
}

function changeVolume() {
    //console.log("Volume changed")
    //console.log(volumeSlider.value);
    player.volume = volumeSlider.value;
}

function toggleFullScreen() {
    console.log("Fullscreen click")
    if(document.fullscreenElement) {
        document.exitFullscreen;
    }
    else if(document.webkitFullscreenElement) {
        document.webkitFullscreen();
    }
    else if(playerCon.webkitRequestFullscreen) {
        playerCon.webkitRequestFullscreen();
    }
    else {
        playerCon.webkitRequestFullscreen;
    }
}

function hideControls() {
    if(player.paused) {
        return;
    }
    videoControls.classList.add('hide');
}

function showControls() {
    videoControls.classList.remove('hide')


}

function toggleMobileMenu(menu) {
    menu.classList.toggle('open')
}

//event listeners

playButton.addEventListener("click", playVideo);
pauseButton.addEventListener("click", pauseVideo);
stopButton.addEventListener("click", stopVideo);
volumeSlider.addEventListener("input", changeVolume);
fullScreen.addEventListener("click", toggleFullScreen);
videoControls.addEventListener("mouseenter", showControls);
videoControls.addEventListener("mouseleave", hideControls);
player.addEventListener("mouseenter",showControls);
player.addEventListener("mouseleave", hideControls);