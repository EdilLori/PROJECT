document.addEventListener("DOMContentLoaded", function() {
    var openFormBtn = document.getElementById("openFormBtn");
    var overlay = document.getElementById("overlay");
    var formContainer = document.getElementById("formContainer");

    openFormBtn.addEventListener("click", function() {
        overlay.style.display = "block";
        formContainer.style.display = "block";
    });

    overlay.addEventListener("click", function(event) {
        if (event.target === overlay) {
            overlay.style.display = "none";
            formContainer.style.display = "none";
        }
    });
});
