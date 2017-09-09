<template>
	<div class="webclub">
		<!-- <mu-paper class="wrapper clearfix">
			<h2>前端导航</h2>
			<div class="card-container">
				<mu-paper v-for="(item,index) in webClub" :key="index">
					<a :href="item.url" target="_blank" class="card-img">
						<img :src="item.image" alt="">
					</a>
					<div>
						
					</div>
					<p class="card-title">{{item.title}}</p>
					<p class="card-text">{{item.text}}</p>
				</mu-paper>
			</div>
			<mu-flat-button label="查看更多" class="more" @click="setCheckMore"></mu-flat-button>
		</mu-paper>
		<v-drawer :open="checkMore"></v-drawer> -->
		<mu-appbar :title="headTitle">
			<mu-flat-button color="white" v-for="item in navList"
			:label="item.name" :slot="item.slot" :to="item.url"></mu-flat-button>
		</mu-appbar>
		<div class="main-content">
		<!-- <mu-content-block> -->
			<router-view></router-view>
		<!-- </mu-content-block> -->
			
		</div>
		
	</div>
</template>

<script>
// import { webClubData } from 'assets/js/webclub-data';
import vDrawer from 'components/drawer/draw-webclub';

export default {
	name: 'webclub',
	components: { vDrawer },
	data() {
		return {
			webClub: [],
			checkMore: false,
			// 导航数据
			navList: [{
				name: '前端社区',
				url: '/webclub/nav',
				slot: 'right'
			},{
				name: '前端框架',
				url: '/webclub/tool',
				slot: 'right'
			}]
		}
	},
	computed: {
		headTitle() {
			const title = this.$route.name;
			switch(title) {
				case 'WebNav':
					return '前端社区';
					break;
				case 'WebTool':
					return '前端框架';
					break;
			}
		}
	},
	updated() {
		console.log(this.$route);
	},
	created() {
		// console.log(document.body.clientWidth);
		// for(var i=0;i<3;i++) {
		// 	this.webClub.push(webClubData[Math.floor(Math.random()*webClubData.length)])
		// }
	},
	methods: {
		setCheckMore() {
			this.checkMore = true;
		},
		targetTitle(titleName) {
			console.log(titleName);
		}
	}
}
</script>

<style lang="less">
.webclub {
	.main-content {
		padding: 20px 20px 0;
	}
	.wrapper {
		width: 80%;
		padding: 20px 20px;
		margin: 20px auto;
		h2 {
			border-bottom: 1px solid #e5e5e5;
			padding: 10px 0;
		}
	}
	.card-container {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;

		
		img {
			display: block;
			width: 80px;
			height: 80px;
		}
		.mu-paper {
			flex: 0 1 230px;
			
			margin: 20px 10px 0;
		}
		.card-img {
			float: left;
			padding: 5px;
		}
		.card-text {
			
			color: #9e9e9e;
			font-size: 12px;
			
			padding: 5px;
		}
		.card-title {
			padding: 5px;
		}
	}
	.more {
		float: right;
	}
}
</style>