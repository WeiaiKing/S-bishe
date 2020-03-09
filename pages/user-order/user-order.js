// pages/user-order/user-order.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0
  },

  goDelivery(){
    wx.navigateTo({
      url: '../user-order-detail/user-order-detail',
      success: function (res) { },
    })
  },
  goreceiving(){
    wx.navigateTo({
      url: '../user-order-receiving/user-order-receiving',
      success: function (res) { },
    })
  },
  gocomfirm(){
    wx.navigateTo({
      url: '../user-order-detail-comfirm/user-order-detail-comfirm',
      success: function (res) { },
    })
  },
  onLoad: function (options) {
    //检测iPhone X
    let modelmes = wx.getStorageSync('modelmes');
    let isIphoneX = app.globalData.isIphoneX;
    this.setData({
      isIphoneX: isIphoneX
    })
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

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})