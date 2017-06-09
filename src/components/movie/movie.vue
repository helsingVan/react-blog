<template>
  <div class="main">
    <top-bar :title="title"></top-bar>
	<Carousel :content="carousel"></Carousel>
	<div class="wrapper">
	  <show-list title="影院热映" :content="hotMovie.subjects"></show-list>
	</div>
	<div class="wrapper">
	  <show-list title="海外票房榜" :content="piaoFangList"></show-list>
	</div>
	<div class="wrapper">
	  <show-list title="即将热映" :content="futureMovie.subjects"></show-list>
	</div>
  </div>
</template>

<script>
import topBar from '../topBar/topbar';
import Carousel from '../carousel/carousel';
import showList from '../showList/show-list';

export default {
  name: 'movie',
  components: { topBar,Carousel,showList },
  data() {
    return {
			title: '电影',
			hotMovie: {},         // 影院热映
			piaoFang: {},         // 票房榜
			futureMovie: {},       // 即将上映
			carousel: [],         // 轮播图数据
			piaoFangList: [],     // 票房榜处理后数据
			
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
  	  this.getPiaoFang();
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
			}
	  });
	  this.$http({
	  	type: 'GET',
	  	url: 'https://api.douban.com/v2/movie/us_box',
	  	dataType: 'jsonp',
	  	success: function(data) {
          _this.piaoFang = data;
	  	}
	  });
	  this.$http({
	  	type: 'GET',
	  	url: 'https://api.douban.com/v2/movie/coming_soon',
	  	dataType: 'jsonp',
	  	success: function(data) {
          _this.futureMovie = data;
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
	getPiaoFang() {
	  let _this = this;
	  let piaoFang = _this.piaoFang.subjects;
	  let content = [];
	  piaoFang.forEach((v)=>{
        content.push(v.subject);
	  });
      _this.piaoFangList = content;
	}
  }
}
</script>

<style lang="scss">
	
</style>