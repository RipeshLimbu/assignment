
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");

    form.addEventListener("submit", function (event) {
        let isValid = true;
        const messages = [];

        const email = document.getElementById("email").value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            isValid = false;
            messages.push("Invalid email format.");
        }

    
        const age = document.getElementById("age").value;
        if (!/^[0-9]+$/.test(age) || age < 1 || age > 120) {
            isValid = false;
            messages.push("Age must be a number between 1 and 120.");
        }
   
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        if (password !== confirmPassword) {
            isValid = false;
            messages.push("Passwords do not match.");
        }

        const passwordStrengthRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
        if (!passwordStrengthRegex.test(password)) {
            isValid = false;
            messages.push("Password must contain at least 8 characters, including uppercase, lowercase, a number, and a special character.");
        }

  
        const zip = document.getElementById("zip").value;
        const zipRegex = /^\d{5}(?:-\d{4})?$/;
        if (!zipRegex.test(zip)) {
            isValid = false;
            messages.push("Invalid zip code format.");
        }

        const terms = document.getElementById("terms").checked;
        if (!terms) {
            isValid = false;
            messages.push("You must agree to the terms and conditions.");
        }

     
        const url = document.getElementById("website").value;
        const urlRegex = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/\S*)?$/;
        if (url && !urlRegex.test(url)) {
            isValid = false;
            messages.push("Invalid URL format.");
        }

      
        const date = document.getElementById("date").value;
        if (date && new Date(date) > new Date()) {
            isValid = false;
            messages.push("Date cannot be set in the future.");
        }

        const fileInput = document.getElementById("file");
        const maxFileSize = 2 * 1024 * 1024; // 2 MB
        if (fileInput.files[0] && fileInput.files[0].size > maxFileSize) {
            isValid = false;
            messages.push("File size must not exceed 2 MB.");
        }

        const country = document.getElementById("country").value;
        if (!country) {
            isValid = false;
            messages.push("Please select a country.");
        }

        
        const errorContainer = document.getElementById("errors");
        errorContainer.innerHTML = "";
        if (!isValid) {
            event.preventDefault();
            messages.forEach(msg => {
                const li = document.createElement("li");
                li.textContent = msg;
                errorContainer.appendChild(li);
            });
        }
    });
});
