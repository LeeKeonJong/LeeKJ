$(function(){

    $(window).scroll(function(){

        var move=$(this).scrollTop();
        var section3=$('.portfolios').offset().top;

        if(move>section3-2000){
            $("#portfolios_title h4:first-child").css("transform","translateY(0px)").css("opacity","1");
        }
        if(move>section3-1200){
            setTimeout(function(){
            $("#portfolios_title span:nth-child(2)").css("transform","translateY(0px)").css("opacity","1");
            },500);
        }
        if(move>section3-1200){
            setTimeout(function(){
            $("#portfolios_title span:nth-child(3)").css("transform","translateY(0px)").css("opacity","1");
            },600);
        }
        if(move>section3-1200){
            setTimeout(function(){
            $("#portfolios_title span:nth-child(4)").css("transform","translateY(0px)").css("opacity","1");
            },700);
        }
        if(move>section3-1200){
            setTimeout(function(){
            $("#portfolios_title span:nth-child(5)").css("transform","translateY(0px)").css("opacity","1");
            },800);
        }
        if(move>section3-1200){
            setTimeout(function(){
            $("#portfolios_title span:nth-child(6)").css("transform","translateY(0px)").css("opacity","1");
            },900);
        }
        if(move>section3-1200){
            setTimeout(function(){
            $("#portfolios_title span:nth-child(7)").css("transform","translateY(0px)").css("opacity","1");
            },1000);
        }
        if(move>section3-1200){
            setTimeout(function(){
            $("#portfolios_title span:nth-child(8)").css("transform","translateY(0px)").css("opacity","1");
            },1100);
        }
        if(move>section3-1200){
            setTimeout(function(){
            $("#portfolios_title span:nth-child(9)").css("transform","translateY(0px)").css("opacity","1");
            },1200);
        }
        if(move>section3-1200){
            setTimeout(function(){
            $("#portfolios_title span:nth-child(10)").css("transform","translateY(0px)").css("opacity","1");
            },1300);
        }
    });
    
    $(window).scroll(function(){

        var move=$(this).scrollTop();
        var section3=$('.portfolio_img').offset().top;
        if(move>section3-1200){
            setTimeout(function(){
            $(".yp_img").css("transform","translateY(0px)").css("opacity","1");
        },100);
       }
        if(move>section3-1200){
            setTimeout(function(){
            $(".pf1_text h4").css("transform","translateY(0px)").css("opacity","1");
        },300);
       }
       if(move>section3-1200){
        setTimeout(function(){
        $(".pf1_text h1").css("transform","translateY(0px)").css("opacity","1");
        },400);
       }
       if(move>section3-1200){
        setTimeout(function(){
        $(".pf1_text p").css("transform","translateY(0px)").css("opacity","1");
       },500);
      }
      if(move>section3-1200){
        setTimeout(function(){
        $(".pf1_text .address").css("transform","translateY(0px)").css("opacity","1");
       },600);
      }
      if(move>section3-1200){
        setTimeout(function(){
        $(".pf1_text .btnbox").css("transform","translateY(0px)").css("opacity","1");
       },700);
      }
       
    });
});