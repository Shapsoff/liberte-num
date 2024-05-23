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
