// pages/commodity-detail/commodity-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: ['https://picsum.photos/400', 'https://picsum.photos/300', 'https://picsum.photos/800'],
  },

  goCar(){
    wx.switchTab({
      url: '/pages/car/car',
    })
  },
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

 
})