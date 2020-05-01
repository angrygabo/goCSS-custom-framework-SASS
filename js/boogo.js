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
        var elemBottom = elemTop + $(elem).height() - 150;
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
}

// parallax content
function parallaxScroll() {
    var scrolled = $(window).scrollTop();
    $('.parallax-content').css('top', (0 - (scrolled * -0.5)) + 'px');
}

// ghost header
function stickymenu() {
    var obj = $(document);
    var obj_top = obj.scrollTop();
    obj.scroll(function () {
        var obj_act_top = $(this).scrollTop();
        if (obj_act_top > obj_top) {
            $('#header').removeClass('show-header');
            $('#header').addClass('hidden-header');
        }
        if (obj_act_top < obj_top) {
            $('#header').addClass('show-header');
            $('#header').removeClass('hidden-header');
        }
        obj_top = obj_act_top;
    });
    if (jQuery(document).scrollTop() > 200) {
        $('#header').addClass('sticky-header');
    }
    else {
        $('#header').removeClass('sticky-header');
    }
}

// scroll line
var $i = $('#scrollLine');
var $window = $(window);
var offset = 0;
var minHeight = 0;

function scrollLine() {
    var scrollPercentage = 100 * $window.scrollTop() / ($('html').height() - $window.height());
    var maxHeight = $(window).height() - (offset * 2) - minHeight;
    var newHeight = ((maxHeight / 100) * scrollPercentage) + minHeight;
    $i.css('height', newHeight);
}


$(document).ready(function () {
    viewportTrigger();
    scrollLine();
    setTimeout(function () {
        $('#scrollLine').removeClass('viewport--trigger viewport');
    }, 100);
    $(window).on('scroll', function () {
        viewportTrigger();
        parallaxScroll();
        stickymenu();
        scrollLine();
    });
});

VanillaTilt.init(document.querySelector(".vanilla-tilt"), {
    max: 10,
    speed: 500
});
VanillaTilt.init(document.querySelector(".btn-vanilla"), {
    max: 0,
    speed: 500
});
//It also supports NodeList
VanillaTilt.init(document.querySelectorAll(".vanilla-tilt,.btn-vanilla"));


