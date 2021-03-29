// pages/goods_list/index.js
Page({
  data: {
    Tabs: [
      {
        id: 0,
        value: '综合',
        isActive: true
      },
      {
        id: 1,
        value: '综合',
        isActive: true
      },
      {
        id: 2,
        value: '综合',
        isActive: true
      },
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
  }

})