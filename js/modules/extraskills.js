'use strict';

class Extraskills {
    constructor(selectorBtn, selectorWrapper, block) {
        this.btn = document.querySelector(selectorBtn);
        this.wrapper = document.querySelector(selectorWrapper);
        this.block = document.querySelector(block);
    }

    showSkills () {
        this.btn.addEventListener('click', () => {
            this.wrapper.style.cssText = 'height: 100px; padding-bottom: 80px; padding-top: 30px;';
        });
    }
}

let showBtn = new Extraskills('.extraskills__title', '.extraskills__wrapper', '.extraskills__block');

showBtn.showSkills();