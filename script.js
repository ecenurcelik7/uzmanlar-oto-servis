"use strict";
console.log("Uzmanlar Oto Servis");
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

const reveals = document.querySelectorAll(".fade-up");

window.addEventListener("scroll", () => {

  reveals.forEach(section => {

    const top = section.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){
      section.classList.add("active");
    }

  });

});

const loader = document.querySelector(".loader");

if (loader) {

  window.addEventListener("load", () => {

    setTimeout(() => {

      loader.classList.add("hide");

      setTimeout(() => {

        loader.remove();

      }, 600);

    }, 800);

  });

}

const galleryImages =
document.querySelectorAll(".gallery img");

const lightbox =
document.querySelector(".lightbox");

const lightboxImg =
document.querySelector(".lightbox img");

if (lightbox) {

  galleryImages.forEach(img => {

    img.addEventListener("click", () => {

      lightbox.classList.add("active");
      lightboxImg.src = img.src;

    });

  });

  lightbox.addEventListener("click", () => {

    lightbox.classList.remove("active");

  });

}



window.addEventListener("scroll",()=>{

  const header =
  document.querySelector("header");

  header.classList.toggle(
    "sticky",
    window.scrollY > 50
  );

});

const topBtn =
document.querySelector(".top-btn");

if (topBtn) {

  window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
      topBtn.classList.add("show");
    } else {
      topBtn.classList.remove("show");
    }

  });

}

const counters =
document.querySelectorAll(".counter");


if (counters.length > 0) {

  counters.forEach(counter => {

    const updateCounter = () => {

      const target =
      +counter.getAttribute("data-target");

      const count =
      +counter.innerText;

      const increment =
      target / 100;

      if (count < target) {

        counter.innerText =
        Math.ceil(count + increment);

        setTimeout(updateCounter, 20);

      } else {

        counter.innerText = target;

      }

    };

    updateCounter();

  });

}


const messageBox =
document.getElementById("message");

const charCount =
document.getElementById("charCount");

if (messageBox && charCount) {

  messageBox.addEventListener("input", () => {

    charCount.textContent =
      messageBox.value.length + " / 500";

  });

}

const contactForm =
document.getElementById("contactForm");

if (contactForm) {

  contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const btn =
    contactForm.querySelector("button");

    btn.innerText = "Gönderiliyor...";
    btn.disabled = true;

    const templateParams = {
      name:
      document.getElementById("name").value,

      phone:
      document.getElementById("phone").value,

      email:
      document.getElementById("email").value,

      message:
      document.getElementById("message").value
    };

emailjs.send(
  "service_91rduun",
  "template_roj2tat",
  templateParams
)

.then(() => {

  emailjs.send(
    "service_91rduun",
    "template_7xvsgha",
    templateParams
  );

  alert("Mesajınız başarıyla gönderildi.");

  contactForm.reset();

  const charCount = document.getElementById("charCount");

  if (charCount) {
    charCount.textContent = "0 / 500";
  }

  btn.innerText = "Mesaj Gönder";
  btn.disabled = false;

})

      alert(
        "Mesajınız başarıyla gönderildi."
      );

      contactForm.reset();

      const charCount =
      document.getElementById("charCount");

      if (charCount) {
        charCount.textContent =
        "0 / 500";
      }

      btn.innerText =
      "Mesaj Gönder";

      btn.disabled = false;

    })
    .catch((error) => {

      console.log(error);

      alert(
        "Mesaj gönderilemedi."
      );

      btn.innerText =
      "Mesaj Gönder";

      btn.disabled = false;

    });


}

function showGallery(id, button){

  document
    .querySelectorAll(".gallery-section")
    .forEach(section=>{
      section.classList.remove("active");
    });

  document
    .querySelectorAll(".tab-btn")
    .forEach(btn=>{
      btn.classList.remove("active");
    });

  document
    .getElementById(id)
    .classList.add("active");

  button.classList.add("active");
}

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

  link.addEventListener("click", () => {

    if(nav.classList.contains("active")){
      nav.classList.remove("active");
    }

  });

});