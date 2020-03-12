<template>
  <div class="record">
    <!-- <h2> 这是 参与记录 页面 </h2> -->
    <van-nav-bar title="我的订单" left-arrow @click-left="onClickLeft" />
    <!-- 我的积分 -->
    <div class="myIntegral">
      <van-icon name="points" />
      <span>我的积分:0</span>
    </div>
    <!-- 参与记录 -->
    <!-- 未找到参与记录 -->
    <div class="myRecord" v-if="arr.length <= 0">
      <van-icon name="warning-o" />
      <div class="text">未找到参与记录~</div>
    </div>
    <!-- 导航 -->
    <van-tabbar v-model="active" active-color="#ee0a24">
      <van-tabbar-item icon="home-o"></van-tabbar-item>
      <van-tabbar-item icon="gold-coin-o"></van-tabbar-item>
      <van-tabbar-item icon="notes-o"></van-tabbar-item>
      <van-tabbar-item icon="friends-o"></van-tabbar-item>
      <van-tabbar-item replace to="/home" icon="shop-o"> </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "record",

  data() {
    return {
      arr: [],
      active: 2
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
.record {
  // height: 100%;
  // 头部
  /deep/ .van-nav-bar {
    // background-color: @bgColor;
    border-bottom: solid 1px #ccc;
    .van-nav-bar__left {
      .van-icon {
        color: #888;
      }
    }
  }
  // 我的积分
  .myIntegral {
    display: flex;
    align-items: center;
    padding: 10px 16px;
    span{
      margin-left: 5px;
    }
    // justify-content: center;
  }
  // 参与记录
  .myRecord {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #888;
    .van-icon {
      font-size: 90px;
      padding: 30px 0;
    }
    .text {
      font-size: 16px;
    }
  }
}
</style>
