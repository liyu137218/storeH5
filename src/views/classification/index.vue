<template>
  <div class="classification">
    <!-- <h2>  classification  这是index.vue页面 </h2> -->
    <div class="header">
      <van-icon name="arrow-left" @click="$router.go(-1)"/>
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
        @click="onSearch(item.name)"
        class="van-slide-right"
        v-show="visible"
      >
        {{ isAction }}
      </div>
    </van-search>
    </div>
    <!-- 所有分类 -->
    <div class="allclassification">
      所有分类
    </div>
    <!-- 分类 -->
    <van-grid :border="false" :column-num="3">

      <van-grid-item class="all-icon" @click="allPriceClick">
        <van-icon name="apps-o" />
        <span>所有商品</span>
      </van-grid-item>

      <van-grid-item
       v-for="item of categoryList" 
       :key="item.id"
        @click="itemPriceClcik(item.id)">
        <van-image :src="require('@/assets/img/classif-item.png')" />
        <span>{{item.keywords}}</span>
      </van-grid-item>

    </van-grid>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "classification",

  data() {
    return {
       valueSearch: "", // 搜索内容
      textSearch: "请输入关键字...",
      isAction: "",
      visible: false,
      searchvalue: "", // 搜索框
      categoryList:[]
    };
  },

  methods: {
    onSearch(name){
      // console.log('执行搜索')
      this.$router.push('commodity')
       // 搜索框 点击事件
           this.$store.commit('modifySearchText',this.searchvalue)
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
    allPriceClick(){
      console.log('进入全部商品列表')
      this.$router.push('commodity')
    },
    itemPriceClcik(id){
      console.log('进入全部商品列表')
      this.$router.push({
        path:'/commodity',
        name:'commodity',
        query:{categoryId:id}
      })
    },
    //调用接口
  AllShopInfo(){
    axios.get('https://www.xxxkeji.com:8081/wx/catalog/index')
        .then(this.handleAllShopInfo)
  },
  handleAllShopInfo(res){
    res = res.data
    console.log(res)
    if(res){
      const data = res
      console.log(data)
      this.categoryList = data.categoryList
    }
  }
  },
  mounted(){
   this.AllShopInfo()
  }
};
</script>

<style lang="less" scoped>
.classification {
  height: 100%;
  background-color: #fff;
  padding-bottom: 50px;
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    padding: 0 0 0 6px;
    border-bottom: 1px solid #ddd;
    .van-icon {
      font-size: 24px;
      color: #888;
    }
    .van-search {
      width: 100%;
    }
  }
  .allclassification {
    font-size: 12px;
    padding: 30px 20px;
    font-weight: 200;
  }
  .van-grid {
    background-color: #fff;
    font-size: 12px;
    .all-icon {
      /deep/ .van-grid-item__content--center {
        justify-content: space-between; 
      }
    }
    .van-grid-item {
      .van-icon {
        font-size: 50px;
        margin-top: 10px;
        color: #888;
      }
      .van-image {
        width: 70px;
        height: 70px;
      }
    }
  }
}
</style>
