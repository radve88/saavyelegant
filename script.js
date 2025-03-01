document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".hero h1, .hero p, .btn");

    elements.forEach((el, index) => {
        el.style.opacity = 0;
        setTimeout(() => {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
            el.style.transition = "all 1s ease-in-out";
        }, index * 300);
    });

    document.getElementById("feedbackForm").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Thank you for your feedback! We will get in touch soon.");
    });
});
