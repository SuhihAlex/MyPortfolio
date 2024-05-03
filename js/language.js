// Определяем функцию для загрузки языковых данных
function loadLanguageData() {
    // Здесь ваш JSON-объект с переводами
    return {
        "en": {
            "home": "Home",
            "about": "About me",
            "projects": "Projects",
            "news": "News",
            "blog": "Blog",
            "contact": "Contact",
            "aboutTitle": "About me",
            // Другие переводы для английского
        },
        "ru": {
            "home": "Главная",
            "about": "Обо мне",
            "projects": "Проекты",
            "news": "Новости",
            "blog": "Блог",
            "contact": "Контакты",
            "aboutTitle": "Обо мне",
            // Другие переводы для русского
        },
        "ro": {
            "home": "Acasă",
            "about": "Despre mine",
            "projects": "Proiecte",
            "news": "Noutăți",
            "blog": "Blog",
            "contact": "Contact",
            "aboutTitle": "Despre mine",
            // Другие переводы для румынского
        }
    };
}

// Функция для установки языка на странице
function setLanguageOnPage(langData, lang) {
    // Получаем все элементы с атрибутом data-lang-key
    let elements = document.querySelectorAll('[data-lang-key]');
    
    // Проходим по каждому элементу и устанавливаем текст в соответствии с выбранным языком
    elements.forEach(function(element) {
        let key = element.getAttribute('data-lang-key');
        element.textContent = langData[lang][key];
    });
}

// Функция для изменения языка
function changeLanguage() {
    let select = document.getElementById("langSelect");
    let lang = select.options[select.selectedIndex].value;

    // Сохраняем выбранный язык в localStorage
    localStorage.setItem("selectedLanguage", lang);

    // Получаем языковые данные
    let langData = loadLanguageData();

    // Устанавливаем язык на странице
    setLanguageOnPage(langData, lang);
}

// Вызываем функцию установки выбранного языка после загрузки страницы
document.addEventListener("DOMContentLoaded", function() {
    let lang = localStorage.getItem("selectedLanguage") || "en";
    let langData = loadLanguageData();
    setLanguageOnPage(langData, lang);
});

// Связываем событие изменения языка с функцией changeLanguage
document.getElementById("langSelect").addEventListener("change", changeLanguage);

