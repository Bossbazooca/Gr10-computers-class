var password = Math.floor(Math.random() * 999999999) + 10000000;
document.getElementById("passwordID").innerHTML = password;

function buttonClicked() {
    "use strict";

    var input = document.getElementById("input").value;

    if (input == password) {
            window.alert("Correctamudo");
        }
    else {
            window.alert("wrong");
        }
}