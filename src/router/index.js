import Router from 'vue-router';
import Vue from 'vue';
Vue.use(Router);
const router=new Router({
  routes:[
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      name:'Home',
      meta:{
        title:'主页',
      },
      component:() => import('views/home/home')
    },
    {
      path:'/classify',
      name:'Classify',
      meta:{
        title:'分类',
      },
      component:() => import('views/classify/classify'),
      children:[
        {
          path:'men',
          name:'Men',
          component:() => import('views/classify/children/men')
        },
        {
          path:'women',
          name:'WoMen',
          component:() => import('views/classify/children/women')
        }
      ]
    },
    {
      path:'/shopping',
      name:'Shopping',
      meta:{
        title:'购物车',
      },
      component:() => import('views/shopping/shopping')
    },
    {
      path:'/self',
      name:'Self',
      meta:{
        title:'我的',
      },
      component:() => import('views/self/self')
    }
  ],
  mode:'history'
});

router.beforeEach((to,form,next) => {
  document.title=to.matched[0].meta.title;
  next();
});

export default router;
