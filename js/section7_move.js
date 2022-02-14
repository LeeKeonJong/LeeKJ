$(function(){

    $(window).scroll(function(){

        var move=$(this).scrollTop();
        var section7=$('#section7_text').offset().top;

        
        if(move>section7-500){
            $("#section7_text h4:first-child").css("transform","translateY(0px)").css("opacity","1");
        }
        if(move>section7-500){
            setTimeout(function(){
            $("#section7_text span:nth-child(2)").css("transform","translateY(0px)").css("opacity","1");
            },500);
        }
        if(move>section7-500){
            setTimeout(function(){
            $("#section7_text span:nth-child(3)").css("transform","translateY(0px)").css("opacity","1");
            },600);
        }
        if(move>section7-500){
            setTimeout(function(){
            $("#section7_text span:nth-child(4)").css("transform","translateY(0px)").css("opacity","1");
            },700);
        }
        if(move>section7-500){
            setTimeout(function(){
            $("#section7_text span:nth-child(5)").css("transform","translateY(0px)").css("opacity","1");
            },800);
        }
        if(move>section7-500){
            setTimeout(function(){
            $("#section7_text span:nth-child(6)").css("transform","translateY(0px)").css("opacity","1");
            },900);
        }
        if(move>section7-500){
            setTimeout(function(){
            $("#section7_text span:nth-child(7)").css("transform","translateY(0px)").css("opacity","1");
            },1000);
        }
        if(move>section7-500){
            setTimeout(function(){
            $("#section7_text span:nth-child(8)").css("transform","translateY(0px)").css("opacity","1");
            },1100);
        }
        
    });

});