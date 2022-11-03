// burger menyen 

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const scrollDown = document.querySelector('.scrolldown') 

let menuOpen = false;
menuBtn.addEventListener('click', () => {

    if(!menuOpen) {
        menuBtn.classList.add('open');
        menu.classList.add('slide');
        menuOpen = true;
    } else{
        menuBtn.classList.remove('open');
        menu.classList.remove('slide');
        menuOpen = false;
    }
} )


// Pc komponent plakaten

$(document).on('scroll', function(){
    const windowHeight = $(window).height()
    const scrollValue = $(this).scrollTop()
    // console.log(scrollValue)
    const $art2 = $('.art2');
    // console.log($art2)
    const art2FropTop = $art2.offset().top
    // console.log($art1FropTop)
    const art2Height = $art2.outerHeight()
    // console.log(art1Height)

    const $art3 = $('.art3');
    const art3FropTop = $art3.offset().top
    const art3Height = $art3.outerHeight()

    const $art4 = $('.art4');
    const art4FropTop = $art4.offset().top
    const art4Height = $art4.outerHeight()

    const $art5 = $('.art5');
    const art5FropTop = $art5.offset().top
    const art5Height = $art5.outerHeight()

    const $art6 = $('.art6');
    const art6FropTop = $art6.offset().top
    const art6Height = $art6.outerHeight()
    

    if(scrollValue > art2FropTop + art2Height - windowHeight){
        $art2.addClass('active');
    }

    if(scrollValue > art3FropTop + art3Height - windowHeight){
        $art3.addClass('active');
    }

    if(scrollValue > art4FropTop + art4Height - windowHeight){
        $art4.addClass('active');
    }

    if(scrollValue > art5FropTop + art5Height - windowHeight){
        $art5.addClass('active');
    }

    if(scrollValue > art6FropTop + art6Height - windowHeight){
        $art6.addClass('active');
    }

    if(scrollValue < 100){
        $('.posterElement').removeClass('active')
    }
})


// spillet

const gameSummary = {
    number: 0,
    win: 0,
    lose: 0,
    draw: 0,
}

const gameObject = {
    playerPick: "",
    aiPick: "",
}

const hands = [...document.querySelectorAll('.select img')]
console.log(hands)

function selectedHand(){
    gameObject.playerPick = this.dataset.option
    console.log(gameObject.playerPick)
    hands.forEach(hand => hand.style.boxShadow = '')
    this.style.boxShadow = '0 0 0 3px #F27405'
}

function startGame(){
    if(gameObject.playerPick === ""){
        alert("You need to pick one option")
        return
    }

    gameObject.aiPick = computerPick()

    const gameResult = checkResult(gameObject.playerPick, gameObject.aiPick)
    console.log(gameResult)
    publicResult(gameObject.playerPick, gameObject.aiPick, gameResult)

    endGame()
}

function computerPick(){
    const aiPick = hands[Math.floor(Math.random() * 3)].dataset.option
    console.log(aiPick)
    return aiPick
}

function checkResult(player, ai){
    if(player === ai){
        return 'draw'
    } else if(player === 'Paper' && ai === 'Rock' || player === 'Rock' && ai === 'Scissors' || player === 'Scissors' && ai === 'Paper'){
        return 'win'
    } else if(player === 'Rock' && ai === 'Paper' || player === 'Scissors' && ai === 'Rock' || player === 'Paper' && ai === 'Scissors'){
        return 'lose'
    }
}

function endGame(){
    hands.forEach(hand => hand.style.boxShadow = '')
    gameObject.playerPick = ""
}

function publicResult(player, ai, result){
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;

    gameSummary.number++;
    document.querySelector('.numbers span').textContent = gameSummary.number;

    if(result === 'win'){
        document.querySelector('.wins span').textContent = ++gameSummary.win;
        document.querySelector('[data-summary="who-win"]').textContent = 'you won!'
        document.querySelector('[data-summary="who-win"]').style.color = 'green'
    } else if(result === 'lose'){
        document.querySelector('.losses span').textContent = ++gameSummary.lose;
        document.querySelector('[data-summary="who-win"]').textContent = 'you lose!'
        document.querySelector('[data-summary="who-win"]').style.color = 'red'
    } else{
        document.querySelector('.draws span').textContent = ++gameSummary.draw;
        document.querySelector('[data-summary="who-win"]').textContent = 'its a draw!'
        document.querySelector('[data-summary="who-win"]').style.color = 'gray'
    }
}

hands.forEach(hand => hand.addEventListener('click', selectedHand))
document.querySelector('.startGame').addEventListener('click', startGame)