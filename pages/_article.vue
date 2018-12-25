<template><div>

  <!-- <nuxtent-body :body="article.body" /> -->

  <div v-html="article.body" />

</div></template>


<script>
// This file handles any MD articles in the /content/articles folder.
//  import {NuxtentBody} from 'nuxtent'


 export default {
    layout: 'article',
    // components: {NuxtentBody},

    async asyncData ({ app, route }) {
      return {
        article: await app.$content('articles').get(route.path),
        // contentPreview: await app.$content('/')
        //   .query({ exclude: ['attributes', 'body'] })
        //   .getAll()
      }
    }


 }
</script>