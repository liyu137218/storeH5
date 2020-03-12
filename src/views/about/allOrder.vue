<template>
  <div class="allOrder">
    <!-- <h2> 这是 全部订单 页面 </h2> -->
    <van-nav-bar title="我的订单" left-arrow @click-left="onClickLeft" fixed />
    <!-- 订单内容 -->
    <van-tabs
      v-model="active"
      animated
      title-active-color="#ee0a24"
      @click="allOrderClick"
    >
      <van-tab title="全部">
       
      </van-tab>
      <van-tab title="待付款">
        <!-- <div class="tabCenter"> -->
        <!-- 待付款待付款待付款 -->
        <!-- <noOrder v-if="orderList.length <= 0"></noOrder>
        </div> -->
      </van-tab>
      <van-tab title="待发货">
        <!-- <div class="tabCenter"> -->
        <!-- 待发货待发货待发货 -->
        <!-- <noOrder v-if="orderList.length <= 0"></noOrder> -->
        <!-- </div> -->
      </van-tab>
      <van-tab title="待收货">
        <!-- <div class="tabCenter"> -->
        <!-- 待收货待收货待收货待收货 -->
        <!-- <noOrder v-if="orderList.length <= 0"></noOrder> -->
        <!-- </div> -->
      </van-tab>
      <van-tab title="已完成">
        <!-- <div class="tabCenter"> -->
        <!-- 已完成已完成已完成已完成 -->
        <!-- <noOrder v-if="orderList.length <= 0"></noOrder> -->
        <!-- </div> -->
      </van-tab>
    </van-tabs>
    <!-- 订单显示区域 -->
    <div class="allOrderbox" v-if="orderList.length > 0">
      <!-- <div class="box-box">
        
      </div> -->
    </div>
    <!-- 没有订单时 -->
    <noOrder v-if="isOrderList"></noOrder>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import noOrder from "../../components/noOrder";
import { Toast } from "vant";
export default {
  name: "allOrder",

  data() {
    return {
      active: 0,
      orderList: [],
      isOrderList: false
    };
  },
  created() {
    console.log(this.allOrderNum);
    this.active = this.allOrderNum;
    this.init();
  },
  computed: {
    ...mapState(["allOrderNum"]) // 获取当前的状态
  },
  methods: {
    // 返回
    onClickLeft() {
      this.$router.go(-1);
    },
    // 初始化
    init() {
      Toast.loading({
        duration: 0, // 持续展示 toast
        message: "加载中",
        forbidClick: true,
        loadingType: "spinner"
      });
      setTimeout(() => {
        Toast.clear();
        this.orderList = [
          {
            orderNum: "SH20200219170806249856"
          }
        ];
        this.isOrderList = true;
      }, 3000);
    },
    // 切换订单状态
    allOrderClick(index) {
      if (index == 0) {
        console.log("全部");
        this.isOrderList = false;
        this.init();
      } else if (index == 1) {
        console.log("待付款");
        this.isOrderList = false;
        this.init();
      } else if (index == 2) {
        console.log("待发货");
        this.isOrderList = false;
        this.init();
      } else if (index == 3) {
        console.log("待收货");
        this.isOrderList = false;
        this.init();
      } else if (index == 4) {
        console.log("已完成");
        this.isOrderList = false;
        this.init();
      }
    }
  },
  components: {
    noOrder
  }
};
</script>

<style lang="less" scoped>
@import url("../../assets/style/color.less");
.allOrder {
  height: 100%;
  padding-top: 47px;
  background-color: @bgColor;
  // 头部
  .van-nav-bar {
    background-color: @bgColor;
    border-bottom: solid 1px #ccc;
    .van-icon {
      color: #000;
    }
  }
  // 标签页
  /deep/ .van-tabs {
    background-color: @bgColor;
    .van-tabs__wrap {
      position: fixed;
      z-index: 9;
      width: 100%;
      .van-tab {
        flex: 1;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
      }
    }
    .van-tabs__content {
      height: 100%;
      .tabCenter {
        padding: 20px 16px;
      }
      .van-tab__pane {
        padding-top: 50px;
      }
    }
  }
  //
  .allOrderbox {
    background-color: @bgColor;
    padding-bottom: 52px;
  }
}
.box-box {
  width: 100px;
  height: 100px;
  padding: 20px;
  background-color: #999;
  margin-top: 20px;
}
</style>
