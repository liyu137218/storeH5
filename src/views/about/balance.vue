<template>
  <div class="balance">
    <!-- <h2> 这是 余额明细 页面 </h2> -->
    <van-nav-bar title="充值记录" left-arrow @click-left="onClickLeft" fixed />
    <div class="balance-box">
      <div class="icon-box">
        <van-icon name="search" />
      </div>
      <div class="text-box">
        暂时没有任何记录!
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "balance",

  data() {
    return {
      balanceList: []
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
.balance {
  height: 100%;
  background-color: @bgColor;
  padding-top: 47px;
  .van-nav-bar {
    border-bottom: solid 1px #ccc;
    .van-icon {
      color: #000;
    }
  }
  .balance-box {
    text-align: center;
    margin-top: 50px;
    color: #888;
    letter-spacing: 1px; // 字间距
    .icon-box {
      font-size: 70px;
    }
    .text-box {
    }
  }
}
</style>
