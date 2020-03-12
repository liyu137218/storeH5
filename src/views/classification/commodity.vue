<template>
  <div class="commodity">
    <!-- <h2> 这是 商品 页面 </h2> -->
    <div class="header">
      <van-icon name="arrow-left" @click="$router.go(-1)" />
      <van-search
        v-model="searchvalue"
        placeholder="输入关键字..."
        @input="inputSearch"
      />
      <van-icon :name="iconName" @click="switchClick" />
    </div>
    <!-- 导航 -->
    <div class="nav">
      <div class="nav-1 nav-item" @click="NavClick1">
        <span
          class="nav-text"
          :class="{ activeColor: sortState == 0 ? true : false }"
          >综合</span
        >
      </div>
      <div class="nav-2 nav-item" @click="NavClick2">
        <span
          class="nav-text"
          :class="{ activeColor: sortState == 1 ? true : false }"
          >销量</span
        >
      </div>
      <div class="nav-3 nav-item" @click="NavClick3">
        <div class="nav-text nav-text-3">
          <div
            class="nav-text-title"
            :class="{
              activeColor: sortState == 2 || sortState == 3 ? true : false
            }"
          >
            价格
          </div>
          <!-- 升序 -->
          <div class="nav-3-icons">
            <van-icon
              class="arrow-up"
              name="arrow-up"
              :class="{ activeColor: sortState == 2 ? true : false }"
              @click="sortUp()"
            />
            <!-- 降序 -->
            <van-icon
              class="arrow-down"
              name="arrow-down"
              :class="{ activeColor: sortState == 3 ? true : false }"
              @click="sortDown()"
            />
          </div>
        </div>
      </div>
      <div class="nav-4 nav-item" @click="NavClick4">
        <div
          class="nav-text"
          :class="{ activeColor: sortState == 4 ? true : false }"
          @click.stop="ShowHidden = !ShowHidden"
        >
          筛选
        </div>
      </div>
      <!-- 筛选项内容 -->
      <div class="shaixuan" v-if="ShowHidden" @click.stop="">
        <ul class="shaixuan-list">
          <li
            class="list"
            v-for="(item, index) in list"
            :key="index"
            @click="changeStyle(index)"
            :class="{ active: checkedGroup.indexOf(index) > -1 }"
          >
            {{ item }}
          </li>
        </ul>
        <ul class="fenlei-list">
          <li
            class="item"
            v-for="(item, index) in price"
            :key="index"
            @click="changePrice(index)"
            :class="{ Active: checkedPrice.indexOf(index) > -1 }"
          >
            {{ item }}
          </li>
        </ul>

        <div class="bottom">
          <span>取消全选</span>
          <span>确认</span>
        </div>
      </div>
    </div>

    <!-- 商品展示列表 -->
    <div class="productList  demo">
      <div
        class="productList-item"
        :class="{ active: iconNameState == 1 ? true : false }"
        v-for="item of List"
        :key="item.id"
        @click="productInfoClick(item.id)"
      >
        <div class="item-img">
          <van-image :src="item.picUrl"></van-image>
        </div>

        <div class="item-info">
          <div class="item-text">
            {{ item.name }}
          </div>
          <div class="item-costPrice">{{ item.retailPrice }}</div>
          <div class="item-price">{{ item.counterPrice }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import axios from "axios";
export default {
  name: "commodity",
  data() {
    return {
      searchvalue: "", // 搜索 关键字
      iconName: "apps-o", // 切换排列模式
      iconNameState: 0, // 切换排列模式 状态 0 网格 1 列表
      sortState: 0, // 排序状态
      show: false,
      finished: false,
      ShowHidden: false, //控制显示或影藏
      activeClass: -1, // 0为默认选择第一个，-1为不选择
      list: ["新品上市", "热卖商品", "促销商品", "卖家包邮", "限时抢购"], //商品雷翔
      checkedGroup: [], //商品类型
      price: [
        "选择分类",
        "99元",
        "198元",
        "396元",
        "792元",
        "1584元",
        "3168元"
      ],
      checkedPrice: [],
      List: [], //所有商品
      categoryId: null //
    };
  },
  created() {
    // console.log(this.searchText)
    if (this.searchText != "") {
      this.searchvalue = this.searchText;
      console.log("执行搜索");
    }
  },
  computed: {
    ...mapState(["searchText"]) // 获取当前的状态
  },
  methods: {
    // 实现商品筛选
    changeStyle(index) {
      if (this.checkedGroup.indexOf(index) == -1) {
        this.checkedGroup.push(index);
      } else {
        var spliceIndex = this.checkedGroup.indexOf(index);
        this.checkedGroup.splice(spliceIndex, 1);
      }
    },
    // 实现价格筛选
    changePrice(index) {
      if (this.checkedPrice.indexOf(index) == -1) {
        this.checkedPrice.push(index);
      } else {
        var spliceIndex = this.checkedPrice.indexOf(index);
        this.checkedPrice.splice(spliceIndex, 1);
      }
    },

    // 监听搜索框的内容 事件
    inputSearch() {
      if (this.searchvalue == "") {
        this.$store.commit("modifySearchText", "");
        console.log("执行搜索");
      }else{
        	this.$axios.get('https://www.xxxkeji.com:8081/wx/goods/list',
    	{
    		params:{keyword:this.searchvalue}
    	}
    	).then(res=>{
    		console.log(res)
    		this.List=res.data.list
    	})
      }
    },

    switchClick() {
      if (this.iconName == "apps-o") {
        this.iconName = "notes-o";
        this.iconNameState = 1;
      } else {
        this.iconName = "apps-o";
        this.iconNameState = 0;
      }
    },
    NavClick1() {
      this.sortState = 0;
      console.log("综合排序");
    },
    NavClick2() {
      this.sortState = 1;
      console.log("销量排序");
    },
    NavClick3() {
      this.list.sort((a, b) => {
        //排序基于的数据
        a.counterPrice - b.counterPrice;
      });
      if (this.sortState != 2) {
        this.sortState = 2;
        console.log("价格排序 小-大");
      } else {
        this.sortState = 3;
        console.log("价格排序 大-小");
      }
    },
    NavClick4() {
      this.sortState = 4;
    },

    // 价格升序
    sortUp() {
      productInfoClick;
      console.log("价格升序");
    },
    //价格降序
    sortDown() {
      console.log("价格将序");
    },
    // 进入商品详情
    productInfoClick(Id) {
      this.$router.push({
        path: "/goodsInfo",
        name: "goodsInfo",
        query: { id: Id }
      });
    },
    //点击改变背景颜色
    change() {
      console.log("点击了");
    },
    HiddenClick() {
      // 点击筛选事件，影藏需要影藏的区域
      this.ShowHidden = false;
    },
    //调用接口
    AllShopInfo() {
      this.$axios
        .get("https://www.xxxkeji.com:8081/wx/goods/list")
        .then(this.handleAllShopInfo);
    },
    handleAllShopInfo(res) {
      res = res.data;
      console.log(res);
      if (res) {
        const data = res;
        console.log(data);
        this.List = data.list;
      }
    },

    //根据id调用接口
    AllShopId() {
      this.$axios
        .get("https://www.xxxkeji.com:8081/wx/goods/list", {
          params: {
            id: this.$route.query.categoryId
          }
        })
        .then(this.handleAllShopId);
    },
    handleAllShopId(res) {
      console.log("handleAllShopId", res);
      let lists = res.data.list;
      // this.List = res.data.list
      if (this.categoryId) {
        lists = [];
        res.data.list.map(item => {
          //判断价格等于id
          if (item.counterPrice === this.categoryId) {
            lists.push(item);
          }
        });
      }
      this.List = lists;
      console.log("lists", lists);
    },
    //根据关键字搜索名字
    AllKeywordInfo(){
      this.$axios.get('https://www.xxxkeji.com:8081/wx/goods/list',{
        params:{
          keyword : this.$route.query.keyword
        }
      })
      .then(this.handleKwyword);
    },
    handleKwyword(res){
      console.log('handleKwyword',res)
      let keys = res.data.list
      if(this.keyword){
        keys=[];
        res.data.list.map(item =>{
          //判断keyword=name
          if(item.name === this.keyword){
            keys.push(item);
          }
        });
      }
      this.List = keys;
      console.log('keys',keys)
    }
    
  },
  mounted() {
    this.AllShopInfo();
    this.AllShopId();
    this.AllKeywordInfo();
    document.addEventListener("click", this.HiddenClick);
    let flag = this.$route.query.categoryId;
    if (flag) {
      console.log("1111");
    switch (flag) {
      case 1036007:
        this.categoryId = 99;
        break;
      case 1036008:
        this.categoryId = 199;
        break;
      case 1036009:
        this.categoryId = 299;
        break;
      case 1036010:
        this.categoryId = 399;
        break;
      case 1036011:
        this.categoryId = 499;
        break;
      case 1036012:
        this.categoryId = 599;
        break;
      default:
        this.categoryId = 0.1;
        break;
    }
    }
  }
};
</script>

<style lang="less" scoped>
@import url("../../assets/style/color.less");
.commodity {
  height: 100%;
  // background-color: #fff;
  padding-bottom: 50px;
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    padding: 0 6px;
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
    .van-icon {
      font-size: 24px;
      color: #888;
    }
    .van-search {
      width: 100%;
    }
  }
  .activeColor {
    color: red;
  }
  .nav {
    display: flex;
    width: 100%;
    height: 50px;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
    position: fixed;
    top: 50px;
    left: 0;
    z-index: 9;
    .nav-item {
      width: 25%;
      text-align: center;
      .nav-text {
        display: block;
        width: 100%;
      }
    }
    .nav-1 {
      border-right: 1px solid #ccc;
    }
    .nav-2 {
      border-right: 1px solid #ccc;
    }
    .nav-3 {
      border-right: 1px solid #ccc;
      .nav-text-3 {
        display: flex;
        justify-content: center;
        align-items: center;
        .nav-3-icons {
          margin-left: 2px;
          display: flex;
          flex-direction: column;
          font-size: 8px;
        }
      }
    }
    .nav-4 {
      .nav-text {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .productList {
    background-color: @bgColor;
    padding-top: 100px;
    padding-bottom: 50px;
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
.jiange span {
  margin: 10px 0;
}
.fenlei {
  color: #333;
  font-size: 14px;
  padding-top: 10px;
}
.jiange {
  display: flex;
  justify-content: space-around;
}
.van-tag {
  color: #333;
  border: 1px solid orangered;
}
.Sure {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  color: #333;
}
.Active {
  background-color: #eee;
}
.shaixuan {
  z-index: 1;
  overflow: hidden;
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  background: #fff;
}
.shaixuan-list {
  display: flex;
  flex-flow: wrap;
}
.list {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33%;
  margin: 0 0 5px 0;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 20px;
  box-sizing: border-box;
}
.item {
  height: 20px;
  line-height: 20px;
  text-align: center;
  box-sizing: border-box;
  margin: 10px 0;
}
.bottom {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  border-top: 1px solid #ccc;
  color: #333;
  font-size: 16px;
  padding: 5px;
}
.active {
  color: red !important;
}
.Active {
  background: #ccc;
}
</style>
