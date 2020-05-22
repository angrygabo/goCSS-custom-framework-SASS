// parallax content
function parallaxScroll() {
    var scrolled = $(window).scrollTop();
    var transformValue = '.8s cubic-bezier(.1,.3,.1,1) 0s';
    $('.parallax-content').css({
        'position':'relative',
        '-webkit-transform':'translate3d(0, '+ scrolled*0.5 + 'px, 0)',
        'transform':'translate3d(0, '+ scrolled*0.5 + 'px, 0)',
        '-webkit-transition': '-webkit-transform '+ transformValue,
        'transition': '-webkit-transform '+ transformValue,
        '-o-transition': 'transform '+ transformValue,
        'transition': 'transform '+ transformValue,
        'transition': 'transform '+ transformValue +', -webkit-transform '+ transformValue,
        'filter': 'blur(' + scrolled*0.01 + 'px)'
    })
}

// anchors
// var hash = $(location).attr('hash');
// var scrolled = $(hash).offset().top;
// alert(hash + '-' + scrolled);

// if (scrolled != null) {
//     $(window).scrollTop(scrolled);
//     $('#boogo-scrolling').css({
//         '-webkit-transform': 'translate3d(0, '+ -scrolled + 'px, 0)',
//         'transform': 'translate3d(0, '+ -scrolled + 'px, 0)',
//     })
// }

function boogoscrollingAnchor() {
    $('a').click(function () { 
        var anchor = $(this).attr('href');
        var scrolled = $(anchor).offset().top;
        if (scrolled != null && scrolled >= 0) {
            $(window).scrollTop(scrolled);
            $('#boogo-scrolling').css({
                '-webkit-transform': 'translate3d(0, '+ -scrolled + 'px, 0)',
                'transform': 'translate3d(0, '+ -scrolled + 'px, 0)',
            })
        }
    });
}

// boogo smothscrolling
function boogoscrolling() {
    var transformValue = '.8s cubic-bezier(.1,.3,.1,1) 0s';
    // boogo scrolling v1.0
    var scrolled = $(window).scrollTop();
    var docheight = $('#boogo-scrolling').height(); // get content height
    $('body').css('height', +  docheight + 'px'); // set body content height

    // scroll
    $('#boogo-scrolling').css({
        'position': 'fixed',
        'width': '100%',
        'height': 'auto',
        'top': '0',
        'left': '0',
        'overflow-x': 'hidden',
        '-webkit-transform': 'translate3d(0, '+ -scrolled + 'px, 0)',
        'transform': 'translate3d(0, '+ -scrolled + 'px, 0)',
        '-webkit-transition': '-webkit-transform '+ transformValue,
        'transition': '-webkit-transform '+ transformValue,
        '-o-transition': 'transform '+ transformValue,
        'transition': 'transform '+ transformValue,
        'transition': 'transform '+ transformValue +', -webkit-transform '+ transformValue,
        'z-index': '0',
     })
}

// scroll content when scrolling (require css)
function textcross() { 
    var scrolled = $(window).scrollTop();
    // scroll content when scrolling
    $('.textcross').css('-webkit-transform', 'translate3d('+ -scrolled + 'px, 0, 0)'); 
    $('.textcross').css('transform', 'translate3d('+ -scrolled + 'px, 0, 0)');
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
        $('#header').addClass('home-header');
    } 
    else {
        $('#header').removeClass('home-header');
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

// scroll line
function precode() {
    // require <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.0.1/highlight.min.js"></script>
    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });
}

// is mobile
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

// listen functions
$(document).ready(function () {
    if(!isMobile.any()) {
        boogoscrolling();
        boogoscrollingAnchor();
    }
    inviewport();
    scrollLine();
    precode();
    $(window).on('scroll', function () {
        if(!isMobile.any()) {
            boogoscrolling();
            parallaxScroll();
        }
        stickymenu();
        inviewport();
        scrollLine();
        textcross()
    });
});