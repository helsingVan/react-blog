<template>
  <div class="main">
    <top-bar :title="title"></top-bar>
	<Carousel :content="carousel"></Carousel>
	<div class="wrapper">
	  <show-list title="影院热映" :content="hotMovie.subjects"></show-list>
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
			hotMovie: {},
			carousel: [],
			showList: null
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
      this.getShowList();
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
				console.log(_this.hotMovie);
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
	getShowList() {
	  let _this = this;
      let content = [];
      let subjects = this.hotMovie.subjects;

      for(let i=0;i<subjects.length;i+=3) {
      	content.push([subjects[i],
      		subjects[i+1]?subjects[i+1]:null,subjects[i+2]?subjects[i+2]:null]);
      }
      this.showList = content;
      console.log(this.showList);
	}
  }
}
</script>

<style lang="scss">
	
</style>