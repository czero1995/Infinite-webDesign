<template>
    <div class="page recommend">
        
        <div class="container wrapper" ref="wrapper" >
            <div class="content" ref="content">
                <div class="pull_down">{{pullDownText}}</div>
                    <div class="list_box">
                        <div class="top_tab">Infinite</div>
                        <transition :name="slidename">
                            <div v-show="mainarea">
                                <div class="list_item flex" v-for="(item,index) in dataList" :key='index' @click="toDetail(item._id)" >
                                    <div class="item_title">{{item.title}}</div>
                                    <img class="item_post" v-lazy="item.post">
                                </div>
                            </div>
                        </transition>
                    </div>
               
            </div>
        </div>
         
        <div class="scroll-top" v-show="scrollTopView" @click="toTop">
            <span class="iconfont icon-totop">&#xe71f;</span>
        </div>
        <footers :urlRouter="$route.path" ref="footer"></footers>
    </div>

</template>

<script>
import Footers from "./base/Footer.vue";
import { mapGetters, mapMutations } from "vuex";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      pagenum: 0,
      pagesize: 8,
      dataList: [],
      scrollTopView: false,
      pullDownText: "下拉刷新",
      slidename: "slide-back",
      mainarea: false,
      loadingTitle: "正在加载下一页"
    };
  },
  components: {
    Footers
  },
  computed: {
    ...mapGetters(["this.$store.state.carts", "this.$store.state.comname"])
  },
  watch: {},
  activated() {
    this.mainarea = true;
  },
  deactivated() {
    this.mainarea = false;
  },
  mounted() {
    this.getData();
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        pullUpLoad: {
          // 配置上啦加载
          threshold: 0
        },
        pullDownRefresh: {
          threshold: 80,
          stop: 20
        },
        mouseWheel: {
          speed: 20,
          invert: false,
          easeTime: 30
        }
      });
      this.scroll.on("pullingUp", () => {
        this.$toastBox.showToastBox({
          toast: this.loadingTitle
        });
        this.getData();
        this.scroll.finishPullUp();
      });
      this.scroll.on("pullingDown", res => {
        this.pagenum = 0;
        this.dataList = [];
        this.getData();
        this.scroll.finishPullDown();
      });
      this.scroll.on("scroll", pos => {
        this.scrollY = pos.y;
        if (pos.y > 80) {
          this.pullDownText = "释放刷新";
        } else {
          this.pullDownText = "下拉刷新";
        }
        if (pos.y < -120) {
          this.scrollTopView = true;
        } else {
          this.scrollTopView = false;
        }
      });
    });
  },
  methods: {
    toDetail(id) {
      this.$router.push({
        path: `/detail`,
        query: {
          id: id,
          from: "index"
        }
      });
    },
    getData() {
      this.pagenum = this.pagenum + 1;
      this.$http
        // .post(`api/recommend/all`, {
        .post(`http://localhost:3000/api/recommend/all`, {
          pagenum: this.pagenum,
          pagesize: this.pagesize
        })
        .then(res => {
          if (res.data.data.length == 0) {
            this.loadingTitle = "没有更多的数据了";
          }
          this.dataList = [...this.dataList, ...res.data.data];
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    toTop() {
      this.scroll.scrollTo(0, 0, 1000, "swipeBounce");
    },
    ...mapMutations({})
  }
};
</script>

<style lang="less" scoped>
@import "../../static/less/variable.less";
.pull_down {
  position: absolute;
  top: -0.66rem;
  left: 0;
  right: 0;
  margin: auto;
  font-size: 0.42rem;
  color: @theme_color;
  text-align: center;
  z-index: 2;
}
.pull_up {
  position: absolute;
  bottom: 0.3rem;
  left: 0;
  right: 0;
  margin: auto;
  font-size: 0.42rem;
  color: @theme_color;
  text-align: center;
  z-index: 2;
}
.top_tab {
  height: 0.8rem;
  line-height: 0.8rem;
  background: @theme_color;
  text-align: center;
  color: white;
  z-index: 1;
  left: 0;
  right: 0;
  font-size: 0.36rem;
}
.recommend {
  background: #efefef;
}
.list_box {
  padding-top: 0;
  height: 100%;
}
.swiper-wrapper {
  position: relative;
}
.swiper-bg {
  background: #000;
  width: 100%;
  opacity: 0.2;
  position: absolute;
  bottom: 6px;
  height: 100%;
}
.swiper-slide {
  position: relative;
  height: 3rem;
  img {
    width: 100%;
    height: 100%;
  }
  div {
    line-height: 0.6rem;
    left: 0;
    right: 0;
    color: white;
    font-size: 0.26rem;
    background: #ccc;
    position: absolute;
    bottom: 0rem;
    margin: auto;
    padding-left: 0.3rem;
    // z-index: 9;
  }
}
.wrapper {
  height: 100vh;
  overflow: hidden;
}

.scroll-top {
  width: 0.6rem;
  height: 0.6rem;
  background: #fff;
  border: 1px solid #ccc;
  position: fixed;
  bottom: 1.2rem;
  right: 0.3rem;
  text-align: center;
  line-height: 0.6rem;
  border-radius: 0.2rem;
}
.icon-totop {
  font-size: 0.4rem;
  text-align: center;
}
.icon_close {
  font-size: 0.6rem;
  bottom: 0.8rem;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  color: white;
}

.model {
  position: absolute;
  top: 0%;
  left: 0%;
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 9;
}

.model-content {
  position: absolute;
  top: 0;
  margin: auto;
  background: white;
  text-align: center;
  width: 100%;
  height: auto;
  box-sizing: border-box;
}
.chooice_content_type {
  padding: 0.2rem;
}
.chooice_content_type--title {
  text-align: left;
  font-size: 0.3rem;
}
.chooice_content_type--item {
  font-size: 0.24rem;
  div {
    margin-right: 0.3rem;
    border: 1px solid #ccc;
    border-radius: 0.15rem;
    padding: 0 0.2rem;
  }
}

.choice_content--eventbox {
  justify-content: space-between;
  border-top: 1px solid #ccc;
  font-size: 0.28rem;
  div {
    flex: 1;
    line-height: 0.8rem;
    &:nth-of-type(1) {
      border-right: 1px solid #ccc;
    }
  }
}
</style>
