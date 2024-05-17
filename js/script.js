'use strict';
/* Progress Bar */

// Функция для отображения прогресс-бара при прокрутке страницы
// Function to display the progress bar while scrolling the page
function progressBar() {
  let scroll = document.body.scrollTop || document.documentElement.scrollTop;

  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  let scrolled = (scroll / height) * 100;

  document.getElementById("progressBar").style.width = scrolled + "%";
}
window.addEventListener("scroll", progressBar);

// Оптимизированный код для отображения элементов при прокрутке страницы
// Optimized code to display elements while scrolling the page

// Функция для отображения блоков при прокрутке страницы
// Function to display blocks while scrolling the page
function displayBlocksOnScroll(selector, offsetFactor) {
    const blocks = document.querySelectorAll(selector);

    // Обработчик события прокрутки
    // Scroll event handler
    function scrollHandler() {
        const windowHeight = window.innerHeight;
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

        blocks.forEach(function(block) {
            const blockPosition = block.getBoundingClientRect().top;
            if (blockPosition < windowHeight / offsetFactor + scrollPosition) {
                block.classList.add('show');
            } else {
                block.classList.remove('show');
            }
        });
    }

    // Вызов обработчика события прокрутки
    // Call the scroll event handler
    window.addEventListener("scroll", scrollHandler);

    // Вызов обработчика события resize для обновления параметров при изменении размера окна
    // Call the resize event handler to update parameters when window size changes
    window.addEventListener('resize', scrollHandler);
}

// Вызов функции для отображения блоков "о нас", "проекты", "навыки", "социальные ссылки", "портфолио", "тринити" и "риво"
// Call the function to display "about", "projects", "skills", "social links", "portfolio", "trinity", and "rivo" blocks
displayBlocksOnScroll('.about__block', 1.5);
displayBlocksOnScroll('.projects__block', 1.5);
displayBlocksOnScroll('.about__page-block--skills', 1.5);
displayBlocksOnScroll('.about__page-block--socials', 1.5);
displayBlocksOnScroll('.projects__card-portfolio', 1.5);
displayBlocksOnScroll('.projects__card-trinity', 1.5);
displayBlocksOnScroll('.projects__card-rivo', 1.5);



// Плавное появление блоков

// Функция для плавного появления элементов при прокрутке страницы
// Function for smooth appearance of elements on scroll
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.block');
for (let elm of elements) {
  observer.observe(elm);
}

/*====== BURGER ======*/
// Функция для открытия/закрытия меню бургер
// Function to toggle burger menu
window.burgerMenu = function() {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');

    burger.classList.toggle('open');
    menu.classList.toggle('active');

    // Если меню открыто, блокируем прокрутку страницы
    // If the menu is open, lock scrolling of the page
    if (menu.classList.contains('active')) {
        // Добавляем класс, который блокирует прокрутку
        // Add the class that locks scrolling
        document.body.style.overflow = 'hidden';
    } else {
        // Если меню закрыто, разблокируем прокрутку страницы
        // If the menu is closed, unlock scrolling of the page
        document.body.style.overflow = '';
    }
};


// Обработчик события resize для блокировки скролла на мобильных устройствах
// Resize event handler to lock scroll on mobile devices
window.addEventListener('resize', function() {
    const menu = document.querySelector('.menu');
    // Проверяем, открыто ли меню, и блокируем скролл только при необходимости
    // Check if the menu is open, and lock scrolling only when necessary
    if (menu.classList.contains('active') && window.innerWidth <= 1024) {
        document.body.style.overflowY = 'hidden';
    } else {
        document.body.style.overflowY = '';
    }
});



/* SmoothScroll */

// Плавная прокрутка к якорю при нажатии на ссылку
// Smooth scroll to anchor on link click
document.querySelectorAll('a[href^="#"').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    let href = this.getAttribute('href').substring(1);

    const scrollTarget = document.getElementById(href);

    const topOffset = document.querySelector('.scrollto').offsetHeight;

    const elementPosition = scrollTarget.getBoundingClientRect().top;

    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});


// Функция для добавления класса "active" элементам при загрузке страницы
// Function to add the "active" class to elements on page load
function addActiveClassOnLoad(selector) {
    const blocks = document.querySelectorAll(selector);

    // Проверяем, существуют ли элементы, которым нужно добавить класс "active"
    // Check if there are elements to which the "active" class should be added
    if (blocks.length > 0) {
        // Добавляем класс "active" каждому найденному элементу
        // Add the "active" class to each found element
        blocks.forEach(function(block) {
            block.classList.add('active');
        });
    }
}

// Вызов функции для добавления класса "active" блокам "о нас" и "проекты"
// Call the function to add the "active" class to "about" and "projects" blocks
addActiveClassOnLoad('.about__page-block--title');
addActiveClassOnLoad('.about__page-title');
addActiveClassOnLoad('.projects__page-block--title');
addActiveClassOnLoad('.projects__page-title');



 document.addEventListener('DOMContentLoaded', function() {
    let cards = document.querySelectorAll('.projects__card-animation');

    function animateOnScroll() {
        cards.forEach(function(card) {
            if (isElementInViewport(card) && !card.classList.contains('animate')) {
                card.classList.add('animate');
            }
        });
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    animateOnScroll();

    window.addEventListener('scroll', animateOnScroll);
});


// PRELOADER
// Preloader
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});


sessionStorage.setItem('prevPage', document.referrer);

// BACK
function goBack() {
            // Получаем предыдущий URL из sessionStorage
            let prevPage = sessionStorage.getItem('prevPage');
            // Переходим на предыдущую страницу
            window.location.href = prevPage;
        }

   $(document).ready(function() {
            $('#contactForm').submit(function(e) {
                e.preventDefault();
                var name = $('#name').val();
                var email = $('#email').val();
                var message = $('#message').val();
                
                // Проверка заполненности полей
                if(name === '' || email === '' || message === '') {
                    alert('Please fill in all fields.');
                    return;
                }
                
                // Отправка данных формы на сервер
                $.ajax({
                    type: 'POST',
                    url: 'send_email.php', // Путь к файлу обработчику на сервере
                    data: {
                        name: name,
                        email: email,
                        message: message
                    },
                    success: function(response) {
                        alert('Message sent successfully!');
                        $('#contactForm')[0].reset(); // Сброс формы после успешной отправки
                    },
                    error: function(xhr, status, error) {
                        console.error(xhr.responseText);
                        alert('There was an error sending your message. Please try again later.');
                    }
                });
            });
             // Закрытие модального окна при клике на крестик
        $('.close').click(function() {
            $('#myModal').css('display', 'none');
        });
        });

// // // Ждем загрузки всего документа перед выполнением скрипта
// document.addEventListener("DOMContentLoaded", function() {
//     // Выводим сообщение в консоль, что документ загружен и событие слушателя добавлено
//     console.log("Document ready. Adding event listener.");
    
//     // Получаем элемент выпадающего списка по его идентификатору "langSelect" и добавляем к нему обработчик события "change"
//     document.getElementById("langSelect").addEventListener("change", function() {
//         // Получаем значение выбранного языка из выпадающего списка
//         var langSelect = document.getElementById("langSelect");
//         var selectedLang = langSelect.value;
        
//         // Получаем текущий URL страницы
//         var currentUrl = window.location.href;
        
//         // Выводим в консоль выбранный язык и текущий URL
//         console.log("Selected language:", selectedLang);
//         console.log("Current URL:", currentUrl);
        
//         // Инициализируем переменную для нового URL
//         var newUrl = currentUrl;
        
//         // В зависимости от выбранного языка, заменяем соответствующие подстроки в URL
//         if (selectedLang === "en") {
//             // Если выбран английский, заменяем /RU/ и /RO/ на /EN/
//             newUrl = newUrl.replace("/RU/", "/EN/");
//             newUrl = newUrl.replace("/RO/", "/EN/");
//         } else if (selectedLang === "ru") {
//             // Если выбран русский, заменяем /EN/ и /RO/ на /RU/
//             newUrl = newUrl.replace("/EN/", "/RU/");
//             newUrl = newUrl.replace("/RO/", "/RU/");
//         } else if (selectedLang === "ro") {
//             // Если выбран румынский, заменяем /EN/ и /RU/ на /RO/
//             newUrl = newUrl.replace("/EN/", "/RO/");
//             newUrl = newUrl.replace("/RU/", "/RO/");
//         } else {
//             // В случае, если выбран неизвестный язык, выводим сообщение об ошибке
//             console.log("Language not recognized:", selectedLang);
//         }
        
//         // Выводим в консоль новый URL
//         console.log("New URL:", newUrl);
        
//         // Если новый URL отличается от текущего, перенаправляем на новый URL
//         if (newUrl !== currentUrl) {
//             window.location.href = newUrl;
//         }
//     });
// });


// document.addEventListener("DOMContentLoaded", function() {
//     console.log("Document ready. Adding event listener.");
//     document.getElementById("langSelect").addEventListener("change", function() {
//         var langSelect = document.getElementById("langSelect");
//         var selectedLang = langSelect.value;
//         var currentUrl = window.location.href;
        
//         console.log("Selected language:", selectedLang);
//         console.log("Current URL:", currentUrl);
        
//         var newUrl = currentUrl;
        
//         if (selectedLang !== "en") {
//             // Для языков RU и RO добавляем подкаталог перед именем файла
//             newUrl = newUrl.replace("/index.html", "/" + selectedLang + "/index.html");
//         }
        
//         console.log("New URL:", newUrl);
        
//         if (newUrl !== currentUrl) {
//             window.location.href = newUrl;
//         }
//     });
// });

// Ждем загрузки всего документа перед выполнением скрипта
document.addEventListener("DOMContentLoaded", function() {
    // Выводим сообщение в консоль, что документ загружен и событие слушателя добавлено
    console.log("Document ready. Adding event listener.");
    
    // Получаем элемент выпадающего списка по его идентификатору "langSelect"
    var langSelect = document.getElementById("langSelect");
    
    // Проверяем, существует ли элемент с идентификатором "langSelect"
    if (langSelect) {
        // Добавляем обработчик события "change"
        langSelect.addEventListener("change", function() {
            // Получаем значение выбранного языка из выпадающего списка
            var selectedLang = langSelect.value;
            
            // Получаем текущий URL страницы
            var currentUrl = window.location.href;
            
            // Выводим в консоль выбранный язык и текущий URL
            console.log("Selected language:", selectedLang);
            console.log("Current URL:", currentUrl);
            
            // Инициализируем переменную для нового URL
            var newUrl = currentUrl;
            
            // Условие для замены подстрок в URL или добавления их
            if (selectedLang === "en") {
                // Если выбран английский, заменяем /RU/ и /RO/ на /EN/ или добавляем /EN/
                if (newUrl.includes("/RU/") || newUrl.includes("/RO/")) {
                    newUrl = newUrl.replace(/\/(RU|RO)\//, "/");
                } else {
                    newUrl = newUrl.replace("/MyPortfolio/", "/MyPortfolio/EN/");
                }
            } else if (selectedLang === "ru") {
                // Если выбран русский, заменяем /EN/ и /RO/ на /RU/ или добавляем /RU/
                if (newUrl.includes("/EN/") || newUrl.includes("/RO/")) {
                    newUrl = newUrl.replace(/\/(EN|RO)\//, "/RU/");
                } else {
                    newUrl = newUrl.replace("/MyPortfolio/", "/MyPortfolio/RU/");
                }
            } else if (selectedLang === "ro") {
                // Если выбран румынский, заменяем /EN/ и /RU/ на /RO/ или добавляем /RO/
                if (newUrl.includes("/EN/") || newUrl.includes("/RU/")) {
                    newUrl = newUrl.replace(/\/(EN|RU)\//, "/RO/");
                } else {
                    newUrl = newUrl.replace("/MyPortfolio/", "/MyPortfolio/RO/");
                }
            } else {
                // В случае, если выбран неизвестный язык, выводим сообщение об ошибке
                console.log("Language not recognized:", selectedLang);
            }
            
            // Выводим в консоль новый URL
            console.log("New URL:", newUrl);
            
            // Если новый URL отличается от текущего, перенаправляем на новый URL
            if (newUrl !== currentUrl) {
                window.location.href = newUrl;
            }
        });
    } else {
        console.log("Element with id 'langSelect' not found.");
    }
});
















































