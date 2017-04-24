<template>
  <div id="app">
    
    <router-view></router-view>
    <!-- <div class="error">test</div> -->
    <nav class="van-fixnav">
      <router-link to="/movie">
        <i class="fa fa-film"></i>
        <p>电影</p>
      </router-link>
      <router-link to="/music">
        <i class="fa fa-music"></i>
        <p>音乐</p>
      </router-link>
      <router-link to="/book">
        <i class="fa fa-book"></i>
        <p>图书</p>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">

.van-fixnav {
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 4rem;
  border-top: 1px solid #ddd;
  a {
    flex:1;
    text-align: center;
    color: #666;
      p {
      margin-top: .2rem;
    }
  }
  a.active {
    color: #24BDFF;
  }
  .fa {
    font-size: 1.5rem;
  }
}

</style>
