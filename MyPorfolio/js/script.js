const { version } = require("react");

// typing Animation
var typed = new Typed(".typing", {
      strings: ["développeur d'applications", "graphic designer", "UI/UX designer"],
      typeSpeed: 100,
      backSpeed: 40,
      loop: true
});

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

function TooglePrompt(){
      document.querySelector('.prompt').classList.toggle('active');
}
// function SelectOption(){
//      // Télécharger mon cv
//     const selectedOption = 'fr';
//     const options = document.querySelectorAll('input[name="option"]');
//     options.forEach(option =>{
//       option.addEventListener('change', ()=>{
//         selectedOption = option.value
//         alert(option.value)
//         CvDownloadBtn.innerHTML = `<button type="button" class="btn btn-primary btn-lg" id="annuler" onclick="TooglePrompt()">
//             Annuler
//           </button>`;
//       if(selectedOption === 'fr'){
//                   CvDownloadBtn.innerHTML += "<a href='FilesPdf/CvKoneAmaraFr.pdf' download='FilesPdf/CvKoneAmaraFr.pdf' class='btn'>Télécharger</a>"
//             } else if (selectedOption === 'en'){
//                   CvDownloadBtn.innerHTML += "<a href='FilesPdf/CvKoneAmaraEn.pdf' download='FilesPdf/CvKoneAmaraEn.pdf' class='btn'>Télécharger</a>"
//             } else {
//                   CvDownloadBtn.innerHTML += "<a href='FilesPdf/CvKoneAmaraFrEn.pdf' download='FilesPdf/CvKoneAmaraFrEn.pdf' class='btn'>Télécharger</a>"
//             }
//       alert(CvDownloadBtn.innerHTML)
//       })
//     })
// }




// document.querySelector('#Download').addEventListener('click', (e) => {
//       e.preventDefault
//       const choix = document.querySelector('input[name="choix"]:checked').value;
//       if(choix === 'fr'){
//             window.location.href = 'FilesPdf/CvKoneAmaraFr.pdf';
//       } else if (choix === 'en'){
//             window.location.href = 'FilesPdf/CvKoneAmaraEn.pdf';
//       } else {
//             window.location.href = 'FilesPdf/CvKoneAmaraFrEn.pdf';
//       }
// });
