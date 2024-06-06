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
            bookTitle1: "A Day in Nova Polis",
            textShort: "A captivating collection of standalone short stories from the mysterious metropolis of Nova Polis",
            booktext1: "A Day in Nova Polis, follows Alex, a courier navigating a futuristic city of contrasts. From the luxury of Zenith Heights to the vibrancy of the Neon District, the industry of the Mechanica District, and the peace of Elysium Gardens, ending in the challenging Dystopia Slums. Through his deliveries, Alex discovers the diverse and human facets of Nova Polis.",
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
            bookTitle1: "Ein Tag in Nova Polis",
            textShort: "Eine faszinierende Sammlung eigenständiger Kurzgeschichten aus der mysteriösen Metropole Nova Polis",
            booktext1: "Ein Tag in Nova Polis folgt Alex, einem Kurier, der sich durch eine futuristische Stadt der Gegensätze bewegt. Von dem Luxus der Zenith Heights über die Lebendigkeit des Neon Districts, die Industrie des Mechanica Districts und die Ruhe der Elysium Gardens bis hin zu den herausfordernden Dystopia Slums. Durch seine Lieferungen entdeckt Alex die vielfältigen und menschlichen Facetten von Nova Polis."
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
    
        document.querySelectorAll('.accordion-header').forEach(button => {
            button.addEventListener('click', function() {
                const projectId = this.getAttribute('data-project');
                const project = projects[projectId];
                const content = this.nextElementSibling;
    
                if (project) {
                    if (content.style.display === "block") {
                        content.style.display = "none";
                        this.classList.remove('active');
                    } else {
                        document.querySelectorAll('.accordion-content').forEach(content => content.style.display = 'none');
                        document.querySelectorAll('.accordion-header').forEach(header => header.classList.remove('active'));
                        
                        content.style.display = "block";
                        this.classList.add('active');
                    }
                } else {
                    console.warn(`Project with ID '${projectId}' not found.`);
                }
            });
        });
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

