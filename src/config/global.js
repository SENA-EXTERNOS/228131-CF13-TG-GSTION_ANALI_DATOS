export default {
  global: {
    componenteFormativo: 'Introducción a la ciencia de datos',
    descripcionCurso:
      'La ciencia de datos es una profesión cada vez más demandada por las empresas a nivel mundial debido a su importancia tanto estratégica como operativamente. Un buen uso de los datos permite a las organizaciones generar información útil, confiable y de calidad para la toma de decisiones más acertadas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Conceptos y aplicaciones de la ciencia de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Estructura de un proyecto de ciencia de datos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: '<em>Big Data</em>',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Tipos de fuentes de información según su origen',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: '<em>Open Data</em>',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Técnicas de análisis y clasificación de información',
            hash: 't_1_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Apache Hadoop',
      referencia: 'Amazon. (2022). Apache Hadoop en Amazon.',
      tipo: 'Sitio web',
      link: 'https://aws.amazon.com/es/elasticmapreduce/details/hadoop/ ',
    },
    {
      tema: 'Datos abiertos',
      referencia:
        'MINTIC. (s.f.). Guía para el uso y aprovechamiento de Datos Abiertos de Colombia.',
      tipo: 'PDF',
      link:
        'https://herramientas.datos.gov.co/sites/default/files/Guia%20de%20Datos%20Abiertos%20de%20Colombia.pdf',
    },
    {
      tema: 'Lineamientos para anonimización de datos',
      referencia:
        'Colombia Ministerio de Salud. (2019). Lineamientos para la anonimización de datos del Sistema Nacional de Estudios y encuestas poblacionales para la salud.',
      tipo: 'PDF',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/ED/GCFI/lineamientos-anonimizacion-sistema-encuestas.pdf',
    },
    {
      tema: '<em>Scikit-learn</em>',
      referencia:
        '<em>Scikit-Learn.</em> (2022). <em>scikit-learn</em>: machine learning in Python.',
      tipo: 'Sitio web',
      link: 'https://scikit-learn.org/stable/',
    },
    {
      tema: 'TensorFlow',
      referencia:
        'TensorFlow. (2022). Crear modelos de aprendizaje automático de nivel de producción con TensorFlow',
      tipo: 'Sitio web',
      link: 'https://www.tensorflow.org/?hl=es-419',
    },
  ],
  glosario: [
    {
      termino: '<em>Big Data</em>',
      significado:
        'se usa cuando por la cantidad de datos o su complejidad, las herramientas de <em>hardware</em> y <em>software</em> tradicionales no son capaces de almacenar y/o procesar dichos datos en un tiempo razonable.',
    },
    {
      termino: '<em>Clustering</em>',
      significado:
        'consiste en formar grupos a partir de conjuntos de datos analizados. Los datos agrupados tienen entre ellos muchas similitudes.',
    },
    {
      termino: 'CRM',
      significado:
        '<em>customer Relationship Management</em> es un <em>software</em> que permite a las empresas rastrear cada interacción con los usuarios, leads y clientes.',
    },
    {
      termino: 'ERP',
      significado:
        '<em>enterprise resource manager</em> o sistemas de planificación de recursos empresariales son los sistemas de información gerenciales que integran y manejan muchos de los negocios asociados con las operaciones de producción y de los aspectos de distribución de una compañía en la producción de bienes o servicios.',
    },
    {
      termino: '<em>HADOOP</em>',
      significado:
        'es un <em>framework</em> que permite el procesamiento distribuido de grandes conjuntos de datos (<em>Big Data</em>) a través de <em>clusters</em> de computadores utilizando modelos de programación sencillos.',
    },
    {
      termino: 'HDFS',
      significado:
        '<em>hadoop Distributed File System</em> es el componente principal del ecosistema Hadoop. Esta pieza hace posible almacenar data sets masivos.',
    },
    {
      termino: 'IA',
      significado:
        'inteligencia artificial - Es la simulación de procesos de inteligencia humana por parte de máquinas.',
    },
    {
      termino: '<em>Insight</em>',
      significado:
        'es un descubrimiento que explica por qué las cosas ocurren de una determinada manera.',
    },
    {
      termino: '<em>Open Data</em>',
      significado:
        'son datos que pueden ser reutilizados y redistribuidos libremente por las personas sin mayores restricciones (en algunos casos el único requerimiento para su uso es la atribución al autor y que al compartirse conserve los mismos permisos).',
    },
    {
      termino: 'XML',
      significado:
        'siglas en inglés de <em>aeXtensible Markup Language<em>, traducido como "Lenguaje de Marcado Extensible" o "Lenguaje de Marcas Extensible", es un metalenguaje que permite definir lenguajes de marcas desarrollado por el <em>World Wide Web</em>.',
    },
  ],
  referencias: [
    {
      referencia:
        'Fernández, A. (2020). <em>Ciencia de datos para la ciberseguridad</em>. RAMA.',
      link:
        'https://www.alphaeditorialcloud.com/reader/ciencia-de-datos-para-la-ciberseguridad-1628020600?location=eyJjaGFwdGVySHJlZiI6IngwMiIsImNmaSI6Ii80W3gwMl0vMi8yW19pZENvbnRhaW5lcjAwMl0vMiJ9',
    },
    {
      referencia:
        'García, J. (2018). <em>Ciencia de datos Técnicas analíticas y aprendizaje estadístico en un enfoque práctico</em>. Altaria.',
      link:
        'https://www-alphaeditorialcloud-com.bdigital.sena.edu.co/reader/ciencia-de-datos?location=1',
    },
    {
      referencia:
        'Jones, H. (2019). <em>Ciencia de los datos: la guía definitiva sobre análisis de datos, minería de datos, almacenamiento de datos, visualización de datos</em>. Publicación independiente.',
      link:
        'https://biblioteca.sena.edu.co/F/QK1UI7RDS4Q5XCEJHTEG681M74XTARHJQABMVRV1F1YV8U8ELM-13705?func=full-set-set&set_number=003407&set_entry=000001&format=999',
    },
    {
      referencia:
        'Joyanes, L. (2015). <em>Sistemas de información en la empresa</em>. Alfaomega',
      link: '',
    },
    {
      referencia:
        'Orbegozo Arana, B. (2019). <em>Gestión de bases de datos con SQL, MySQL y Access: curso práctico</em>. Alfaomega Altaria.',
      link: '',
    },
    {
      referencia:
        'Piattini, M., & Ruiz, F. (2020). <em>Gobierno y Gestión de las Tecnologías y los Sistemas de Información</em>. Ra-Ma.',
      link:
        'https://www-alphaeditorialcloud-com.bdigital.sena.edu.co/reader/gobierno-y-gestion-de-las-tecnologias-y-los-sistemas-de-informacion-1591724977',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
