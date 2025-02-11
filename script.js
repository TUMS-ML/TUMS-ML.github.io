document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar-st a");

    function setActiveLink() {
        let scrollPosition = window.scrollY + 60;

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

        if (scrollPosition + window.innerHeight >= document.documentElement.scrollHeight) {
            navLinks.forEach(link => link.classList.remove("active"));
            const lastSection = sections[sections.length - 1];
            const correspondingLink = document.querySelector(`.navbar-st a[href="#${lastSection.id}"]`);
            if (correspondingLink) {
                correspondingLink.classList.add("active");
            }
        }
    }

    setActiveLink();

    let isScrolling;
    window.addEventListener("scroll", () => {
        window.cancelAnimationFrame(isScrolling);
        isScrolling = window.requestAnimationFrame(setActiveLink);
    });
});


let contentDiv = document.getElementById("c-content");
let showMoreButton = document.createElement("a");
showMoreButton.textContent = "مشاهده بیشتر";
showMoreButton.classList.add("show-more-btn");

let hideButton = document.createElement("a");
hideButton.textContent = "مشاهده کمتر";
hideButton.classList.add("hide-btn");

let visibleCount = 2;

if (contentDiv && jsonData.length > 0) {
    function renderCategories() {
        contentDiv.innerHTML = "";

        jsonData.slice(0, visibleCount).forEach(categoryObj => {
            let categoryWrapper = document.createElement("div");
            categoryWrapper.classList.add("w-l");

            categoryWrapper.innerHTML = `
                <div class="info-txt d-flex">
                    <div class="circel-i"></div>
                    <p class="w-w">${categoryObj.time}</p>
                </div>
                <div class="w-i p-3" data-aos="fade-up">
                    <p class="w-tr">${categoryObj.category}</p>
                    <div class=""></div>
                </div>
            `;

            let itemsContainer = categoryWrapper.querySelector(".w-i > div");

            categoryObj.items.forEach(item => {
                let itemElement = document.createElement("div");
                itemElement.classList.add("w-r");
                itemElement.innerHTML = `
                    <svg viewBox="0 0 24 24" focusable="false" class="" stroke-width="0">
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path>
                    </svg>
                    <p class="chakra-text css-12gi881">${item}</p>
                `;
                itemsContainer.appendChild(itemElement);
            });

            contentDiv.appendChild(categoryWrapper);
        });

        if (visibleCount < jsonData.length) {
            contentDiv.appendChild(showMoreButton);
            hideButton.remove();
        } else {
            showMoreButton.remove();
            contentDiv.appendChild(hideButton);
        }
    }

    renderCategories();

    showMoreButton.addEventListener("click", function () {
        visibleCount += 2;
        renderCategories();
    });

    hideButton.addEventListener("click", function () {
        visibleCount = 2;
        renderCategories();
    });
} else {
    console.error("Element with ID 'c-content' not found or jsonData is empty.");
}


document.addEventListener("DOMContentLoaded", function () {
    var coll = document.getElementsByClassName("ls_col");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            var content = this.nextElementSibling;
            var isActive = this.classList.toggle("ls_active");

            for (var j = 0; j < coll.length; j++) {
                if (coll[j] !== this) {
                    coll[j].classList.remove("ls_active");
                    coll[j].nextElementSibling.style.maxHeight = null;
                }
            }

            content.style.maxHeight = isActive ? content.scrollHeight + "px" : null;
        });
    }
});