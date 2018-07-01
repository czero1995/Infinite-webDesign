<template>

    <div class="page">
        
        <headersec tabname="内容详情"></headersec>
        <transition :name="slidename">
        <div class="container " ref="wrapper" v-show="mainarea">
            <div class="content" ref="content">
                <div v-html="dataList">
                </div>
            </div>
        </div>
        </transition>
    </div>

</template>

<script>
import Headersec from "../base/HeaderSec.vue";
import BScroll from "better-scroll";
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      switchHeader: false,
      switchFooter: false,
      dataList: {},
      mainarea: false,
      slidename: "slide-go"
    };
  },
  components: {
    Headersec
  },
  computed: {
    ...mapGetters(["this.$store.state.login"])
  },
  mounted() {
    // this.$nextTick(() => {
    //   this.scroll = new BScroll(this.$refs.wrapper, {
    //     click: true,
    //     mouseWheel: {
    //       speed: 20,
    //       invert: false,
    //       easeTime: 300
    //     }
    //   });
    // });
  },
  activated() {
    this.mainarea = true;
    this.getData();
    this.setDetailid(this.$route.query.id);
  },
  deactivated() {
    this.mainarea = false;
  },
  methods: {
    onCollect() {
      this.dataList.collect = true;
    },

    getData() {
      var detailUrl = "";
      this.$route.query.from == "index"
        ? (detailUrl = "recommend")
        : (detailUrl = "hot");
      this.$http
        .get(`${this.$baseURL}${detailUrl}/detail?id=${this.$route.query.id}`)
        .then(res => {
          console.log(res.data.data.content);
          var str = res.data.data.content.replace("&lt;!DOCTYPE html&gt;", "");
          str = str.replace("&lt;html&gt;", "");
          str = str.replace("&lt;head&gt;", "");
          str = str.replace("&lt;/head&gt;", "");
          str = str.replace("&lt;body&gt;", "");
          str = str.replace("&lt;/body&gt;", "");
          str = str.replace("&lt;/html&gt;", "");
          this.dataList = str;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    ...mapMutations({
      setDetailid: "SET_DETAILID"
    })
  }
};
</script>

<style lang="less" scoped>
@import "../../../static/less/variable.less";
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
  margin-top: 0.4rem;
}
.bottom {
  line-height: 0.8rem;
  justify-content: space-around;
  background: @theme_background;
  font-size: 0.32rem;
  color: white;
}
</style>
