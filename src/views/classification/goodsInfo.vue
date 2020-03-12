<template>
  <div class="goodsInfo">
    <!-- <h2> 这是 商品详情 页面 </h2> -->
    <van-icon class="nav-icon" name="arrow-left" @click="$router.go(-1)" />
    <van-tabs v-model="goodsInfoState" sticky>
      <van-tab title="商品">
        <div class="goodsList-goods goodsList-box">
          <!-- 轮播 -->
          <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item, index) in images" :key="index">
              <van-image :src="item"></van-image>
            </van-swipe-item>
          </van-swipe>
          <!-- 商品介绍 -->
          <div class="goodsListinfo">
            <span
              >{{info.name}}</span
            >
            <span>{{info.counterPrice}}</span>
            <span>快递：包邮</span>
          </div>
          <!-- 选择数量 -->
          <van-cell
            class="numCell"
            title="选择数量"
            is-link
            @click="purchaseClcik(false)"
          />
          <!-- 进店逛逛 -->
          <div class="home-box" @click="goHomeClick">
            <van-image
              :src="require('@/assets/img/auxmjXEKlaXmArsGuziLajR2R2xS2t.png')"
            ></van-image>
            <div class="home-box-text">
              <div class="home-box-text-top">抖一斗</div>
              <div class="home-box-text-bottom">
                这是一个平台,一个更好的分销平台,商品多样,热门
              </div>
            </div>
            <div class="home-box-but">
              <span>
                进店逛逛
              </span>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="详情">
        <div class="goods-img">
          <van-image :src="require('@/assets/img/detail.png')"></van-image>
        </div>
      </van-tab>
      <van-tab title="参数">
        <div class="goodsList-parameter goodsList-box canshu" v-for="item of attribute" :key="item.id">
          <!-- <van-field label="attribute" value="value" readonly /> -->
          <div class="attribute">{{item.attribute}}</div>
          <div class="value">{{item.value}}</div>
          <!-- <van-field label="" value="" readonly >{{attribute.attribute}}</van-field> -->
          <!-- <van-field label="品牌" value="菜墩" readonly />
          <van-field label="型号" value="洗手液" readonly />
          <van-field label="产地" value="中国大陆" readonly />
          <van-field label="净含量" value="正装500ml+替换装500ml" readonly />
          <van-field label="功能" value="清洁 清凉舒爽" readonly />
          <van-field label="是否量贩装" value="否" readonly /> -->
        </div>
      </van-tab>
      <van-tab title="评论">
        <van-rate
            v-model="value"
            :size="25"
            color="#ee0a24"
            void-icon="star"
            void-color="#eee"
          >
        </van-rate>
      
      </van-tab>
    </van-tabs>
    <!-- 购买按钮 -->
    <div class="but-box" @click="purchaseClcik(true)">
      <van-button size="large" color="#ff5555">立即购买</van-button>
    </div>

    <!-- sku -->
    <van-popup v-model="isShow" closeable close-icon="close" position="bottom">
      <!-- 
      :style="{ height: '30%' }" -->
      <!-- sku 上半部分 -->
      <van-image :src="images[0]"></van-image>
      <div class="price">{{info.counterPrice}}</div>
      <van-divider />
      <!-- sku 下半部分 -->
      <div class="sku-center-bottom">
        <div class="quantity">
          <div class="quantity-text">数量</div>
          <div class="quantity-num">1</div>
        </div>
      </div>
      <!-- 立即购买 确定按钮 -->
      <van-button
        class="skuButton"
        size="large"
        color="#ff5555"
        @click="goOrderClick"
        v-if="isNum"
        >确定</van-button
      >
      <!-- 选择数量 确定按钮 -->
      <van-button
        class="skuButton"
        size="large"
        color="#ff5555"
        @click="numClick"
        v-if="!isNum"
        >确定</van-button
      >
    </van-popup>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "goodsInfo",
 

  data() {
    return {
      goodsInfoState: 0, // 展示内容

      isShow: false,
      visible: true,
      isNum: true,
      value:0,
      //接口数据
      attribute:[],
      shaspecificationList:[],
      comment:{},//评论
      productList:[],
      info:{},
      images: [],
      detail:""
    };
  },
  created(){
    // this.categoryId = this.$route.query.categoryId
  },
  methods: {

    purchaseClcik(val) {
      console.log("立即购买 打开sku");
      this.isShow = true;
      this.isNum = val;
    },
    goOrderClick() {
      console.log("立即购买 进入确认订单");
      this.$router.push("order");
      this.isShow = false;
    },
    numClick() {
      console.log("选择数量 进入确认订单");
      this.isShow = false;
    },
    goHomeClick() {
      console.log("进入首页");
      this.$router.replace("home");
    },
      //调用接口
  AllShopInfo(){
    axios.get('https://www.xxxkeji.com:8081/wx/goods/detail',{
      params:{
        id:this.$route.query.id
      }
    })
        .then(this.handleAllShopInfo)
  },
    handleAllShopInfo(res){
      console.log(res)
    res = res.data
    // console.log(res)
    if(res){
      const data = res
      this.shaspecificationList = data.shaspecificationList
      this.info = data.info
      this.images=data.info.gallery
      this.detail=data.info.detail
      this.shareImage=data.shareImage
      this.comment = data.comment
      this.productList=data.productList
      this.attribute = data.attribute

    }
  },
  },
 mounted(){
   this.AllShopInfo()
  }
};
</script>

<style lang="less" scoped>
.goodsInfo {
  // 返回箭头
  .nav-icon{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    font-size: 20px;
    width: 44px;
    height: 44px;
    line-height: 44px;
    text-align: center;
  }
  // 头部返回箭头 的位置
  /deep/.van-tabs {
    background-color: #fff;
    .van-tabs__wrap {
      padding: 0 30px;
      .van-tabs__nav {
        // width: 80%;
        // margin-right: 0;
      }
    }
  }
  // width: 100%;
  // height: 100%;
  // position: relative;
  // letter-spacing: 0;
  // overflow: hidden;
  // .nav {
  //   // display: flex;
  //   width: 100%;
  //   height: 50px;
  //   font-size: 14px;
  //   box-sizing: border-box;
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   z-index: 999;
  //   background-color: #fff;
  //   .nav-icon {
  //     position: absolute;
  //     top: 0;
  //     left: 0;
  //     font-size: 24px;
  //     height: 100%;
  //     line-height: 50px;
  //   }
  //   .nav-title {
  //     width: 100%;
  //     height: 100%;
  //     padding: 0 30px;
  //     box-sizing: border-box;
  //     display: flex;
  //     justify-content: space-around;
  //     align-items: center;
  //     .nav-item {
  //       width: 100%;
  //       height: 100%;
  //       display: flex;
  //       align-items: center;
  //       justify-content: center;
  //       position: relative;
  //       .markerLine {
  //         position: absolute;
  //         bottom: 0;
  //         width: 95%;
  //         height: 1px;
  //         background-color: rgba(0, 0, 0, 0);
  //       }
  //     }
  //     .goods.active {
  //       color: red;
  //       .markerLine {
  //         background-color: red;
  //       }
  //     }
  //     .info.active {
  //       color: red;
  //       .markerLine {
  //         background-color: red;
  //       }
  //     }
  //     .parameter.active {
  //       color: red;
  //       .markerLine {
  //         background-color: red;
  //       }
  //     }
  //     .comment.active {
  //       color: red;
  //       .markerLine {
  //         background-color: red;
  //       }
  //     }
  //   }
  // }

  .goodsList {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 99;
  }
  // 商品 详情 参数 评价
  .goodsList-box {
    // padding-top: 50px;
    width: 100%;
    height: 100%;
    background-color: #f3f3f3;
    // position: absolute;
    // z-index: 9;
    // top: 0;
    // left: 0;
  }
  // 商品
  .goodsList-goods {
    // 轮播
    .my-swipe .van-swipe-item {
      // color: #fff;
      // font-size: 20px;
      // line-height: 150px;
      // text-align: center;
      // background-color: #39a9ed;
      .van-image {
        height: 300px;
      }
    }
    // 文本信息
    .goodsListinfo {
      display: flex;
      flex-direction: column;
      padding: 10px;
      background-color: #fff;
      span {
        line-height: 16px;
        padding: 3px 0;
      }
      span:nth-child(2) {
        color: red;
      }
      span:nth-child(3) {
        font-size: 12px;
        color: #ccc;
      }
    }
    // 选择数量
    .numCell {
      margin-top: 10px;
    }
    // 进店
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
        width: 60%;
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
        border: 1px solid #555;
        border-radius: 15px;
        padding: 5px 10px;
        color: #777;
        font-size: 12px;
      }
    }
  }
  // 详情
  .goodsList-info {
    // overflow: visible;
  }
  // 参数
  .goodsList-parameter {
    width:100%;
    display:flex;
    justify-content: space-between;
    height: 100%;
    line-height: 40px;
    padding:0 10px;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
    background-color: #fff;
  }
  .attribute{
    width:30%;
  }
  .value{
    width:100%;
  margin-left: 10px;
  text-overflow: -o-ellipsis-lastline;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
  }
  .component-fade-enter-active,
  .component-fade-leave-active {
    transition: 0.7s ease;
    transform: translate(0);
    // left: 0;
  }
  .component-fade-enter,
  .component-fade-leave-to {
    transition: 0.7s ease;
    transform: translate(100%);
    // left: 100%;
  }
  // 评价
  .goodsList-comment {
  }
  .but-box {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 99;
  }
  .van-popup {
    // position: relative;
    overflow: visible;
    padding: 0px 10px 50px;
    box-sizing: border-box;
    .van-image {
      width: 70px;
      height: 70px;
      position: absolute;
      top: -20px;
      left: 10px;
      border-radius: 5px;
      overflow: hidden;
      box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.18);
    }
    .price {
      padding: 20px 100px;
      color: red;
    }
    .van-divider {
      background-color: #ccc;
    }
    .sku-center-bottom {
      width: 100%;
      height: 200px;
      // background-color: #f3f3f3;
      .quantity {
        width: 100%;
        height: 30px;
        display: flex;
        justify-content: space-between;
        line-height: 30px;
        .quantity-text {
        }
        .quantity-num {
          text-align: center;
          width: 100px;
          border-top: 1px solid #ccc;
          border-bottom: 1px solid #ccc;
        }
      }
    }
    .skuButton {
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
}
.info-box1 {
  height: 100px;
  background-color: #0f0;
  padding: 30px;
  box-sizing: border-box;
}
.info-box {
  height: 100px;
  background-color: #777;
  padding: 30px;
  box-sizing: border-box;
}
</style>
