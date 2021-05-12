const btt = document.querySelector('#back-to-top');
const docElem = document.documentElement;

let offset;
let docHegiht;
let scrollPos;

//문서높이
docHegiht = Math.max(docElem.offsetHeight, docElem.scrollHeight);
offset = docHegiht / 4;

//scroll event
window.addEventListener('scroll', function(){
  scrollPos = docElem.scrollTop;
  btt.classList = (scrollPos > offset) ? 'visible':'';
});

btt.addEventListener('click', function(e){
  e.preventDefault();
  scrollToTop();
});

function scrollToTop(){
  let scrollInterval = setInterval(function(){
    if(scrollPos != 0){
      window.scrollBy(0, -50);
    }else{
      clearInterval(scrollInterval);
    }
  }, 15);
}