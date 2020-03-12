
<template>
   <div class="bindingTel">
        <div >
            <van-nav-bar
              title="新建地址"
              left-arrow
              @click-left="onClickLeft"
              fixed
            />
        </div>
        <van-address-edit
        :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
      />
   </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  name: "bindingTel",
  data() {
    return {   
      searchResult: [],
      areaList:{
      province_list: {
        110000: '北京市',
        120000: '天津市'
      },
      city_list: {
        110100: '北京市',
        110200: '县',
        120100: '天津市',
        120200: '县'
      },
      county_list: {
        110101: '东城区',
        110102: '西城区',
        110105: '朝阳区',
        110106: '丰台区',
        120101: '和平区',
        120102: '河东区',
        120103: '河西区',
        120104: '南开区',
        120105: '河北区',
      }
          }
        }
  },
  methods: {
    onSave() {
      Toast('save');
      this.$store.commit('modifyAdressText',this.searchResult)
      consol.log(this.searchResult)
      this.$router.replace('address')
    },
    onDelete() {
      Toast('delete');
    },
    onClickLeft(){
      this.$router.replace('address')
    },
    onSave(content){
      this.$router.replace('address')
      // this.$router.push({path:'/address')
      console.log(content)
    }
  }

}
</script>

<style lang="less" scoped>
    .bindingTel {
        background-color:#f3f3f3;
        height: 100%;
        padding-top: 47px;
    }
    .van-nav-bar{
       background-color:#f3f3f3;
       border-bottom: solid 1px #ccc
    }
    .van-nav-bar .van-icon {
       color: #000;
    }
    .butonColor{
        margin-top: 10px;
    }
    
</style>