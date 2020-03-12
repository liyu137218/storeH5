<template>
  <div class="home">
    <!-- <h2>  home这是index.vue页面 </h2> -->
    <!-- 轮播 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in banner" :key="index">
        <van-image class="imgIndex" :src="item.url"></van-image>
      </van-swipe-item>
    </van-swipe>
 <!-- 引入弹幕组件 -->
      <Barrages></Barrages>
    <!-- 搜索 -->
    <van-search
      v-model="valueSearch"
      :placeholder="textSearch"
      show-action
      @search="onSearch"
      @focus="onFocus"
      @blur="onBlur"
      input-align="center"
      class="my-search"
    >
      <div
        slot="action"
        @click="onSearch(item.keyword)"
        class="van-slide-right"
        v-show="visible"
      >
        {{ isAction }}
      </div>
    </van-search>
    <!-- 快捷按钮 -->
    <van-grid>
      <!-- <van-grid-item icon="photo-o" text="抖一斗" /> -->
      <van-grid-item>
        <van-image :src="require('@/assets/img/home-1.png')" />
        <span>抖一斗</span>
      </van-grid-item>
      <van-grid-item @click="clickAll">
        <van-image :src="require('@/assets/img/home-2.png')" />
        <span>全部商品</span>
      </van-grid-item>
      <van-grid-item @click="jifen">
        <van-image :src="require('@/assets/img/home-3.png')" />
        <span>积分商城</span>
      </van-grid-item>
      <van-grid-item @click="generalize">
        <van-image :src="require('@/assets/img/home-4.png')" />
        <span>推广赚佣</span>
      </van-grid-item>
    </van-grid>
    <!-- 热点 -->
    <div class="hot-box" @click="hotClick">
      <van-image
        :src="require('@/assets/img/hot.jpg')"
        fit="contain"
      ></van-image>
      <div class="hot-text">
        <van-icon name="bullhorn-o" />
        <div class="hot-text-text">如何赚取佣金--赚佣教程</div>
      </div>
    </div>
    <!-- 热门商品 -->
    <div class="productList  demo">
    <div class="productList-item" v-for="item of HotGoodsList" :key="item.id" @click="HotItem(item.id)">
        <div class="item-img">
           <van-image :src="item.picUrl"></van-image>
        </div>
        <div class="item-info">
          <div class="item-text">
            {{ item.name }}
          </div>
          <div class="item-price">{{ item.counterPrice }}</div>
        </div>
      <!-- <div class="hotCommodity-1 hotCommodity-item">
        <van-image :src="require('@/assets/img/home-sp1.png')"></van-image>
      </div>
      <div class="hotCommodity-2 hotCommodity-item">
        <van-image :src="require('@/assets/img/home-sp2.jpg')"></van-image>
      </div>
      <div class="hotCommodity-3 hotCommodity-item">
        <van-image :src="require('@/assets/img/home-sp3.png')"></van-image>
      </div>
      <div class="hotCommodity-4 hotCommodity-item">
        <van-image :src="require('@/assets/img/home-sp4.png')"></van-image>
      </div> -->
    </div>
    </div>
    <!-- 分割线 -->
    <van-divider
      :style="{ color: '#fc2e2e', borderColor: '#888', padding: '0 16px' }"
    >
      <van-icon name="fire" /> 店铺推荐
      <span @click="moreClick">更多</span></van-divider
    >
     <!-- 推荐展示列表 -->
    <div class="productList  demo">
      <div
        class="productList-item"
        v-for="item of RecommGoodsList"
        :key="item.id"
        @click="recommendingItem(item.id)"
      >
        <div class="item-img">
          <van-image :src="item.picUrl"></van-image>
        </div>

        <div class="item-info">
          <div class="item-text">
            {{ item.name }}
          </div>
          <div class="item-price">{{ item.counterPrice }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
// 引入弹幕组件
import Barrages from './Barrages'
import { Toast } from "vant";
export default {
  name: "home",
  //注册组件
  components:{
    Barrages
  },
  data() {
    
    return {
      valueSearch: "", // 搜索内容
      textSearch: "请输入关键字...",
      isAction: "",
      visible: false,
      banner: [],
      list:[],//所有商品
      HotGoodsList:[],//热点
      RecommGoodsList:[],//推荐
    };
  },

      created(){
     this.getIndexInfo()
      },
  methods: {
    // 搜索框 点击事件
    onSearch(name) {
      // console.log(this.valueSearch);
      // this.$store.commit('modifySearchText',this.valueSearch)
      this.$router.push({
        path:'/commodity',
        name:'commodity',
        query:{keyword : name}
      })
    },
    // 搜索框 获焦事件
    onFocus() {
      this.textSearch = "";
      this.isAction = "搜索";
      this.visible = true;
    },
    // 搜索框 失焦事件
    onBlur() {
      this.textSearch = "请输入关键字...";
    },
    // 热点跳转至 赚取佣金
    hotClick() {
      this.$router.push("course");
    },
    //
    moreClick() {
      console.log("跳转至推荐商品");
    },
    HotItem(Id){
        //跳转到详情页面中
     this.$router.push({
        path: "/goodsInfo",
        name: "goodsInfo",
        query: { id: Id }
      });
    },
    recommendingItem(Id){
      //跳转到详情页面中
     this.$router.push({
        path: "/goodsInfo",
        name: "goodsInfo",
        query: { id: Id }
      });
    },
    clickAll(){
    // console.log('进入到全部商品')
      this.$router.push('commodity')
    },
    jifen(){
      console.log('进入到积分商城')
      this.$router.push('integral')
    },
    generalize(){
      console.log('进入到推广赚佣')
      this.$router.push('course')
    },
    // 调用接口
    getIndexInfo(){
      axios.get('https://www.xxxkeji.com:8081/wx/home/index')
            .then(this.handleIndexInfo)
    },
    handleIndexInfo(res){
      console.log('handleIndexInfo',res)
      res = res.data
    if(res){
      const data = res
      this.banner = data.Banner
      this.HotGoodsList = data.HotGoodsList
      this.RecommGoodsList = data.RecommGoodsList
    }
  },
  }
};
</script>

<style lang="less" scoped>
@import url("../../assets/style/color.less");
.home {
  background-color: @bgColor;
  padding-bottom: 50px;
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    // height:100%;
    width:100%;
    // text-align: center;
    // background-color: #39a9ed;
  }
  .my-search {
    background-color: #f7f8fa;
    .van-search__content {
      background-color: #fff;
    }
  }
  .van-grid {
    .van-grid-item {
      .van-image {
        width: 40px;
        height: 40px;
      }
      span {
        margin-top: 10px;
        font-weight: 200;
        font-size: 12px;
      }
    }
  }
  .hot-box {
    display: flex;
    height: 20px;
    line-height: 20px;
    background-color: #fff;
    padding: 3px;
    .hot-text {
      display: flex;
      border-left: 1px solid #f1f1f1;
      padding-left: 10px;
      font-weight: 200;
      .van-icon {
        color: red;
        line-height: 20px;
      }
      .hot-text-text {
        font-size: 12px;
      }
    }
  }
  .hotCommodity {
    // display: flex;
    // -ms-flex-direction: row;
    // border-radius:10px 10px  0  0;
    //   div{
    //        display: flex;
    // -ms-flex-direction: row;
    //     width:25%;
    //   }
    //   .van-image{
    //     width:100%
    //   }
    // display: grid;
    // grid-template-columns: 50% 25% 25%;
    // grid-template-rows: 90px 90px;
    // background-color: #999;
    // display:flex;
    //   .hotCommodity div{
    //     display: flex;
    //     width:25%;
    //   }
    //   .van-image{
    //     width:25%;
    //   }
    
  //   .hotCommodity-item {
  //   }
  //   .hotCommodity-1 {
  //     grid-column-start: 1;
  //     grid-column-end: 2;
  //     grid-row-start: 1;
  //     grid-row-end: 3;
  //     // background-color: #000;
  //   }
  //   .hotCommodity-2 {
  //     grid-column-start: 2;
  //     grid-column-end: 4;
  //     grid-row-start: 1;
  //     grid-row-end: 2;
  //     // background-color: red;
  //   }
  //   .hotCommodity-3 {
  //     grid-column-start: 2;
  //     grid-column-end: 3;
  //     grid-row-start: 2;
  //     grid-row-end: 3;
  //     // background-color: yellow;
  //   }
  //   .hotCommodity-4 {
  //     grid-column-start: 3;
  //     grid-column-end: 4;
  //     grid-row-start: 2;
  //     grid-row-end: 3;
  //   }
  // }
  // .van-divider {
  //   .van-icon {
  //     color: red;
  //     margin-right: 5px;
  //   }
  //   span {
  //     color: red;
  //     font-size: 12px;
  //     margin-left: 5px;
  //     font-weight: 200;
  //   }
  }
.productList {
    background-color: @bgColor;
    padding-top: 5px;
    display: flex;
    flex-wrap: wrap;
    .productList-item {
      background-color: #fff;
      width: 47%;
      height: auto;
      padding: 5px 5px 15px;
      box-sizing: border-box;
      margin: 5px;
      .item-text {
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
        height: 30px;
        line-height: 15px;
        font-size: 12px;
      }
      .item-costPrice {
        height: 20px;
        text-decoration: line-through;
        color: #aaa;
        padding: 5px 0;
      }
      .item-price {
        color: red;
        font-size: 18px;
      }
    }
    .active.productList-item {
      width: 100%;
      height: auto;
      margin: 0px;
      padding: 16px;
      display: flex;
      margin: 1px 0;
      .item-img {
        // width: 40%;
        .van-image {
          width: 115px;
          height: 115px;
        }
      }
      .item-info {
        padding-left: 10px;
        .item-text {
          font-size: 14px;
          margin-top: 6px;
        }
      }
    }
  }
}
.imgIndex{
  width:100%;
  height:220px
}
</style>
