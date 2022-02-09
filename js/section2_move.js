$(function(){

    $(window).scroll(function(){

        var move=$(this).scrollTop();
        var section2=$('.section2').offset().top;

        if(move>section2-2000){
            $("#section2_top").css("transform","translateY(0px)").css("opacity","1");
        }
        if(move>section2-2200){
            $("#section2_bottom ul li:first-child").css("transform","translateY(0px)").css("opacity","1");
        }
        if(move>section2-2200){
            setTimeout(function(){
            $("#section2_bottom ul li:nth-child(2)").css("transform","translateY(0px)").css("opacity","1");
        },500);
        }
        if(move>section2-2200){
            setTimeout(function(){
            $("#section2_bottom ul li:nth-child(3)").css("transform","translateY(0px)").css("opacity","1");
        },800);
        }
        if(move>section2-2200){
            setTimeout(function(){
            $("#section2_bottom ul li:nth-child(4)").css("transform","translateY(0px)").css("opacity","1");
        },1000);
        }
        if(move>section2-2200){
            setTimeout(function(){
            $("#section2_bottom ul li:nth-child(5)").css("transform","translateY(0px)").css("opacity","1");
        },1200);
        }

    });

});