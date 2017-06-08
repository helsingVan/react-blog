<template>
<div class="show-container">
  <header class="header clearfix">
  	<h2>{{title}}</h2>
  	<a href="##" class="fa fa-right">更多</a>
  </header>
  <div class="swiper-container" ref="swiper">
  	<ul class="swiper-wrapper">
  	  <li class="swiper-slide" v-for="list in content">
  	  	<img :src="list.images.medium">
  	  </li>
  	</ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'showList',
  props: {
  	title: {},
  	content: {
  	  type: Array,
  	}
  },
  filters: {
  	noData(v) {
  		console.log(v);
  		if(v == null) {
           return null;
  		}else {
  			return v;
  		}
  	}
  },
  watch: {
  	content() {
  	  this.init();
  	  // console.log(this.content);
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
  	}
  }
}
</script>

<style lang="scss">
@import "../../assets/scss/common.scss";

.show-container {
  padding: 2rem 1.1rem;
  background: #fff;
  .header {
  	height: 3rem;
  	line-height: 3rem;
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
  }
}
</style>