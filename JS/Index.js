//Navigation Bar Start
const burger = document.querySelector(".burger");
const burgerline1 = document.getElementById("line1");
const burgerline2 = document.getElementById("line2");
const burgerline3 = document.getElementById("line3");
const navbar = document.getElementById("navbar");

burger.addEventListener('click', event => {
    navbar.classList.toggle("active");
    burgerline1.classList.toggle("active");
    burgerline2.classList.toggle("active");
    burgerline3.classList.toggle("active");
    burger.classList.toggle("active");
});
//Naviagtion Bar End

//Slider start 
const slide = document.querySelector(".slide_muve"),
      img = document.querySelectorAll(".slide"),
      dots = document.querySelectorAll(".dot");

let  index = 0;
const size = (img[0].clientWidth);

const slideMontion = n =>{
    slide.style.transition = "transform 0.3s";
    slide.style.transform = "translateX(" + index*(-size) + "px)";
}
const dotPosition = n =>{
    for(let dot of dots){
        dot.classList.remove("active");
    }
    dots[n].classList.add("active");
}
const MontionAndPosition = n =>{
    slideMontion(n);
    dotPosition(n);
}
setInterval(() => {
    index++;
    if(index == 0){
        index = img.length;
    }
    else if(index == (img.length)){
        index = 0;
    };
    MontionAndPosition(index);
}, 4000);

dots.forEach((item,indexdot) => {
    item.addEventListener("click",() => {
        index = indexdot;
        MontionAndPosition(index);
    })
});
//slider End