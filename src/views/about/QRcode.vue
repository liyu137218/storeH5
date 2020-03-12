<template>
  <div class="QRcode">
    <!-- <h2> 这是 我的二维码 页面 </h2> -->
    <van-nav-bar
      title="推广二维码"
      left-arrow
      @click-left="onClickLeft"
      fixed
    />
    <!-- qr -->
    <div class="qrimg">
      <div>
        <span>您的好友</span>
        <span>不哭不闹不炫耀</span>
      </div>
      <div>
        已赚取佣金，快来试试吧
      </div>
      <div class="erweima">
        <ErWeiMa></ErWeiMa>
      </div>
      <div class="tuiguang">
       <span> 长按识别二维码，开启赚佣之旅</span>
      </div>
    </div>
    <!--  -->
    <van-cell class="title-icon" title="如何赚钱" icon="smile-o" />
    <van-field
      class="steptext"
      label="第一步"
      type="textarea"
      autosize
      value="转发商品链接或商品图片给微信好友;"
      readonly
    />
    <van-field
      class="steptext"
      label="第二步"
      type="textarea"
      autosize
      value="从您转发的链接或图片进入商城的好友,系统将自动锁定为您的客户,他们在微信商城中购买任何商品,您都可以获得收益;"
      readonly
    />
    <van-field
      class="steptext"
      label="第三步"
      type="textarea"
      autosize
      value="您可以在挂卖中心查看【我的邻居】和【收益订单】,好友确认收货后收益方可提现"
      readonly
    />
    <!-- 说明 -->
    <div class="explain">
      <div class="explain-title">说明:</div>
      <p class="explain-p">
        分享后会带有独有的推荐码,您的好友访问之后,系统会自动检测并记录客户关系,如果您的好友已被其他人抢先发展成为客户,他就不能成为您的客户,以最早发展成为客户为准
      </p>
    </div>
  </div>
</template>

<script>
import ErWeiMa from './erweima'
export default {
  name: "QRcode",
 components:{
   ErWeiMa
 },
  data() {
    return {};
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
.QRcode {
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
  // 二维码
  .qrimg {
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 300px;
    background-color:#812323;
    font-size: 16px;
    
  }
  .qrimg div{
    flex:1;
    color:#ffc911;
  }
  //
  .title-icon {
    background-color: @bgColor;
    color: #ccc;
  }
  //
  .steptext {
    font-size: 14px;
    /deep/ .van-field__label {
      width: 50px;
    }
  }
  // 
  .explain{
    margin: 20px;
    padding: 10px;
    background-color: orange;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, .138);
    color: #fff;
    font-size: 14px;
    line-height: 20px;
    .explain-text{

    }
    .explain-p{
      
    }
  }
}
.tuiguang{
  margin-top: 10px;
}
.erweima{
  border:10px solid #fff;
}
</style>
