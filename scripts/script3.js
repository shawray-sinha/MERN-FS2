 document.getElementById("contactForm").addEventListener("submit", function (event) {
            var nameInput = document.getElementById("name");
            var emailInput = document.getElementById("email");
            var websiteInput = document.getElementById("website");
            var msginput=document.getElementById("message");
            if (nameInput.value.trim() === "") {
                document.getElementById("nameFeedback").textContent = "This field is required";
                nameInput.classList.add("is-invalid");
                event.preventDefault();
            } else {
                document.getElementById("nameFeedback").textContent = "";
                nameInput.classList.remove("is-invalid");
            }
            var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (!emailPattern.test(emailInput.value)) {
                document.getElementById("emailFeedback").textContent = "A valid email is required.";
                emailInput.classList.add("is-invalid");
                event.preventDefault();
            } else {
                document.getElementById("emailFeedback").textContent = "";
                emailInput.classList.remove("is-invalid");
            }
            if (websiteInput.value.trim() == "" && !isURL(websiteInput.value)) {
                document.getElementById("websiteFeedback").textContent = "A valid URL is required";
                websiteInput.classList.add("is-invalid");
                event.preventDefault();
            } else {
                document.getElementById("websiteFeedback").textContent = "";
                websiteInput.classList.remove("is-invalid");
            }
            if (msginput.value.trim() === "") {
                document.getElementById("msgFeedback").textContent = "this Field is  required.";
                msginput.classList.add("is-invalid");
                event.preventDefault();
            } else {
                document.getElementById("msgFeedback").textContent = "";
                msginput.classList.remove("is-invalid");
            }
        });
        function isURL(str) {
            var pattern = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;
            return pattern.test(str);
        }
