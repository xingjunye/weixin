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
        value: '销量',
        isActive: false
      },
      {
        id: 2,
        value: '综合',
        isActive: false
      },
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options);
  },
  handleTabsItemChange(e) {
    const { index } = e.detail;
    const { Tabs } = this.data;
    Tabs.forEach( (v, i) => i == index ? v.isActive = true : v.isActive = false )
    this.setData({
      Tabs
    })
  }
})