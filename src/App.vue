<template>
  <div id="app" class="layout">
    <v-header @fullscreen="fullScreen"></v-header>
    <div class="main-content" :class="{'fullscreen':fullScreen}">
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
import vHeader from 'components/header/header';


export default {
  name: 'app',
  created() {
    // axios.get('/php').then((res)=>{
    //   console.log(res.data);
    // }).catch((e)=> {
    //   console.log(e);
    // })
  },
  data() {
    return {
      // isFullScreen: false
    }
  },
  computed: {
    ...mapGetters([
      'fullScreen'
    ])
  },
  methods: {
    
  },
  components: { vHeader }
}
</script>

<style lang="less">
.layout {
  
}
.main-content {
  position: relative;
  height: 100%;
  padding-left: 250px;
  transition: all .5s cubic-bezier(.23,1,.32,1);
  &.fullscreen {
    padding-left: 0;
  }
}

</style>
