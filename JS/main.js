const nombreUsuario = document.getElementById("nombreUsuario");

document.addEventListener("DOMContentLoaded", function() {
    const nombreGuardado = localStorage.getItem("nombre");
    if (nombreGuardado) {
        nombreUsuario.textContent = nombreGuardado;
    }

    const alertaBienvenida = localStorage.getItem("alertaBienvenida");
    if (!alertaBienvenida) {
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
                localStorage.setItem("alertaBienvenida", true);
            }
        });
    }
});









// carrito
let carrito = JSON.parse (localStorage.getItem("Compra")) || [];

// Cards

let productos = [];
//Llamar productos json
fetch("/JS/productos.json")
.then(response => response.json())

.then (data =>{
    productos = data;
    crearCards(productos)
})



function crearCards () {

    //Container
const container = document.getElementById("container")

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

}

//Function promise 
function alertRedesSociales() {
    return new Promise(function(resolve) {
        setTimeout(function() {
          resolve();
        }, 3 * 60 * 1000); 
      }).then(function() {
        Swal.fire({
            title: 'Seguinos en nuestras redes sociales',
            text : "Podras ver nuestras nuevas colecciones y hacer encargos personalizados",
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#f12473',
            cancelButtonColor: '#222121',
            confirmButtonText: 'Confirm'
          }).then((result) => {
            if (result.isConfirmed) {
                window.open('https://facebook.com', '_blank');
            }
          })
      });
    }


alertRedesSociales();


// LocalStorage
const saveLocal = () => {
    localStorage.setItem("Compra",JSON.stringify(carrito));
}