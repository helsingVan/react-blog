<template>
  <div class="blog">
  	<mu-appbar title="MyBlog" class="blog-header">
			<!-- <mu-flat-button color="white" v-for="item in navList"
			:label="item.name" :slot="item.slot" :to="item.url"></mu-flat-button> -->
	  <mu-flat-button color="white" label="随笔" slot="right" to="/blog/diary"></mu-flat-button>
	  <mu-flat-button color="white" label="技术" slot="right" to="/blog/technology"></mu-flat-button>
    </mu-appbar>
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
@import "~assets/css/common";

.blog {
	position: relative;
	height: 100%;
	.blog-header {
		position: relative;
		z-index: 100;
	}
	.main-content {
		position: absolute;
		width: 100%;
		top: 0;
		left: 0;
		bottom: 0;
		height: 100%;
		overflow: auto;
		padding: 85px 20px 0;
	}
}
</style>