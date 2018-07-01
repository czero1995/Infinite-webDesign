<template>
    <div class="page">
        <headersec tabname="我的收藏"></headersec>
        <transition :name="slidename">
        <Nopage v-show="mainarea"></Nopage>
        </transition>
    </div>
</template>

<script>
import Headersec from "../base/HeaderSec.vue";
import Nopage from "../base/NoPage";
export default {
  data() {
    return {
      slidename: "slide-back",
      mainarea: false
    };
  },
  components: {
    Headersec,
    Nopage
  },
  mounted() {},
  activated() {
    this.mainarea = true;
  },
  deactivated() {
    this.mainarea = false;
  },
  methods: {}
};
</script>