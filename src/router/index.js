import Vue from 'vue'
import Router from 'vue-router'
import Axios from 'axios'
import '@/assets/js/jsonp'
import jquery from 'jquery'
import Movie from '@/page/movie/movie'
import Music from '@/page/music/music'
import Book from '@/page/book/book'



Vue.use(Router)
// Vue.prototype.$http = Axios;
Vue.prototype.$http = jquery.ajax;

const routes = [
	{
		path: '/',
		component: Movie
	},
	{
		path: '/movie',
		component: Movie
	},
	{
		path: '/music',
		component: Music
	},
	{
		path: '/book',
		component: Book
	}
]

export default new Router({
  routes: routes,
  linkActiveClass: 'active'
})
