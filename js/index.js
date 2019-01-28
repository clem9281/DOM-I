const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// nav a
let navLinks = document.querySelectorAll("nav a");
navLinks.forEach((element, index) => {
  element.textContent = siteContent.nav[`nav-item-${index + 1}`];
});

// STRETCH: APPEND AND PREPEND NAVIGATION ITEMS
let appendNav = document.createElement("a");
appendNav.textContent = "An Appended Item";
appendNav.href = "#";
document.querySelector("nav").appendChild(appendNav);

let prependNav = document.createElement("a");
prependNav.textContent = "A Prepended Item";
prependNav.href = "#";
document.querySelector("nav").prepend(prependNav);

// section class cta h1
let ctaHeader = document.querySelector(".cta-text h1");
// you have to add <br/> to the text provided in siteContent
ctaHeader.innerHTML = siteContent.cta.h1.replace(/\s/g, " <br/> ");

// section class cta image
let ctaImage = document.getElementById("cta-img");
ctaImage.src = siteContent.cta["img-src"];

//section class cta button
let ctaButton = document.querySelector(".cta button");
ctaButton.textContent = siteContent.cta.button;

// section class main content top content
let topContent = document.querySelectorAll(".top-content .text-content");
//features
topContent[0].firstElementChild.textContent =
  siteContent["main-content"]["features-h4"];
topContent[0].lastElementChild.textContent =
  siteContent["main-content"]["features-content"];
//about
topContent[1].firstElementChild.textContent =
  siteContent["main-content"]["about-h4"];
topContent[1].lastElementChild.textContent =
  siteContent["main-content"]["about-content"];

// middle image
let middleImage = document.getElementById("middle-img");
middleImage.src = siteContent["main-content"]["middle-img-src"];

// section class bottom content
let bottomContent = document.querySelectorAll(".bottom-content .text-content");
//services
bottomContent[0].firstElementChild.textContent =
  siteContent["main-content"]["services-h4"];
bottomContent[0].lastElementChild.textContent =
  siteContent["main-content"]["services-content"];
//product
bottomContent[1].firstElementChild.textContent =
  siteContent["main-content"]["product-h4"];
bottomContent[1].lastElementChild.textContent =
  siteContent["main-content"]["product-content"];
//vision
bottomContent[2].firstElementChild.textContent =
  siteContent["main-content"]["vision-h4"];
bottomContent[2].lastElementChild.textContent =
  siteContent["main-content"]["vision-content"];

// section class contact
let contact = document.querySelector(".contact");
// h4
contact.children[0].textContent = siteContent.contact["contact-h4"];
// first p
contact.children[1].textContent = siteContent.contact.address;
contact.children[1].style.width = "20%";
// second p
contact.children[2].textContent = siteContent.contact.phone;
// third p
contact.children[3].textContent = siteContent.contact.email;

// footer
let footer = document.querySelector("footer p");
footer.textContent = siteContent.footer.copyright;
