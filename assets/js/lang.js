let langSelector = document.getElementById('lang-selector');
let bioText = document.getElementsByClassName('bio-text')[0];
let projectDescription = document.getElementsByClassName('description-project')

langSelector.onchange = function() {
    if (langSelector.value === 'it') {
        bioText.innerText = 'La vita è troppo breve per viverla senza quel tocco di pazzia.';
        projectDescription[0].innerHTML = `Christmas Quest è un lavoro di story telling interattivo dove le scelte dell'utente hanno delle ripercussioni sulla storia.<br>Al momento il suo sviluppo è allo stato di Beta.<br>Si tratta di un progetto personale sviluppato per svago e studio.`;
        projectDescription[1].innerHTML = `Questa applicazione permette di contare i numeri attraverso dei pulsanti che aggiungono o sottraggono 1, 10 o 100.<br>Questo è il mio primo progetto sviluppato per il corso di Javascript Base.`;
        projectDescription[2].innerHTML = `Questa è un'applicazione che permette, tramite i servizi API di openlibrary, di ricercare libri e informazioni su di essi.<br>Progetto sviluppato per il corso di Javascript Advanced.`;

    } else if (langSelector.value === 'en') {
        bioText.innerText = 'yo bro';
        projectDescription[0].innerHTML = `Christmas Quest is a work of interactive storytelling where the user's choices have repercussions on the story.<br>Its development is currently in the Beta state.<br>It is a personal project developed for leisure and study.`;
        projectDescription[1].innerHTML = `This application allows you to count numbers through buttons that add or subtract 1, 10 or 100.<br>This is my first project developed for the Basic Javascript course.`;
        projectDescription[2].innerHTML = `This is an application that allows, via openlibrary API services, to search for books and information about them.<br>Project developed for the Advanced Javascript course.`;
    }
}