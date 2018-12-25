<template>
  <div class="slider">
    <a class="skip-link screen-reader-text" href="#content">Skip to content</a>
    <!-- topbar featured slider -->
    <div class="topbar-slider">
      <div id="slider-thumbnail" class="owl-carousel owl-theme slider-thumbnail">
        <div v-for="slide in slides" :key="slide.title" class="item">
          <img :src="slide.image" :alt="slide.alt">
          <div class="item-caption">
            <div class="caption-description">
              <a href="category.html" class="caption-cat-links">{{ slide.description }}</a>
              <span class="caption-title">
                <a href="single.html" class="caption-title-link">{{ slide.description}}</a>
                <a href="single.html" class="button caption-more-link">Read More</a>
              </span>
              <!-- .caption-title -->
            </div>
            <!-- .caption-description -->
          </div>
          <!-- .item-caption -->
        </div>
        <!-- .item -->
      </div>
      <!-- #slider-thumbnail -->
    </div>
    <!-- .topbar-slider -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          title: "Cook",
          image: require("~/assets/img/astrif-featured-slider-01.png"),
          alt: "featured slider 01",
          description: "Learn how to make nasi goreng seafood pedas"
        },
        {
          title: "appetizer",
          image: require("~/assets/img/astrif-featured-slider-02.png"),
          alt: "featured slider 02",
          description: "fruit salad made from Black Autumn Royal grapes"
        },
        {
          title: "Fruit",
          image: require("~/assets/img/astrif-featured-slider-03.png"),
          alt: "featured slider 03",
          description: "Red cherry is the raw material for making cake"
        },
        {
          title: "Food",
          image: require("~/assets/img/astrif-featured-slider-04.png"),
          alt: "featured slider 04",
          description: "Yummy dragon beef with delicious sauce"
        },
        {
          title: "Dessert",
          image: require("~/assets/img/astrif-featured-slider-05.png"),
          alt: "featured slider 05",
          description: "All you need is gelato, Yeey!"
        },
        {
          title: "Dessert",
          image: require("~/assets/img/astrif-featured-slider-06.png"),
          alt: "featured slider 06",
          description: "Sweet pancake fruity cream, favorite!"
        }
      ]
    };
  }
};
</script>
