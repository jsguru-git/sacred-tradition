<template>
  <nav class="navigation posts-navigation" role="navigation">
    <h2 class="screen-reader-text">{{ name }}</h2>
    <div class="nav-links">
      <div class="nav-previous">
        <a href="#">{{ nextText }}</a>
      </div>
      <div class="nav-next">
        <a href="#">{{ prevText }}</a>
      </div>
    </div>
  </nav>
  <!-- .navigation -->
</template>

<script>
export default {
  props: ["name", "nextText", "prevText"]
};
</script>


<style scoped>
</style>
