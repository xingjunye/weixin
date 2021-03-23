import { urls } from '../../utils/config.js'
import { request } from "../../request/index.js"
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
  getSwiperList() {
    request(`${base}/home/swiperdata`)
    .then(result => {
      this.setData({
        swiperList: result.data.message
      })
    });
  },
  //获取导航数据
  getCateList() {
    request(`${base}/home/catitems`)
    .then(result => {
      this.setData({
        cateList: result.data.message
      })
    });
  },
  //
  //获取楼层数据
  getFloorList() {
    request('https://api-hmugo-web.itheima.net/api/public/v1/home/floordata')
    .then(result => {
      this.setData({
        floorList: result.data.message
      })
    });
  },
  //
});