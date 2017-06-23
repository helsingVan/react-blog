<template>
  <div class="banner">
  	<img :src="images.large" alt="">
  </div>
</template>

<script>
export default {
  name: 'banner',
  props: {
  	images: {}
  }
}
</script>

<style lang="scss">
.banner {
  background: #000;
  padding: 2rem 0;
  text-align: center;
  img {
  	height: 30rem;
  }
}
</style>