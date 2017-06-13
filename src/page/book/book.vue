<template>
  <div>
  	图书
  	<main-nav></main-nav>
  </div>
</template>

<script>
import mainNav from '../../components/nav/nav';

export default {
  name: 'book',
  components: { mainNav },
  data() {
    return {
	  title: '图书'
	}
  }
}
</script>

<style>
	
</style>