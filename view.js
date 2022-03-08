class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    console.log(this.mainContainerEl);
    }

  addParagraph() {
    const p = document.createElement("p");
    const p = p.append("This paragraph has been dynamically added by JavaScript!");
  
    this.mainContainerEl.append(p);
    // console.log(this.addParagraph)
  }
}

module.exports = View;