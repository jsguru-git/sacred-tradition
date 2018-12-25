<template>
  <div class="site-entry">
    <article class="post format-standard hentry">
      <div class="entry-header">
        <h1 class="entry-title">Contact</h1>
      </div>
      <!-- .entry-header -->
      <div class="entry-content">
        <ul class="social-icon text-center">
          <li v-for="icon in social_icons" :key="icon.name">
            <a href="#" :class="`icon-social icon-${icon.name}`">
              <i :class="`fa fa-${icon.name}`"></i>
            </a>
          </li>
        </ul>
        <!-- .social-icon -->
        <ContactForm/>
      </div>
      <!-- .entry-content -->
    </article>
    <!-- .post -->
  </div>
  <!-- .site-entry -->
</template>

<script>
import ContactForm from "~/components/contact/ContactForm";

export default {
  components: { ContactForm },
  data() {
    return {
      social_icons: [
        { icon_name: "facebook" },
        { icon_name: "twitter" },
        { icon_name: "instagram" },
        { icon_name: "google-plus" },
        { icon_name: "linkedin" },
        { icon_name: "pinterest" },
        { icon_name: "dribbble" },
        { icon_name: "youtube" }
      ]
    };
  }
};
</script>


<style scoped>
</style>
