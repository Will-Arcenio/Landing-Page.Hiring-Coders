// Data de termino
var futureDate = "2021/07/18 23:59:59";

var futureDate = new Date(futureDate).getTime();

function countdown() {
    var currentDate = Math.floor(new Date().getTime());
    var diffDate = futureDate - currentDate;

    // Se o tempo não for zerado
    if ((diffDate - 1) >= -1) {

        var days = parseInt(diffDate / (24*60*60*1000));
        
        // Pega a parte inteira das horas
        var hours = parseInt(diffDate / (60*60*1000));
        hours = hours % 24;
      
        // Pega a parte inteira dos minutos
        var min = parseInt(diffDate / (60*1000));
        min = min % 60;
      
        // Calcula os segundos restantes
        var seg = parseInt(diffDate / 1000);
        var seg = seg % 60;

        // Adiciona um 0 (zero) na frente se o número for < 10
        if (days < 10) {
            days = "0" + days;
            days = days.substr(0, 2);
        }
        if (hours < 10) {
            hours = "0" + hours;
            hours = hours.substr(0, 2);
        }
        if (min < 10) {
            min = "0" + min;
            min = min.substr(0, 2);
        }
        if (seg <= 9) {
            seg = "0" + seg;
        }

        //JavaScript pra setar o valor no campos correspondentes
        document.getElementById("day").textContent = days;
        document.getElementById("hour").textContent = hours;
        document.getElementById("min").textContent = min;
        document.getElementById("sec").textContent = seg;

        // Define que a função será executada a cada 1 segundo
        setTimeout('countdown()', 1000);

        // diminui o tempo
        diffDate--;
    }
}