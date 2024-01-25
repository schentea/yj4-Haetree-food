document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggle");
  const label = document.getElementById("label");
  const category = document.getElementById("category");
  const closeBtn = document.getElementById("closeBtn");

  function closeMenu() {
    toggleButton.checked = false;
    label.style.display = "block";
    closeBtn.style.display = "none";
    category.style.height = "0";
  }

  toggleButton.addEventListener("change", function () {
    if (toggleButton.checked) {
      label.style.display = "none";
      closeBtn.style.display = "block";
      category.style.height = category.scrollHeight + "px";
    } else {
      closeMenu();
    }
  });

  closeBtn.onclick = function () {
    closeMenu();
  };
});
