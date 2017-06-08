<template>
<div class="carousel">
  <div class="swiper-container" ref="swiper">
    <ul class="swiper-wrapper">
      <li class="swiper-slide" v-for="item in content">
        <img :src="item.images.large">
        <div class="info">
          <p>《{{item.title}}》</p>
          <p v-for="cast in item.casts">{{cast.name}}</p>
        </div>
      </li>
    </ul>
    <div class="swiper-pagination" ref="pagination"></div>
  </div>
  
</div>
  
</template>

<script>
// import Swiper from 'swiper';  

export default {
  name: 'carousel',
  props: {
    content: {
      type: Array
    }
  },
  mounted() {
    
  },
  watch: {
    content() {
      this.init();
    }
  },
  methods: {
    init() {
      let swiper = this.$refs.swiper;
      let pagination = this.$refs.pagination;
      this.$nextTick(()=>{
          let sw = new Swiper(swiper,{
          autoplay: 3000,
          loop: true,
          autoplayDisableOnInteraction: false,
          pagination: pagination
        });
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper-container {
  img {
    width: 100%;
    height: 30rem;
    display: block;
  }
  .info {
    position: absolute;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.4);
    color: #fff;
    padding: 1rem;
  }
}

</style>

