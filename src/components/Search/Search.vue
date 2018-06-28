<template>

    <div class="page">
        <header id="headerTab" class="flex">
            <div class="search_box flex">
                <span class="iconfont back_icon" @click="onBack">&#xe749;</span>
                <input type="text" placeholder="搜索关键词" v-model="searchText">
                <span class="iconfont back_icon" @click="onSearch">&#xe749;</span>
            </div>
        </header>
        <div class="content">
            <div>搜索记录:</div>
            <div class="search_item" v-for="item in 10">aaaa</div>
        </div>
    </div>

</template>

<script>

export default {
    data() {
        return {
            searchText:''
        }

    },


    mounted() {
    },
    methods: {
        onBack() {
            this.$router.back();
        },
        onSearch() {
            this.$router.push({
                path: './searchbox',
                query:{
                    text:this.searchText
                }
            })
        }
    }

}
</script>

<style lang="less" scoped>
@import '../../../static/less/variable.less';
.content {
  padding-top: 1rem;
}
.search_box {
  width: 100vw;
  input {
    padding-left: 0.3rem;
    font-size: 0.28rem;
    flex: 1;
  }
  input:focus {
    outline: none;
  }
}
.back_icon {
  font-size: 0.42rem;
  color: #ccc;
  width: 0.3rem;
}
</style>
