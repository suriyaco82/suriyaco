import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = process.env.REACT_APP_API_URL;
    if (!apiUrl) {
      console.error('API URL no está definida');
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'La URL de la API no está definida. Verifica tu archivo .env',
      });
      return;
    }

    console.log('API URL:', apiUrl);
    console.log('Form Data:', formData);

    try {
      const response = await axios.post(apiUrl, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      Swal.fire({
        icon: 'success',
        title: 'Correo enviado',
        text: response.data,
        showConfirmButton: false,
        timer: 1500
      });
    } catch (error) {
      if (error.response) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error al enviar el correo: ' + error.response.data,
        });
      } else if (error.request) {
        console.error('Error en la solicitud:', error.request);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error al enviar el correo. No se recibió respuesta del servidor.',
        });
      } else {
        console.error('Error en la configuración de la solicitud:', error.message);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error al enviar el correo: ' + error.message,
        });
      }
    }
  };

  return (
    <div>
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ingrese su nombre"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Ingrese su email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea
            className="form-control"
            id="message"
            value={formData.message}
            onChange={handleChange}
            rows="3"
            placeholder="Ingrese su mensaje"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Contact;
