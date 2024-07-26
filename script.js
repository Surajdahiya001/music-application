

console.log("working");

let music = document.getElementById("play-btn");
let progress = document.getElementById("range");

songindex = 0;

//  let songs = [{
//     audiopath: "./assets2/song.1.mp3", audioname: "1",
//     // audiopath: "song.2.mp3", audioname: "2",
//     // audiopath: "song.3.mp3", audioname: "3",
//     // audiopath: "song.4.mp3", audioname: "4",
//     // audiopath: "song.6.mp3", audioname: "6",
//     // audiopath: "song.5.mp3", audioname: "5",
//     // audiopath: "song.7.mp3", audioname: "7",
// } ]

let audio = new Audio("./assets2/song.1.mp3");


music.addEventListener('click', () => {

    if (audio.paused || audio.currentTime <= 0) {
        audio.play();

        music.classList.remove('fa-play');
        music.classList.add('fa-pause');

    } else {


        audio.pause();

        music.classList.remove('fa-pause');
        music.classList.add('fa-play');
    }
})

// progress bar updating 

audio.addEventListener('timeupdate', () => {

    update = parseInt((audio.currentTime / audio.duration) * 100);
    progress.value = update;
    console.log(update);

})


progress.addEventListener('change', () => {

    audio.currentTime = progress.value * audio.duration / 100;
    // console.log(audio.currentTime);

})

// let audiolist = document.getElementById("list");

// audiolist.addEventListener('click', ()=>{

//     console.log("heloo");

// })

// let playlist = document.getElementsByClassName("playlist");


// Array.from(playlist).forEach((element, i)=>{


//     element.getElementsByTagName("h4")[0].src = songs[i].audiopath;


// })


const songlist = () => {

    Array.from(document.getElementsByClassName("songitem")).forEach((element) => {

        element.classList.remove('fa-pause');
        element.classList.add('fa-play');

    })
}




Array.from(document.getElementsByClassName("songitem")).forEach((element) => {

    element.addEventListener('click', (e) => {

        songlist();
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');

        console.log(e.target.id);
        songindex = parseInt(e.target.id);

        audio.src = `./assets2/song.${songindex + 1}.mp3`;
        audio.currentTime = 0;
        audio.play();
        music.classList.remove('fa-play');
        music.classList.add('fa-pause');
        console.log(audio.src);
    })
})


// let songitem = document.getElementsByClassName("songitem");
// songitem.addEventListener('click', (element) => {

//     if (audio.paused || audio.currentTime<= 0){
//         audio.play();

//         element.classList.remove('fa-play');
//         element.classList.add('fa-pause');

//     }else{


//         audio.pause();

//         element.classList.add('fa-play');
//         element.classList.remove('fa-pause');
//     }
// })