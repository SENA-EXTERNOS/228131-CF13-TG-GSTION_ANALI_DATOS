<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.mb-5
      .col-md-2.bloque_vertical.d-none.d-md-block.mb-md-0
      .col-md-10.mb-md-0
        .px-2
          p.mb-0 Querido aprendiz, sea bienvenido a este componente formativo, donde podrá adquirir conocimientos relacionados con la ciencia de datos y cómo aplicarla en su organización. Aquí conocerá la estructura básica de un proyecto de ciencia de datos, así como las principales técnicas de análisis y clasificación de información usadas en la actualidad. Aprenderá conceptos básicos de #[i Big Data], datos abiertos y posibles fuentes de información para los proyectos a ejecutar.
          br
          p.mb-0 En el siguiente enlace encontrará el video de introducción para que se relacione con la temática que se trabajará durante esta etapa formativa.
          p.mb-0 #[b ¡Muchos éxitos en la culminación de este componente formativo!].

    .row.justify-content-center.align-items-center.md-5   
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
