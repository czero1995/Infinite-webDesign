import toastboxVue from './index.vue'

const ToastBox = {}
ToastBox.install = function (Vue, options) {
    const ToastBoxInstance = Vue.extend(toastboxVue);
    let currentToast;
    const initInstance = () => {
        currentToast = new ToastBoxInstance();
        let toastBoxEl = currentToast.$mount().$el;
        document.body.appendChild(toastBoxEl);
    };

    Vue.prototype.$toastBox = {
        showToastBox(options) {
            if (!currentToast) {
                initInstance();
            }
            if (typeof options === 'string') {
                currentToast.toast = options
            } else if (typeof options === 'object') {
                Object.assign(currentToast, options);
            }
            return currentToast.showToastBox()
        }
    }
}

export default ToastBox;