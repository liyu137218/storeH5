wx.login({
    success(res) {
        console.log(res.code)

        ch
        if (res.code) {
            //发起网络请求
            wx.request({
                url: 'https://127.0.0.1:18080/wx/login',
                method: "POST",
                header: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                data: {
                    code: res.code
                },
                success(res) {
                    if (res.data.status == 200) {
                        let ticket = res.data.ticket;
                        //保存到客户端
                        wx.setStorage({
                            key: 'LOGIN',
                            data: ticket
                        })
                    } else {
                        wx.removeStorage({
                            key: 'LOGIN'
                        })
                    }

                }
            })
        } else {
            console.log('登录失败！' + res.errMsg)
        }
    }
})