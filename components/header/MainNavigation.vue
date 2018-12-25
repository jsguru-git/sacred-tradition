<template>
  <!-- <div> -->
  <!-- main navigation -->
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
                  <li class="menu-item">
                    <nuxt-link to="/">Home page</nuxt-link>
                  </li>
                  <li class="menu-item menu-item-has-children" aria-haspopup="true">
                    <a href="#">Features</a>
                    <ul class="sub-menu">
                      <li class="menu-item">
                        <nuxt-link to="/single">Single Post</nuxt-link>
                      </li>
                      <li class="menu-item">
                        <nuxt-link to="/single-sidebar">Single Post With Sidebar</nuxt-link>
                      </li>
                      <li class="menu-item">
                        <nuxt-link to="/page-fullwidth">Page Full Width</nuxt-link>
                      </li>
                      <li class="menu-item">
                        <nuxt-link to="/page-sidebar">Page With Sidebar</nuxt-link>
                      </li>
                      <li class="menu-item">
                        <nuxt-link to="/shortcodes">Shortcodes</nuxt-link>
                      </li>
                      <li class="menu-item">
                        <nuxt-link to="/typography">Typography</nuxt-link>
                      </li>
                      <li class="menu-item">
                        <nuxt-link to="/404">Not Found</nuxt-link>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item">
                    <nuxt-link to="/category">Food</nuxt-link>
                  </li>
                  <li class="menu-item">
                    <nuxt-link to="/cook">Cook</nuxt-link>
                  </li>
                  <li class="menu-item">
                    <nuxt-link to="/about">About Me</nuxt-link>
                  </li>
                  <li class="menu-item">
                    <nuxt-link to="/contact">Contact</nuxt-link>
                  </li>
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
  <!-- </div> -->
</template>