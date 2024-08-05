export function blurP() {
    if (this.innerText.trim().length === 0) {
      this.innerText = "Input";
      // this.style.color = "gray";
      this.style.textDecoration = "underline";
    }
    this.contentEditable = false;
  }
  
  export function blurUl() {
    if (this.querySelectorAll("li").length === 0) {
      const newLi = document.createElement("li");
      newLi.contentEditable = true;
      // this.style.color = "gray";
      this.style.textDecoration = "underline";
      this.appendChild(newLi);
    }
  }
  