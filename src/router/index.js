import Vue from 'vue'
//1.导⼊
import Router from 'vue-router'
//2.模块化机制 使⽤Router
Vue.use(Router)

//3.创建路由器对象
const router = new Router({
    mode: 'history', //history模式 干净的网页地址 没有#/之类的符号存在
    routes: [
        {
            path: '/',
            name: 'index2',
            redirect: '/index'
        },
        {
            path: '/login',
            name: 'login2',
            component: () => import('@/components/login.vue'),
        },
        {
            path: '/index',
            name: 'index',
            component: () => import('@/components/index.vue'),
        },
        // home
        {
            path: '/home',
            name: 'home',
            component: () => import('@/views/home/index.vue'),
            children: [
                {
                    path: 'index',
                    name: 'indexhome',
                    component: () => import('@/views/home/home.vue'),
                },
                {
                    path: 'news',
                    name: 'news',
                    component: () => import('@/views/home/news.vue')
                },
                {
                    path: 'blog',
                    name: 'blog',
                    component: () => import('@/views/home/blog.vue')
                },
            ]
        },
        // study
        {
            path: '/study',
            name: 'study',
            component: () => import('@/views/study/index.vue')
        },
        // study - map
        {
            path: '/country',
            name: 'country',
            component: () => import('@/views/study/map/country.vue')
        },
        {
            path: '/province',
            name: 'province',
            component: () => import('@/views/study/map/province.vue')
        },
        {
            path: '/city',
            name: 'city',
            component: () => import('@/views/study/map/city.vue')
        },
        {
            path: '/district',
            name: 'district',
            component: () => import('@/views/study/map/district.vue')
        },
        // stydy - stat
        {
            path: '/stat',
            name: 'stat',
            component: () => import('@/views/study/stat')
        },
        {
            path: '/bar',
            name: 'bar',
            component: () => import('@/views/study/stat/bar.vue')
        },
        {
            path: '/pie',
            name: 'pie',
            component: () => import('@/views/study/stat/pie.vue')
        },
        // study - table
        // {
        //     path: '/table',
        //     name: 'table',
        //     component: () => import('@/views/study/table/table.vue')
        // },
        // {
        //     path: '/table2',
        //     name: 'table2',
        //     component: () => import('@/views/study/table/table2.vue')
        // },
        // life
        {
            path: '/life',
            name: 'life',
            component: () => import('@/views/life')
        },
    ]
})

//挂载路由导航守卫,控制页面访问权限
// router.beforeEach((to, from, next) => {
//     let tokenStr = window.sessionStorage.getItem('token');
//     let tokenStrs = window.localStorage.getItem('tokens');

//     if (to.path === '/login') {
//         if (!tokenStrs) {
//             return next();
//         } else {
//             next({ path: "/index" })
//         }
//     }
//     if (to.path !== "/login" && !tokenStr && !tokenStrs) {
//         next({
//             path: "/login"
//         })
//     }
//     // if (tokenStr == "11") {
//     //     if (to.path == "/study") {
//     //         next({ path: "/index" })
//     //     }
//     // }

//     next()
// })

// 路由重复问题
const VueRouterPush = Router.prototype.push
Router.prototype.push = function push(to) {
    return VueRouterPush.call(this, to).catch(err => err)
}
export default router;
