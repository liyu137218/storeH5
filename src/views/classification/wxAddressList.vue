<template>
  <div class="orderSuccess">
    <van-nav-bar title="地址列表" left-arrow @click-left="onClickLeft" fixed />
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script>
export default {
  name: "wxAddressList",
  data() {
    return {
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室"
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号"
        }
      ]
    };
  },
  methods: {
    onClickLeft() {
      this.$router.replace("order");
    },
    onAdd() {
      this.$router.replace("wxAddressAdd");
    },
    onEdit(item, index) {
      this.$router.replace("wxAddressAdd");
    }
  }
};
</script>

<style lang="less" scoped>
.van-address-list {
  margin-top: 1rem;
}
</style>
