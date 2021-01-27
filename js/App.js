const qrcodeInput = document.getElementById("qrcode-url");
const imageArea = document.getElementById("image-area");
document.getElementById("form").addEventListener("submit", onCreateQrCode, true);

function onCreateQrCode(e) {
  e.preventDefault();
  imageArea.src = 'img/loading.gif';
  let val = qrcodeInput.value;
  setTimeout(() => {
    imageArea.src = `https://www.qrtag.net/api/qr_10.png?url=${val}`;
  }, 100);
}
