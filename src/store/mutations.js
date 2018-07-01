import * as types from './mutation-types'
const historyArr = [];
const matutaions = {
    /*搜索记录*/
    [types.SET_HISTORY](state, history) {
        historyArr.push(history);
        state.history = historyArr;
    },
    /*登录状态*/
    [types.SET_LOGIN](state, login) {
        state.login = login;
    },
    /*用户*/
    [types.SET_USERINFO](state, userinfo) {
        state.userinfo = userinfo;
    },
    /*详情id*/
    [types.SET_DETAILID](state, detailid) {
        state.detailid = detailid;
    },
    /*详情id*/
    [types.SET_SEARCHID](state, searchid) {
        state.searchid = searchid;
    },
    /*组件名字*/
    [types.SET_COMNAME](state, comname) {
        state.comname = comname;
    },


}
export default matutaions