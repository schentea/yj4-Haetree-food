document.addEventListener("DOMContentLoaded", function () {
  let currentSectionIndex = 0;
  const sections = document.querySelectorAll("#productRev1, #productRev2, #productRev3");
  const totalSections = sections.length;

  function showSection(index) {
    sections.forEach((section, i) => {
      if (i === index) {
        section.classList.add("active"); // active 클래스 추가
      } else {
        section.classList.remove("active"); // active 클래스 제거
      }
    });
  }

  function nextSection() {
    currentSectionIndex = (currentSectionIndex + 1) % totalSections;
    showSection(currentSectionIndex);
  }

  function prevSection() {
    currentSectionIndex = (currentSectionIndex - 1 + totalSections) % totalSections;
    showSection(currentSectionIndex);
  }

  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  nextBtn.addEventListener("click", nextSection);
  prevBtn.addEventListener("click", prevSection);

  // 초기 로딩 시 첫 번째 섹션 표시
  showSection(currentSectionIndex);
});