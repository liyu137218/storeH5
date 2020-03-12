<template>
  <div class="order">
    <!-- <h2> 这是 确认订单 页面 </h2> -->
    <van-nav-bar title="确认订单" left-arrow @click-left="onClickLeft" fixed />
    <!-- 购买的商品 -->
    <div class="orderList">
      <!-- 标题 -->
      <div class="orderList-name">
        <van-icon name="shop-o" />
        <span>抖一斗</span>
      </div>
      <!-- 地址 -->
          <div class="home-box"  @click="goHomeClick">
            <van-icon color="red" size="1rem" name="location-o" />
            <div class="home-box-text">
              <div class="home-box-text-top">李瑜 13313313311</div>
              <div class="home-box-text-bottom">
                河南省郑州市金水区紫金山路广播大厦广播大厦
              </div>
            </div>
            <div class="home-box-but">
              <!-- <span>
                进店逛逛
              </span> -->
              <van-icon color="red" size=".5rem" name="arrow" />
            </div>
          </div>
      <!-- 商品 -->
      <div class="commodity">
        <!-- <div class="commodity-img"></div> -->
        <van-image
          class="commodity-img"
          src="https://img.yzcdn.cn/vant/apple-1.jpg"
        ></van-image>
        <div class="commodity-info">
          <div>
            <div class="commodity-info-1">
              <span>测试商品</span>
              <span>￥1.00</span>
            </div>
            <div class="commodity-info-2" style="color:#aaa">x1</div>
          </div>
          <div>
            <div class="commodity-info-3">
              啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
            </div>
            <div class="commodity-info-4">
              <span style="color:#000">共计：</span>
              <span style="color:red">￥1.00</span>
            </div>
          </div>
        </div>
      </div>

    </div>
    <!-- 总计 -->
    <van-cell-group>
      <!-- 商品小计 -->
      <van-cell title="商品小计" value="￥1.00" />
      <!-- 运费 -->
      <van-cell title="运费" value="￥0.00" />
    </van-cell-group>
    <!-- 支付 -->
    <div class="payment">
      <div class="payment-left">
        <span>需付：</span>
        <span style="color:red">￥1.00</span>
      </div>
      <div class="payment-right">
        <van-button color="#ff5555" @click="paymentClick">立即支付</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
import axios from 'axios'
export default {
  name: "order",

  data() {
    return {};
  },
  created() {
    this.addressDefault()
  },
  methods: {
    // 请求当前默认地址
      addressDefault(){
        axios.defaults.headers.common['token']='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0aGlzIGlzIGxpdGVtYWxsIHRva2VuIiwiYXVkIjoiTUlOSUFQUCIsImlzcyI6IkxJVEVNQUxMIiwiZXhwIjoxNTg0NjAwMjM1LCJ1c2VySWQiOjM1LCJpYXQiOjE1ODM5OTU0MzV9.LaTfBmVntlxVaS88xSecDiyZw8PucxfAwYOv8ivSGgc'
    axios.get('https://www.xxxkeji.com:8081/wx/address/list')
        .then(this.handleaddressDefault)
  },
      handleaddressDefault(res){
      console.log(res)
    res = res.data
    // console.log(res)
    if(res){
      const data = res
    }
  },
    // 地址跳转
        goHomeClick() {
      console.log("进入首页");
      this.$router.replace("wxAddressList");
    },
    onClickLeft() {
      Dialog.confirm({
        title: "确定要放弃支付吗?",
        message: "喜欢的商品可能随时会被抢空哦"
      })
        .then(() => {
          // on confirm
          console.log("放弃订单");
          this.$router.go(-1);
        })
        .catch(() => {
          // on cancel
          console.log("取消放弃订单");
        });
    },
    // 立即支付 按钮
    paymentClick() {
      this.$router.replace("orderMethod");
    }
  }
};
</script>

<style lang="less" scoped>
@import url("../../assets/style/color.less");
.order {
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
  // 地址
    .home-box {
      margin-top: 10px;
      width: 100%;
      background-color: #fff;
      display: flex;
      padding: 10px;
      box-sizing: border-box;
      justify-content: space-between;
      align-items: center;
      .van-image {
        width: 50px;
        height: 50px;
      }
      .home-box-text {
        margin-left: 10px;
        width: 80%;
        .home-box-text-top {
        }
        .home-box-text-bottom {
          margin-top: 5px;
          font-size: 12px;
          width: 100%;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          word-break: break-all;
        }
      }
      .home-box-but {
        padding: 5px 10px;
        color: #777;
        font-size: 12px;
      }
    }
  // 订单列表
  .orderList {
    margin-top: 10px;
    padding: 10px;
    background-color: #fff;
    color: #000;
    // 标题
    .orderList-name {
      width: 100%;
      height: 20px;
      display: flex;
      align-items: center;

      padding-bottom: 5px;
      span {
        margin-left: 3px;
      }
    }
    // 商品
    .commodity {
      width: 100%;
      height: 130px;
      padding: 10px 0 5px;
      display: flex;
      border-top: solid 0.5px #ddd;
      .commodity-img {
        width: 100px;
        height: 100px;
      }
      .commodity-info {
        flex: 1;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 10px 0 5px 10px;
        .commodity-info-1 {
          display: flex;
          justify-content: space-between;
        }
        .commodity-info-2 {
          text-align: end;
          padding: 10px 0;
        }
        .commodity-info-3 {
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          line-clamp: 2;
          -webkit-box-orient: vertical;
          height: 30px;
          line-height: 17px;
          color: #ccc;
        }
        .commodity-info-4 {
          text-align: end;
          align-self: flex-end;
          margin-top: 10px;
        }
      }
    }
  }
  // 总计
  .van-cell-group {
    margin-top: 10px;
    padding: 0 10px;
    // 商品小计
    .van-cell {
      padding: 10px 0;
      .van-cell__value {
        color: #000;
      }
    }
  }
  // 立即支付
  .payment {
    height: 40px;
    width: 100%;
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 9;
    background-color: #fff;
    justify-content: flex-end;
    align-items: center;
    .payment-left {
      margin-right: 10px;
    }
    .payment-right {
    }
  }
  
}
</style>
