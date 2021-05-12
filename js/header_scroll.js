const header = document.querySelector('header');
const threshold = header.offsetHeight;
const right = document.querySelector('.right');

window.addEventListener('scroll', function(){
  if(this.pageYOffset > threshold){
    right.style.marginRight = '0';
  }else{
    right.style.marginRight = '-120px';
  }
});
