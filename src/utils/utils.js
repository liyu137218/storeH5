// setCookie("token","",1); -- 存cookie
export function setCookie(name, value, days) {
    var date, expires;
    if (name) {
        if (days) {
            console.log(days)
            date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            console.log(date)
            expires = "; expires=" + date.toGMTString();
            console.log(expires)
        } else {
            expires = '';
        }
        window.document.cookie = name + "=" + value + expires + "; path=/";
    }
}


// getCookie("token"); -- 取cookie
export function getCookie(name) {
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null)
        return unescape(arr[2]);
    return null;
}


// 存多个cookie
export function multiSetCookie(param) {
    for (let key in param) {
        console.log(key + "=" + param[key]);
        setCookie(key, param[key], 7);
    }
}


// 删除cookie
export function delCookie(name) {
    setCookie(name, "", -1);
}


// 主要用在查询时过滤空值参数
export function filterJson(object) {
    for (var i in object) {
        var value = object[i];
        if (typeof value === 'object') {
            if (Array.isArray(value)) {
                if (value.length == 0) {
                    delete object[i];
                    continue;
                }
            }
            filterJson(value);
            if (_isEmpty(value)) {
                delete object[i];
            }
        } else if (value === '' || value === null || value === undefined) {
            delete object[i];
        }
    }
    return object;
}


// 时间戳转化为时间
export function formatDates(timestamp) {
    // let timestampa = timestamp * 1000;
    let timestampa = timestamp;
    let date = new Date(timestampa); // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
    let Y = date.getFullYear() + '-';
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    let D = date.getDate() + ' ';
    let h = date.getHours() + ':';
    let m = date.getMinutes() + ':';
    let s = date.getSeconds();
    D = parseInt(D) > 9 ? D : '0' + D;
    h = parseInt(h) > 9 ? h : '0' + h;
    m = parseInt(m) > 9 ? m : '0' + m;
    s = parseInt(s) > 9 ? s : '0' + s;
    return Y + M + D + h + m + s;
}


// 获取url参数
export function getUrlKey(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null;
}

