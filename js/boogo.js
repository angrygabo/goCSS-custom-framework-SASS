// reveal items
function viewportTrigger() {
    $('.viewport--trigger').each(function (reveal) {
        $(this).delay(100 * reveal).animate({ opacity: 1 }, function () {
            if (onview($(this))) {
                $(this).addClass('in-viewport');
            }
        });
    });
    function onview(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height() - 100;
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
}

$(document).ready(function () {
    viewportTrigger();
    $(window).on('scroll', function () {
        viewportTrigger();
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