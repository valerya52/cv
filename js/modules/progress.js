'use strict';

class Progress {
    constructor(progressLine, skills, selector) {
        this.progressLine = document.querySelectorAll(progressLine);
        this.selector = selector;
        this.skills = skills;
        this.counter = 0;
    }

    progressStatus () {
        this.progressLine.forEach(line => {
            line.style.width = this.skills[line.dataset.skill] + "%";
        })
    }

    active(){
        window.addEventListener('scroll', () => {
            if (document.querySelector(this.selector).getBoundingClientRect().y <= 0) {
                if(this.counter === 0){
                    this.counter++;
                    this.progressStatus();
                }
            }
        })
    }
}

const skills = {
    html: 90,
    css: 75,
    js: 80,
    gulp: 30,
    git: 50,
    bootstrap: 85
}

let progress = new Progress('.progress__line', skills, '.aboutme__title');
progress.active();