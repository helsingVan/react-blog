<template>
  <transition name="fade">
  	<div class="main">
  	  <top-bar :title="title">
  	  	<a slot="back" href="##" class="fa fa-chevron-left back" @click="goBack" ></a>
  	  </top-bar>
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
  	  title: '全部电影推荐'
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


</style>