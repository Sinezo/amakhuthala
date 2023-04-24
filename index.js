//menu icon click
var menu = document.querySelector('.menu-icon');
menu.addEventListener('click', function(){
    document.querySelector('.menu-wrapper').style.top='50px';
    document.querySelector('.menu-wrapper').style.height='fit-content';
    document.querySelector('.menu-wrapper').style.padding='20px';
    document.querySelector('.menu-wrapper').style.overflow='visible';

});
//close click
var close_icon = document.querySelector('#close-menu');
close_icon.addEventListener('click', function(){
    document.querySelector('.menu-wrapper').style.top='20px';
    document.querySelector('.menu-wrapper').style.height='0';
    document.querySelector('.menu-wrapper').style.padding='0';
    document.querySelector('.menu-wrapper').style.overflow='hidden';

});

//window scroll
window.onscroll=function(){
    scrolling();
};
function scrolling(){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop >100){
        document.querySelector('.nav-small-screen').style.backgroundColor='white';
        document.querySelector('.nav-small-screen').style.position='fixed';
        document.querySelector('.nav-small-screen').style.boxShadow='1px 1px 3px lightgrey';
        

    }
    else{
        document.querySelector('.nav-small-screen').style.backgroundColor='unset';
        document.querySelector('.nav-small-screen').style.boxShadow='none';
    }
}