window.addEventListener('DOMContentLoaded', () => { }) //код работает после загрузки страници

$('.menu__link, .menu__btn').on('click', function () {
  $('.menu__items, .menu__btn').toggleClass('active');
});

// Создаем объект Date

const today = new Date();

// Получаем текущую дату в формате ДД-ММ-ГГГГ
const day = today.getDate();
const month = today.getMonth() + 1; // Январь это 0!
const year = today.getFullYear();

// Форматируем дату
const formattedDate = `${day < 10 ? '0' : ''}${day}.${month < 10 ? '0' : ''}${month}.${year}`;

// ----
//  для маски
// Находим элемент с id="current-date" и вставляем туда дату
document.getElementById('current-date').innerText = formattedDate;
// -------
document.addEventListener('DOMContentLoaded', function () {
  var phoneInput = document.getElementById('tel-input');

  phoneInput.addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove non-digits

    // Ensure the value starts with +380
    if (value.startsWith('380')) {
      value = value.substring(3); // Remove the country code part
    } else {
      value = ''; // Reset if it doesn't start with 380
    }

    let formattedValue = '+380 (';

    if (value.length > 0) {
      formattedValue += value.substring(0, 2);
    }
    if (value.length > 2) {
      formattedValue += ') ' + value.substring(2, 5);
    }
    if (value.length > 5) {
      formattedValue += '-' + value.substring(5, 7);
    }
    if (value.length > 7) {
      formattedValue += '-' + value.substring(7, 9);
    }

    e.target.value = formattedValue;
  });

  // Set current date
  var currentDateSpan = document.getElementById('current-date');
  var currentDate = new Date().toLocaleDateString();
  currentDateSpan.textContent = currentDate;
});

// таймер обратного отщета
// Устанавливаем время окончания (текущая дата и время + 2 часа)
const endTime = new Date().getTime() + 2 * 60 * 60 * 1000;

function updateTimer() {
  const now = new Date().getTime();
  const distance = endTime - now;

  if (distance < 0) {
    clearInterval(interval);
    document.getElementById("timer").innerHTML = "Время истекло";
    return;
  }

  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML =
    (hours > 0 ? hours + ":" : "") +
    (minutes < 10 && hours > 0 ? "0" : "") + minutes + ":" +
    (seconds < 10 ? "0" : "") + seconds;
}

const interval = setInterval(updateTimer, 1000);



// $('.menu__btn, .menu a').on('click', function () {
//     $('.menu__btn, .menu__items').toggleClass('active');
//     // для крестика и для меню и что бы закрывалось меню после выбора сcылки
// });
// ------------------
$('a[href="' + this.location.pathname + '"]').parent().addClass('header-fixed');
// чтобы класс не пропадал при обновлении страницы
// ------------------
$(".menu a, .scroll a").on("click", function (event) {
  event.preventDefault();
  var id = $(this).attr('href'),
    top = $(id).offset().top;
  tops = top - 80;
  $('body,html').animate({ scrollTop: tops }, 1500);
});
// дял скрола
// -----------------------------

$(function () {
  let header = $('.header');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      header.addClass('header-fixed');
    } else {
      header.removeClass('header-fixed');
    }
  });
})
// });// Функция для фиксированной шапки при скролле
// ----------------------------------
/*
          $('.menu__btn').on('click', function () {
              $('.menu__items').toggleClass('menu__items--active');
          });
          $('.menu__btn').on('click', function () {
              $('.menu__btn').toggleClass('active');
          });
          ------------------------------------------
          // const observer = new IntersectionObserver((entries) => {
//     console.log(entries);
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             document.querySelectorAll('.menu__link').forEach((link) => {
//                 let id = link.getAttribute('href').replace('#', '');
//                 if (id === entry.target.id) {
//                     link.classList.add('link-active');
//                 } else {
//                     link.classList.remove('link-active');
//                 }
//             });
//         }
//     });
// }, {
//     threshold: 0.5
// });// для подсветки пунктов меню
----------------------------------------------------
       
        $('.home__slider').slick({
            dots: true,
            arrows: false,
             responsive: [


                 {
                     breakpoint: 1150,
                     settings: {
                         slidesToShow: 4,
                     }
                 },
                 {
                     breakpoint: 1000,
                     settings: {
                         slidesToShow: 3,
                     }
                 },
                 {
                     breakpoint: 620,
                     settings: {
                         slidesToShow: 2,
                         slidesToScroll: 2,
                     }
                 },
             ]
        });
       */




