/*==================================priceHoverMenu===============*/
$( document ).ready(function() {
    $('#hover-price, #hover-menu').mouseenter(function () {
        $('#hover-menu').css({display: 'block'});
        $('#bagIcon').attr('src', 'imgs/bag-icon-pink.png');
    }).mouseleave(function () {
        $('#hover-menu').css({display: 'none'});
        $('#bagIcon').attr('src', 'imgs/bag-icon.png');
    });

    $("input").keydown(function () {
        $(this).prev($('.star')).css({display: 'none'});
    });
});

/*===============================modals=====================*/
$( document ).ready(function() {
    if ($(window).width() >= 500) {
        $('#myModal').css({display: 'block'});

        $('.closeModalX').click(function () {
                $('#myModal').css({display: 'none'});
        });

        $('#registration').click(function () {
            $('#mymodal').css({display: 'none'});
            $('#myModal2').css({display: 'block'});
        }).after(function () {
            $('.closeModalX').click(function () {
                $('#myModal2').css({display: 'none'});
            });
    });
}
    /* click outside the modal to close it
    window.onclick = function(event) {
        if (event.target === modal) {
            $('#myModal').css({display: 'none'});
        }
    };*/
});
