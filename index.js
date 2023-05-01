//slide show
var position=1;
        function slide_function(){
            if(position==1){
                document.querySelector('.box1').style.minWidth='0';
                document.querySelector('.box1').style.overflow='hidden';
                document.querySelector('.p-text2').style.height='fit-content';
                document.querySelector('.p-text2').style.marginTop='0px';
                document.querySelector('.h2').style.margin="0";
                position=2;
            }
            else if(position==2){
                document.querySelector('.box2').style.minWidth='0';
                document.querySelector('.box2').style.overflow='hidden';
                document.querySelector('.p-text3').style.height='fit-content';
                document.querySelector('.p-text3').style.marginTop='0px';
                document.querySelector('.h3').style.margin="0";
                position=3;
            }
            else if(position==3){
                document.querySelector('.box3').style.minWidth='0';
                document.querySelector('.box3').style.overflow='hidden';
                document.querySelector('.p-text4').style.height='fit-content';
                document.querySelector('.p-text4').style.marginTop='0px';
                document.querySelector('.h4').style.margin="0";
                position=4;
            }
            else if(position==4){
                document.querySelector('.box1').style.minWidth='100%';
                document.querySelector('.box2').style.minWidth='100%';
                document.querySelector('.box3').style.minWidth='100%';
                document.querySelector('.box4').style.minWidth='100%';
                document.querySelector('.slide-show').style.backgroundImage="none";
    

                document.querySelector('.p-text2').style.height='0';
                document.querySelector('.p-text2').style.margin='200px 20px';
                document.querySelector('.p-text3').style.height='0';
                document.querySelector('.p-text3').style.margin='200px 20px';
                document.querySelector('.p-text4').style.height='0';
                document.querySelector('.p-text4').style.margin='200px 20px';

                document.querySelector('.h2').style.margin="0px 0 0 -20px";
                document.querySelector('.h3').style.margin="0px 0 0 -20px";
                document.querySelector('.h4').style.margin="0px 0 0 -20px";
                
                position=1;
            }
            setTimeout('slide_function()',7000);
        }
        window.onload = slide_function();

//menu icon click
var menu = document.querySelector('#menu-icon');
var menu_status=1;
menu.addEventListener('click', function(){
    if(menu_status==1){
        document.querySelector('.menu-wrapper').style.top='120px';
    document.querySelector('.menu-wrapper').style.height='90%';
    document.querySelector('.menu-wrapper').style.padding='20px';
    document.querySelector('.menu-wrapper').style.overflow='visible';

    document.querySelector('.bar1').style.transform='rotate(45deg)';
    document.querySelector('.bar2').style.transform='translate(-30px)';
    document.querySelector('.bar2').style.opacity='0';
    document.querySelector('.bar3').style.transform='rotate(-45deg)';

    document.querySelector('.bar1').style.margin='11px 0px 0 0';
    document.querySelector('.bar3').style.margin='-12.9px 0 0 0';
    menu_status=0;
    }
    else{
        document.querySelector('.menu-wrapper').style.top='20px';
    document.querySelector('.menu-wrapper').style.height='0';
    document.querySelector('.menu-wrapper').style.padding='0';
    document.querySelector('.menu-wrapper').style.overflow='hidden';

    document.querySelector('.bar1').style.transform='rotate(0)';
    document.querySelector('.bar2').style.transform='translate(0)';
    document.querySelector('.bar2').style.opacity='1';
    document.querySelector('.bar3').style.transform='rotate(0)';

    document.querySelector('.bar1').style.margin='0 0 3px 0';
    document.querySelector('.bar2').style.margin='0 0 3px 0';
    document.querySelector('.bar3').style.margin='0 0 3px 0';
    menu_status=1;
    }

});
//contact us form
function contact_form(){
    window.location='index.html#contact-us-form';
    document.querySelector('.menu-wrapper').style.top='20px';
    document.querySelector('.menu-wrapper').style.height='0';
    document.querySelector('.menu-wrapper').style.padding='0';
    document.querySelector('.menu-wrapper').style.overflow='hidden';

    document.querySelector('.bar1').style.transform='rotate(0)';
    document.querySelector('.bar2').style.transform='translate(0)';
    document.querySelector('.bar2').style.opacity='1';
    document.querySelector('.bar3').style.transform='rotate(0)';

    document.querySelector('.bar1').style.margin='0 0 3px 0';
    document.querySelector('.bar2').style.margin='0 0 3px 0';
    document.querySelector('.bar3').style.margin='0 0 3px 0';
    menu_status=1;
}
//window scroll
window.onscroll=function(){
    scrolling();
};
function scrolling(){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop >0){
        document.querySelector('.nav-small-screen').style.backgroundColor='white';
        document.querySelector('.nav-small-screen').style.marginTop='-140px';
        document.querySelector('.nav-small-screen').style.position='fixed';
        document.querySelector('.nav-small-screen').style.boxShadow='1px 1px 3px lightgrey';
        document.querySelector('.phone').style.width='170px';
        document.querySelector('.phone').style.border='1px solid lightgrey';
        document.querySelector('.web-name').style.fontSize="10px";
        document.querySelector('.web-name').style.color='chocolate';
        

    }
    else{
        document.querySelector('.nav-small-screen').style.backgroundColor='unset';
        document.querySelector('.nav-small-screen').style.boxShadow='none';
        document.querySelector('.nav-small-screen').style.position='relative';
        document.querySelector('.nav-small-screen').style.marginTop='-95px';
        document.querySelector('.phone').style.width='0';
        document.querySelector('.phone').style.border='0';
        document.querySelector('.web-name').style.fontSize="x-large";
        document.querySelector('.web-name').style.color='black';
    }
}

//projects
//skipping by dots
function skip_dots1(){
    document.querySelector('.projects_images').src="Screenshot_20230425-172947_Gallery.jpg";
    document.querySelector('#pos1').style.backgroundColor='rgb(114, 117, 111)';
    document.querySelector('#pos2').style.backgroundColor='white';
    document.querySelector('#pos3').style.backgroundColor='white';
    document.querySelector('#pos4').style.backgroundColor='white';
    document.querySelector('#pos5').style.backgroundColor='white';
}
function skip_dots2(){
    document.querySelector('.projects_images').src="Screenshot_20230430-184718_Gallery.jpg";
    document.querySelector('#pos2').style.backgroundColor='rgb(114, 117, 111)';
    document.querySelector('#pos1').style.backgroundColor='white';
    document.querySelector('#pos3').style.backgroundColor='white';
    document.querySelector('#pos4').style.backgroundColor='white';
    document.querySelector('#pos5').style.backgroundColor='white';
    projects();
}
function skip_dots3(){
    document.querySelector('.projects_images').src="sinethemba.jpg";
    document.querySelector('#pos3').style.backgroundColor='rgb(114, 117, 111)';
    document.querySelector('#pos1').style.backgroundColor='white';
    document.querySelector('#pos2').style.backgroundColor='white';
    document.querySelector('#pos4').style.backgroundColor='white';
    document.querySelector('#pos5').style.backgroundColor='white';
    projects();
}
function skip_dots4(){
    document.querySelector('.projects_images').src="Screenshot_20230430-184715_Gallery.jpg";
    document.querySelector('#pos4').style.backgroundColor='rgb(114, 117, 111)';
    document.querySelector('#pos1').style.backgroundColor='white';
    document.querySelector('#pos3').style.backgroundColor='white';
    document.querySelector('#pos2').style.backgroundColor='white';
    document.querySelector('#pos5').style.backgroundColor='white';
    projects();
}
function skip_dots5(){
    document.querySelector('.projects_images').src="DSC_8533 (2).jpg";
    document.querySelector('#pos5').style.backgroundColor='rgb(114, 117, 111)';
    document.querySelector('#pos1').style.backgroundColor='white';
    document.querySelector('#pos3').style.backgroundColor='white';
    document.querySelector('#pos4').style.backgroundColor='white';
    document.querySelector('#pos2').style.backgroundColor='white';
    projects();
}
