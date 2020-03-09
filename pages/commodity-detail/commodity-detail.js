// pages/commodity-detail/commodity-detail.js
Page({


  data: {
    background: ['https://picsum.photos/400', 'https://picsum.photos/300', 'https://picsum.photos/800'],
    select: 1,
    select_size:1,
    cartNum: 5
  },

  goCar() {
    wx.switchTab({
      url: '/pages/car/car',
    })
  },
  gostore() {
    wx.navigateTo({
      url: '/pages/store/store',
    })
  },
  // select
  select(e) {
    console.log(e)
    this.setData({
      select: e.currentTarget.dataset.id
    })
  },
  // select-size
  selectSize(e) {
    console.log(e)
    this.setData({
      select_size: e.currentTarget.dataset.id
    })
  },
  //panel
  onChange(event) {
    this.setData({
      activeNames: event.detail
    });
  },
  // 记步数
  onStepNum(event) {
    console.log(event.detail);
  },
  //add_cart
  add_cart: function() {
    this.setData({
      add_cart: true
    });
  },
  add_buy: function() {
    this.setData({
      select_size: 1,
      select:1,
      add_buy: true
    });
  },

  add_cart_cloce() {
    this.setData({
      add_cart: false
    });
  },
  add_buy_cloce() {
    this.setData({
      add_buy: false
    });

  },
  cart_confirm() {
    wx.showToast({
      title: '添加成功',
      icon: 'success',
      duration: 2000
    })
    this.setData({
      cartNum: this.data.cartNum + 1,
      add_cart: false
    });
  },
  buy_confirm() {
    wx.navigateTo({
      url: '../user-order-comfirm/user-order-comfirm',
      success: function(res) {},
    })
  },
  onLoad: function(options) {
    console.log(options)
    this.setData({
      add_cart: options.add_cart
    });
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


})