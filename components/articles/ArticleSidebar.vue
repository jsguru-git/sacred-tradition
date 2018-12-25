<template>
  <div class="sideBar">
    <!-- sidebar -->
    <div class="col-md-4">
      <div class="site-sidebar">
        <!-- search component -->
        <SidebarSearch/>
        <!-- /search component -->
        <!-- about component -->
        <About
          :image="require('~/assets/img/astrif-about.jpg')"
          description="Hi, glad to know you were here. I'm Astrif, newbie food blogger. I like to go anywhere to hunting some food and share with other. About taste, benefit, and where you can findout a good place to eat."
        />
        <!-- /about component -->
        <!-- .astrif_widget_follow_me -->
        <Follow/>
        <!-- /.astrif_widget_follow_me -->
        <!-- .astrif_widget_popular_entries -->
        <WidgetPopularEntries/>
        <!-- /.astrif_widget_popular_entries -->
        <!-- .astrif_widget_text -->
        <Advertisment :image="require('~/assets/img/astrif-sidebar-banner.jpg')" url="index.html"/>
        <!-- /.astrif_widget_text -->
        <!-- .widget_recent_entries -->
        <RecentPost/>
        <!-- /.widget_recent_entries -->
        <!-- .widget_categories -->
        <Categories/>
        <!-- .widget_categories -->
        <!-- .widget_tag_cloud -->
        <Tags/>
        <!-- /.widget_tag_cloud -->
      </div>
      <!-- .site-sidebar -->
    </div>
    <!-- .col-md-4 -->
  </div>
</template>

<script>
import ArticleSummary from "~/components/articles/ArticleSummary";
import ArticleSummaryFirst from "~/components/articles/ArticleSummaryFirst";
import SidebarSearch from "@/components/articles/sidebar/Search";
import About from "@/components/articles/sidebar/About";
import Follow from "@/components/articles/sidebar/FollowLinks";
import WidgetPopularEntries from "@/components/articles/sidebar/WidgetPopularEntries";
import Advertisment from "@/components/articles/sidebar/Advertisment";
import RecentPost from "@/components/articles/sidebar/RecentPost";
import Categories from "@/components/articles/sidebar/Categories";
import Tags from "@/components/articles/sidebar/Tags";

export default {
  props: ["listStyle", "articleCount"],
  components: {
    ArticleSummary,
    ArticleSummaryFirst,
    SidebarSearch,
    About,
    Follow,
    WidgetPopularEntries,
    Advertisment,
    RecentPost,
    Categories,
    Tags
  },

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
