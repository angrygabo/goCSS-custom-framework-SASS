// reveal items
function viewportTrigger() {
    $('.viewport').each(function (i) {
            if (onview($(this))) {
                $(this).delay(150 * i).animate({ opacity: 1 }, function () {
                    $(this).addClass('in-viewport');
                    setTimeout(function() {
                        $('.in-viewport').removeClass('viewport');
                    }, 200);
                });
            }
    });
    function onview(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height()-300;
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
}

function parallaxScroll() {
    var scrolled = $(window).scrollTop();
    $('.parallax-content').css('top', (0 - (scrolled * 0.8)) + 'px');
}

$(document).ready(function () {
    viewportTrigger();
    $(window).on('scroll', function () {
        viewportTrigger();
        parallaxScroll();
    });
});

// ghost header
$(function () {
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
});
$(document).on('scroll', function () {
    if (jQuery(document).scrollTop() > 200) {
        $('#header').addClass('sticky-header');    
    }
    else {
        $('#header').removeClass('sticky-header');
    }
});