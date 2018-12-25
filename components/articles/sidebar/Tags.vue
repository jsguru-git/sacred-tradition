<template>
  <section class="widget widget_tag_cloud">
    <h2 class="widget-title">
      <span>Tags</span>
    </h2>
    <div class="tagcloud">
      <a href="#" v-for="link in links" :key="link.id">
        {{link.content}}
        <span>{{link.spanvalue}}</span>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { id: 1, content: "food", spanvalue: "52" },
        { id: 2, content: "dessert", spanvalue: "86" },
        { id: 3, content: "thoughts", spanvalue: "13" },
        { id: 4, content: "inspiring", spanvalue: "7" },
        { id: 5, content: "tips", spanvalue: "64" },
        { id: 6, content: "cook", spanvalue: "9" },
        { id: 7, content: "healthy", spanvalue: "29" }
      ]
    };
  }
};
</script>

<style scoped>
</style>