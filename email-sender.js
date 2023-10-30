// Importez le module email-sender
var nodemailer = require("nodemailer");
// Configuration du transporteur de messagerie
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "user@gmail.com",
    // 1.Connectez-vous à votre compte Gmail.
    // 2.Accédez à la section "Sécurité" dans les paramètres de votre compte.
    // 3.Recherchez l'option "Accès moins sécurisé des applications" ou "Applications et appareils moins sécurisés".
    // 4.Activez cette option pour permettre à Nodemailer d'accéder à votre compte Gmail.
    pass: "**********",
  },
});
// Options de l'e-mail
var mailOptions = {
  from: "yourmail@gmail.com",
  to: "anothermail@yahoo.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};
// Envoyer l'e-mail
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
