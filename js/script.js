document.addEventListener("DOMContentLoaded", function () {

    (function() {
        emailjs.init("pefnLSIFKY_39aZx4");
    })();

    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        status.innerText = "Sending...";

        emailjs.sendForm("service_n5lm28a", "template_9965zdu", this)
            .then(() => {
                status.innerText = "✅ Message sent successfully!";
                status.style.color = "green";
                form.reset();
            }, () => {
                status.innerText = "❌ Failed to send. Try again.";
                status.style.color = "red";
            });
    });

    status.innerHTML = "✅ Message sent!";
    status.style.color = "green";

});