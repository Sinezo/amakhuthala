//READ MORE ABOUT
var read=1;
function READ_MORE_ABOUT(){
    if(read==1){
        document.querySelector('#read-more').style.display='block';
        document.querySelector('.read-more').innerHTML='Show less';
        read=0;
    }
    else{
        document.querySelector('#read-more').style.display='none';
        document.querySelector('.read-more').innerHTML='Read more'
        read=1;
    }
}
//MENU
var menu_show =1;
function MENU(){
    if(menu_show==1){
        document.querySelector('.menu-wrapper').style.width='70%';
        document.querySelector('.menu-wrapper').style.borderLeft='2px solid';

        document.querySelector('.bar-one').style.transform='rotate(45deg)';
        document.querySelector('.bar-one').style.marginBottom='1px';
        document.querySelector('.bar-two').style.display='none';
        document.querySelector('.bar-three').style.transform='rotate(-45deg)';
        document.querySelector('.bar-three').style.marginTop='-3px';

        menu_show=0;
    }
    else{
        document.querySelector('.menu-wrapper').style.width='0';
        document.querySelector('.menu-wrapper').style.borderLeft='0';

        document.querySelector('.bar-one').style.transform='rotate(0)';
        document.querySelector('.bar-one').style.marginBottom='3px';
        document.querySelector('.bar-two').style.display='block';
        document.querySelector('.bar-three').style.transform='rotate(0)';
        document.querySelector('.bar-three').style.marginTop='0';

        menu_show=1;
    }
}

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

//ASK QUESTION BOX
var pop_hire=1;
function HIRE_US(){
    if(pop_hire==1){
        document.querySelector('.hire-us-container').style.height='fit-content';
        document.querySelector('.hire-us-container').style.padding='20px';
        document.querySelector('.hire-us-container').style.top="60px";
        document.querySelector('.hire-us-container').style.border='1px solid rgb(231, 227, 227)';
        pop_hire=0;
    }
    else{
        document.querySelector('.hire-us-container').style.height='0';
        document.querySelector('.hire-us-container').style.padding='0';
        document.querySelector('.hire-us-container').style.border='0';
        pop_hire=1;
    }
}

//ASK QUESTION BOX
var pop_help=1;
function ASK_QUESTION(){
    if(pop_help==1){
        document.querySelector('.pop-up-help').style.height='fit-content';
        document.querySelector('.pop-up-help').style.padding='10px';
        pop_help=0;
    }
    else{
        document.querySelector('.pop-up-help').style.height='0';
        document.querySelector('.pop-up-help').style.padding='0';
        pop_help=1;
    }
}
//GO BUTTON
function MYMAIL(){
    document.location='mailto:lusawanasinethemba@gmail.com';
}


function LOCATION_ANSWER(){
    document.querySelector('.location-answer').style.display='block';
}
function CONTACT_ANSWER(){
    document.querySelector('.contact-answer').style.display='block';
}
function OFFERS_ANSWER(){
    document.querySelector('.offers-answer').style.display='block';
}

//ONSCROLL
var services_number=0;
var clients_number=0;
var employees_number=0;
var projects_number=0;


window.onscroll=function(){scroll_summary()};
function scroll_summary(){
    if(document.documentElement.scrollTop >500 && document.documentElement.scrollTop <1370){
        document.querySelector('.wrap-header').style.position='fixed';
        document.querySelector('.wrap-header').style.top='0';
    }
    else if(document.documentElement.scrollTop <400){
        document.querySelector('.wrap-header').style.position='relative';
    }
    else if(document.documentElement.scrollTop >1370){
            if(services_number<6){
                services_number+=1;
                document.querySelector('.services-number').innerHTML=services_number;
            }
            else if(services_number==6){
                clients_number+=1;
                document.querySelector('.clients-number').innerHTML=clients_number;

                if(clients_number==27){
                    services_number=7;
                }
            }
            else if(clients_number==27){
                employees_number+=1;
                document.querySelector('.employees-number').innerHTML=employees_number;

                if(employees_number==56){
                    clients_number=28;
                }
            }
            else if(employees_number==56){
                projects_number+=1;
                document.querySelector('.projects-number').innerHTML=projects_number;

                if(projects_number==126){
                    employees_number=57;
                }
            }
    }
    setTimeout('scroll_summary()',100)
}

//MORE ABOUT US
var more_state=1;
function MORE_ABOUT_US(){
    if(more_state==1){
        document.querySelector('.more-about-us').style.display='block';
        more_state=0;
    }
    else{
        document.querySelector('.more-about-us').style.display='none';
        more_state=1;
    }
}

//REQUEST PROJECT
var request_state=1;
function REQUEST_PROJECT(){
    if(request_state==1){
        document.querySelector('.request-design-box').style.width='80%';
        document.querySelector('.request-design-box').style.marginTop='-360px';
        document.querySelector('.request-design-box').style.border="1px solid lightgrey";
        document.querySelector('.request-design-box').style.padding='10px';
        request_state=0;
    }
    else{
        document.querySelector('.request-design-box').style.width='0';
        document.querySelector('.request-design-box').style.marginTop='360px';
        document.querySelector('.request-design-box').style.border="0";
        document.querySelector('.request-design-box').style.padding='0';
        request_state=1;
    }
}