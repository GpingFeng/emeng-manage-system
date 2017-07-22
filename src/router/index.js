import Vue from 'vue'
import Router from 'vue-router'
// import Login from '../components/page/Login'
// import Hi from '../components/Hi.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path:'/',
        redirect:'/login'
    },
    {
        path:'/login',
        component:resolve => require(['../components/page/Login.vue'],resolve)
    },
    {
        path:'/readme',
        component:resolve =>require(['../components/common/Home.vue'],resolve),
        children:[
            // {
            //     path:'/readme',
            //     component:resolve => require(['../components/page/Readme.vue'])
            // },
            {
                path:'/user',
                component:resolve => require(['../components/page/User.vue'],resolve),
                // children:[
                //     {
                //         path:'/useredit',
                //         component:resolve => require(['../components/page/UserEdit.vue'],resolve)
                //     }
                // ]
            },
            {
                path:'/userreview',
                component:resolve => require(['../components/page/UserReview.vue'],resolve)
            },
            {
                path:'/authority',
                component:resolve => require(['../components/page/Authority.vue'],resolve)
            },
            {
                path:'/role',
                component:resolve => require(['../components/page/Role.vue'],resolve)
            },
            {
                path:'/video',
                component:resolve => require(['../components/page/Video.vue'],resolve)
            },
            {
                path:'/advertisement',
                component:resolve => require(['../components/page/Advertisement.vue'],resolve)
            },
            {
                path:'/newteacher',
                component:resolve => require(['../components/page/NewTeacher.vue'],resolve)
            },
            {
                path:'/oldteacher',
                component:resolve => require(['../components/page/OldTeacher.vue'],resolve)
            },
            {
                path:'/school',
                component:resolve => require(['../components/page/School.vue'],resolve)
            }
        ]
    }
  ]
})
