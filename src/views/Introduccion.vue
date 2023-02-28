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
          p.mb-0 Apreciado aprendiz, bienvenido a este componente formativo, donde podrá adquirir conocimientos relacionados con la ciencia de datos y cómo aplicarla en su organización. Aquí conocerá la estructura básica de un proyecto de ciencia de datos, así como las principales técnicas de análisis y clasificación de la información, utilizadas en la actualidad. Aprenderá conceptos básicos de #[em Big data], datos abiertos y posibles fuentes de información para los proyectos a ejecutar.
        .cajon-b.cajon-x.color-primario.p-3.mb-5.abajo-derecha
          p.mb-0 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.

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
