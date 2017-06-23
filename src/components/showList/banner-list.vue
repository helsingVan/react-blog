<template>
  <section class="detail-title">
  	<div class="content-box">
  	  <h2>{{content.title}}</h2>
  	  <p>
  	  	<span>{{content.year}}</span>
  	  	<span v-for="item in content.genres">/ {{item}}</span>
  	  </p>
  	  <p>
  	  	<span>原名：</span>
        <span></span>
  	  </p>
  	</div>
  	<div class="rating-box"></div>
  </section>
</template>

<script>
export default {
  name: 'bannerList',
  props: {
  	content: {}
  }
}
</script>

<style lang="scss">
.detail-title {
  padding: 2rem;
}
</style>