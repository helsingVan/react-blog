<template>
  <div class="detail-top" ref="detailTopBar">
  	<a class="back" @click="goBack">
  	  <i class="fa fa-chevron-left"></i>
  	</a>
  	<p>{{title}}</p>
  </div>
</template>

<script>
export default {
  name: 'detailTop',
  props: {
  	title: {}
  },
  mounted() {
  	this.scroll();
  },
  methods: {
  	goBack() {
  	  this.$router.go(-1);
  	},
    scroll() {
      let topbarEl = this.$refs.detailTopBar;
      window.onscroll = function(e) {
        let rate = (window.scrollY)/400;
        rate = rate>1?1:rate;
        topbarEl.style.background = `rgba(255,255,255,${rate})`;
      }
    }
  }
}
</script>

<style lang="scss">
.detail-top {
  position: fixed;
  display: flex;
  width: 100%;
  height: 4rem;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  z-index: 100;
  background: rgba(255,255,255,0);
  .back {
  	flex: 0 1 auto;
    color: #fff;
	margin-left: 1rem;
  }
  p {
  	flex: 1;
  	text-align: center;
  	font-size: 1.4rem;
  	color: #fff;
  }
}
</style>