<!-- index.html -->
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>
    <style>
        .lang { display: none; }
        .lang.fr { display: block; }
    </style>
</head>
<body>
    <button onclick="switchLanguage('fr')">Français</button>
    <button onclick="switchLanguage('en')">English</button>

    <div id="content">
        <div class="lang fr">
            <!-- French Content -->
            <h1>Bienvenue sur mon Portfolio</h1>
            <p>Je suis un développeur full stack et web designer avec de l'expérience dans le développement de sites web visuellement attrayants.</p>
            <h2>Projets</h2>
            <ul>
                <li>Projet 1: Description du projet 1 en français.</li>
                <li>Projet 2: Description du projet 2 en français.</li>
            </ul>
            <h2>Contact</h2>
            <p>Vous pouvez me contacter à <a href="mailto:example@example.com">example@example.com</a>.</p>
        </div>
        <div class="lang en">
            <!-- English Content -->
            <h1>Welcome to My Portfolio</h1>
            <p>I am a full stack developer and web designer with experience in developing visually striking websites.</p>
            <h2>Projects</h2>
            <ul>
                <li>Project 1: Description of project 1 in English.</li>
                <li>Project 2: Description of project 2 in English.</li>
            </ul>
            <h2>Contact</h2>
            <p>You can contact me at <a href="mailto:example@example.com">example@example.com</a>.</p>
        </div>
    </div>

    <script>
        function switchLanguage(lang) {
            document.querySelectorAll('.lang').forEach(el => el.style.display = 'none');
            document.querySelector('.lang.' + lang).style.display = 'block';
        }

        // Default to French
        switchLanguage('fr');
    </script>
</body>
</html>
