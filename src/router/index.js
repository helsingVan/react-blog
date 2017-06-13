import Vue from 'vue'
import Router from 'vue-router'
import Axios from 'axios'
import '@/assets/js/jsonp'
import jquery from 'jquery'
import Movie from '@/page/movie/movie'
import Music from '@/page/music/music'
import Book from '@/page/book/book'
import MovieMore from '@/page/movie/movie-more'


Vue.use(Router)
// Vue.prototype.$http = Axios;
Vue.prototype.$http = jquery.ajax;

const routes = [
	{
		path: '/',
		redirect: 'movie'
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
		component: MovieMore
	}
]

export default new Router({
  routes: routes,
  linkActiveClass: 'active'
})
