<template>
  <transition name="fade">
  	<div class="main" style="background:#fff;">
  	  <top-bar :title="title">
  	  	<a slot="back" href="##" class="fa fa-chevron-left back" @click="goBack" ></a>
  	  </top-bar>
      <nav class="sub-nav">
        <router-link to="/movie/more/hotmovie" replace>影院热映</router-link>
        <router-link to="/movie/more/future" replace>即将热映</router-link>
        <router-link to="/movie/more/piaofang" replace>海外票房</router-link>
      </nav>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>

  	</div>
  </transition>

</template>

<script>
import topBar from '@/components/topBar/topbar';

export default {
  name: 'movie-move',
  components: { topBar },
  data() {
  	return {
  	  // title: '全部电影推荐1'
  	}
  },
  computed: {
  	title() {
  		return this.$store.state.info;
  	}
  },
  watch: {
    '$route'(to,from) {
      console.log(from);
      console.log(to);
    }
  },  
  methods: {
  	goBack() {
  	  this.$router.go(-1);
  	}
  }
}
</script>

<style lang="scss">
@import '../../assets/scss/common.scss';

  .sub-nav {
    height: 3rem;
    line-height: 3rem;
    display: flex;
    position: fixed;
    width: 100%;
    top: 3rem;
    left: 0;
    background: #fff;
    a {
      flex: 1;
      text-align: center;
      color: #666;
    }
    a.active {
      border-bottom: 1px solid $activeColor;
    }
  }

</style>
