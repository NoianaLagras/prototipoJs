
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
app.post("/api/verify-captcha", function(req, res) {
    const APIKEYs = "6Ldmgg4lAAAAABJvklF6QZA9jrBKqjvQNqtVEc4R";
    const response = req.body.response;
    fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        body: "APIKEYs=" + APIKEYs + "&response=" + response,
        headers: {"Content-Type": "application/x-www-form-urlencoded"}
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        res.json({success: data.success});
    });
});




