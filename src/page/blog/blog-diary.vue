<template>
  <div class="blog-diary">
  	<mu-list>
  	  <mu-list-item  :disabled="true">
  	  	<section slot="title" titleClass="title">
  	  	  <h2>漂泊在北京</h2>
  	  	  <p>
  	  	  	<time>2017-08-08</time>
  	  	  	<span>星期日</span>
  	  	  	<span>天气：晴</span>
  	  	  </p>
  	  	</section>
		<section slot="describe" :describeLine="3">
		  {{text}}
		</section>
  	  </mu-list-item>
  	</mu-list>
  </div>
</template>

<script>
export default {
  data() {
  	return {
  	  text: '一入职场深似海，从此下班是路人。 如果你身处北上广深，想必每天都会做一个朝九晚五的梦。 梦很美好，可惜是反的。 当天色已经暗得泛出深紫色的光晕，你还在灯火通明的格子间里找...一入职场深似海，从此下班是路人。 如果你身处北上广深，想必每天都会做一个朝九晚五的梦。 梦很美好，可惜是反的。 当天色已经暗得泛出深紫色的光晕，你还在灯火通明的格子间里找...'
  	}
  },
  mounted() {

  }
}
</script>

<style lang="less">
@import "~assets/css/common";

.blog-diary {
	.mu-item-text {
		max-height: 62px!important;
		-webkit-line-clamp: 3!important;
	}
}
</style>