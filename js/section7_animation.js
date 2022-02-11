$(function(){


    element2 = document.getElementsByClassName('section7_div1')[0];
element = document.getElementById("phon");

element2.addEventListener("click", function (e) {
    e.preventDefault;

    
    element.classList.remove("ring");

    
    element.offsetWidth = element.offsetWidth;

    
    element.classList.add("ring");
}, false);

    
});