// Contacto form
function borrarCampos() {
    document.getElementById("miFormulario").reset();
  }

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
