window.onload = function () {
        var seconds = 00;
        var miliseconds = 00;
        var appendmiliseconds = document.getElementById("milliseconds");
        var appendseconds = document.getElementById("seconds");
        var buttonstart = document.getElementById("button-start")
        var buttonstop = document.getElementById("button-stop");
        var buttonreset = document.getElementById("button-reset");
        var interval;
        buttonstart.onclick = function () {
                clearInterval(interval);
                interval = setInterval(Start_timer, 10);

        }
        buttonstop.onclick = function () {
                clearInterval(interval)
        }
        buttonreset.onclick = function () {

                clearInterval(interval);
                miliseconds = "00";
                seconds = "00";
                appendmiliseconds.innerHTML = miliseconds;
                appendseconds.innerHTML = seconds;


        }

        function Start_timer() {


                miliseconds ++;
                if (miliseconds <= 9) {
                        appendmiliseconds.innerHTML = "0" + miliseconds;




                }
                if (miliseconds > 9) {
                        appendmiliseconds.innerHTML = miliseconds;
                }
                if (miliseconds > 99) {

                        seconds++;
                        appendseconds.innerHTML = "0" + seconds;
                        miliseconds = 0;
                        appendmiliseconds.innerHTML = "0" + 0;


                }
                if (seconds > 9) {
                        appendseconds.innerHTML = seconds;

                }
        }

}
