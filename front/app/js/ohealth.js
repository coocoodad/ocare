// swiper
$(function(){
    var swiper = new Swiper(".mySwiper", {
        centeredSlides: false
    });
});

// tab menu
$(function(){
    $(".news .tabList .tab").click(function(){ 
        
        $(".news .tabList .tab").removeClass('on');
        $(".news .tabPanel").removeClass('on');

        $(this).addClass('on');

        $("#"+$(this).attr('aria-controls')).addClass('on');
    });
});