
import woocommerce from "../../assets/icons/woocommerce.svg";
import canvaicon from "../../assets/icons/canvaicon.svg";
import figmaicon from "../../assets/icons/figmaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import nextjsicon from "../../assets/icons/nextjsicon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
import expressicon from "../../assets/icons/expressicon.svg";
import trelloicon from "../../assets/icons/trelloicon.svg";
import apiicon from "../../assets/icons/apiicon.svg";
//import axiosicon from "../../assets/icons/axiosicon.svg";
//import spotifyicon from "../../assets/icons/spotifyicon.svg";
import netlifyicon from "../../assets/icons/netlifyicon.svg";
//import rendericon from "../../assets/icons/rendericon.svg";
//import jwticon from "../../assets/icons/jwticon.svg";
import vite from "../icons/vite.svg";
import wordpressicon from "../../assets/icons/wordpressicon.svg";
import tastyMockup from "../../assets/img/tasty_mockup.webp";
//import stiledCom from "../../assets/img/stiledCom.png";
import navbar from "../img/navbar.png";
import calculadora from "../../assets/img/calculadora.png";
import styledComponents from "../../assets/icons/styledComponents.svg";
import profilepicture1 from "../img/fer1.png";
import profilepicture2 from "../img/fer2.png";
//import caricon from "../../assets/icons/car-icon.svg";
//import travelicon from "../../assets/icons/travel-icon.svg";
//import hardwareicon from "../../assets/icons/hardware-icon.svg";
import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
//import styledComponentsicon from "../../assets/icons/styledComponents.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
import Privacy from "../../components/Privacy";

export const headerIntroData = {
  title: {
    de: "Hola!, Soy Fernando Palacios",
    en: "Hi, I'm Fernando Palacios",
  },
  subtitle: {
    de: "Desarrollador Web Full stack",
    en: "Full Stack Web Developer",
  },
  description: {
    de: "Mi pasión por la innovación y mi experiencia me permiten crear soluciones digitales que transforman ideas en proyectos exitosos y funcionales.",
    en: "My passion for innovation and my experience allow me to create digital solutions that transform ideas into successful and functional projects.",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        de: "Contáctame",
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        de: "Mis Proyectos",
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture1: profilepicture1,
  profilepicture2: profilepicture2,
} as const;

export const projectsData = [
  {
    title: "Tasty App",
    description:
      "Eine Rezepte App, die wir als Team mit React und der MealDB API gebaut haben. Ich war der Front-End Entwickler und habe Features wie Voice Search oder Print to PDF programmiert. Das Design wurde mit Figma erstellt. Die Website ist responsive und mobile-optimiert.",
    description_EN:
      "A recipe app that we built as a team with React and the MealDB API. I was the front-end developer and programmed features like voice search or print to PDF. The design was created with Figma. The website is responsive and mobile-optimized.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "REST Api", icon: apiicon },
      { name: "React", icon: reacticon },
      { name: "Figma", icon: figmaicon },
      { name: "Canva", icon: canvaicon },
      { name: "Netlify", icon: netlifyicon },
      { name: "Trello", icon: trelloicon },
    ],
    image: tastyMockup,
    deploymenturl: "https://delightful-cheesecake-9b19f0.netlify.app/",
    githuburl: "https://github.com/AlpayC/Frontend_Abschlussprojekt_Tasty",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Calculadora",
    description:
      "Una calculadora básica, con una interfaz de usuario agradable y atractiva, compatible con todos los dispositivos móviles. Incluye temas claro y oscuro.",
    description_EN:
      "A basic calculator with a pleasant and attractive user interface, compatible with all mobile devices. Includes light and dark themes.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      { name: "styled Components", icon: styledComponents},
    ],
    image: calculadora,
    deploymenturl: "https://palaciosf416.github.io/calculadora/",
    githuburl:
      "https://github.com/palaciosf416/calculadora",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "Side bar",
    description:
      "Un Side Bar que está desarrollada utilizando React y styled-components, ofreciendo una navegación intuitiva y estilizada con soporte para temas claro y oscuro.",
    description_EN:
      "A Side Bar developed using React and styled-components, offering intuitive and stylish navigation with support for light and dark themes.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      { name: "Vite", icon: vite },
      { name: "styled Components", icon: styledComponents},
    ],
    image: navbar,
    deploymenturl: "https://palaciosf416.github.io/Sidebar/",
    githuburl: "https://github.com/palaciosf416/Sidebar",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
] as const;

export const liveTickerData = {
  content: {
    de: "Más de mis proyectos en Github.",
    en: "More of my projects on GitHub.",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "WebDevelopment",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Next.js",
        hash: "#Next.js",
        icon: [nextjsicon, nextjsiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "Styled Components",
        hash: "#Styled-components",
        icon: styledComponents,
        color: "#a838b2",
      },
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#449C45",
      },
      {
        title: "Express",
        hash: "#Express",
        icon: [expressicon, expressiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Design",
    skills: [
    
      { title: "Canva", hash: "#Canva", icon: canvaicon, color: "#00C4CC" },
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "CMS",
    skills: [
      {
        title: "WordPress",
        hash: "#WordPress",
        icon: wordpressicon,
        color: "#21759B",
      },
      {
        title: "WooCommerce",
        hash: "#WooCommerce",
        icon: woocommerce,
        color: "#7F54B3",
      },
    ],
  },
] as const;

export const navLinks = [
  { de: "Home", en: "Home", hash: "#home", icon: GoHome },
  { de: "Skills", en: "Skills", hash: "#skills", icon: GoStack },
  { de: "Proyectos", en: "Projects", hash: "#projects", icon: GoProject },
  { de: "Sobre mí", en: "About me", hash: "#about-me", icon: GoPerson },
  { de: "Contáctame", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  { de: "Privacidad", en: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "mailto:palaciosf416@gmail.com",
  text: "palaciosf416@gmail.com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/sabas-fernando-palacios-valle-83019516b/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/palaciosf416",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:palaciosf416@gmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    de: '"El verdadero éxito no está en hacerlo bien a la primera, sino en perfeccionarlo hasta el final."',
    en: `"True success is not about getting it right the first time, but about perfecting it until the end."`,
  },
  {
    de: '"La web es como un lienzo y el código es la pintura. ¡Crea tu obra maestra!"',
    en: `"The web is like a canvas, and code is the paint. ¡Create your masterpiece!"`,
  },
] as const;

export const aboutMeData = {
  title: "Sobre mí",
  title_EN: "About me",
  description: "Algunos fragmentos de código sobre mí.",
  description_EN: "A few code snippets about me",
  paragraphs_DE: [
    {
      title: "Quien Soy?",
      description:
        "Soy un Ingeniero en Desarrollo de Software y Redes con 3 años de experiencia en la creación de soluciones web. Mis habilidades en Python y JavaScript, me permiten desarrollar productos digitales de alta calidad.",
     // icon: hardwareicon,
    },
    {
      title: "Mi objetivo",
      description:
        "Busco unirme a un equipo de desarrollo donde pueda utilizar mis habilidades para construir aplicaciones innovadoras que marquen una diferencia significativa para los usuarios.",
     // icon: caricon,
    },
    {
      title: "Pasión y Proyectos",
      description:
        "Soy un apasionado del desarrollo de software. En mi tiempo libre, me dedico a crear proyectos personales y a mantenerme actualizado con las últimas tecnologías, explorando nuevos lenguajes de programación y frameworks.",
     // icon: travelicon,
    },
  ],
  paragraphs_EN: [
    {
      title: "Who am I?",
      description:
        "I am a Software and Network Development Engineer with 3 years of experience in creating web solutions. My skills in Python and JavaScript allow me to develop high-quality digital products.",
     // icon: hardwareicon,
    },
    {
      title: "My objective",
      description:
        "I aim to join a development team to utilize my abilities in creating innovative applications that make a significant difference to users.",
      //icon: caricon,
    },
    {
      title: "Passion and Projects",
      description:
        "I'm passionate about software development. In my free time, I dedicate myself to creating personal projects and staying up-to-date with the latest technologies, exploring new programming languages and frameworks.",
     // icon: travelicon,
    },
  ],
};

export const contactData = {
  title: {
    de: "Contáctame",
    en: "Contact",
  },
  description: {
    de: "Escríbeme un mensaje y me comunicaré contigo.",
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        de: "Su nombre",
        en: "Your Name",
      },
      type: "text",
      validation: {
        de: "Por favor escribe tu nombre",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        de: "Su correo",
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        de: "Por favor complete su correo electrónico",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        de: "Asunto",
        en: "Your Subject",
      },
      type: "text",
      validation: {
        de: "Por favor complete el asunto",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      de: "Su mensaje",
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      de: "Por favor complete su mensaje",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      de: "Enviar",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      de: "Acepto que este sitio pueda utilizar mis datos personales (nombre y dirección de correo electrónico) para contactarme.",
      en: "I agree that this site may use my personal information (name and email address) to contact me.",
    },
    description: {
      de: "Al enviar esta solicitud, usted reconoce que ha leído la Política de Privacidad.",
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    de: "🚀 La demostración en vivo se abrirá en breve. Iniciando servidores...",
    en: "🚀 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    de: "🚀 Gracias por tu correo electrónico. Me comunicaré contigo lo antes posible.",
    en: "🚀 Thank you for your email. I will get back to you as soon as possible.",
  },
  failedEmailSent: {
    de: "🚀 Lamentablemente el envío de su correo electrónico no funcionó. Por favor inténtalo de nuevo más tarde.",
    en: "🚀 Unfortunately the sending of your email did not work. Please try again later.",
  },
  failedValidationName: {
    de: "Por favor escribe tu nombre.",
    en: "Please fill in your name.",
  },
} as const;

export const buttonLabels = {
  language: {
    de: "ES",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};


