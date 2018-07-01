<template>
	<footer class="flex flex-align-center">
			<router-link  :class="['footer-item',{active:urlRouter == '/index' || urlRouter == '/'}]" to='./index'>
				<span class="iconfont recommend_icon" >&#xe643;</span>
			</router-link>
			<router-link :class="['footer-item',{active:urlRouter == '/hot'}]" to='./hot'>
				<span class="iconfont hot_icon" >&#xe600;</span>
			</router-link>
			<router-link :class="['footer-item',{active:urlRouter == '/member'}]" to='./member'  >
				<span class="iconfont member_icon" >&#xe646;</span>
			</router-link>
	</footer>
</template>

<script>
export default {
  props: ["urlRouter"]
};
</script>
<style lang="less" scoped>
@import "../../../static/less/variable.less";
footer {
  bottom: 0;
  position: fixed;
  width: 100%;
  height: 0.88rem;
  background: @base_color;
  box-shadow: 0 -2px 9px rgba(0, 0, 0, 0.1);
}
.footer-item {
  flex: 1;
  line-height: 0.88rem;
  text-align: center;
  position: relative;
  margin-top: 0.2rem;
  box-sizing: border-box;
}
.iconfont {
  font-size: 0.6rem;
  color: black;
}
.active .recommend_icon,
.active .hot_icon,
.active .member_icon {
  color: @theme_color;
}
</style>
