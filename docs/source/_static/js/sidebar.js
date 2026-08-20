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

});