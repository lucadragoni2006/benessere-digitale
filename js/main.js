import {days, convertTimeStringToNumber} from './appUsage.js'

function createCharts() {
    days.forEach((day, index) => {
        const nameDays = ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica']
        const barChart = $('#bar-chart-' + index);
        const pieChart = $('#pie-chart-' + index);
        const apps = [];
        const usage = [];
        day.forEach((app, index) => {
            apps[index] = app.name;
            usage[index] = convertTimeStringToNumber(app.usage).toFixed(1);
        });

        new Chart(barChart, {
            type: 'bar',
            data: {
                labels: apps,
                datasets: [{
                    data: usage,
                    backgroundColor: ['blue', 'red', 'green', 'purple', 'yellow', 'lightblue', 'gray', 'crimson', 'darkseagreen']
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: nameDays[index],
                        font: {size: 20}
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
            }
        });

        new Chart(pieChart, {
            type: 'pie',
            data: {
                labels: apps,
                datasets: [{
                    data: usage,
                    backgroundColor: ['blue', 'red', 'green', 'purple', 'yellow', 'lightblue', 'gray', 'crimson', 'darkseagreen']
                }]
            },
            options: {
                plugins: {
                    title: {
                        display: true,
                        text: nameDays[index],
                        font: {size: 20}
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        })
    });
}

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
            $('main').load('pages/welcome.html', function() {
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
            $('main').load('pages/charts.html', function() {
                createCharts();
                activateSlider();
            });
        });
    });

    $('main').load('pages/welcome.html', function() {
        activateSlider();
    });

    $('footer').load('components/footer.html');
});