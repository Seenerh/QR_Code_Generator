const wrapper = document.querySelector(".wrapper");
const herdBatchInput = wrapper.querySelector(".herd-batch-input");
const generateBtn = wrapper.querySelector(".generate-btn");
const qrcodeDiv = document.getElementById("qrcode");

generateBtn.addEventListener("click", () => {
  let herdBatch = herdBatchInput.value;
  
  if (!herdBatch) return;
  
  // Generate the QR code using qrcode.js library
  generateQRCode(herdBatch);
});

herdBatchInput.addEventListener("input", () => {
  qrcodeDiv.innerHTML = "";
});

function generateQRCode(herdBatch) {
  const qrCode = new QRCode(qrcodeDiv, {
    text: herdBatch,
    width: 150,
    height: 150,
  });
  
  wrapper.classList.add("active");
}
