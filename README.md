使用Vue和Node实现前端，服务端，后台管理系统三个项目。

前后端分离，Restful API。

* 前端: Vue-CLI
* 服务端:Node-Koa2-Mongodb-Mongoose-七牛云对象存储

* 后台管理系统: [iView-Admin](https://github.com/iview/iview-admin.git)

* 开发IDE：VSCode

* 部署环境:阿里云-Ubuntu16.04

* 版本管理: Git


### 效果预览

![](https://user-gold-cdn.xitu.io/2018/7/1/16453367a8152049?w=362&h=648&f=gif&s=3244257)

![](https://user-gold-cdn.xitu.io/2018/7/1/1645493a797aef5a?w=364&h=646&f=gif&s=3248323)
# 在线访问
### 前端:

扫码查看:
![](https://user-gold-cdn.xitu.io/2018/7/1/16454c3ce8fad285?w=280&h=280&f=png&s=1923)

在线查看：

[http://infinite.czero.cn/Infinite-webDesign/dist](http://infinite.czero.cn/Infinite-webDesign/dist/#/hot)

### 后台管理系统:
还没有添加权限管理的功能，后续会加上。进入登录页面，如果不懂或者需要账号私聊我。。。
第一次使用iview-admin，感觉功能还是挺多的，还在摸索阶段，只用来实现简陋的功能，后续会持续优化。
![](https://user-gold-cdn.xitu.io/2018/7/1/164534495741f97e?w=600&h=426&f=gif&s=3022647)

在线查看:

[http://infinite.czero.cn/Infinite-webAdmin/dist](http://infinite.czero.cn/Infinite-webAdmin/dist)

### 项目概览
### 前端(Vue-CLI)：
功能:
架构是基于[Vue全家桶购物商城](https://github.com/czero1995/fancy-store.git)
1. 添加better-scroll组件实现下拉刷新和上拉加载。
2. 请求服务端API，真实的数据交互。
3. 添加搜索，登录，注册等功能并Vuex进行存储。
4. 图片都是使用Iconfont。
5. 动画切换，使用Vue-router做路由判断来实现不同的切换动画。
6. 模块化，全局注册组件弹窗(alert和toast)效果，封装共用js函数类。
7. 配置Webpack请求代理，解决请求服务器端跨域问题。
8. 使用keep-alive对组件进行缓存

目录结构:

    ├── config  (配置目录，需要在index.js配置代理,不然会出现跨域的问题)
    │   ├── dev.env.js
    │   ├── index.js    (配置跨域)
    │   └── prod.env.js
    ├── image
    │   └── github.png
    ├── index.html
        ├── components  (组件目录)
        │   ├──     About(关于我们)
        │   ├──     Agreement(用户协议)
        │   ├──     Base(共用基础组件)
        │   ├──     Collect(我的收藏)
        │   ├──     Detail(内容详情)
        │   ├──     ForgetPasswd(忘记密码)
        │   ├──     Hot(发现热门页)
        │   ├──     Index.vue(首页,推荐页面)
        │   ├──     Login(登录页)
        │   ├──     Member(个人中心页)
        │   ├──     ModelBox(全局注册弹窗组件)
        │   ├──     Register(注册页)
        │   ├──     Search(搜索页)
        │   └──     ToastBox(全局注册Toast组件)
        ├── main.js
        ├── router
        │   └── index.js
        └── store   (Vuex)
            ├── actions.js
            ├── getters.js  (获取Vuex状态)
            ├── index.js    (Vuex入口文件)
            ├── mutation-types.js   (变量存储)
            ├── mutations.js    (to修改动作)
            └── state.js    (状态仓库)

### 服务端(Node-Koa2-Mongodb-Mongoose):
功能：

1. 分页加载
2. 模糊查询
3. 定制Restful API
4. 七牛云第三方对象存储对接
5. pm2部署到阿里云


项目目录:

    ├── app
    │   ├── controllers (逻辑处理目录)
    │   │   ├── admin
    │   │   ├── app.js
    │   │   ├── hot
    │   │   ├── recommend
    │   │   ├── upload
    │   │   └── user
    │   ├── dbhelper (操控数据表目录)
    │   │   ├── AdminHelper.js
    │   │   ├── hotHelper.js
    │   │   ├── recommendHelper.js
    │   │   └── userHelper.js
    │   └── models  (数据库模型目录)
    │       ├── admin.js    (管理员表)
    │       ├── hot.js      (热门发现数据表)
    │       ├── recommend.js    (首页推荐表)
    │       └── user.js (用户管理表--登录注册)
    ├── app.js (服务端启动入口文件  node app.js)
    ├── config  (配置目录)
    │   ├── config.js   (基础配置信息--七牛云配置,数据库配置)
    │   └── router.js   (路由配置)
    
    
### 后台管理系统(iView-Admin):

功能:

1. 文章管理，图片上传到七牛云。
2. 编辑文章
3. 添加文章
4. 用户管理
5. 富文本内容添加


项目目录:

    ├── build (配置全局请求地址和跨域处理)
    │   ├── webpack.dev.config.js   (在这里配置请求跨域问题,及全局请求地址)
    ├── index.html
    ├── src
    │   ├── main.js
    │   ├── mixins  (公共js工具目录)
    │   │   └── common.js
    │   ├── router (路由配置)
    │   │   ├── index.js
    │   │   └── router.js
    │   └── views
    │       ├── Main.vue
    │       ├── error-page
    │       ├── home
    │       ├── login.less
    │       ├── login.vue
    │       ├── main-components (组件入口目录)
    │       ├── main-menu
    │               ├─── edit   (编辑)
    │               ├── hot     (热门)
    │               ├── recommend   (发现)
    │               ├── user    (用户管理)
    │       ├── main.less
    │       ├── message
    │       └── my-components


## 调试方法:
1. Chrome调试(谷歌浏览器工具)
2. vConsole调试(真机调试查看log日志神器)
3. API调试神奇Postman。
4. Vue-devtools(调试Vuex状态)

## 跨域处理
1. 使用Webpack的proxyTable进行请求代理
2. Chrome安装cors拓展
3. 服务端配置所以路径都可跨域或者将开发的IP加入白名单

## 源码
前端源码: [https://github.com/czero1995/Infinite-webDesign.git](https://github.com/czero1995/Infinite-webDesign.git)

服务端源码：[https://github.com/czero1995/Infinite-webServer.git](https://github.com/czero1995/Infinite-webServer.git)

后台管理源码: [https://github.com/czero1995/Infinite-webAdmin.git](https://github.com/czero1995/Infinite-webAdmin.git)

# 使用说明

	#克隆项目
	git clone https://github.com/czero1995/Infinite-webDesign.git
	
	# 安装依赖
	npm install
	
	# 本地开发环境 访问http://localhost:4000
	npm run dev
	
	# 构建生产
	npm run build
	
## 最后
如有建议或者问题，请私聊联系我，一起学习和进步。反手给我一个star^_^
