import React from 'react';

const Map = () => {
  return (
    <div style={{ width: '100%', height: 'auto' }}>  {/* Contenedor para asegurarse que ocupe todo el ancho */}
      <iframe 
        title="Mapa de la Facultad"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.738055342373!2d-65.1985333!3d-26.81646805069584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c23b7b6e863%3A0x976c9adc5013942c!2sUniversidad%20Tecnol%C3%B3gica%20Nacional%20-%20Facultad%20Regional%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1746304876741!5m2!1ses!2sar"
        width="100%"  // El iframe ocupará todo el ancho disponible
        height="300"  // Puedes ajustar esta altura según lo que necesites
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  );
}

export default Map;
