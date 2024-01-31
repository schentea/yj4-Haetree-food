document.addEventListener("DOMContentLoaded", function () {
  const salesProDesc = document.getElementById("salesProDesc");
  const images = Array.from(salesProDesc.children);

  // 이미지 순서를 무작위로 섞음
  const shuffledImages = shuffle(images);

  // 섞인 순서대로 투명도와 위치를 설정하여 애니메이션 효과 적용
  shuffledImages.forEach((image, index) => {
    setTimeout(() => {
      image.style.opacity = 1;
      image.style.transform = "translateY(0)";
    }, index * 300); // 300ms 간격으로 나타나도록 설정
  });
});

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
