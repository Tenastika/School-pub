'use strict';

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 32,
    
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {

        1440: {
        slidesPerView: 3,
        spaceBetween: 28
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        425: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 30
        }
}});
const navMenu = document.querySelector('.header__nav')
// Look for .hamburger
const hamburger = document.querySelector(".hamburger");
// On click
hamburger.addEventListener("click", function(e) {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu
  navMenu.classList.toggle('active-menu'); 
  e.stopPropagation(); //Останавливаем всплытие для корректной работы функции закрытия меню по клику вне области меню
});

document.addEventListener ('click', function(e) {
    if (!(navMenu.contains(e.target)) && 
        (navMenu.classList.contains('active-menu'))) {

        hamburger.classList.toggle("is-active");
        navMenu.classList.toggle('active-menu');     
    }
})


$('[data-fancybox="mentors"]').fancybox({     
     loop: true,
     toolbar  : false,
	 smallBtn : true,   
})
   
$('.header__link1').fancybox({     
    toolbar  : false,
    smallBtn : true,
    autoFocus: false, // отменяет автофокус в инпуте 
    
})
$('.login__link').fancybox({     
    toolbar  : false,
    smallBtn : false,
    autoFocus: false,
})
$('.school__btn').fancybox({     
   
})
$('.header__link2').fancybox({     
   
})
$('.header__link3').fancybox({     
   
})

$('[data-fancybox="courses"]').fancybox({     
   
    loop: false,
     toolbar  : false,
	 smallBtn : true, 
})

const inputPassLog = document.querySelector('.modals__form-login-pas');
const inputPassReg = document.querySelector('.modals__form-reg-pas');
const passViewLog = document.querySelector('.pass-view-log');
const passViewReg = document.querySelector('.pass-view-reg');


function getViewPass(btn, input) {
    btn.addEventListener('click', function addType() {
        if (input.type == 'password') {
            input.type = 'text';
        } else {
            input.type = 'password'
        }   
    })    
}
getViewPass(passViewLog, inputPassLog);
getViewPass(passViewReg, inputPassReg);

const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector), 
          tab = document.querySelectorAll(tabSelector), 
          content = document.querySelectorAll(contentSelector);

    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
        });

        tab.forEach(item => {
            item.classList.remove(activeClass);
        })
    };

    function showTabContent(i = 0) {

        content[i].style.display = 'flex';
        tab[i].classList.add(activeClass);

    }
    
    hideTabContent();
    //для всегда активной первой вкладки
    showTabContent();

    header.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains(tabSelector.replace(/\./,"")) ||
        target.parentNode.classList.contains(tabSelector.replace(/\./,""))) {
            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    })
 
    //для соответствия активной вкладки нажимаемой кнопке
    const btnSignup = document.querySelector('.signup');

    btnSignup.addEventListener('click', function (e) {
    if (e.target.classList.contains('signup') ||
    e.target.parentNode.classList.contains('signup')) {
        hideTabContent();
        showTabContent(1);
    }
    })
    const btnLogin = document.querySelector('.btn-login');
    
    btnLogin.addEventListener('click', function (e) {
    if (e.target.classList.contains('btn-login') ||
    e.target.parentNode.classList.contains('btn-login')) {
        hideTabContent();
        showTabContent(0);
    }
    
})

};
tabs('.modals__btn', '.btn-tab', '.form-tab', 'active' )
 
 
function openThanks(closeModal, thanks, buttonOpenThanks) {

    let btn = document.querySelector(buttonOpenThanks);
    
    btn.addEventListener('click', () => { // Нажать кнопку login
    
    $.fancybox.close($(closeModal)); //закрыть модалку с табами
    $.fancybox.open($(thanks));  //открыть модалку thanks
    
    
 })
}

openThanks('#login-modals', '#contact-sub-thanks', '.modals__form-login-btn');
openThanks('#modal-sub', '#contact-sub-thanks', '.modal-sub__btn' );
openThanks('#login-modals', '#contact-sub-thanks', '.modals__form-reg-btn');
openThanks('#contact', '#contact-thanks', '.contacts__form-btn');



