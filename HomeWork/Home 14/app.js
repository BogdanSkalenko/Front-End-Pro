"use strict";

class Gallery {
    static SHOW_IMAGE_CLASS = 'img-show';
    constructor(container, config) {
        this.container = container;
        this.config = config;
        this.imgIndex = 0;
        this.init();
    }

    init() {
        this.createButtons();
        this.container.children[0].classList.add(Gallery.SHOW_IMAGE_CLASS);
        this.tick();
    }

    createButtons() {
        const nextButton = document.createElement('div');
        const prevButton = document.createElement('div');
        const containerButton = document.createElement('div');
        containerButton.classList.add('container-btn');
        nextButton.classList.add('next-btn');
        prevButton.classList.add('prev-btn');
        this.addButtons(containerButton, prevButton, nextButton);
        this.setEvent(prevButton, nextButton);
    }

    addButtons(containerButton, prevButton, nextButton) {
        containerButton.appendChild(prevButton);
        containerButton.appendChild(nextButton);
        this.container.parentNode.appendChild(containerButton);
    }

    setEvent(prevButton, nextButton) {
        prevButton.addEventListener('click', this.prev.bind(this));
        nextButton.addEventListener('click', this.next.bind(this));
    }

  next() {
      this.closeOtherImages();
      this.imgIndex += 1;
      if(this.imgIndex > this.container.children.length - 1) {
          this.imgIndex = 0;
      }
      this.container.children[this.imgIndex].classList.add(Gallery.SHOW_IMAGE_CLASS);
  }

  prev() {
      this.closeOtherImages();
      this.imgIndex -= 1;
      if(this.imgIndex < 0) {
          this.imgIndex = this.container.children.length - 1;
      }
      this.container.children[this.imgIndex].classList.add(Gallery.SHOW_IMAGE_CLASS);
  }

  closeOtherImages() {
      Array.prototype.forEach.call(this.container.children, (item) => {
          item.classList.remove(Gallery.SHOW_IMAGE_CLASS)
      })
  }
  
  show(index) {
    if(this.container.children[index]) {
        this.closeOtherImages();
        this.container.children[index].classList.add(Gallery.SHOW_IMAGE_CLASS);
    }
}
    tick() {
        if (this.config.delay) {
            this.next();
            setTimeout(this.tick.bind(this), this.config.delay);
        }
    }
}


const getGalleryContainer = document.getElementById('container');
const myGallery = new Gallery(getGalleryContainer, {delay: 7000});