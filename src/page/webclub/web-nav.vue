<template>
  <section class="web-flexbox web-nav">
  	<mu-paper v-for="item in navList" class="item flexboxitem">
  	  <a :href="item.url">
  	  	<img :src="item.image" alt="">
  	  </a>
  	  <h3>{{item.title}}</h3>
  	  <p>{{item.text}}</p>
  	</mu-paper>
  </section>
</template>

<script>
import { webNavData } from 'assets/js/webclub-data';

export default {
  data() {
  	return {
  	  navList: webNavData
  	}
  }
}
</script>

<style lang="less">
@import "~assets/css/common";

.web-nav {
	.item {
		margin-bottom: 10px;
		
		a {
			display: block;
			height: 60%;
			width: 100%;
		}
		img {
			display: block;
			width: 100%;
			height: 100%;
		}
		h3 {
			padding: 2px 5px;
		}
		p {
			padding: 2px 5px;
			font-size: 12px;
		}
	}
}

</style>