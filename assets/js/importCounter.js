var counterCoca;
(function () {
    var app = "https://script.googleusercontent.com/macros/echo?user_content_key=_vOujeIOHm6KK75aU1Mo7Aw6QUijsoNqd06TScS77_pWk6Sgl4tOYEuViMrmQjEAb6_wbFCbUdBM0_NCw9EBJGi8hxeU1dfom5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnN27OeIsbvwd9Qa5H5deku3rXKu5iZ5sm7Y7enAK0Kb-s9J1wga7CxtfOhbjIo0h2l96Gix7aFtIB3Jc5rj1dMtXzIC9XZ8VRw&lib=MYgSVHWynUCKQy4Us_7bjHp6PRn6bGWJL",
        output = '',
        xhr = new XMLHttpRequest();
    xhr.open('GET', app);
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) return;

        if (xhr.status == 200) {
            try {
                var r = JSON.parse(xhr.responseText),

                    result = r["result"];

                for (var i = 0; i < result.length; i++){
                    var obj = r[i];

                    output += obj.join("<br/>") + "<br/><hr/>";

                }

            } catch(e) {}
        }

        //CONST DESTRUCTURE
        counterCoca = result[0][1];
        counterBp = result[1][1];
        counterStarbucks = result[2][1];
        counterPhilipmorris = result[3][1];
        counterMcdonalds = result[4][1];
        counterNestle = result[5][1];
        counterPepsi = result[6][1];
        counterUnilever = result[7][1];
        counterPg = result[8][1];
        counterMonsanto = result[9][1];
        counterMondelez = result[10][1];


        document.getElementById('cocaColaCounter').innerHTML = counterCoca;
        document.getElementById('bpCounter').innerHTML = counterBp;
        document.getElementById('starbucksCounter').innerHTML = counterStarbucks;
        document.getElementById('philipmorrisCounter').innerHTML = counterPhilipmorris;
        document.getElementById('mcdonaldsCounter').innerHTML = counterMcdonalds;
        document.getElementById('nestleCounter').innerHTML = counterNestle;
        document.getElementById('pepsiCounter').innerHTML = counterPepsi;
        document.getElementById('unileverCounter').innerHTML = counterUnilever;
        document.getElementById('pgCounter').innerHTML = counterPg;
        document.getElementById('monsantoCounter').innerHTML = counterMonsanto;
        document.getElementById('mondelezCounter').innerHTML = counterMondelez;


    }
    xhr.send()
})()

