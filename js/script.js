const container = document.querySelector('carousel__container')

const images = document.querySelectorAll('.slide')





images.forEach((slide, indx) => {

slide.style.transform = `translateX(${indx * 100}%)`;


});

let curSlide = 0;

let maxSlide = images.length - 1;


const btn1 = document.querySelector('.next')


btn1.addEventListener('click', function () {
   if(curSlide === maxSlide) {
    curSlide = 0;
   } else {
    curSlide++;
   }

images.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
});
})


const btn2 = document.querySelector('.previous')

btn2.addEventListener('click', function () {
    if (curSlide === 0) {
        curSlide = maxSlide
    } else {
        curSlide--;
    }

    images.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    })
})







   


