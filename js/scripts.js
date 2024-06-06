document.addEventListener('DOMContentLoaded', function() {
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
            shortStories: "Short Stories",
            bookTitle1: "A Day in Nova Polis"
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
            shortStories: "Kurzgeschichten",
            bookTitle1: "Ein Tag in Nova Polis"
        }
    };

    let currentLanguage = 'en'; // Set the initial language to English

    function toggleLanguage() {
        currentLanguage = currentLanguage === 'en' ? 'de' : 'en';
        setLanguage(currentLanguage);
    }

    function setLanguage(language) {
        const elements = [
            'title', 'subtitle', 'navAbout', 'navBooks',
            'navProjects', 'navBlog', 'navContact', 'aboutText', 'bookTitle1',
            'books-text', 'projects-text', 'blog-text', 'contact-text', 'aboutMe', 'shortStories',
        ];

        elements.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.innerText = translations[language][id.replace('-', '')];
            } else {
                console.warn(`Element with ID '${id}' not found.`);
            }
        });

        // Update the toggle indicator and data-lang attribute
        const languageToggle = document.getElementById('language-toggle');
        languageToggle.classList.toggle('de', language === 'de');
        languageToggle.setAttribute('data-lang', language === 'de' ? 'EN' : 'DE');
    }

    // Initial language setup
    setLanguage(currentLanguage);

    const languageToggle = document.getElementById('language-toggle');
    languageToggle.addEventListener('click', function() {
        toggleLanguage();
    });

    // Projekt-Daten
    const projects = {
        1: {
            title: "Project Title 1",
            image: "images/project1.jpg",
            description: "A brief description of Project 1.",
            details: "Detailed information about Project 1. This section can include the project's objectives, challenges, solutions, and results."
        },
        // Weitere Projekte hier hinzufügen
    };

    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');
    const modalDetails = document.getElementById('modal-details');
    const closeBtn = document.querySelector('.close-btn');

    document.querySelectorAll('.project-details-btn').forEach(button => {
        button.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            const project = projects[projectId];

            modalTitle.innerText = project.title;
            modalImage.src = project.image;
            modalDescription.innerText = project.description;
            modalDetails.innerText = project.details;

            modal.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

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