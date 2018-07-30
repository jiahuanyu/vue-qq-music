import jsonp from 'assets/js/jsonp'
import { commonParams, options } from 'api/config'
export function getData () {
  return jsonp('https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg', commonParams, options)
}
