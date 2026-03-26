"use strict";

document.addEventListener("DOMContentLoaded", () => {
    emailjs.init("pefnLSIFKY_39aZx4");

    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");

    if (!form || !status) return;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        status.textContent = "Sending...";
        status.style.color = "#475569";

        emailjs
            .sendForm("service_n5lm28a", "template_9965zdu", form)
            .then(() => {
                status.textContent = "✅ Message sent successfully!";
                status.style.color = "green";
                form.reset();
            })
            .catch((error) => {
                console.error("EmailJS Error:", error);
                status.textContent = "❌ Failed to send. Please try again.";
                status.style.color = "red";
            });
    });
});