
// 헤더 스크롤시 오파시티
window.onload = function () {
  var header = document.querySelector('#header');
  window.addEventListener('scroll', headerStyle);

  function headerStyle() {
    if (window.scrollY >= 80) {
      header.style.opacity = '0.3';
      header.style.transition = '.5s ease';
    } else {
      header.style.opacity = '1';
      header.style.transition = '.5s ease';
    }
  }

  headerStyle();
}; 

// TITLE 클릭시 Background hover ON


var bgShow = document.querySelector('.bg_show'),
    workTitle = document.querySelectorAll('.work a');
backOn();

function backOn() {
  workTitle.forEach(function (item, idx) {
    item.addEventListener('mouseenter', function () {
      bgShow.classList.add('on');
    });
    item.addEventListener('mouseleave', function () {
      bgShow.classList.remove('on');
    });
  });
} 

// ETC 페이지 슬라이드


var slides = document.querySelectorAll('.slide_item'),
    slideText = document.querySelectorAll('.text'),
    btnNext = document.querySelector('.btn_next'),
    btnPrev = document.querySelector('.btn_prev');
var current = 0;

function reset() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.opacity = '0';
    slides[i].style.transition = '.3s ease';
    slides[i].style.zIndex = '0';
    slideText[i].style.opacity = '0';
    slideText[i].style.transition = '.3s ease';
  }
}

function slideShow() {
  reset();
  slides[0].style.opacity = '1';
  slides[0].style.transition = '.3s ease';
  slides[0].style.zIndex = '1';
  slideText[0].style.opacity = '1';
  slideText[0].style.zIndex = '1';
}

function slideLeft() {
  reset();
  slides[current - 1].style.opacity = '1';
  slides[current - 1].style.transition = '.3s ease';
  slides[current - 1].style.zIndex = '1';
  slideText[current - 1].style.opacity = '1';
  slideText[current - 1].style.transition = '.3s ease';
  current--;
}

function slideRight() {
  reset();
  slides[current + 1].style.opacity = '1';
  slides[current + 1].style.transition = '.3s ease';
  slides[current + 1].style.zIndex = '1';
  slideText[current + 1].style.opacity = '1';
  slideText[current + 1].style.transition = '.3 ease';
  current++;
  
  // console.log(current,slides.length)
}

btnPrev.addEventListener("click", function () {
  if (current === 0) {
    current = slides.length;
  }

  slideLeft();
});
btnNext.addEventListener("click", function () {
  if (current === slides.length - 1) {
    current = -1;
  }

  slideRight();
});
slideShow();