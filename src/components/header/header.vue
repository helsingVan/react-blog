<template>
	<mu-drawer width="250" :open="!fullScreen"  class="nav-aside">
		<p>drawer</p>
		<button @click="_setFullScreen(true)">按钮</button>
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

</style>