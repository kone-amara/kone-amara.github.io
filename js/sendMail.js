// Initialisation EmailJS
    (function() {
      emailjs.init({
        publicKey: "o6FCSZR1ydhFsSjnn" // ⬅️ Remplace par ta clé publique EmailJS
      });
    })();

    const form = document.getElementById("contact-form");
    const messageRenvoye = document.getElementById("status");

    form.addEventListener("submit", function(event) {
      event.preventDefault();

      // Texte de chargement
      messageRenvoye.innerHTML = '<div class="text-info">Envoi en cours...</div>';

      // Envoi via EmailJS
      emailjs.send("service_8f70isq", "template_is4hptk", {
        from_name: form.name.value,
        from_email: form.email.value,
        subject: form.subject.value,
        message: form.message.value
      })
      .then(() => {
        messageRenvoye.innerHTML = '<div class="text-success">✅ Message envoyé avec succès !</div>';
        form.reset();
        setTimeout(() => {
          messageRenvoye.innerHTML = '';
        }, 5000);
      }, (err) => {
        messageRenvoye.innerHTML = '<div class="text-danger">❌ Erreur : ' + JSON.stringify(err) + '</div>';
      });
    });