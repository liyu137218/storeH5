<template>
  <div class="saleCenter">
    <!-- <h2> 这是 挂卖中心 页面 </h2> -->
    <van-nav-bar title="我的订单" left-arrow @click-left="onClickLeft" fixed />
    <!-- 分级选项 -->
    <van-tabs v-model="active" @click="onClassClick">
      <van-tab title="挂卖中"></van-tab>
      <van-tab title="已挂卖"></van-tab>
    </van-tabs>
    <!-- 暂时没有任何订单 -->
    <div class="noNeighbor" v-if="isSaleCenterList">
      <van-icon name="qr-invalid" />
      <div class="noNeighbor-text">暂时没有任何订单</div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "saleCenter",

  data() {
    return {
      active: 0,
      saleCenterList: [],
      isSaleCenterList: false
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      Toast.loading({
        duration: 0, // 持续展示 toast
        message: "加载中",
        forbidClick: true,
        loadingType: "spinner"
      });
      setTimeout(() => {
        Toast.clear();
        this.isSaleCenterList = true;
      }, 3000);
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onClassClick(index) {
      if (index == 0) {
        console.log("挂卖中");
        this.isSaleCenterList = false;
        this.init();
      } else {
        console.log("已挂卖");
        this.isSaleCenterList = false;
        this.init();
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import url("../../assets/style/color.less");
.saleCenter {
  height: 100%;
  padding-top: 47px;
  background-color: @bgColor;
  position: relative;
  // 头部
  .van-nav-bar {
    background-color: #f7f7f7;
    border-bottom: solid 1px #ccc;
    .van-icon {
      color: #000;
    }
  }
  //
  .noNeighbor {
    text-align: center;
    color: #888;
    .van-icon {
      padding: 20px 0;
      font-size: 70px;
    }
  }
}
</style>
