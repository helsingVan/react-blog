<template>
  <div>
  	<mu-breadcrumb style="margin-bottom:30px;">
	    <mu-breadcrumb-item href="/">技术</mu-breadcrumb-item>
	    <mu-breadcrumb-item href="/">html5</mu-breadcrumb-item>
	    <mu-breadcrumb-item>列表</mu-breadcrumb-item>
	  </mu-breadcrumb>
  	<mu-card v-for="i in 10" style="margin-bottom:20px;">
	  <!-- <mu-card-header title="最近更新">
	    
	  </mu-card-header> -->
	  
	  <mu-card-title title="Content Title" subTitle="Content Title"/>
	  <mu-card-text>
	    散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
	    调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
	    似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，
	    找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
	  </mu-card-text>
	  <mu-card-actions>
	    <mu-flat-button label="Action 1"/>
	    <mu-flat-button label="Action 2"/>
	  </mu-card-actions>
	</mu-card>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
	
</style>