<template>

    <div class="page">
        <headersec tabname="找回密码"></headersec>
        <div class="container">

            <div class="login_item flex">
                <span>手机号:</span>
                <input type="text" placeholder="输入用户名" v-model="phoneNumber">
            </div>
            <div class="login_item flex">
                <span>密码:</span>
                <input type="text" placeholder="输入密码" v-model="passwd">
            </div>
            <div class="login_item flex">
                <span>确认密码:</span>
                <input type="text" placeholder="输入确认密码" v-model="rePasswd">
            </div>
            <div class="login_btn" @click="onUpdate">
                确认
            </div>
            <div class="noacount" @click="onBack">
                没有账号?前往注册!
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
            passwd: '',
            rePasswd: ''
        }
    },
    components: {
        Headersec,
    },
    mounted() {

    },
    methods: {
        onUpdate() {
            if (!common.phoneReg.test(this.phoneNumber)) {
                this.$toastBox.showToastBox({
                    toast: '请输入正确手机号码',
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
                    .post(`api/update`, {
                        phoneNumber: this.phoneNumber,
                        passwd: this.passwd,
                    })
                    .then(res => {
                        console.log(res)
                        if (res.data.data.success) {
                            this.$toastBox.showToastBox({
                                toast: '修改成功',
                            })
                            setTimeout(() => {
                                this.onBack()
                            }, 2000)
                        } else {
                            this.$toastBox.showToastBox({
                                toast: '用户不存在!',
                            })
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        },
        onBack() {
            this.$router.go(-1)
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
</style>
