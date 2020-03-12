<template>
  <div class="commission">
    <!-- <h2> 这是 佣金明细 页面 </h2> -->
    <van-nav-bar
      title="收益"
      left-arrow
      @click-left="onClickLeft"
      right-text="收益明细"
      @click-right="onClickRight"
      fixed
    />
    <!-- 头部 -->
    <div class="header">
      <div class="header-num">0.00</div>
      <div class="header-text">累计收益(元)</div>
    </div>
    <!-- 可提取收益 -->
    <van-cell
      class="extract"
      title="可提取收益"
      icon="balance-o"
      value="0.00元"
    />
    <!--  -->
    <van-cell-group>
      <van-cell
        class="applied"
        title="已申请收益"
        icon="replay"
        value="0.00元"
      />
      <van-cell
        class="money"
        title="待打款收益"
        icon="cash-back-record"
        value="0.00元"
      />
      <van-cell
        class="history"
        title="历史提现收益"
        icon="balance-pay"
        value="0.00元"
      />
    </van-cell-group>
    <div class="button">
      <van-button
        type="primary"
        size="large"
        :disabled="isdisabled"
        :color="butColor"
        >我要提现</van-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "commission",

  data() {
    return {
      isdisabled: true,
      butColor: "#888"
    };
  },

  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      console.log("进入收益明细");
      this.$router.push("incomeDetails");
    }
  }
};
</script>

<style lang="less" scoped>
@import url("../../assets/style/color.less");
.commission {
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
  //
  .header {
    width: 100%;
    height: 140px;
    background-color: #fea23d;
    color: aliceblue;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .header-num {
      font-size: 30px;
    }
    .header-text {
      margin-top: 10px;
    }
  }
  .extract {
    // padding: 10px 0;
    margin: 10px 0;
    .van-cell__value {
      span {
        color: #fea23d;
      }
    }
  }
  .button {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    .van-button {
      height: 40px;
      line-height: 40px;
    }
  }
}
</style>
