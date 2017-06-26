<template>
  <div class="star-rating">
    <p class="star-box">
      <i class="fa" :class="item" v-for="item in starAmounts"></i>
    </p>
    <p class="star-score">{{score}}</p>
  </div>
</template>

<script>
export default {
  name: 'star',
  props: {
  	rating: {
  	  type: Object
  	},
    hasScore: {
      type: Boolean,
      default() {
        return true;
      }
    }
  },

  computed: {
  	starAmounts() {
  	  if(this.rating.average === 0) {
  	  	return [];
  	  }
      let starAmounts = [];
      let score = Math.floor(this.rating.average)/2;
      let hasHalf = score%1 !== 0;
      // 整数星星
      let intScore = Math.floor(score);
      for(let i=0;i<intScore;i++) {
        starAmounts.push('fa-star');
      }
      // 半个星星
      if(hasHalf) {
      	starAmounts.push('fa-star-half-o');
      }
      // 补满空星星
      while(starAmounts.length<5) {
      	starAmounts.push('fa-star-o');
      }

      return starAmounts;
  	},
  	score() {
  	  if(this.rating.average === 0) {
        return '暂无评分';
  	  }else {
  	  	// return this.rating.average;
        if(this.hasScore) {
          return this.rating.average;
        }
  	  }
  	}
  }
}
</script>

<style lang="scss">
@import '../../assets/scss/common.scss';

.star-rating {
  p {
  	display: inline-block;
  }
  .fa {
  	color: #ff9900;
  }
}
</style>