$(document).ready(function () {

    // toggle navbar mobile
    $(".mobile-menu-button").each(function (_, navToggler) {
        console.log('sdlfkj')
        var target = $(navToggler).data("target");
        $(navToggler).on("click", function () {
            $(target).animate({
                height: "toggle",
            })
        })
    })
})