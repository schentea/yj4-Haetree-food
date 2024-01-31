function filterProducts(category) {
  const allImages = document.querySelectorAll(".salesProDescImg");

  allImages.forEach((image) => {
    image.style.display = "none";
  });

  if (category === "all") {
    allImages.forEach((image) => {
      image.style.display = "block";
    });
  } else {
    const filteredImages = document.querySelectorAll("." + category);
    filteredImages.forEach((image) => {
      image.style.display = "block";
    });
  }

  if (category === "danmuji") {
    document.querySelectorAll(".danmuji").forEach((image) => {
      image.style.width = "40%";
    });
  } else {
    document.querySelectorAll(".salesProDescImg").forEach((image) => {
      image.style.width = "30%";
    });
  }
}
