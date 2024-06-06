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
            aboutText: "Hi, I'm Anthony and I'm a writer...",
            booksText: "Detailed descriptions of your books or short stories.",
            projectsText: "Detailed descriptions of your projects.",
            blogText: "Regular posts about your writing processes, inspirations, and news.",
            contactText: "Contact information and a contact form.",
            aboutMe: "About Me",
            shortStories: "Short Stories",
            bookTitle1: "A Day in Nova Polis",
            textShort: "A captivating collection of standalone short stories...",
            booktext1: "A Day in Nova Polis, follows Alex...",
            projects: {
                1: {
                    title: "Project Title 1",
                    image: "images/project1.jpg",
                    description: "A brief description of Project 1.",
                    details: "Detailed information about Project 1. This section can include the project's objectives, challenges, solutions, and results."
                },
                2: {
                    title: "Project Title 2",
                    image: "images/project2.jpg",
                    description: "A brief description of Project 2.",
                    details: "Detailed information about Project 2. This section can include the project's objectives, challenges, solutions, and results."
                }
            }
        },
        de: {
            title: "Willkommen bei EnchantedInk",
            subtitle: "Autor von Fantasy-Romanen und Kurzgeschichten",
            navAbout: "Über mich",
            navBooks: "Bücher",
            navProjects: "Projekte",
            navBlog: "Blog",
            navContact: "Kontakt",
            aboutText: "Hallo, ich bin Anthony und ich bin Schriftsteller...",
            booksText: "Detaillierte Beschreibungen Ihrer Bücher oder Kurzgeschichten.",
            projectsText: "Detaillierte Beschreibungen Ihrer Projekte.",
            blogText: "Regelmäßige Beiträge über Ihre Schreibprozesse, Inspirationen und Neuigkeiten.",
            contactText: "Kontaktinformationen und ein Kontaktformular.",
            aboutMe: "Über mich",
            shortStories: "Kurzgeschichten",
            bookTitle1: "Ein Tag in Nova Polis",
            textShort: "Eine faszinierende Sammlung eigenständiger Kurzgeschichten...",
            booktext1: "Ein Tag in Nova Polis folgt Alex...",
            projects: {
                1: {
                    title: "Projekt Titel 1",
                    image: "images/project1.jpg",
                    description: "Eine kurze Beschreibung des Projekts 1.",
                    details: "Detaillierte Informationen über das Projekt 1. Dieser Abschnitt kann die Ziele, Herausforderungen, Lösungen und Ergebnisse des Projekts enthalten."
                },
                2: {
                    title: "Projekt Titel 2",
                    image: "images/project2.jpg",
                    description: "Eine kurze Beschreibung des Projekts 2.",
                    details: "Detaillierte Informationen über das Projekt 2. Dieser Abschnitt kann die Ziele, Herausforderungen, Lösungen und Ergebnisse des Projekts enthalten."
                }
            }
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
            'textShort', 'booktext1',
        ];

        elements.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.innerText = translations[language][id.replace('-', '')];
            } else {
                console.warn(`Element with ID '${id}' not found.`);
            }
        });

        // Update the project cards
        document.querySelectorAll('.project-card').forEach(card => {
            const projectId = card.getAttribute('data-project');
            const project = translations[language].projects[projectId];
            if (project) {
                card.querySelector('.project-title').innerText = project.title;
                card.querySelector('.project-description').innerText = project.description;
                card.querySelector('.project-image').src = project.image;
            } else {
                console.warn(`Project with ID '${projectId}' not found in translations.`);
            }
        });

        // Update the toggle indicator and data-lang attribute
        const languageToggle = document.getElementById('language-toggle');
        languageToggle.classList.toggle('de', language === 'de');
        languageToggle.setAttribute('data-lang', language === 'de' ? 'EN' : 'DE');
    }

    // Initial language setup
    setLanguage(currentLanguage);

    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');
    const modalDetails = document.getElementById('modal-details');
    const closeBtn = document.querySelector('.close-btn');

    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            const project = translations[currentLanguage].projects[projectId];

            if (project) {
                modalTitle.innerText = project.title;
                modalImage.src = project.image;
                modalDescription.innerText = project.description;
                modalDetails.innerText = project.details;

                modal.style.display = 'flex';
            } else {
                console.warn(`Project with ID '${projectId}' not found in translations.`);
            }
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

    // Language toggle functionality
    const languageToggle = document.getElementById('language-toggle');
    languageToggle.addEventListener('click', function() {
        toggleLanguage();
    });

    // Initial language setup
    setLanguage(currentLanguage);
});

function flipCard(element) {
    element.classList.toggle('flipped');
}

function downloadBook(filename, event) {
    event.stopPropagation(); // Prevent flip event from triggering
    
    let url;
    
    switch (filename) {
        case 'book1.pdf':
            url = 'https://example.com/download-page1';
            break;
        case 'book2.pdf':
            url = 'https://example.com/download-page2';
            break;
        // Füge hier weitere Fälle hinzu, falls nötig
        default:
            url = 'https://example.com/default-download-page'; // Eine Standardseite für andere Dateien
    }
    
    window.location.href = url;
}
