// første arrayen som ineholder alle tallene man kan trekke 
Arr = []
var x;
var div = document.getElementById('result')
var finalScore = document.querySelector('.finalScore')
var yourTuch = 0

// funksjonen som lager den første arreyen med alle tall som kan bli trukket
function randomArr() {
    yourTuch = yourTuch + 1
    x = document.querySelector('.maxNr').value;
    // if(yourTuch > 1){
    //     return
    // }


    if (x < 5 || x > 1000) {
        alert('du kan bare velge tall mellom 5 og 1000')
        yourTuch = 0;
        return
    }
    if (yourTuch > 1) {
        return
    }
    for (i = 1; i - 1 < x; i++) {
        Arr.push(i)
    }

    console.log(Arr)
}

// arreyen med de tilfeldige vinnertalene
bingo = []
var yourClick = 0;
// funskjonen som generer tilfeldige tallene, lager p elementene og skriver ut i HTML
function randomNumber() {
    yourClick = yourClick + 1;
    var objectP = document.createElement('p')
    var objectP1 = document.createElement('p')
    var objectP2 = document.createElement('p')
    var objectP3 = document.createElement('p')
    var objectP4 = document.createElement('p')
    var objectP5 = document.createElement('p')

    if (Arr.length < 1) {
        yourClick = 0;
        return
    }
    if (Arr.length < 5) {
        yourClick = 0;
        return
    }
    if (yourClick > 5) {
        return
    }


    var yourNumber = Arr[Math.floor(Math.random() * Arr.length)];
    bingo.push(yourNumber)
    Arr.splice(Arr.indexOf(yourNumber), 1)
    bingo.sort((a, b) => {
        return a - b
    })
    console.log(Arr)
    console.log(bingo)
    if (yourClick < 5) {
        objectP.innerText = yourNumber + " -  "
        document.getElementById('result').appendChild(objectP)
    }
    if (yourClick == 5) {
        objectP.innerText = yourNumber
        document.getElementById('result').appendChild(objectP)
        document.getElementById('result').innerHTML = ""

        objectP1.innerText = bingo[0]
        objectP2.innerText = " - " + bingo[1]
        objectP3.innerText = " - " + bingo[2]
        objectP4.innerText = " - " + bingo[3]
        objectP5.innerText = " - " + bingo[4]

        console.log(objectP1)
        document.getElementById("result").appendChild(objectP1)
        document.getElementById("result").appendChild(objectP2)
        document.getElementById("result").appendChild(objectP3)
        document.getElementById("result").appendChild(objectP4)
        document.getElementById("result").appendChild(objectP5)

        // en raskere måte å skrive ut svare i html

        // div.textContent  = bingo.join(' - ');

    }

}

// arrayen med tallene til brukeren
dinKupong = []
var resultat = 0;

// funksjonen som sammenligner vinner tallene med tallene til brukeren
function kupongCheck() {
    var input1 = document.querySelector('.inp1').value;
    var input2 = document.querySelector('.inp2').value;
    var input3 = document.querySelector('.inp3').value;
    var input4 = document.querySelector('.inp4').value;
    var input5 = document.querySelector('.inp5').value;


    if (input1 == '' || input2 == '' || input3 == '' || input4 == '' || input5 == '') {
        return
    }

    dinKupong.push(input1)
    dinKupong.push(input2)
    dinKupong.push(input3)
    dinKupong.push(input4)
    dinKupong.push(input5)
    for (i = 0; i < 5; i++) {
        if (input1 == bingo[i] || input2 == bingo[i] || input3 == bingo[i] || input4 == bingo[i] || input5 == bingo[i]) {
            resultat = resultat + 1;
        };
    }

    const unique = (value, index, self) => {
        return self.indexOf(value) === index
    }
    var uniqueKupong = dinKupong.filter(unique)
    if (uniqueKupong.length < 5) {
        finalScore.textContent = "Du kan ikke skrive in det samme tallet flere ganger"
        dinKupong = [];
        resultat = 0;
        return
    }

    console.log(resultat)
    finalScore.textContent = 'du fikk ' + resultat + ' av 5 poeng!'
    resultat = 0;

    console.log(uniqueKupong)
}


var check = document.querySelector('.checkKupong').addEventListener('click', kupongCheck)
var randomNr = document.querySelector('.button2').addEventListener('click', randomNumber)
var randomBtn = document.querySelector('.button1').addEventListener('click', randomArr)