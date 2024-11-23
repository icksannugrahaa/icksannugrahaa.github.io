document.addEventListener("DOMContentLoaded", () => {
    const scrollBtn = document.getElementById("scroll-top");
    const themeToggle = document.getElementById("theme-toggle");
    let darkMode = false;

    // Show Scroll-to-Top button on scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    });

    // Scroll to top on button click
    scrollBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Toggle Dark Mode
    themeToggle.addEventListener("click", () => {
        darkMode = !darkMode;
        document.body.classList.toggle("dark-mode", darkMode);
        themeToggle.textContent = darkMode ? "☀️" : "🌙";
    });
});
