$(function () {

    let header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    /* Fixed Header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if (scrollOffset >= introH) {
            header.addClass("fixed");
            header.css("opacity", 1);
        } else {
            header.removeClass("fixed");
        }
    }

    /* Smooth scroll */
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();
        let $this = $(this),
            blockId = $(this).data("scroll"),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });

    /* Menu Nav Toggle */
    $("#nav-toggle").on("click", function (event) {
        event.preventDefault();
        // toggle он сначало выдает потом убирает
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

    /* Accordion */
    $("[data-collapse]").on("click", function (event) {
        event.preventDefault();

        let $this = $(this),
            blockId = $(this).data("collapse");

        $this.toggleClass("active");
        // $(blockId).slideToggle(blockId); // slideToggle для плавного открытия и закрытия
    });

    /* Slider */
    // $('[data-slider]').slick({
    //     infinite: true,
    //     fade: false,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    // });

});