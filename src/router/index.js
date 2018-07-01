import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 推荐页
const Index = (resolve) => {
    import('@/components/Index').then((module) => {
        resolve(module)
    })
}
// 发现页
const Hot = (resolve) => {
    import('@/components/Hot/Hot').then((module) => {
        resolve(module)
    })
}
// 搜索页
const Search = (resolve) => {
    import('@/components/Search/Search').then((module) => {
        resolve(module)
    })
}
// 搜索内容页
const Searchbox = (resolve) => {
    import('@/components/Search/Searchbox').then((module) => {
        resolve(module)
    })
}
// 内容闲情页
const Detail = (resolve) => {
    import('@/components/Detail/Detail').then((module) => {
        resolve(module)
    })
}
// 个人中心页
const Member = (resolve) => {
    import('@/components/Member/Member').then((module) => {
        resolve(module)
    })
}
// 登陆页
const Login = (resolve) => {
    import('@/components/Login/Login').then((module) => {
        resolve(module)
    })
}
// 注册页
const Register = (resolve) => {
    import('@/components/Register/Register').then((module) => {
        resolve(module)
    })
}
// 忘记密码页
const ForgetPasswd = (resolve) => {
    import('@/components/ForgetPasswd/ForgetPasswd').then((module) => {
        resolve(module)
    })
}
// 收藏页
const Collect = (resolve) => {
    import('@/components/Collect/Collect').then((module) => {
        resolve(module)
    })
}
// 关于我们页
const About = (resolve) => {
    import('@/components/About/About').then((module) => {
        resolve(module)
    })
}
// 用户协议页
const Agreement = (resolve) => {
    import('@/components/Agreement/Agreement').then((module) => {
        resolve(module)
    })
}

export default new Router({
    //	 mode: 'history',
    routes: [{
        path: '/',
        component: Index
    },
    {
        path: '/index',
        component: Index
    },
    {
        path: '/hot',
        component: Hot
    },
    {
        path: '/search',
        component: Search
    },
    {
        path: '/searchbox',
        component: Searchbox
    },
    {
        path: '/detail',
        component: Detail
    },
    {
        path: '/member',
        component: Member
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/forgetpasswd',
        component: ForgetPasswd
    },
    {
        path: '/collect',
        component: Collect
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/agreement',
        component: Agreement
    },

    ]
})