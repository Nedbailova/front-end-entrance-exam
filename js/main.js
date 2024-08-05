import { downloadPdf } from "./downloadPdf.js";
import { blurP, blurUl } from "./blur.js";
import { focusP, focusUl } from "./focus.js";
import { maxInput } from "./maxInput.js";

window.onload = function () {
  downloadPdf();
};

[...document.querySelectorAll("p")].forEach((el) => {
  el.addEventListener("click", function () {
    this.contentEditable = true;
    this.focus();

    this.addEventListener("beforeinput", maxInput);
    this.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
      }
    });
    this.addEventListener("focus", focusP);
    this.addEventListener("blur", blurP);
  });
});

[...document.querySelectorAll("ul")].forEach((el) => {
  el.addEventListener("click", function () {
    this.contentEditable = true;
    this.focus();
    this.style.textDecoration = "none";
    

    this.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        const newLi = document.createElement("li");
        newLi.contentEditable = true;
        newLi.textContent = "";
        this.insertBefore(newLi, this.nextSibling);
      }
    });
    this.addEventListener("blur", focusUl);
    this.addEventListener("blur", blurUl);
  });
});

[...document.getElementsByClassName("heart")].forEach((el) => {
  el.addEventListener("click", function () {
    if (this.querySelector("path").classList.contains("yellow")) {
      this.querySelector("path").classList.remove("yellow");
      this.querySelector("path").setAttribute("fill", "white");
      document
        .getElementById(this.querySelector("path").id + "-block")
        .classList.remove("green-card");
    } else {
      this.querySelector("path").classList.add("yellow");
      this.querySelector("path").setAttribute("fill", "yellow");
      document
        .getElementById(this.querySelector("path").id + "-block")
        .classList.add("green-card");
    }
  });
});

[...document.getElementsByClassName("tag")].forEach((el) => {
  el.addEventListener("click", function () {
    if (this.classList.contains("green-tag")) {
      this.classList.remove("green-tag");
      document
        .getElementById(this.id + "-block")
        .classList.remove("green-card");
    } else {
      this.classList.add("green-tag");
      document.getElementById(this.id + "-block").classList.add("green-card");
    }
  });
});
