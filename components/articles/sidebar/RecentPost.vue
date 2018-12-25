<template>
  <section class="widget widget_recent_entries">
    <h2 class="widget-title">
      <span>Recent Posts</span>
    </h2>
    <ul>
      <li v-for="link in links" :key="link.id">
        <a :href="link.path">{{link.title}}</a>
        <span class="post-date">{{link.postdate}}</span>
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
          title: "Best beef burger in this city, I had met",
          postdate: "August 14, 2016"
        },
        {
          id: 2,
          path: "single.html",
          title: "Fruit salad made from Black Autumn Royal grapes",
          postdate: "September 25, 2016"
        },
        {
          id: 3,
          path: "single.html",
          title: "How to make nasi goreng seafood pedas",
          postdate: "June 16, 2016"
        },
        {
          id: 4,
          path: "single.html",
          title: "All you need is gelato, yeey!",
          postdate: "May 8, 2016"
        },
        {
          id: 5,
          path: "single.html",
          title: "Healthy breakfast for cute girle",
          postdate: "April 27, 2016"
        }
      ]
    };
  }
};
</script>

<style scoped>