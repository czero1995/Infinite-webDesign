<template>

	<div class="page member">
    <div class="member_bgfilter"></div>			
		<div class="member_userinfo" v-if="isLogin">
      <div class="member_userinfo--avatar">
        <img src="../../assets/logo.png">
      </div>
      <div class="member_userinfo--username">
        gayhub
      </div>
    </div>
		<div class="member_userinfo" v-if="!isLogin">
      <router-link to="./login" class="member_userinfo--username" tag="div">
        请登录!
      </router-link>
    </div>
		<div class="member_item">
      <div class="member_item--collect flex_between">
        <span>我的收藏</span>
         <span class="iconfont member_icon" >&#xe652;</span>
      </div>
      <div class="member_item--protocol flex_between">
        <span>用户协议</span>
        <span class="iconfont member_icon" >&#xe652;</span>
      </div>
      <div class="member_item--about flex_between">
        <span>关于我们</span>
         <span class="iconfont member_icon" >&#xe652;</span>
      </div>
      <div class="member_item--about flex_between">
        <span>退出登录</span>
      </div>
    </div>
		<footers :urlRouter="$route.path" ref="footer"></footers>
	</div>

</template>

<script>

import Footers from "../base/Footer.vue";
import { mapGetters,mapMutations } from 'vuex';
export default {
  data() {
    return {
      isLogin:false,
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
    console.log('登录状态',this.$store.state.isLogin)
  },
  methods: {
    
  }
};
</script>

<style lang="less" scoped>
@import '../../../static/less/variable.less';
.member{
      background: #EFEFEF;
}
.member_bgfilter{
  height: 4.6rem;
  background: url('../../assets/logo.png');
  background-size: 100% 100%;
  filter: blur(5px);
}
.member_userinfo{
  position: absolute;
  top: 1.2rem;
  left: 0;
  right: 0;
  margin: auto;
}
.member_userinfo--avatar{
    text-align: center;
    img{
        width: 1.4rem;
     height: 1.4rem;
      border-radius: 50%;
      border:2px solid white;
    }
}
.member_userinfo--username{
  color:white;
  text-align: center;
  font-size: .32rem;
  margin-top: .2rem;
}
.member_item{
  margin-top: .3rem;
  div{
    padding: 0 .2rem;
    background-color: white;
    line-height: .88rem;
    font-size: .26rem;
    margin-bottom: .4rem;
    color:#000;
    font-weight: bold;
    letter-spacing: 0.76px;
  }
  .member_item--protocol{
    margin-bottom: 0;
    border-bottom: 1px solid #CCC;
  }
}
.member_icon{
  color:#ccc;
  font-size: 28px;
}
.photo_icon{
  font-size: .8rem;
  padding: .2rem;
  border: 1px solid #fff;
  border-radius: 50%;
}
</style>
