$(function(){

   
   
            
            var cnt0 = 0;
            counterFn();
    
    function counterFn(){

        $(window).scroll(function(){

        var ws=$(this).scrollTop();

        var s2=$('.section2').offset().top;

        if(ws>s2-700){
        
       setTimeout(function(){
        id0 = setInterval(count0Fn, 700);
        id1 = setInterval(count0Fn, 1000);
        id2 = setInterval(count0Fn, 800);
        id3 = setInterval(count0Fn, 900);
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
            }if (cnt0 > 60){
                clearInterval(id1);
            }else {
                $(".count3").text(cnt0);
            }if (cnt0 > 80) {
                clearInterval(id2);
            }else {
                $(".count4").text(cnt0);
            }if (cnt0 > 70) {
                clearInterval(id3)
            }else {
                $(".count5").text(cnt0);
            }
        }

    }

});