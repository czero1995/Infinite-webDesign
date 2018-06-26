<template>

    <div class="page">
        <headersec tabname="登录"></headersec>
        <div class="container">

            <div class="login_item flex">
                <span>手机:</span>
                <input type="text" placeholder="输入手机号码" v-model="phoneNumber">
            </div>
            <div class="login_item flex">
                <span>密码:</span>
                <input type="text" placeholder="输入登录密码" v-model="passwd">
            </div>
            <router-link class="forget_passwd" tag="div" to="./forgetpasswd">
                忘记密码
            </router-link>
            <div class="login_btn">
                登录
            </div>
            <router-link class="noacount" tag="div" to="./register">
                没有账号?前往注册!
            </router-link>
        </div>
    </div>
</template>

<script>
import Headersec from '../base/HeaderSec.vue';
export default {
    data() {
        return {
            phoneNumber: '',
            passwd: '',
        }
    },
    components: {
        Headersec,
    },
    mounted() {

    },
    methods: {
        onLogin() {
            var phoneReg = /(1[3-9]\d{9}$)/;
            if (!phoneReg.test(this.phoneNumber)) {
                this.$toastBox.showToastBox({
                    toast: '请输入正确手机号码',
                })
            } else {

                this.$http
                    .post(`http://127.0.0.1:3000/api/user/login`, {
                        phoneNumber: this.phoneNumber,
                        passwd: this.passwd,
                    })
                    .then(res => {
                        console.log(res)
                        if (res.data.data.success) {
                            this.$toastBox.showToastBox({
                                toast: '登录成功',
                            })
                            setTimeout(() => {
                                this.$router.replace({
                                    path: './member'
                                })
                            }, 2000)
                        } else {
                            this.$toastBox.showToastBox({
                                toast: '登录失败,请重试!',
                            })
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import '../../../static/less/variable.less';
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
</style>
