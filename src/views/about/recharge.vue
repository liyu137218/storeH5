<template>
  <div class="recharge">
    <!-- <h2> 这是 充值中心 页面 </h2> -->
    <van-nav-bar
      title="账户充值"
      left-arrow
      @click-left="onClickLeft"
      fixed
      class="van-hairline--top-bottom"
    />
    <!-- 充值活动 -->
    <div class="cellbox">
      <van-cell
        title="充值活动"
        value="充值满10000元立即送99元"
        class="cell-text"
      />
    </div>
    <!--  -->
    <van-cell-group>
      <van-field label="当前金额 : ￥" v-model="balanceValue" readonly />
      <van-field label="充值金额 : ￥" v-model="rechargeValue" />
    </van-cell-group>
    <!--  -->
    <div class="but-box">
      <van-button
        type="primary"
        size="large"
        :color="butColor"
        :disabled="isReadonly"
        @click="UserAdd"
        >下一步</van-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "recharge",

  data() {
    return {
      balanceValue: "0.00", //当前余额
      rechargeValue: "", // 充值金额
    };
  },

  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    //账户充值
    UserAdd(){
      this.$router.replace('UserAdd')
    }
  },

  computed: {
    butColor() {
      if (this.rechargeValue == "") {
        return "#ccc";
      } else {
        return "#f55";
      }
    },
    isReadonly() {
      if (this.rechargeValue == "") {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import url("../../assets/style/color.less");
.recharge {
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
  // 活动
  .cellbox {
    padding: 10px 0;
    .cell-text {
      // background-color: #000;
    }
  }
  //
  .but-box {
    padding: 0 20px;
    margin-top: 10px;
    .van-button {
      height: 40px;
      line-height: 40px;
      background-color: @Color6;
      border: @Color6;
    }
  }
}
</style>
