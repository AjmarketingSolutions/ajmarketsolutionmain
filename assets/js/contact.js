(function(){
    emailjs.init("AFz5CZ07_wyVZZxxh"); 
})();

function sendMail(event) {
    event.preventDefault();

    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_ckta25e", "template_0ekkf4d", parms)
        .then(function() {
            alert("Email Sent Successfully");
        }, function(error) {
            alert("Failed to send email. Error: " + JSON.stringify(error));
        });
}








