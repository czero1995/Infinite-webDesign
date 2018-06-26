import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Index = (resolve) => {
  import ('@/components/Index').then((module) => {
    resolve(module)
  })
}
const Hot = (resolve) => {
  import ('@/components/Hot/Hot').then((module) => {
    resolve(module)
  })
}
const Search = (resolve) => {
  import ('@/components/Search/Search').then((module) => {
    resolve(module)
  })
}
const Searchbox = (resolve) => {
  import ('@/components/Search/Searchbox').then((module) => {
    resolve(module)
  })
}
const Detail = (resolve) => {
  import ('@/components/Detail/Detail').then((module) => {
    resolve(module)
  })
}
const Member = (resolve) => {
  import ('@/components/Member/Member').then((module) => {
    resolve(module)
  })
}
const Login = (resolve) => {
  import ('@/components/Login/Login').then((module) => {
    resolve(module)
  })
}
const Register = (resolve) => {
  import ('@/components/Register/Register').then((module) => {
    resolve(module)
  })
}
const ForgetPasswd = (resolve) => {
  import ('@/components/ForgetPasswd/ForgetPasswd').then((module) => {
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

  ]
})
