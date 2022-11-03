var fullName = document.querySelector('.name').value


function pris() {

    var selectPerson = document.querySelector('select').value
    var days = document.querySelector('#dager').value;
    var breakfast = document.querySelector('input[name="frokost"]:checked').value
    var ticketPass = document.querySelector('input[name="pass"]:checked').value
    var dyreparken = document.querySelector('#dyreparken')
    var badeland = document.querySelector('#badeland')
    var ticketPrice = 799;

    var price = (days * ticketPrice * selectPerson);

    if (breakfast === "1") {
        var newprice = (price + (days * 150))
        var price = newprice
    }

    if (dyreparken.checked == true && badeland.checked == true) {
        var newprice = (price + (days * 349))
        var price = newprice
    } else if (ticketPass === "1") {
        var newprice = (price + (days * 269))
        var price = newprice
    } else if (ticketPass === "2") {
        var newprice = (price + (days * 199))
        var price = newprice
    }




    document.getElementById("sumUp").innerHTML = ("TOTAL: " + price)
}

function take() {
    var fullName = document.querySelector('.name').value
    var fullNumber = document.querySelector('.number').value
    var fullAdress = document.querySelector('.adress').value
    var fullMail = document.querySelector('.mail').value
    var selectPerson = document.querySelector('select').value
    var days = document.querySelector('#dager').value;
    var breakfast = document.querySelector('input[name="frokost"]:checked').value
    var ticketPass = document.querySelector('input[name="pass"]:checked').value
    var dyreparken = document.querySelector('#dyreparken').checked
    var badeland = document.querySelector('#badeland').checked

    const orderInfo = [fullName, fullNumber, fullAdress, fullMail, selectPerson, days, breakfast, ticketPass, dyreparken, badeland]

    localStorage.setItem("bestilling " + fullName, JSON.stringify(orderInfo))

    // localStorage.clear()
}

const getBack = JSON.parse(localStorage.getItem("bestilling " + fullName));
console.log(getBack);

document.getElementById("arrPrint").innerHTML = getBack;

function check() {
    var userInput = document.querySelector('.username').value
    var passInput = document.querySelector('.password').value
    var passAgain = document.querySelector('.passwordAgain').value
    var noUser = "* skriv inn brukernavn"
    var noPass = "* skriv inn passord"


    if (userInput === "") {
        document.getElementById("ups").innerHTML = noUser;
    }

    if (passInput === "") {
        document.getElementById("ups").innerHTML = noPass;
    }

    if (passAgain === "") {
        document.getElementById("ups").innerHTML = noPass;
    }


}