import {days, convertTimeStringToNumber} from './appUsage.js'

function activateSlider() {
    $('.slider-nav>span').click(function() {
        const id = $(this).attr('id');
        const nextElement = document.getElementById(id);
        nextElement.scrollIntoView({block: 'nearest'});
    });
}

function displayDailyUsage(n) {
    const container = $('#card-container');
    container.empty();
    const day = days[n];
    day.forEach(app => {
        const card = $('<div>').addClass('card');
        const image = $('<img>').attr('src', 'images/blue-clock.png').attr('alt', 'immagine non disponibile');
        const cardInfo = $('<div>').addClass('card-info');
        const appName = $('<h3>').text(app.name); 
        const appUsage = $('<p>').text(app.usage); 
        if(convertTimeStringToNumber(app.usage) >= 1.5)
            image.attr('src', 'images/red-clock.png');
        container.append(card)
        card.append(image, cardInfo);
        cardInfo.append(appName, appUsage);
    });
}

$(document).ready(() => {
    // Carica il contenuto HTML in modo asincrono dal file components/navbar.html
    $('header').load('components/navbar.html', () => {
        // Gestisce evento click su pulsante con id home
        $('#home').click(() => {
            // Carica il contenuto html di pages/welcome.html
            $('main').load('pages/welcome.html', () => {
                activateSlider();
            });
        });

        // Gestisce evento click su pulsante con id recap
        $('#recap').click(() => { 
            // Carica il contenuto html di pages/recap.html
            $('main').load('pages/recap.html', () => {
                // Esegue una funziona al momento in cui cambio il valore sul tag select
                $('#day-select').change(function() {
                    displayDailyUsage($(this).val())
                });
            });
        });

        // Gestisce evento click su pulsante con id charts
        $('#charts').click(() => {
            // Carica il contenuto html di pages/charts.html
            $('main').load('pages/charts.html');
        });
    });

    $('main').load('pages/welcome.html', () => {
        activateSlider();
    });

    $('footer').load('components/footer.html');
});