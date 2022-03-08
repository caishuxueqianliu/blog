
import axios from 'axios'
// import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'

// import Test from './components/doc.vue'

export default ({ Vue }) => {
  // Vue.component('Test', Test)
  Vue.use(ElementUI)
  // Vue.use(VueRouter)
  Vue.mixin({
    computed: {
      $posts() {
        return this.$site.pages
      },
    },
  })
//  const router = new VueRouter({
//   mode:'history',
//   routes:[  {
//     path: '/',
//   },
//   {
//     path: '/tag',
//   },]
//  })
//    console.log( router)
//   router.beforeEach((to, from, next) => {
//    console.log(1)
//   })
  // let vm = new Vue()
  // console.log( router)
  // console.log( vm)
}
