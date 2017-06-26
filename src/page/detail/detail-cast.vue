<template>
  <div class="detail">详情页</div>
</template>

<script>
export default {
  name: 'detailCast',
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
  	  	  }
  	  	})
  	  }
  	}
  }
}
</script>

<style lang="scss">
.detail {
  min-height: 100%;
  height: auto;
  position: relative;
}
</style>