// pages/user-order-detail/user-order-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 2,//当前步骤
    steps: [{
      text: '支付成功',
      desc: '2020-04-01 14:33'
    },
    {
      text: '出库',
      desc: '2020-04-01 17:33'
    },
    {
      text: '快速发货',
      desc: '2020-04-01 18:33'
    },
    {
      text: '交易完成',
      desc: ''
    }
    ]
  },

  goUserService() {
    wx.navigateTo({
      url: '../user-service/user-servive',
      success: function (res) { },

    })
  },
  onLoad: function (options) {

  },


  onReady: function () {

  },


})