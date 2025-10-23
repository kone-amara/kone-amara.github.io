// const { version } = require("react");

// // typing Animation
// var typed = new Typed(".typing", {
//       strings: ["développeur d'applications", "graphic designer", "UI/UX designer"],
//       typeSpeed: 100,
//       backSpeed: 40,
//       loop: true
// });

// Toogle class active for navbar options
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length;

for (let i = 0; i < totalNavList; i++) {
      const a = navList[i].querySelector("a");
      a.addEventListener("click", function () {
            for (let j = 0; j < totalNavList; j++) {
                  navList[j].querySelector("a").classList.remove("active");
            }
            a.classList.add("active");
      });
}

// Toogle class active for aside
const navTogglerBtn = document.querySelector(".nav-toggler"),
      aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", function () {
      aside.classList.toggle("active");
});

// toggle class active when scrolling
AllSections = document.querySelectorAll(".section");
window.addEventListener("scroll", () => {
      if(aside.classList.contains("active")){
            aside.classList.remove("active");
      }
      let scrollY = window.pageYOffset;
      AllSections.forEach(sec => {
            const sectionTop = sec.offsetTop;
            const sectionHeight = sec.offsetHeight;
            const sectionId = sec.getAttribute("id");
            if (scrollY >= sectionTop - 50 && scrollY < sectionTop + sectionHeight - 50) {
                  navList.forEach(li => {
                        li.querySelector("a").classList.remove("active");
                        if (li.querySelector("a").getAttribute("href") === `#${sectionId}`) {
                              li.querySelector("a").classList.add("active");
                        }
                  });
            }
      });
});

const age = document.getElementById("age");
const calculateAge = () => {
      const birthDate = new Date("2005-08-09");
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDifference = today.getMonth() - birthDate.getMonth();
      if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
      }
      return age;
};
age.textContent = `${calculateAge()} years`;

window.onclick = function (event) {
      const navToggler = document.querySelector('.nav-toggler');
      if (event.target === nav) {
            navToggler.classList.toggle('active');
      }
};