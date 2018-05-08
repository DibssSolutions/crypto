import owlCarousel from 'owl.carousel';

const slider = $('.js-slider');
const buildIcon = name => `<span class="icon icon-${name}"></span>`;
const prev = buildIcon('arrow-big-left');
const next = buildIcon('arrow-big-right');
slider
  .owlCarousel({
    nav: true,
    items: 1,
    autoHeight: true,
    animateOut: 'fadeOut',
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    loop: true,
    navText: [prev, next],
    navElement: 'button',
    navClass: ['slider__prev', 'slider__next']
  });
