//index.js
//获取应用实例
const app = getApp()
var template = require('../../template/template.js');
Page({
  data: {
    tabbar: {},
  },

  onLoad: function () {
    app.editTabbar();
  },

})
