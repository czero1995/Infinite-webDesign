<template>
    <div class="toast-box" v-show="isShowToastBox">
        <p>{{toast}}</p>
    </div>
</template>

<script>
export default {
  props: {
    toast: {
      type: String,
      default: "toast"
    }
  },
  data() {
    return {
      isShowToastBox: false,
      resolve: "",
      reject: "",
      promise: "" // 保存promise对象
    };
  },
  methods: {
    showToastBox() {
      this.isShowToastBox = true;
      setTimeout(() => {
        this.isShowToastBox = false;
      }, 2000);
    }
  }
};
</script>

<style scoped>
.toast-box {
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  width: 100%;
  justify-content: center;
}
.toast-box p {
  display: inline-block;
  background: #666;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  border-radius: 0.2rem;
  line-height: 0.6rem;
  color: #fff;
}
</style>