<template>
  <!-- <div class="bindingTel"> -->
    <!-- <h2> 这是 绑定手机号 页面 </h2> -->
    <!-- <van-nav-bar title="绑定手机号" left-arrow @click-left="onClickLeft" fixed/> -->
    <!-- 输入框组 -->
    <!-- <van-cell-group class="cellgroup"> -->
      <!-- 手机号 -->
      <!-- <van-field
        v-model="phone"
        required
        label="手机号"
        placeholder="请输入手机号"
      /> -->
      <!-- 图形验证 -->
      <!-- <van-field
        v-model="captcha"
        required
        center
        label="图形验证码"
        placeholder="请输入图形验证码"
      >
        <van-image
          slot="button"
          :src="require('../../assets/img/yanzhengma.png')"
          class="captchaimage"
          @click="captchaImageClick"
        />
      </van-field> -->
      <!-- 短信验证 -->
      <!-- <van-field
        v-model="sms"
        required
        center
        label="短信验证码"
        placeholder="请输入5位验证码"
      >
        <van-button
          slot="button"
          plain
          size="small"
          type="default"
          class="smsButton"
          @click="smsButClick"
          :disabled="isSms"
          >{{ isSmsText }}</van-button
        >
      </van-field>
      <!-- 密码 -->
      <!-- <van-field
        v-model="password"
        required
        type="password"
        label="密码"
        placeholder="请输入您的登录密码"
      /> -->
      <!-- 确认密码 -->
      <!-- <van-field
        v-model="confirmPassword"
        required
        type="password"
        label="确认密码"
        placeholder="请输入确认登录密码"
      />
    </van-cell-group> -->
    <!-- 立即绑定 按钮 -->
    <!-- <div class="but-box">
      <van-button
        type="primary"
        size="large"
        @click="bindingButClick"
        color="#ff5555"
        >立即绑定</van-button
      >
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "bindingTel",

  data() {
    return {
      phone: "", // 手机号
      captcha: "", //图形验证码
      sms: "", //短信验证码
      password: "", //密码
      confirmPassword: "", //确认密码
      isSms: false, // 发送短信验证码按钮 开关
      isSmsText: "发送验证码", // 发送短信验证码按钮 文本
      num: 60 //倒计时
    };
  },

  methods: {
    // 返回
    onClickLeft() {
      this.$router.go(-1);
    },
    // 获取图形验证码
    captchaImageClick() {
      console.log("获取图形验证码");
    },
    // 获取短信验证码
    smsButClick() {
      console.log("获取短信验证码");
      this.num = 60;
      this.isSms = true;
      var times = setInterval(() => {
        this.isSmsText = `${this.num}s后重新发送`;
        if (this.num == 0) {
          clearInterval(times);
          this.isSmsText = "发送验证码";
          this.isSms = false;
        }
        this.num--;
      }, 1000);
    }, -->
    <!-- // 立即绑定
    // bindingButClick() {
    //   var obj = {
    //     phone: this.phone, //手机号
    //     captcha: this.captcha, //图形验证
    //     sms: this.sms, //短信验证
    //     password: this.password, //密码
    //     confirmPassword: this.confirmPassword //确认密码
    //   };
    //   var phoneReg = /^1(3[0-9]|4[0-9]|5[0-9]|6[0-9]|7[0-9]|8[0-9]|9[0-9])\d{8}$/;
    //   if (phoneReg.test(this.phone)) {
    //     var captchaReg = /^\d{4}$/;
    //     if (captchaReg.test(this.captcha)) {
    //       var smsReg = /^\d{5}$/;
    //       if (smsReg.test(this.sms)) {
    //         var passwordReg = /^[a-zA-Z]\w{5,17}$/;
    //         if (passwordReg.test(this.password)) {
    //           if (this.password == this.confirmPassword) {
    //             console.log("立即绑定", obj);
    //           } else {
    //             Toast({ -->
    <!-- //               forbidClick: true,
    //               message: "确认密码有误"
    //             });
    //           }
    //         } else {
    //           Toast({
    //             forbidClick: true,
    //             message: "以字母开头,6-18位密码"
    //           });
    //         }
    //       } else {
    //         Toast({
    //           forbidClick: true,
    //           message: "请输入5位图形验证码"
    //         });
    //       }
    //     } else {
    //       Toast({
    //         forbidClick: true,
    //         message: "请输入4位图形验证码"
    //       });
    //     }
    //   } else {
    //     Toast({
    //       forbidClick: true,
    //       message: "请输入11位手机号"
    //     });
    //   }
      // Toast.clear()  关闭提示
//     }
//   }
// };
// </script>

// <style lang="less" scoped>
// @import url("../../assets/style/color.less");
// .bindingTel {
//   background-color: @bgColor;
//   height: 100%;
//   padding-top: 47px;
  // 头部
  // .van-nav-bar {
  //    border-bottom: solid 1px #ccc;
  //   .van-icon {
  //     color: #000;
  //   }
  // }
  // 输入框组
  // .cellgroup {
  //   margin-top: 5px;
    // 图形验证
  //   /deep/ .van-field__button {
  //     display: flex;
  //     align-items: center;
  //     justify-content: center;
  //     .captchaimage {
  //       width: 80px;
  //       height: 30px;
  //     }
  //   }
  // }
  // 绑定按钮
//   .but-box {
//     width: 100%;
//     padding: 0 20px;
//     box-sizing: border-box;
//     margin-top: 20px;
//     .van-button {
//       height: 40px;
//       line-height: 40px;
//     }
//   }
// }
// </style> -->
