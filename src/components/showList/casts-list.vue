<template>
  <div class="casts">
  	<h2>影人</h2>
  	<div class="swiper-container" ref="swiperCasts">
  	  <ul class="swiper-wrapper">
  	  	<li class="swiper-slide" v-for="item in directors">
  	  	  <img :src="item.avatars.small" alt="">
  	  	  <p class="name">{{item.name}}</p>
  	  	  <p class="type">导演</p>
  	  	</li>
  	  	<li class="swiper-slide" v-for="item in casts">
  	  	  <img :src="item.avatars.small" alt="">
  	  	  <p class="name">{{item.name}}</p>
  	  	</li>
  	  </ul>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'casts',
  props: {
  	casts: {},
  	directors: {}
  },
  mounted() {
  },
  watch: {
  	casts() {
  	  this.init();
  	}
  },
  methods: {
  	init() {
      let swiper = this.$refs.swiperCasts;
      this.$nextTick(()=> {
      	new Swiper(swiper, {
      	  freeMode: true,
      	  slidesPerView: 3
      	});
      });
  	}
  }
}
</script>

<style lang="scss">
.casts {
  h2 {
  	color: #ababab;
  	font-size: 1.2rem;
  	font-weight: 400;
  	margin-bottom: 1rem;
  	padding: 0 2rem;
  }
  .type {
  	color: #ababab;
  	font-size: 1rem;
  	margin-top: .4rem;
  }
  .name {
  	font-size: 1.2rem;
  	margin-top: .6rem;
  }
  .swiper-slide {
  	text-align: center;
  }
}
</style>