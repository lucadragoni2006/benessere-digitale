import {days, total ,convertTimeStringToNumber} from './data.js'

function generateChart(apps, usage, barChart, pieChart, day) {
    new Chart(barChart, {
        type: 'bar',
        data: {
            labels: apps,
            datasets: [{
                data: usage,
                backgroundColor: ['blue', 'red', 'green', 'purple', 'yellow', 'lightblue', 'orangered', 'crimson', 'darkseagreen']
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: day,
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
                backgroundColor: ['blue', 'red', 'green', 'purple', 'yellow', 'lightblue', 'orangered', 'crimson', 'darkseagreen']
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: day,
                    font: {size: 20}
                }
            }
        }
    })
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
                displayDailyUsage(0);
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
                const nameDays = ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica'];
                days.forEach((day, index) => {
                    const barChart = $('#bar-chart-' + index);
                    const pieChart = $('#pie-chart-' + index);
                    const apps = [];
                    const usage = [];
                    day.forEach((app, index) => {
                        apps[index] = app.name;
                        usage[index] = convertTimeStringToNumber(app.usage).toFixed(1);
                    });
                    generateChart(apps, usage, barChart, pieChart, nameDays[index]);
                });
                const barTotal = $('#bar-total');
                const pieTotal = $('#pie-total');
                const everyDayUsage = [];
                total.forEach((day, index) => {
                    everyDayUsage[index] = convertTimeStringToNumber(day).toFixed(2);
                })
                generateChart(nameDays, everyDayUsage, barTotal, pieTotal, 'Utilizzo Complessivo Giornaliero');
                activateSlider();
            });
        });

        // Gestisce evento click su pulsante con id insert
        $('#insert').click(() => {
            // Carica il contenuto html di pages/insert.html
            $('main').load('pages/insert.html', () => {
                $('#add').click(() => {
                    const wrapper1 = $('<div>').addClass('input-wrapper');
                    const wrapper2 = $('<div>').addClass('input-wrapper');
                    const appNameHeading = $('<h3>').text('Inserisci nome App');
                    const appUsageHeading = $('<h3>').text('Inserisci ore di utilizzo dell\'App');
                    const appName = $('<input>').attr('type', 'text').addClass('app-name');
                    const appUsage = $('<input>').attr('type', 'number').addClass('app-usage');
                    wrapper1.append(appNameHeading, appName);
                    wrapper2.append(appUsageHeading, appUsage);
                    $('#data-field').append(wrapper1, wrapper2);
                });
                
                $('#delete').click(() => {
                    const elements = $('#data-field').children();
                    if(elements.length > 2) {
                        elements.slice(-2).remove();
                    }
                });

                $('#show').click(() => {
                    const nameDays = ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica'];
                    const index = $('#day-select').val()
                    const barChart = $('#bar-chart-' + index);
                    const pieChart = $('#pie-chart-' + index);
                    const apps = [];
                    const usage = [];
                    $('.app-name').each(function() {
                        apps.push($(this).val());
                    });
                    $('.app-usage').each(function() {
                        usage.push($(this).val());
                    });
                    // Controlla se esiste già un grafico e lo elimina nel caso esista.
                    if(Chart.getChart(barChart)) {
                        Chart.getChart(barChart).destroy();
                        Chart.getChart(pieChart).destroy();
                    }
                    console.log(nameDays[index]);
                    $('#' + nameDays[index].toLowerCase()).css('display', 'block');
                    generateChart(apps, usage, barChart, pieChart, nameDays[index]);
                    
                    $('#' + nameDays[index].toLowerCase() + ' > table').remove();
                    const table = $('<table>');
                    const tableHeading = $('<tr>').append($('<th>').text('Applicazione'), $('<th>').text('Ore'));
                    table.append(tableHeading);
                    for (let i = 0; i < apps.length; i++) {
                        const row = $('<tr>').append($('<td>').text(apps[i]), $('<td>').append(usage[i]));
                        table.append(row);
                    }
                    barChart.before(table);
                });
            });
        });
    });

    $('main').load('pages/welcome.html', function() {
        activateSlider();
    });

    $('footer').load('components/footer.html');
});