<template>
  <section class="widget astrif_widget_popular_entries">
    <h2 class="widget-title">
      <span>Popular Posts (again)</span>
    </h2>
    <ul>
      <li v-for="link in links" :key="link.id">
        <a :href="link.path" class="popular-entry-thumbnail">
          <img :src="link.imagepath" :alt="link.alt">
        </a>
        <span class="popular-entry-title">
          <a
            :href="link.spanhref"
            rel="bookmark"
            class="popular-entry-title-link"
          >{{link.spancontent}}</a>
          <span class="popular-entry-date">{{link.entrydate}}</span>
        </span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          id: 1,
          path: "single.html",
          imagepath: require("~/assets/img/astrif-popular-01.jpg"),
          alt: "10 Easy Breakfast that can try in home",
          spanhref: "single.html",
          spancontent: "10 Easy Breakfast that can try in home",
          entrydate: "August 17, 2016"
        },
        {
          id: 2,
          path: "single.html",
          imagepath: require("~/assets/img/astrif-popular-02.jpg"),
          alt: "My Daily healthy food",
          spanhref: "single.html",
          spancontent: "Not drink a coke is better, i think",
          entrydate: "July 23, 2016"
        },
        {
          id: 3,
          path: "single.html",
          imagepath: require("~/assets/img/astrif-popular-03.jpg"),
          alt: "Not drink a coke is good",
          spanhref: "single.html",
          spancontent: "10 Easy Breakfast that can try in home",
          entrydate: "May 8, 2016"
        },
        {
          id: 4,
          path: "single.html",
          imagepath: require("~/assets/img/astrif-popular-04.jpg"),
          alt: "This pancake as sweet as you",
          spanhref: "single.html",
          spancontent: "This pancake as sweet as you :')",
          entrydate: "January 27, 2016"
        },
        {
          id: 5,
          path: "single.html",
          imagepath: require("~/assets/img/astrif-popular-05.jpg"),
          alt: "My daily drink in the morn",
          spanhref: "single.html",
          spancontent: "My daily drink in the morn",
          entrydate: "March 11, 2015"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>