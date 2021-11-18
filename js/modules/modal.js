class Modal {
    constructor(modal, modalTrigger, modalContent) {
        this.modal = document.querySelector(modal);
        this.modalTrigger = document.querySelectorAll(`${modalTrigger} img`);
        this.modalContent = document.querySelector(modalContent);
        this.close = this.modal.querySelector('.close__modal');
    }

    showModal () {
        this.modal.style.display = 'flex';
    }

    closeModal () {
        this.close.addEventListener('click', () => {
            try {
                this.modalContent.querySelector("img").remove();
            }catch (e) {}
            this.modal.style.display = 'none';
        })

        this.modal.addEventListener('click', e => {
            if(e.target === this.modal){
                try {
                    this.modalContent.querySelector("img").remove();
                }catch (e) {}
                this.modal.style.display = 'none';
            }
        })
    }

    openModal () {
        this.modalTrigger.forEach(item => {
            item.addEventListener('click', () => {
                let src = item.getAttribute('src');
                let image = document.createElement('img');
                image.setAttribute('src', src);
                this.modalContent.appendChild(image)
                this.showModal();
                this.closeModal();
            })
        })
    }
}

let modal = new Modal('.modal', '.photo__item', '.modal__content');

modal.openModal();