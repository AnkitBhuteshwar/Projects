// audio dont have id so
const img = document.querySelector('img') //for img so that they will chnge acc to the songs below you can se inside the array object is there 
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');

const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');

const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');


// i am using object inside the array
//array objects
const  songs = [
    {
        name: 'Ankit-1',
        displayName: 'Sar Se Tere Behti',
        artist: 'Hansraj',
    },
    {
        name: 'Ankit-2',
        displayName: 'Shambhoo Re',
        artist: 'Hansraj',
    },
    {
        name: 'Ankit-3',
        displayName: 'Laagi Lagan Shankara',
        artist: 'Hansraj'
    }
]







// wheather is playing or not , check if playing
let isPlaying = false;

// play
function playSong(){
    isPlaying = true;
    // for changing icon 
    playBtn.classList.replace('fa-play' , 'fa-pause')
    // change title 
    playBtn.setAttribute('title', 'pause');
    music.play();


}
//pause
function pauseSong(){
    isPlaying = false;
    playBtn.classList.replace('fa-pause' , 'fa-play')
    playBtn.setAttribute('title', 'play');
        music.pause();
    
}
// play or pause event listener

playBtn.addEventListener('click',() =>(isPlaying ? pauseSong() : playSong()));

  
//update the DOm
// changing the music data
// song is parameter 
function loadSong(song) {
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    // backticks using dollar or 
    // music.src = "music/" + song.name+ ".mp3"
    music.src =`music/${song.name}.mp3`;
    img.src = `img/${song.name}.jpg`;
    

}
//current song 
let songIndex = 0 ;

//previous song
function prevSong(){
    songIndex--;
if (songIndex < 0){
    songIndex = songs.length -1;
}
//    console.log(songIndex);
    loadSong(songs[songIndex]);
    playSong();
}
//next song
function nextSong(){
    songIndex++;
    if(songIndex > songs.length - 1){
        songIndex= 0 ;
    }
    // console.log(songIndex);
    loadSong(songs[songIndex]);
    playSong();
}


//on load select first songs 
loadSong(songs[songIndex]);
//update progress bar and time 

function updateProgressBar(e){
if (isPlaying){
    console.log(e);
}

}




prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('timeupdate', updateProgressBar);