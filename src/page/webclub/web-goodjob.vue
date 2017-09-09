<template>
  <section>
  	<mu-card v-for="item in goodJobList">
  	  <mu-card-header :title="item.name" :subTitle="item.info">
  	  	<mu-avatar :src="item.image" slot="avatar"></mu-avatar>
  	  </mu-card-header>
  	</mu-card>
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