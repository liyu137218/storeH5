<template>
  <div class="orderInfo">
    <!-- <h2> 这是 订单详情 页面 </h2> -->
    <van-nav-bar title="订单详情" left-arrow @click-left="onClickLeft" fixed />
    <div class="header">
      <span class="span-top">{{ orderInfoState | orderInfoStateF }}</span>
      <span>订单金额：￥1.00</span>
    </div>
    <!-- 购买的商品 -->
    <div class="orderList">
      <!-- 标题 -->
      <div class="orderList-name">
        <van-icon name="shop-o" />
        <span>抖一斗</span>
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
          <!-- <div>
            <div class="commodity-info-3">
              啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
            </div>
            <div class="commodity-info-4">
              <span style="color:#000">共计：</span>
              <span style="color:red">￥1.00</span>
            </div>
          </div> -->
        </div>
      </div>
      <!--  -->
    </div>
    <!-- 总计 -->
    <van-cell-group>
      <!-- 商品小计 -->
      <van-cell title="商品小计" value="￥1.00" />
      <!-- 运费 -->
      <van-cell title="运费" value="￥0.00" />
      <!-- 实付费 -->
      <van-cell title="实付费(含运费)" value="￥1.00" class="" />
    </van-cell-group>
    <!-- 订单时间 -->
    <div class="orderTimeInfo">
      <div class="number orderTimeInfo-box">
        <span>订单编号</span>
        <span>SH20200219170806249856</span>
      </div>
      <div class="stateTime orderTimeInfo-box">
        <span>创建时间</span>
        <span>2020-02-19 17:08:06</span>
      </div>
      <div class="paymentTime orderTimeInfo-box">
        <span>支付时间</span>
        <span>2020-02-19 17:09:05</span>
      </div>
      <div class="deliverTime orderTimeInfo-box">
        <span>发货时间</span>
        <span>2020-02-19 17:09:10</span>
      </div>
      <div class="successTime orderTimeInfo-box">
        <span>发货时间</span>
        <span>2020-02-19 17:09:17</span>
      </div>
    </div>
    <!-- 删除订单 评价 -->
    <div class="delOrder">
      <van-button color="#000" plain round>删除订单</van-button>
      <van-button color="#000" plain round>评价</van-button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "orderInfo",

  data() {
    return {};
  },
  computed: {
    ...mapState(["orderInfoState"]) // 获取当前的状态
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  // 过滤器
  filters: {
    orderInfoStateF(val) {
      if (val == 0) {
        return "订单异常";
      } else if (val == 1) {
        return "等待付款";
      } else if (val == 2) {
        return "等待发货";
      } else if (val == 3) {
        return "等待收货";
      } else if (val == 4) {
        return "交易完成";
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import url("../../assets/style/color.less");
.orderInfo {
  // height: 100%;
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
  .header {
    width: 100%;
    height: 100px;
    background-image: linear-gradient(to right, #ffd466, #ffa966);
    color: #f7f7f7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .span-top {
      font-size: 16px;
    }
    span {
      font-size: 12px;
      padding: 5px;
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
      height: 100px;
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
      .van-cell__title {
        color: #777;
      }
    }
    .van-cell:nth-child(3) {
      .van-cell__value {
        color: red;
      }
    }
  }
  // 订单时间
  .orderTimeInfo {
    margin-top: 10px;
    width: 100%;
    height: auto;
    background-color: #fff;
    padding: 10px 5px;
    box-sizing: border-box;
    color: #777;
    .orderTimeInfo-box {
      padding: 5px;
      span:nth-child(2) {
        margin-left: 10px;
      }
    }
  }
  // 删除订单
  .delOrder {
    background-color: #fff;
    margin-top: 5px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 10px;
    .van-button {
      height: 30px;
      line-height: 30px;
    }
    .van-button:nth-child(1) {
      margin-right: 10px;
    }
  }
}
</style>
