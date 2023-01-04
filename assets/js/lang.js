let langSelector = document.getElementById('lang-selector');
let bioText = document.getElementsByClassName('bio-text')[0];
let projectDescription = document.getElementsByClassName('description-project')

langSelector.onchange = function() {
    if (langSelector.value === 'it') {
        bioText.innerText = 'La vita è troppo breve per viverla senza quel tocco di pazzia.';
        projectDescription[0].innerText = '';
        projectDescription[1].innerText = '';
        projectDescription[2].innerText = '';

    } else if (langSelector.value === 'en') {
        bioText.innerText = 'yo bro';
        projectDescription[0].innerText = '';
        projectDescription[1].innerText = '';
        projectDescription[2].innerText = '';
    }
}