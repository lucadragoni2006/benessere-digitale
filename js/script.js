$(document).ready(() => {
    $("header").load('components/navbar.html');
    $("main").load('pages/welcome.html', () => {
        $(".slider-nav>span").click(function() {
            const id = $(this).attr('id');
            const nextElement = document.getElementById(id);
            nextElement.scrollIntoView({block: 'nearest'});
        })
    });
    $("footer").load('components/footer.html');
});