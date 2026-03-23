document.addEventListener("DOMContentLoaded", () => {

    emailjs.init("YOUR_PUBLIC_KEY");

    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        status.textContent = "Sending...";

        emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form)
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
