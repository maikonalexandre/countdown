
var deadline = new Date("Jun 28, 2022 07:16:25").getTime();
var coutdown = setInterval(function() {
    var now = new Date().getTime();
    var restTime = deadline - now;
    var days = Math.floor(restTime/ (1000 * 60 * 60 * 24));
    var hours = Math.floor((restTime%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    var minutes = Math.floor((restTime% (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((restTime % (1000 * 60)) / 1000);
    demo.innerHTML = days + " : " 
    + hours + " : " + minutes + " : " + seconds ;
        if (restTime < 0) {
            clearInterval(coutdown);
            demo.innerHTML = "OFERTA ESGOTADA";
        }
    }, 1000);






