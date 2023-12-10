const playGame = document.querySelector('.play');
const page1 = document.querySelector('.page1');
const page2 = document.querySelector('.page2');
const name = document.querySelector('.playerName');
const submitButt = document.querySelector('.submit');
const container = document.querySelector('.container');
const intro = document.querySelector('.intro');
const judul = document.querySelector('.judulWebsite')

function play() {
    document.getElementById('page-1').classList.toggle('active');
    document.getElementById('page-2').classList.toggle('active');
}

function next2(){
    document.getElementById('page-2').classList.toggle('active');
    document.getElementById('container1').classList.toggle('active');
    document.getElementById('judul-Website').classList.toggle('active');
    judul.style.width = '60%';
    judul.style.margin = 'auto';
    
}

playGame.addEventListener('click', function() {
    page1.style.display = 'none'
});

submitButt.addEventListener('click',() => {
    var playerName = name.value;
    intro.style.display = 'none';
    container.style.display = 'block'
    judul.style.fontSize = '70px';

})


function random() {
    var bot =Math.random()
    if (bot < 0.4 ) {
        bot = 'kertas'
    }else if (bot >= 0.4 && bot <= 0.7) {
        bot = 'gunting'
    }else if (bot > 0.7 && bot <= 0.99) {
        bot = 'batu'
    }
    return bot
}

function gunting(player,bot) {
    document.getElementById('popup-1').classList.toggle('active');
    document.querySelector('.use').innerHTML = 'Gunting ✂️';
    var bot = random()
    var player = 'gunting';
    console.log('terassign dengan value ' + player)
    beat(player,bot);

}

function kertas(player,bot) {
    document.getElementById('popup-1').classList.toggle('active');
    var bot = random()
    document.querySelector('.use').innerHTML = 'Kertas 🗒️';
    const next = document.querySelector('.nextbtn');
    player = 'kertas';
    console.log('terassign dengan value ' + player)
    beat(player,bot)
}

function batu(player,bot) {
    document.getElementById('popup-1').classList.toggle('active');
    var bot = random();
    document.querySelector('.use').innerHTML = 'Batu 🪨';
    var player = 'batu';
    console.log('terassign dengan value ' + player)
    beat(player,bot);
}

function togglePopUp() {
    document.getElementById('popup-1').classList.toggle('active');
}

function popUp2() {
    document.getElementById('popup-1').classList.toggle('active');
    document.getElementById('popup-2').classList.toggle('active');
}

function closeBtn() {
    document.getElementById('popup-2').classList.toggle('active');
    const image = document.querySelector('.imgLose');
    const image2 = document.querySelector('.imgWin');
    const redButton = document.querySelector('.tombolMerah');
    redButton.style.marginTop= '0'
    image.src = '';
    image2.src = '';
    
    document.getElementsByClassName('descLose')[0].innerHTML = '';
    document.getElementsByClassName('descWin')[0].innerHTML = '';
}

function beat(player,bot) {
    if (player == 'gunting') {
        if (bot == 'kertas') {
            var result = 1 ;
        } else if (bot == 'batu') {
            var result = 0;
        } else if (bot == 'gunting') {
            var result = -1;
        }

    } else if (player == 'kertas') {
        if (bot == 'kertas') {
            var result = -1;
        } else if (bot == 'batu') {
            var result = 1 ;
        } else if (bot == 'gunting') {
            var result = 0;
        }

    } else {
        if (bot == 'kertas') {
            var result = 0;
        } else if (bot == 'batu') {
            var result = -1;
        } else if (bot == 'gunting') {
            var result = 1 ;
        }

    }
    const next = document.querySelector('.nextbtn');
    const image = document.querySelector('.imgLose');
    const image2 = document.querySelector('.imgWin');
    image.style.width = '500px';
    image.style.marginTop = '-200px';
    image2.style.marginTop = '-45px';

    next.onclick = () => {
        if (result == 0) {
            image.src = 'assets/robot.gif';
            document.getElementsByClassName('descLose')[0].innerHTML = 'Karena '+ player + ' VS ' + bot + ' akan menang ' + bot;
            document.getElementById('txtres').innerHTML = 'LOSE';
        }else if (result == -1) {
            image.src = 'assets/robot.gif';
            document.getElementsByClassName('descLose')[0].innerHTML = 'Karena '+ player + ' VS ' + bot + ' akan SERI';
            document.getElementById('txtres').innerHTML = 'DRAW';
        }else if (result == 1 ) {
            const contentWin = document.querySelector('.popup2 .content');
            const redButton = document.querySelector('.tombolMerah');
            redButton.style.marginTop= '140px';
            contentWin.style.marginTop = '-5px';
            // contentWin.style.height = '430px';
            image2.src = 'assets/hawk.gif';
            document.getElementsByClassName('descWin')[0].innerHTML = 'Karena '+ player + ' VS ' + bot + ' akan menang ' + player;
            document.getElementById('txtres').innerHTML = 'WIN';
        }
        document.getElementById('popup-1').classList.toggle('active');
        document.getElementById('popup-2').classList.toggle('active');
    }

}
