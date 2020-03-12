<template>
  <div class="orderMethod">
    <!-- <h2> 这是 订单支付方式 页面 </h2> -->
    <van-nav-bar title="收银台" left-arrow @click-left="onClickLeft" fixed />
    <!-- 订单信息 -->
    <van-cell-group>
      <van-cell title="订单编号" value="SH20200219170806249856" />
      <van-cell class="orderMethod-color-red" title="订单金额" value="￥1.00" />
    </van-cell-group>
    <!-- 支付方式 -->
    <div class="method">
      <!-- wx -->
      <div class="method-1 method-item">
        <van-image
          class="logo"
          :src="require('@/assets/img/wx.png')"
        ></van-image>
        <span class="link"></span>
        <div class="method-text" @click="wxClick">
          <div class="method-text-top">微信支付</div>
          <div class="method-text-bottom">
            <van-image :src="require('@/assets/img/anquan.png')"></van-image>
            <span>微信安全支付</span>
          </div>
        </div>
        <van-icon name="arrow" />
      </div>
      <!-- 余额 -->
      <div class="method-2 method-item" @click="balanceClick">
        <van-image
          class="logo"
          :src="require('@/assets/img/ma.png')"
        ></van-image>
        <span class="link"></span>
        <div class="method-text">
          <div class="method-text-top">余额支付</div>
          <div class="method-text-bottom">
            <!-- <van-image :src="require('@/assets/img/anquan.png')"></van-image> -->
            <span>当前余额：</span> <span style="color:red">￥0.00</span>
          </div>
        </div>
        <van-icon name="arrow" />
      </div>
    </div>
  </div>
</template>

<script>
import { Dialog } from 'vant';
export default {
  name: "orderMethod",

  data() {
    return {};
  },

  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    // 微信支付
    wxClick(){
      Dialog.confirm({
        title:'提醒',
        message:'确定要支付吗'
      })
      .then(()=>{
        this.$router.replace('orderSuccess')
      })
      .catch(()=>{
        console.log('取消支付')
      })
    },
    //余额支付
    balanceClick() {
      Dialog.confirm({
        title: "提醒",
        message: "确认要支付吗"
      })
        .then(() => {
          // on confirm
          console.log("余额支付");
          this.$router.replace('orderSuccess')
        })
        .catch(() => {
          // on cancel
          console.log('取消支付')
        });
    }
  }
};
</script>

<style lang="less" scoped>
@import url("../../assets/style/color.less");
.orderMethod {
  height: 100%;
  padding-top: 47px;
  background-color: @bgColor;

  // 头部
  .van-nav-bar {
    background-color: #f7f7f7;
    border-bottom: solid 1px #ddd;
    .van-icon {
      color: #000;
    }
  }
  // 订单信息
  .van-cell-group {
    margin-top: 10px;
    .van-cell__value {
      flex: none;
    }
    .orderMethod-color-red {
      // border-top: 1px solid #ccc;
      .van-cell__value {
        color: red;
      }
    }
  }
  // 支付方式
  .method {
    margin-top: 10px;
    padding: 10px;
    background-color: #fff;
    .method-item {
      display: flex;
      align-items: center;
      width: 100%;
      height: 60px;

      .logo {
        width: 32px;
        height: 32px;
        padding: 10px;
      }
      .link {
        width: 1px;
        height: 60%;
        background-color: #ccc;
      }
      .method-text {
        width: 100%;
        flex: 1;
        .method-text-top {
          padding: 5px 10px;
        }
        .method-text-bottom {
          display: flex;
          align-items: center;
          padding: 5px 10px;
          color: #ccc;
          .van-image {
            margin-right: 5px;
            width: 20px;
            height: 20px;
          }
        }
      }
      .van-icon {
        font-size: 16px;
        color: #ccc;
      }
    }
  }
}
</style>
