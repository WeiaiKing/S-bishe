// pages/commodity/commodity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onLoad: function (options) {

  },
  nav_txt: function (e) {
    if (!(e.target.dataset.index == 1)) {
      this.setData({
        nav_index: e.target.dataset.index
      })
    }
    if (e.target.dataset.index == 1) {
      wx.navigateTo({
        url: '../classification/classification',
        success: function (res) {
          console.log("跳转classification")
        },
        fail: function (res) {
          console.log("跳转失败")
        },
      })
    }
    console.log(e.target.dataset.index)
  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },



  
})