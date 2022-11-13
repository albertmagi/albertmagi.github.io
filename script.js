var index = 1;

function nextSlide(n){
    index += n;
    showSlides(index);
}

function currentSlide(n){
    index=n;
    showSlides(index);
}

function showSlides(n){
    var dots = document.getElementsByClassName("dot");
    var slides = document.getElementsByClassName("edu");
    var i;
    if(n > slides.length){ //if the new number is greater than the total lenght then it will go to the first element
        index = 1;
    }
    if(n < 1){ //If the number is inferior to 1 then it will go to the last element
        index = slides.length;
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.visibility = "hidden";
    }
    for(i = 0; i < slides.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[index-1].style.visibility = "visible";
    dots[index-1].className += " active";
}
