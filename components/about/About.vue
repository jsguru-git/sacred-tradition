<template>
  <div class="site-entry">
    <article class="post format-standard hentry">
      <div class="entry-header">
        <h1 class="entry-title">About Me</h1>
      </div>
      <!-- .entry-header -->
      <div class="entry-content">
        <img class="img-responsive aligncenter" src="~/assets/img/astrif-about-me.jpg">
        <p class="text-center">
          Hello I’m
          <strong>Astri Fajria</strong>. I’m 19 years old newbie Food blogger. I love to eat and make healthy food. As a good mother wanna be, my hobby is cooking. I like to share my experience about place, taste, feel that have a good food to eat, everyday. Nyamm.. A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.
        </p>
        <p class="text-center">Feel free to ask me anything about you wondered.</p>
        <h5 class="text-upper text-center">FOLLOW ME</h5>
        <IconsWrapper :icons="s_icons" iconClass="text-center"/>
        <!-- .social-icon -->
      </div>
      <!-- .entry-content -->
    </article>
    <!-- .post -->
  </div>
  <!-- .site-entry -->
</template>

<script>
import IconsWrapper from "~/components/icons/IconsWrapper.vue";
export default {
  components: { IconsWrapper },
  data() {
    return {
      s_icons: [
        { href: "", icon: "facebook" },
        { href: "", icon: "twitter" },
        { href: "", icon: "instagram" },
        { href: "", icon: "google-plus" },
        { href: "", icon: "linkedin" },
        { href: "", icon: "pinterest" },
        { href: "", icon: "dribbble" },
        { href: "", icon: "youtube" }
      ]
    };
  }
};
</script>
