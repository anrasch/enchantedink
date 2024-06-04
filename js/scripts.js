const translations = {
    en: {
        title: "Welcome to EnchantedInk",
        subtitle: "Author of Fantasy Novels and Short Stories",
        navAbout: "About",
        navBooks: "Books",
        navProjects: "Projects",
        navBlog: "Blog",
        navContact: "Contact",
        aboutText: "Hi, I'm Anthony and I'm a writer. Currently, I'm working on a series of short stories as well as writing a book. Besides writing, I have developed a passion for web design, which led to the creation of this website. On my website, you'll find my latest projects and publications. I'm excited to share my stories and creative projects with you. You can reach out to me through social media; the links are at the end of the website. Thank you for visiting!",
        booksText: "Detailed descriptions of your books or short stories.",
        projectsText: "Detailed descriptions of your projects.",
        blogText: "Regular posts about your writing processes, inspirations, and news.",
        contactText: "Contact information and a contact form.",
        aboutMe: "About Me",
    },
    de: {
        title: "Willkommen bei EnchantedInk",
        subtitle: "Autor von Fantasy-Romanen und Kurzgeschichten",
        navAbout: "Über mich",
        navBooks: "Bücher",
        navProjects: "Projekte",
        navBlog: "Blog",
        navContact: "Kontakt",
        aboutText: "Hallo, ich bin Anthony und ich bin Schriftsteller. Derzeit arbeite ich an einer Reihe von Kurzgeschichten sowie an einem Buch. Neben dem Schreiben habe ich eine Leidenschaft für Webdesign entwickelt, was zur Erstellung dieser Website geführt hat. Auf meiner Website finden Sie meine neuesten Projekte und Veröffentlichungen. Ich freue mich darauf, meine Geschichten und kreativen Projekte mit Ihnen zu teilen. Sie können mich über soziale Medien erreichen; die Links finden Sie am Ende der Website. Vielen Dank für Ihren Besuch!",
        booksText: "Detaillierte Beschreibungen Ihrer Bücher oder Kurzgeschichten.",
        projectsText: "Detaillierte Beschreibungen Ihrer Projekte.",
        blogText: "Regelmäßige Beiträge über Ihre Schreibprozesse, Inspirationen und Neuigkeiten.",
        contactText: "Kontaktinformationen und ein Kontaktformular.",
        aboutMe: "Über mich",
    }
};

let currentLanguage = 'en';

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'de' : 'en';
    setLanguage(currentLanguage);
}

function setLanguage(language) {
    document.getElementById('title').innerText = translations[language].title;
    document.getElementById('subtitle').innerText = translations[language].subtitle;
    document.getElementById('nav-about').innerText = translations[language].navAbout;
    document.getElementById('nav-books').innerText = translations[language].navBooks;
    document.getElementById('nav-projects').innerText = translations[language].navProjects;
    document.getElementById('nav-blog').innerText = translations[language].navBlog;
    document.getElementById('nav-contact').innerText = translations[language].navContact;
    document.getElementById('about-text').innerText = translations[language].aboutText;
    document.getElementById('books-text').innerText = translations[language].booksText;
    document.getElementById('projects-text').innerText = translations[language].projectsText;
    document.getElementById('blog-text').innerText = translations[language].blogText;
    document.getElementById('contact-text').innerText = translations[language].contactText;
    document.getElementById('aboutMe').innerText = translations[language].aboutMe;

    // Update button class
    document.getElementById('language-toggle').classList.toggle('de', language === 'de');
}

let angle = 0;

function rotateCarousel(direction) {
    const items = document.querySelectorAll('.carousel-item');
    angle += direction * 120; // Adjust this value based on the number of items
    items.forEach((item, index) => {
        const itemAngle = angle + index * 120; // Adjust this value based on the number of items
        item.style.transform = `rotateY(${itemAngle}deg) translateZ(400px)`;
    });
}

function flipCard(element) {
    element.classList.toggle('flipped');
}

function downloadBook(filename, event) {
    event.stopPropagation(); // Prevent flip event from triggering
    const link = document.createElement('a');
    link.href = `downloads/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}



