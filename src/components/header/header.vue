<template>
	<mu-drawer width="250" :open="!fullScreen" class="nav-aside">
		<div class="wrapper user">
			<!-- <mu-avatar src="/static/image/user.jpg" :size="100"></mu-avatar> -->
		</div>
		<mu-list class="nav-list">
			<mu-list-item title="HOME" to="/"></mu-list-item>
			<mu-list-item title="WebClub" to="/webclub"></mu-list-item>
			<mu-list-item title="HOME"></mu-list-item>
			<mu-list-item title="HOME"></mu-list-item>
		</mu-list>
		<button @click="_setFullScreen(true)">关闭</button>
	</mu-drawer>
</template>

<script>
import { mapGetters,mapActions,mapMutations } from 'vuex';

export default {
	name: 'header',
	data() {
		return {
			visible: true
		}
	},
	computed: {
		...mapGetters([
			'fullScreen'
		])
	},
	methods: {
		hide() {
			this._setFullScreen(true);
			
		},
		...mapMutations({
			'_setFullScreen': 'SET_FULLSCREEN'
		})
	}
}
</script>

<style lang="less">
.nav-aside {
	overflow: hidden;
	.user {
		text-align: center;
		margin-top: 100px;
	}
	.nav-list {
		text-align: center;
		margin-top: 50px;
	}
}
</style>