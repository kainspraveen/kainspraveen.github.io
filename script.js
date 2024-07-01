// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const langButton = document.getElementById('langButton');
    const welcomeText = document.getElementById('welcomeText');

    langButton.addEventListener('click', function () {
        if (langButton.textContent === 'FR') {
            // langButton.textContent = 'EN';
            switchToFrench();
        } else {
            // langButton.textContent = 'FR';
            switchToEnglish();
        }
    });

    function switchToEnglish() {
        document.documentElement.lang = 'en';
        // welcomeText.textContent = 'Welcome to our website!';
        window.location.href = './index-en.html';
        console.log('Switched to English',window.location.href);
    }

    function switchToFrench() {
        document.documentElement.lang = 'fr';
        // welcomeText.textContent = 'Bienvenue sur notre site web!';
        window.location.href = './index.html';
        console.log('Switched to French',window.location.href);
    }
});

