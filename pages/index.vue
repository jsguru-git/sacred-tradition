<template>
  <Wrapper>
    <div class="row">
      <!-- articles -->
      <div class="col-md-8">
        <div class="site-entry">
          <RecentArticles/>
          <Pagination name="Posts Navigation" prevText="Older Posts" nextText="Newer Posts"/>
        </div>
      </div>
      <!-- .col-md-8 -->
      <ArticleSidebar/>
    </div>
  </Wrapper>
</template>


<script>
import Wrapper from "~/components/wrapper/Wrapper";
import RecentArticles from "~/components/articles/RecentArticles";
import ArticleSidebar from "~/components/articles/ArticleSidebar";
import Pagination from "~/components/pagination/Pagination";

export default {
  components: { Wrapper, RecentArticles, ArticleSidebar, Pagination },

  data() {
    return {
      title: "Sacred Traditions Interfaith Project"
    };
  },

  head() {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Sacred Traditions Interfaith Project"
        }
      ]
    };
  }
};
</script>
