"use script";

document.addEventListener("DOMContentLoaded", () => {

    emailjs.init("pefnLSIFKY_39aZx4");

    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        status.textContent = "Sending...";

        emailjs.sendForm("service_n5lm28a", "template_9965zdu", form)
            .then(() => {
                status.textContent = "✅ Message sent successfully!";
                status.style.color = "green";
                form.reset();
            })
            .catch(() => {
                status.textContent = "❌ Failed to send. Try again.";
                status.style.color = "red";
            });
    });

});