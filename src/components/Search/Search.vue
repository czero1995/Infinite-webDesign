<template>

    <div class="page" v-show="mainarea">
        <transition :name="slidename" >
        <div class="container" v-show="mainarea">
            <header id="headerTab" class="flex">
            <div class="search_box flex">
                <span class="iconfont back_icon" @click="onBack">&#xe749;</span>
                <input type="text" placeholder="搜索关键词" autofocus="autofocus" v-model="searchText">
                <span class="iconfont search_icon" @click="onSearch">&#xe600;</span>
            </div>
        </header>
        <div class="content" v-if="$store.state.history.length != 0">
            <div>搜索记录:</div>
            <div class="search_item flex_between" v-for="(item,index) in $store.state.history" :key="index" @click="onHistorySearch(index)">
                <span>{{item}}</span>
                <span class="delete_history" @click.stop="onDeleteHistory(item)">x</span>
            </div>
        </div>
        </div>
        </transition>
        
    </div>

</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      searchText: "",
      mainarea: false,
      slidename: "slide-up"
    };
  },
  computed: {
    ...mapGetters(["this.$store.state.history"])
  },

  mounted() {},
  activated() {
    this.mainarea = true;
  },
  deactivated() {
    this.mainarea = false;
  },
  methods: {
    onBack() {
      this.$router.back();
    },
    onSearch() {
      if (this.searchText == "") {
        this.$toastBox.showToastBox({
          toast: "请输入搜索关键词"
        });
      } else {
        this.setHistory(this.searchText);
        // this.setSearchid(this.searchText);
        this.$router.push({
          path: "./searchbox",
          query: {
            text: this.searchText
          }
        });
      }
    },
    onHistorySearch(item) {
      this.$router.push({
        path: "./searchbox",
        query: {
          text: item
        }
      });
    },
    onDeleteHistory(item) {
      let index = this.$store.state.history.indexOf(item);
      this.$store.state.history.splice(index, 1);
    },
    ...mapMutations({
      setHistory: "SET_HISTORY",
      setSearchid: "SET_SEARCHID"
    })
  }
};
</script>

<style lang="less" scoped>
@import "../../../static/less/variable.less";
.content {
  padding: 0.1rem;
  padding-top: 5rem;
  font-size: 0.26rem;
}
.search_box {
  width: 100vw;
}
input {
  height: 0.6rem;
  margin-top: 0.1rem;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  padding-left: 0.4rem;
  border: 1px solid #ccc;
}
.back_icon {
  font-size: 0.42rem;
  color: #ccc;
  width: 0.3rem;
}
.search_icon {
  font-size: 0.42rem;
  color: #ccc;
  padding-right: 0.2rem;
}
.search_item {
  font-size: 0.28rem;
  border-bottom: 1px solid #ccc;
  padding: 0.2rem;
}
.delete_history {
  color: #ccc;
}
</style>
