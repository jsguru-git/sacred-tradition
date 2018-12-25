<template>
 <div>
   <carousel />
   <navbar />

   <nuxt />

   <subscribe />
   <carouselsm />
   <copyright />
 </div>
</template>

<script>
import carousel from '@/components/carousel'
import navbar from '@/components/navbar'
import subscribe from '@/components/subscribe'
import carouselsm from '@/components/carouselsm'
import copyright from '@/components/copyright'

export default {
  components: {carousel, navbar, subscribe, carouselsm, copyright}
}
</script>

<style>

</style>


