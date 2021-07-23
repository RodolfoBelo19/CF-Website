$('.ourspace-slider-container').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: '<a class="slider-prev-btn"><i class="fas fa-chevron-left"></i></a>',
    nextArrow: '<a class="slider-next-btn"><i class="fas fa-chevron-right"></i></a>',
    responsive: [
      {
        breakpoint: 1152,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 4000
        }
      }
    ]
  });