import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

const Home = (resolve) => {
	import('page/home/home').then((module)=> {
		resolve(module)
	})
}


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
