<template>
  <section class="web-tool">
  	<div class="wrapper" v-for="item in toolList" :class="item.style">
  	  <header class="header clearfix">
  	  	<mu-avatar :src="item.avatar" :size="60"></mu-avatar>
  	  	<div class="header-title">
  	  	  <h2>{{item.name}}</h2>
  	  	  <!-- <div class="sub">
  	  	  	<a v-for="sub in item.sub" :href="sub.url" target="_blank">{{sub.name}}</a>
  	  	  </div> -->
  	  	</div>
  	  	<!-- <mu-icon-button icon="expand_more"></mu-icon-button> -->
  	  </header>
  	  <div class="container">
  	  	<mu-paper v-for="tool in item.tools">
  	  	  <a :href="tool.url" target="_blank">
  	  	  	<h3>{{tool.name}}</h3>
	  	  	  <p @mouseenter="setTip(true)" @mouseleave="setTip(false)" ref="tipTarget">
			    {{tool.info}}
	  	  	  </p>
  	  	  </a>
  	  	  
  	  	  
  	  	</mu-paper>
  	  	
  	  </div>
  	</div>
  </section>
</template>

<script>
import { webToolData } from 'assets/js/webclub-data';

export default {
  data() {
  	return {
  	  toolList: webToolData,
  	  tooltipShow: false,
  	  label: 'fdsfsd'
  	}
  },
  created() {
  	this.tipTargetEl = this.$refs.tipTarget;
  },
  methods: {
  	setTip(flag) {
  		this.tooltipShow = flag;
  		
  	}
  }
}
</script>

<style lang="less">
@import "~assets/css/common";

.web-tool {
	.wrapper {
		margin-bottom: 20px;
	}
	.mu-avatar {
		// float: left;
		display: inline-block;
		vertical-align: middle;
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
		// overflow: hidden;
		display: inline-block;
		vertical-align: middle;
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
	.container {
		display: flex;
		justify-content: space-between;
		flex-flow: row wrap;
		.mu-paper {
			width: 22%;
			flex: 0 0 22%;
			margin: 10px;
			padding: 5px 10px;
			
		}
		h3 {
			font-size: 16px;
		}
		p {
			position: relative;
			padding-top: 6px;
			font-size: 12px;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			cursor: pointer;
		}
	}
}
</style>