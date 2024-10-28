
//Agregar nuevas citas
document.querySelector('.btn-info').addEventListener('click', function() {
    let citaTexto = document.querySelector('.input-cita').value;
    if (citaTexto) {
        // Crear un nuevo elemento de cita
        let nuevaCita = document.createElement('div');
        nuevaCita.classList.add('col-12', 'col-md-6', 'col-lg-4', 'mb-4'); // Asegúrate de que tenga las mismas clases
        nuevaCita.innerHTML = `
            <div class="cita">
                <blockquote class="cita-texto">${citaTexto}
                    <footer class="autor">- Nuevo Autor</footer>
                </blockquote>
            </div>`;
        
        // Agregar la nueva cita al inicio del contenedor de citas
        document.querySelector('.citas-contenedor .row.justify-content-center').appendChild(nuevaCita);
        document.querySelector('.input-cita').value = ''; // Limpiar el input
    } else {
        alert('Por favor, ingrese una cita');
    }
});



// Selecciona todas las imágenes dentro de la galería
document.querySelectorAll('.galeria img').forEach(img => {
    img.addEventListener('click', function() {
        // Alterna la clase 'enlarged' para ampliar la imagen
        img.classList.toggle('enlarged');
    });
});

// Agrega el estilo para la clase 'enlarged' directamente en el documento
const style = document.createElement('style');
style.innerHTML = `
    .enlarged {
        transform: scale(1.2) !important;
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3) !important;
    }
`;
document.head.appendChild(style);


// Seleccionamos todas las tarjetas
const tarjetas = document.querySelectorAll('.columna');

// Añadimos el evento mouseenter para agrandar la tarjeta al pasar el mouse
tarjetas.forEach(tarjeta => {
    tarjeta.addEventListener('mouseenter', () => {
        tarjeta.classList.add('enlarged'); // Agrega la clase para aumentar el tamaño
    });

    tarjeta.addEventListener('mouseleave', () => {
        tarjeta.classList.remove('enlarged'); // Quita la clase cuando el mouse sale
    });

    // Añadimos el evento click para destacar la tarjeta
    tarjeta.addEventListener('click', () => {
        // Remueve la clase de las otras tarjetas
        tarjetas.forEach(t => t.classList.remove('highlighted'));
        tarjeta.classList.add('highlighted'); // Agrega la clase a la tarjeta clickeada
    });
});

document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío normal del formulario
    
    const email = document.getElementById('email').value;
  
    // Aquí puedes usar EmailJS o similar para enviar el correo
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
      email: email
    })
    .then(function(response) {
      alert('Suscripción exitosa!');
      document.getElementById('email').value = ''; // Limpiar el campo de entrada
    }, function(error) {
      alert('Error al enviar: ' + JSON.stringify(error));
    });
  });
  

