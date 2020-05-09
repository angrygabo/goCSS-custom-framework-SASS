// parallax content
function parallaxScroll() {
    var scrolled = $(window).scrollTop();
    $('.parallax-content').css('transform', 'translate3d(0, '+ scrolled*0.5 + 'px, 0)');
}

// boogo smothscrolling
function boogoscrolling() {
    // boogo scrolling v1.0
    var scrolled = $(window).scrollTop();
    var docheight = $('#boogo-scrolling').height(); // get content height
    $('body').css('height', +  docheight + 'px'); // set body content height
    $('#boogo-scrolling').css('transform', 'translate3d(0, '+ -scrolled + 'px, 0)'); // scroll content when scrolling
    $('.corregir').css('transform', 'translate3d(0, '+ scrolled + 'px, 0)'); // scroll content when scrolling
}

// text horizontal
function textcross() { 
    var scrolled = $(window).scrollTop();
    $('.textcross').css('transform', 'translate3d('+ -scrolled + 'px, 0, 0)'); // scroll content when scrolling
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
function inviewport() {
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
    function onview(item) {
        var scrollTop = $(window).scrollTop();
        var viewporth = $(window).height();
        var offset = $(item).offset().top;
        var docViewBottom = scrollTop + viewporth;
        var elemBottom = offset;
        return (elemBottom <= docViewBottom) && (offset >= scrollTop);
        //return ((elemBottom <= docViewBottom) && (offset >= scrollTop));
    }
}

// function inviewport() {
//     $('.viewport').each(function (i) {
//         if (onview($(this))) {
//             $(this).delay(150 * i).animate({ opacity: 1 }, function () {
//                 $(this).addClass('in-viewport');
//                 setTimeout(function () {
//                     $('.in-viewport').removeClass('viewport');
//                 }, 10);
//             });
//         }
//     });
//     function onview(item) {
//         var scrollTop = $(window).scrollTop();
//         var viewporth = $(window).height();
//         var docViewBottom = scrollTop + viewporth;
//         var offset = $(item).offset().top;
//         var elemBottom = elemTop + $(item).height() - 300;
//         return ((elemBottom <= docViewBottom) && (offset >= docViewTop));
//     }
// }

// scroll line
function scrollLine() {
    var offset = 0;
    var minHeight = 0;
    var scrollPercentage = 100 * $(window).scrollTop() / ($('html').height() - $(window).height());
    var maxHeight = $(window).height() - (offset * 2) - minHeight;
    var newHeight = ((maxHeight / 100) * scrollPercentage) + minHeight;
    $('#scrollLine').css('height', newHeight);
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
    inviewport();
    scrollLine();
    precode();
    $(window).on('scroll', function () {
        boogoscrolling() 
        parallaxScroll();
        stickymenu();
        inviewport();
        scrollLine();
        textcross()
    });

});