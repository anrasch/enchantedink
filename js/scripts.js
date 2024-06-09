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
            bookTitle2: "Nadia Volkov and the Energy of the Future",
            booktext2: "In Nova Polis, engineer Nadia Volkov develops a revolutionary energy core designed to improve the slums and make the industry more efficient. With the support of union leader Max and tech CEO Aria, she fights against corrupt leaders. Despite resistance, they manage to take control of the city's central energy hub and create sustainable change. Will their vision of a fairer and more sustainable future become a reality?",
            bookTitle3: "The Night of Ascension",
            bookText3:"Theo Marlowe, a street musician, is discovered by producer Jasper Blake and gets the chance to record demos. After a successful show at the Hyperion Club, supported by engineer Nadia with holographic effects, Theo becomes famous. With his success, he establishes a foundation for young musicians from the Dystopia Slums to help them achieve their dreams. But how will Theo handle his newfound fame, and what challenges await him in Nova Polis?",
            button1: "Buy Now in EN",
            button2: "Buy Now in DE",
            button3: "Coming soon",
            button4: "Buy Now in DE",
            button5: "Buy Now in EN",
            button6: "Buy Now in DE",
            follow: "Follow us",
            workinprogess: "Work in Progress",
            projects: {
                1: {
                    title: "Shadows of Revolution",
                    image: "images/project1.jpg",
                    description: "Draft - Work in Progress",
                    details: "Shadows of Revolution is a gripping dystopian novel that immerses the reader in the dark world of the city of Ecliptas. In a society controlled by megacorporations, Maya and Gabe fight against oppression and for freedom. The protagonist, Maya, shaped by her unique heritage and deep determination, is at the center of this fight. Together with her group of rebels, she tries to bring the truth about the rulers' machinations to light and mobilize the citizens of Ecliptas. The plot is filled with tension, secrets, and moral dilemmas that captivate the reader. The strength of the book lies not only in its suspenseful storyline but also in its profound characters and the complex relationships that connect them. Anthony succeeds in captivating readers with vivid descriptions and a detailed world where every decision has far-reaching consequences. Shadows of Revolution is more than just a story about rebellion; it is a call for reflection on power, freedom, and the role of the individual in society. A must-read for fans of dystopian literature and thrilling adventure stories."   
                },
                2: {
                    title: "Nova Polis: Stories of the Future",
                    image: "images/project2.jpg",
                    description: "Futuristic stories of perseverance, hope, and urban contrasts.",
                    details: "Welcome to Nova Polis, a futuristic city where technology meets human destinies. This short story series explores wealth and poverty, progress and decay, hope and despair. Journey through the vibrant metropolis from luxurious Zenith Heights to dangerous Dystopia Slums. Discover the contrasts: Zenith Heights' luxury, Neon District's nightlife, Mechanica District's industry, Elysium Gardens' sustainability, and the struggles in Dystopia Slums. Each story reveals the lives of Nova Polis residents, showcasing the city's diversity and complexity. Immerse yourself in Nova Polis and uncover how its people live, love, and fight in a changing world. What twists await them? Discover in our stories!"
                },
                3: {
                    title: "My Creative Journey in Web Design",
                    image: "images/project3.jpg",
                    description: "In this section, I share my journey and passion for web design.",
                    details: "Welcome to my web design portfolio! Here, I showcase a selection of my favorite projects that I have created with passion and creativity. For me, web design is more than just a profession - it is my hobby and my greatest passion. I love creating appealing and functional websites that not only look good but are also easy to use. My process is simple and straightforward. Everything starts with an idea and a clear vision of what the website should achieve. Then comes the designing and experimenting – I create drafts and prototypes, discussing them with friends and acquaintances to get feedback. Once the design is finalized, I move on to development and build the website step by step. If you're interested in collaborating on a project or just want to learn more, feel free to contact me! I'm always excited about new ideas and challenges."
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
            bookTitle2: "Nadia Volkov und die Energie der Zukunft",
            booktext2: "In Nova Polis entwickelt Ingenieurin Nadia Volkov einen revolutionären Energiekern, der die Slums verbessern und die Industrie effizienter machen soll. Mit Unterstützung von Gewerkschaftsführer Max und Tech-CEO Aria kämpft sie gegen korrupte Machthaber. Trotz Widerständen gelingt es ihnen, die zentrale Energiezentrale zu übernehmen und die Stadt nachhaltig zu verändern. Wird ihre Vision von einer gerechteren und nachhaltigeren Zukunft Wirklichkeit werden?",
            bookTitle3: "Die Nacht des Aufstiegs",
            bookText3:"Theo Marlowe, ein Straßenmusiker, wird von Produzent Jasper Blake entdeckt und erhält die Chance, Demos aufzunehmen. Nach einer erfolgreichen Show im Hyperion Club, unterstützt von der Ingenieurin Nadia mit holografischen Effekten, wird Theo berühmt. Mit seinem Erfolg gründet er eine Stiftung für junge Musiker aus den Dystopia Slums, um ihnen zu helfen, ihre Träume zu verwirklichen. Doch wie wird Theo mit seinem neuen Ruhm umgehen, und welche Herausforderungen erwarten ihn noch in Nova Polis?",
            button1: "Jetzt kaufen in EN",
            button2: "Jetzt kaufen in DE",
            button3: "Demnächst verfügbar",
            button4: "Jetzt kaufen in DE",
            button5: "Jetzt kaufen in EN",
            button6: "Jetzt kaufen in DE",
            follow: "Folge uns",
            workinprogess: "in Arbeit",
            projects: {
                1: {
                    title: "Shadows of Revolution",
                    image: "images/project1.jpg",
                    description: "Entwurf - In Arbeit",
                    details: "Shadows of Revolution ist ein fesselnder dystopischer Roman, der den Leser in die dunkle Welt der Stadt Ecliptas eintauchen lässt. In einer Gesellschaft, die von Megakonzernen kontrolliert wird, kämpfen Maya und Gabe gegen Unterdrückung und für Freiheit. Die Protagonistin Maya, geprägt durch ihr einzigartiges Erbe und ihren tiefen Entschluss, steht im Zentrum dieses Kampfes. Zusammen mit ihrer Gruppe von Rebellen versucht sie, die Wahrheit über die Machenschaften der Herrscher ans Licht zu bringen und die Bürger von Ecliptas zu mobilisieren. Die Handlung ist voller Spannung, Geheimnisse und moralischer Dilemmata, die den Leser fesseln. Die Stärke des Buches liegt nicht nur in seiner spannenden Handlung, sondern auch in seinen tiefgründigen Charakteren und den komplexen Beziehungen, die sie verbinden. Anthony gelingt es, die Leser mit lebendigen Beschreibungen und einer detaillierten Welt zu fesseln, in der jede Entscheidung weitreichende Konsequenzen hat. Schatten der Revolution ist mehr als nur eine Geschichte über Aufstand; es ist ein Aufruf zur Reflexion über Macht, Freiheit und die Rolle des Individuums in der Gesellschaft. Ein Muss für Fans von dystopischer Literatur und spannenden Abenteuergeschichten."
                },
                2: {
                    title: "Nova Polis: Geschichten der Zukunft",
                    image: "images/project2.jpg",
                    description: "Futuristische Geschichten über Durchhaltevermögen, Hoffnung und urbane Kontraste.",
                    details: "Willkommen in Nova Polis, einer futuristischen Stadt, in der Technologie auf menschliche Schicksale trifft. Diese Kurzgeschichtenreihe erkundet Reichtum und Armut, Fortschritt und Verfall, Hoffnung und Verzweiflung. Reisen Sie durch die lebendige Metropole von den luxuriösen Zenith Heights bis zu den gefährlichen Dystopia Slums. Entdecken Sie die Kontraste: den Luxus von Zenith Heights, das Nachtleben im Neon District, die Industrie im Mechanica District, die Nachhaltigkeit der Elysium Gardens und die Kämpfe in den Dystopia Slums. Jede Geschichte enthüllt das Leben der Bewohner von Nova Polis und zeigt die Vielfalt und Komplexität der Stadt. Tauchen Sie ein in Nova Polis und erfahren Sie, wie die Menschen in einer sich wandelnden Welt leben, lieben und kämpfen. Welche Wendungen erwarten sie? Entdecken Sie es in unseren Geschichten!"
                },
                3: {
                    title: "Meine kreative Reise im Webdesign",
                    image: "images/project3.jpg",
                    description: "In diesem Abschnitt teile ich meine Reise und Leidenschaft für Webdesign.",
                    details: "Willkommen in meinem Webdesign-Portfolio! Hier zeige ich eine Auswahl meiner liebsten Projekte, die ich mit viel Leidenschaft und Kreativität umgesetzt habe. Für mich ist Webdesign mehr als nur ein Beruf – es ist mein Hobby und meine große Leidenschaft. Ich liebe es, ansprechende und funktionale Websites zu gestalten, die nicht nur gut aussehen, sondern auch einfach zu bedienen sind. Mein Prozess ist einfach und unkompliziert. Alles beginnt mit einer Idee und einer klaren Vorstellung davon, was die Website erreichen soll. Dann geht es ans Designen und Ausprobieren – ich erstelle Entwürfe und Prototypen, die ich mit Freunden und Bekannten bespreche, um Feedback zu bekommen. Wenn das Design steht, mache ich mich an die Umsetzung und entwickle die Website Schritt für Schritt. Wenn du Lust hast, gemeinsam an einem Projekt zu arbeiten oder einfach nur mehr erfahren möchtest, melde dich gerne bei mir! Ich freue mich immer über neue Ideen und Herausforderungen."
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
            'textShort', 'booktext1', 'button1', 'follow', 'button2', 'bookTitle2',
            'booktext2', 'button3', 'button4', 'bookTitle3', 'bookText3', 'button5', 'button6',
            'workinprogess'
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
            url = 'https://books2read.com/u/bodX11';
            break;
        case 'book2.pdf':
            url = 'https://books2read.com/u/mlylwZ';
            break;
        case 'book3.pdf':
            url = '';
            break;
        case 'book4.pdf':
            url = 'buch 2 deutsch';
            break;
        case 'book3.pdf':
            url = 'buch 3 enlisch';
            break;
        case 'book3.pdf':
            url = 'buch 4 deutsch';
            break
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

