$(function(){
    $(window).scroll(function(){
        var scrolling = $(window).scrollTop();

        if(scrolling > 50){
            $(".main_menu").addClass("bg")
        }
        else{
            $(".main_menu").removeClass("bg")
        }

        if(scrolling > 50){
            $(".scl_btn i").fadeIn(500)
        }
        else{
            $(".scl_btn i").fadeOut(500)
        }
        $(".scl_btn i").click(function(){
            $('body , html').animate({
                scrollTop:0
            },0)
        })
    })
})