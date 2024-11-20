const products = [
    // Desarrollo Web
    {
      id: "DW001",
      nombre: "Diseño de Sitios Web Corporativos",
      descripcion: "Creación de páginas web profesionales adaptadas a las necesidades de tu negocio.",
      stock: 5,
      categoria: "desarrollo",
      imagen: "https://tse3.mm.bing.net/th?id=OIP.pBCzgrYOZW6V1i9zLs-njwHaFj&pid=Api",
      precio: 5000,
    },
    {
      id: "DW002",
      nombre: "Desarrollo de Aplicaciones Web",
      descripcion: "Soluciones personalizadas para aplicaciones en línea eficientes y modernas.",
      stock: 3,
      categoria: "desarrollo",
      imagen: "https://tse2.mm.bing.net/th?id=OIP.rhMrmWsix7Vp4CI0YnwrwQHaEU&pid=Api",
      precio: 8000,
    },
    {
      id: "DW003",
      nombre: "Optimización SEO y Rendimiento",
      descripcion: "Mejora el posicionamiento y la velocidad de tu sitio web.",
      stock: 7,
      categoria: "desarrollo",
      imagen: "https://tse3.mm.bing.net/th?id=OIP.pycvSftW6rrdLYlWs46BJAHaE8&pid=Api",
      precio: 3000,
    },
    // Diseño Gráfico
    {
      id: "DSG001",
      nombre: "Diseño de Identidad Corporativa",
      descripcion: "Creación de logotipos y manuales de marca para fortalecer tu identidad visual.",
      stock: 4,
      categoria: "diseño",
      imagen: "https://tse4.mm.bing.net/th?id=OIP.F7--vWHE_oA_cAQIMlGa7AHaEo&pid=Api",
      precio: 2000,
    },
    {
      id: "DSG002",
      nombre: "Diseño de Material Publicitario",
      descripcion: "Pósters, banners y materiales promocionales que impactan.",
      stock: 6,
      categoria: "diseño",
      imagen: "https://aprendihoy.com/wp-content/uploads/2022/04/con-la-publicidad-se-busca-informar-o-influenciar-el-comportamiento-de-compra-de-un-publico-meta-sobre-bienes-y-servicios.png",
      precio: 1500,
    },
    {
      id: "DSG003",
      nombre: "Diseño de Interfaz de Usuario (UI)",
      descripcion: "Interacciones intuitivas y atractivas para tus aplicaciones o sitios web.",
      stock: 5,
      categoria: "diseño",
      imagen: "https://areaf5.es/wp-content/uploads/2023/09/interfaz-web-scaled.jpg",
      precio: 2500,
    },
    // Consultoría
    {
      id: "CNS001",
      nombre: "Consultoría en Transformación Digital",
      descripcion: "Acompañamos a tu empresa en su proceso de digitalización.",
      stock: 4,
      categoria: "consultoria",
      imagen: "https://elnuevoentrepreneur.com/wp-content/uploads/2019/11/Consultor%C3%ADa.jpg",
      precio: 4000,
    },
    {
      id: "CNS002",
      nombre: "Consultoría en Estrategias de Negocio",
      descripcion: "Definimos estrategias para alcanzar tus objetivos empresariales.",
      stock: 5,
      categoria: "consultoria",
      imagen: "https://procemconsultores.com/wp-content/uploads/2020/11/Artes-del-Website-7-1024x493.png",
      precio: 3500,
    },
    {
      id: "CNS003",
      nombre: "Análisis de Procesos y Optimización",
      descripcion: "Diagnóstico y mejora de los procesos clave de tu organización.",
      stock: 3,
      categoria: "consultoria",
      imagen: "https://micr-sai.com.mx/wp-content/uploads/2021/03/optimizacion-de-procesos.jpg",
      precio: 3000,
    },
  ];

const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products);
    }, 3000);
});

export default getProducts