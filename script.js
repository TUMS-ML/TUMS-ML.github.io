document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar-st a");

    function setActiveLink() {
        let scrollPosition = window.scrollY;

        sections.forEach((section, index) => {
            const top = section.offsetTop + 10;
            const bottom = top + section.clientHeight;

            if (scrollPosition >= top && scrollPosition < bottom) {
                navLinks.forEach(link => link.classList.remove("active"));
                navLinks[index].classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", setActiveLink);
});