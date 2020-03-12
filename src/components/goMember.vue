<template>
  <div class="goMember">
    <!-- <h2> 这是 成为东家 页面 </h2> -->
    <van-image class="bgImg" :src="bgImg" />
    <!-- 主体 -->
    <div class="center">
      <!-- 标题 -->
      <div class="title"><van-icon name="bulb-o" /> 友情提示</div>
      <!-- 商品 -->
      <div class="commodity" @click="goMemberClick">
        <div class="commodity-left">
          <van-image :src="imgurl" fit="contain"></van-image>
        </div>
        <div class="commodity-right">
          <div class="commodity-right-title">成为抖一斗超级会员</div>
          <div class="commodity-right-price">1.00</div>
        </div>
      </div>
      <!-- 提示 -->
      <span class="textTips van-hairline--top">
        本店需购买此商品才可成为
        <span style="color:#ff5555">{{ "<抖一斗>" }}</span> 购物中心
        东家，请现在去购买吧！
      </span>
    </div>
    <!-- 现在就去购买 -->
    <div class="but-box">
      <van-button color="#ff5555" size="large" @click="goMemberClick">现在就去购买</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "goMember",

  data() {
    return {
      bgImg:require("../assets/img/goMemberBg.png"),
      imgurl: require("../assets/img/auxmjXEKlaXmArsGuziLajR2R2xS2t.png")
    };
  },

  methods: {
    goMemberClick(){
      console.log("购买成为超级会员")
    }
  }
};
</script>

<style lang="less" scoped>
@import url("../assets/style/color.less");
.goMember {
  height: 100%;
  background-color: @bgColor;
  .bgImg {
    width: 100%;
  }
  .center {
    background-color: #fff;
    padding: 0px 16px;
    margin-top: 10px;
    font-weight: 200;
    .title {
      padding: 5px 0;
    }
    .commodity {
      padding: 10px 0;
      height: 50px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .commodity-left {
        width: 50px;
        height: 50px;
        border-radius: 10px;
        overflow: hidden;
        .van-image {
          height: 100%;
        }
      }
      .commodity-right {
        margin-left: 20px;
        .commodity-right-price {
          margin-top: 5px;
        }
      }
    }
    .textTips {
      display: block;
      padding: 10px 0;
      line-height: 20px;
    }
  }
  .but-box{
    margin-top: 20px;
    padding: 0 16px;
    /deep/ .van-button--large{
      height: 40px;
      line-height: 40px;
    }
  }
}
</style>
