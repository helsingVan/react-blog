<template>
  <section class="content-block article">
  	<mu-tabs class="tab" :value="tabModel" @change="handleTab">
      <mu-tab title="最新" value="tabNew"></mu-tab>
      <mu-tab title="最热" value="tabHot"></mu-tab>
      <mu-tab title="全部" value="tabAll"></mu-tab> 
    </mu-tabs>
    <mu-list class="blog-diarylist">
  	  <mu-list-item  :disabled="true" class="list" v-for="i in 6">
  	  	<div slot="title" class="title">
  	  	  <h2>
  	  	  	<router-link to="/article/1">标题</router-link>
  	  	  </h2>
  	  	  <p>
  	  	  	<time>2017-08-08</time>
  	  	  	<span>星期日</span>
  	  	  	<span>天气：晴</span>
  	  	  </p>
  	  	</div>
		<div slot="describe" :describeLine="3">
		  {{text}}
		</div>
        <div slot="right">
          <img src="/static/image/user.jpg" alt="" width="140" height="100">
        </div>
        <div class="btn-container">
          <mu-flat-button label="34" icon="grade" labelClass="label" iconClass="icon"></mu-flat-button>
          <mu-flat-button label="34" icon="grade" labelClass="label" iconClass="icon"></mu-flat-button>
        </div>
  	  </mu-list-item>
  	</mu-list>
  </section>
</template>

<script>
export default {
  data() {
  	return {
  	  text: '一入职场深似海，从此下班是路人。 如果你身处北上广深，想必每天都会做一个朝九晚五的梦。 梦很美好，可惜是反的。 当天色已经暗得泛出深紫色的光晕，你还在灯火通明的格子间里找...一入职场深似海，从此下班是路人。 如果你身处北上广深，想必每天都会做一个朝九晚五的梦。 梦很美好，可惜是反的。 当天色已经暗得泛出深紫色的光晕，你还在灯火通明的格子间里找...',
  	  tabModel: 'tabNew'
  	}
  },
  methods: {
  	handleTab(v) {
  	  this.tabModel = v;
  	}
  }
}
</script>

<style lang="less">
@import "~assets/css/common";

.article {
  .tab {
  	width: 25%;
  	background: #fff;
  	.mu-tab-link {
  	  color: @grey500;
  	  min-height: 30px;
  	  padding-top: 4px;
  	  padding-bottom: 4px;
  	}
  }
}
.blog-diarylist {
    .list {
      border-bottom: 1px solid @grey300;
    }
    .title {
      margin-bottom: 5px;
      h2 {
        margin: 10px 0;
        font-size: 18px;
        font-weight: 900;
      }
      p {
        font-size: 12px;
        color: @grey500;
      }
    }
    .btn-container {
      .mu-flat-button {
        min-width: 40px;
        height: 30px;
        line-height: 30px;
      }
      .icon {
        color: @grey500;
        margin: 0;
        font-size: 16px;
      }
      .label {
        color: @grey500;
        padding: 0;
      }
    }
    .mu-item {
      padding-bottom: 5px;
    }
    .mu-item-right {
      top: 50px;
      right: 75px;
      img {
        border-radius: 5px;
      }
    }
    .mu-item-text {
      max-height: 62px!important;
      -webkit-line-clamp: 3!important;
    }
    .mu-item-content {
      width: 85%;
    }
}
</style>