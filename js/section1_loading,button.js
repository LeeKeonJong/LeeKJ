$(function(){
    
    
       setTimeout(function(){
        $("#loading").fadeOut(1000);
        $("#loading").css("transform","translateY(-100%)").css("transition","1s");
    },1000);
    
        $("#section1_button").click(function(){
            $('html,body').animate({scrollTop:$(".section2").offset().top},500);
        });
});