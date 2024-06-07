document.addEventListener('DOMContentLoaded', function() {
    const translations = {
        en: {
            title: "Welcome to LunaScript",
            subtitle: "Author of Fantasy Novels and Short Stories",
            navAbout: "About",
            navBooks: "Books",
            navProjects: "Projects",
            navBlog: "Blog",
            navContact: "Contact",
            aboutText: "Hi, I'm Anthony and I'm a writer. Currently, I'm working on a series of short stories as well as writing a book. Besides writing, I have developed a passion for web design, which led to the creation of this website. On my website, you'll find my latest projects and publications. I'm excited to share my stories and creative projects with you. You can reach out to me through social media; the links are at the end of the website. Thank you for visiting!",
            projectsText: "Projects",
            blogText: "Regular posts about your writing processes, inspirations, and news.",
            contactText: "Contact",
            aboutMe: "About Me",
            shortStories: "Short Stories",
            bookTitle1: "A Day in Nova Polis",
            textShort: "Unique Tales from Nova Polis: Each short story a captivating adventure in the futuristic city.",
            booktext1: "A Day in Nova Polis, follows Alex, a courier navigating a futuristic city of contrasts. From the luxury of Zenith Heights to the vibrancy of the Neon District, the industry of the Mechanica District, and the peace of Elysium Gardens, ending in the challenging Dystopia Slums. Through his deliveries, Alex discovers the diverse and human facets of Nova Polis.",
            bookTitle3: "",
            booktext3: "",
            button1: "Download for free",
            follow: "Follow us",
            projects: {
                1: {
                    title: "Shadows of Revolution",
                    image: "images/project1.jpg",
                    description: "Draft - Work in Progress",
                    details: "Shadows of Revolution is a gripping dystopian novel that immerses the reader in the dark world of the city of Ecliptas. In a society controlled by megacorporations, Maya and Gabe fight against oppression and for freedom. The protagonist, Maya, shaped by her unique heritage and deep determination, is at the center of this fight. Together with her group of rebels, she tries to bring the truth about the rulers' machinations to light and mobilize the citizens of Ecliptas. The plot is filled with tension, secrets, and moral dilemmas that captivate the reader. The strength of the book lies not only in its suspenseful storyline but also in its profound characters and the complex relationships that connect them. Anthony succeeds in captivating readers with vivid descriptions and a detailed world where every decision has far-reaching consequences. Shadows of Revolution is more than just a story about rebellion; it is a call for reflection on power, freedom, and the role of the individual in society. A must-read for fans of dystopian literature and thrilling adventure stories."   
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
            title: "Willkommen bei LunaScript",
            subtitle: "Autor von Fantasy-Romanen und Kurzgeschichten",
            navAbout: "Über mich",
            navBooks: "Bücher",
            navProjects: "Projekte",
            navBlog: "Blog",
            navContact: "Kontakt",
            aboutText: "Hallo, ich bin Anthony und ich bin Schriftsteller. Zurzeit arbeite ich an einer Reihe von Kurzgeschichten sowie an einem Buch. Neben dem Schreiben habe ich eine Leidenschaft für Webdesign entwickelt, was zur Erstellung dieser Website führte. Auf meiner Website finden Sie meine neuesten Projekte und Veröffentlichungen. Ich freue mich darauf, meine Geschichten und kreativen Projekte mit Ihnen zu teilen. Sie können mich über soziale Medien erreichen; die Links finden Sie am Ende der Website. Vielen Dank für Ihren Besuch!",
            projectsText: "Projekte",
            blogText: "Regelmäßige Beiträge über Ihre Schreibprozesse, Inspirationen und Neuigkeiten.",
            contactText: "Kontakt",
            aboutMe: "Über mich",
            shortStories: "Kurzgeschichten",
            bookTitle1: "Ein Tag in Nova Polis",
            textShort: "Einzigartige Geschichten aus Nova Polis: Jede Kurzgeschichte ein faszinierendes Abenteuer in der Zukunftsstadt.",
            booktext1: "Ein Tag in Nova Polis, folgt Alex, einem Kurier, der sich durch eine futuristische Stadt der Gegensätze bewegt. Von der Luxus von Zenith Heights über die Lebendigkeit des Neon Districts, die Industrie des Mechanica Districts und die Ruhe der Elysium Gardens bis hin zu den herausfordernden Dystopia Slums. Durch seine Lieferungen entdeckt Alex die vielfältigen und menschlichen Facetten von Nova Polis.",
            bookTitle3: "",
            booktext3: "",
            button1: "Kostenlos herunterladen",
            follow: "Folge uns",
            projects: {
                1: {
                    title: "Shadows of Revolution",
                    image: "images/project1.jpg",
                    description: "Entwurf - In Arbeit",
                    details: "Shadows of Revolution ist ein fesselnder dystopischer Roman, der den Leser in die dunkle Welt der Stadt Ecliptas eintauchen lässt. In einer Gesellschaft, die von Megakonzernen kontrolliert wird, kämpfen Maya und Gabe gegen Unterdrückung und für Freiheit. Die Protagonistin Maya, geprägt durch ihr einzigartiges Erbe und ihren tiefen Entschluss, steht im Zentrum dieses Kampfes. Zusammen mit ihrer Gruppe von Rebellen versucht sie, die Wahrheit über die Machenschaften der Herrscher ans Licht zu bringen und die Bürger von Ecliptas zu mobilisieren. Die Handlung ist voller Spannung, Geheimnisse und moralischer Dilemmata, die den Leser fesseln. Die Stärke des Buches liegt nicht nur in seiner spannenden Handlung, sondern auch in seinen tiefgründigen Charakteren und den komplexen Beziehungen, die sie verbinden. Anthony gelingt es, die Leser mit lebendigen Beschreibungen und einer detaillierten Welt zu fesseln, in der jede Entscheidung weitreichende Konsequenzen hat. Schatten der Revolution ist mehr als nur eine Geschichte über Aufstand; es ist ein Aufruf zur Reflexion über Macht, Freiheit und die Rolle des Individuums in der Gesellschaft. Ein Muss für Fans von dystopischer Literatur und spannenden Abenteuergeschichten."
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
            'projectsText', 'blog-text', 'contactText', 'aboutMe', 'shortStories',
            'textShort', 'booktext1', 'button1', 'follow',
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

function isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}

if (isIOS()) {
    document.querySelectorAll('.back').forEach(function(element) {
        element.style.overflowY = 'scroll';
    });
}

