const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  host: 'smtp.suriyaco.ar', // Asegúrate de que este host es correcto
  port: 465, // Puerto para SSL
  secure: true, // true para SSL
  auth: {
    user: 'at@suriyaco.ar',
    pass: 'larioja1591'
  },
  tls: {
    rejectUnauthorized: false // Ignorar validación de certificados (no recomendado para producción)
  }
});

app.post('http://suriyaco.ar/send', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'at@suriyaco.ar',
    subject: `Mensaje de ${name}`,
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error al enviar el correo:", error);
      return res.status(500).send('Error al enviar el correo: ' + error.toString());
    }
    res.send('Correo enviado: ' + info.response);
  });
});

app.listen(port, () => {
  console.log(`Servidor de correo http://localhost:${port}`);
});
