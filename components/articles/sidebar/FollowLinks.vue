<template>
  <section class="widget astrif_widget_follow_me">
    <h2 class="widget-title">
      <span>Follow me</span>
    </h2>
    <div class="follow-me">
      <ul class="social-icon social-icon-color">
        <li v-for="link in links" :key="link.id">
          <a href :class="`icon-${link.icon}${(link.icon === 'youtube') ? '-play' : ''}`">
            <i :class="`fa fa-${link.icon}`"></i>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { id: 1, icon: "twitter" },
        { id: 2, icon: "facebook" },
        { id: 3, icon: "instagram" },
        { id: 4, icon: "pinterest" },
        { id: 5, icon: "youtube" }
      ]
    };
  }
};
</script>

<style scoped>
</style>