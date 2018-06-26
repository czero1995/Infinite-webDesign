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
            default: 'toast',
        }
    },
    data() {
        return {
            isShowToastBox: false,
            resolve: '',
            reject: '',
            promise: '' // 保存promise对象
        };
    },
    methods: {
        showToastBox() {
            this.isShowToastBox = true
            setTimeout(() => {
                this.isShowToastBox = false
            }, 1200)
        }
    }
};
</script>

<style scoped>
.toast-box {
  position: absolute;
  bottom: 60px;
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
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 15px;
  height: 30px;
  color: #fff;
  line-height: 30px;
}
</style>