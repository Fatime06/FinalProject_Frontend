
document.addEventListener("DOMContentLoaded", () => {

    const dropdown = document.getElementById("sidebar-dropdown");
    const toggleBtn = document.querySelector(".sidebar-icon");

    toggleBtn.addEventListener("click", () => {
        dropdown.classList.toggle("active");
    });

    // Xaricə klik → bağlanır
    document.addEventListener("click", (e) => {
        if (!dropdown.contains(e.target) && !toggleBtn.contains(e.target)) {
            dropdown.classList.remove("active");
        }
    });

});