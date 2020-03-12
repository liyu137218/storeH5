<template>
  <div class="integral">
    <!-- <h2> 这是 兑换积分 页面 </h2> -->
    <van-grid clickable :column-num="2" class="grids">
      <van-grid-item to="/integral" class="gridIntegral">
        <van-icon name="points" />
        <span>积分0.00</span>
      </van-grid-item>
      <van-grid-item to="/record" class="gridIntegral" @click="recordClick">
        <van-icon name="records" />
        <span>参与记录</span>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "integral",

  data() {
    return {};
  },

  methods: {
    recordClick(){
      // this.$router.push('record')
    }
  }
};
</script>

<style lang="less" scoped>
@import url("../../assets/style/color.less");
.integral {
  height: 100%;
  background-color: @bgColor;
  /deep/ .grids {
    .gridIntegral {
      .van-grid-item__content {
        -webkit-flex-direction: row;
        flex-direction: row;
        span{
          margin-left: 5px;
        }
      }
    }
  }
}
</style>
