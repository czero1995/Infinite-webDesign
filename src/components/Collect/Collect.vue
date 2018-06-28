<template>

    <div class="page">
        <headersec tabname="我的收藏"></headersec>
        <div class="container" v-if="dataList.length != 0">
            <div class="list_box">
                <div class="list_item flex" v-for="(item,index) in dataList" :key='index' @click="toDetail(item._id)">
                    <div class="item_title">{{item.title}}</div>
                    <img class="item_post" :src="item.post">
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

    },

    methods: {

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
</style>
