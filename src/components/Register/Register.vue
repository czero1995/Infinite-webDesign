<template>
    <div class="page">
        <headersec tabname="注册"></headersec>
        <transition :name="slidename" >
        <div class="container" v-show="mainarea">

            <div class="login_item flex">
                <span>用户名:</span>
                <input type="text" placeholder="输入用户名" v-model="nickName">
            </div>
            <div class="login_item flex">
                <span>手机号:</span>
                <input type="text" placeholder="输入手机号码" v-model="phoneNumber">
            </div>
            <div class="login_item flex">
                <span>密码:</span>
                <input type="password" placeholder="输入密码" v-model="passwd">
            </div>
            <div class="login_item flex">
                <span>确认密码:</span>
                <input type="password" placeholder="输入确定密码" v-model="rePasswd">
            </div>
            <div class="noacount" @click="toLogin">
                已账号?前往登陆!
            </div>
            <div class="login_btn" @click="onRegister">
                注册
            </div>
            
        </div>
        </transition>
    </div>
</template>

<script>
import Headersec from "../base/HeaderSec.vue";
import * as common from "../../../static/js/common.js";
var lastRouter = "";
export default {
  data() {
    return {
      phoneNumber: "",
      nickName: "",
      passwd: "",
      rePasswd: "",
      mainarea: false,
      slidename: "slide-up"
    };
  },
  components: {
    Headersec
  },
  mounted() {},
  activated() {
    this.mainarea = true;
  },
  deactivated() {
    this.mainarea = false;
  },
  methods: {
    toLogin() {
      this.$router.replace({
        path: "./login"
      });
    },
    onRegister() {
      if (this.nickName == "") {
        this.$toastBox.showToastBox({
          toast: "请输入用户名"
        });
      } else if (!common.phoneReg.test(this.phoneNumber)) {
        this.$toastBox.showToastBox({
          toast: "请输入正确手机号码"
        });
      } else if (this.passwd == "") {
        this.$toastBox.showToastBox({
          toast: "请输入密码"
        });
      } else if (this.passwd != this.rePasswd) {
        this.$toastBox.showToastBox({
          toast: "两次输入密码不一致"
        });
      } else {
        this.$http
          .post(`${this.$baseURL}signup`, {
            phoneNumber: this.phoneNumber,
            nickname: this.nickName,
            passwd: this.passwd
          })
          .then(res => {
            if (res.data.success) {
              this.$toastBox.showToastBox({
                toast: "注册成功,请登陆"
              });
              setTimeout(() => {
                this.$router.replace({
                  path: "./login"
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
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../../static/less/variable.less";
.container {
  padding: 1rem;
  margin-top: 1rem;
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
  text-align: left;
  color: #666;
  font-size: 0.24rem;
}
</style>
