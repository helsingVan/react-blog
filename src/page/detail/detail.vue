<template>
  <transition name="fade">
  	<div class="detail">
      <detail-top :title="topTitle"></detail-top>
  	  <v-banner :images="detail.images"></v-banner>
      <banner-list :content="detail"></banner-list>
      <intro-list :content="detail"></intro-list>
      <casts-list :directors="directorsList" :casts="castsList"></casts-list>

  	  <loading v-show="loading"></loading>
      
  	</div>
  </transition>
</template>

<script>
import vBanner from '../../components/carousel/banner';
import loading from '../../components/loading/loading';
import bannerList from '../../components/showList/banner-list';
import introList from '../../components/showList/intro-list';
import castsList from '../../components/showList/casts-list';
import detailTop from '../../components/topBar/detail-top';

export default {
  name: 'detail',
  components: { vBanner,loading,bannerList,introList,castsList,detailTop },
  data() {
  	return {
  	  loading: true,
  	  detail: { images:{},rating: {} },    // movie detail
      castsList: [],
      directorsList: []
  	}
  },
  computed: {
    topTitle() {
      return this.detail.title;
    }
  },
  mounted() {
  	this.init();
    // this.scroll();
  },
  watch: {
    '$route': 'init'
  },
  methods: {
  	init() {
  	  let _this = this;
  	  let id = this.$route.params.id;
      if(id) {
        // 获取电影条目信息
        this.$http({
          type: 'GET',
          url: 'https://api.douban.com/v2/movie/subject/' + id,
          dataType: 'jsonp',
          success: function(data) {
            console.log(data);
            _this.loading = false;
            _this.detail = data;
            _this.castsList = data.casts;
            _this.directorsList = data.directors;
          }
        });
      }
      // 获取剧照 /v2/movie/subject/:id/photos
  	},
    goBack() {
      this.$router.go(-1);
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
  padding-bottom: 2rem;
}
</style>