import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'

import 'babel-polyfill'
// 引入微信js文件
import wx from 'weixin-js-sdk'

// 弹幕组件
import { vueBaberrage } from 'vue-baberrage';
import { Tabbar, TabbarItem } from 'vant';
import { Button } from 'vant';
import { NavBar } from 'vant';
import { NoticeBar } from 'vant';
import { Tab, Tabs } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Picker } from 'vant';
import { Popup } from 'vant';
import { Uploader } from 'vant';
import { Field } from 'vant';
import { Panel } from 'vant';
import { PullRefresh } from 'vant';
import { Image } from 'vant';
import { ImagePreview } from 'vant';
import { DatetimePicker } from 'vant';
import { Overlay } from 'vant';
import { Loading } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
import { SwipeCell } from 'vant';
import { Collapse, CollapseItem } from 'vant';
import { Tag } from 'vant';
import { Calendar } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Search } from 'vant';
import { Icon } from 'vant';
import { Divider } from 'vant';
import { Grid, GridItem } from 'vant';
import { Switch } from 'vant';
import { Area } from 'vant';
import { SwitchCell } from 'vant';
import { Dialog } from 'vant';
import { Row } from 'vant';
import { Col } from 'vant';
import { List } from 'vant';
import { AddressEdit } from 'vant';
import { ContactEdit } from 'vant';
import { AddressList } from 'vant';
import { ContactCard } from 'vant';
import { Rate } from 'vant';
Vue.use(ContactEdit);
Vue.use(ContactCard);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Button);
Vue.use(NavBar);
Vue.use(NoticeBar);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Picker);
Vue.use(Popup);
Vue.use(Uploader);
Vue.use(Field);
Vue.use(Panel);
Vue.use(PullRefresh);
Vue.use(Image);
Vue.use(ImagePreview);
Vue.use(DatetimePicker);
Vue.use(Overlay);
Vue.use(Loading);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(SwipeCell);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Tag);
Vue.use(Calendar);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Search);
Vue.use(Icon);
Vue.use(Divider);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Switch);
Vue.use(Area);
Vue.use(SwitchCell);
Vue.use(vueBaberrage);
Vue.use(Dialog);
Vue.use(Row);
Vue.use(Col);
Vue.use(List);
Vue.use(AddressEdit);
Vue.use(AddressList);
Vue.use(Rate);
//axios
import axios from 'axios'
Vue.prototype.$axios = axios

//api
import api from './api/api.js'
Vue.prototype.$api = api
Vue.config.productionTip = false

// 设置token
// 添加请求拦截器
// axios.interceptors.request.use(config => {
//     console.log(config)
//     config.headers.Authorization = window.sessionStorage.getItem('token')
//         //在最后必须要返回return config
//     return config
// })

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')