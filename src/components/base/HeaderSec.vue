<template>
	<header id="headerTab" class="flex flex-align-center">
		<span class="iconfont back_icon" @click="onBack">&#xe749;</span>
		<p>{{tabname}}</p>
	</header>
</template>

<script>
export default {
  props: ["tabname"],
  data() {
    return {
      isBack: true
    };
  },
  methods: {
    onBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../../static/less/variable.less";
header {
  height: 0.8rem;
  text-align: center;
  background: @theme_background;
  color: @base_color;
  font-size: 0.26rem;
  line-height: 0.8rem;
  width: 100%;
  z-index: 10;
  position: fixed;
  top: 0;
}

.back_icon {
  font-size: 32px;
}

p {
  text-align: center;
  width: 100%;
}
</style>
