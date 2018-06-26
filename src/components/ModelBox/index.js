import modelBoxVue from './index.vue';

// 定义插件对象
const ModelBox = {};
// vue的install方法，用于定义vue插件
ModelBox.install = function (Vue, options) {
    const ModelBoxInstance = Vue.extend(modelBoxVue);
    let currentMsg;
    const initInstance = () => {
        // 实例化vue实例
        currentMsg = new ModelBoxInstance();
        let modelBoxEl = currentMsg.$mount().$el;
        document.body.appendChild(modelBoxEl);
    };
    // 在vue的原型上添加实例方法，以全局调用
    Vue.prototype.$modelBox = {
        onModelBox(options) {
            if (!currentMsg) {
                initInstance();
            }
            if (typeof options === 'string') {
                currentMsg.content = options;
            } else if (typeof options === 'object') {
                Object.assign(currentMsg, options);
            }
            return currentMsg.onModelBox()
                .then(val => {
                    currentMsg = null;
                    return Promise.resolve(val);
                })
                .catch(err => {
                    currentMsg = null;
                    return Promise.reject(err)
                });
        }
    };
};
export default ModelBox;
