document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("bgVideo");
  if (window.innerWidth > 768) {
    video.src = "assets/videos/forest_pc.mp4";
  } else {
    video.src = "assets/videos/forest_phone.mp4";
  }
});
// Custom JS can go here
