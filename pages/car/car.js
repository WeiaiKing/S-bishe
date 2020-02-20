// pages/car/car.js
Page({

  
  data: {
    checked: true
  },
  onLoad: function (options) {
    
  },
  goPay(){
    wx.navigateTo({
      url: '/pages/user-order-comfirm/user-order-comfirm',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})