$(document).ready(() => {
    // Carica il contenuto HTML in modo asincrono dal file components/navbar.html
    $('header').load('components/navbar.html', () => {
        // Gestisce evento click su pulsante con id home
        $('#home').click(() => {
            // Carica il contenuto html di pages/welcome.html
            $('main').load('pages/welcome.html');
        });

        // Gestisce evento click su pulsante con id home
        $("#charts").click(() => { 
            // Carica il contenuto html di pages/recap.html
            $('main').load('pages/recap.html');
        });
    });

    $('main').load('pages/welcome.html', () => {
        $('.slider-nav>span').click(function() {
            const id = $(this).attr('id');
            const nextElement = document.getElementById(id);
            nextElement.scrollIntoView({block: 'nearest'});
        })
    });

    $('footer').load('components/footer.html');
});