const music = new Audio('music/IWannaBeYours.mp3');
// music.play();

const songs = [
    {
        id: 1,
        songName: `I Wanna Be Yours <br> 
        <div class="subtitle">Arctic Monkeys</div>`,
        poster: "img/1.jpg"
    },
    {
        id: 2,
        songName: `Here <br> 
        <div class="subtitle">Alessia Cara</div>`,
        poster: "img/2.jpg"
    },
    {
        id: 3,
        songName: `Escapism <br> 
        <div class="subtitle">Raye</div>`,
        poster: "img/3.jpg"
    },
    {
        id: 4,
        songName: `Muddy Waters <br> 
        <div class="subtitle">LP</div>`,
        poster: "img/4.jpg"
    },
    {
        id: 5,
        songName: `Happiness is a Butterfly <br> 
        <div class="subtitle">Lana Del Rey</div>`,
        poster: "img/5.jpg"
    },
    {
        id: 6,
        songName: `Diet Mountain Dew <br> 
        <div class="subtitle">Lana Del Rey</div>`,
        poster: "img/6.jpg"
    },
    {
        id: 7,
        songName: `I Wanna Be Yours <br> 
        <div class="subtitle">Arctic Monkeys</div>`,
        poster: "img/DietMountainDewLanaDelRey.jpg"
    },
    {
        id: 8,
        songName: `I Wanna Be Yours <br> 
        <div class="subtitle">Arctic Monkeys</div>`,
        poster: "img/IWannaBeYours.png"
    },
    {
        id: 9,
        songName: `I Wanna Be Yours <br> 
        <div class="subtitle">Arctic Monkeys</div>`,
        poster: "img/IWannaBeYours.png"
    },
    {
        id: 10,
        songName: `I Wanna Be Yours <br> 
        <div class="subtitle">Arctic Monkeys</div>`,
        poster: "img/IWannaBeYours.png"
    },
    {
        id: 11,
        songName: `I Wanna Be Yours <br> 
        <div class="subtitle">Arctic Monkeys</div>`,
        poster: "img/IWannaBeYours.png"
    },
    {
        id: 12,
        songName: `I Wanna Be Yours <br> 
        <div class="subtitle">Arctic Monkeys</div>`,
        poster: "img/IWannaBeYours.png"
    },
    {
        id: 13,
        songName: `I Wanna Be Yours <br> 
        <div class="subtitle">Arctic Monkeys</div>`,
        poster: "img/IWannaBeYours.png"
    },
    {
        id: 14,
        songName: `I Wanna Be Yours <br> 
        <div class="subtitle">Arctic Monkeys</div>`,
        poster: "img/IWannaBeYours.png"
    },
    {
        id: 15,
        songName: `I Wanna Be Yours <br> 
        <div class="subtitle">Arctic Monkeys</div>`,
        poster: "img/IWannaBeYours.png"
    },
    {
        id: 16,
        songName: `I Wanna Be Yours <br> 
        <div class="subtitle">Arctic Monkeys</div>`,
        poster: "img/IWannaBeYours.png"
    },
    {
        id: 17,
        songName: `I Wanna Be Yours <br> 
        <div class="subtitle">Arctic Monkeys</div>`,
        poster: "img/IWannaBeYours.png"
    },
    {
        id: 18,
        songName: `I Wanna Be Yours <br> 
        <div class="subtitle">Arctic Monkeys</div>`,
        poster: "img/IWannaBeYours.png"
    },
    {
        id: 19,
        songName: `I Wanna Be Yours <br> 
        <div class="subtitle">Arctic Monkeys</div>`,
        poster: "img/IWannaBeYours.png"
    },
    {
        id: 20,
        songName: `I Wanna Be Yours <br> 
        <div class="subtitle">Arctic Monkeys</div>`,
        poster: "img/IWannaBeYours.png"
    }
];

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave')

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
})

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');

Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        let index = el.target.id;
        music.src = `music/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        // console.log(index);
    })
})







let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];

pop_art_right.addEventListener('click', () => {
    item.scrollLeft += 330;
});
pop_art_left.addEventListener('click', () => {
    item.scrollLeft -= 330;
});