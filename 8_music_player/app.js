let progress = document.getElementById('progress');
let song = document.getElementById('song');
let ctrlIcon = document.getElementById('ctrlIcon');
//load metadata of song
song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
}
//play pause function
function playPause() {
    if (song.paused) {
        song.play();
        ctrlIcon.classList.remove('fa-play');
        ctrlIcon.classList.add('fa-pause');
    } else {
        song.pause();
        ctrlIcon.classList.remove('fa-pause');
        ctrlIcon.classList.add('fa-play');
    }
}
//updating time
if(song.play){
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}
progress.onchange = function() {
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add('fa-pause');
    ctrlIcon.classList.remove('fa-play');
}