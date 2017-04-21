import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/components/movie/movie'
import Music from '@/components/music/music'
import Book from '@/components/book/book'

Vue.use(Router)

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
		path: '/Book',
		component: Book
	}
]

export default new Router({
  routes: routes,
  linkActiveClass: 'active'
})
