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



document.addEventListener('DOMContentLoaded', function() {
    const shootingStars = document.querySelectorAll('.shooting-star');
  
    shootingStars.forEach(star => {
      // Set random animation duration and delay
      const randomDuration = Math.random() * 5 + 5; // Random duration between 5s and 10s
      const randomDelay = Math.random() * 10; // Random delay between 0s and 10s
      star.style.setProperty('--duration', `${randomDuration}s`);
      star.style.setProperty('--delay', `${randomDelay}s`);
  
      // Set random initial positions off-screen
      const startX = Math.random() * -100; // Random start X between -100% and 0%
      const startY = Math.random() * -100; // Random start Y between -100% and 0%
      star.style.transform = `translate(${startX}vw, ${startY}vh) rotate(45deg)`;
    });
  });
