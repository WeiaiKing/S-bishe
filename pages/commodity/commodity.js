// pages/commodity/commodity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nav_index: 1,
  },
  onLoad: function(options) {

  },
  // goSearch
  input() {
    wx.navigateTo({
      url: '../index-search/index-search',
      success: function (res) { },
    })
  },
  // nav 
  nav_txt: function(e) {
    this.setData({
      nav_index: e.currentTarget.dataset.index
    })
  },
// 添加购物车
  addCart(){
    wx.navigateTo({
      url: "../commodity-detail/commodity-detail?add_cart='true'",
      success: function(res) {},
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },




})