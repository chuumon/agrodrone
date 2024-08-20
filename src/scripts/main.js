import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import IMask from 'imask';

document.addEventListener("DOMContentLoaded", () => {
    AOS.init();
    initPhoneMask()
    onFormSubmit('.consultation__form');

    initTippy();

    initBurger();

    initNav();
});

function initPhoneMask() {
    const phoneInput = document.getElementById('phone');

    const mask = IMask(phoneInput, {
        mask: '+{38\\0} 00 000 00 00',
        lazy: false,
        placeholderChar: 'X',
    });

    phoneInput.setCustomValidity('Введіть номер телефону');

    mask.on('accept', () => {
        phoneInput.setCustomValidity(mask.masked.isComplete ? '' : 'Введіть номер телефону')
    });

}

function onFormSubmit(selector) {
    const form = document.querySelector(selector);
    const sendButton = document.querySelector('#send-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);

        sendButton.setAttribute('disabled', true);
        sendButton.classList.add('loading');

        fetch('./process-form.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(isSuccess => {
            showFormSendingStatus(isSuccess);
        })
        .catch(() => {
            showFormSendingStatus(false);
        });
    })
}

function showFormSendingStatus(isSuccess) {
    const popup = document.querySelector('.form-sent-popup');
    const header = document.querySelector('.form-sent-popup__title');
    const message = document.querySelector('.form-sent-popup__message');
    const icon = document.querySelector('.form-sent-popup__icon');
    const sendButton = document.querySelector('#send-form');

    if(isSuccess) {
        header.innerText = 'Вашу заявку прийнято!'
        message.innerText = 'Наш менеджер зв\'яжеться з Вами найближчим часом';
        icon.classList.add('icon-info');
    } else {
        header.innerText = 'Упс, щось пішло не так'
        message.innerText = 'Спробуйте пізніше або затефонуйте за контакним номером';
        icon.classList.add('icon-cancel-circle');
    }

    document.body.classList.add('lock-scroll');
    popup.classList.add('form-sent-popup--visible');
    popup.showModal();
    sendButton.removeAttribute('disabled');
    sendButton.classList.remove('loading');

    popup.addEventListener('click', (event) => {
        const rect = popup.getBoundingClientRect();
        const isInDialog = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height &&
            rect.left <= event.clientX && event.clientX <= rect.left + rect.width);

        if (!isInDialog || event.target.classList.contains('form-sent-popup__close')) {
            popup.classList.add('close');

            setTimeout(() => {
                popup.close();
                popup.classList.remove('close');
                popup.classList.remove('form-sent-popup--visible');
                document.body.classList.remove('lock-scroll');
            }, 500);
        }
    })
}

function initTippy() {
    const template = document.getElementById('contact-popup');

    tippy('#contact-popup-trigger', {
        content: template,
        interactive: true,
        onShown: () => {
            listenAnchorClick(document.querySelector('.contact-popup__button'));
        },
    });
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
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        listenAnchorClick(anchor);
    });
}

function listenAnchorClick(anchor) {
    const headerOffset = 96;

    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const section = document.querySelector(this.getAttribute('href'));
        const sectionPosition = section.getBoundingClientRect().top;
        const sectionOffset = parseInt(section.getAttribute('data-scroll-offset') ?? 0);

        window.scrollTo({
            top: sectionPosition + window.scrollY - headerOffset - sectionOffset,
            behavior: "smooth"
        });
    });
}

