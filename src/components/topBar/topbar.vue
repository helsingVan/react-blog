<template>
  <div class="topbar">
    <slot name="back"></slot>
    <p>{{title}}</p>
  </div>
</template>

<script>
export default {
  name: 'topbar',
  props: {
      title: {
      type: String
    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss">
.topbar {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  border-bottom: 1px solid #ddd;
  background: #fff;
  z-index: 100;
  p {
    height: 3rem;
	line-height: 3rem;
	text-align: center;
  }
  .back {
    position: absolute;
    top: 0;
    left: 1rem;
    line-height: 3rem;
  }
}
</style>