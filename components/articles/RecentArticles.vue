<template>
  <div class="recentArticles">
    <template v-for="(article, index) in articles">
      <ArticleSummaryFirst v-if="index===0" :article="article" :key="index"/>
      <ArticleSummary v-else :article="article" :key="index"/>
    </template>
  </div>
</template>

<script>
import ArticleSummary from "~/components/articles/ArticleSummary";
import ArticleSummaryFirst from "~/components/articles/ArticleSummaryFirst";
// import ArticleSidebar from "~/components/articles/ArticleSidebar"

export default {
  props: ["listStyle", "articleCount"],
  components: { ArticleSummary, ArticleSummaryFirst },
  data() {
    return {
      articles: [
        {
          path:
            "How-to-make-mak-nyuss-baked-potatoes-stick-recipes-from-Deanda",
          img: "astrif-post-entry-01.jpg",
          title:
            "How to make mak-nyuss baked potatoes stick recipes from Deanda",
          pubdate: "2016-08-14",
          category: "breakfast",
          likes: 172,
          snip:
            "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine."
        },
        {
          path: "Healthy-Breakfast-For-Cute-Girl",
          img: "astrif-post-entry-02.jpg",
          title: "Healthy Breakfast For Cute Girl",
          pubdate: "2016-10-26",
          category: "breakfast",
          likes: 320,
          snip:
            "Balancing a composition involves arranging both positive elements and negative space in such a way that no one area of the design overpowers other areas. Everything works together and fits together in a seamless whole."
        },
        {
          path: "Just-eat-healthy-food-for-your-better-life",
          img: "astrif-post-entry-03.jpg",
          title: "Just eat healthy food, for your better life",
          pubdate: "2016-09-07",
          category: "breakfast",
          likes: 42,
          snip:
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows."
        },
        {
          path: "Best-beef-burger-in-this-city-I-had-met",
          img: "astrif-post-entry-04.jpg",
          title: "Best beef burger in this city, I had met",
          pubdate: "2016-08-14",
          category: "breakfast",
          likes: 5,
          snip:
            "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly."
        },
        {
          path: "All-I-need-is-puff-pastry-and-choco-ball",
          img: "astrif-post-entry-05.jpg",
          title: "All I need is puff pastry and choco ball",
          pubdate: "2016-08-02",
          category: "breakfast",
          likes: 36,
          snip:
            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder."
        },
        {
          path: "King-donut-never-had-a-queen-Love-it",
          img: "astrif-post-entry-06.jpg",
          title: "King donut never had a queen. Love it!",
          pubdate: "2016-03-11",
          category: "breakfast",
          likes: 99,
          snip:
            "He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment."
        },
        {
          path: "Gelato-in-omah-gelato-will-punch-you-hard",
          img: "astrif-post-entry-07.jpg",
          title: "Gelato in 'omah gelato' will punch you hard!",
          pubdate: "2016-03-11",
          category: "breakfast",
          likes: 87,
          snip:
            "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls."
        }
      ]
    };
  }
};
</script>
