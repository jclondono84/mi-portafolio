// Animar las barras de progreso cuando el usuario hace scroll hasta la sección de habilidades
document.addEventListener("scroll", function() {
    const skillsSection = document.getElementById("skills");
    const progressBars = document.querySelectorAll(".progress");

    if (window.scrollY + window.innerHeight >= skillsSection.offsetTop) {
        progressBars.forEach(function(progress) {
            let width = progress.classList.contains("frontend") ? "90%" :
                        progress.classList.contains("backend") ? "80%" :
                        progress.classList.contains("database") ? "70%" : "0";
            progress.style.width = width;
        });
    }
});