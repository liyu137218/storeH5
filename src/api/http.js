// 引入 axios
import axios from 'axios';
// 引入 qs
import qs from 'qs';
// 引入 utils工具
import { delCookie, getCookie, setCookie } from '@/utils/utils.js'
import urls from '@/api/url.js'
import router from "../router"
import { Toast } from "vant"

// 第一步设置请求和响应的拦截
// console.log(urls)
// 添加一个请求拦截器  在发送请求前拦截一下
axios.interceptors.request.use(

    res => { // 对成功请求做些什么
        // console.log("请求发送成功")
        // console.log(res.url)
        if (res.url == "http://121.36.24.14:8081/api/note/teacher/index" || res.url == "http://121.36.24.14:8081/api/difficulty/teacher/index") {
            // console.log('针对这个请求做拦截');
            return res;
        }
        Toast.loading({
            duration: 0,
            message: '加载中...',
            forbidClick: true
        });
        return res; //返回的数据 可以在这里处理一些data嵌套问题 或 请求返回的code码状态问题 例如 200等 后台自定义的意思
    },
    err => { // 对失败请求做些什么
        Toast.clear()
        console.log("请求发送失败");
        return Promise.reject(err);
    }

);

// 添加一个响应拦截器  在收到响应后拦截一下
axios.interceptors.response.use(

    res => { // 对响应数据做些什么
        // console.log("服务器已响应");
        Toast.clear()
        var data = {};
        if (res.data) { data = res.data }; // 判断数据存不存在,保存数据
        // if (res.data.errno == 501) { delCookie("wxtoken") }; // 判断token过期过不过期,存储新的token
        //登录过期
        if (res.data.errno == 501) {
            localStorage.removeItem("Teachertoken");
            router.replace('/about');
        } else if (res.data.errno == 503) {
            Toast.fail({
                message: "登录失败,账号或密码错误",
                forbidClick: true,
                loadingType: "spinner"
            });
        }
        return data; //返回 响应拦截后的 数据
    },

    err => { // 对响应错误做些什么 可以在这里跳转至404页面 需要引入路由
        Toast.clear()
        Toast.fail("网络连接失败,请返回重试")
        console.log("服务器未响应");
        return Promise.reject(err);
    }

);

// 第二步封装axios请求方法 并 输出(export) 封装的方法 设置HTTP报文头

// get 请求
function get(url, data) {
    if (!data) data = {}; // 如果不存在给 data 赋值个空对象
    return axios({
        method: 'get',
        url: urls.apiUrl + url,
        params: data,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded', // 声明 客户端(前端) 发送的是（ form ）数据类型
            'Accept': 'application/json', // 声明 客户端(前端) 希望接受的是（json ）数据类型
            // 'token': getCookie("wxtoken"),                  // 请求头 携带本地 token
            'token': localStorage.getItem("wxtoken"), // 请求头 携带本地 token
            // 'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0aGlzIGlzIGxpdGVtYWxsIHRva2VuIiwiYXVkIjoiTUlOSUFQUCIsImlzcyI6IkxJVEVNQUxMIiwiZXhwIjoxNTgxNjgwOTc1LCJ1c2VySWQiOjEsImlhdCI6MTU4MTA3NjE3NX0.3Zo5tXlCn0htyueJYKOujxIFlALLvke7eOiE74SOZhw',                  // 请求头 携带本地 token
        }
    });
}

// post 请求 json 格式
function postJson(url, data) {
    if (!data) data = {};
    return axios({
        method: 'post',
        url: urls.apiUrl + url,
        data: data,
        headers: {
            'Content-Type': 'application/json', // 发送的 类型
            'Accept': 'application/json', // 接受的 类型
            // 'token': getCookie("wxtoken"),     // 请求头 携带本地 token
            'token': localStorage.getItem("wxtoken"), // 请求头 携带本地 token
            // 'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0aGlzIGlzIGxpdGVtYWxsIHRva2VuIiwiYXVkIjoiTUlOSUFQUCIsImlzcyI6IkxJVEVNQUxMIiwiZXhwIjoxNTgxNjgwOTc1LCJ1c2VySWQiOjEsImlhdCI6MTU4MTA3NjE3NX0.3Zo5tXlCn0htyueJYKOujxIFlALLvke7eOiE74SOZhw',     // 请求头 携带本地 token
        }
    });
}
// function postJson(url, data) {
//   return new Promise((resolve, reject) => {
//     axios({
//       url: urls.apiUrl+url,
//       method: 'post',
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//         'token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0aGlzIGlzIGxpdGVtYWxsIHRva2VuIiwiYXVkIjoiTUlOSUFQUCIsImlzcyI6IkxJVEVNQUxMIiwiZXhwIjoxNTgxNjgwOTc1LCJ1c2VySWQiOjEsImlhdCI6MTU4MTA3NjE3NX0.3Zo5tXlCn0htyueJYKOujxIFlALLvke7eOiE74SOZhw",     // 请求头 携带本地 token
//       },
//       data: data
//     })
//       .then(res => {
//         //成功
//         resolve(res)
//       })
//       .catch(res => {
//         //失败
//         reject(res)
//       })
//   })
// };

// post 请求 from 格式
function postForm(url, data) {
    if (!data) data = {};
    return axios({
        method: 'post',
        url: urls.apiUrl + url,
        data: qs.stringify(data),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded', // 发送的 类型
            'Accept': 'application/json', // 接受的 类型
            'token': localStorage.getItem("wxtoken"), // 请求头 携带本地 token
        }
    });
}

export default {
    get,
    postJson,
    postForm
}