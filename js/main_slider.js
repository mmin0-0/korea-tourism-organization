const slideWrap = document.querySelector('.slider-left');
const slideContainer = document.querySelector('.slider-container');
const slide = document.querySelectorAll('.slide');
const slideCount = slide.length;
const btnPrev = document.querySelector('#prev');
const btnNext = document.querySelector('#next');
const pager = document.querySelector('.slider-right .pager');
const pagerBtn = document.querySelectorAll('.slider-right .pager > span');

let slideHeight= 0;
let currentIndex = 0;
let scrollsetInterval;
let pagerHTML = '';

//슬라이드 높이로 부모높이 맞추기
for(let i = 0; i < slideCount; i++){
  if(slide[i].offsetHeight > slideHeight){
    slideHeight = slide[i].offsetHeight;
  }
}
slideWrap.style.height = slideHeight + 'px';
slideContainer.style.height = slideHeight + 'px';

//슬라이드 가로배열
for(let i = 0; i < slideCount; i++){
  slide[i].style.left = i * 100 + '%';
}

//슬라이드 이동함수
function goToSlide(idx){
  slideContainer.classList.add('animated');
  slideContainer.style.left = -100 * idx + '%';
  currentIndex = idx;

  for(let x = 0; x < pagerBtn.length; x++){
    pagerBtn[x].classList.remove('active');
  }
  pagerBtn[idx].classList.add('active');
}
goToSlide(0);

// 버튼 클릭시
btnPrev.addEventListener('click', function(e){
  e.preventDefault();

  if(currentIndex == 0){
    goToSlide(slideCount - 1);
  }else{
    goToSlide(currentIndex - 1);
  }
});

btnNext.addEventListener('click', function(e){
  e.preventDefault();

  if(currentIndex == slideCount - 1){
    goToSlide(0);
  }else{
    goToSlide(currentIndex + 1);
  }
});

// 자동슬라이드
function startAutoSlider(){
  scrollsetInterval = setInterval(function(){
    let next = (currentIndex + 1) % slideCount;
    goToSlide(next);
  }, 3000);
}
startAutoSlider();

function stopAutoSlider(){
  clearInterval(scrollsetInterval);
}

slideWrap.addEventListener('mouseenter', function(){
  stopAutoSlider();
});
slideWrap.addEventListener('mouseleave', function(){
  startAutoSlider();
});

// pager슬라이드 이동
for(let j = 0; j < pagerBtn.length; j++){
  pagerBtn[j].addEventListener('click', function(e){
    let pagerNum = e.target.getAttribute('data-index');
    goToSlide(pagerNum);
    console.log(pagerNum)
  });
}