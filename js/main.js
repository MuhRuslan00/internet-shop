const infoBtns = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-hint')
console.log(infoBtns);

 for(let btn of infoBtns){
  btn.addEventListener('click', function (e) {
    e.stopPropagation();

    //hide all hint
   for (let hint of infoHints){
  hint.classList.add('none');
} 
//show current hint
this.parentNode.querySelector('.info-hint').classList.toggle('none');
 
  });
 }
 
  
 //Закрывать подсказки по клику по всему документу
document.addEventListener('click', function () {
  for (let hint of infoHints){
    hint.classList.add('none');
  } 
})

//Запрещаем всплытие событий при клике на подсказки

for (let hint of infoHints){
  hint.addEventListener('click', (e) => e. stopPropagation());
}
//swiper-slider
const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'horizontal',
  loop: true,
  freeMode: true,

    slidesPerView: 1,
    spaceBetween: 42,

    breakpoints: {
    600: {
        slidesPerView: 2,
        spaceBetween: 20,
     },
      920: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1230: {
        slidesPerView: 4,
        spaceBetween: 42,
      },
    },

  // Navigation arrows
  navigation: {
    nextEl: '#sliderNext',
    prevEl: '#sliderPrev',
  },

});

//Tabs
const tabsBtns= document.querySelectorAll('[data-tab]');
const tabsProducts = document.querySelectorAll('[data-tab-value]');

for (let btn of tabsBtns) {
  console.log(btn);
  btn.addEventListener('click',function() {
    // console.log('Click')
    console.log(this);
  //убираем активные классы у всех кнопок
  for (let btn of tabsBtns) {
    btn.classList.remove('tab-controls__btn--active');
  }

    //добавляем активный класс к текущей кнопке
    this.classList.add('tab-controls__btn--active');

    //получаем значенеи товаров кот нужно оставить
  console.log(this.dataset.tab);

  //скрыть все товары, отобразить нужные товары
  for (let product of tabsProducts) {
    //проверка на отображение всех товаров
    if(this.dataset.tab === 'all') {
      product.classList.remove('none');
    }else {
      if(product.dataset.tabValue === this.dataset.tab) {
      product.classList.remove('none');
    }else {
      product.classList.add('none');
    }
  }
}
swiper.update()
})

}

//mobile nav
const mobileNavOpenBtn = document.querySelector('#open-mobile-nav-btn');
const mobileNavCloseBtn = document.querySelector('#close-mobile-nav-btn');
const mobileNav = document.querySelector('.mobile-nav-wrapper') 

mobileNavOpenBtn.onclick = function() {
  mobileNav.classList.add('mobile-nav-wrapper--open');
}
mobileNavCloseBtn.onclick = function() {
  mobileNav.classList.remove('mobile-nav-wrapper--open');
}



    




