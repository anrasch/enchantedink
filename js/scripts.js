const translations = {
    en: {
        title: "Welcome to EnchantedInk",
        subtitle: "Author of Fantasy Novels and Short Stories",
        navAbout: "About",
        navBooks: "Books",
        navProjects: "Projects",
        navBlog: "Blog",
        navContact: "Contact",
        aboutText: "Your biography and background information.",
        booksText: "Detailed descriptions of your books or short stories.",
        projectsText: "Detailed descriptions of your projects.",
        blogText: "Regular posts about your writing processes, inspirations, and news.",
        contactText: "Contact information and a contact form."
    },
    de: {
        title: "Willkommen bei EnchantedInk",
        subtitle: "Autor von Fantasy-Romanen und Kurzgeschichten",
        navAbout: "Über mich",
        navBooks: "Bücher",
        navProjects: "Projekte",
        navBlog: "Blog",
        navContact: "Kontakt",
        aboutText: "Ihre Biografie und Hintergrundinformationen.",
        booksText: "Detaillierte Beschreibungen Ihrer Bücher oder Kurzgeschichten.",
        projectsText: "Detaillierte Beschreibungen Ihrer Projekte.",
        blogText: "Regelmäßige Beiträge über Ihre Schreibprozesse, Inspirationen und Neuigkeiten.",
        contactText: "Kontaktinformationen und ein Kontaktformular."
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

    // Update button class
    document.getElementById('language-toggle').classList.toggle('de', language === 'de');
}
