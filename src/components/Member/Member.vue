<template>

    <div class="page member">
        <transition :name="slidename" >
        <div class="container" v-show="mainarea">
        <div class="member_bgfilter"></div>
        <div class="member_userinfo" v-if="$store.state.login">
            <div class="member_userinfo--avatar">
                <img src="../../../static/img/github.png">
            </div>
            <div class="member_userinfo--username">
                {{$store.state.userinfo.nickname}}
            </div>
        </div>
        <div class="member_userinfo" v-if="!$store.state.login">
            <router-link class="member_userinfo--username" tag="div" to="./login">
                请登录!
            </router-link>
        </div>
        <div class="member_item">

            <router-link class="member_item--collect flex_between" tag="div" to="./collect">
                <span>我的收藏</span>
                <span class="iconfont member_icon">&#xe652;</span>
            </router-link>

            <router-link class="member_item--protocol flex_between" tag="div" to="./agreement">
                <span>用户协议</span>
                <span class="iconfont member_icon">&#xe652;</span>
            </router-link>

            <router-link class="member_item--about flex_between" tag="div" to="./about">
                <span>关于我们</span>
                <span class="iconfont member_icon">&#xe652;</span>
            </router-link>

            <div class="member_item--about flex_between" @click="signOut" v-if="$store.state.login">
                <span>退出登录</span>
            </div>

        </div>
        </div>
        </transition>
        <footers :urlRouter="$route.path" ref="footer"></footers>
    </div>

</template>

<script>
import Footers from "../base/Footer.vue";
import { mapGetters, mapMutations } from "vuex";
var lastRouter = "";
export default {
  data() {
    return {
      mainarea: false,
      slidename: "slide-back"
    };
  },
  components: {
    Footers
  },
  computed: {
    ...mapGetters(["this.$store.state.login"])
  },
  mounted() {},
  methods: {
    signOut() {
      this.$modelBox
        .onModelBox({
          title: "提示",
          content: "确定退出登陆",
          cancelBtn: true
        })
        .then(async val => {
          this.$toastBox.showToastBox({
            toast: "退出登陆"
          });
          this.setLogin(false);
        })
        .catch(() => {
          this.$toastBox.showToastBox({
            toast: "取消退出"
          });
        });
    },
    ...mapMutations({
      setLogin: "SET_LOGIN"
    })
  },
  activated() {
    this.mainarea = true;
    /*判断动画是进还是出*/
    if (lastRouter == "/index" || lastRouter == "/" || lastRouter == "/hot") {
      this.slidename = "slide-go";
    } else {
      this.slidename = "slide-back";
    }
  },
  deactivated() {
    this.mainarea = false;
  },
  beforeRouteEnter(to, from, next) {
    lastRouter = from.path;
    next();
  }
};
</script>

<style lang="less" scoped>
@import "../../../static/less/variable.less";
.member {
  background: #efefef;
}
.member_bgfilter {
  height: 4.6rem;
  background: @theme_background;
  background-size: 100% 100%;
  filter: blur(1px);
}
.member_userinfo {
  position: absolute;
  top: 1.2rem;
  left: 0;
  right: 0;
  margin: auto;
}
.member_userinfo--avatar {
  text-align: center;
  width: 1.4rem;
  height: 1.4rem;
  margin: 0 auto;
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
  }
}
.member_userinfo--username {
  color: white;
  text-align: center;
  font-size: 0.32rem;
  margin-top: 0.2rem;
}
.member_item {
  margin-top: 0.3rem;
  div {
    padding: 0 0.2rem;
    background-color: white;
    line-height: 0.88rem;
    font-size: 0.26rem;
    margin-bottom: 0.4rem;
    color: #000;
    font-weight: bold;
    letter-spacing: 0.76px;
  }
  .member_item--protocol {
    margin-bottom: 0;
    border-bottom: 1px solid #ccc;
  }
}
.member_icon {
  color: #ccc;
  font-size: 28px;
}
.photo_icon {
  font-size: 0.8rem;
  padding: 0.2rem;
  border: 1px solid #fff;
  border-radius: 50%;
}
</style>
