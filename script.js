// Initialize EmailJS with your user ID
(function() {
    emailjs.init("YR0U68ZuTxW8thAlV"); // Replace with your EmailJS user ID
})();

// Function to send the email
document.getElementById("yesButton").addEventListener("click", function() {
    const serviceID = "service_lq7q4iy"; // Replace with your EmailJS service ID
    const templateID = "template_tpi0064"; // Replace with your EmailJS template ID

    const templateParams = {
        to_name: "Jatin",
        to_email: "ridhamswami34273@iisuniv.ac.in", // Recipient's email address
        from_name: "Ridham", // Your name
        from_email: "ridhamswami34273@iisuniv.ac.in", // Your email address
        message: "Hey Jatin💖 I hope this little note brings a smile to your face. ❤"
    };

    emailjs.send(serviceID, templateID, templateParams)
        .then(function(response) {
            alert("Hey, Cutie! 🌹 Could you please check your email? There's something special waiting for you ❤");
            window.location.href = "yes.html"; // Redirect to another page if needed
        }, function(error) {
            alert("Oops! Something went wrong. Please try again.");
            console.error("FAILED...", error);
        });
});

// Function to move the "No" button
document.getElementById("noButton").addEventListener("mouseover", function() {
    const noButton = document.getElementById("noButton");
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = "absolute";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});
