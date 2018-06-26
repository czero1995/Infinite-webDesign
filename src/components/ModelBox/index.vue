<template name="tipDialog">
    <!--提示信息弹框-->
    <div class='model' v-show="showModelBox">
        <div class='model_box'>
            <div class='global_model_title'>{{title}}</div>
            <div class='global_model_content'>{{content}}</div>
            <div class="global_model_btn flex">
                <div class='global_model_btn--cancel' v-show="cancelBtn" @click="cancel">取消</div>
                <div class='global_model_btn--confirm' v-show="confirmBtn" @click="confirm">确定</div>
            </div>
        </div>
    </div>
    <!--提示信息弹框-->
</template>

<script>
export default {
    props: {
        title: {
            title: String,
            default: '提示'
        },
        content: {
            type: String,
            default: '这是弹框内容'
        },
        confirmBtn: {
            type: Boolean,
            default: true,
        },
        cancelBtn: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            showModelBox: false,
            resolve: '',
            reject: '',
            promise: '' // 保存promise对象
        }
    },
    methods: {
        // 确定，将promise断定为resolve状态
        confirm() {
            this.showModelBox = false
            this.resolve('confirm');
            this.remove()
        },
        // 取消， 将promise断定为reject状态
        cancel() {
            this.showModelBox = false
            this.reject('cancel');
            this.remove()
        },
        // 弹出modelBox，并创建promise对象
        onModelBox() {
            this.showModelBox = true;
            this.promise = new Promise((resolve, reject) => {
                this.resolve = resolve;
                this.reject = reject;
            });
            // 返回promise对象
            return this.promise;
        },

        remove() {
            setTimeout(() => {
                this.destroy();
            }, 300)
        },

        destroy() {
            this.$destroy();
            document.body.removeChild(this.$el)
        }
    }


};
</script>
<style scoped>
.flex {
  display: flex;
  justify-content: center;
}
.model {
  position: absolute;
  top: 0%;
  left: 0%;
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
}
.model_box {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
  background: white;
  text-align: center;
  width: 300px;
  height: 152px;
}

.global_model_title {
  font-size: 20px;
  padding-top: 10px;
  padding-bottom: 20px;
}

.global_model_content {
  font-size: 16px;
}

.global_model_btn {
  justify-content: space-between;
  text-align: center;
}

.global_model_btn div {
  height: 50px;
  line-height: 50px;
  flex: 1;
  margin-top: 30px;
  font-size: 15px;
  border-top: 1px solid #ccc;
}

.global_model_btn--confirm {
  color: green;
  border-left: 1px solid #ccc;
}
</style>