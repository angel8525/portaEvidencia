document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".img-zoomable").forEach(function (img) {
    img.addEventListener("click", function () {
      const overlay = document.createElement("div");
      overlay.classList.add("zoom-overlay");

      const zoomedImg = document.createElement("img");
      zoomedImg.src = img.src;
      overlay.appendChild(zoomedImg);

      overlay.addEventListener("click", function () {
        document.body.removeChild(overlay);
      });

      document.body.appendChild(overlay);
    });
  });
});
