let langSelector = document.getElementById('lang-selector');
let bioTitle = document.getElementsByClassName('title-bio')[0];
let bioText = document.getElementsByClassName('bio-text')[0];
let projectDescription = document.getElementsByClassName('description-project')

langSelector.onchange = function() {
    if (langSelector.value === 'it') {
        bioTitle.innerText = `Biografia`;
        bioText.innerHTML= `Vivo secondo natura e amo osservare; è così che dò vita ai miei progetti.
        Lasciandomi ispirare da ciò che mi circonda e lasciandomi guidare dal mio istinto.<br><br>Da giugno 2021
        a fine maggio 2022 ho svolto servizio civile, in ambito social, presso una delle associazioni culturali
        più rilevanti in territorio italiano in ambito di danza contemporanea. Spesso ricevevo complimenti
        dall'associazione e dai gruppi di danzatori, che frequentavano le nostre sale, per
        le grafiche che sviluppavo per la promozione social.<br><br>Così, il 19 luglio 2022 ho deciso di tornare sui
        banchi di scuola per dare una svolta alla mia vita iniziando, tramite <a class="project-link" href='https://www.start2impact.it/master/digital-marketing/?utm_source=google&utm_medium=cpc&utm_campaign=Search_DigitalMKT&gclid=EAIaIQobChMI9P_ayKiu_AIVW49oCR3FLw1kEAAYASAAEgJlJPD_BwE' target="_blank">start2impact</a>,
        un corso professionalizzante per diventare web developer - front end.<br><br>Al termine di questo sono
        intenzionato a continuare lo studio approfondendo la componente di design per riuscire così a rendere
        i siti dinamici e invogliare il maggior numero di utenti a frequentarli.`;
        projectDescription[0].innerHTML = `Christmas Quest è un lavoro di story telling interattivo dove le scelte dell'utente hanno delle ripercussioni sulla storia.<br>Al momento il suo sviluppo è allo stato di Beta.<br>Si tratta di un progetto personale sviluppato per svago e studio.`;
        projectDescription[1].innerHTML = `Questa applicazione permette di contare i numeri attraverso dei pulsanti che aggiungono o sottraggono 1, 10 o 100.<br>Questo è il mio primo progetto sviluppato per il corso di Javascript Base.`;
        projectDescription[2].innerHTML = `Questa è un'applicazione che permette, tramite i servizi API di openlibrary, di ricercare libri e informazioni su di essi.<br>Progetto sviluppato per il corso di Javascript Advanced.`;

    } else if (langSelector.value === 'en') {
        bioTitle.innerText = `Biography`;
        bioText.innerText = 'This section is in progress';
        projectDescription[0].innerHTML = `Christmas Quest is a work of interactive storytelling where the user's choices have repercussions on the story.<br>Its development is currently in the Beta state.<br>It is a personal project developed for leisure and study.`;
        projectDescription[1].innerHTML = `This application allows you to count numbers through buttons that add or subtract 1, 10 or 100.<br>This is my first project developed for the Basic Javascript course.`;
        projectDescription[2].innerHTML = `This is an application that allows, via openlibrary API services, to search for books and information about them.<br>Project developed for the Advanced Javascript course.`;
    }
}