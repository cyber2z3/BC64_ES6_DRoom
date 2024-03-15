function tryOnOverlay(imageUrl, modelPartClass) {
  console.log("check try on");
  const modelPart = document.querySelector("." + modelPartClass);
  const overlayImage = document.createElement("div");
  overlayImage.style.backgroundImage = `url(${imageUrl})`;
  overlayImage.style.backgroundBlendMode = "overlay";
  overlayImage.style.position = "absolute";
  overlayImage.style.width = "100%";
  overlayImage.style.height = "100%";
  overlayImage.style.top = "-17px";
  overlayImage.style.left = "0";
  overlayImage.className = "overlay-image";
  overlayImage.style.backgroundRepeat = "no-repeat";
  overlayImage.style.zIndex = "1";
  if (imageUrl.includes("background"))
    overlayImage.style.backgroundSize = "cover";
  else overlayImage.style.backgroundSize = "1";

  const existingOverlay = modelPart.querySelector(".overlay-image");
  if (existingOverlay) {
    modelPart.removeChild(existingOverlay);
  }
  modelPart.appendChild(overlayImage);
}

// Hàm thiết lập sự kiện thử đồ
function setupTryOnEvent(id) {
  document.getElementById(id).addEventListener("click", function () {
    var imageUrl = "../assets/images/";
    var modalPart = "";
    //Modal
    if (
      id.startsWith("topcloth") ||
      id.startsWith("botcloth") ||
      id.startsWith("handbag")
    ) {
      modalPart = "handbag";
    } else if (id.startsWith("shoes")) {
      modalPart = "feet";
    } else if (id.startsWith("necklace")) {
      modalPart = "necklace";
    } else if (id.startsWith("hairstyle")) {
      modalPart = "hairstyle";
    } else if (id.startsWith("background")) {
      modalPart = "background";
    }
    // imageUrl
    if (id.startsWith("topcloth") || id.startsWith("botcloth")) {
      imageUrl += `clothes/${id}.png`;
    } else if (id.startsWith("background")) {
      imageUrl += `background/${id}.jpg`;
    } else {
      imageUrl += `${id.slice(0, -1)}/${id}.png`;
      console.log(imageUrl);
    }
    tryOnOverlay(imageUrl, modalPart);
  });
}

const data = [
  [
    "topcloth1",
    "topcloth2",
    "topcloth3",
    "topcloth4",
    "topcloth5",
    "topcloth6",
  ],
  ["botcloth1", "botcloth2", "botcloth3", "botcloth4", "botcloth5"],
  ["shoes1", "shoes2", "shoes3", "shoes4", "shoes5"],
  ["handbag1", "handbag2", "handbag3"],
  ["necklace1", "necklace2", "necklace3"],
  ["hairstyle1", "hairstyle2", "hairstyle3"],
  [
    "background1",
    "background2",
    "background3",
    "background4",
    "background5",
    "background6",
    "background7",
  ],
];
data.forEach((item) => item.forEach((id) => setupTryOnEvent(id)));
