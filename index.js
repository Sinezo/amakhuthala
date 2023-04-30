//slide show
var position=1;
        function slide_function(){
            if(position==1){
                document.querySelector('.box1').style.minWidth='0';
                document.querySelector('.box1').style.overflow='hidden';
                document.querySelector('.p-text2').style.height='fit-content';
                document.querySelector('.p-text2').style.marginTop='0px';
                document.querySelector('.slide-show').style.backgroundImage="url(Screenshot_20230425-172947_Gallery.jpg)";
                document.querySelector('.slide-show').style.backgroundSize='cover';
                position=2;
            }
            else if(position==2){
                document.querySelector('.box2').style.minWidth='0';
                document.querySelector('.box2').style.overflow='hidden';
                document.querySelector('.p-text3').style.height='fit-content';
                document.querySelector('.p-text3').style.marginTop='0px';
                document.querySelector('.slide-show').style.backgroundImage="url(Screenshot_20230426-180826_Gallery.jpg)";
                document.querySelector('.slide-show').style.backgroundSize='cover';

                position=3;
            }
            else if(position==3){
                document.querySelector('.box3').style.minWidth='0';
                document.querySelector('.box3').style.overflow='hidden';
                document.querySelector('.p-text4').style.height='fit-content';
                document.querySelector('.p-text4').style.marginTop='0px';
                document.querySelector('.slide-show').style.backgroundImage="url(Screenshot_20230427-084427_Gallery.jpg)";
                document.querySelector('.slide-show').style.backgroundSize='cover';
                
                position=4;
            }
            else if(position==4){
                document.querySelector('.box1').style.minWidth='100%';
                document.querySelector('.box2').style.minWidth='100%';
                document.querySelector('.box3').style.minWidth='100%';
                document.querySelector('.box4').style.minWidth='100%';

                document.querySelector('.p-text2').style.height='0';
                document.querySelector('.p-text2').style.margin='200px 20px';
                document.querySelector('.p-text3').style.height='0';
                document.querySelector('.p-text3').style.margin='200px 20px';
                document.querySelector('.p-text4').style.height='0';
                document.querySelector('.p-text4').style.margin='200px 20px';
                
                position=1;
            }
            setTimeout('slide_function()',7000);
        }
        window.onload = slide_function();

//menu icon click
var menu = document.querySelector('.menu-icon');
menu.addEventListener('click', function(){
    document.querySelector('.menu-wrapper').style.top='50px';
    document.querySelector('.menu-wrapper').style.height='90%';
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
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop >0){
        document.querySelector('.nav-small-screen').style.backgroundColor='white';
        document.querySelector('.nav-small-screen').style.position='fixed';
        document.querySelector('.nav-small-screen').style.boxShadow='1px 1px 3px lightgrey';
        document.querySelector('.phone').style.width='170px';
        document.querySelector('.phone').style.border='2px solid rgb(181, 197, 110)';
        

    }
    else{
        document.querySelector('.nav-small-screen').style.backgroundColor='unset';
        document.querySelector('.nav-small-screen').style.boxShadow='none';
        document.querySelector('.nav-small-screen').style.position='relative';
        document.querySelector('.phone').style.width='0';
        document.querySelector('.phone').style.border='0';
    }
}