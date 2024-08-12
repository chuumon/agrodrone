document.addEventListener("DOMContentLoaded", () => {
    AOS.init();
    initPhoneMask()
    onFormSubmit('.consultation__form');

    initContactPopup();

    subscribeOnScroll();

    initBurger();

    initNav();
});

function initPhoneMask() {
    const telInput = document.getElementById('tel');

    const mask = IMask(telInput, {
        mask: '+{38\\0} 00 000 00 00',
        lazy: false,
        placeholderChar: 'X',
    });

    telInput.setCustomValidity('Введіть номер телефону');

    mask.on('accept', () => {
        telInput.setCustomValidity(mask.masked.isComplete ? '' : 'Введіть номер телефону')
    });

}

function onFormSubmit(selector) {
    const form = document.querySelector(selector);

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(form);

        fetch('./process-form.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {

        })
        .catch(error => {

        });
    })
}

function initContactPopup() {
    tippy('#contact-popup-trigger', {
        content: document.getElementById('contact-popup'),
        trigger: 'click',
        interactive: true,
    });
}

function subscribeOnScroll() {
    document.addEventListener('scroll', (e) => {
        const header = document.querySelector('.header');

        if (window.scrollY > 10) {
            header.classList.add('header--contrast')
        } else {
            header.classList.remove('header--contrast')
        }
    })
}

function initBurger() {
    const menuBtn = document.querySelector('.burger');
    const menu = document.querySelector('.burger-menu');
    const closeTriggers = [
        ...Array.from(document.querySelectorAll('.burger-menu__link')),
        document.querySelector('.burger-menu__close')
    ];

    menuBtn.addEventListener('click', function() {
        menu.classList.add('burger-menu--active');
        document.body.classList.toggle('lock-scroll');
    })


    closeTriggers.forEach ((menuItem) => {
        menuItem.addEventListener('click',function(){
            menu.classList.toggle('burger-menu--active');
            document.body.classList.toggle('lock-scroll');
        })
    })
}

function initNav() {
    const headerOffset = 96;

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const section = document.querySelector(this.getAttribute('href'));
            const sectionPosition = section.getBoundingClientRect().top;
            const offsetPosition = sectionPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        });
    });
}

