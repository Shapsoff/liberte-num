console.log('Hello World!')

$(document).ready(function () {
    var lines = 15;
    var textLength = 40;

    for (i = 0; i < lines - 1; i++) {
        $(".num").first().clone().insertAfter($(".num").first());
    }


    setInterval(function () {
        $(".num").each(function () {
            if ($(this).text().length < textLength) {
                $(this).text(($(this).text() + Math.round(Math.random())));
            } else {
                $(this).text(Math.round(Math.random()) + $(this).text().substring(0, $(this).text().length - 1))
            }
        });

    }, 95);

});

let button_carte1 = document.getElementById('button-carte1');
let button_carte2 = document.getElementById('button-carte2');
let button_carte3 = document.getElementById('button-carte3');

let close_carte1_button = document.getElementById('close-carte1-button');
let close_carte2_button = document.getElementById('close-carte2-button');
let close_carte3_button = document.getElementById('close-carte3-button');

let backcarte = document.getElementById('backcarte');

button_carte1.addEventListener('click', function () {
    carte1.classList.add('show');
    backcarte.classList.add('show');
});

close_carte1_button.addEventListener('click', function () {
    carte1.classList.remove('show');
    backcarte.classList.remove('show');
});

backcarte.addEventListener('click', function () {
    carte1.classList.remove('show');
    backcarte.classList.remove('show');
});

button_carte2.addEventListener('click', function () {
    carte2.classList.add('show');
    backcarte.classList.add('show');
});

close_carte2_button.addEventListener('click', function () {
    carte2.classList.remove('show');
    backcarte.classList.remove('show');
});

backcarte.addEventListener('click', function () {
    carte2.classList.remove('show');
    backcarte.classList.remove('show');
});

button_carte3.addEventListener('click', function () {
    carte3.classList.add('show');
    backcarte.classList.add('show');
});

close_carte3_button.addEventListener('click', function () {
    carte3.classList.remove('show');
    backcarte.classList.remove('show');
});

backcarte.addEventListener('click', function () {
    carte3.classList.remove('show');
    backcarte.classList.remove('show');
});
