const tabLink = document.querySelectorAll('.tabs-menu a');
const tabContent = document.querySelectorAll('.tabs-content > div');

for(let i = 0; i < tabLink.length; i++){
  tabLink[i].addEventListener('click', (e) => {
    e.preventDefault();

    let orgTarget = e.target.getAttribute('href');
    let tabTarget = orgTarget.replace('#', '');
    
    for(let j = 0; j < tabContent.length; j++){
      tabContent[j].style.display = 'none';
    }
    document.getElementById(tabTarget).style.display = 'block';

    for(let x = 0; x < tabLink.length; x++){
      tabLink[x].classList.remove('active');
      e.target.classList.add('active');
    }
  });
}
document.getElementById('tabs-1').style.display = 'block';