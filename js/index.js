const galleryImages = Array.from(document.querySelectorAll(".gallery-img"));
const galleryFullscreen = document.querySelector(".gallery-fullscreen")
const galleryCloseButton = document.querySelector(".gallery-close")
const siteOverlay = document.querySelector(".site-overlay");

//START NAVBAR

const navbar = document.querySelector(".navbar")
const navbarMobile = document.querySelector(".navbar-mobile")
const hamburger = document.querySelector("#hamburger")
const mobileLinks = document.querySelector("#navbar-mobile__links")
//mobile nav
hamburger.addEventListener("click", (e) => {
    if (!mobileLinks.classList.contains("is-showing")) {
        mobileLinks.classList += " is-showing"
        hamburger.classList += " is-showing"
        navbarMobile.classList += " is-scrolling"
    }
    else {
        mobileLinks.classList.remove("is-showing")
        hamburger.classList.remove("is-showing")
    }
})

//show navbar when scrolling up, hide when scrolling down
let oldScrollPosY = 0;
let hasCountedUp = false;
window.addEventListener("scroll", () => {

    setTimeout(() => {
        oldScrollPosY = window.scrollY;
    }, 50);

    if (window.scrollY > oldScrollPosY) { //scrolled down, show/hide navbar, show scroll up btn
        navbar.classList.remove("is-scrolling-up")
        if (!navbar.classList.contains("is-scrolling-down")) {
            navbar.classList += " is-scrolling-down";
            buttonScrollUp.classList += " is-showing";
        }

        if (!navbarMobile.classList.contains("is-scrolling")) {
            navbarMobile.classList += " is-scrolling";
        }

    }
    if (window.scrollY < oldScrollPosY) { //scrolled up, show navbar
        navbar.classList.remove("is-scrolling-down")
        if (!navbar.classList.contains("is-scrolling-up"))
            navbar.classList += " is-scrolling-up";

    }
    if (window.scrollY <= 16) { //reset navbar if at top
        navbar.classList.remove("is-scrolling-up")
        navbar.classList.remove("is-scrolling-down")
        navbarMobile.classList.remove("is-scrolling")
        buttonScrollUp.classList.remove("is-showing")
    }
    //count up numbers if at numbers section
    if (window.scrollY > numbersSection.getBoundingClientRect().top && !hasCountedUp) {
        countUpNumbers();
        hasCountedUp = true;
    }
})

//END NAVBAR

//scroll up button

const buttonScrollUp = document.querySelector(".button--scroll-up")
buttonScrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
})

//hero carousel
const heroSlides = document.querySelectorAll(".hero__slide")
const heroDots = document.querySelectorAll(".hero-dot")
heroDots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        heroSlides.forEach((slide, j) => {
            heroDots[j].classList.remove("is-active")
            slide.classList.remove("is-showing")
        })
        heroSlides[i].classList.toggle("is-showing")
        heroDots[i].classList.toggle("is-active")
    })
})

const heroArrowNext = document.querySelector(".hero-next")
heroArrowNext.addEventListener("click", () => {
    let currIndex = 0;
    heroSlides.forEach((slide, j) => {
        if (slide.classList.contains("is-showing")) currIndex = j
        heroDots[j].classList.remove("is-active")
        slide.classList.remove("is-showing")
    })
    currIndex++;
    if (currIndex > heroSlides.length - 1) currIndex = 0
    heroSlides[currIndex].classList.toggle("is-showing")
    heroDots[currIndex].classList.toggle("is-active")

})

const heroArrowPrev = document.querySelector(".hero-prev")
heroArrowPrev.addEventListener("click", () => {
    let currIndex = 0;
    heroSlides.forEach((slide, j) => {
        if (slide.classList.contains("is-showing")) currIndex = j
        heroDots[j].classList.remove("is-active")
        slide.classList.remove("is-showing")
    })
    currIndex--;
    if (currIndex < 0) currIndex = heroSlides.length - 1
    heroSlides[currIndex].classList.toggle("is-showing")
    heroDots[currIndex].classList.toggle("is-active")

})

//testimonial carousel
const testimonialSlides = document.querySelectorAll(".testimonial")
const testimonialDots = document.querySelectorAll(".testimonial-dot")
testimonialDots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        testimonialSlides.forEach((slide, j) => {
            testimonialDots[j].classList.remove("is-active")
            slide.classList.remove("is-showing")
        })
        testimonialSlides[i].classList.toggle("is-showing")
        testimonialDots[i].classList.toggle("is-active")
    })
})

const testimonialArrowNext = document.querySelector(".testimonial-next")
testimonialArrowNext.addEventListener("click", () => {
    let currIndex = 0;
    testimonialSlides.forEach((slide, j) => {
        if (slide.classList.contains("is-showing")) currIndex = j
        testimonialDots[j].classList.remove("is-active")
        slide.classList.remove("is-showing")
    })
    currIndex++;
    if (currIndex > testimonialSlides.length - 1) currIndex = 0
    testimonialSlides[currIndex].classList.toggle("is-showing")
    testimonialDots[currIndex].classList.toggle("is-active")

})

const testimonialArrowPrev = document.querySelector(".testimonial-prev")
testimonialArrowPrev.addEventListener("click", () => {
    let currIndex = 0;
    testimonialSlides.forEach((slide, j) => {
        if (slide.classList.contains("is-showing")) currIndex = j
        testimonialDots[j].classList.remove("is-active")
        slide.classList.remove("is-showing")
    })
    currIndex--;
    if (currIndex < 0) currIndex = testimonialSlides.length - 1
    testimonialSlides[currIndex].classList.toggle("is-showing")
    testimonialDots[currIndex].classList.toggle("is-active")

})

//profile carousel on mobile
const profileSlides = document.querySelectorAll(".profile__slide")
const profileDots = document.querySelectorAll(".profile-dot")
profileDots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        profileSlides.forEach((slide, j) => {
            profileDots[j].classList.remove("is-active")
            slide.classList.remove("is-showing")
        })
        profileSlides[i].classList.toggle("is-showing")
        profileDots[i].classList.toggle("is-active")
    })
})

//profile slider next back arrows
const profileArrowNext = document.querySelector(".profile-next")
profileArrowNext.addEventListener("click", () => {
    let currIndex = 0;
    profileSlides.forEach((slide, j) => {
        if (slide.classList.contains("is-showing")) currIndex = j
        profileDots[j].classList.remove("is-active")
        slide.classList.remove("is-showing")
    })
    currIndex++;
    if (currIndex > profileSlides.length - 1) currIndex = 0
    profileSlides[currIndex].classList.toggle("is-showing")
    profileDots[currIndex].classList.toggle("is-active")

})

const profileArrowPrev = document.querySelector(".profile-prev")
profileArrowPrev.addEventListener("click", () => {
    let currIndex = 0;
    profileSlides.forEach((slide, j) => {
        if (slide.classList.contains("is-showing")) currIndex = j
        profileDots[j].classList.remove("is-active")
        slide.classList.remove("is-showing")
    })
    currIndex--;
    if (currIndex < 0) currIndex = profileSlides.length - 1
    profileSlides[currIndex].classList.toggle("is-showing")
    profileDots[currIndex].classList.toggle("is-active")

})

//apply actual height to absolute position carousel profiles, so it doesnt overflow
const profileContainer = document.querySelector(".profile")
const profileTexts = document.querySelectorAll(".profile__text")
let profileDesktopSize = 0;
window.addEventListener("resize", () => {
    if (window.innerWidth <= 767) {
        profileSlides.forEach((slide, i) => {
            if (slide.classList.contains("is-showing")) {
                profileContainer.style.height = (670 + profileTexts[i].clientHeight) + "px";
            }
        })
    }
    else profileContainer.style.height = "600px"
})

//count numbers up
const numbers = document.querySelectorAll(".numbers")
const numbersSection = document.querySelector(".numbers-1")
function countUpNumbers() {
    numbers.forEach(number => {
        const oldNum = parseInt(number.textContent)
        let currNum = 0
        const timeToComplete = 200
        const step = oldNum / timeToComplete
        number.textContent = 0

        setTimeout(() => {
            const countUp = setInterval(myMethod, 10)

            function myMethod() {
                if (currNum >= oldNum) clearInterval(countUp)
                currNum = currNum + step
                number.textContent = parseInt(currNum)
            }
        }, 500);


    })
}

//expandable image gallery

galleryImages.forEach(function (img) {
    img.addEventListener("click", function (e) {
        if (!img.classList.contains("is-expanded")) {
            img.className += " is-expanded";
            //set the img src to the bigger image by removing "-small.jpg" from end off image and appending .jpg to end
            //but only filename contains "small"
            if (img.src.includes("small"))
                img.src = imgElement.src.substring(0, img.src.length - 10) + ".jpg"
            siteOverlay.className += " is-visible is-gallery";
            galleryFullscreen.className += " is-visible";
        }
    });
});
galleryCloseButton.addEventListener("click", function (e) {
    galleryImages.forEach(function (img) {
        if (img.classList.contains("is-expanded")) {
            img.classList.remove("is-expanded");
            siteOverlay.classList.remove("is-visible");
            galleryFullscreen.classList.remove("is-visible");
            siteOverlay.classList.remove("is-gallery");
        }
    });
});

var closeButtons = document.querySelectorAll(".button-close");
closeButtons.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        btn.parentElement.classList.remove("is-visible");
        btn.parentElement.classList.remove("is-expanded");
        siteOverlay.classList.remove("is-visible");
    });
});
var galleryNext = document.querySelector(".gallery-next");
galleryNext.addEventListener("click", function (e) {
    var currIndex;
    galleryImages.forEach(function (img) {
        if (img.classList.contains("is-expanded")) {
            img.classList.remove("is-expanded");
            currIndex = galleryImages.indexOf(img);
        }
    });
    if (galleryImages[currIndex + 1]) galleryImages[currIndex + 1].className += " is-expanded"; else galleryImages[0].className += " is-expanded";
});
var galleryPrev = document.querySelector(".gallery-prev");
galleryPrev.addEventListener("click", function (e) {
    var currIndex;
    galleryImages.forEach(function (img) {
        if (img.classList.contains("is-expanded")) {
            img.classList.remove("is-expanded");
            currIndex = galleryImages.indexOf(img);
        }
    });
    if (galleryImages[currIndex - 1]) galleryImages[currIndex - 1].className += " is-expanded"; else galleryImages[galleryImages.length - 1].className += " is-expanded";
}); //lazy loaded youtube embeds with preview

function scrollToElement(yPos) {
    window.scrollTo({
        top: yPos,
        behavior: "smooth"
    })
}
const linksAbout = document.querySelectorAll("[data-js='link-about']")
const linksEvents = document.querySelectorAll("[data-js='link-events']")
const linksTestimonials = document.querySelectorAll("[data-js='link-testimonials']")
const linksContact = document.querySelectorAll("[data-js='link-contact']")
const sectionAbout = document.querySelector(".profile")
const sectionEvents = document.querySelector(".events")
const sectionTestimonials = document.querySelector(".testimonials")
const sectionContact = document.querySelector(".contact")

linksAbout.forEach(linkAbout => {
    linkAbout.addEventListener("click", () => {
        scrollToElement(sectionAbout.offsetTop)
    })
})
linksEvents.forEach(linkEvents => {
    linkEvents.addEventListener("click", () => {
        scrollToElement(sectionEvents.offsetTop)
    })
})
linksTestimonials.forEach(linkTestimonials => {
    linkTestimonials.addEventListener("click", () => {
        scrollToElement(sectionTestimonials.offsetTop)
    })
})
linksContact.forEach(linkContact => {
    linkContact.addEventListener("click", () => {
        scrollToElement(sectionContact.offsetTop)
    })
})
