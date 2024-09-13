const companyLogo = document.querySelector(".company_logo");
const videoCover = document.querySelector(".videoCover");
const mobileNavbar = document.querySelector(".mobileNavbar");
const mobileNavbar_sideNavBar = document.querySelector(".mobileNavbar_sideNavBar");
const iconHamburger = document.querySelector(".icon-hamburger");
const iconClose = document.querySelector(".icon-close");
const versionDropDown = document.querySelector(".versionDropDown");
const cardImage = document.querySelector("#cardImage");
const downloadBTN = document.querySelector("#downloadBTN");
const versionDropDown2 = document.querySelector("#versionDropDown2");
const purchaseBTN = document.querySelector("#purchaseBTN");
const cardImage2 = document.querySelector("#cardImage2");

iconHamburger.addEventListener("click", navBarOpen);
iconClose.addEventListener("click", closeNavBar);

versionDropDown.addEventListener("change", (e) => {
    switch (e.target.value) {
        case "version01":
            downloadBTN.setAttribute("href", "https://github.com/TempleDevelopment/Temple-Client/releases/download/Release-1.9.7/templeclient-1.9.7.jar");
            downloadBTN.textContent = "Download";
            cardImage.setAttribute("src", "./images/1.9.7.jpg");
            break;
        case "version02":
            downloadBTN.setAttribute("href", "https://github.com/TempleDevelopment/Temple-Client/releases/download/Release-1.9.6/templeclient-1.9.6.jar");
            downloadBTN.textContent = "Download";
            cardImage.setAttribute("src", "./images/1.9.6.jpg");
            break;
        case "version03":
            downloadBTN.setAttribute("href", "https://github.com/TempleDevelopment/Temple-Client/releases/download/Release-1.9.5/templeclient-1.9.5.jar");
            downloadBTN.textContent = "Download";
            cardImage.setAttribute("src", "./images/1.9.5.jpg");
            break;
        case "versionOlder":
            downloadBTN.setAttribute("href", "https://github.com/TempleDevelopment/Temple-Client/releases");
            downloadBTN.textContent = "Open Link";
            cardImage.setAttribute("src", "./images/Older.jpg");
            break;
        case "version04":
            downloadBTN.setAttribute("href", "./downloads/templeclient-cape.jpg");
            downloadBTN.textContent = "Download";
            cardImage.setAttribute("src", "./images/templeclient-rewrite.jpg");
            break;
        case "version05":
            downloadBTN.setAttribute("href", "#");
            downloadBTN.textContent = "Coming Soon";
            break;
    }
});

versionDropDown2.addEventListener("change", (e) => {
    switch (e.target.value) {
        case "version04":
            purchaseBTN.textContent = "Coming Soon";
            cardImage2.setAttribute("src", "./images/templeclient-rewrite.jpg");
            break;
        case "version05": // Temple Client 1.20.4 Beta
            purchaseBTN.textContent = "Coming Soon";
            cardImage2.setAttribute("src", "./images/templeclient-rewrite.jpg");
            break;
    }
});

function navBarOpenAndClose() {
    mobileNavbar.classList.toggle("mainNavbarShow");
    mobileNavbar_sideNavBar.classList.toggle("hideMobileNav");
}

function navBarOpen() {
    iconHamburger.style.display = "none";
    iconClose.style.display = "block";
    document.body.style.overflow = "hidden";
    navBarOpenAndClose();
}

function closeNavBar() {
    iconHamburger.style.display = "block";
    iconClose.style.display = "none";
    document.body.style.overflowY = "auto";
    navBarOpenAndClose();
}




videoCover.addEventListener("click", () => {
    videoCover.style.visisbility = "hidden";
    videoCover.style.opacity = "0";
    playYouTubeVideo();
});

window.onscroll = function () {
    if (Math.floor(window.pageYOffset) >= 250) {
        setTimeout(() => {
            companyLogo.style.width = "75%";
        }, 500);
    } else {
        setTimeout(() => {
            companyLogo.style.width = "100%";
        }, 500);
    }
}

function playYouTubeVideo() {
    var videoContainer = document.querySelector('.video');

    var embedCode = `<iframe width="560" height="315" src="https://www.youtube.com/embed/9P4cxIGutD4?si=XDNMkVw1R_t0vaif" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;

    videoContainer.innerHTML = embedCode;
}


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.remove("animatedElement");
        } else {
            entry.target.classList.add("animatedElement");
        }
    });
});

const hiddentElements = document.querySelectorAll(".animatedElement");
hiddentElements.forEach((el) => observer.observe(el));