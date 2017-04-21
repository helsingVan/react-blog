<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <!-- <div class="error">test</div> -->
    <nav>
      <router-link to="/movie">电影</router-link>
      <router-link to="/music">音乐</router-link>
      <router-link to="/book">图书</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
$red: red;
.error {
  color: $red;
}

</style>
