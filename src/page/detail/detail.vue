<template>
  <transition name="fade">
  	<div class="detail">
  	  <v-banner :images="detail.images"></v-banner>
      <banner-list :content="detail"></banner-list>
  	  <loading v-show="loading"></loading>
      
  	</div>
  </transition>
</template>

<script>
import vBanner from '../../components/carousel/banner';
import loading from '../../components/loading/loading';
import bannerList from '../../components/showList/banner-list';

export default {
  name: 'detail',
  components: { vBanner,loading,bannerList },
  data() {
  	return {
  	  loading: true,
  	  detail: { images:null }    // movie detail
  	}
  },
  mounted() {
  	this.init();
  },
  watch: {
    '$route': 'init'
  },
  methods: {
  	init() {
  	  let _this = this;
  	  let id = this.$route.params.id;
  	  this.$http({
  	  	type: 'GET',
  	  	url: 'https://api.douban.com/v2/movie/subject/' + id,
  	  	dataType: 'jsonp',
  	  	success: function(data) {
  	  	  console.log(data);
  	  	  _this.loading = false;
          _this.detail = data;
  	  	}
  	  })
  	}
  }
}
</script>

<style lang="scss">
@import '../../assets/scss/common.scss';

.detail {
  min-height: 100%;
  height: auto;
  position: relative;
}
</style>