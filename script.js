document.addEventListener('DOMContentLoaded', function() {
    updateTime();
    updateDate();
    fetchLocation();
    
    setInterval(updateTime, 1000); // Actualizar cada segundo
});

function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    timeElement.textContent = `Hora: ${timeString}`;
}

function updateDate() {
    const dateElement = document.getElementById('date');
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('es-ES', options);
    dateElement.textContent = `Fecha: ${dateString}`;
}

function fetchLocation() {
    const locationElement = document.getElementById('location');
    // Aquí podrías usar APIs para obtener la ubicación del usuario, como geolocation API si permitido, o servicios externos.
    locationElement.textContent = `Ubicación: Desconocida`;
    // Aquí podrías agregar la lógica para obtener la ubicación del usuario, según sea necesario.
}
