// pages/store/store.js
import Toast from '../../components/vant-weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: '1',
    active_text: '特惠专区',
    follow_text: '关注',
    follow_url: '/images/follow.png',
    follow: true,
  },
  gocommodity(){
    console.log('看看')
    wx.navigateTo({
      url: '../commodity-detail/commodity-detail',
      success: function(res) {},
      
    })
  },
  // 店铺详情
  gostore() {
    wx.navigateTo({
      url: '../store-detail/store-detail',
      success: function(res) {},

    })
  },
  // 关注
  follow(e) {
    if (e.currentTarget.dataset.follow) {
      Toast('关注成功，我会推送我的动态哟');
      this.setData({
        follow_text: '已关注',
        follow_url: '/images/followHas.png',
        follow: false
      })
    } else {
      Toast('取消关注成功');
      this.setData({
        follow_text: '关注',
        follow_url: '/images/follow.png',
        follow: true
      })
    }
  },
  // nav 选项
  active(e) {
    if (e.currentTarget.dataset.active == 1) {
      this.setData({
        active: e.currentTarget.dataset.active,
        active_text: '特惠专区'
      })
    } else {
      this.setData({
        active: e.currentTarget.dataset.active,
        active_text: '全部好货'
      })
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})