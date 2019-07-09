import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const routers=new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: resolve => require(['@/components/HelloWorld'], resolve),
      redirect: "info",
      children: [
        {
          path: 'info',
          name: 'info',
          component: resolve => require(['@/components/main/lay_info'], resolve)
        },
        {
          path: 'news',
          name: 'news',
          component: resolve => require(['@/components/main/lay_news'], resolve),
          // redirect: "item1",
          children : [
            {
              path: 'item1',
              name: 'item1',
              component: resolve => require(['@/components/main/item1'], resolve),
            },
            {
              path: 'item2',
              name: 'item2',
              component: resolve => require(['@/components/main/item2'], resolve)
            }
          ]
        },
        {
          path: 'test',
          name: 'test',
          component: resolve => require(['@/components/main/lay_test'], resolve)
        },

      ]
    },
  ]
})
export default routers;
// routers.beforeEach((to,from,next)=>{
//   console.log(location);
//   console.log(to);
//   if(to.path=="/"){
//           if(location.search.indexOf("news")!=-1){
//               next({path:"/news"})
//           }else if(location.search.indexOf("info")!=-1){
//               next({path:"/info"})
//           }else if(location.search.indexOf("test")!=-1){
//             next({path:"/test"})
//           }else {
//             next()
//           }
//       }else {
//         next()
//       }
// })
// routers.afterEach((to,from,next)=>{
//   console.log("跳转成功");
// })
