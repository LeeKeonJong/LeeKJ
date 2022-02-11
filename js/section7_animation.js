$(function(){

    element = document.getElementsByClassName("section7_div1");

    element.addEventListener("click", function(e) {
      e.preventDefault;
      
      
      element.classList.remove("ring");
      
     
      element.offsetWidth = element.offsetWidth;
      
      
      element.classList.add("ring");
    }, false);

});