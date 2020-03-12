import Vue from 'vue'
import Vuex from 'vuex'
//使用这个插件
Vue.use(Vuex)
    // 自动保存 Vuex持久化存储
import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})
export default new Vuex.Store({
    // 相当于data
    state: {
        allOrderNum: 0, // 个人中心 全部订单 状态 0 全部 1 待付款 2 待发货 3 待收货 4 挂卖中心
        orderInfoState: 0, // 商品分类 订单详情 状态 0 显示异常 1 待付款 2 待发货 3 待收货 4 挂卖中心
        searchText: '', // 搜索内容
        //地址区域

    },
    // 相当于计算属性
    getters: {},
    // 同步方法
    mutations: {
        modifyAllOrderNum(state, val) { // 修改全部订单状态
            state.allOrderNum = val
        },
        modifyOrderInfoState(state, val) { // 修改全部订单状态
            // console.log(val)
            state.orderInfoState = val
        },
        modifySearchText(state, val) { // 修改搜索框内容
            state.searchText = val
        }
    },
    // 异步方法
    actions: {},
    // 子模块
    modules: {},
    plugins: [vuexLocal.plugin]
})