const $simpleCarousel = document.querySelector(".glider");

const slide = new Glider($simpleCarousel, {
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,
  dots: ".dots",
  arrows: {
    prev: ".glider-prev",
    next: ".glider-next",
  },
  scrollLock: true,
});

function sliderAuto(slider, miliseconds) {
  const slidesCount = slider.track.childElementCount;
  let slideTimeout = null;
  let nextIndex = 1;

  function slide() {
    slideTimeout = setTimeout(function () {
      if (nextIndex >= slidesCount) {
        nextIndex = 0;
      }
      slider.scrollItem(nextIndex++);
    }, miliseconds);
  }

  slider.ele.addEventListener("glider-animated", function () {
    window.clearInterval(slideTimeout);
    slide();
  });

  slide();
}

sliderAuto(slide, 10000);
