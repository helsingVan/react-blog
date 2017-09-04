<template>
  <mu-drawer :right="true" :open="open" :width="drawerWidth" :docked="false" class="webdrawer">
	<mu-paper v-for="(item,index) in drawData" class="card">
	  <img :src="item.image" width="200" height="150" alt="">
	</mu-paper>
  </mu-drawer>
</template>

<script>
import { webClubData } from 'assets/js/webclub-data';

export default {
  name: 'draw-webclub',
  props: {
  	open: {},
  },
  data() {
  	return {
  	  drawData: []
  	}
  },
  computed: {
  	drawerWidth() {
	  return document.body.clientWidth - 250;
	}
  },
  created() {
  	this.drawData = webClubData;
  }
}
</script>

<style lang="less">
.webdrawer {
	display: flex;
	flex-flow: row wrap;
	justify-content: space-around;
	align-items: center;
	.card {
		flex: 0 1 33.3%;
		text-align: center;
		margin-top: 40px;
		img {
			width: 200px;
			height: 150px;
		}
	}
}
</style>