<template>
<div class="main">
  <h1> navbar </h1>

  <div class="navbar">
    <div class="content">
      <nuxt-link to="/">Home page</nuxt-link> |
      <nuxt-link to="/contact">Contact</nuxt-link> |
      <nuxt-link to="/about">About</nuxt-link> |
      <nuxt-link to="/ocean">Ocean</nuxt-link> |
      <nuxt-link to="/projects">Projects</nuxt-link> |
      <nuxt-link to="/thoughts">Thoughts</nuxt-link>
    </div>
  </div>

      <div class="site-branding" v-if="false">
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <ul class="social-icon">
                <li><a href="" class="icon-twitter"><i class="fa fa-twitter"></i></a></li>
                <li><a href="" class="icon-facebook"><i class="fa fa-facebook"></i></a></li>
                <li><a href="" class="icon-instagram"><i class="fa fa-instagram"></i></a></li>
                <li><a href="" class="icon-pinterest"><i class="fa fa-pinterest"></i></a></li>
                <li><a href="" class="icon-youtube"><i class="fa fa-youtube-play"></i></a></li>
              </ul>
            </div>

            <div class="col-md-6">
              <h1 class="site-title title-image"><a href="index.html" rel="home"><img src="assets/img/astrif-logo.png" alt="astrif."></a></h1>
              <p class="site-description">- Good Food Lovers -</p>
            </div>
            <div class="col-md-3">
              <form class="search-form">
                <div class="form-group">
                  <label for="search" class="sr-only">Search</label>
                  <input type="text" class="form-control search-field" placeholder="Search...">
                </div>
                <button type="submit" class="btn btn-default search-submit"><i class="fa fa-search"></i></button>
              </form>
            </div>
          </div>
        </div>
      </div>
</div>
</template>



<style>
  body {position: relative !important; margin: 1em;}
</style>
<style scoped>
  div.main  {width: 100%; border: 1px solid silver; text-align: center; min-height: 200px;
    box-sizing: border-box; padding: 2em; color: silver;
    margin-bottom: 3em;
  }
  div.navbar {width: 100%; text-align: center; padding: 2em;  }
  div.navbar div {margin-left: auto; margin-right: auto;  }
  .navbar a {padding-right: 1em; padding-left: 1em; }
</style>


