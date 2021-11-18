'use strict';

window.addEventListener('DOMContentLoaded', () => {

    setTimeout(()=>{
        document.querySelector('.header__photo').classList.add('active');
    }, 800);

    setTimeout(()=>{

        let text = 'Let me introduce myself... ';
        let textInDocument = 'L';
        let counter = 0

        let writeText = setInterval(() => {
            if(counter >= text.length - 1){
                clearInterval(writeText);
                setInterval(() => {
                    let textEnd = document.querySelector('.header__title h2').textContent[text.length];
                    if(textEnd === "|"){
                        textInDocument.slice(0, -1);
                        document.querySelector('.header__title h2').innerHTML = textInDocument;
                    } else {
                        document.querySelector('.header__title h2').innerHTML = textInDocument + '|';
                    }
                }, 700);
            } else {
                counter++
                textInDocument += text[counter];
                document.querySelector('.header__title h2').innerHTML = textInDocument + '|';
            }
        },250);

    }, 1000);


    setInterval(() => {
        let extraSkills = document.querySelector('.extraskills__title');
        extraSkills.classList.toggle('big');
    }, 700);
});




