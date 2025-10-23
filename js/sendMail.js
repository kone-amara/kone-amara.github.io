document.getElementById('form').addEventListener('submit', function(event){
      event.preventDefault();
})
function sendEmail(){
      const templateParams = {
            from_name:document.querySelector('#from_name'),
            from_email:document.querySelector('#from_email'),
            subject:document.querySelector('#subject'),
            message:document.querySelector('#message'),
      };
      document.getElementById("button").innerHTML = "Sending...";
      emailjs.send("service_8f70isq","template_is4hptk",templateParams)
      .then(function(response){
            alert("Votre message a bien été envoyé !");
            document.getElementById("button").innerHTML = "Send Message";
      }, function(error){
            alert("Une erreur est survenue. Veuillez réessayer ! : " + error.text);
            document.getElementById("button").innerHTML = "Send Message";
      });
}
// document.getElementById('contact-form').addEventListener('submit', function(e){
//       e.preventDefault();
//       from_name = document.getElementById("nom").value
//       from_email = document.getElementById("email").value
//       subject = document.getElementById("objet").value
//       message = document.getElementById("message").value
//       const formParams = {
//             from_name: from_name,
//             email: from_email,
//             subject: subject,
//             message: message
//       }
//        if (from_name !="" && from_email !="" && subject !="" && message !=""){
//             emailjs.sendForm("service_8f70isq","template_is4hptk",formParams)
//             .then(function(response){
//                   alert("Votre message a bien été envoyé !");
//             }, function(error){
//                   alert("Une erreur est survenue. Veuillez réessayer !")
//             })
//       }else{
//             alert("Veuillez renseigner tous les champs!")
//       }
// })
