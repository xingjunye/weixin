import { urls } from '../../utils/config.js'
import { request } from "../../request/index.js"
import regeneratorRuntime from '../../lib/runtime/runtime'

const { base } = urls;
//Page Object
Page({
  data: {
    //轮播图数据
    swiperList: [],
    //导航数据
    cateList: [],
    //楼层数据
    floorList: []
  },
  //页面加载开始触发
  onLoad() {
    this.getSwiperList();
    this.getCateList();
    this.getFloorList();
  },
  //获取轮播图数据
  async getSwiperList() {
    const res = await request(`${base}/home/swiperdata`);
    this.setData({
      swiperList: res.data.message
    });
  },
  //获取导航数据
  async getCateList() {
    const res = await request(`${base}/home/catitems`)
    this.setData({
      cateList: res.data.message
    })
  },
  //
  //获取楼层数据
  async getFloorList() {
    const res = await request('https://api-hmugo-web.itheima.net/api/public/v1/home/floordata')
    this.setData({
      floorList: res.data.message
    })
  },
  //
});