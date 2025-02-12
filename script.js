document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar-st");
    const navbarOffset = navbar.offsetTop;

    window.addEventListener("scroll", function () {
        if (window.scrollY >= navbarOffset) {
            navbar.classList.add("fixed-navbar");
        } else {
            navbar.classList.remove("fixed-navbar");
        }
    });
});


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
                <div class="info-txt mb-3 d-flex">
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
                    <svg class="svg-snoweb svg-theme-light" height="100" preserveaspectratio="xMidYMid meet" viewbox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
                        <path class="svg-fill-primary" d="M56.011,38.623l-6.011,3.005-6.011-3.005c-1.977-.988-4.378-.187-5.367,1.789-.988,1.976-.187,4.379,1.789,5.367l5.589,2.794v7.328c0,2.209,1.791,4,4,4s4-1.791,4-4v-7.328l5.589-2.794c1.976-.988,2.776-3.391,1.789-5.367-.989-1.977-3.393-2.777-5.367-1.789Z">
                        </path>
                        <path class="svg-fill-primary" d="M85.39,30.293c-.002-.094-.01-.186-.019-.28-.01-.097-.022-.192-.038-.287-.013-.078-.027-.156-.045-.233-.019-.08-.042-.158-.066-.237-.027-.092-.058-.181-.092-.271-.033-.086-.066-.171-.105-.255-.015-.033-.022-.069-.038-.102-.017-.035-.042-.063-.061-.097-.043-.082-.09-.161-.139-.24-.051-.081-.103-.16-.159-.237-.045-.062-.09-.125-.138-.184-.054-.067-.113-.129-.172-.192-.064-.069-.13-.135-.199-.199-.061-.057-.121-.114-.185-.166-.061-.05-.125-.096-.189-.143-.078-.057-.159-.11-.241-.161-.076-.047-.151-.092-.23-.134-.036-.019-.065-.045-.101-.063l-7.9-3.9c-1.982-.978-4.38-.165-5.357,1.816-.978,1.981-.165,4.379,1.816,5.357l.634,.313-.634,.313c-1.981,.978-2.794,3.376-1.816,5.357,.697,1.412,2.115,2.23,3.59,2.23,.595,0,1.198-.133,1.768-.414l2.13-1.051v3.365c0,2.209,1.791,4,4,4s4-1.791,4-4v-9.8c0-.037-.01-.071-.011-.107Z">
                        </path>
                        <path class="svg-fill-primary" d="M59.589,15.022l-7.8-3.9c-1.127-.563-2.451-.563-3.578,0l-7.8,3.9c-1.976,.988-2.776,3.391-1.789,5.367,.987,1.976,3.392,2.776,5.367,1.789l6.011-3.005,6.011,3.005c.574,.287,1.185,.423,1.786,.423,1.467,0,2.88-.811,3.581-2.212,.987-1.976,.187-4.379-1.789-5.367Z" opacity=".5">
                        </path>
                        <path class="svg-fill-primary" d="M30.087,24.729c-.979-1.981-3.379-2.793-5.357-1.816l-7.9,3.9c-.037,.018-.066,.044-.101,.063-.079,.042-.154,.087-.231,.134-.083,.051-.163,.104-.241,.161-.064,.047-.128,.092-.189,.142-.065,.053-.125,.11-.186,.167-.069,.064-.135,.13-.2,.199-.058,.063-.117,.124-.171,.19-.049,.06-.094,.122-.14,.185-.056,.078-.109,.157-.16,.238-.049,.078-.095,.156-.138,.237-.018,.035-.044,.063-.061,.098-.016,.033-.023,.069-.038,.102-.039,.084-.072,.169-.105,.255-.034,.089-.063,.177-.091,.268-.024,.079-.048,.158-.066,.238-.018,.077-.031,.155-.045,.234-.016,.095-.028,.19-.038,.286-.009,.094-.017,.186-.019,.28,0,.037-.011,.071-.011,.108v9.8c0,2.209,1.791,4,4,4s4-1.791,4-4v-3.365l2.129,1.051c.569,.281,1.173,.414,1.768,.414,1.474,0,2.893-.819,3.59-2.23,.978-1.981,.165-4.379-1.816-5.357l-.634-.313,.634-.313c1.981-.978,2.794-3.376,1.816-5.357Z">
                        </path>
                        <path class="svg-fill-primary" d="M56.011,77.822l-2.011,1.005v-3.328c0-2.209-1.791-4-4-4s-4,1.791-4,4v3.328l-2.011-1.005c-1.975-.987-4.378-.187-5.366,1.789-.988,1.977-.187,4.379,1.789,5.367l7.8,3.899c.021,.01,.043,.013,.064,.023,.05,.024,.099,.053,.15,.075,.03,.013,.062,.02,.092,.032,.168,.067,.341,.123,.516,.167,.036,.009,.072,.019,.109,.027,.047,.01,.096,.017,.144,.025,.231,.042,.465,.071,.702,.072h.023c.237,0,.471-.03,.702-.072,.048-.009,.096-.015,.144-.025,.037-.008,.073-.018,.109-.027,.175-.044,.347-.099,.514-.166,.031-.012,.064-.02,.094-.033,.051-.022,.098-.05,.148-.074,.022-.01,.045-.013,.067-.024l7.8-3.899c1.976-.988,2.776-3.391,1.789-5.367-.989-1.976-3.393-2.777-5.367-1.789Z">
                        </path>
                        <path class="svg-fill-primary" d="M28.271,69.913l-5.671-2.8v-7.313c0-2.209-1.791-4-4-4s-4,1.791-4,4v9.8c0,1.522,.864,2.913,2.229,3.587l7.9,3.9c.569,.281,1.173,.414,1.768,.414,1.474,0,2.893-.818,3.589-2.23,.978-1.98,.165-4.379-1.815-5.357Z" opacity=".5">
                        </path>
                        <path class="svg-fill-primary" d="M81.4,55.8c-2.209,0-4,1.791-4,4v7.313l-5.671,2.8c-1.981,.979-2.794,3.377-1.816,5.357,.697,1.412,2.115,2.23,3.59,2.23,.595,0,1.198-.133,1.768-.414l7.9-3.9c1.365-.674,2.229-2.064,2.229-3.587v-9.8c0-2.209-1.791-4-4-4Z" opacity=".5">
                        </path>
                    </svg>
                    <p>${item}</p>
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

document.addEventListener("DOMContentLoaded", function () {

    const faqContainer = document.getElementById("faq-container");

    qadata.forEach((item, index) => {
        const box = document.createElement("div");
        box.className = "box mb-3";

        const button = document.createElement("button");
        button.type = "button";
        button.className = "ls_col";
        button.setAttribute("data-aos", index % 2 === 0 ? "fade-right" : "fade-left");
        button.textContent = item.title;

        const content = document.createElement("div");
        content.className = "ls_content";
        content.style.maxHeight = null;

        const paragraph = document.createElement("p");
        paragraph.className = "p-4 mt-2";
        paragraph.textContent = item.dis;

        content.appendChild(paragraph);
        box.appendChild(button);
        box.appendChild(content);
        faqContainer.appendChild(box);
    });

    var coll = document.getElementsByClassName("ls_col");

    for (var i = 0; i < coll.length; i++) {
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

function clickHandler() {
    setTimeout(() => {
        window.location.href = "https://github.com/Ali-Ghanbarii/";
    }, 1800);
}