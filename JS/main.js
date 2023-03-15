//USUARIO
const nombreUsuario = document.getElementById("nombreUsuario");

document.addEventListener("DOMContentLoaded", function() {
    const nombreGuardado = localStorage.getItem("nombre");
    if (nombreGuardado) {
        nombreUsuario.textContent = nombreGuardado;
    }

    Swal.fire({
        title: "Bienvenido a Neathur Shop ",
        text: "Por favor ingrese su nombre",
        input: "text",
        showCancelButton: true,
        confirmButtonText: "Guardar",
        cancelButtonText: "Cancelar",
        inputValidator: nombre => {
            if (!nombre) {
                return "Por favor escriba tu nombre";
            } else {
                return undefined;
            }
        }
    })
    .then(resultado => {
        if (resultado.value) {
            let nombre = resultado.value;
            nombreUsuario.textContent = nombre;
            localStorage.setItem("nombre", nombre);
        }
    });
});
//Container
const container = document.getElementById("container");




// Cards
let carrito = JSON.parse (localStorage.getItem("Compra")) || [];

productos.forEach((productos)=> {
    let content = document.createElement("div");
    content.className="cards"
    content.innerHTML =`
    <img src ="${productos.img}">
    <h3> ${productos.nombre}</h3>
    <h6> ${productos.desc}</h6>
  
    <p class ="price">$${productos.precio} </p>
    `;
    container.append(content)

    let comprar = document.createElement("button")
    comprar.innerText= "Agregar al carrito";
    comprar.className="comprar"

    content.append(comprar);


comprar.addEventListener("click", ( )=>{


    const repetir = carrito.some((repetirProduct) => repetirProduct.id === productos.id);

    if(repetir){
        carrito.map((prod) => {
            if(prod.id === productos.id){
                prod.cantidad++;
            }
        });
    }else{
        carrito.push({
            id:productos.id,
            img:productos.img,
            nombre:productos.nombre,
            desc:productos.desc,
            precio:productos.precio,
            cantidad:productos.cantidad
            });
            Toastify({
                text: "Ha agregado un producto al carrito",
                duration: 3000,
                position: "left",
                gravity:"bottom",
                backgroundColor: "linear-gradient(to right, #F12473, #78DF97)",
              }).showToast();
    }
 
    carritoContador();
    saveLocal();
    });
});




// LocalStorage
const saveLocal = () => {
    localStorage.setItem("Compra",JSON.stringify(carrito));
}