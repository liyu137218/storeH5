<template>
  
    <div>
        
            <van-field readonly required clickable label="选择地区" :value="valueArea" placeholder="请选择所在地区" @click="bindShow" />
 
        <!--选择省市区-->
        <van-popup v-model="showArea" position="bottom" :style="{ height: '40%' }">
            <van-area :area-list="areaList" @confirm="onAreaConfirm" @cancel="bindCancel" />
        </van-popup>
 
       
    </div>
</template>
 
<script>
  import areaFile from '../../api/area'
  export default {
       name: 'Area',
      data() {
        return {
            areaList: AeraInfo, //引用地区信息
            showArea: false,
            valueArea: '', //地区值
            arrArea: [], //存放地区数组
        }
    },
    methods: {
        bindShow(){
            this.showArea= true;
        },
        bindCancel(){
            this.showArea= false;
        },
        //地区选择
        onAreaConfirm(val) {
            this.showArea = false;
            this.arrArea = val;
            var addrInfo = val[0].name + '-' + val[1].name + '-' + val[2].name;
            this.valueArea = addrInfo
        },
    }

  }
</script>
 
<style>
</style>