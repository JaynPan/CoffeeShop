

$(function () {
    $('.item').slice(0, 4).show();


    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".item:hidden").slice(0, 4).slideDown();
        if ($(".item:hidden").length == 0) {
            $("#loadMore").fadeOut('slow');
            // $("#loadMore").text('123');
            // $(this).addClass('wrap');
            // $('.wrap').click(function(){
            //    $('.item').slice(4,12).hide();
            //    $("#loadMore").text('Load More');
            //    $(this).removeClass('wrap');
            //    return;
            // })
        }
        // $('html,body').animate({
        //     scrollTop: $(this).offset().top
        // }, 1500);
    });
});