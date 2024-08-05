export function downloadPdf() {
  document.getElementById("download").addEventListener("click", () => {
    const main = document.getElementById("main");
    var opt = {
      margin: 1,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().from(main).set(opt).save();
  });
}
