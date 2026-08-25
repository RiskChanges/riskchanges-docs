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

    /* Create lightbox */

    const lightbox = document.createElement("div");

    lightbox.id = "image-lightbox";

    lightbox.innerHTML = `
        <div class="lightbox-toolbar">

            <button class="lightbox-download" title="Download image">
                ↓ Download
            </button>

            <button class="lightbox-close" title="Close">
                ×
            </button>

        </div>

        <img class="lightbox-image" src="" alt="">
    `;

    document.body.appendChild(lightbox);


    const lightboxImage =
        lightbox.querySelector(".lightbox-image");

    const closeButton =
        lightbox.querySelector(".lightbox-close");

    const downloadButton =
        lightbox.querySelector(".lightbox-download");


    /* -----------------------------------------------------
       Open image
       ----------------------------------------------------- */

    images.forEach(function (img) {

        img.style.cursor = "zoom-in";

        img.addEventListener("click", function (event) {

            /*
             * IMPORTANT:
             * Prevent ReadTheDocs/Sphinx from opening
             * the image as a separate page.
             */
            event.preventDefault();
            event.stopPropagation();

            lightboxImage.src = img.src;
            lightboxImage.alt = img.alt || "";

            lightbox.classList.add("active");

            document.body.classList.add("lightbox-open");

        });

    });


    /* -----------------------------------------------------
       Close button
       ----------------------------------------------------- */

    closeButton.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();

        closeLightbox();

    });


    /* -----------------------------------------------------
       Click outside image = close
       ----------------------------------------------------- */

    lightbox.addEventListener("click", function (event) {

        if (
            event.target === lightbox ||
            event.target === lightboxImage
        ) {

            closeLightbox();

        }

    });


    /* -----------------------------------------------------
       ESC key = close
       ----------------------------------------------------- */

    document.addEventListener("keydown", function (event) {

        if (
            event.key === "Escape" &&
            lightbox.classList.contains("active")
        ) {

            closeLightbox();

        }

    });


    /* -----------------------------------------------------
       Download image
       ----------------------------------------------------- */

    downloadButton.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();

        const link = document.createElement("a");

        link.href = lightboxImage.src;
        link.download = "";

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);

    });


    /* -----------------------------------------------------
       Close function
       ----------------------------------------------------- */

    function closeLightbox() {

        lightbox.classList.remove("active");

        document.body.classList.remove("lightbox-open");

        /*
         * Clear image after closing.
         * This prevents stale images from remaining.
         */
        setTimeout(function () {
            lightboxImage.src = "";
        }, 200);

    }

});