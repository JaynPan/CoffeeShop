const $hamburger = $('.hamburger-menu');
const $bar = $('.bar');
const $body = $('body');
const $mobile = $('.container');
const $scrollReveal = $('.foo');

$hamburger.click(showMenu);
function showMenu(){
    $mobile.fadeToggle();
    $bar.toggleClass('animate');
}