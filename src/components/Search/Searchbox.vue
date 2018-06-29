<template>

    <div class="page">
        <headersec tabname="搜索详情"></headersec>
        <div class="container" v-if="dataList.length != 0">
            <div class="list_box">
                <div class="list_item flex" v-for="(item,index) in dataList" :key='index' @click="toDetail(item._id)">
                    <div class="item_title">{{item.title}}</div>
                    <img class="item_post" v-lazy="item.post">
                </div>
            </div>
        </div>
        <div class="nocontainer" v-else>
            <span>找不到对应的内容</span>
        </div>
    </div>

</template>

<script>
import Headersec from '../base/HeaderSec.vue';
export default {
    data() {
        return {
            dataList: [
            ],
        };
    },
    components: {
        Headersec
    },

    mounted() {
        this.getData()
    },

    methods: {
        getData() {
            console.log('this.$route.params.text',this.$route.query.text)
            this.$http
                .post(`api/recommend/search`,{
                    text: this.$route.query.text
                })
                .then(res => {
                    this.dataList = res.data.data;
                    console.log(res);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        toDetail(id) {
            this.$router.push({
                path: `/detail`,
                query: {
                    id: id
                }
            });
        },
    }
};
</script>

<style lang="less" scoped>
@import '../../../static/less/variable.less';
.list_item{
    border-bottom: 1px solid #ccc;
}
</style>
