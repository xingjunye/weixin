// pages/category/index.js
import { urls } from '../../utils/config.js'
import { request } from '../../request/index.js'
import regeneratorRuntime from '../../lib/runtime/runtime'

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
    const cates = wx.getStorageSync("cates");
    if(!cates) {
      this.getCates();
    }else {
      if(Date.now() - cates.time > 1000 * 10) {
        this.getCates();
      }else {
        console.log(cates);
        this.setData({
          menuList: cates.data.message,
          goodslist: cates.data.message[0].children
        })
      }
    }
  },

  async getCates() {
    const res = await request(`${base}/categories`);
    wx.setStorageSync("cates", {time: Date.now(), data: res.data});
    this.setData({
      menuList: res.data.message,
      goodslist: res.data.message[0].children
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