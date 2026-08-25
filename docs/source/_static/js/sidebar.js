document.addEventListener("DOMContentLoaded", function () {

    const button = document.createElement("button");

    button.id = "sidebar-toggle";
    button.textContent = "☰";

    document.body.appendChild(button);

    button.addEventListener("click", function () {

        document.body.classList.toggle("sidebar-hidden");

        if (document.body.classList.contains("sidebar-hidden")) {
            button.textContent = "☰";
        } else {
            button.textContent = "☰";
        }

    });

    /* =====================================================
       Image Lightbox
       ===================================================== */

    const images = document.querySelectorAll(
        ".rst-content .figure img, .rst-content img"
    );

    const lightbox = document.createElement("div");
    lightbox.id = "image-lightbox";

    lightbox.innerHTML = `
        <div class="lightbox-close">×</div>
        <img src="" alt="">
    `;

    document.body.appendChild(lightbox);

    const lightboxImage = lightbox.querySelector("img");
    const closeButton = lightbox.querySelector(".lightbox-close");

    images.forEach(function (img) {

        img.style.cursor = "zoom-in";

        img.addEventListener("click", function () {

            lightboxImage.src = img.src;
            lightboxImage.alt = img.alt || "";

            lightbox.classList.add("active");

        });

    });

    closeButton.addEventListener("click", function () {
        lightbox.classList.remove("active");
    });

    lightbox.addEventListener("click", function (event) {

        if (event.target === lightbox) {
            lightbox.classList.remove("active");
        }

    });

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {
            lightbox.classList.remove("active");
        }

    });

});