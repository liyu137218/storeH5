<template>
  <div class="incomeDetails">
    <!-- <h2> 这是 收益明细 页面 </h2> -->
    <van-nav-bar
      title="收益明细(0)"
      left-arrow
      @click-left="onClickLeft"
      fixed
    />
    <!-- 累计收益 -->
    <div class="income">
      <span>预计收益：+0.00元</span>
    </div>
    <!-- tab选项 -->
    <van-tabs
      v-model="active"
      @click="onClassClick"
      color="#fea23d"
      class="withdrawTab"
      swipe-threshold="5"
    >
      <van-tab title="所有"></van-tab>
      <van-tab title="待审核"></van-tab>
      <van-tab title="待打款"></van-tab>
      <van-tab title="已打款"></van-tab>
      <van-tab title="无效"></van-tab>
    </van-tabs>
    <!-- 暂时没有任何订单 -->
    <div class="noNeighbor" v-if="isincomeDetailsList">
      <van-icon name="qr-invalid" />
      <div class="noNeighbor-text">暂时没有任何订单</div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "incomeDetails",

  data() {
    return {
      active: 0,
      incomeDetailsList: [],
      isincomeDetailsList: false
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
        this.isincomeDetailsList = true;
      }, 2000);
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onClassClick(index) {
      if (index == 0) {
        console.log("所有");
        this.isincomeDetailsList = false;
        this.init();
      } else if (index == 1) {
        console.log("待审核");
        this.isincomeDetailsList = false;
        this.init();
      } else if (index == 2) {
        console.log("待打款");
        this.isincomeDetailsList = false;
        this.init();
      } else if (index == 3) {
        console.log("已打款");
        this.isincomeDetailsList = false;
        this.init();
      } else if (index == 4) {
        console.log("无效");
        this.isincomeDetailsList = false;
        this.init();
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import url("../../assets/style/color.less");
.incomeDetails {
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
    span {
      color: #888;
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
