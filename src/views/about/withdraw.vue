<template>
  <div class="withdraw">
    <!-- <h2> 这是 佣金提现 页面 </h2> -->
    <van-nav-bar title="收益订单" left-arrow @click-left="onClickLeft" fixed />
    <!-- 累计收益 -->
    <div class="income">
      <span>累计收益：+0.00元</span>
    </div>
    <!-- tab选项 -->
    <van-tabs
      v-model="active"
      @click="onClassClick"
      color="#fea23d"
      class="withdrawTab"
    >
      <van-tab title="挂卖收益"></van-tab>
      <van-tab title="推广收益"></van-tab>
    </van-tabs>
    <!-- 暂时没有任何订单 -->
    <div class="noNeighbor" v-if="iswithdrawList">
      <van-icon name="qr-invalid" />
      <div class="noNeighbor-text">暂时没有任何订单</div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "withdraw",

  data() {
    return {
      active: 0,
      withdrawList: [],
      iswithdrawList: false
    };
  },
  created() {
    this.init();
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    init() {
      Toast.loading({
        duration: 0, // 持续展示 toast
        message: "加载中",
        forbidClick: true,
        loadingType: "spinner"
      });
      setTimeout(() => {
        Toast.clear();
        this.iswithdrawList = true;
      }, 3000);
    },
    onClassClick(index) {
      if (index == 0) {
        console.log("挂卖收益");
        this.iswithdrawList = false;
        this.init();
      } else {
        console.log("推广收益");
        this.iswithdrawList = false;
        this.init();
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import url("../../assets/style/color.less");
.withdraw {
  background-color: @bgColor;
  height: 100%;
  padding-top: 47px;
  // 头部
  .van-nav-bar {
    border-bottom: solid 1px #ccc;
    .van-icon {
      color: #000;
    }
  }
  // 累计收益
  .income {
    background-color: #fea23d;
    width: 100%;
    color: #fff;
    padding: 20px;
    box-sizing: border-box;
  }
  //
  .withdrawTab {
    /deep/ .van-tab--active {
      .van-tab__text {
        color: #fea23d;
      }
    }
  }
  //
  .noNeighbor {
    text-align: center;
    color: #888;
    .van-icon {
      padding: 50px 0 20px;
      font-size: 70px;
    }
  }
}
</style>
