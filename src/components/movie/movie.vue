<template>
  <div class="main">
    <top-bar :title="title"></top-bar>
	<Carousel :content="carousel"></Carousel>
	<div class="wrapper">
	  <show-list title="影院热映" :content="hotMovieList" @getMore="checkMore(1)"></show-list>
	</div>
	<div class="wrapper">
	  <show-list title="海外票房榜" :content="piaoFangList" @getMore="checkMore(2)"></show-list>
	</div>
	<div class="wrapper">
	  <show-list title="即将热映" :content="futureMovieList" @getMore="checkMore(3)"></show-list>
	</div>


	<more-list ref="more"></more-list>
  </div>
</template>

<script>
import topBar from '../topBar/topbar';
import Carousel from '../carousel/carousel';
import showList from '../showList/show-list';
import moreList from '../showList/more-list';

const listLength = 5;
export default {
  name: 'movie',
  components: { topBar,Carousel,showList,moreList },
  data() {
    return {
			title: '电影',
			hotMovie: {},         // 影院热映 全部
			piaoFang: {},         // 票房榜 全部
			futureMovie: {},      // 即将上映 全部
			carousel: [],         // 轮播图数据
			piaoFangList: [],     // 票房榜展示数据（截取部分）
			hotMovieList: [],     // 影院热映展示数据（截取部分）
			futureMovieList: [],  // 即将上映展示数据（截取部分）
			
		}
  },
  computed: {
    
  },
  mounted() {
    this.init();
  },
  watch: {
  	hotMovie() {
      this.getCarousel();
  	},
  	piaoFang() {
  	  this.getPiaoFangList();
  	}
  },
  methods: {
    init() {
	  let _this = this;
	  this.$http({
	    type: 'GET',
		url: 'https://api.douban.com/v2/movie/in_theaters',
		dataType: 'jsonp',
		success: function(data) {
				_this.hotMovie = data;
				// console.log(data);
				_this.hotMovieList = data.subjects.slice(0,listLength);
			}
	  });
	  this.$http({
	  	type: 'GET',
	  	url: 'https://api.douban.com/v2/movie/us_box',
	  	dataType: 'jsonp',
	  	success: function(data) {
          _this.piaoFang = data;
          // console.log(data);
	  	}
	  });
	  this.$http({
	  	type: 'GET',
	  	url: 'https://api.douban.com/v2/movie/coming_soon',
	  	dataType: 'jsonp',
	  	success: function(data) {
          _this.futureMovie = data;
          _this.futureMovieList = data.subjects.slice(0,listLength);
	  	}
	  });
	},
	getCarousel() {
		let content = [];
		for(let i=0;i<5;i++) {
			let random = Math.floor(Math.random()*20);
			let image = this.hotMovie.subjects[random];
			content.push(image);
			}
		this.carousel = content;
	},
	getPiaoFangList() {
	  let _this = this;
	  let piaoFang = _this.piaoFang.subjects;
	  let content = [];
	  piaoFang.forEach((v)=>{
        content.push(v.subject);
	  });
      _this.piaoFangList = content.slice(0,listLength);
	},
    checkMore(type) {
	  this.$refs.more.show();
	  console.log(this.$refs.more);
	}
  }
}
</script>

<style lang="scss">
	
</style>