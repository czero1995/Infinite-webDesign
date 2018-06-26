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
                <input type="text" placeholder="输入密码" v-model="rePasswd">
            </div>
            <div class="login_btn">
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
export default {
    data() {
        return {
            phoneNumber: 0,
            nickName: '',
            passwd: '',
            rePasswd: '',
        }
    },
    components: {
        Headersec,
    },
    mounted() {
        // this.$toastBox.showToastBox({
        //         toast: 'wo shi toast ',
        //     })
        //     this.$modelBox.onModelBox({
        //         title: '提示',
        //         content: '提示内容',
        //     }).then(async (val) => {
        //         // ...  
        //         // alert('你点击了确定')
        //     }).catch(() => {
        //         // ...
        //         // alert('你点击了取消')
        //     });
    },
    methods: {
        toLogin() {
            this.$router.replace({
                path: './login',
            })
        },
        onRegister() {
            if (this.nickName == '') {

            } else {

                this.$http
                    .post(`http://127.0.0.1:3000/api/signup`, {
                        phoneNumber: this.phoneNumber,
                        nickname: this.nickName,
                    })
                    .then(res => {
                        console.log(res)
                        if (res.data.data.success) {
                            this.$toastBox.showToastBox({
                                toast: '注册成功',
                            })
                            setTimeout(() => {
                                this.$router.replace({
                                    path: './index'
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
