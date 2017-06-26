<template>
  <div class="detail">
  	<detail-top :title="topTitle"></detail-top>
  	<v-banner :images="detail.avatars"></v-banner>
  	<div class="detail-title">
  	  <div class="content-box">
  	  	<h2>{{detail.name}}</h2>
  	  	<p>{{detail.name_en}}</p>
  	  	<p>{{detail.born_place}}</p>
  	  </div>
  	</div>
  	<div class="works">
  	  <ul>
  	  	<li v-for="item in detail.works" @click="getDetail(item.subject.id)">
  	  	  <img :src="item.subject.images.medium" alt="">
  	  	  <p>{{item.subject.title}}</p>
  	  	  <star :rating="item.subject.rating"></star>
  	  	  <p class="role">
  	  	    <span v-for="role in item.roles">{{role}}</span>
  	  	  </p>
  	  	</li>
  	  </ul>
  	</div>
  </div>
</template>

<script>
import detailTop from '../../components/topBar/detail-top';
import vBanner from '../../components/carousel/banner';
import star from '../../components/star/star';

export default {
  name: 'detailCast',
  components: { detailTop,vBanner,star },
  data() {
  	return {
  	  topTitle: '影人',
  	  detail: { avatars: {},works: [{roles:[],subject:{images:{}}}] }
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
  	  console.log('执行')
  	  if(id) {
  	  	// 获取影人条目信息
  	  	this.$http({
  	  	  type: 'GET',
  	  	  url: `https://api.douban.com/v2/movie/celebrity/${id}`,
  	  	  dataType: 'jsonp',
  	  	  success: function(data) {
  	  	  	console.log(data);
  	  	  	_this.detail = data;
  	  	  }
  	  	});
  	  }
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
.detail {
  min-height: 100%;
  height: auto;
  position: relative;
  .works {
  	padding: 0 2rem 2rem;
  	ul {
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-start;
      li {
      	margin: 0 .5rem;
      }
      img {
      	width: 10rem;
      	height: 14rem;
      	margin-top: 2rem;
      }
      p {
      	margin: .1rem 0;
      }
  	}
  	.role {
  	  span {
  	  	display: inline-block;
  	  	margin-right: .5rem;
  	  	color: #ababab;
  	  }
  	}
  }
}
</style>