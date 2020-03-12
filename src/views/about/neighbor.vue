<template>
  <div class="neighbor">
    <!-- <h2> 这是 我的邻居 页面 </h2> -->
    <van-nav-bar
      :title="'我的邻居(' + titleNum + ')'"
      left-arrow
      @click-left="onClickLeft"
      fixed
    />
    <!-- 分级选项 -->
    <van-tabs v-model="active" @click="onClassClick">
      <van-tab :title="'一级(' + ClassA + ')'"></van-tab>
      <van-tab :title="'二级(' + ClassB + ')'"></van-tab>
    </van-tabs>
    <!-- 分级 列表显示区域 -->
    <!-- 列表无数据时 -->
    <div class="noNeighbor" v-if="isnoNeighbor">
      <!-- <div class="img-box"> -->
      <van-image :src="logoi"></van-image>
      <!-- </div> -->
      <div class="noNeighbor-text">暂时没有任何数据</div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "neighbor",

  data() {
    return {
      titleNum: 0,
      active: 0,
      ClassA: 0,
      ClassB: 0,
      ClassList: [], // 下线 列表
      logoi: require("../../assets/img/noNeighbor.png"), // 暂时没有任何数据
      isnoNeighbor: false
    };
  },
  created() {
    this.init();
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    init() {
      Toast.loading({
        duration: 0, // 持续展示 toast
        message:'加载中',
        forbidClick: true,
        loadingType: "spinner"
      });
      setTimeout(() => {
        Toast.clear();
        this.isnoNeighbor = true;
      }, 3000);
    },
    onClassClick(name, title) {
      if (name == 0) {
        console.log("一级");
        this.isnoNeighbor = false;
        this.init();
      } else if (name == 1) {
        console.log("二级")
        this.isnoNeighbor = false;
        this.init();
      }
    }
    // ClassBClick(){
    //   this.isnoNeighbor = false
    //   this.init()
    // }
  }
};
</script>

<style lang="less" scoped>
@import url("../../assets/style/color.less");
.neighbor {
  background-color: @bgColor;
  height: 100%;
  padding-top: 47px;
  // 头部
  .van-nav-bar {
    border-bottom: solid 1px #ccc;
    .van-icon {
      color: #000;
    }
  }
  // 列表无数据时
  .noNeighbor {
    text-align: center;
    .van-image {
      width: 100px;
      height: 100px;
      padding: 60px 20px 20px;
    }
  }
}
</style>
