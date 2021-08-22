var audio = document.getElementById('audio');
var playPauseBTN = document.getElementById('playPauseBTN');
var count = 0;

function playPause(){
	if(count == 0){
		count = 1;
		audio.play();
		playPauseBTN.innerHTML = "Pause ⏸";
		image.style.animationPlayState = "running"
	}else{
		count = 0;
		audio.pause();
		playPauseBTN.innerHTML = "Play ►";
		image.style.animationPlayState = "paused"
	}
}

function stop(){
	playPause()
	audio.pause();
	audio.currentTime = 0;
	playPauseBTN.innerHTML = "Play ►";
}

