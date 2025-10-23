   // Écouter les changements sur les boutons radio
        const CvDownloadBtn = document.querySelector('.CvDownloadBtn');
        const DownloadCv = document.querySelector('#DownloadCv');
        const annuler = document.querySelector('#annuler');
        DownloadCv.addEventListener('click', function() {
            document.querySelector('.prompt').classList.toggle('active');
        });
        annuler.addEventListener('click', function() {
            document.querySelector('.prompt').classList.toggle('active');
        });
        const radios = document.querySelectorAll('input[type="radio"]');
        let selectedValue = 'fr'
        radios.forEach(radio => {
            radio.addEventListener('change', function() {
                // Vérifier quelle option est sélectionnée et afficher sa valeur
                if (this.checked) {
                    selectedValue = this.value
                    CvDownloadBtn.innerHTML = `<button type="button" class="btn btn-primary btn-lg" id="annuler" onclick="TooglePrompt()">Annuler</button>`;
                    if(selectedValue === 'fr'){
                                CvDownloadBtn.innerHTML += "<a href='FilesPdf/CvKoneAmaraFr.pdf' download='FilesPdf/CvKoneAmaraFr.pdf' class='btn'>Télécharger</a>"
                          } else if (selectedValue === 'en'){
                                CvDownloadBtn.innerHTML += "<a href='FilesPdf/CvKoneAmaraEn.pdf' download='FilesPdf/CvKoneAmaraEn.pdf' class='btn'>Télécharger</a>"
                          } else {
                                CvDownloadBtn.innerHTML += "<a href='FilesPdf/CvKoneAmaraFrEn.pdf' download='FilesPdf/CvKoneAmaraFrEn.pdf' class='btn'>Télécharger</a>"
                              }
                }
            });
        });