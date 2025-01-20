import React from "react";
import { useLanguage } from "../context/language-context";
// import { Link } from "react-router-dom";

const Privacy = () => {
  const { language } = useLanguage();

  return (
    <React.Fragment>
      {language === "DE" ? (
        <article className="flex flex-col gap-6 max-w-[70vw] break-words">
           <h1>Política de Privacidad</h1>
    <h2>Introducción</h2>
    <p>Esta Política de Privacidad describe cómo se recolectan, utilizan, comparten y protegen los datos personales que proporcionas al completar el formulario de contacto en este sitio web. Al enviar el formulario, aceptas los términos de esta política.</p>
    
    <h2>Datos Personales Recopilados</h2>
    <p>La información que recopilamos a través del formulario de contacto puede incluir:</p>
    <ul>
        <li>Nombre completo</li>
        <li>Dirección de correo electrónico</li>
        <li>Mensaje</li>
    </ul>
    
    <h2>Uso de los Datos Personales</h2>
    <p>Los datos que recolectamos se utilizan exclusivamente para:</p>
    <ul>
        <li><strong>Responder a tus consultas:</strong> Utilizaremos tu información para responder a tus preguntas, comentarios o solicitudes.</li>
        <li><strong>Mejorar nuestros servicios:</strong> Tus comentarios nos ayudarán a mejorar nuestro sitio web y nuestros servicios.</li>
    </ul>
    
    <h2>Seguridad de los Datos</h2>
    <p>Implementamos medidas de seguridad administrativas, técnicas y físicas para proteger tus datos personales de acceso no autorizado, alteración, divulgación o destrucción. Sin embargo, ten en cuenta que ninguna transmisión de datos por internet o sistema de almacenamiento electrónico es completamente segura.</p>
    
    <h2>Compartir Datos Personales</h2>
    <p>No compartimos tus datos personales con terceros, excepto cuando sea requerido por ley o para cumplir con una solicitud judicial.</p>
    
    <h2>Tus Derechos</h2>
    <p>Tienes derecho a:</p>
    <ul>
        <li><strong>Acceder a tus datos:</strong> Puedes solicitar una copia de los datos personales que tenemos sobre ti.</li>
        <li><strong>Rectificar tus datos:</strong> Si la información que tenemos sobre ti es incorrecta, puedes solicitar que la corrijamos.</li>
        <li><strong>Cancelar tus datos:</strong> Puedes solicitar que eliminemos tus datos personales de nuestra base de datos.</li>
        <li><strong>Oponerte al uso de tus datos:</strong> Puedes oponerte al uso de tus datos para fines específicos.</li>
    </ul>
    <p>Para ejercer tus derechos, puedes contactarnos a través de: palaciosf416@gmail.com</p>
    
    <h2>Cambios a esta Política</h2>
    <p>Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. Te notificaremos sobre cualquier cambio importante en esta política a través de nuestro sitio web.</p>
    
    <h2>Contacto</h2>
    <p>Si tienes alguna pregunta sobre esta Política de Privacidad, puedes contactarnos a través de palaciosf416@gmail.com</p>
        </article>
      ) : (
        <article className="flex flex-col gap-6 max-w-[70vw] break-words">
          <h1>Privacy Policy</h1>
    <h2>Introduction</h2>
    <p>This Privacy Policy describes how your personal data is collected, used, shared, and protected when you fill out the contact form on this Website. By submitting the form, you agree to the terms of this policy.</p>
    
    <h2>Personal Data Collected</h2>
    <p>The information we collect through the contact form may include:</p>
    <ul>
        <li>Full name</li>
        <li>Email address</li>
        <li>Message</li>
    </ul>
    
    <h2>Use of Personal Data</h2>
    <p>The data we collect is used exclusively for:</p>
    <ul>
        <li><strong>Responding to your inquiries:</strong> We will use your information to respond to your questions, comments, or requests.</li>
        <li><strong>Improving our services:</strong> Your feedback helps us improve our website and services.</li>
    </ul>
    
    <h2>Data Security</h2>
    <p>We implement administrative, technical, and physical security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. However, please note that no data transmission over the internet or electronic storage system is completely secure.</p>
    
    <h2>Sharing Personal Data</h2>
    <p>We do not share your personal data with third parties, except when required by law or to comply with a legal request.</p>
    
    <h2>Your Rights</h2>
    <p>You have the right to:</p>
    <ul>
        <li><strong>Access your data:</strong> You can request a copy of the personal data we have about you.</li>
        <li><strong>Rectify your data:</strong> If the information we have about you is incorrect, you can request that we correct it.</li>
        <li><strong>Delete your data:</strong> You can request that we delete your personal data from our database.</li>
        <li><strong>Object to the use of your data:</strong> You can object to the use of your data for specific purposes.</li>
    </ul>
    <p>To exercise your rights, you can contact us at palaciosf416@gmail.com</p>
    
    <h2>Changes to this Policy</h2>
    <p>We reserve the right to modify this Privacy Policy at any time. We will notify you of any significant changes to this policy through our website.</p>
    
    <h2>Contact</h2>
    <p>If you have any questions about this Privacy Policy, you can contact us at palaciosf416@gmail.com</p>
          
        </article>
      )}
    </React.Fragment>
  );
};

export default Privacy;
