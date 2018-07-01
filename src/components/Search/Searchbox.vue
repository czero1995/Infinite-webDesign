<template>

    <div class="page">
        <headersec tabname="搜索详情"></headersec>
        <transition :name="slidename" v-show="mainarea">
            <div class="container" >
                <div class="list_box" v-if="dataList.length != 0">
                    <div class="list_item flex" v-for="(item,index) in dataList" :key='index' @click="toDetail(item._id)">
                        <div class="item_title">{{item.title}}</div>
                        <img class="item_post" v-lazy="item.post">
                    </div>
                </div>
                <Nopage v-else></Nopage>
            </div>
            
        </transition>
    </div>

</template>

<script>
import Headersec from "../base/HeaderSec.vue";
import Nopage from "../base/NoPage";
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      dataList: [],
      mainarea: false,
      slidename: "slide-up"
    };
  },
  components: {
    Headersec,
    Nopage
  },
  computed: {
    ...mapGetters(["this.$store.state.searchid"])
  },
  mounted() {},
  activated() {
    this.getData();
    this.setSearchid(this.$route.query.text);
    this.mainarea = true;
  },
  deactivated() {
    this.mainarea = false;
  },
  methods: {
    getData() {
      console.log("this.$route.params.text", this.$route.query.text);
      this.$http
        .post(`${this.$baseURL}recommend/search`, {
          text: this.$route.query.text
        })
        .then(res => {
          this.dataList = res.data.data;
        })
        .catch(function(error) {
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
    ...mapMutations({
      setSearchid: "SET_SEARCHID"
    })
  }
};
</script>

<style lang="less" scoped>
@import "../../../static/less/variable.less";
.list_item {
  border-bottom: 1px solid #ccc;
}
</style>
