function generateQRCode() {
  const url = document.getElementById("urlInput").value;

  if (!url) {
    alert("Please enter a URL");
    return;
  }

  // Create a new QR code instance
  const qr = new QRious({
    element: document.createElement("canvas"),
    value: url,
    size: 250,
  });

  // Clear previous QR code, if any
  const qrcodeContainer = document.getElementById("qrcode");
  qrcodeContainer.innerHTML = "";
  qrcodeContainer.appendChild(qr.element);

  // Create a download link for the generated QR code
  const downloadLink = document.getElementById("downloadLink");
  downloadLink.href = qr.element.toDataURL("image/png");
  downloadLink.style.display = "inline-block";
}
