<template>

    <div class="page">
        <headersec tabname="登录"></headersec>
        <transition :name="slidename">
            <div class="container" v-show="mainarea">
                <div class="login_item flex">
                    <span>手机:</span>
                    <input type="text" placeholder="输入手机号码" v-model="phoneNumber">
                </div>
                <div class="login_item flex">
                    <span>密码:</span>
                    <input type="password" placeholder="输入登录密码" v-model="passwd">
                </div>
                <router-link class="forget_passwd" tag="div" to="./forgetpasswd">
                    忘记密码
                </router-link>
                <div class="login_btn" @click="onLogin">
                    登录
                </div>
                <router-link class="noacount" tag="div" to="./register">
                    没有账号?前往注册!
                </router-link>
            </div>
        </transition>
    </div>
</template>

<script>
import Headersec from "../base/HeaderSec.vue";
import * as common from "../../../static/js/common.js";
import { mapGetters, mapMutations } from "vuex";
var lastRouter = "";
export default {
  data() {
    return {
      phoneNumber: "",
      passwd: "",
      slidename: "slide-back",
      mainarea: false
    };
  },
  components: {
    Headersec
  },
  mounted() {},
  activated() {
    this.mainarea = true;
    /*判断动画是进还是出*/
    if (lastRouter == "/register" || lastRouter == "/forgetpasswd") {
      this.slidename = "slide-back";
    } else {
      this.slidename = "slide-up";
    }
  },
  deactivated() {
    this.mainarea = false;
  },
  beforeRouteEnter(to, from, next) {
    lastRouter = from.path;
    next();
  },
  methods: {
    onLogin() {
      if (!common.phoneReg.test(this.phoneNumber)) {
        this.$toastBox.showToastBox({
          toast: "请输入正确手机号码"
        });
      } else if (this.passwd == "") {
        this.$toastBox.showToastBox({
          toast: "请输入密码"
        });
      } else {
        this.$http
          .post(`api/user/login`, {
            phoneNumber: this.phoneNumber,
            passwd: this.passwd
          })
          .then(res => {
            if (res.data.success) {
              this.$toastBox.showToastBox({
                toast: "登录成功"
              });
              this.setLogin(true);
              this.setUserinfo(res.data.data);
              setTimeout(() => {
                this.$router.replace({
                  path: "./member"
                });
              }, 1000);
            } else {
              this.$toastBox.showToastBox({
                toast: res.data.data
              });
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    ...mapMutations({
      setLogin: "SET_LOGIN",
      setUserinfo: "SET_USERINFO"
    })
  }
};
</script>

<style lang="less" scoped>
@import "../../../static/less/variable.less";
.container {
  padding: 1rem;
  margin-top: 1.6rem;
}
.login_item {
  box-sizing: border-box;
  font-size: 0.32rem;
  margin-bottom: 0.8rem;
  input {
    flex: 1;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #ccc;
    font-size: 0.28rem;
    padding-left: 0.2rem;
    margin-left: 0.3rem;
  }
}
.login_btn {
  width: 4rem;
  margin: 0 auto;
  line-height: 0.8rem;
  background: @theme_background;
  color: white;
  font-size: 0.26rem;
  text-align: center;
  border-radius: 15px;
  margin-top: 1.6rem;
}
.noacount {
  position: absolute;
  bottom: 1rem;
  text-align: center;
  right: 0;
  left: 0;
  color: #666;
  margin: auto;
  font-size: 0.24rem;
}
.forget_passwd {
  text-align: right;
  font-size: 0.26rem;
}
</style>
