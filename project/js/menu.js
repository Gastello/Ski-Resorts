//Ініціалізація змінних
let header__burger = document.querySelector('.header__burger');
let header_menu = document.querySelector('.header__menu');
let back = document.querySelector('body');
let header = document.querySelector('.header');
let header__list = document.querySelector('.header__list');
let height = header.clientHeight;



//!<Меню зверху-вниз + потрібно змінити класи:>

//Дабавляємо класи при натискані на бургер / автоскролл меню вверх при його відкритті
let menu = document.querySelector('.header__menu');
header__burger.onclick = function () {
   window.scrollTo({ top: 0, behavior: 'smooth' });
   menu.style.paddingBottom = height + "px"; // padding для коректного скролла
   if (!header__burger.classList.contains('active')) {
      menu.style.top = height + "px"; // відступ від хедера
   }
   else menu.style.top = -300 + '%';
   header__burger.classList.toggle('active');
   header_menu.classList.toggle('active');
   back.classList.toggle('lock');
}

// Коли міняється екран на десктопний, то паддінги треба видалити:
let mediaQuery = window.matchMedia("(min-width: 767.98px)")
function handleTabletChange(e) {
   header__burger.classList.remove('active');
   header_menu.classList.remove('active');
   back.classList.remove('lock');
   height = header.clientHeight; // також оновлюємо висоту при змінні екрану
   //menu.style.top = height + "px"; // щоб добавити відступ зверху, щоб nav не налазив на хедер
   if (e.matches) {
      menu.style.paddingBottom = "0px"; //тут видаляється падінг при ПК версії
      menu.style.top = -300 + '%'; // відступ від хедера
   }
}
mediaQuery.addListener(handleTabletChange)// Register event listener
handleTabletChange(mediaQuery)// Initial check
//!</Меню зверху-вниз + потрібно змінити класи:>



// Закриваємо меню після натискання на посилання
const links = Array.from(header__list.children);

links.forEach((link) => {
   link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
   header__burger.classList.remove('active');
   header_menu.classList.remove('active');
   back.classList.remove('lock');
}
