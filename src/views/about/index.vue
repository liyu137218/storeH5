<template>
  <div class="about">
    <!-- <h2>  about  这是index.vue页面 </h2> -->
    <!-- 登录注册页面 -->
    <div class="longin-box" v-if="false">
      <!-- 头部背景 -->
      <div class="header">
        <van-image fit="cover" :src="bgi" />
        <div class="logo">
          <van-image fit="cover" :src="logoi" />
        </div>
        <div class="name">
          <span>抖一斗</span>
        </div>
      </div>
      <!-- 账号密码 -->
      <van-cell-group class="field">
        <van-field
          v-model="phone"
          left-icon="contact"
          placeholder="请输入手机号"
        />
        <van-field
          v-model="password"
          clearable
          left-icon="apps-o"
          placeholder="请输入密码"
        >
          <div class="passwordText" slot="button" @click="forgetPasswordClick">
            忘记密码
            <van-icon name="arrow" class="icon" />
          </div>
        </van-field>
      </van-cell-group>
      <!-- 登录按钮 -->
      <van-button type="info" round size="large" class="loginbut"
        >立即登录</van-button
      >
      <!-- 立即注册 -->
      <div class="register">
        <p>还没有账号?<a href="#" class="goRegister"> 立即注册</a></p>
      </div>
    </div>
    <!-- 登录后的页面 -->
    <div class="about-box" v-else>
      <!-- 头部背景区 -->
      <div class="bgsTop">
        <!-- 余额 -->
        <div class="balance">
          <div class="balance-top">余额</div>
          <div class="balance-in" style="color:red">0000000000</div>
          <div class="balance-bottom" @click="balanceClick">提现</div>
        </div>
        <!-- 头像 -->
        <div class="headPortrait">
          <!-- 头像 -->
          <div class="headPortrait-top" @click="settingClick">
            <van-image
              round
              src="https://img.yzcdn.cn/vant/cat.jpeg"
              fit="cover"
            />
          </div>
          <!-- 名称 -->
          <div class="headPortrait-in">昵昵称昵称昵称昵称称</div>
          <!-- 等级头衔 -->
          <div class="headPortrait-bottom">[普通等级]</div>
        </div>
        <!-- 积分 -->
        <div class="integral">
          <div class="integral-top">积分</div>
          <div class="integral-in" style="color:red">0</div>
          <div class="integral-bottom" @click="integralClick">兑换</div>
        </div>
        <!-- 设置 -->
        <van-icon name="setting-o" class="setting-icon" @click="settingClick" />
      </div>
      <!-- 主体内容 -->
      <div class="center">
        <!-- 投资明细 -->
        <!-- <van-cell title="投资明细" icon="gold-coin" class="detailed-title" /> -->
        <div class="detailed-title">
          <van-icon name="points" />
          <span>投资明细</span>
        </div>
        <!-- 投资明细 金额 -->
        <div class="detailed-center">
          <div class="cash">
            <div class="detailed-num">￥0.00</div>
            <div class="detailed-text">现金投入</div>
          </div>
          <div class="income">
            <div class="detailed-num">￥0.00</div>
            <div class="detailed-text">提现收入</div>
          </div>
          <div class="consumption">
            <div class="detailed-num">￥0.00</div>
            <div class="detailed-text">订单消费</div>
          </div>
          <div class="profit">
            <div class="detailed-num">￥0.00</div>
            <div class="detailed-text">最终收益</div>
          </div>
        </div>
        <!-- 绑定手机号 -->
        <!-- <van-cell title="绑定手机号" label="如果您用手机号注册过会员或您想通过微信外购物请绑定您的手机号码" /> -->
        <!-- <div class="bindingTel" @click="bindingTelClick">
          <div class="bindingTel-top">
            <van-icon name="phone-o" />
            <span>绑定手机号</span>
          </div>
          <div class="bindingTel-bottom">
            如果您用手机号注册过会员或您想通过微信外购物请绑定您的手机号码
          </div>
          <van-icon name="arrow" class="bindingTel-icon" />
        </div> -->
        <!-- 我的订单 1-->
        <van-cell
          title="我的订单"
          icon="orders-o"
          is-link
          value="查看全部"
          class="cell"
          @click="allOrderClick(0)"
        />
        <!-- 我的订单 2 -->
        <van-grid class="goodsinfo">
          <van-grid-item
            icon="coupon-o"
            text="待付款"
            @click="allOrderClick(1)"
          />
          <van-grid-item
            icon="cart-circle-o"
            text="待发货"
            @click="allOrderClick(2)"
          />
          <van-grid-item
            icon="gift-card-o"
            text="待收货"
            @click="allOrderClick(3)"
          />
          <van-grid-item
            icon="balance-o"
            text="挂卖中心"
            @click="allOrderClick(4)"
          />
        </van-grid>
        <!-- 我的功能 -->
        <van-grid :column-num="3" class="aboutinfo">
          <van-grid-item
            v-for="(item, index) in iconUrl"
            :key="index"
            @click="aboutinfoClick(item.url)"
          >
            <van-image :src="item.img" width="50" height="50" />
            <span class="nametext">{{ item.name }}</span>
          </van-grid-item>
        </van-grid>
        <!-- 我的批发券 -->
        <van-cell
          title="我的优惠券"
          icon="balance-pay"
          is-link
          value="查看"
          class="cell"
          @click="discountClick"
        />
        <!-- 充值中心 -->
        <van-cell
          title="充值中心"
          icon="gold-coin"
          is-link
          value="点击"
          class="cell"
          @click="rechargeClick"
        />
        <!-- 收货地址管理 -->
        <van-cell
          title="收货地址管理"
          icon="location"
          is-link
          value="查看"
          class="cell address"
          @click="addressClick"
        />
        <!-- 用户协议 -->
        <van-cell
          title="用户协议"
          icon="question"
          is-link
          value="查看"
          class="cell"
          @click="agreementClick"
        />
        <!-- 用户财务 -->
        <van-cell
          title="用户财务"
          icon="gold-coin-o"
          is-link
          value="查看"
          class="cell"
          @click="financeClick"
        />
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters, mapState } from 'vuex';
export default {
  name: "about",

  data() {
    return {
      bgi: require("../../assets/img/sH97aCU7rA6CC611ucuG96Vc6xxVcm.png"),
      logoi: require("../../assets/img/auxmjXEKlaXmArsGuziLajR2R2xS2t.png"),
      iconUrl: [
        {
          id: 1,
          name: "收益中心",
          img: require("../../assets/img/icon-1.png"),
          url: "revenue"
        },
        {
          id: 2,
          name: "我的邻居",
          img: require("../../assets/img/icon-2.png"),
          url: "neighbor"
        },
        {
          id: 3,
          name: "我的二维码",
          img: require("../../assets/img/icon-3.png"),
          url: "QRcode"
        },
        {
          id: 4,
          name: "佣金提现",
          img: require("../../assets/img/icon-4.png"),
          url: "withdraw"
        },
        {
          id: 5,
          name: "余额明细",
          img: require("../../assets/img/icon-5.png"),
          url: "balance"
        },
        {
          id: 6,
          name: "二手回收",
          img: require("../../assets/img/icon-6.png"),
          url: "recovery"
        }
      ],
      phone: "",
      password: ""
    };
  },
  // 生命周期
  created() {
    this.init();
  },
  methods: {
    // 初始化
    init() {
      // 网页授权 保存code
      // this.empower();
    },
    // 网页授权
    empower() {
      // 获取 微信公众号的appid
      var appid = "wxb225ef8edffc7fde";
      // 获取 该公众号的回调授权网页
      var redirect_uri = "http%3A%2F%2Fwww.wl.51cjkj.com%2F";
      // 重定向地址
      location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${redirect_uri}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`;
      // 保存地址栏code
      // this.GetRequest()
      // this.getUrlParams()
      // localStorage
      alert(window.location.href);
      localStorage.setItem("key", JSON.stringify("11111"));
    },
    GetRequest() {
      var url = location.search; //获取url中"?"符后的字符串
      var theRequest = new Object();
      if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
          theRequest[strs[i].split("=")[0]] = strs[i].split("=")[1];
        }
      }
      return theRequest;
    },
    //用于解析url 并获取name对应的值
    getUrlParams(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); //定义正则表达式
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    },
    // 忘记密码
    forgetPasswordClick() {
      console.log("去忘记密码");
    },
    // 进入设置
    settingClick() {
      console.log("进入设置");
      this.$router.push("setting");
    },
    // 进入余额提现
    balanceClick() {
      console.log("进入余额提现");
      this.$router.push("commission");
    },
    // 进入兑换积分
    integralClick() {
      console.log("进入兑换积分");
      this.$router.push("integral");
    },
    // 进入绑定手机号
    bindingTelClick() {
      console.log("进入绑定手机界面");
      this.$router.push("bindingTel");
    },
    // 进入全部订单
    allOrderClick(val) {
      this.$store.commit("modifyAllOrderNum", val); // 修改 进入订单的状态
      if (val == 0) {
        console.log("进入全部订单");
        this.$router.push("allOrder");
      } else if (val == 1) {
        console.log("进入全部订单(待付款)");
        this.$router.push("allOrder");
      } else if (val == 2) {
        console.log("进入全部订单(待发货)");
        this.$router.push("allOrder");
      } else if (val == 3) {
        console.log("进入全部订单(待收货)");
        this.$router.push("allOrder");
      } else if (val == 4) {
        console.log("进入全部订单(挂卖中心)");
        this.$router.push("saleCenter");
      }
    },
    // 进入我的功能
    aboutinfoClick(val) {
      console.log(val);
      if (val == "recovery") {
        this.allOrderClick(2);
      } else {
        this.$router.push(val);
      }
    },
    // 进入我的优惠券
    discountClick() {
      console.log("进入我的优惠券");
      this.$router.push("discount");
    },
    // 进入充值中心
    rechargeClick() {
      console.log("进入充值中心");
      this.$router.push("recharge");
    },
    // 进入收货地址管理
    addressClick() {
      console.log("进入收货地址管理");
      this.$router.push("address");
    },
    // 进入用户协议
    agreementClick() {
      console.log("进入用户协议");
      this.$router.push("agreement");
    },
    // 进入用户财务
    financeClick() {
      console.log("进入用户财务");
      this.$router.push("finance");
    }
  }
};
</script>

<style lang="less" scoped>
@import url("../../assets/style/color.less");
.about {
  padding: 0 0 50px;
  // 登录页面
  .longin-box {
    // 头部
    .header {
      position: relative;
      .logo {
        width: 100px;
        height: 100px;
        position: absolute;
        top: 40%;
        margin-top: -50px;
        left: 50%;
        margin-left: -50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #fff;
        border-radius: 50%;
        .van-image {
          width: 95%;
          height: 95%;
          border-radius: 50%;
          overflow: hidden;
        }
      }
      .name {
        display: block;
        width: 100%;
        font-size: 24px;
        color: #fff;
        position: absolute;
        top: 70%;
        left: 0;
      }
    }
    // 输入框
    .field {
      .van-cell {
        margin-top: 10px;
      }
      .passwordText {
        color: #888;
        display: flex;
        align-items: center;
      }
    }
    // 登录按钮
    .loginbut {
      width: 90%;
      height: 40px;
      line-height: 40px;
      margin-top: 20px;
      background: #42afd0;
    }
    // 立即注册
    .register {
      font-size: 16px;
      height: 65px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #888;
      .goRegister {
        color: #42afd0;
      }
    }
  }
  // 我的页面
  .about-box {
    // 头部区域
    .bgsTop {
      position: relative;
      width: 100%;
      height: 150px;
      background-color: #ffd74c;
      border-radius: 0 0 10% 10%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 30px;
      box-sizing: border-box;
      color: #fdfdfd;
      // 余额
      .balance {
        width: 20%;
        flex: none;
        margin-top: -20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .balance-in {
          margin: 5px;
        }
        .balance-bottom {
          border: 1px solid #fff;
          border-radius: 10px;
          padding: 3px 10px;
          box-sizing: border-box;
        }
      }
      // 头像
      .headPortrait {
        width: 60%;
        flex: none;
        margin-top: -20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .headPortrait-top {
          background-color: #fff;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          .van-image {
            width: 95%;
            height: 95%;
          }
        }
        .headPortrait-in {
          margin-top: 5px;
        }
        .headPortrait-bottom {
          margin-top: 5px;
        }
      }
      // 积分
      .integral {
        width: 20%;
        flex: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: -20px;
        .integral-in {
          margin: 5px;
        }
        .integral-bottom {
          border: 1px solid #fff;
          border-radius: 10px;
          padding: 3px 10px;
          box-sizing: border-box;
        }
      }
      // 设置
      .setting-icon {
        position: absolute;
        top: 10px;
        right: 10px;
      }
    }
    // 主体部分
    .center {
      background-color: @bgColor;
      // 明细 标题
      .detailed-title {
        background-color: #fff;
        display: flex;
        align-items: center;
        font-size: 14px;
        padding: 13px 16px 3px;
        span {
          text-indent: 3px;
        }
      }
      // 明细 内容
      .detailed-center {
        background-color: #fff;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 0 16px;
        box-sizing: border-box;
        height: 50px;
        .detailed-num {
          font-weight: 600;
        }
        .detailed-text {
          margin-top: 5px;
          color: #777;
        }
      }
      // 绑定手机
      .bindingTel {
        background-color: #fff;
        margin: 10px 0;
        padding: 10px 16px;
        box-sizing: border-box;
        position: relative;
        color: #888;
        .bindingTel-top {
          display: flex;
          align-items: center;
          font-size: 14px;
          padding: 3px 0;
          span {
            color: red;
            text-indent: 3px;
          }
        }
        .bindingTel-bottom {
          margin-top: 3px;
          padding: 2px 16px;
          line-height: 16px;
          font-size: 12px;
        }
        .bindingTel-icon {
          position: absolute;
          top: 40%;
          right: 16px;
          width: 16px;
          height: 24px;
          &::before {
            width: 16px;
            height: 24px;
            font-size: 16px;
            line-height: 24px;
          }
        }
      }
      // 单元格
      .cell {
        color: #888;
      }
      // 我的订单2
      .goodsinfo {
        color: #888;
        font-weight: 200;
      }
      // 我的功能
      .aboutinfo {
        font-weight: 200;
        .nametext {
          margin-top: 10px;
        }
      }
      // 管理地址
      .address {
        margin-top: 10px;
      }
    }
  }
}
</style>
