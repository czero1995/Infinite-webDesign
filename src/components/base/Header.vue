<template>
	<header id="headerTab" class="flex">
		<div class="search-box">
			<span class="iconfont search-icon">&#xe600;</span>
			<input type="text" placeholder="搜索关键词">
		</div>
		<div class="chooice-type flex" @click="onChooice">
			<span class="iconfont chooice-icon">&#xe695;</span>
		</div>
	</header>
</template>

<script>
	export default {
		props: ['tabname'],
		data() {
			return {

			}
		},
    methods:{
      onChooice(){
        this.$emit('onChooice')
      }
    },
		props:{
			isfixed:'',
			iconcode:'',
		}
	}
</script>

<style lang="less" scoped>
	@import '../../../static/less/variable.less';

</style>