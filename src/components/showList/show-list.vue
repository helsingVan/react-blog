<template>
<div class="show-container">
  <header class="header clearfix">
  	<h2>{{title}}</h2>
  	<router-link href="##" :to="dispatchRouter">
  	  更多
  	  <i class="fa fa-chevron-circle-right"></i>
  	</router-link>
  </header>
  <div class="swiper-container" ref="swiper">
  	<ul class="swiper-wrapper">
  	  <li class="swiper-slide" v-for="list in content" 
      @click="getDetail(list.id)">
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
  computed: {
    dispatchRouter() {
      let router = '';
      switch(this.title) {
        case '影院热映':
          router = '/movie/more/hotmovie';
          break;
        case '海外票房榜':
          router = '/movie/more/piaofang';
          break;
        case '即将热映':
          router = '/movie/more/future';
          break;
        default:
          router = '/movie/more';
          break;
      }
      return router;
    }
  },
  watch: {
  	content() {
  	  this.init();
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
  	  });
  	},
    getDetail(id) {
      this.$router.push({
        name: 'detail',
        params: { id }
      })
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