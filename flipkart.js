let flag = 0;

function control(x){
    flag += x;
    slideshow(flag);
}
slideshow(flag);
function slideshow(num){
    const slide = document.getElementsByClassName('img');
    console.log(slide);

    // if (num < 0) {
    //     flag = slide.length-1;
    //     num = slide.length-1;
    // }

    // if (num > slide.length) {
    //     flag = 0;
    //     num = 0;
    // }
    for (let y of slide) {
        y.style.display="none";
        console.log(y);
        // slide[y].style.display="none";
    }
    console.log(num);
    slide[num].style.display="block";
}


