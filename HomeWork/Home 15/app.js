class Gallery {

  static WRAPPER_CLASS = 'wrapper';
  static CONTAINER_CLASS = 'gallery-container';
  static IMAGE_BLOCK_IMG_CLASS = 'image-block-img';
  static IMAGE_BLOCK_CLASS = 'image-block';

  constructor(imagesContainer) {
      this.imagesContainer = imagesContainer;
      this.init();
  }

  init() {
      this.addContainerStyle();
      this.createSmallImgBlock();
      this.wrapInContainer();
      this.setEvent();
  }

  addContainerStyle() {
      this.imagesContainer.classList.add(Gallery.CONTAINER_CLASS);
  }

  setEvent() {
      this.imagesContainer.addEventListener('mouseover', this.onImagesContainerMouseover.bind(this));
  }

  onImagesContainerMouseover(e) {
      if(e.target.tagName === 'IMG') {
          this.showImage(e.target);
      }
  }
  showImage(elem) {
      this.imageBlockImg.src = elem.src;
  }

  wrapInContainer() {
      this.wrapperDiv = document.createElement('div');
      this.wrapperDiv.classList.add(Gallery.WRAPPER_CLASS);
      this.wrapperDiv.appendChild(this.imageBlock)
      this.wrapperDiv.appendChild(this.imagesContainer);
      document.body.appendChild(this.wrapperDiv);
  }

  createSmallImgBlock() {
      this.imageBlock = document.createElement('div');
      this.imageBlockImg = document.createElement('img');
      this.imageBlockImg.classList.add(Gallery.IMAGE_BLOCK_IMG_CLASS);
      this.imageBlock.classList.add(Gallery.IMAGE_BLOCK_CLASS);
      this.imageBlock.appendChild(this.imageBlockImg);
  }
}

const myGallery = new Gallery(
                      document.getElementById('container'),
                      )