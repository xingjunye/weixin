export const request = (url, params) => {
  return new Promise( (resolve, reject) => {
    wx.request({
      url,
      ...params,
      success(result) {
        resolve(result)
      },
      fail(error) {
        reject(error)
      }
    });
  });
}