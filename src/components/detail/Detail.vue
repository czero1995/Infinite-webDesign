<template>

    <div class="page">
        <headersec tabname="内容详情"></headersec>
        <div class="container wrapper" ref="wrapper">
            <div class="content" ref="content">
                <div v-html="dataList">
                </div>
            </div>
        </div>
        <span class="iconfont collect_icon" :class="{'iscollect':dataList.collect}" @click="onCollect">&#xe605;</span>
    </div>

</template>

<script>
import Headersec from '../base/HeaderSec.vue';
import BScroll from "better-scroll";
export default {
    data() {
        return {
            switchHeader: false,
            switchFooter: false,
            dataList: {}
        }
    },
    components: {
        Headersec,
    },
    mounted() {
        this.$nextTick(() => {
            this.scroll = new BScroll(this.$refs.wrapper, {
                click: true,
                mouseWheel: {
                    speed: 20,
                    invert: false,
                    easeTime: 300
                }
            });
        });
        this.getData()
    },
    methods: {
        onCollect(){
            console.log('aaa')
            this.dataList.collect = true
        },

        getData() {
            this.$http
                .get(`api/recommend/detail?id=${this.$route.query.id}`)
                .then(res => {
                    this.dataList = res.data.data;
                    console.log(111, typeof this.dataList);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
}
</script>

<style lang="less" scoped>
@import '../../../static/less/variable.less';
.wrapper {
  height: 100vh;
  padding-top: 0.3rem;
  overflow: hidden;
}
.header_origin {
  background: black;
  opacity: 0.5;
  // width: .6rem;
  height: 0.6rem;
}
.header_scroll {
  background: @theme_background;
  text-align: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0px;
  line-height: 0.8rem;
  font-size: 0.28rem;
  z-index: 1;
  color: white;
}
.content {
  padding: 0.6rem 0.4rem;
}
.bottom {
  line-height: 0.8rem;
  justify-content: space-around;
  background: @theme_background;
  font-size: 0.32rem;
  color: white;
}
.iconfont {
  font-size: 0.54rem;
}
.collect_icon {
  position: absolute;
  right: 0.3rem;
  bottom: 1rem;
}
.iscollect{
    color:@theme_background;
}
</style>
