// tabBarComponent/tabBar.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabbar: {
      type: Object,
      value: {
        "backgroundColor": "#ffffff",
        "color": "#979795",
        "selectedColor": "#1c1c1b",
        "list": [
          {
            "pagePath": "pages/index/index",
            "iconPath": "/imgs/home.png",
            "selectedIconPath": "/imgs/home_on.png",
            "text": "首页"
          },
          {
            "pagePath": "pages/news/news",
            "iconPath": "/imgs/message.png",
            "selectedIconPath": "/imgs/message_on.png",
            "text": "资讯"
          },
          {
            "pagePath": "pages/category/category",
            "iconPath": "/imgs/category.png",
            "selectedIconPath": "/imgs/category_on.png",
            "text": "分类"
          },
          {
            "pagePath": "pages/buy/buy",
            "iconPath": "/imgs/buy.png",
            "selectedIconPath": "/imgs/buy_on.png",
            "text": "购物"
          }
        ]
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isIphoneX: app.globalData.systemInfo.model == "iPhone X" ? true : false,
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
