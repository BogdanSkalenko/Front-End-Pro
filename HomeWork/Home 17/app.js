"use strict";

class Tabset{

    static CONTAINER_STYLES = 'tabset';
    static HEADING_CLASS = 'tabset-heading';
    static TABS_CLASS = 'tabs';
    static TABS_CONTENT_CLASS = 'tabs-content';
    static ELEM_OPEN_CLASS = 'open';
    static TABSET_ELEM_CLASS = 'tabset-element';

    constructor(container) {
        this.container = container;
        this.init();
        this.index = 0;
    }

    init() {
        this.arrangeElems();
        this.bindEventListener();
        this.addContainerStyles();
        this.show(0);
    }

    addContainerStyles() {
        this.container.classList.add(Tabset.CONTAINER_STYLES)
    }

    arrangeElems() {
        this.tabsHeadingDiv = document.createElement('div');
        this.tabsBodyDiv = document.createElement('div');
        this.tabsHeadingDiv.classList.add(Tabset.TABS_CLASS);
        this.tabsBodyDiv.classList.add(Tabset.TABS_CONTENT_CLASS)
        this.sortTabs();
        this.container.appendChild(this.tabsHeadingDiv);
        this.container.appendChild(this.tabsBodyDiv);
    }

    sortTabs() {
        Array.prototype.forEach.call(this.container.children, (tabsetELem) => {
            this.tabsHeadingDiv.appendChild(tabsetELem.children[0]);
            this.tabsBodyDiv.appendChild(tabsetELem.children[0]);
        })
    }

    bindEventListener() {
        this.tabsHeadingDiv.addEventListener('click', this.onTabsHeadingDivClick.bind(this))
    }

    onTabsHeadingDivClick(e) {
        if(e.target.classList.contains(Tabset.HEADING_CLASS)) {
            this.closeAllElems();
            this.index = this.findItemIndexOfCollection(e.target.parentNode.children, e.target);
            this.show(this.index);
        }
    }

    findItemIndexOfCollection(htmlCollection, elem) {
        return Array.prototype.indexOf.call(htmlCollection, elem);
    }

    show(index) {
        if(index < this.tabsBodyDiv.children.length && index >= 0) {
            this.closeAllElems();
            this.tabsHeadingDiv.children[index].classList.add(Tabset.ELEM_OPEN_CLASS);
            this.tabsBodyDiv.children[index].classList.add(Tabset.ELEM_OPEN_CLASS);
        }
    }

    prev() {
        if(this.index > 0){
            this.index--;
            this.closeAllElems();
            this.show(this.index);
        }
    }

    next() {
        console.log(this.tabsBodyDiv.children.length, this.index)
        if(this.index < this.tabsBodyDiv.children.length - 1){
            this.index++;
            this.closeAllElems();
            this.show(this.index);
        }
    }

    closeAllElems() {
        for(let i = 0; i < this.tabsBodyDiv.children.length; i++) {
            this.tabsBodyDiv.children[i].classList.remove(Tabset.ELEM_OPEN_CLASS);
            this.tabsHeadingDiv.children[i].classList.remove(Tabset.ELEM_OPEN_CLASS);
        }
    }
}
const tabs = new Tabset(document.getElementById('container'));