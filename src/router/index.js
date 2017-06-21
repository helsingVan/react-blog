import Vue from 'vue'
import Router from 'vue-router'
import Axios from 'axios'
import '@/assets/js/jsonp'
import jquery from 'jquery'
import Movie from '@/page/movie/movie'
import Music from '@/page/music/music'
import Book from '@/page/book/book'
import MovieMore from '@/page/movie/movie-more'
import HotMovie from '@/page/movie/children/hotmovie'
import Future from '@/page/movie/children/future'
import PiaoFang from '@/page/movie/children/piaofang'

Vue.use(Router)
// Vue.prototype.$http = Axios;
Vue.prototype.$http = jquery.ajax;

const routes = [
	{
		path: '/',
		redirect: {name: 'movie'}
	},
	{
		path: '/movie',
		name: 'movie',
		component: Movie
		// children: [
		// 	{
		// 		path: 'more',
		// 		component: MovieMore
		// 	}
		// ]
	},
	{
		path: '/music',
		component: Music
	},
	{
		path: '/book',
		component: Book
	},
	{
		path: '/movie/more',
		component: MovieMore,
    children: [
      { path: '',redirect: {name: 'hotMovie'} },
      { path: 'hotmovie',name:'hotMovie',component: HotMovie },
      { path: 'future',component: Future },
      { path: 'piaofang',component: PiaoFang }
    ]
	}
];

export default new Router({
  routes: routes,
  linkActiveClass: 'active'
})
