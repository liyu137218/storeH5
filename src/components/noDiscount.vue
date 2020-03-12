<template>
  <div class="noDiscount">
    <!-- <h2> 这是 没有优惠券 页面 </h2> -->
    <!-- <div class="goButDiscount">
      <van-icon name="point-gift-o" />
      <span>赶紧去领券中心看看更多优惠券~</span>
    </div> -->
    <div class="iconDiscount">
      <van-icon name="info-o" />
    </div>
    <div class="textDiscount">
      您还没有优惠券~
    </div>
  </div>
</template>

<script>
export default {
  name: "noDiscount",

  data() {
    return {};
  },

  methods: {}
};
</script>

<style lang="less" scoped>
.noDiscount {
  color: #888;
  text-align: center;
  margin-top: 10px;
  padding:0 30px;
  font-size: 14px;
  .goButDiscount {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #888;
    border-radius: 3px;
    padding:8px 4px;
    .span{
      margin-left: 10px;
    }
  }
  .iconDiscount {
    padding:30px 0;
    .van-icon {
      font-size: 70px;
    }
  }
  // .textDiscount {
  // }
}
</style>
