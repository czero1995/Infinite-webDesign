<template>

    <div class="page member">
        <div class="member_bgfilter"></div>
        <div class="member_userinfo" v-if="isLogin">
            <div class="member_userinfo--avatar">
                <img src="../../assets/logo.png">
            </div>
            <div class="member_userinfo--username">
                Infinite
            </div>
        </div>
        <div class="member_userinfo" v-if="!isLogin">
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

            <div class="member_item--about flex_between" @click="signOut">
                <span>退出登录</span>
            </div>

        </div>
        <footers :urlRouter="$route.path" ref="footer"></footers>
    </div>

</template>

<script>

import Footers from "../base/Footer.vue";
import { mapGetters, mapMutations } from 'vuex';
export default {
    data() {
        return {
            isLogin: false,
        };
    },
    components: {
        Footers
    },
    computed: {
        ...mapGetters([
            'this.$store.state.isLogin',
        ])
    },
    mounted() {
        console.log('登录状态', this.$store.state.isLogin)
    },
    methods: {
        signOut() {
            this.$modelBox.onModelBox({
                title: '提示',
                content: '确定退出登陆？',
                cancelBtn: true
            }).then(async (val) => {
                this.$toastBox.showToastBox({
                    toast: '退出登陆',
                })
            }).catch(() => {
                this.$toastBox.showToastBox({
                    toast: '取消',
                })
            });
        }
    }
};
</script>

<style lang="less" scoped>
@import '../../../static/less/variable.less';
.member {
  background: #efefef;
}
.member_bgfilter {
  height: 4.6rem;
  background: url('../../assets/logo.png');
  background-size: 100% 100%;
  filter: blur(5px);
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
  img {
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 50%;
    border: 2px solid white;
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
