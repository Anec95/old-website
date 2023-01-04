let darkModeBtn = document.getElementsByClassName('dark-mode-btn')[0];
let footer = document.querySelector('footer');
let header = document.querySelector('header');
let divOption = document.getElementsByClassName('option-container')[0];
let langSelector = document.getElementById('lang-selector');
let linkDark = document.getElementsByClassName('project-link');

darkModeBtn.onclick = function() {
    document.body.classList.toggle('dark-mode');
    footer.classList.toggle('footer-dark');
    header.classList.toggle('header-dark');
    darkModeBtn.classList.toggle('button-in-dark');
    langSelector.classList.toggle('button-in-dark');
    divOption.classList.toggle('button-in-dark');
    linkDark[0].classList.toggle('link-dark');
    linkDark[1].classList.toggle('link-dark');
    linkDark[2].classList.toggle('link-dark');
    linkDark[3].classList.toggle('link-dark');
    linkDark[4].classList.toggle('link-dark');
    linkDark[5].classList.toggle('link-dark');
    

    if (document.body.className === 'dark-mode') {
        darkModeBtn.innerHTML = '<i class="fa fa-sun-o"></i>'
    } else {
        darkModeBtn.innerHTML = '<i class="fa fa-moon-o"></i>'
    }
}