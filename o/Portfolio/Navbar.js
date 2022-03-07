$("#navbar a").click(function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $("#ZacVetter").offset().top
    }, 2000);
});
