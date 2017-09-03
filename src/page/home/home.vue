<template>
	<div>主页
	<button v-show="fullScreen" @click="_setFullScreen(false)">显示导航</button>
	</div>

</template>

<script>
import { mapGetters,mapMutations} from 'vuex';

export default {
	name: 'home',
	computed: {
		...mapGetters([
			'fullScreen'
		])
	},
	methods: {

		...mapMutations({
			'_setFullScreen': 'SET_FULLSCREEN'
		})
	}
}
</script>

<style lang="less">
	
</style>