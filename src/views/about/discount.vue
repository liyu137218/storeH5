<template>
  <div class="discount">
    <!-- <h2> 这是 我的优惠券 页面 </h2> -->
    <van-nav-bar
      title="我的优惠券"
      left-arrow
      @click-left="onClickLeft"
      fixed
    />
    <!-- tab -->
    <van-tabs v-model="active">
      <van-tab title="未使用">
        <div>
          <noDiscount v-if="discountList.length <= 0"></noDiscount>
        </div>
      </van-tab>
      <van-tab title="已使用">
        <div>
          <noDiscount v-if="discountList.length <= 0"></noDiscount>
        </div>
      </van-tab>
      <!-- <van-tab title="已过期">
        <div>
          <noDiscount v-if="discountList.length <= 0"></noDiscount>
        </div>
      </van-tab> -->
    </van-tabs>
  </div>
</template>

<script>
import noDiscount from "../../components/noDiscount";
export default {
  name: "discount",

  data() {
    return {
      active: 0,
      discountList: []
    };
  },

  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  components: {
    noDiscount
  }
};
</script>

<style lang="less" scoped>
@import url("../../assets/style/color.less");
.discount {
  height: 100%;
  background-color: @bgColor;
  padding-top: 47px;
  .van-nav-bar {
    background-color: @bgColor;
    border-bottom: solid 1px #ccc;
    .van-icon {
      color: #000;
    }
  }
}
</style>
