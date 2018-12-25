<template>
  <section class="widget astrif_widget_about">
    <h2 class="widget-title">
      <span>About</span>
    </h2>
    <div class="about-author-container">
      <div class="author-avatar">
        <img :src="image" alt="astrif fifth">
      </div>
      <div class="author-info">
        <p>{{ description }}</p>
      </div>
      <!-- <div
        class="author-signature"
        style="{backgroundImage: url('~/assets/img/astrif-signature.png')}"
      ></div>-->
    </div>
  </section>
</template>

<script>
export default {
  props: ["image", "description"]
};
</script>


<style scoped>
</style>
