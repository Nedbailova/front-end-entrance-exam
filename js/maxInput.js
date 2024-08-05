export function maxInput(e) {
    const max_text_class_length = {
      name: 27,
      role: 27,
      language: 9,
      date: 30,
      roleName: 40,
      "tools-black-block": 23,
      "education-block-year": 12,
      title: 15,
      info: 27,
      tags: 70,
      "education-block-schoolName": 23,
      "interests-item": 25,
      "main-title": 62,
      email: 40,
    };
  
    if (
      e.inputType === "deleteContentBackward" ||
      e.inputType === "deleteContentForward"
    ) {
      return;
    }
  
    if (this.innerText.length > max_text_class_length[this.className]) {
      e.preventDefault();
    }
  }