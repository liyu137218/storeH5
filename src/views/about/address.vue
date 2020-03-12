<template>
  <div class="address">
    <!-- <h2> 这是 收货地址管理 页面 </h2> -->
    <van-nav-bar
      title="收货地址管理"
      left-arrow
      @click-left="onClickLeft"
      fixed
    />
    <!-- 获取微信地址 -->
    <van-cell title="获取微信收货地址" is-link @click="obtainClick" />

    <!-- 没有地址时 -->
    <div class="noAddress" v-if="addressList.length <= 0">
      <div class="noAddress-icon">
        <van-icon name="location-o" />
      </div>
      <div class="noAddress-text">您暂时没有任何收货地址哦！</div>
      <div class="newadd" @click="newadd">
        新增地址
      </div>
    </div>
    
    <!-- 有地址时 -->
 
  </div>
</template>

<script>
import { Dialog } from 'vant';
   
export default {
  name: "address",

  data() {
    return {
      addressList:[],
    };
  },

  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    obtainClick() {
      console.log("获取微信地址");
     Dialog.confirm({
        title:'提醒',
        message:'抖一斗想要获取你的微信地址'
      })
      .then(()=>{
        console.log('调转到微信页面')
        // this.$router.replace('wxAddress')
      })
      .catch(()=>{


        console.log('取消获取地址')
      })
 
    },
    onAdd(){
      console.log('新增地址')
      this.$router.replace('addAddress')
    },
    newadd(){
      this.$router.replace('addAddress')
    }
  }
};
</script>

<style lang="less" scoped>
@import url("../../assets/style/color.less");
.address {
  height: 100%;
  padding-top: 47px;
  background-color: @bgColor;
  position: relative;
  // 头部
  .van-nav-bar {
    background-color: #f7f7f7;
    border-bottom: solid 1px #ccc;
    .van-icon {
      color: #000;
    }
  }
  // 没有地址时
  .noAddress {
    text-align: center;
    .noAddress-icon {
      width: 120px;
      height: 120px;
      background-color: #e4e4e4;
      font-size: 70px;
      margin: 50px auto 20px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .noAddress-text {
      letter-spacing: 1px; // 字间距
    }
  }
  // 添加地址
  .but-box {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
  }
}
.van-address-item__edit{
  color:#fff
}
.newadd{
  position: absolute;
  bottom:0;
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color:#fff;
  border-radius: 20px;
  background-color: red;
}
</style>
