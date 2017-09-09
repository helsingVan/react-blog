<template>
  <section class="web-tool">
  	<div class="wrapper" v-for="item in toolList" :class="item.style">
  	  <header class="header clearfix">
  	  	<mu-avatar :src="item.avatar" :size="60"></mu-avatar>
  	  	<div class="header-title">
  	  	  <h2>{{item.name}}</h2>
  	  	  <div class="sub">
  	  	  	<a v-for="sub in item.sub" :href="sub.url" target="_blank">{{sub.name}}</a>
  	  	  </div>
  	  	</div>
  	  	<mu-icon-button icon="expand_more"></mu-icon-button>
  	  </header>
  	</div>
  </section>
</template>

<script>
import { webToolData } from 'assets/js/webclub-data';

export default {
  data() {
  	return {
  	  toolList: webToolData
  	}
  }
}
</script>

<style lang="less">
@import "~assets/css/common";

.web-tool {
	.wrapper {

	}
	.mu-avatar {
		float: left;
	}
	.header {
		position: relative;
		border-bottom: 1px solid @grey300;
		padding-bottom: 10px;
		.mu-icon-button {
			position: absolute;
			right: 10px;
			top: 50%;
			transform: translateY(-50%);
			border: 1px solid @grey300;
		}
	}
	.header-title {
		padding-left: 20px;
		overflow: hidden;
		h2 {
			font-size: 18px;
		}
		.sub {
			padding-top: 6px;
		}
		.sub a {
			display: inline-block;
			margin-right: 10px;
			padding: 2px 8px;
			border-radius: 20px;
			color: #fff;
		}
	}
	.vue {
		.sub a {
			background: @greenVue;
		}
	}
}
</style>