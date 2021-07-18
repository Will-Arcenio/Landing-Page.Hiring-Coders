var finalDate = new Date("Jul 18, 2021 23:59:59").getTime();
console.log(finalDate);

var countdown = setInterval(function() {
    var initialDate = new Date().getTime();

    var timeRemaining = finalDate - initialDate;

    // Verifica quantidade de dias em milissegundos
    var days = Math.floor(timeRemaining / 86400);
    console.log(days);
}, 1000);