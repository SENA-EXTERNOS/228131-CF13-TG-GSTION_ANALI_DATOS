<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Conceptos y aplicaciones de la ciencia de datos
    .row.justify-content-center.mb-4
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema1/img1.svg', alt='')
      .col-lg-8
        p(data-aos="fade-down") La ciencia de datos es uno de los campos de estudio más atractivos y mejor pagados en la actualidad. Gracias a los avances de la tecnología, se puede crear, almacenar y procesar, grandes cantidades de información que aumentan año tras año. Es en la explotación de esta información que los científicos de datos, empleando diversas competencias, han encontrado un insumo valioso para las organizaciones, debido a que en la información se revelan las tendencias, patrones y comportamientos de estos negocios y, es gracias a los datos y a la información, que se genera conocimiento práctico y útil para crear e innovar. 
        p.mb-3(data-aos="fade-down") La empresa Amazon (2022), líder en procesos de computación en la nube y comercio electrónico, define ciencia de datos como:
        
        .cajon-b.color-primario.p-3.mb-4.abajo-derecha
          .bloque-texto-b.p-4
            .bloque-texto-f__comillas
              i.fas.fa-quote-left
              i.fas.fa-quote-right
              p.mb-0 La ciencia de datos es el estudio de datos con el fin de extraer información significativa para empresas. Es un enfoque multidisciplinario que combina principios y prácticas del campo de las matemáticas, la estadística, la inteligencia artificial y la ingeniería de computación, para analizar grandes cantidades de datos. Este análisis permite a los científicos de datos plantear y responder a preguntas como “qué pasó”, “por qué pasó”, “qué pasará” y “qué se puede hacer con los resultados”. 
              .row.mb-4
              .col-11.d-inline-flex.justify-content-end.align-items-center
                p.mb-0.text-bold (Amazon, 2022)
        
    .row.justify-content-center.mb-4
      .col-xl-12
        p(data-aos="fade-down") Los datos sin procesar no tienen ningún valor. Es cuando se utilizan para resolver los problemas de las organizaciones donde los datos se vuelven un insumo fundamental. Todos esos datos generados y almacenados diariamente pueden ayudar a transformar los negocios e incluso la sociedad si son aprovechados e interpretados correctamente, y este es el objetivo de la ciencia de datos.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-derecha.mb-5(data-aos="zoom-in")
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(style="background-color: #BDDCF6")
            .bloque-texto-g__img.d-flex.align-items-center
              figure
                img(src='@/assets/curso/temas/tema1/img2.png', alt='' )
            .bloque-texto-g__texto--border.p-2.d-inline-block
              .bloque-texto-g__texto.p-4
                p.mb-0 Para la gestión y aprovechamiento de la información, la ciencia de datos combina las habilidades de los miembros del equipo de trabajo que, por lo general, tienen una gran diversidad de perfiles, entre ellos: matemáticas y estadística, ciencias de la computación, inteligencia artificial y conocimiento del negocio.
    
    TabsA.color-acento-botones
      .tarjeta.color-acento-botones--borde.p-4(titulo="Matemáticas y estadística")( style="background-color: #1389f813;border:solid 4px #1389f82d")
        .row.justify-content-center.align-items-center.mb-5
          .col-xl-8.mb-4
            p En este campo, son de especial interés áreas como el cálculo, el álgebra lineal, la estadística y la probabilidad. Se usan, por ejemplo, el álgebra lineal para representar una red neuronal (utilizada en machine #[em learning] o aprendizaje de máquina), y el cálculo, para optimizar dicha red. La estadística es requerida para el análisis y visualización de los conjuntos de datos empleados y sus #[em insights], y por medio de la probabilidad, el científico de datos podrá cuantificar la incertidumbre, es decir, la posibilidad que cierto evento ocurra con los datos analizados. 
          .col-xl-3.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img3_1.svg', alt='')
      .tarjeta.color-acento-botones--borde.p-4(titulo="Ciencias de la computación")( style="background-color: #1389f813;border:solid 4px #1389f82d")
        .row.justify-content-center.align-items-center.mb-5
          .col-xl-8.mb-4
            p El conocimiento en este campo, permite programar y administrar las tecnologías necesarias para el almacenamiento, procesamiento, uso y presentación de los datos. Lenguajes de programación (Python, R), motores de bases de datos, requerimientos de #[em hardware] y #[em software], son algunas de las áreas relacionadas que se usan día a día en proyectos de ciencia de datos y esto sin mencionar las nuevas tecnologías, utilizadas cuando se debe trabajar con grandes cantidades de información (#[em Big data]).
          .col-xl-3.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img3_2.svg', alt='')
      .tarjeta.color-acento-botones--borde.p-4(titulo="Inteligencia artificial")( style="background-color: #1389f813;border:solid 4px #1389f82d")
        .row.justify-content-center.align-items-center.mb-5
          .col-xl-8.mb-4
            p Con su uso y el #[em machine learning] (aprendizaje de máquina), es posible procesar cantidades masivas de datos que serían imposibles de manejar solo por humanos. Este tipo de inteligencia permite, además, perfeccionar los modelos mediante el uso de algoritmos y análisis predictivo. Algunas de las herramientas utilizadas en este campo son: scikit-learn y TensorFlow, que son bibliotecas de Python, para el aprendizaje automático.
          .col-xl-3.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img3_3.svg', alt='')
    
    .row.justify-content-center.align-items-center.mb-5
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.p-3.mb-5.bg-gradient
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema1/img4.svg")
            .col
              h3.mb-1 Herramientas de las ciencias de datos 
              p.mb-0 Remítase al material complementario y explore los elementos que profundizan en estos temas: #[em Scikit-learn] y #[em TensorFlow].
    
    .row.justify-content-center.align-items-center.mb-2
      .col-xl-12
        p(data-aos="fade-down") En la actualidad son muchos los sectores que ya aprovechan la ciencia de datos para fortalecer sus conocimientos del negocio y tomar mejores decisiones. Los siguientes son algunos ejemplos de dichos sectores y cómo utilizan las herramientas y la información para su beneficio:
    
    .bg--img_03
      .row.justify-content-center
        .col-lg-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema1/img5.png", alt="alt").img400.m-auto
        .col-lg-8
          AcordionA.mb-2(tipo="a" clase-tarjeta="tarjeta ca-ab")
            .row.justify-content-center.mb-4(titulo="Sector bancario")
              .col-10
                p.mb-0 Es uno de los que más genera información en sus transacciones diarias (movimientos bancarios, creación de cuentas, transferencias electrónicas) y estos recursos se pueden utilizar para detectar patrones de usos fraudulentos en cuentas bancarias o tarjetas de crédito, predecir comportamientos de clientes con relación a pagos de préstamos, identificar relaciones entre indicadores financieros, fidelización de clientes, entre otros.
            .row.justify-content-center.mb-4(titulo="Sector salud")
              .col-10
                p.mb-0 En este sector se almacena información de los pacientes, su historia clínica, tratamientos, exámenes realizados, medicamentos suministrados y más. Esta información correctamente aprovechada puede ayudar en procesos como los estudios epidemiológicos, la identificación de terapias o tratamientos más efectivos para ciertas enfermedades, la detección temprana de patologías y el estudio de factores de riesgos para la salud. En este caso, no solo se mejoran procesos, se salvan vidas. 
            .row.justify-content-center.mb-4(titulo="Ciberseguridad")
              .col-10
                p.mb-0 Los #[em software] de seguridad tradicionales requieren de la intervención humana para identificar vulnerabilidades. Esta parte del proceso se puede realizar de manera más eficiente, al aplicar procesos de análisis de datos y técnicas de #[em Machine Learning], para buscar patrones y proceder a dar la alerta cuando se detectan situaciones que no corresponden al patrón definido.
            .row.justify-content-center.mb-4(titulo="Industria")
              .col-10
                p.mb-0 La ciencia de datos permite el mantenimiento predictivo de equipos y maquinarias al analizar y procesar la información de funcionamiento de los mismos, prediciendo fallos con antelación y disminuyendo así la inversión en estas actividades.
            .row.justify-content-center.mb-4(titulo="Automatización")
              .col-10
                p.mb-0 Las técnicas de ciencia de datos como el #[em Machine Learning] permiten la automatización de procesos y actividades como la conducción de un vehículo o la creación de imágenes a partir de consultas en lenguaje natural.

    Separador
    .row
      .col-xl-12       
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 1.1 Estructura de un proyecto de ciencia de datos
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p(data-aos="fade-down") Cada proyecto de ciencia de datos es único, pero para su correcta ejecución, siempre es necesario contar con un plan de trabajo que facilite la comunicación entre los interesados y ayude al trabajo eficiente y articulado del equipo. Para la realización de este plan de trabajo, existen diversos enfoques como, por ejemplo, el Cross Industry Standard Process for Data Mining (CRISP-DM) o el Knowledge Discovery in Databases (KDD) que, en su mayoría, presentan un ciclo de vida del proyecto con fases similares. A continuación, se presentan las fases del ciclo de vida que, dependiendo del tipo de proyecto, puede tener más o menos componentes y que frecuentemente son ejecutadas de forma interactiva.
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema1/img6.svg', alt='')
    
    .tarjeta.tarjeta--gris.p-4
      LineaTiempoC.color-acento-botones(text-small)
        .row(titulo="Conocimiento del negocio")
          .col-md-6.mb-4.mb-md-0
            p Se centra en conocer los objetivos y requerimientos del proyecto. El éxito o el fracaso del proyecto de ciencia de datos dependerá en gran medida del entendimiento de las necesidades del cliente o de la organización, pues unos requerimientos deficientes pueden llevar a conclusiones erróneas o de poca utilidad. Algunas de las tareas a desarrollar en esta fase son: determinar los objetivos del negocio y definir los criterios de éxito del proyecto, evaluar los recursos necesarios y disponibles para su ejecución (esto incluye conocer el origen y la disponibilidad de los recursos, evaluar los riesgos y realizar un análisis de costo - beneficio), seleccionar las tecnologías y las herramientas necesarias para la ejecución del proyecto y definir el plan de trabajo para cada una de las fases.
            br
            p Para la definición de los objetivos del proyecto se deben plantear preguntas pertinentes y específicas que serán respondidas con el proceso de ciencia de datos. Algunas de las preguntas que se responden con este tipo de proyectos son:
            ul.lista-ul--color
                li
                  i.fas.fa-chevron-right(style="color:#000000")
                  .col-12
                    p.mb-0 ¿Cuánto? o ¿cuántos? (regresión).
                li
                  i.fas.fa-chevron-right(style="color:#000000")
                  .col-12
                    p.mb-0 ¿Qué categoría? (clasificación).
                li
                  i.fas.fa-chevron-right(style="color:#000000")
                  .col-12
                    p.mb-0 ¿Qué grupo? (agrupación en clústeres).
                li
                  i.fas.fa-chevron-right(style="color:#000000")
                  .col-12
                    p.mb-0 ¿Es extraño? (detección de anomalías).
                li
                  i.fas.fa-chevron-right(style="color:#000000")
                  .col-12
                    p.mb-0 ¿Qué opción se debe elegir? (recomendación). 
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img7.svg', alt='')

        .row(titulo="Adquisición y comprensión de los datos")
          .col-md-6.mb-4.mb-md-0
            p En esta fase se identifican, recolectan y analizan los conjuntos de datos que se emplearán en la ejecución del proyecto. Aquí los datos deben trasladarse desde su ubicación original a la ubicación destino en la cual se ejecutarán las operaciones de limpieza y análisis. Posteriormente, se realizará una exploración de los datos para comprender mejor la información disponible y auditar su calidad realizando los ajustes necesarios para dejarla lista para el procesamiento. Esta revisión incluye la identificación de datos faltantes, tipos de datos inconsistentes o información no estandarizada.
            p En la exploración de los datos se utilizan (según la tecnología empleada) funciones de resumen y de visualización, las cuales permiten empezar a detectar relaciones entre los datos o inconsistencias que deberán ser corregidas. Una vez se ha realizado la limpieza de los datos y las visualizaciones iniciales, se puede empezar a seleccionar el tipo de modelo a aplicar. Es posible que en fases posteriores sea necesario regresar a este paso e identificar otras fuentes de datos que permitan complementar la información inicial y obtener mejores resultados.
            P En la adquisición y comprensión de los datos también puede ser necesaria la construcción de nuevos atributos a partir de la información existente (con combinación de variables o cálculos entre los atributos).
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img8.svg', alt='')

        .row(titulo="Modelado")
          .col-md-6.mb-4.mb-md-0
            p Existen diversos modelos (predictivos o exploratorios) a aplicar, según la o las preguntas a responder en el proyecto de ciencia de datos. Algunos ejemplos de los modelos a aplicar son: regresiones, bosques de decisiones, árbol de decisión, redes neuronales, agrupación en clústeres, entre otros. La selección del modelo adecuado dependerá de qué se quiere hacer con los datos (objetivo del proyecto de ciencia de datos) y cuáles son los requisitos del proyecto (en cuanto a precisión, tiempos de entrenamiento, cantidad de parámetros y características).
            P Esta fase está compuesta por cuatro tareas: división de los datos de entrada (se generan aleatoriamente dos conjuntos de datos balanceados, uno para aprendizaje o entrenamiento y otro para pruebas), compilación o aplicación del modelo (con los datos de entrenamiento), evaluación del modelo entrenado (ahora usando los datos de prueba), revisión de los resultados de los parámetros de ajuste del mismo y, por último, selección de la mejor solución mediante la comparación de las métricas de éxito de los modelos evaluados.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img9.svg', alt='')
      
        .row(titulo="Implementación y despliegue")
          .col-md-6.mb-4.mb-md-0
            p Cuando ya se tienen los modelos evaluados y seleccionados, se publican y utilizan para procesar otros datos, ya sea en tiempo real o por lotes. Por lo general, para la implementación de los modelos, se utiliza una interfaz de API (Application Programming Interface - Interfaz de Programación de Aplicaciones) abierta, que permite que el modelo sea utilizado por otras aplicaciones, como: tableros de control, sitios web, hojas de cálculo y aplicaciones en línea o móviles. Esta fase es de gran importancia, porque un modelo solo es útil hasta que el cliente o la organización puede acceder a sus resultados.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img10.svg', alt='')
        
        .row(titulo="Aceptación")
          .col-md-6.mb-4.mb-md-0
            p En esta fase se abordan dos tareas principales: la validación del sistema y la entrega del proyecto. En la validación del sistema se confirma que el proyecto y el modelo implementado cumplen con los requisitos iniciales del cliente y en la entrega del proyecto a la organización, para su ejecución en un entorno de producción. El cliente debe validar que los resultados finales satisfacen sus necesidades y responden a las preguntas realizadas en la fase de “conocimiento del negocio”. El proyecto debe ser entregado debidamente documentado, para que pueda ser aprovechado por el cliente.
            P Se recomienda hacer una revisión de la ejecución del proyecto para analizar qué se hizo bien, qué problemas y oportunidades de mejora se presentaron y cuáles fueron las lecciones aprendidas para mejorar procesos futuros. El constante monitoreo del modelo y los ocasionales ajustes pueden ser requeridos después de la entrega.

        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img11.svg', alt='')
    
    .row.justify-content-center.align-items-center.mb-4
      .col-xl-12
        p(data-aos="fade-down") La siguiente infografía muestra las fases de un proyecto de ciencia de datos y cómo estas se ejecutan de forma interactiva. No siempre este es un ejercicio secuencial y en muchos casos será necesario regresar a fases ya ejecutadas para realizar ajustes.
    
    //.row.justify-content-center.align-items-center.md-5
      .col-12
        .titulo-sexto.color-acento-contenido
          h5(data-aos="fade-down") Figura 1
          br
          span Fases de un proyecto  de ciencia de datos
    .row.mb-4.mb-md-5(data-aos="fade-down")
      .bg4
      .row.justify-content-center.align-items-center          
        .col-lg-10
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/tema1/img12.svg', alt='')

    Separador
    .row
      .col-xl-12       
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 1.2	 #[i Big Data]
    
    .row.justify-content-center.mb-5
      .col-md-2.bloque_vertical2.d-none.d-md-block.mb-md-0
      .col-md-10.mb-md-0
        .px-2
          p.mb-0 El concepto #[em Big data] hace referencia al análisis masivo de datos (que pueden ser estructurados, semiestructurados o no estructurados). Se usa cuando, por la cantidad de datos o su complejidad, las herramientas de #[em hardware] y #[em software] tradicionales no son capaces de almacenar y/o procesar dichos datos, en un tiempo razonable. Lo que se busca con el #[em Big data] al interior de las organizaciones, es aprovechar esta gran cantidad de información. Su objetivo es brindar las herramientas y metodologías para poder procesar los datos, analizarlos y obtener de ellos insights que les brinden una ventaja competitiva y una toma de decisiones soportada en el conocimiento y la experiencia y no en la intuición.
    
    .row.justify-content-center
      .col-md-12
        p.mb-0 Algunos de los beneficios de las organizaciones al usar el #[em Big data] son:
    
    .row.justify-content-center.mb-5
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema1/img14.svg' alt='AvatarTop')
        .tarjeta.tarjeta--amarilla-1.p-4
          h2.text-center.mt-5 Reducción de costos
          p.text-center Especialmente en términos de los costos relacionados con el almacenamiento de grandes cantidades de datos gracias a las tecnologías de datos como Hadoop, además de los ahorros que se pueden llegar a generar al optimizar procesos, gracias al análisis de la información existente.
      
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema1/img15.svg' alt='AvatarTop')
        .tarjeta.tarjeta--amarilla-1.p-4
          h2.text-center.mt-5 Mayor velocidad
          p.text-center Las herramientas de #[em Big data] permiten análisis y procesamiento con una mayor eficiencia y mejor aprovechamiento de la memoria. Esto permite a las organizaciones, tomar mejores y más rápidas decisiones. 
      
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema1/img16.svg' alt='AvatarTop')
        .tarjeta.tarjeta--amarilla-1.p-4
          h2.text-center.mt-5 Generación de nuevos<br>productos y servicios
          p.text-center Gracias al análisis de la información de necesidades y satisfacción de los clientes, se pueden crear nuevos productos y servicios orientados a satisfacer las necesidades reales del mercado.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p(data-aos="fade-down") En el #[em Big data], las fuentes de datos son diferentes a las tradicionales, que suelen almacenar datos estructurados en bases de datos relacionales. Estos datos son clasificados en tres grandes categorías: datos estructurados, datos no estructurados y datos semiestructurados.

    .row.justify-content-center.align-items-center.md-5.mb-5
      .col-10
        .titulo-sexto.color-acento-contenido
          h5(data-aos="fade-down") Figura 1
          br
          span #[i Fuentes del Big data ]
        figure
          img(src='@/assets/curso/temas/tema1/img17.svg', alt='')
          br
          figcaption 
            p.mb-0 
              b Nota: 
              | tomada de #[em Big data 101 Module 2 Video 1]. (2016). 

      
    .row.justify-content-center.mb-5
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema1/img18.svg' alt='AvatarTop')
        .tarjeta.tarjeta--amarilla-1.p-4
          h2.text-center.mt-5 Datos estructurados
          p.text-center Son datos con formato o esquema fijo como los que encontramos en bases de datos relacionales, hojas de cálculo (como Excel) y archivos planos (separados por comas). El tener un formato y esquema fijo facilita la manipulación de los datos.
      
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema1/img19.svg' alt='AvatarTop')
        .tarjeta.tarjeta--amarilla-1.p-4
          h2.text-center.mt-5 Datos no estructurados
          p.text-center Estos son datos sin un tipo predefinido, que pueden estar almacenados como documentos u objetos sin una estructura uniforme. Se calcula que alrededor del 80 % de la información de las organizaciones es de este tipo. Algunos ejemplos de datos no estructurados son: audios, videos, fotografías, correos electrónicos, mensajes y comentarios de redes sociales.
      
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema1/img20.svg' alt='AvatarTop')
        .tarjeta.tarjeta--amarilla-1.p-4
          h2.text-center.mt-5 Datos semiestructurados
          p.text-center Este tipo de datos tiene un flujo lógico y un formato definido, pero que no es de fácil comprensión para el usuario de forma directa. Estos datos usan etiquetas y marcadores para separar los elementos dados. Algunos ejemplos de datos semiestructurados son XML y HTML.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p(data-aos="fade-down") En 2001, el analista Doug Laney presentó el concepto de las 3V como principios básicos para entender el #[em Big data]:
    
    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Volumen")
        .row        
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/img21.svg', alt='')              
          .col-md-8.mb-4.mb-md-0
            h4 Volumen
            p Se refiere a la cantidad de datos, la cual viene creciendo año a año. Hace poco tiempo ya se hablaba de datos en cantidades de #[em petabytes] y ahora se empieza a hablar de exabytes y #[em zettabytes], cantidades inimaginables hace algunas décadas.
      .py-3.py-md-4(titulo="Variedad")
        .row
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/img22.svg', alt='')              
          .col-md-8
            h4 Variedad
            p Se refiere al número de tipos de datos. Las fuentes y los tipos de datos pueden ser diversas y, al analizarlos en conjunto, requieren nuevas herramientas y procedimientos. El mundo real está lleno de datos en diferentes formatos y el reto del #[em Big data] es permitir a la organización aprovecharlos y hacerlos significativos.
      .py-3.py-md-4(titulo="Velocidad")
        .row
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/img23.svg', alt='') 
          .col-md-8
            h4 Velocidad
            p Se refiere a la velocidad de crecimiento y de procesamiento de datos. Existen procesos que requieren toma de decisiones en corto tiempo como, por ejemplo, sistemas de detección de fraudes bancarios. El elemento de velocidad llega a ser, en algunos casos, más importante que el volumen de datos, porque le puede dar una ventaja competitiva a la organización.

    .row.justify-content-center.mb-4
      .col-md-2.bloque_vertical3.d-none.d-md-block.mb-md-0
      .col-md-10.mb-md-0
        .px-2
        p(data-aos="fade-down") En la actualidad, las tecnologías de #[em Big data] se encuentran en una fase de evolución y maduración, con un largo camino por recorrer; pero, algunas organizaciones ya empiezan a resaltar como referentes de este campo, como es el caso de Apache Foundation, que coordina el desarrollo del #[em software] de código abierto Hadoop, que es un #[em framework] que permite trabajar con aplicaciones distribuidas y, además, facilita el almacenamiento y procesamiento de grandes cantidades de información.
        p(data-aos="fade-down").mb-4 El siguiente video describe con más detalle a Hadoop y cómo es utilizado en procesos de #[em Big data]:
    
    .row.justify-content-center.align-items-center.md-5   
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador
    .row
      .col-xl-12       
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 1.3 Tipos de fuentes de información según su origen
    
    .row.justify-content-center.mb-5
      .col-md-2.bloque_vertical4.d-none.d-md-block.mb-md-0
      .col-md-10.mb-md-0
        .px-2
        p(data-aos="fade-down").mb-0 Dependiendo de diversos factores, la información puede ser clasificada de diferentes formas como, por ejemplo: su origen, su formato o su forma de distribución. A continuación, se presentan algunos ejemplos de estas clasificaciones y fuentes de información para el desarrollo de proyectos de ciencias de datos personales o al interior de las organizaciones. Cabe destacar que en la mayoría de los casos la información a utilizar estará anonimizada, es decir, no se podrá identificar con ella directamente a la persona que describe. Para tal fin se omiten datos como números de identificación, nombres completos, direcciones y demás datos sensibles.
    
    .row.justify-content-center.mb-4
      .col-lg-10
        .tarjeta.p-3.mb-4.bg-gradient
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema1/img4.svg")
            .col
              .row.justify-content-between.align-items-center
                .col-9.mb-3.mb-sm-0
                  h3.mb-1 Anonimización de datos del sistema de salud
                  p Desde el Ministerio de Salud de Colombia existe un documento de lineamientos para la anonimización de datos del sistema de salud que puede ser consultado en el siguiente enlace:
                .col.mb-3.mb-sm-0
                  .row.justify-content-center.mb-1
                    .col
                      a.boton.boton--b(:href="('https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/ED/GCFI/lineamientos-anonimizacion-sistema-encuestas.pdf')" target="_blank")
                        span Enlace web
                        i.fas.fa-link    
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p(data-aos="fade-down").mb-4 Es fundamental analizar la veracidad y confiabilidad de las fuentes de información seleccionadas, pues si los datos obtenidos no cumplen con los criterios de calidad, es muy probable que los resultados del análisis sean erróneos o incompletos.
        p(data-aos="fade-down").mb-4 Los siguientes son algunos de los tipos de fuentes de información:
    
    .tarjeta.tarjeta--azul.p-4.mb-5
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Fuente de información interna
            p Se refiere a todas aquellas fuentes que provienen de investigaciones internas o de la operación diaria de la propia organización, almacenadas en su sistema de información y que pueden intercambiarse con clientes y proveedores. En estas fuentes de datos, se incluyen todas aquellas que almacenan los datos generados por los procesos internos de la organización, como son la gestión comercial, las ventas, los inventarios, los recursos humanos, clientes y demás. Es aquí donde los sistemas de información empresariales cobran gran importancia en el registro y gestión de las actividades como, por ejemplo, el #[b CRM]: Customer Relationship Management - Gestión de Relación con el Cliente, o el #[b ERP]: Enterprise Resource Planning - Planificador de Recursos Empresariales.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img26.svg', alt='')

        .row.justify-content-center.align-items-center.my-lg-4              
          .col-md-6.mb-4.mb-md-0
            h3 Fuentes de información externa 
            p Son aquellas que tienen su origen por fuera de la organización, por ejemplo, agencias externas, empresas de investigación o entidades gubernamentales. Estas fuentes complementan las fuentes internas y ayudan a mejorar el análisis a realizar, ofreciendo información del contexto que no tenía la organización.
            p Algunos ejemplos de las fuentes de información externa, son los datos abiertos (#[em open data]), los datos pagos y los datos de redes sociales. Los datos abiertos son datos disponibles de forma gratuita, casi siempre por entidades gubernamentales y que todos pueden usar y redistribuir sin condiciones ni restricciones de derechos de autor. Los datos pagos son datos disponibles de forma comercial, creados o adquiridos por el proveedor de datos, que se ofrecen por un valor a la organización y que pueden ser usados por esta, pero no redistribuidos o publicados (por ejemplo, las bases de datos de registros en las cámaras de comercio). Los datos de redes sociales son todos los datos compartidos por los usuarios en las plataformas de redes sociales y que, mediante técnicas de Web Scraping, pueden ser descargados de estos sitios y aprovechados en los proyectos de ciencias de datos de la organización, como los comentarios de las publicaciones realizadas en Twitter, por la organización, para evaluar el nivel de satisfacción de los clientes, con los productos o servicios ofrecidos.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img26.svg', alt='')
    

    p(data-aos="fade-down").mb-4 Según el formato utilizado de las fuentes de información, estas se pueden clasificar en físicas o digitales :

    .bg--img_03
      .row.justify-content-center.mb-4        
        .col-lg-8
          AcordionA.mb-2(tipo="a" clase-tarjeta="tarjeta ca-ab")
            .row.justify-content-center.mb-4(titulo="Fuentes de información físicas")
              .col-10
                p.mb-0 Son aquellas en las que el registro de la información se hace a través medios físicos, como, por ejemplo, el papel. Estas fuentes aún son utilizadas en algunos sectores, con las desventajas que puede acarrear la gestión de este material, pues, además de ocupar espacio y ser más susceptible a daños, también su uso en proyectos de ciencias de datos, requiere de un proceso adicional de digitalización. 
            .row.justify-content-center.mb-4(titulo="Fuentes de información digitales")
              .col-10
                p.mb-0 Estas fuentes almacenan y distribuyen información a través de un soporte digital. Su formato facilita su uso y almacenamiento, porque gracias a las tecnologías actuales, se pueden conservar en dispositivos de pequeñas dimensiones o incluso en la nube. Por esa misma facilidad de acceso y almacenamiento, se tienen desventajas como el plagio, las copias ilegales y hasta su alteración o modificación.
        .col-lg-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema1/img27.svg", alt="alt").img400.m-auto    
    

    p(data-aos="fade-down").mb-4 Por último, según el grado o nivel de información que proporcionan las fuentes, también se pueden clasificar en tres tipos: fuentes primarias, fuentes secundarias y fuentes terciarias.

    .row.justify-content-center.mb-5
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema1/img28.svg' alt='AvatarTop')
        .tarjeta.tarjeta--amarilla-1.p-4
          h2.text-center.mt-5 Fuentes primarias
          p.text-center Son aquellas que contienen información original y de primera mano, lo más cercanas posibles al evento que se investiga. Esta información es el resultado de un trabajo intelectual de su autor o de la organización y su contenido no ha sido alterado, analizado o interpretado, por eso se consideran una fuente fidedigna del tema analizado. Ejemplos de este tipo de fuentes son las tesis, los libros y las patentes.
      
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema1/img29.svg' alt='AvatarTop')
        .tarjeta.tarjeta--amarilla-1.p-4
          h2.text-center.mt-5 Fuentes secundarias
          p.text-center Estas fuentes se basan en las fuentes primarias e incluyen información ampliada de lo que se expone en estas. Por lo general son análisis, valoraciones, interpretaciones o conclusiones hechas por otros autores. En este caso, la opinión o la interpretación del nuevo autor busca complementar lo expuesto por el autor original.
      
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema1/img30.svg' alt='AvatarTop')
        .tarjeta.tarjeta--amarilla-1.p-4
          h2.text-center.mt-5 Fuentes terciarias
          p.text-center Este tipo de fuente es la menos habitual de todas. Presenta información recopilada en fuentes primarias y secundarias, las depura y las expone para su consulta. Es el tipo de información que se encuentra por lo general en portales web donde se recopilan contenidos de diversas fuentes y se presentan sus autores.

    Separador
    .row
      .col-xl-12       
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 1.4 #[i Open Data]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p(data-aos="fade-down").mb-4 El #[em Open data] o datos abiertos, son datos que pueden ser reutilizados y redistribuidos libremente por las personas, sin mayores restricciones (en algunos casos el único requerimiento para su uso, es la atribución al autor y que, al compartirse, conserve los mismos permisos). 
        p(data-aos="fade-down").mb-4 Tal y cómo se expresa en el portal de #[em Open data] del Ministerio de Tecnologías de la Información y las Comunicaciones de Colombia (MinTIC, s.f.).
        br
        .cajon.color-acento-botones.cajon--amarillo-1.p-3.p-sm-4
          p.mb-0(data-aos="fade-down").mb-4 Datos abiertos corresponde a una filosofía y práctica que persigue que determinados datos de los gobiernos estén disponibles de forma libre a todo el mundo, sin restricciones de #[em copyright], patentes u otros mecanismos de control, permitiendo el impulso del crecimiento económico, salvaguardar los derechos de ciudadanos y empresas, así como delimitar las obligaciones de las administraciones. 
      .col-lg-4
        figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema1/img31.svg", alt="alt").img400.m-auto
    
    .row.justify-content-center.mb-5
      .col-md-2.bloque_vertical5.d-none.d-md-block.mb-md-0
      .col-md-10.mb-md-0
        .px-2
        p(data-aos="fade-down") El objetivo de esta creciente filosofía es el de abrir los datos a la sociedad, para que esta pueda sacar provecho de ellos. Busca que cualquier persona, organización o institución, pueda aprovechar toda esta información producida en su mayoría con recursos públicos, para la generación de nuevos conocimientos de interés propio o en procesos de investigación, análisis y desarrollo, en problemáticas sociales que se puedan beneficiar de este trabajo colaborativo. 
        p(data-aos="fade-down") Los datos proporcionados en esta modalidad, provienen de entidades públicas o fueron financiados con recursos públicos (alcaldías, gobernaciones, ministerios, centros de salud, etc.) e incluyen diferentes temas de dichos actores, entre ellos: datos médicos, geográficos, meteorológicos, inventarios, contratación y muchos otros.
        p(data-aos="fade-down").mb-0 Las siguientes son algunas de las características esperadas en los datos abiertos para su mejor aprovechamiento.

    TabsA.color-acento-botones.mb-5
      .tarjeta.color-acento-botones--borde.p-4(titulo="Reutilización y distribución")( style="background-color: #D2E1F1;border:solid 4px #D2E1F1")
        .row.justify-content-center.align-items-center
          .col-xl-8.mb-4
            p Los datos deben ser provistos bajo licencias que permitan reutilizarlos y redistribuirlos libremente, así como combinarlos con otros conjuntos de datos.
          .col-xl-4.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img33.svg', alt='')
      .tarjeta.color-acento-botones--borde.p-4(titulo="Disponibilidad y acceso")( style="background-color: #D2E1F1;border:solid 4px #D2E1F1")
        .row.justify-content-center.align-items-center
          .col-xl-8.mb-4
            p Los datos deben estar disponibles y accesibles sin costo (o en unos pocos casos con un bajo costo), preferiblemente desde Internet. Los formatos en los que se comparte la información, deben facilitar su almacenamiento y manipulación. Los formatos más utilizados son: CSV (valores separados por coma), XML (lenguaje etiquetado extensible), JSON (notación de objetos JavaScript) y ODF (formato de documento abierto para aplicaciones ofimáticas), entre otros.
          .col-xl-4.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img33.svg', alt='')
      .tarjeta.color-acento-botones--borde.p-4(titulo="Participación universal")( style="background-color: #D2E1F1;border:solid 4px #D2E1F1")
        .row.justify-content-center.align-items-center
          .col-xl-8.mb-4
            p Los datos deben estar disponibles para cualquier tipo de uso, sin discriminación, en términos de personas o fines. Por ejemplo, no se puede limitar el uso de los datos solo para temas académicos o educativos o restringir su acceso por temas geográficos o étnicos
          .col-xl-4.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img33.svg', alt='')
    

    .row.justify.content-center.align-items-center.mb-5
      .col-xl-4
        figure(data-aos="zoom-in")
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/tema1/img34.svg', alt='')
      .col-xl-8
        .cajon-b.color-primario.p-3.mb-5.abajo-derecha
          p(data-aos="fade-down") El cumplimiento de estas características ayuda a mejorar la interoperabilidad de la información, es decir, permite a los interesados trabajar y combinar diferentes conjuntos de datos abiertos, así como los datos propios para desarrollar sistemas más complejos.
          p(data-aos="fade-down") Existen numerosas iniciativas de datos abiertos, siendo los Estados Unidos y Gran Bretaña pioneros y ejemplos a nivel mundial. Las siguientes son algunas de estas iniciativas presentadas como material adicional que podrá ser utilizado como fuente de información para ejercicios de ciencia de datos:

    .row.justify-content-center.align-items-center.md-5
      .col-7
        .titulo-sexto.color-acento-contenido
          h5(data-aos="fade-down") Tabla 1
          br
          em Iniciativas de datos abiertos
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .tabla-c
          table
            thead(style="background-color:#0F2771;color:#FFFFFF")
              tr
                th.colum-1 Nombre de la iniciativa
                th Dirección web
            tr
              td.colum-1 
                p.mb-0 
                  b Estados Unidos
              td
                p.mb-0 https://data.gov/
            tr
              td.colum-1 
                p.mb-0 
                  b Reino Unido
              td
                p.mb-0 https://www.data.gov.uk/
            tr
              td.colum-1 
                p.mb-0 
                  b Banco Mundial
              td
                p.mb-0 https://datos.bancomundial.org/
            tr
              td.colum-1 
                p.mb-0 
                  b Colombia
              td
                p.mb-0 https://www.datos.gov.co/

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
      .cajon.color-acento-botones.cajon--amarillo-1.p-3.p-sm-4
          p(data-aos="fade-down").mb-0 En el caso de Colombia, es la Ley 1712 de 2014 (Ley de transparencia y del derecho de acceso a la información pública nacional) donde se definen qué son los datos abiertos, la información pública (clasificada o reservada) y las entidades obligadas a abrir sus datos al público para alimentar el sistema de información. Las instituciones que abren sus datos deben seguir los pasos de la “Guía Nacional de Apertura de Datos” para realizar este proceso. Allí se orienta paso a paso para la correcta publicación de los datos, velando por su integridad y usabilidad. Toda la información abierta pasa por un proceso de aprobación (que puede durar hasta 3 días hábiles).

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p(data-aos="fade-down").mb-4 La siguiente infografía presenta los principios que se promueven con los datos abiertos:


    .row.mb-4.mb-md-5(data-aos="fade-down")
      .bg4
      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-12
          figure
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/tema1/img35.svg', alt='')
            figcaption 
              p.mb-0 #[b Nota:] tomada de Guía para el uso y aprovechamiento de datos abiertos en Colombia. 

    Separador
    .row
      .col-xl-12       
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 1.5	 Técnicas de análisis y clasificación de información

    .row.justify.content-center.align-items-center.mb-5
      .col-xl-4
        figure(data-aos="zoom-in")
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/tema1/img36.svg', alt='')
      .col-xl-8
        .cajon-b.color-primario.p-3.mb-5.abajo-derecha
          p(data-aos="fade-down") En los proyectos de ciencias de datos se utilizan principalmente dos modelos de trabajo según la información disponible y el requerimiento o necesidad de la organización. Estos dos modelos son: modelos descriptivos y modelos predictivos; cada uno de estos modelos cuenta con tareas y técnicas propias que permitirán el análisis y la clasificación de la información.
          p(data-aos="fade-down") Los modelos descriptivos buscan encontrar patrones o resumir datos (no buscan predecir nuevos datos a partir de la información disponible). Las técnicas aplicadas a estos modelos son: el agrupamiento, reglas de asociación y análisis correlacional. Los modelos predictivos buscan aproximar posibles valores futuros o desconocidos, utilizando los datos con los que se cuenta. En este modelo los datos van acompañados de una salida, que puede ser una clase, una categoría o un valor numérico. Algunas técnicas aplicadas a estos modelos son la clasificación y la regresión.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
      p(data-aos="fade-down") A continuación, se describen brevemente algunas de las técnicas utilizadas por los modelos descritos anteriormente.
    
    .bg--img_03
      .row.justify-content-center.mb-4
        .col-lg-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema1/img37.svg", alt="alt").img400.m-auto
        .col-lg-8
          AcordionA.mb-2(tipo="a" clase-tarjeta="tarjeta ca-ab")
            .row.justify-content-center.mb-4(titulo="Agrupamiento")
              .col-10
                p.mb-0 También es conocida como “#[i clustering]” o aglomeración, consiste en formar grupos a partir de conjuntos de datos. Aquí se analizan los datos para agruparlos y generar una etiqueta; estos se agrupan de tal forma que los datos que pertenecen a un mismo grupo tienen características similares. Es una de las técnicas descriptivas más utilizadas. Al inicio del proceso de #[i clustering] no se conoce cuántos grupos de clasificación existirán ni cuántos elementos tendrá cada grupo.
            .row.justify-content-center.mb-4(titulo="Correlación")
              .col-10
                p.mb-0 En esta técnica, se analiza el porcentaje de similitud entre los valores de dos variables numéricas. Esto se realiza mediante modelos matemáticos con el coeficiente de correlación “r” que puede tomar valores entre –1 y 1; cuando el coeficiente de correlación es igual a –1 o 1, significa que las variables analizadas están fuertemente relacionadas. Si el valor obtenido es igual a 0, las variables no guardan ninguna correlación.
            .row.justify-content-center.mb-4(titulo="Asociación")
              .col-10
                p.mb-0 Su objetivo es encontrar relaciones no explícitas entre atributos categóricos. Es similar al proceso de correlación, pero para variables nominales, no numéricas.
            .row.justify-content-center.mb-4(titulo="Clasificación")
              .col-10
                p.mb-0 Cada entrada de una base de datos (llamada instancia), pertenece a una clase, indicada mediante el valor del atributo “clase de la instancia”, que es un valor discreto que corresponde, cada uno, a una clase. La técnica de clasificación busca predecir la clase desconocida a la que pertenece una nueva instancia de forma más precisa y esto lo consigue calculando el cociente entre las predicciones realizadas correctamente y el total de predicciones.
            .row.justify-content-center.mb-4(titulo="Regresión")
              .col-10
                p.mb-0 Es una técnica de predicción que busca aprender una función real para asignar un valor real a una instancia. A diferencia de la clasificación, aquí el valor a calcular es numérico. En esta técnica, es muy importante reducir al máximo, el posible error entre el valor predicho y el valor real.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .cajon.color-acento-botones.cajon--amarillo-1.p-3.p-sm-4
          p(data-aos="fade-down").mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
