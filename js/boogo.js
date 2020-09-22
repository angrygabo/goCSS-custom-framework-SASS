// detect mobile
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
        return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
    }
};

// zoom image
var el = document.getElementsByClassName('zoom-img'),i;

for (var i = 0; i < el.length; i++) {

    (function () {
      
        var dataurl = el[i].dataset.url;
        var datazoom = el[i].dataset.zoom;
        var val = ((datazoom*1) + 1);
      
        if (val == 1) {
          val = 2;
        }
      
        if (datazoom == undefined) {
          datazoom = 1;
          val = 2;
        }
      
        if (dataurl != undefined) {
          var img = document.createElement('img');
          el[i].appendChild(img);
        }        

        el[i].className += ' zoom-trigger_' + i;
        
        var image  = el[i].querySelector('.zoom-trigger_' + i + ' img');
      
        
 
        if (dataurl != undefined) {
          image.src = dataurl;
        }

        var widthdoc= el[i].clientWidth;
        var heightdoc= el[i].clientHeight;
    
        el[i].style.width = el[i].clientWidth + 'px';
        el[i].style.height = el[i].clientHeight + 'px';

        image.style.top = '0';
        image.style.left = '0';
        image.style.width = widthdoc + 'px';
        image.style.height = heightdoc + 'px';

        function reset(e){
            e.preventDefault();
            image.style.top = '0';
            image.style.left = '0';
            image.style.width = widthdoc + 'px';
            image.style.height = heightdoc + 'px';
        }

        function zoomevent(e){
            e.preventDefault();
            
            image.style.width = widthdoc * val + 'px';
            image.style.height = heightdoc * val + 'px';
            image.style.top = '-' + (((e.offsetY*datazoom) * 100) / heightdoc) + '%';
            image.style.left = '-' + (((e.offsetX*datazoom) * 100) / widthdoc) + '%';
        }
      
        el[i].addEventListener("mousemove", zoomevent);
        el[i].addEventListener("mouseout", reset);
      
    }(i));

}

// parallax axis
var el = document.getElementsByClassName('parallax-axis'),i;

for (var i = 0; i < el.length; i++) {

    (function () {
      
        var datazoom = el[i].dataset.zoom,
            dataintensity = el[i].dataset.intensity,
            dataaxis = el[i].dataset.axis,
            datareverse = el[i].dataset.reverse;
      
        if (datazoom == undefined || datazoom < 1) {
            datazoom = 1;
        }
      
        el[i].className += ' parallax-trigger_' + i;
        el[i].innerHTML = '<div class="parallax-parent--'+ i +'"> '+ el[i].innerHTML +' </div>';

        var parallax  = el[i].querySelector('.parallax-parent--' + i),
            wrapper = el[i],
            widthdoc = el[i].clientWidth,
            heightdoc = el[i].clientHeight;
    
        el[i].style.width = el[i].clientWidth + 'px';
        el[i].style.height = el[i].clientHeight + 'px';

        parallax.style.width = el[i].clientWidth + 'px';
        parallax.style.height = el[i].clientHeight + 'px';

        function reset(e){
            e.preventDefault();
            wrapper.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1,1)';
        }

        function zoomevent(e){
            e.preventDefault();

            var intensity = dataintensity;

            if (dataintensity == 0) {
              var intensity =  0.1;
            } 

            if (dataintensity == undefined || dataintensity == null) {
              var intensity =  0.3;
            } 

            var degYdoc = -(((widthdoc*100) / widthdoc) * intensity)/2;
            var degY = -(((e.offsetX*100) / widthdoc) * intensity);
            
            if (datareverse == 'true') {
              var calcY =  degY - degYdoc;
            } else {
              var calcY = degYdoc - degY;
            }

            if (dataaxis == 'y' || dataaxis == 'Y') {
              var calcY = 0;
            }

            var degXdoc = -(((heightdoc*100) / heightdoc) * intensity)/2;
            var degX = -(((e.offsetY*100) / heightdoc) *intensity);
            
            if (datareverse == 'true') {
              var calcX =  degXdoc - degX;
            } else {
              var calcX = degX - degXdoc;
            }
            if (dataaxis == 'x' || dataaxis == 'X') {
              var calcX = 0;
            }
          
            wrapper.style.transform = 'perspective(1000px) rotateX(' + calcX + 'deg) rotateY(' + calcY + 'deg) scale('+ datazoom +','+ datazoom +')';
            wrapper.style.zIndex = "1";
        }
      
        el[i].addEventListener("mousemove", zoomevent);
        el[i].addEventListener("mouseout", reset);
      
    }(i));

}

// parallax content
function parallaxcontent() {

    $('.parallax-content').each(function (i) {
            
            // create wrapper parallax content
            $(this).wrapInner('<div class="parallax-content-parent--'+ i+1 +'"></div>');

            // get content height
            var docheight = $('parallax-content-parent--'+ i+1).height();
            var positionTop = $(this).position().top;
            var viewportH = $(window).height()+150;
      
            // set content height
            $('.parallax-content-parent--'+ i+1).css('height', docheight);

            $(window).on('scroll', function () {

                var scrolled = $(window).scrollTop();
                var calcscroll = scrolled - positionTop;

                //if (((scrolled + viewportH) >= positionTop) && ((positionTop + viewportH) <= positionTop)) {
                if ((scrolled + viewportH) >= positionTop) {   
                    $('.parallax-content-parent--'+ i+1).css({
                        '-webkit-transform': 'translate3d(0, ' + calcscroll * 0.4 + 'px, 0)',
                        'transform': 'translate3d(0, ' + calcscroll * 0.4 + 'px, 0)',
                        'transition': 'transform 1s cubic-bezier(.1,.3,.1,1) 0s'
                    });
                }
                
            });
    });

}

// smooth anchors
function smoothanchors() {

    // get hash anchor
    $(function () {
        var hash = $(location).attr('hash');
        if (typeof $(hash).position() !== 'undefined') {
            var scrolled = $(hash).position().top;
            setTimeout(function () {
                $(window).scrollTop(scrolled);
            }, 100);
        }
    });

    // click anchor
    $('a').click(function () {
        var anchor = $(this).attr('href');
        var scrolled = $(anchor).position().top;
        if (scrolled != null && scrolled >= 0) {
            $(window).scrollTop(scrolled);
            $('[data-page-scroll]').css({
                '-webkit-transform': 'translate3d(0, ' + -scrolled + 'px, 0)',
                'transform': 'translate3d(0, ' + -scrolled + 'px, 0)',
            })
        }
    });

}

// boogo smothscrolling
function smoothpagescroll() {

    // boogo scrolling v1.0
    var scrolled = $(window).scrollTop();
    var scrolledleft = $(window).scrollLeft();
    var docheight = $('[data-page-scroll]').height(); // get content height
    $('body').css('height', +  docheight + 'px'); // set body content height

    // scroll
    $('[data-page-scroll]').css({
        '-webkit-transform': 'translate3d(' + -scrolledleft + 'px, ' + -scrolled + 'px, 0)',
        'transform': 'translate3d(' + -scrolledleft + 'px, ' + -scrolled + 'px, 0)'
    })
}


// smooth page scrolling
function smoothpagescroll() {

    // boogo scrolling v1.0
    var scrolled = $(window).scrollTop();
    var scrolledleft = $(window).scrollLeft();
    var docheight = $('[data-page-scroll]').height(); // get content height
    $('body').css('height', +  docheight + 'px'); // set body content height

    // scroll
    $('[data-page-scroll]').css({
        '-webkit-transform': 'translate3d(' + -scrolledleft + 'px, ' + -scrolled + 'px, 0)',
        'transform': 'translate3d(' + -scrolledleft + 'px, ' + -scrolled + 'px, 0)',
    })

    // disable smoothpagescroll in mobile
    if (isMobile.any()) {
        $('body').css('height', 'auto');
        // scroll
        $('[data-page-scroll]').css({
            'position': 'relative',
            'transition': 'none',
            'transform': 'none'
        })
    }

}

// smoothbox scrolling
function smoothboxscroll() {

    $('[data-box-scroll]').each(function (i) {

        // dataspeed: 0.6s default
        // datacolor: #555 default
        var dataspeed = null;
        var datacolor = null;
        var dataspeed = $(this).data('speed'); 
        if (dataspeed == null) {
            var dataspeed = 0.6;
        }
        var datacolor = $(this).data('color'); 

        // generate wrapper content & drag track
        $(this).wrapInner('<div class="scroll-parent--'+ i+1 +'"><div class="scroll-content--'+ i+1 +'"></div></div>');
        $(this).append('<div class="track track_v--'+ i+1 +'"></div><div class="track track_h--'+ i+1 +'"></div>');

        // set box sizes
        var boxheight = $(this).height();
        var docheight = $('.scroll-content--'+ i+1).height();
        var boxwidth = $(this).width();
        var docwidth = $('.scroll-content--'+ i+1).width();
        var calcboxwidth = boxwidth + 15;
        
        $('.scroll-parent--'+ i+1).css('height', boxheight + 'px');
    
        // set box height 
        if (docwidth >= calcboxwidth) {
            $('.scroll-parent--'+ i+1).css('height', 'calc(100% + 16px)');
        }

        // set tracks color
        if (datacolor != null) {
            $('.track_v--'+ i+1).css('background', datacolor);
            $('.track_h--'+ i+1).css('background', datacolor);
        }

        // calculate track sizes
        $('.track_v--'+ i+1).css('height', (boxheight*100 / docheight ) + '%');

        if (docwidth >= boxwidth) {
            $('.track_h--'+ i+1).css('width', (boxwidth*100 / docwidth) + '%');
        }

        $('.scroll-parent--'+ i+1).on('scroll', function () {

            var scrolled = $(this).scrollTop();
            var scrolledleft = $(this).scrollLeft();
            var calcscrolled =  ((scrolled*.4)*100 / docheight);
          
            $('.scroll-content--'+ i+1).css({
                'top': scrolled + 'px',
                '-webkit-transform': 'translate3d(' + -scrolledleft*.4 + 'px, ' + -scrolled*.4 + 'px, 0)',
                'transform': 'translate3d(' + -scrolledleft*.4 + 'px, ' + -scrolled*.4 + 'px, 0)',
                'transition': 'transform ' + dataspeed + 's cubic-bezier(.05,.3,.1,1) 0s'
            });
           
            // vertical scroll track position
            $('.track_v--'+ i+1).css({
                'top': calcscrolled + '%',
                'transition': dataspeed + ' cubic-bezier(.1,.3,.1,1) 0s'
            });

            // horizontal scroll track position
            if (docwidth >= calcboxwidth) {
                $('.track_h-'+ i+1).css({
                    'left': calcscrolled + '%',
                    'transition': dataspeed + 'cubic-bezier(.1,.3,.1,1) 0s'
                });
            }

        });

        // vertical track drag
        $('.track_v--'+ i+1).draggable({ 
        axis: 'y',
        containment: this,
        drag: function(event,ui) {
                var trackbar = $('.track_v--'+ i+1).position().top;
                var trackbarcalc = trackbar*100 / boxheight;
                $('.scroll-content--'+ i+1).css({
                    '-webkit-transform': 'translate3d(0, ' + -trackbarcalc + '%, 0)',
                    'transform': 'translate3d(0, ' + -trackbarcalc + '%, 0)',
                    'transition': 'transform 1s cubic-bezier(.1,.3,.1,1) 0s'
                });
            }
        });

        // horizontal track drag
        $('.track_h--'+ i+1).draggable({ 
            axis: 'x',
            containment: this,
            drag: function(event,ui) {
                var trackbarh = $(this).position().left;
                var trackbarcalc = (trackbarh*105) / boxwidth;
                $('.scroll-content--'+ i+1).css({
                    'left': -trackbarcalc*2 + '%',
                    'transition': '1s cubic-bezier(.1,.3,.1,1) 0s'
                });
            }
        });

    });

}

// parallax background
function parallaxscroll() {

    $('.parallax-scroll').each(function (i) {
            
        var dataurl = $(this).data('url'), 
            dataparallax = $(this).data('parallax'); 
        
        if (dataurl != undefined) {
            $(this).append('<div class="parallax-background--'+ i+1 +'"><img src="'+ dataurl +'"/>"</div>');
        } 
    
        // create wrapper parallax content
        $(this).wrapInner('<div class="parallax-scroll-parent--'+ i+1 +'"></div>');

        // get content height
        var docheight = $(this).height(),
            positionTop = $(this).position().top,
            viewportH = $(window).height()+170;
    
        // set content height
        $('.parallax-scroll-parent--'+ i+1).css('min-height', docheight);
        $(window).scrollTop(1);
        $(window).on('scroll', function () {

        var scrolled = $(window).scrollTop(),
            calcscroll = scrolled - positionTop,
            datascroll = {
                '-webkit-transform': 'translate3d(0, ' + calcscroll * 0.4 + 'px, 0)',
                'transform': 'translate3d(0, ' + calcscroll * 0.4 + 'px, 0)',
                'transition': 'transform 1s cubic-bezier(.1,.3,.1,1) 0s'
            };

            if ((scrolled + viewportH) >= positionTop) {
                if (dataparallax == 'background') {
                    $('.parallax-background--'+ i+1).css(datascroll);
                } else {
                    $('.parallax-scroll-parent--'+ i+1).css(datascroll);
                }
            }
            
        });
    });

}

// scroll content when scrolling (require css)
function textcross() {
    $('.textcross').each(function () {
        var scrolled = $(window).scrollTop();
        // scroll content when scrolling
        $(this).css('-webkit-transform', 'translate3d(' + -scrolled + 'px, 0, 0)');
        $(this).css('transform', 'translate3d(' + -scrolled + 'px, 0, 0)');
    });
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

// inviewport
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

// highlightBlock
function precode() {
    // require <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.0.1/highlight.min.js"></script>
    $('pre code').each(function (i, block) {
        hljs.highlightBlock(block);
    });
}


$( document ).ready(function() {
    // functions
    setTimeout(function () {
        inviewport();
    }, 500);
    smoothpagescroll();
    if (!isMobile.any()) {
        smoothanchors();
        smoothboxscroll();
        parallaxcontent();
    }
    parallaxscroll();

    scrollLine();
    precode();

    $(window).on('scroll', function () {
        smoothpagescroll();
        stickymenu();
        inviewport();
        scrollLine();
        textcross()
    });
});