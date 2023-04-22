//menu icon click
var menu = document.querySelector('.menu-icon');
menu.addEventListener('click', function(){
    document.querySelector('.menu-wrapper').style.top='0';
    document.querySelector('.menu-wrapper').style.height='100%';
    document.querySelector('.menu-wrapper').style.width='100%';
    document.querySelector('.menu-wrapper').style.padding='20px';

});
//close click
var close_icon = document.querySelector('.close');
close_icon.addEventListener('click', function(){
    document.querySelector('.menu-wrapper').style.top='400px';
    document.querySelector('.menu-wrapper').style.height='0';
    document.querySelector('.menu-wrapper').style.padding='0';

});