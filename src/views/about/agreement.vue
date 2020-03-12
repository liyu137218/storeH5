<template>
  <div class="agreement">
    <!-- <h2> 这是 用户协议 页面 </h2> -->
    <van-nav-bar title="用户协议" left-arrow @click-left="onClickLeft" fixed />
    <!-- 没有文章是显示 -->
    <div v-if="agreementList.length <= 0" class="noAgreement">
      <div class="icon-box"><van-icon name="info-o" /></div>
      <div class="text-box">未找到文章~</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "agreement",

  data() {
    return {
      agreementList: []
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
.agreement {
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
  .noAgreement {
    text-align: center;
    color: #888;
    .icon-box {
      font-size: 70px;
      padding: 20px 0;
    }
    .text-box {
    }
  }
}
</style>
