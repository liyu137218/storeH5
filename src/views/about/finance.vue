<template>
  <div class="finance">
    <!-- <h2> 这是 进入用户财务 页面 </h2> -->
    <van-nav-bar title="用户财务" left-arrow @click-left="onClickLeft" fixed />
    <!-- 用户名 -->
    <van-field v-model="userName" label="用户名" placeholder="请填用户名" />
    <!-- 支付宝账号 -->
    <van-field
      v-model="alipay"
      type="number"
      label="支付宝账号"
      placeholder="请填写支付宝账号"
    />
    <!-- 提现总金额 -->
    <van-field
      v-model="withdrawal"
      type="number"
      label="提现总金额"
      placeholder="提现金额"
    />
    <!-- 投入总金额 -->
    <van-field
      v-model="investment"
      type="number"
      label="投入总金额"
      placeholder="充值金额+微信订单,支付宝订单(不含余额订单)"
    />
    <!-- 订单总金额 -->
    <van-field
      v-model="order"
      type="number"
      label="订单总金额"
      placeholder="已到货订单总额"
    />
    <!-- 具体说明 -->
    <van-field
      v-model="specify"
      label="具体说明"
      placeholder="提供邀请码说明"
    />
    <!-- 提交申请 -->
    <div class="but-box">
      <van-button color="#f55" size="large">提交申请</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "finance",

  data() {
    return {
      userName: "",
      alipay: "",
      withdrawal: "",
      investment: "",
      order: "",
      specify: ""
    };
  },

  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
@import url("../../assets/style/color.less");
.finance {
  height: 100%;
  padding-top: 47px;
  background-color: @bgColor;
  // 头部
  .van-nav-bar {
    background-color: #f7f7f7;
    border-bottom: solid 1px #ccc;
    .van-icon {
      color: #000;
    }
  }
  .but-box {
    padding: 16px;
    .van-button {
      height: 40px;
      line-height: 40px;
    }
  }
}
</style>
