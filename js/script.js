"use strict"

const isMobile = {
   Android: function () {
      return navigator.userAgent.match(/Android/i);
   },
   BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
   },
   iOS: function() {
      return navigator.userAgent.match(/iOS/i);
   },
   Opera: function () {
      return navigator.userAgent.match(/Opera/i);
   },
   Windows: function () {
      return navigator.userAgent.match(/Windows/i);
   },
   any: function () {
      return (
         isMobile.Android() ||
         isMobile.BlackBerry() ||
         isMobile.iOS() ||
         isMobile.Opera() ||
         isMobile.Windows());
   }
}

if (isMobile.any()) {
   document.body.classList.add('_touch');

} else {
   document.body.classList.add('_pc');
}

//Меню Бургер

const iconMenu = document.querySelector('.contacts__burger-open');
const menuHeader = document.querySelector('.header__menu');
if (iconMenu){
   iconMenu.addEventListener("click", function(e) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuHeader.classList.toggle('_active');
   });
}


//Прокрутка при клике

const menuLinks = document.querySelectorAll('.menu__link[data-goto]')
if(menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick)
   })

   function onMenuLinkClick(e) {
      const menuLink = e.target;
      if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
         const gotoBlock = document.querySelector(menuLink.dataset.goto)
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
      
         if(iconMenu.classList.contains('_active')) {
            document.body.classList.remove('_lock');
            iconMenu.classList.remove('_active');
            menuHeader.classList.remove('_active');
         }

         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         })
         e.preventDefault();
      }
   }
}