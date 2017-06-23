<template>
  <section class="detail-title">
  	<div class="content-box">
  	  <h2>{{content.title}}</h2>
  	  <p>
  	  	<span>{{content.year}}</span>
  	  	<span v-for="item in content.genres">/ {{item}}</span>
  	  </p>
  	  <p>
  	  	<span>原名：</span>
        <span>{{content.original_title}}</span>
  	  </p>
      <p>
        <span>片长：</span>
        <span>{{content.reviews_count}}分钟</span>
      </p>
  	</div>
  	<div class="rating-box">
       <p class="title">豆瓣评分</p>
       <p class="rating">{{content.rating.average}}</p>
       <star :rating="content.rating" :has-score="hasScore"></star>
       <p class="person">{{content.ratings_count}}人</p>
    </div>
  </section>
</template>

<script>
import star from '../star/star';

export default {
  name: 'bannerList',
  components: { star },
  props: {
  	content: {}
  },
  data() {
    return {
      hasScore: false
    }
  }
}
</script>

<style lang="scss">
.detail-title {
  padding: 2rem;
  position: relative;
  border-bottom: 1px solid #ddd;
  .content-box {
    h2 {
      margin-bottom: 1rem;
    }
    p {
      margin: .5rem 0;
      color: #ababab;
    }
  }
  .rating-box {
    position: absolute;
    width: 8rem;
    height: 8rem;
    top: 2rem;
    right: 2rem;
    box-shadow: 0 0 1rem #ddd;

    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    .title {
      color: #ccc;
    }
    .rating {
      font-size: 2rem;
    }
    .person {
      color: #ababab;
    }
    p {
      margin: .1rem 0;
    }
  }
}
</style>