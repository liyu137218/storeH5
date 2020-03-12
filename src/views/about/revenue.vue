<template>
  <div class="revenue">
    <!-- <h2> 这是 收益中心 页面 </h2> -->
    <!-- 第一区 -->
    <div class="header">
      <van-image
        src="https://img.yzcdn.cn/vant/cat.jpeg"
        fit="cover"
      ></van-image>
      <div class="userInfo">
        <span class="userInfo-name">昵称昵称昵称昵称昵称昵称</span>
        <span class="userInfo-lv">&lt;默认等级&gt;</span>
        <span class="userInfo-references">推荐人:总店</span>
        <span class="userInfo-number">门牌号:00001</span>
      </div>
    </div>
    <!-- 第二区 -->
    <div class="profit">
      <div class="profit-history">
        <div class="profit-history-text">历史提现收益(元)</div>
        <div class="profit-history-num">0.00</div>
      </div>
      <div class="profit-available">
        <div class="profit-available-box">
          <div class="profit-available-text">可提取收益(元)</div>
          <div class="profit-available-num">0.00</div>
        </div>
        <div class="profit-available-botton">提现</div>
      </div>
    </div>
    <!-- 第三区 -->
    <van-grid :column-num="2" class="revenue-grid">
      <van-grid-item
        class="myOrder"
        icon="gold-coin"
        text="我的订单"
        @click="allOrderClick"
      />
      <van-grid-item
        class="commission"
        icon="orders-o"
        text="佣金明细0元"
        @click="commissionClick"
      />
      <van-grid-item
        class="withdraw"
        icon="notes-o"
        text="提现明细0笔"
        @click="withdrawClick"
      />
      <van-grid-item
        class="neighbor"
        icon="contact"
        text="我的邻居0人"
        @click="neighborClick"
      />
      <van-grid-item
        class="QRcode"
        icon="qr"
        text="推广二维码"
        @click="QRcodeClick"
      />
      <van-grid-item
        class="yieldOrder"
        icon="bar-chart-o"
        text="收益订单"
        @click="yieldOrderClick"
      />
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "revenue",

  data() {
    return {};
  },

  methods: {
    // 我的订单
    allOrderClick() {
      this.$store.commit("modifyAllOrderNum", 0); // 修改 进入订单的状态
      this.$router.push("allOrder");
    },
    // 佣金明细
    commissionClick() {
      this.$router.push("commission");
    },
    // 提现明细 收益明细
    withdrawClick() {
      this.$router.push("incomeDetails");
    },
    // 我的邻居
    neighborClick() {
      this.$router.push("neighbor");
    },
    // 推广二维码
    QRcodeClick() {
      this.$router.push("QRcode");
    },
    // 收益订单
    yieldOrderClick() {
      this.$router.push("withdraw");
    }
  }
};
</script>

<style lang="less" scoped>
.revenue {
  padding: 0 0 50px 0;
  .header {
    width: 100%;
    height: 130px;
    background-color: #fe5455;
    display: flex;
    align-items: center;
    .van-image {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 12px;
    }
    .userInfo {
      display: flex;
      flex-direction: column;
      height: 100%;
      padding: 20px 0;
      box-sizing: border-box;
      justify-content: space-around;
      color: aliceblue;
      font-size: 14px;
      // .userInfo-name{}
      .userInfo-lv {
        color: yellow;
        display: block;
        width: 100px;
        border: 1px solid #fff;
        border-radius: 20px;
        text-align: center;
        padding: 5px 0;
      }
      // .userInfo-references{}
      // .userInfo-number{}
    }
  }
  .profit {
    width: 100%;
    height: 180px;
    background-color: #fe5455;
    margin-top: 3px;
    color: #fff;
    .profit-history {
      padding: 30px 10px;
      // .profit-history-text {
      // font-size: 30px;
      // }
      .profit-history-num {
        font-size: 30px;
        margin-top: 5px;
      }
    }
    .profit-available {
      font-size: 20px;
      padding: 0 10px;
      display: flex;
      justify-content: space-between;
      .profit-available-box {
        .profit-available-text {
          font-size: 14px;
        }
        .profit-available-num {
          margin-top: 5px;
        }
      }
      .profit-available-botton {
        font-size: 16px;
        border: 1px solid #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 70%;
        padding: 5px 10px;
        border-radius: 20px;
      }
    }
  }
  .revenue-grid {
    color: #888;
    font-weight: 200px;
    .myOrder {
      /deep/ .van-icon {
        color: #feb312;
      }
    }
    .commission {
      /deep/ .van-icon {
        color: #50b6fe;
      }
    }
    .withdraw {
      /deep/ .van-icon {
        color: #ff8155;
      }
    }
    .neighbor {
      /deep/ .van-icon {
        color: #ff7447;
      }
    }
    .QRcode {
      /deep/ .van-icon {
        color: #feb312;
      }
    }
    .yieldOrder {
      /deep/ .van-icon {
        color: #ff741d;
      }
    }
  }
  /deep/ .van-grid {
    .van-grid-item__content {
      padding: 20px 0;
    }
  }
}
</style>
