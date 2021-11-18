'use strict';

class Education {
    constructor(showBtns, universe) {
        this.showBtns = document.querySelectorAll(showBtns);
        this.universe = document.querySelectorAll(universe);
    }

    showText() {
        this.showBtns.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                this.universe.forEach(element => {
                    element.classList.remove('show');
                })
                this.universe[i].classList.add('show');
            });

        });
    }
}

let education = new Education('.education__block-showmore', '.education__block-universe-text');

education.showText();