const btnScroll = document.querySelector('.hero__scroll'),
   guideBlock = document.querySelector('.guide'),
   burger = document.querySelector('.burger-menu'),
   menu = document.querySelector('.header__menu'),
   body = document.body;

btnScroll.addEventListener('click', (e) => {
   e.preventDefault();
   window.scroll({ top: guideBlock.offsetTop - 70, behavior: 'smooth' });
});

burger.addEventListener('click', (e) => {
   burger.classList.toggle('active');
   menu.classList.toggle('active');
   body.classList.toggle('lock');
});
