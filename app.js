//app.js
App({
  onLaunch: function () {
    //隐藏系统tabbar
    wx.hideTabBar();
    //获取设备信息
    this.getSystemInfo({

    });

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  getSystemInfo: function () {
    let that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.globalData.systemInfo = res;
        that.globalData.platform = res.platform
        let totalTopHeight = 68
        if (res.model.indexOf('iPhone X') !== -1) {
          totalTopHeight = 88
        } else if (res.model.indexOf('iPhone') !== -1) {
          totalTopHeight = 64
        }
        that.globalData.statusBarHeight = res.statusBarHeight
        that.globalData.titleBarHeight = totalTopHeight - res.statusBarHeight
      },
      failure() {
        that.globalData.statusBarHeight = 0
        that.globalData.titleBarHeight = 0
      }
    });
  },
  editTabbar: function () {
    let tabbar = this.globalData.tabBar;
    let currentPages = getCurrentPages();
    let _this = currentPages[currentPages.length - 1];
    let pagePath = _this.route;

    (pagePath.indexOf('/') != 0) && (pagePath = '/' + pagePath);


    // if(pagePath.indexOf('/') != 0){
    //   pagePath = '/' + pagePath;
    // } 

    for (let i in tabbar.list) {
      tabbar.list[i].selected = false;
      (tabbar.list[i].pagePath == pagePath) && (tabbar.list[i].selected = true);
    }
    _this.setData({
      tabbar: tabbar
    });
  },
  globalData: {
    systemInfo: null,//客户端设备信息
    userInfo: null,
    tabBar: {
      "backgroundColor": "#ffffff",
      "color": "#979795",
      "selectedColor": "#1c1c1b",
      "list": [
        {
          "pagePath": "/pages/index/index",
          "iconPath": "/imgs/home.png",
          "selectedIconPath": "/imgs/home_on.png",
          "text": "首页"
        },
        {
          "pagePath": "/pages/news/news",
          "iconPath": "/imgs/message.png",
          "selectedIconPath": "/imgs/message_on.png",
          "text": "资讯"

        },
        {
          "pagePath": "/pages/category/category",
          "iconPath": "/imgs/category.png",
          "selectedIconPath": "/imgs/category_on.png",
          "text": "分类"
        },
        {
          "pagePath": "/pages/buy/buy",
          "iconPath": "/imgs/buy.png",
          "selectedIconPath": "/imgs/buy_on.png",
          "text": "购物"
        }

      ]
    }
  }
})