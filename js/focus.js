export function focusP() {
    if (this.innerText === "Input") {
      this.innerText = "";
      this.style.textDecoration = "none";
    }
  }
  
  export function focusUl() {
    this.style.textDecoration = "none";
  }
  