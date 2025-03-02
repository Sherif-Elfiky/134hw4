document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nameInput = form.querySelector("input[name='your-name']");
    const emailInput = form.querySelector("input[name='your-email']");
    const commentsInput = form.querySelector("textarea[name='your-comments']");
    const formErrors = [];

   
    function showError(input, message) {
        const errorOutput = input.nextElementSibling;
        errorOutput.textContent = message;
        errorOutput.classList.add("visible");
        input.classList.add("error-highlight");

        
        setTimeout(() => {
            errorOutput.classList.remove("visible");
            input.classList.remove("error-highlight");
        }, 3000);
    }

   
    nameInput.addEventListener("input", function (e) {
        const validPattern = /^[A-Za-z\s]+$/;
        if (!validPattern.test(this.value)) {
            this.value = this.value.replace(/[^A-Za-z\s]/g, "");
            showError(this, "Only letters and spaces allowed!");
            formErrors.push({ field: "your-name", error: "Invalid character entered" });
        }
    });

    
    commentsInput.addEventListener("input", function (e) {
        const validPattern = /^[A-Za-z\s]+$/;
        if (!validPattern.test(this.value)) {
            this.value = this.value.replace(/[^A-Za-z\s]/g, "");
            showError(this, "Only letters and spaces allowed!");
            formErrors.push({ field: "your-comments", error: "Invalid character entered" });
        }
    });

   
    commentsInput.addEventListener("input", function () {
        const maxLength = 300;
        const remaining = maxLength - this.value.length;
        const infoOutput = this.nextElementSibling;
        
        infoOutput.textContent = `Characters remaining: ${remaining}`;
        infoOutput.classList.remove("warning", "error");

        if (remaining <= 50) {
            infoOutput.classList.add("warning");
        }
        if (remaining <= 10) {
            infoOutput.classList.add("error");
        }
    });

    // Custom validation on submit
    form.addEventListener("submit", function (event) {
        formErrors.length = 0; // Clear previous errors

        if (!nameInput.checkValidity()) {
            showError(nameInput, "Name is required (1-100 characters, letters only).");
            formErrors.push({ field: "your-name", error: "Invalid input" });
        }

        if (!emailInput.checkValidity()) {
            showError(emailInput, "Enter a valid email.");
            formErrors.push({ field: "your-email", error: "Invalid email" });
        }

        if (!commentsInput.checkValidity()) {
            showError(commentsInput, "Comments must be 1-300 characters.");
            formErrors.push({ field: "your-comments", error: "Invalid input" });
        }

        if (formErrors.length > 0) {
            event.preventDefault(); // Stop form submission if errors exist

            // Attach errors to hidden input
            const errorField = document.createElement("input");
            errorField.type = "hidden";
            errorField.name = "form-errors";
            errorField.value = JSON.stringify(formErrors);
            form.appendChild(errorField);
        }
    });
});
