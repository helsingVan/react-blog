<template>
  <section>
  	<!-- <mu-card v-for="item in goodJobList">
  	  <mu-card-header :title="item.name" :subTitle="item.info">
  	  	<mu-avatar :src="item.image" slot="avatar"></mu-avatar>
  	  </mu-card-header>
  	</mu-card> -->
  	<mu-list>
  	  <mu-list-item v-for="item in goodJobList" :title="item.name" :href="item.blogUrl" target="_blank">
  	  	<mu-avatar :src="item.image" slot="leftAvatar"></mu-avatar>
  	  	<p slot="describe">{{item.info}}</p>
  	  </mu-list-item>
  	</mu-list>
  </section>
</template>
 
<script>
import { webGoodJobData } from 'assets/js/webclub-data';

export default {
  data() {
  	return {
  	  goodJobList: webGoodJobData
  	}
  }
}
</script>

<style lang="less">
	
</style>