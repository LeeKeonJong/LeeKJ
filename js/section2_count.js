$(function(){
  
   
           
            var cnt0 = 0;
            var cnt1 = 0;
            var cnt2 = 0;
            var cnt3 = 0;
            counterFn();
            counterFn2();
            counterFn3();
            counterFn4();
    
    function counterFn(){

        $(window).scroll(function(){

        var ws=$(this).scrollTop();

        var s2=$('#section2_top').offset().top;
        
        

        if(ws>s2-300){
        
       setTimeout(function(){
        id0 = setInterval(count0Fn, 130);
        
    },800);
    
 }
});
        function count0Fn(){
            cnt0++;
            if (cnt0 > 90) {
                clearInterval(id0);
            }else {
                $(".count1").text(cnt0);
                $(".count2").text(cnt0);
            }
        }

    }



    function counterFn2(){

        $(window).scroll(function(){

        var ws=$(this).scrollTop();

        var s2=$('#section2_top').offset().top;
        
        

        if(ws>s2-300){
        
       setTimeout(function(){
        id1 = setInterval(count1Fn, 130);
        
    },800);
    
 }
});
        function count1Fn(){
            cnt1++;
            if (cnt1 > 60) {
                clearInterval(id1);
            }else {
                $(".count3").text(cnt1);
            }
        }

    }



    function counterFn3(){

        $(window).scroll(function(){

        var ws=$(this).scrollTop();

        var s2=$('#section2_top').offset().top;
        
        

        if(ws>s2-300){
        
       setTimeout(function(){
        id2 = setInterval(count2Fn, 130);
        
    },800);
    
 }
});
        function count2Fn(){
            cnt2++;
            if (cnt2 > 80) {
                clearInterval(id2);
            }else {
                $(".count4").text(cnt2);
            }
        }

    }



    function counterFn4(){

        $(window).scroll(function(){

        var ws=$(this).scrollTop();

        var s2=$('#section2_top').offset().top;
        
        

        if(ws>s2-300){
        
       setTimeout(function(){
        id3 = setInterval(count3Fn, 130);
        
    },800);
    
 }
});
        function count3Fn(){
            cnt3++;
            if (cnt3 > 70) {
                clearInterval(id3);
            }else {
                $(".count5").text(cnt3);
            }
        }

    }

});
            
        