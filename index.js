//MENU
var menu_show =1;
function MENU(){
    if(menu_show==1){
        document.querySelector('.content-wrapper').style.marginLeft='-250px';
        document.querySelector('.content-wrapper').style.opacity='.5';
        document.querySelector('.menu-wrapper').style.width='100%';
        document.querySelector('.social-media').style.position='absolute';
        document.querySelector('.social-media').style.bottom='0';


        document.querySelector('.bar-one').style.transform='rotate(45deg)';
        document.querySelector('.bar-one').style.marginBottom='1px';
        document.querySelector('.bar-two').style.display='none';
        document.querySelector('.bar-three').style.transform='rotate(-45deg)';
        document.querySelector('.bar-three').style.marginTop='-3px';
        window.location="#";

        menu_show=0;
    }
    else{
        document.querySelector('.content-wrapper').style.margin='0';
        document.querySelector('.content-wrapper').style.opacity='1';
        document.querySelector('.menu-wrapper').style.width='0';

        document.querySelector('.bar-one').style.transform='rotate(0)';
        document.querySelector('.bar-one').style.marginBottom='3px';
        document.querySelector('.bar-two').style.display='block';
        document.querySelector('.bar-three').style.transform='rotate(0)';
        document.querySelector('.bar-three').style.marginTop='0';

        menu_show=1;
    }
}

//WELCOME SLIDING ANIMATION
var slide_position=0;
function SLIDE(){
    if(slide_position==0){
        document.querySelector('.welcome-message').style.width='100%';
        document.querySelector('.welcome-message').style.padding='30px';
        document.querySelector('.welcome-message').style.opacity='1';

        document.querySelector('.design-installation').style.width='0';
        document.querySelector('.design-installation').style.padding='0';
        document.querySelector('.design-installation').style.opacity='-1';
        slide_position=1;
    }
    else if(slide_position==1){
        document.querySelector('.online-tuition').style.width='100%';
        document.querySelector('.online-tuition').style.padding='50px';
        document.querySelector('.online-tuition').style.opacity='1';

        document.querySelector('.welcome-message').style.width='0';
        document.querySelector('.welcome-message').style.padding='0';
        document.querySelector('.welcome-message').style.overflow='hidden';
        document.querySelector('.welcome-message').style.border='0';
        
        slide_position=2;
    }
    else if(slide_position==2){
        document.querySelector('.design-installation').style.width='100%';
        document.querySelector('.design-installation').style.padding='50px';
        document.querySelector('.design-installation').style.opacity='1';
        document.querySelector('.online-tuition').style.opacity='-1';

        document.querySelector('.online-tuition').style.width='0';
        document.querySelector('.online-tuition').style.padding='0';
        document.querySelector('.online-tuition').style.overflow='hidden';
        document.querySelector('.online-tuition').style.border='0';
        document.querySelector('.welcome-message').style.opacity='-1';
        slide_position=0;
    }
    setTimeout('SLIDE()', 6000);
}
window.onload=SLIDE;

//OUR TEAM MEMBERS
function Ourteam(){
    window.location='index.html#our-team';

    document.querySelector('.content-wrapper').style.margin='0';
        document.querySelector('.content-wrapper').style.opacity='1';
        document.querySelector('.menu-wrapper').style.width='0';

        document.querySelector('.bar-one').style.transform='rotate(0)';
        document.querySelector('.bar-one').style.marginBottom='3px';
        document.querySelector('.bar-two').style.display='block';
        document.querySelector('.bar-three').style.transform='rotate(0)';
        document.querySelector('.bar-three').style.marginTop='0';

        menu_show=1;
}

//POUP HELP BOX
var pop_help=1;
function POPUP_HELP(){
    if(pop_help==1){
        document.querySelector('.pop-up-help').style.height='fit-content';
        document.querySelector('.pop-up-help').style.padding='20px';
        document.querySelector('.pop-up-help').style.margin='-150px 10px 10px 10px';

        pop_help=0;
    }
    else{
        document.querySelector('.pop-up-help').style.height='0';
        document.querySelector('.pop-up-help').style.padding='0';
        document.querySelector('.pop-up-help').style.margin='10px';
        pop_help=1;
    }
}
function MYMAIL(){
    document.location='mailto:lusawanasinethemba@gmail.com';
}
