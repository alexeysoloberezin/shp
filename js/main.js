

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new bootstrap.Popover(popover)
  })


const allReviewsBtn = document.querySelector('.allreviews')
const res = document.querySelectorAll('.reviews-item')
res.forEach((el, i) => {
  if(i > 3){
    el.classList.add('d-none')
  }
})
if(allReviewsBtn){
  let toggle = false
  allReviewsBtn.addEventListener('click', function (){
    const res = document.querySelectorAll('.reviews-item')

    if(toggle){
      res.forEach((el, i) => {
        if(i > 3){
          el.classList.add('d-none')
        }
      })
      this.textContent = 'Показать все...'
    }else{
      res.forEach(el => {
        el.classList.remove('d-none')
      })
      this.textContent = 'Свернуть отзывы'
    }


    toggle = !toggle
  })
}



const stopList = document.querySelectorAll('.stop')
stopList.forEach(el => {
  el.addEventListener('click', function (e){
    e.stopPropagation()
    e.preventDefault()
  })
})

const myCarousel = document.getElementById('myCarousel');
if (myCarousel) {
  const carouselCounter = myCarousel.querySelector('.carousel-counter');
  const carousel = new bootstrap.Carousel(myCarousel);

  myCarousel.addEventListener('slide.bs.carousel', function (event) {
    updateSlideCounter(event.to)
  });

  function updateSlideCounter(active) {
    active = active + 1;
    const totalSlides = myCarousel.querySelectorAll('.carousel-item').length; // Общее количество слайдов
    carouselCounter.innerHTML = `<span>${active || 1}</span><span>/</span><span>${totalSlides}</span>`;
  }

  updateSlideCounter();
}

const navbarToggler = document.querySelector('.navbar-toggler')
const overlay = document.querySelector('.overlay')
const cart = document.querySelector('.cart')
const headerSearchMain = document.querySelector('.header_search-main')
const headerWrp = document.querySelector('.header-wrp')
const mobSearch = document.querySelector('.mob-search')
const headerSearchBack = document.querySelector('.header_search-back')

headerSearchMain.addEventListener('click', (e) => {
  if (window.innerWidth <= 1200) {
    e.preventDefault()
    headerWrp.classList.remove('d-flex')
    headerWrp.classList.add('d-none')
    mobSearch.classList.remove('d-none')
    overlay.classList.add('show')
  }
})

headerSearchBack.addEventListener('click', (e) => {
  e.preventDefault()
  headerWrp.classList.add('d-flex')
  headerWrp.classList.remove('d-none')
  mobSearch.classList.add('d-none')
  overlay.classList.remove('show')
})

navbarToggler.addEventListener('click', (e) => {
  console.log('123')
  overlay.classList.toggle('show')
  headerSearchMain.classList.toggle('d-none')
  cart.classList.toggle('d-none')
})

// overlay.addEventListener('click', (e) => {
//   overlay.classList.remove('show')
// })

const swiper = new Swiper('.swiper', {
  slidesPerView: 1.12,
  loop: true,
  spaceBetween: 12,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    580: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    820: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    // Медиа-запрос для десктопов
    1200: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});


function zoomItemSLider() {
  // Инициализация мини-превью слайдера
  var miniPreviewSwiper = new Swiper('.mini-preview', {
    spaceBetween: 12,
    slidesPerView: 4, // Количество видимых мини-превью
    loop: true,
    slideToClickedSlide: true, // Переключение при клике на мини-превью
    direction: 'horizontal',
    breakpoints: {
      600: {
        direction: 'vertical',
        spaceBetween: 24,
        slidesPerView: 'auto', // Количество видимых мини-превью
      },
    },
  });

  var miniPreviewBig = document.querySelector('.mini-preview-big');

  // Обработчик события click для мини-превью слайдера
  miniPreviewSwiper.on('click', function () {
    // Получаем активный слайд в мини-превью слайдере
    var activeSlide = miniPreviewSwiper.slides[miniPreviewSwiper.activeIndex];

    // Получаем значение атрибута data-big-img активного слайда
    var bigImageSrc = activeSlide.getAttribute('data-big-img');

    // Устанавливаем изображение в mini-preview-big
    miniPreviewBig.querySelector('img').setAttribute('src', bigImageSrc);
  });
}

zoomItemSLider()

function counters() {
  var counters = document.querySelectorAll('.counter');

  counters.forEach(function (counter) {
    var decButton = counter.querySelector('.counter__dev');
    var incButton = counter.querySelector('.counter__inc');
    var counterValue = counter.querySelector('.counter__val input');

    var count = parseInt(counterValue.value, 10) || 1;

    decButton.addEventListener('click', function () {
      if (count > 1) {
        count--;
        counterValue.value = count;
      }
    });

    incButton.addEventListener('click', function () {
      count++;
      counterValue.value = count;
    });

    // Обработка изменения значения вручную
    counterValue.addEventListener('change', function () {
      var newValue = parseInt(counterValue.value, 10);
      if (!isNaN(newValue) && newValue >= 1) {
        count = newValue;
      } else {
        counterValue.value = count; // Вернуть предыдущее значение, если введено некорректное значение
      }
    });
  });
}

counters();



function tabs() {
  // Получаем все элементы табов
  var tabItems = document.querySelectorAll('.shopZoom__tabs-item');

// Получаем все блоки с содержимым табов
  var tabBoxes = document.querySelectorAll('.shopZoom__tabs-box');
  tabBoxes.forEach(function (tabBox) {
    tabBox.classList.add('d-none');
  });
  const el = document.getElementById('tab-' + 1)
  if(!el) return null;
  el.classList.remove('d-none');

// Добавляем обработчики события для каждого элемента таба
  tabItems.forEach(function (tabItem) {
    tabItem.addEventListener('click', function () {
      // Убираем класс "active" у всех элементов табов
      tabItems.forEach(function (item) {
        item.classList.remove('active');
      });

      // Добавляем класс "active" только к текущему элементу таба
      tabItem.classList.add('active');

      // Получаем data-id атрибут текущего элемента таба
      var tabId = tabItem.getAttribute('data-id');

      // Перебираем все блоки с содержимым табов и скрываем их
      tabBoxes.forEach(function (tabBox) {
        tabBox.classList.add('d-none');
      });

      // Показываем блок с содержимым таба, соответствующий выбранному табу
      document.getElementById('tab-' + tabId).classList.remove('d-none');
    });
  });
}

tabs()


function stars() {
  var starContainers = document.querySelectorAll('.stars');

  starContainers.forEach(function (starContainer) {
    var dataStars = parseFloat(starContainer.getAttribute('data-stars')); // Изменено на parseFloat

    dataStars = Math.min(5, Math.max(0, dataStars));

    for (var i = 0; i < 5; i++) {
      var image = document.createElement('img');
      if (dataStars >= i + 1) {
        image.src = './img/star.svg';
      } else if (dataStars > i) {
        image.src = './img/starHalf.svg';
      } else {
        image.src = './img/starOut.svg';
      }
      image.alt = 'Star';

      // Добавляем изображения в текущий "stars" контейнер
      starContainer.appendChild(image);
    }
  });
}

stars();
function starsForm() {
  var starFormContainers = document.querySelectorAll('.stars-form');

  starFormContainers.forEach(function (starFormContainer) {
    var starsForm = starFormContainer.querySelectorAll('.star-form');

    starsForm.forEach(function (starForm) {
      starForm.addEventListener('mouseover', function () {
        var value = parseFloat(starForm.getAttribute('data-value'));
        updateStarsForm(starFormContainer, value);
      });

      starForm.addEventListener('click', function () {
        var value = parseFloat(starForm.getAttribute('data-value'));
        starFormContainer.setAttribute('data-stars', value);
        updateStarsForm(starFormContainer, value);
        updateInputValue(starFormContainer, value);
      });

      starForm.addEventListener('mouseout', function () {
        var dataStarsForm = parseFloat(starFormContainer.getAttribute('data-stars'));
        updateStarsForm(starFormContainer, dataStarsForm);
      });
    });
  });
}

function updateStarsForm(starFormContainer, value) {
  var starsForm = starFormContainer.querySelectorAll('.star-form');

  starsForm.forEach(function (starForm) {
    var starValueForm = parseFloat(starForm.getAttribute('data-value'));
    if (starValueForm <= value) {
      starForm.src = './img/star.svg';
    } else if (starValueForm - 0.5 <= value) {
      starForm.src = './img/starHalf.svg';
    } else {
      starForm.src = './img/starOut.svg';
    }
  });
}

function updateInputValue(starFormContainer, value) {
  var inputId = starFormContainer.getAttribute('data-input-val');
  var inputElement = document.getElementById(inputId);

  if (inputElement) {
    inputElement.value = value;
  }
}

starsForm();

function prevents () {
  const preventList = document.querySelectorAll('.prevent')
  preventList.forEach(el => {
    el.addEventListener('click', function (e){
      e.preventDefault()
      e.stopPropagation()
    })
  })
}
prevents()


