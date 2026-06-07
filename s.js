let display = document.getElementById("display");

let buttons = document.querySelectorAll(".btn");

for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", function () {

        display.value += buttons[i].innerText;

    });

}

document.getElementById("clear").addEventListener("click", function () {

    display.value = "";

});

document.getElementById("equal").addEventListener("click", function () {

    let expression = display.value;

    if (expression !== "") {

        display.value = eval(expression);

    } else {

        display.value = "Error";

    }

});