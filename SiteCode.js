document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const link = button.getAttribute("data-link");
            window.open(link, "_blank");
        });
    });
});
