<template>
  <div class="noOrder">
    <!-- <h2> 这是 没有订单 组件 </h2> -->
    <div class="icon-box">
      <van-icon name="notes-o" />
    </div>
    <div class="text-box">
      您暂时没有任何订单哦!
    </div>
    <div class="but-box">
      <van-button plain hairline type="danger" round @click="goHomeClick">去首页逛逛吧</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "noOrder",

  data() {
    return {};
  },

  methods: {
    goHomeClick(){
      this.$router.replace('home')
    }
  }
};
</script>

<style lang="less" scoped>
.noOrder {
  margin-top: 20px;
  text-align: center;
  color: #888;
  letter-spacing: 2px;
  .icon-box {
    width: 100px;
    height: 100px;
    background-color: #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border-radius: 50%;
    .van-icon {
      font-size: 50px;
    }
  }
  .text-box {
    // text-align: center;
    padding: 20px 0;
  }
  .but-box {
    // text-align: center;
    .van-button {
      width: 150px;
      height: 35px;
      line-height: 35px;
      /deep/.van-button__text {
        letter-spacing: 2px;
      }
    }
  }
}
</style>
