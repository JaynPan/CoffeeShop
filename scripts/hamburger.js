const $hamburger = $('.hamburger-menu');
const $bar = $('.bar');
const $body = $('body');
const $mobile = $('.container');
<<<<<<< HEAD

$hamburger.click(showMenu);
function showMenu(){
    $body.toggleClass('show');
=======
const $scrollReveal = $('.foo');

$hamburger.click(showMenu);
function showMenu(){
>>>>>>> 344bcc06b151dd7db7b4722a4553c3b9abe4edbc
    $mobile.fadeToggle();
    $bar.toggleClass('animate');
}