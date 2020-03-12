<template>
  <div class="orderSuccess">
    <van-nav-bar title="地址编辑/新增" left-arrow @click-left="onClickLeft" fixed />


<van-address-edit
  :area-list="areaList"
  show-postal
  show-delete
  show-set-default
  show-search-result
  :search-result="searchResult"
  :area-columns-placeholder="['请选择', '请选择', '请选择']"
  @save="onSave"
  @delete="onDelete"
  @change-detail="onChangeDetail"
/>
  </div>
</template>

<script>
import area from '@/api/area.js'
export default {
  name: "wxAddressAdd",
  data() {
    return {
  areaList:area,
      searchResult: []

    }
  },
  created(){
    console.log('areaarea',area)
  },
  methods: {      
          onClickLeft() {
   this.$router.replace("wxAddressList");
    },
  onSave() {
      Toast('save');
    },
    onDelete() {
      Toast('delete');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }];
      } else {
        this.searchResult = [];
      }
    }

}
}
</script>

<style lang="less" scoped>
.van-address-list{
    margin-top:1rem;
}
</style>
