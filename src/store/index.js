import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';

Vue.use(Vuex);

const state = {
  info: '引入vux成功',
  hotmovie: null,
  piaofang: null,
  futuremovie: null
  
};

export default new Vuex.Store({
	state,
  mutations
});

