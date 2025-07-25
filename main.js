window.onload = function () {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.style.opacity = 0;
    section.style.transform = "translateY(20px)";
    setTimeout(() => {
      section.style.transition = "opacity 0.5s, transform 0.5s";
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }, 100);
  });
};
