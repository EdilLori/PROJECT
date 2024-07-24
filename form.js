document.addEventListener("DOMContentLoaded", function() {
    var openFormBtn = document.getElementById("openFormBtn");
    var closeFormBtn = document.getElementById("closeFormBtn");
    var overlay = document.getElementById("overlay");
    var formContainer = document.getElementById("formContainer");

    openFormBtn.addEventListener("click", function() {
        overlay.style.display = "block";
        formContainer.style.display = "block";
    });

    closeFormBtn.addEventListener("click", function() {
        overlay.style.display = "none";
        formContainer.style.display = "none";
    });

    overlay.addEventListener("click", function() {
        overlay.style.display = "none";
        formContainer.style.display = "none";
    });
});