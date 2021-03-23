// pages/category/index.js
import { urls } from '../../utils/config.js'
import { request } from '../../request/index.js'

const { base } = urls;

Page({ 

  /**
   * 页面的初始数据
   */
  data: {
    menuList: [],
    goodslist: [],
    active: 0,
    scrollTop: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    request(`${base}/categories`)
      .then(result => {
        this.setData({
          menuList: result.data.message,
          goodslist: result.data.message[0].children
        })
      })
  },
  handleActive(e) {
    const { index } = e.target.dataset;
    this.setData({
      active: index,
      goodslist: this.data.menuList[index].children,
      scrollTop: 0 //重置滚动条位置
    })
  }
  
})