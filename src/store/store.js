import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
	info: '引入vux成功'
};

export default new Vuex.Store({
	state
});

