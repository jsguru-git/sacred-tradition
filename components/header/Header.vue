<template>
  <div>
    <!-- <nuxt-header> -->
    <!-- site branding -->
    <div class="site-branding">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <IconsWrapper :icons="s_icons"/>
          </div>
          <!-- .col-md-3 -->
          <div class="col-md-6">
            <!-- <h1 class="site-title"><a href="index.html" rel="home">Astrif.</a></h1> -->
            <!-- <h1 class="site-title title-image"> -->
            <a href="index.html" rel="home">
              <img src="/logo2.svg" alt="home" class="title-image">
            </a>
            <!-- </h1> -->
            <!-- <p class="site-description">- Sacred Traditions Interfaith -</p> -->
          </div>
          <!-- .col-md-6 -->
          <div class="col-md-3">
            <form class="search-form">
              <div class="form-group">
                <label for="search" class="sr-only">Search</label>
                <input type="text" class="form-control search-field" placeholder="Search...">
              </div>
              <!-- .form-group -->
              <button type="submit" class="btn btn-default search-submit">
                <i class="fa fa-search"></i>
              </button>
            </form>
            <!-- .search-form -->
          </div>
          <!-- .col-md-3 -->
        </div>
        <!-- .row -->
      </div>
      <!-- .container -->
    </div>
    <!-- .site-branding -->
    <div class="site-navigation-sticky-wrapper">
      <header id="masthead" class="site-header" role="banner">
        <nav id="site-navigation" class="main-navigation" role="navigation">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
                  <i class="fa fa-bars"></i>
                  <span class="sr-only">Primary Menu</span>
                </button>
                <div class="menu-container">
                  <ul id="primary-menu" class="menu nav-menu" aria-expanded="false">
                    <li v-for="link in header_links" :key="link.name" class="menu-item">
                      <nuxt-link :to="link.url">
                        <img v-if="link.url === '/'" src="/favicon.svg" class="ico">
                        {{ link.name }}
                      </nuxt-link>
                    </li>
                    <!-- <li class="menu-item menu-item-has-children" aria-haspopup="true"><a href="#">Features</a>
                              <ul class="sub-menu">
                              <li class="menu-item"><nuxt-link to="/single">Single Post</nuxt-link></li>
                              <li class="menu-item"><nuxt-link to="/single-sidebar">Single Post With Sidebar</nuxt-link></li>
                              <li class="menu-item"><nuxt-link to="/page-fullwidth">Page Full Width</nuxt-link></li>
                              <li class="menu-item"><nuxt-link to="/page-sidebar">Page With Sidebar</nuxt-link></li>
                              <li class="menu-item"><nuxt-link to="/shortcodes">Shortcodes</nuxt-link></li>
                              <li class="menu-item"><nuxt-link to="/typography">Typography</nuxt-link></li>
                              <li class="menu-item"><nuxt-link to="/404">Not Found</nuxt-link></li>
                              </ul>
                    </li>-->
                    <!-- <li class="menu-item">
                      <nuxt-link to="/category">Interfaith Concept</nuxt-link>
                    </li>
                    <li class="menu-item">
                      <nuxt-link to="/cook">Projects</nuxt-link>
                    </li>
                    <li class="menu-item">
                      <nuxt-link to="/about">Big Ideas</nuxt-link>
                    </li>
                    <li class="menu-item">
                      <nuxt-link to="/about">About Us</nuxt-link>
                    </li>
                    <li class="menu-item">
                      <nuxt-link to="/contact">Contact</nuxt-link>
                    </li>-->
                  </ul>
                </div>
                <!-- .menu-container -->
              </div>
              <!-- .col-md-12 -->
            </div>
            <!-- .row -->
          </div>
          <!-- .container -->
        </nav>
        <!-- #site-navigation -->
      </header>
      <!-- #masthead -->
    </div>
    <!-- .site-header-affix-wrapper -->
    <!-- </nuxt-header> -->
  </div>
</template>

<script>
import MainNavigation from "~/components/header/MainNavigation.vue";
import IconsWrapper from "~/components/icons/IconsWrapper.vue";
export default {
  name: "slider",
  components: { MainNavigation, IconsWrapper },
  data() {
    return {
      header_links: [
        { url: "/", name: "Home" },
        { url: "/category", name: "Interfaith Concept" },
        { url: "/cook", name: "Projects" },
        { url: "/about", name: "Big Ideas" },
        { url: "/about", name: "About Us" },
        { url: "/contact", name: "Contact" }
      ],
      s_icons: [
        { href: "", icon: "twitter" },
        { href: "", icon: "facebook" },
        { href: "", icon: "instagram" },
        { href: "", icon: "pinterest" },
        { href: "", icon: "youtube" }
      ]
    };
  }
};
</script>

<style scoped>
.title-image {
  padding-bottom: 2em;
  max-width: 200px;
}
.ico {
  width: 16px;
  margin-top: -5px;
}
</style>
