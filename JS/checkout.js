const carrito = JSON.parse(localStorage.getItem("carrito"));

const listaCheckout = document.querySelector(".listaCheckout");

carrito.forEach((producto) => {
  const div = document.createElement("div");
  div.className= "producto-checkout"
  div.innerHTML = `
    <h3>${producto.nombre}</h3>
    <p>Cantidad: ${producto.cantidad}</p>
    <p>Precio c/u: $${producto.precio}</p>
  `;

  listaCheckout.appendChild(div);
});

let total = carrito.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0);

const totaldeCompra = document.createElement("h3");
totaldeCompra.innerText = `Total de su compra: $${total}`;
listaCheckout.appendChild(totaldeCompra);

const envioCheckbox = document.getElementById("envioCheckbox");
envioCheckbox.addEventListener("change", () => {
  if (envioCheckbox.checked) {
    total += 1500;
    totaldeCompra.innerText = `Total de su compra: $${total}`;
    
  }else {
    total -= 1500;
    totaldeCompra.innerText = `Total de su compra: $${total}`;
   
  }
});

// Contacto form
const formulario = document.getElementById("formularioCheckout")
formulario.addEventListener("submit", (e) =>{
  e.preventDefault();
  const nombreUsuario = document.getElementById("inputEmail4").value;
  const contraseña = document.getElementById("inputPassword4").value;
  const direccion = document.getElementById("inputAddress").value;
  const direccion2 = document.getElementById("inputAddress2").value;
  const ciudad = document.getElementById("inputCity").value;
  const provincia = document.getElementById("inputState").value;

})

// api de google
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





