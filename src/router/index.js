import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'

Vue.use(VueRouter)

const routes = [
    // 首页
    {
        path: '/home',
        name: 'home',
        component: Home,
        meta: {
            istabShow: true
        }
    },
    // 分类商品 分类列表
    {
        path: '/classification',
        name: 'classification',
        component: () =>
            import ('../views/classification/index.vue'),
        meta: {
            istabShow: true
        }
    },
    // 分类商品 商品列表
    {
        path: '/commodity',
        name: 'commodity',
        component: () =>
            import ('../views/classification/commodity.vue'),
        meta: {
            istabShow: true
        }
    },
    // 分类商品 商品详情
    {
        path: '/goodsInfo',
        name: 'goodsInfo',
        component: () =>
            import ('../views/classification/goodsInfo.vue'),
    },
    // 分类商品 确认订单
    {
        path: '/order',
        name: 'order',
        component: () =>
            import ('../views/classification/order.vue'),
    },
    // 分类商品 确认订单
    {
        path: '/orderMethod',
        name: 'orderMethod',
        component: () =>
            import ('../views/classification/orderMethod.vue'),
    },
    // 分类商品 支付成功
    {
        path: '/orderSuccess',
        name: 'orderSuccess',
        component: () =>
            import ('../views/classification/orderSuccess.vue'),
    },
    // 分类商品 订单详情
    {
        path: '/orderInfo',
        name: 'orderInfo',
        component: () =>
            import ('../views/classification/orderInfo.vue'),
    },
      // 地址列表
      {
        path: '/wxAddressList',
        name: 'wxAddressList',
        component: () =>
        import ('../views/classification/wxAddressList.vue'),
    },
          // 地址新增编辑
          {
            path: '/wxAddressAdd',
            name: 'wxAddressAdd',
            component: () =>
            import ('../views/classification/wxAddressAdd.vue'),
        },
    // 赚佣教程
    {
        path: '/course',
        name: 'course',
        component: () =>
            import ('../views/course/index.vue'),
        meta: {
            istabShow: true
        }
    },
    // 个人中心
    {
        path: '/about',
        name: 'about',
        component: () =>
            import ('../views/about/index.vue'),
        meta: {
            istabShow: true
        }
    },
    // 个人中心 收益中心
    {
        path: '/revenue',
        name: 'revenue',
        component: () =>
            import ('../views/about/revenue.vue'),
        meta: {
            istabShow: true
        }
    },
    // 个人中心 佣金明细
    {
        path: '/commission',
        name: 'commission',
        component: () =>
            import ('../views/about/commission.vue'),
    },
    // 个人中心 收益明细
    {
        path: '/incomeDetails',
        name: 'incomeDetails',
        component: () =>
            import ('../views/about/incomeDetails.vue'),
        meta: {
            istabShow: true
        }
    },
    // 个人中心 我的邻居
    {
        path: '/neighbor',
        name: 'neighbor',
        component: () =>
            import ('../views/about/neighbor.vue'),
        meta: {
            istabShow: true
        }
    },
    // 个人中心 我的二维码
    {
        path: '/QRcode',
        name: 'QRcode',
        component: () =>
            import ('../views/about/QRcode.vue'),
    },
    // 个人中心 佣金提现
    {
        path: '/withdraw',
        name: 'withdraw',
        component: () =>
            import ('../views/about/withdraw.vue'),
    },
    // 个人中心 余额明细
    {
        path: '/balance',
        name: 'balance',
        component: () =>
            import ('../views/about/balance.vue'),
        meta: {
            istabShow: true
        }
    },
    // 个人中心 二手回收
    // {
    //   path: '/recovery',
    //   name: 'recovery',
    //   component: () => import('../views/about/recovery.vue'),
    // },
    // 个人中心 设置
    {
        path: '/setting',
        name: 'setting',
        component: () =>
            import ('../views/about/setting.vue'),
    },
    // 个人中心 兑换积分
    {
        path: '/integral',
        name: 'integral',
        component: () =>
            import ('../views/about/integral.vue'),
        meta: {
            istabShow: true
        }
    },
    // 个人中心 兑换积分 参与记录
    {
        path: '/record',
        name: 'record',
        component: () =>
            import ('../views/about/record.vue'),
    },
    // 个人中心 绑定手机号
    {
        path: '/bindingTel',
        name: 'bindingTel',
        component: () =>
            import ('../views/about/bindingTel.vue'),
    },
    // 个人中心 我的优惠券
    {
        path: '/discount',
        name: 'discount',
        component: () =>
            import ('../views/about/discount.vue'),
    },
    // 个人中心 充值中心
    {
        path: '/recharge',
        name: 'recharge',
        component: () =>
            import ('../views/about/recharge.vue'),
    },
    // 个人中心 收货地址管理
    {
        path: '/address',
        name: 'address',
        component: () =>
            import ('../views/about/address.vue'),
    },
    // 个人中心 用户协议
    {
        path: '/agreement',
        name: 'agreement',
        component: () =>
            import ('../views/about/agreement.vue'),
    },
    // 个人中心 进入用户财务
    {
        path: '/finance',
        name: 'finance',
        component: () =>
            import ('../views/about/finance.vue'),
    },
    // 个人中心 全部订单
    {
        path: '/allOrder',
        name: 'allOrder',
        component: () =>
            import ('../views/about/allOrder.vue'),
        meta: {
            istabShow: true
        }
    },
    // 个人中心 挂卖中心
    {
        path: '/saleCenter',
        name: 'saleCenter',
        component: () =>
            import ('../views/about/saleCenter.vue'),
        meta: {
            istabShow: true
        }
    },
    // 成为东家
    {
        path: '/goMember',
        name: 'goMember',
        component: () =>
            import ('../components/goMember.vue'),

    },
    //收货地址   新增收货地址
    {
        path: '/addAddress',
        name: 'addAddress',
        component: () =>
            import ('../views/about/addAddress.vue')
    },
    //获取微信收货地址
    {
        path: '/wxAddress',
        name: 'wxAddress',
        component: () =>
            import ('../views/about/wxAddress.vue')
    },
    // 账户充值
    {
        path: '/UserAdd',
        name: 'UserAdd',
        component: () =>
            import ('../views/about/UserAdd.vue')
    },
    // 重定向
    {
        path: '*',
        redirect: '/home'
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router