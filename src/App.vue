<template>
  <div id="app">
    <router-view />

    <van-tabbar route v-show="$route.meta.istabShow" active-color="#ee0a24">
      <van-tabbar-item replace to="/home" icon="wap-home-o">
        大宅院
      </van-tabbar-item>
      <van-tabbar-item replace to="/classification" icon="qr">
        全部商品
      </van-tabbar-item>
      <van-tabbar-item replace to="/course" icon="comment-o">
        赚佣教程
      </van-tabbar-item>
      <van-tabbar-item replace to="/about" icon="friends-o">
        个人中心
      </van-tabbar-item>
      <van-tabbar-item icon="replay" @click="refreshClick">
        刷新
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {};
  },
  created() {
      // location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxb225ef8edffc7fde&redirect_uri=REDIRECT_URI&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect"
  },
  methods:{
    refreshClick(){
      location.reload()
    }
  }
};
</script>
<style lang="less">
@import url("./assets/style/reset.css");
@import url("./assets/style/color.less");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  letter-spacing:1px; // 字间距
  // text-align: center;
  color: #2c3e50;
  background-color: @bgColor;
  width: 100%;
  height: 100%;
  padding: 0 0 50px 0;
  box-sizing: border-box;
}
</style>
