<template>
<div class="show-container">
  <header class="header clearfix">
  	<h2>{{title}}</h2>
  	<a href="##" @click="getMore">
  	  更多
  	  <i class="fa fa-chevron-circle-right"></i>
  	</a>
  </header>
  <div class="swiper-container" ref="swiper">
  	<ul class="swiper-wrapper">
  	  <li class="swiper-slide" v-for="list in content">
  	  	<img :src="list.images.medium">
  	  	<p class="title">{{list.title}}</p>
  	  	<Star :rating="list.rating"></Star>
  	  </li>
  	</ul>
  </div>
</div>
</template>

<script>
import Star from '../star/star';

export default {
  name: 'showList',
  components: { Star },
  props: {
  	title: {},
  	type: {},
  	content: {
  	  type: Array,
  	}
  },
  watch: {
  	content() {
  	  this.init();
  	  console.log(this.content);
  	}
  },
  methods: {
  	init() {
  	  let swiper = this.$refs.swiper;
  	  this.$nextTick(()=>{
  	  	new Swiper(swiper,{
  	  	  freeMode: true,
  	  	  slidesPerView : 3
  	  	});
  	  })
  	},
  	getMore() {
      console.log(this.type);
      this.$emit('getMore');
  	}
  }
}
</script>

<style lang="scss">
@import "../../assets/scss/common.scss";

.show-container {
  padding: 1rem 0 2rem 0;
  background: #fff;
  .header {
  	height: 3rem;
  	line-height: 3rem;
  	padding: 0 1rem;
  	margin-bottom: .5rem;
  	h2 {
  	  float: left;
  	  font-size: 1.4rem;
  	}
  	a {
  	  float: right;
  	  color: $activeColor;
  	  line-height: 3rem;
  	}
  }
  .swiper-container{
  	img {
  	  width: 10rem;
  	  height: 14rem;
  	}
  	.swiper-wrapper {
  	  padding: 0 1rem;
  	}
  	.title {
  	  white-space: nowrap;
  	  overflow: hidden;
  	  text-overflow: ellipsis;
  	  margin: .5rem 0;
  	}
  }
}
</style>