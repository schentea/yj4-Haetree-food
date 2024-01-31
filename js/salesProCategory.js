function filterProducts(category) {
  const allImages = document.querySelectorAll(".salesProDescImg");
  allImages.forEach((image) => {
    if (category === "all" || image.classList.contains(category)) {
      image.style.display = "block";
      image.style.width = category === "danmuji" ? "40%" : "30%"; // 카테고리에 따라 width 조절
      fadeIn(image);
    } else {
      fadeOut(image);
    }
  });
}

function fadeIn(element) {
  element.style.opacity = 0;
  let opacity = 0;
  const fadeInInterval = setInterval(() => {
    if (opacity < 1) {
      opacity += 0.1;
      element.style.opacity = opacity;
    } else {
      clearInterval(fadeInInterval);
    }
  }, 50);
}

function fadeOut(element) {
  element.style.opacity = 1;
  let opacity = 1;
  const fadeOutInterval = setInterval(() => {
    if (opacity > 0) {
      opacity -= 0.1;
      element.style.opacity = opacity;
    } else {
      element.style.display = "none";
      clearInterval(fadeOutInterval);
    }
  }, 50);
}
