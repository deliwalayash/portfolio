document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById("preloader");
    const content = document.getElementById("content");
  
    // Hide preloader and show content after 3 seconds
    setTimeout(() => {
      preloader.style.opacity = "0";
      preloader.style.visibility = "hidden";
      content.style.display = "block";
  
      // Fade in the content
      setTimeout(() => {
        content.style.opacity = "1";
      }, 100);
    }, 300);
  });
  