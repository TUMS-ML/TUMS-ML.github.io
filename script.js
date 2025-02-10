document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar-st a");

    function setActiveLink() {
        let scrollPosition = window.scrollY + 60; // Adjust for fixed navbar height

        sections.forEach((section, index) => {
            const top = section.offsetTop;
            const bottom = top + section.clientHeight;

            if (scrollPosition >= top && scrollPosition < bottom) {
                navLinks.forEach(link => link.classList.remove("active"));
                const correspondingLink = document.querySelector(`.navbar-st a[href="#${section.id}"]`);
                if (correspondingLink) {
                    correspondingLink.classList.add("active");
                }
            }
        });

        // Handle the case when scrolled to the very bottom
        if (scrollPosition + window.innerHeight >= document.documentElement.scrollHeight) {
            navLinks.forEach(link => link.classList.remove("active"));
            const lastSection = sections[sections.length - 1];
            const correspondingLink = document.querySelector(`.navbar-st a[href="#${lastSection.id}"]`);
            if (correspondingLink) {
                correspondingLink.classList.add("active");
            }
        }
    }

    // Call setActiveLink on page load
    setActiveLink();

    // Use requestAnimationFrame for smoother scrolling
    let isScrolling;
    window.addEventListener("scroll", () => {
        window.cancelAnimationFrame(isScrolling);
        isScrolling = window.requestAnimationFrame(setActiveLink);
    });
});