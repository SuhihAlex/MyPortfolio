/* Progress Bar */

function progressBar() {
  let scroll = document.body.scrollTop || document.documentElement.scrollTop;

  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  let scrolled = (scroll / height) * 100;

  document.getElementById("progressBar").style.width = scrolled + "%";
}
window.addEventListener("scroll", progressBar);

window.addEventListener("scroll", function() {
    const aboutBlock = document.querySelector('.about__block');
    const aboutPosition = aboutBlock.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (aboutPosition < windowHeight / 1.5) {
        aboutBlock.classList.add('show');
    } else {
        aboutBlock.classList.remove('show');
    }
});

window.addEventListener("scroll", function() {
    const projectsBlock = document.querySelector('.projects__block');
    const projectsPosition = projectsBlock.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (projectsPosition < windowHeight / 1.5 + scrollPosition) {
        projectsBlock.classList.add('show');
    } else {
        projectsBlock.classList.remove('show');
    }
});

window.addEventListener("scroll", function() {
    const aboutPageSkills = document.querySelector('.about__page-block--skills');
    const aboutPageSkillsPosition = aboutPageSkills.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (aboutPageSkillsPosition < windowHeight / 1.5 + scrollPosition) {
        aboutPageSkills.classList.add('show');
    } else {
        aboutPageSkills.classList.remove('show');
    }
});

window.addEventListener("scroll", function() {
    const aboutPageSocials = document.querySelector('.about__page-block--socials');
    const aboutPageSocialsPosition = aboutPageSocials.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (aboutPageSocialsPosition < windowHeight / 1.5 + scrollPosition) {
        aboutPageSocials.classList.add('show');
    } else {
        aboutPageSocials.classList.remove('show');
    }
});

window.addEventListener("scroll", function() {
    const portfolioBlock = document.querySelector('.projects__card-portfolio');
    const trinityBlock = document.querySelector('.projects__card-trinity');
    const rivoBlock = document.querySelector('.projects__card-rivo');
    const portfolioPosition = portfolioBlock.getBoundingClientRect().top;
    const trinityPosition = trinityBlock.getBoundingClientRect().top;
    const rivoPosition = rivoBlock.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (portfolioPosition < windowHeight / 1.5) {
        portfolioBlock.classList.add('show');
    } else {
        portfolioBlock.classList.remove('show');
    }

    if (trinityPosition < windowHeight / 1.5) {
        trinityBlock.classList.add('show');
    } else {
        trinityBlock.classList.remove('show');
    }

    if (rivoPosition < windowHeight / 1.5) {
        rivoBlock.classList.add('show');
    } else {
        rivoBlock.classList.remove('show');
    }
});


// Плавное появление блоков

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
function burgerMenu() {
  const menuToggle = document.querySelector('.burger');
  const menu = document.querySelector('.menu');

  menu.classList.toggle('active');

  if (menu.classList.contains('active')) {
    menuToggle.classList.add('active');
    document.body.style.overflow = 'hidden'; // Запрет прокрутки страницы при открытом меню
  } else {
    menuToggle.classList.remove('active');
    document.body.style.overflow = ''; // Разрешение прокрутки страницы при закрытом меню
  }
}

document.querySelector('.burger').addEventListener('click', function() {
  this.classList.toggle('open');
});

/* SmoothScroll */

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


    document.addEventListener("DOMContentLoaded", function() {
        var titleBlock = document.querySelector(".about__page-block--title");
        var titlePageBlock = document.querySelector(".about__page-title");
        titleBlock.classList.add("active");
        titlePageBlock.classList.add("active");
    });

     document.addEventListener("DOMContentLoaded", function() {
        var titleBlock = document.querySelector(".projects__page-block--title");
        var titlePageBlock = document.querySelector(".projects__page-title");
        titleBlock.classList.add("active");
        titlePageBlock.classList.add("active");
    });

 document.addEventListener('DOMContentLoaded', function() {
    var cards = document.querySelectorAll('.projects__card-animation');

    function animateOnScroll() {
        cards.forEach(function(card) {
            if (isElementInViewport(card) && !card.classList.contains('animate')) {
                card.classList.add('animate');
            }
        });
    }

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
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



window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});


sessionStorage.setItem('prevPage', document.referrer);

function goBack() {
            // Получаем предыдущий URL из sessionStorage
            var prevPage = sessionStorage.getItem('prevPage');
            // Переходим на предыдущую страницу
            window.location.href = prevPage;
        }