<template>

    <div class="page">
        <headersec tabname="注册"></headersec>
        <div class="container">

            <div class="login_item flex">
                <span>用户名:</span>
                <input type="text" placeholder="输入用户名" v-model="phoneNumber">
            </div>
            <div class="login_item flex">
                <span>手机号:</span>
                <input type="text" placeholder="输入手机号码" v-model="nickName">
            </div>
            <div class="login_item flex">
                <span>密码:</span>
                <input type="text" placeholder="输入密码" v-model="passwd">
            </div>
            <div class="login_item flex">
                <span>确认密码:</span>
                <input type="text" placeholder="输入确定密码" v-model="rePasswd">
            </div>
            <div class="login_btn" @click="onRegister">
                注册
            </div>
            <div class="noacount" @click="toLogin">
                已账号?前往登陆!
            </div>
        </div>
    </div>
</template>

<script>
import Headersec from '../base/HeaderSec.vue';
import * as common from '../../mixins/common.js'
export default {
    data() {
        return {
            phoneNumber: '',
            nickName: '',
            passwd: '',
            rePasswd: '',
        }
    },
    components: {
        Headersec,
    },
    mounted() {
    },
    methods: {
        toLogin() {
            this.$router.replace({
                path: './login',
            })
        },
        onRegister() {
            if (this.nickName == '') {
                this.$toastBox.showToastBox({
                    toast: '请输入正确手机号码',
                })
            } else if (!common.phoneReg.test(this.phoneNumber)) {
                this.$toastBox.showToastBox({
                    toast: '请输入用户名',
                })
            } else if (this.passwd == '') {
                this.$toastBox.showToastBox({
                    toast: '请输入密码',
                })
            } else if (this.passwd != this.rePasswd) {
                this.$toastBox.showToastBox({
                    toast: '两次输入密码不一致',
                })
            } else {
                this.$http
                    .post(`api/signup`, {
                        phoneNumber: this.phoneNumber,
                        nickName: this.nickName,
                        passwd: this.passwd,
                    })
                    .then(res => {
                        console.log(res)
                        if (res.data.data.success) {
                            this.$toastBox.showToastBox({
                                toast: '注册成功,请登陆',
                            })
                            setTimeout(() => {
                                this.$router.replace({
                                    path: './login'
                                })
                            }, 2000)
                        } else {
                            this.$toastBox.showToastBox({
                                toast: res.data.data,
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
