<template><div>

  <h3> &nbsp; Articles: </h3>
  <ul>
   <li v-for="(ar, id) in articles" :key="id">{{ar.title}} <br> {{ar.date}}, {{ar.author}}</li>
  </ul>

</div></template>




<script>
export default {
  async asyncData ({ app }) {
    return {
      articles: await app.$content('/articles').query({ exclude: ['body'] }).getAll()
    }
  }
}
</script>