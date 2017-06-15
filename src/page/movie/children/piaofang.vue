<template>
  <div class="mt30">
    <ul>
      <li v-for="item in piaoFang" class="more-list">
        <figure>
          <img :src="item.images.medium" alt="">
          <section class="content">
            <h2>{{item.title}}</h2>
            <p>导演：
              <span v-for="director in item.directors">{{director.name}}</span>
            </p>
            <p>
              主演：
              <span v-for="cast in item.casts">{{cast.name}}</span>
            </p>
            <p><span class="blue">{{item.collect_count}}</span>人看过</p>
          </section>
        </figure>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'piaoFang',
    data() {
      return {
        piaoFang: []
      }
    },
    created() {
      this.init();
      this.addRouter();
    },
    methods: {
      init() {
        let _this = this;
        this.$http({
          type: 'GET',
          url: 'https://api.douban.com/v2/movie/us_box?count=126',
          dataType: 'jsonp',
          success: function (data) {
            var arr = [];
            data.subjects.forEach((v,i)=> {
              arr.push(v.subject);
            });
            _this.piaoFang = arr;
          }
        });
      },
      addRouter() {
        this.$store.commit('addRouter');
      }
    }
  }
</script>

<style lang="scss">
  @import '../../../assets/scss/common.scss';

  .more-list {
    padding: 2rem 4rem 2rem 1rem;
    border-bottom: 1px solid #ddd;
  figure {
    display: flex;
  }
  .content {
    margin-left: 1.5rem;
    padding-top: 1rem;
    p {
      font-size: 1.2rem;
      margin: .5rem 0 ;
    }
   }
  }
</style>
