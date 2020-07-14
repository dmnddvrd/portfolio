$(document).ready(() => {
    
    anime({
        targets: '.square',
        width: {
            value: '90%',
            duration: 2000,
        },
        delay: 500,
    });

    anime({
        targets: '.name',
        translateY: 50,
        translateX: 100,
    });

    anime({
        targets: '.subtitle',
        translateY: 50,
        translateX: 135,
        delay: 500,
        opacity: {
            value: 1,
            duration: 1000,
        }
    });

    anime({
        targets: '.avatar',
    });
    
    let myFullpage = new fullpage('#fullpage', {
        anchors: ['home', 'about-me', 'previous-works','contact'],
        v2compatible: true,
        menu: '#menu',
        verticalScroll: true,
        scrollingSpeed: 1000,
        scrollOverflow: true
    });

    let homeAnimation = new TypeIt(".name", {
        speed: 50,
        startDelay: 900,
        afterComplete: () => {
            homeAnimation.destroy();
            let description = new TypeIt(".subtitle", {
                strings: ["a full stack web developer specialized in<br> <div class='skills'>#php  #laravel  #node.js  #bootstrap  #javascript  #css  #docker  #git</div>"],
                delay: 4000,
                speed: 50,
                waitUntilVisible: true
                ,afterComplete: () => {
                    description.destroy();
                }
              }).go();
        }
      })
        .type("Hi, I am <em><strong>edvard</strong></em>", {delay: 100})
        .move(-6, {speed: 50, delay: 500})
        .type('<')
        .move('END')
        .type('/>,')
        .go();
   
})