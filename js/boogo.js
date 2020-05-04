// parallax content
function parallaxScroll() {
    var scrolled = $(window).scrollTop();
    $('.parallax-content').css('transform', 'translate3d(0px, '+ scrolled*0.5 + 'px, 0px)');
}

// boogo smothscrolling
function boogoscrolling() {
    // boogo scrolling v1.0
    var scrolled = $(window).scrollTop();
    var docheight = $('#boogo-scrolling').height(); // get content height
    $('body').css('height', +  docheight + 'px'); // set body content height
    $('#boogo-scrolling').css('transform', 'translate3d(0px, '+ -scrolled + 'px, 0px)'); // scroll content when scrolling
}

// ghost header
function stickymenu() {
    var onTop = $(window).scrollTop();
    $(window).scroll(function () {
        var elScroll = $(this).scrollTop();
        if (elScroll > onTop) {
            $('#header').removeClass('show-header').addClass('hidden-header');
        } 
        if (elScroll < onTop) {
            $('#header').addClass('show-header').removeClass('hidden-header');
        }
        onTop = elScroll;
    });
    if (jQuery(window).scrollTop() > 200) {
        $('#header').addClass('sticky-header');
    } 
    else {
        $('#header').removeClass('sticky-header');
    }
}

// reveal items
function viewportTrigger() {
    $('.viewport').each(function (i) {
        if (onview($(this))) {
            $(this).delay(150 * i).animate({ opacity: 1 }, function () {
                $(this).addClass('in-viewport');
                setTimeout(function () {
                    $('.in-viewport').removeClass('viewport');
                }, 10);
            });
        }
    });
    function onview(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height() - 300;
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
}

// scroll line
function scrollLine() {
    var offset = 0;
    var minHeight = 0;
    var scrollPercentage = 100 * $(window).scrollTop() / ($('html').height() - $(window).height());
    var maxHeight = $(window).height() - (offset * 2) - minHeight;
    var newHeight = ((maxHeight / 100) * scrollPercentage) + minHeight;
    $('#scrollLine').css('height', newHeight);
}

// vanilla
function vanilla() {
    // vanilla require <script src="https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.7.0/vanilla-tilt.min.js"></script>
    VanillaTilt.init(document.querySelector(".vanilla-tilt"), {
        max: 10,
        speed: 500
    });
    VanillaTilt.init(document.querySelector(".btn-vanilla"), {
        max: 0,
        speed: 500
    });
}

// scroll line
function precode() {
    // require <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.0.1/highlight.min.js"></script>
    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });
}

$(document).ready(function () {
    boogoscrolling() 
    viewportTrigger();
    scrollLine();
    precode();
    vanilla();

    $(window).on('scroll', function () {
        boogoscrolling() 
        parallaxScroll();
        stickymenu();
        viewportTrigger();
        scrollLine();
    });

});