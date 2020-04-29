function viewportTrigger()  {  
    $('.viewport--trigger').each(function(reveal) {
        $(this).delay(80*reveal).animate({ opacity: 1 },function(){
            if (onview($(this))) {
                $(this).addClass('in-viewport');
            }
        });
    });
    function onview(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height()-100;
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }  
}  

$(document).ready(function() {
    viewportTrigger();
    $(window).on('scroll', function () { 
        viewportTrigger();
    });  
});