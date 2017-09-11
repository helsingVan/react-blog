import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

const Home = (resolve) => {
	import('page/home/home').then((module)=> {
		resolve(module)
	})
};
const WebClub = (resolve) => {
  import('page/webclub/webclub').then((module)=> {
    resolve(module)
  })
}
const WebNav = (resolve) => {
  import('page/webclub/web-nav').then((module)=> {
    resolve(module)
  })
}
const WebTool = (resolve) => {
  import('page/webclub/web-tool').then((module)=> {
    resolve(module)
  })
}
const WebGoodJob = (resolve) => {
  import('page/webclub/web-goodjob').then((module)=> {
    resolve(module)
  })
}

const Blog = (resolve) => {
  import('page/blog/blog').then((module)=> {
    resolve(module)
  })
}
const BlogTechnology = (resolve) => {
  import('page/blog/blog-technology').then((module)=> {
    resolve(module)
  })
}
const BlogTechnologyHtml5 = (resolve) => {
  import('page/blog/blog-technology-html5').then((module)=> {
    resolve(module)
  })
}

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'Home',component: Home},
    {path: '/webclub',name: 'WebClub',component: WebClub, redirect: '/webclub/nav',children: [
      {path: 'nav',name:'WebNav',component: WebNav},
      {path: 'tool',name:'WebTool',component: WebTool},
      {path: 'goodjob',name:'WebGoodJob',component: WebGoodJob}
    ]},
    {path: '/blog',name: 'Blog',component: Blog,children: [
      {path: 'technology',name: 'BlogTechnology',component: BlogTechnology},
      {path: 'html5',name: 'BlogTechnologyHtml5',component: BlogTechnologyHtml5}
    ]}
  ]
})
