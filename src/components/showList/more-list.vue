<template>
  <transition name="fade">
  	<div class="more" v-show="isShow">
  	  moremoremoormeo
  	</div>
  </transition>
  
</template>

<script>
export default {
  name: 'more',
  data() {
    return {
      isShow: false
    }
  },
  methods: {
  	show() {
  	  this.isShow = true;
  	}
  }
}
</script>

<style lang="scss">
@import '../../assets/scss/common.scss';

.more {
  position: absolute;
  background: red;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>