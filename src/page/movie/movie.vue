<template>
  <div class="main">
    <top-bar :title="title" key="moreTop"></top-bar>
	<Carousel :content="carousel"></Carousel>
	<div class="wrapper">
	  <show-list title="影院热映" :content="hotMovieList"></show-list>
	</div>
	<div class="wrapper">
	  <show-list title="海外票房榜" :content="piaoFangList"></show-list>
	</div>
	<div class="wrapper">
	  <show-list title="即将热映" :content="futureMovieList"></show-list>
	</div>
	<main-nav></main-nav>
	<loading v-show="loading"></loading>
  </div>
</template>

<script>
import mainNav from '../../components/nav/nav';
import topBar from '../../components/topBar/topbar';
import Carousel from '../../components/carousel/carousel';
import showList from '../../components/showList/show-list';
import moreList from '../../components/showList/more-list';
import loading from '../../components/loading/loading';

const listLength = 5;
export default {
  name: 'movie',
  components: { mainNav,topBar,Carousel,showList,moreList,loading },
  data() {
    return {
			title: '电影',
			hotMovie: [],         // 影院热映 全部
			piaoFangAll: [],      // 票房榜 全部
			piaoFang: [],
			futureMovie: [],      // 即将上映 全部
			carousel: [],         // 轮播图数据
			piaoFangList: [],     // 票房榜展示数据（截取部分）
			hotMovieList: [],     // 影院热映展示数据（截取部分）
			futureMovieList: [],  // 即将上映展示数据（截取部分）
			loading_1: false,     // 请求1 完毕
			loading_2: false,     // 请求2 完毕
			loading_3: false     // 请求3 完毕
		}
  },
  computed: {
    loading() {
      if(this.loading_1 && this.loading_2 && this.loading_3) {
      	return false;
      }else {
      	return true;
      }
    }
  },
  created() {
  	this.init();
  },
  mounted() {
    
  },
  watch: {
  	hotMovie() {
      this.getCarousel();
      this.$store.commit({
      	type: 'addHotmovie',
      	data: this.hotMovie
      });
  	},
  	piaoFangAll() {
  	  this.getPiaoFangList();
  	  
  	},
  	futureMovie() {
  	  this.$store.commit({
  	  	type: 'addFuturemovie',
  	  	data: this.futureMovie
  	  });
  	}
  },
  methods: {
    init() {
	  let _this = this;
	  this.$http({
	    type: 'GET',
		url: 'https://api.douban.com/v2/movie/in_theaters?count=46',
		dataType: 'jsonp',
		success: function(data) {
				_this.hotMovie = data.subjects;
				// console.log(data);
				_this.hotMovieList = data.subjects.slice(0,listLength);

				_this.loading_1 = true;
			}
	  });
	  this.$http({
	  	type: 'GET',
	  	url: 'https://api.douban.com/v2/movie/us_box?count=126',
	  	dataType: 'jsonp',
	  	success: function(data) {
          _this.piaoFangAll = data.subjects;
          // console.log(data);
          _this.loading_2 = true;
	  	}
	  });
	  this.$http({
	  	type: 'GET',
	  	url: 'https://api.douban.com/v2/movie/coming_soon?count=50',
	  	dataType: 'jsonp',
	  	success: function(data) {
          _this.futureMovie = data.subjects;
          _this.futureMovieList = data.subjects.slice(0,listLength);

          _this.loading_3 = true;
	  	}
	  });
	},
	getCarousel() {
		let content = [];
		for(let i=0;i<5;i++) {
			let random = Math.floor(Math.random()*20);
			let image = this.hotMovie[random];
			content.push(image);
			}
		this.carousel = content;
	},
	getPiaoFangList() {
	  let _this = this;
	  let content = [];
	  _this.piaoFangAll.forEach((v)=>{
        content.push(v.subject);
	  });
	  _this.piaoFang = content;
      _this.piaoFangList = content.slice(0,listLength);
      
      this.$store.commit({
  	  	type: 'addPiaofang',
  	  	data: this.piaoFang
  	  });
	}
  }
}
</script>

<style lang="scss">
	
</style>