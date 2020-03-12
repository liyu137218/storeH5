<template>
  <div class="setting">
    <!-- <h2> 这是 设置 页面 </h2> -->
    <!-- 会员中心页面 -->
          <van-nav-bar
             title="会员资料"
             left-arrow
             @click-left="onClickLeft"
             fixed
          />
          <!-- 头像 -->
            <div class="heder_image">
              <span>头像</span>
              <span>
              <van-image
                  round
                  width="30px"
                  height="30px"
                  src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
              </span>
            </div>
          <van-cell-group>
              <van-field
                v-model="phone"
                required
                label="门牌号"
                placeholder="请输入门牌号"

              />
                <van-field
          v-model="phone"
          required
          label="新会员组"
          placeholder="是"
        />
          <van-field
          v-model="phone"
          required
          label="修改昵称"
          placeholder="请输入新的昵称"
        />
         <van-field
          v-model="phone"
          required
          label="绑定手机号"
          placeholder="请输入手机号"
        />
         <van-field
          v-model="phone"
          required
          label="姓名"
          placeholder="请输入姓名"   
        />
        <!-- 输入任意文本 -->
          <van-field v-model="text" label="微信号"  placeholder="请输入微信号"/>
        <van-cell-group>
           <van-cell title="选择出生日期" 
           :value="date"
            @click="show = true"
            formatter="date"  
            />
            <van-calendar 
            v-model="show" 
            @confirm="onConfirm"
            :min-date="minDate"
            :max-date="maxDate"
            :style="{ height: '500px' }"
             />
        </van-cell-group>
        </van-cell-group>
          <van-button type="danger" block size="small" class="conform" @click="sure">确认修改</van-button>
  </div>
</template>

<script>
import Area from './Area'
export default {
  name: 'setting',
  data () {
    return {
      phone:'',
      text:'',
      tel:'',
      digit:'',
      value1:'',
      value2:'',
      date: '例如2020/1/1',
      show: false,
      minDate: new Date(2010, 1, 1),
      maxDate: new Date(),
      
      
    }
  },

  methods: {
      onClickLeft() {
      this.$router.replace('about')
    },
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    },
   sure(){
     this.$router.replace('about')
   }
  }
}
</script>

<style lang='less' scoped>
   .setting {
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
    .conform{
      margin-top: 10px;
    }
    .heder_image{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 2px 10px;
    }
</style>
