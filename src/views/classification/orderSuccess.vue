<template>
  <div class="orderSuccess">
    <!-- <h2> 这是 支付成功 页面 </h2> -->
    <van-nav-bar title="支付成功" left-arrow @click-left="onClickLeft" fixed />
    <!-- 提示信息 -->
    <div class="header">
      <span class="span-top">
        订单支付成功
      </span>
      <span>
        您购买的商品已自动发货
      </span>
    </div>
    <!-- 实付金额 -->
    <van-cell title="实付金额" value="￥1.00" />
    <!-- 订单详情 返回首页 -->
    <div class="buts">
      <van-button type="default" round @click="orderSuccessInfoClick"
        >订单详情</van-button
      >
      <van-button type="default" round @click="$router.replace('home')"
        >返回首页</van-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "orderSuccess",

  data() {
    return {};
  },
  created() {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    orderSuccessInfoClick() {
      this.$store.commit("modifyOrderInfoState", 4); // 修改 进入订单的状态
      this.$router.replace("orderInfo");
    }
  }
};
</script>

<style lang="less" scoped>
@import url("../../assets/style/color.less");
.orderSuccess {
  height: 100%;
  padding-top: 47px;
  background-color: @bgColor;

  // 头部
  .van-nav-bar {
    background-color: #f7f7f7;
    border-bottom: solid 1px #ddd;
    .van-icon {
      color: #000;
    }
  }
  // 提示
  .header {
    width: 100%;
    height: 100px;
    background-image: linear-gradient(to right, #ffd466, #ffa966);
    color: #f7f7f7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .span-top {
      font-size: 16px;
    }
    span {
      font-size: 12px;
      padding: 5px;
    }
  }
  // 实付金额
  .van-cell {
    margin-top: 10px;
    .van-cell__value {
      color: red;
    }
  }
  // 按钮
  .buts {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .van-button {
      width: 40%;
      height: 40px;
      line-height: 40px;
    }
  }
}
</style>
