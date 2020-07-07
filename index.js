$(document).ready(() => {
    const translateX = 155;
    
    anime({
        targets: '.square',
        width: {
            value: '90%',
            duration: 2000,
        },
        translateY: 100,
        delay: 500,
    });

    anime({
        targets: '.name',
        translateY: translateX,
        translateX: 100,
    });

    anime({
        targets: '.subtitle',
        translateY: translateX,
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


    let homeAnimation = new TypeIt(".name", {
        speed: 50,
        startDelay: 900,
        afterComplete: () => {
            homeAnimation.destroy();
            new TypeIt(".subtitle", {
                strings: ["a full stack web developer <br> with a passion for building creative websites."],
                delay: 4000,
                speed: 50,
                waitUntilVisible: true
                ,afterComplete: () => {
                    anime({
                        targets: '.skill',
                        opacity: {
                            value: 1,
                            duration: 1000,
                        },
                        delay: function(el, i, l) {
                          return i * 100;
                        },
                        endDelay: function(el, i, l) {
                          return (l - i) * 100;
                        }
                      });
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