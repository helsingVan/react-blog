<template>
  <div>
    <section></section>
    <section class="blog-classify">
      <mu-paper class="wrapper" v-for="a in 5">
      	<mu-list>
      	  <mu-sub-header class="clearfix">
      	  	<h2>html5</h2>
      	  	<router-link to="/blog/html5">更多</router-link>
      	  </mu-sub-header>
      	  <mu-list-item v-for="i in 3" :disabled="true">
      	    <h3 slot="title" class="title">HTML分析</h3>
      	  	<p slot="describe" class="describe">html5中国html5中国html5中国html5中国html5中国html5中国html5中国html5中国html5中国html5中国html5中国html5中国html5中国html5中国</p>
      	  	<time class="describe time">2017-08-08</time>
      	  	<div slot="right" class="comment">
      	  	  <mu-flat-button label="34" icon="grade" labelClass="label" iconClass="icon"></mu-flat-button>
      	  	  <mu-flat-button label="34" icon="grade" labelClass="label" iconClass="icon"></mu-flat-button>
      	  	</div>
      	  </mu-list-item>
      	</mu-list>
      </mu-paper>
      <!-- <div class="wrapper"></div>
      <div class="wrapper"></div> -->
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
@import "~assets/css/common";

.blog-classify {
	width: 100%;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	.wrapper {
		min-width: 310px;
		flex: 0 0 32%;
		margin-bottom: 20px;
		padding-top: 20px;
	}
	.mu-sub-header {
		line-height: 20px;
		padding: 0 16px;
		h2 {
			font-size: 20px;
			
			color: @blue500;
			float: left;
		}
		a {
			float: right;
			font-size: 12px;
		}
	}
	.mu-item {
		padding: 8px 56px 8px 16px;
	}
	.title {
		font-size: 14px;
	}
	.describe {
		font-size: 12px;
	}
	.time {
		display: block;
		margin-top: 4px;
		color: @grey500;
	}
	.comment {
		margin-top: 30px;
		.mu-flat-button {
			color: @grey500;
			min-width: 0;
			height: 24px;
			line-height: 16px;
			.icon {
				font-size: 16px;
				margin-left: 6px;
			}
			.label {
				font-size: 12px;
				padding-left: 4px;
				padding-right: 8px;
			}
		}
	}
}
</style>