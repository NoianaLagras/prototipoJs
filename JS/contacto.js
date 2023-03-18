// Contacto form
const formulario = document.getElementById("miFormulario")
formulario.addEventListener("submit", (e) =>{
  e.preventDefault();
  const nombre = document.getElementById("Nombre").value;
  const correo = document.getElementById("correo").value;
  const telefono = document.getElementById("cel").value;
  const mensaje = document.getElementById("comentario").value;

})


    const contacto = document.getElementById("alertContacto");
  
    contacto.addEventListener("click", () => {
      Swal.fire({
        title: 'Desea enviar este mensaje?',
        
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#f12473',
        cancelButtonColor: '#222121',
        confirmButtonText: 'Si!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Su mensaje ha sido enviado con exito',
            'En el plazo de 24hs a 48hs sera contactado a su email',
            'success'
          )
        }
      })
    });
