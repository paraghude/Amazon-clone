const imgs = document.querySelectorAll('.header-slider ul img');
const next_btn = document.querySelector('.control_next');
const prev_btn = document.querySelector('.control_prev');

let n = 0;
function changeSlide() {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = 'none'; //1st all images are hidden
  }
  imgs[n].style.display = 'block'; //if n = 0 then it will select 1st img,  if n=1 then 2nd img
}
changeSlide();

prev_btn.addEventListener('click', (e) => {
  if(n > 0) {
    n--; //decrease the value of n (for previous image)
  }
  else {
    n = imgs.length - 1;
  }
  changeSlide();
})
next_btn.addEventListener('click', (e) => {
  if(n < imgs.length -1) {
    n++; //increase the value of n by plus 1 (for next image)
  }
  else {
    n = 0;
  }
  changeSlide();
})

//Mouse Scroller for Products(products-slider-with-price)
const scrollContainer = document.querySelectorAll('.products')
for(const item of scrollContainer) {
  item.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    item.scrollLeft += evt.deltaY;
  })
}