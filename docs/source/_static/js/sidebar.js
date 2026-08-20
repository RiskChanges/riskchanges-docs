document.addEventListener("DOMContentLoaded", function () {

    const button = document.createElement("button");

    button.id = "sidebar-toggle";
    button.textContent = "Hide navigation";

    document.body.appendChild(button);

    button.addEventListener("click", function () {

        document.body.classList.toggle("sidebar-hidden");

        if (document.body.classList.contains("sidebar-hidden")) {
            button.textContent = "Show navigation";
        } else {
            button.textContent = "Hide navigation";
        }

    });

});