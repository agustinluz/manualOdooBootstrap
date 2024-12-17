// Selección del formulario
const contactForm = document.getElementById('contactForm');
const formResponse = document.getElementById('formResponse');

// Manejador de eventos para el envío del formulario
contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Evitar el envío predeterminado

    // Obtener los valores de los campos
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validar los datos
    if (name === '' || email === '' || message === '') {
        formResponse.textContent = 'Por favor, completa todos los campos.';
        formResponse.style.color = 'red';
        return;
    }

    // Simulación de envío con Fetch API o similar (sin servidor backend)
    setTimeout(() => {
        formResponse.textContent = `¡Gracias, ${name}! Hemos recibido tu mensaje.`;
        formResponse.style.color = 'green';
        contactForm.reset(); // Limpiar el formulario
    }, 1000);
});
