const music = new Audio('music/IWannaBeYours.mp3');
// music.play();

const songs = [
    {
        id: 1,
        songName: `I Wanna Be Yours <br> 
        <div class="subtitle">Arctic Monkeys</div>`,
        poster: "img/IWannaBeYours.png"
    },
    {
        id: 2,
        songName: `Here <br> 
        <div class="subtitle">Alessia Cara</div>`,
        poster: "img/Here.jpg"
    },
    {
        id: 3,
        songName: `I Wanna Be Yours <br> 
        <div class="subtitle">Arctic Monkeys</div>`,
        poster: "img/IWannaBeYours.png"
    },
    {
        id: 4,
        songName: `I Wanna Be Yours <br> 
        <div class="subtitle">Arctic Monkeys</div>`,
        poster: "img/IWannaBeYours.png"
    },
    {
        id: 5,
        songName: `I Wanna Be Yours <br> 
        <div class="subtitle">Arctic Monkeys</div>`,
        poster: "img/IWannaBeYours.png"
    },
    {
        id: 6,
        songName: `I Wanna Be Yours <br> 
        <div class="subtitle">Arctic Monkeys</div>`,
        poster: "img/IWannaBeYours.png"
    },
    {
        id: 7,
        songName: `I Wanna Be Yours <br> 
        <div class="subtitle">Arctic Monkeys</div>`,
        poster: "img/IWannaBeYours.png"
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
]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
});


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