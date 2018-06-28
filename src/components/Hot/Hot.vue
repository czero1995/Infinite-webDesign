<template>

    <div class="page">
        <header id="headerTab" class="flex header_scroll">
            <router-link to="./search" tag="div" class="search-box">
                <span class="iconfont search-icon">&#xe600;</span>
                <input type="text" placeholder="搜索关键词">
            </router-link>
        </header>
        <div class="container wrapper" ref="wrapper">
            <div class="content" ref="content">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(bannerItem,index) in bannerList" :key="index">
                            <img :src="bannerItem.post" />
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
                <div class="hot_content">
                    <div class="hot_top flex-align-center">
                        <span class="iconfont hot_icon">&#xe633;</span>
                        <p>热门文章</p>
                    </div>
                    <div class="list_box">
                        <div class="list_item flex" v-for="(item,index) in dataList" :key='index' @click="toDetail()">
                            <div class="item_title">{{item.title}}</div>
                            <img class="item_post" :src="item.post">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <footers :urlRouter="$route.path" ref="footer"></footers>
    </div>

</template>

<script>

import Footers from "../base/Footer.vue";
import "../../../static/css/swiper.min.css";
import { mapGetters, mapMutations } from "vuex";
import BScroll from "better-scroll";
import Swiper from "../../../static/js/swiper.min";
export default {
    data() {
        return {
            slidename: "slide-back",
            dataList: [],
            bannerList: [],
        };
    },
    components: {
        Footers
    },
    computed: {
        ...mapGetters(["this.$store.state.carts", "this.$store.state.comname"])
    },
    mounted() {
        this.getData()
        this.getBanner()
        setTimeout(() => {
            const swiper = new Swiper(".swiper-container", {
                pagination: ".swiper-pagination",
                paginationClickable: true,
                spaceBetween: 0,
                autoplay: 2000,
            });
        }, 200)
        this.$nextTick(() => {
            this.scroll = new BScroll(this.$refs.wrapper, {
                click: true,
                mouseWheel: {
                    speed: 200,
                    invert: false,
                    easeTime: 30
                }
            });
        });
    },
    methods: {
        toDetail() {
            this.$router.push({
                path: '/detail'
            })
        },
        toTop() {
            this.scroll.scrollTo(0, 0, 1000, "swipeBounce");
        },
        getData() {
            this.$http
                .get(`api/hot/all`)
                .then(res => {
                    this.dataList = res.data.data
                    console.log(this.dataList);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        getBanner() {
            this.$http
                .get(`api/hot/banner`)
                .then(res => {
                    this.bannerList = res.data.data
                    console.log(this.bannerList);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        ...mapMutations({})
    }
};
</script>

<style lang="less" scoped>
@import '../../../static/less/variable.less';
.page {
  background: #efefef;
}
.header_scroll {
  background: @theme_background;
}
.wrapper {
  height: 100vh;
  overflow: hidden;
}

.swiper-container {
  padding-top: 0.8rem;
  margin-bottom: 0.2rem;
}

.swiper-wrapper {
  position: relative;
}
.swiper-slide {
  position: relative;
  height: 2.4rem;
  img {
    width: 100%;
    height: 100%;
  }
}
.hot_content .hot_top {
  font-size: 0.26rem;
  padding: 0.1rem 0.2rem;
  border-bottom: 1px solid #efefef;
  background: white;
}
.hot_icon {
  font-size: 0.32rem;
  color: red;
  margin-right: 0.14rem;
}
.list_box {
  padding-top: 0;
}
.list_item {
  margin: 0;
  box-shadow: none;
  border-bottom: 1px solid #efefef;
  border-radius: 0;
}
</style>
