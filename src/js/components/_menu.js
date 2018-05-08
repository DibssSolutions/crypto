const btnMenu = $('.js-btn-menu');
const header = $('.js-header');

btnMenu.on('click', e => {
  e.preventDefault();
  header.toggleClass('is-open-menu');
});
