<template>
  <div class="introduction">
  	<section class="clearfix">
  	  <h2 class="title">简介</h2>
  	  <p class="content" ref="summary">{{content.summary}}</p>
  	  <span class="more" @click="checkMore(true)" v-show="isCheckMore">
  	  	更多
  	  	<i class="fa fa-angle-down"></i>
  	  </span>
  	  <span class="more" @click="checkMore(false)" v-show="!isCheckMore">
  	  	收起
  	  	<i class="fa fa-angle-up"></i>
  	  </span>
  	</section>
  </div>
</template>

<script>
export default {
  name: 'introduction',
  props: {
  	content: {}
  },
  data() {
  	return {
  	  isCheckMore: true
  	}
  },
  methods: {
  	checkMore(flag) {
  	  let summary = this.$refs.summary
  	  if(flag) {
  	  	summary.style.height="auto";
  	  	this.isCheckMore = false;
  	  }else {
  	  	summary.style.height="10rem";
  	  	this.isCheckMore = true;
  	  }
  	}
  }
}
</script>

<style lang="scss">
@import '../../assets/scss/common.scss';

.introduction {
  padding: 2rem;
  .title {
  	color: #ababab;
  	font-size: 1.2rem;
  	font-weight: 400;
  }
  .content {
  	font-size: 1.2rem;
  	line-height: 2rem;
  	text-indent: 2em;
  	margin-top: 1rem;
  	height: 10rem;
  	overflow: hidden;
  	text-overflow: ellipsis;
  	word-wrap: break-word;
  }
  .more {
  	float: right;
	color: $activeColor;
  }
}
</style>