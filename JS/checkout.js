
document.getElementById("submitBtn").addEventListener("click", function(event) {
    event.preventDefault();
    const response = grecaptcha.getResponse();
    fetch("/api/verify-captcha", {
        method: "POST",
        body: JSON.stringify({response: response}),
        headers: {"Content-Type": "application/json"}
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        if (data.success) {
            document.querySelector("form").submit();
        } else {
            alert("Por favor, complete el reCAPTCHA antes de enviar el formulario.");
        }
    });
});





