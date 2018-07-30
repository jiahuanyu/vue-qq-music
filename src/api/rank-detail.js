import jsonp from 'assets/js/jsonp'
import { commonParams, options } from 'api/config'

export function getData (topId) {
  return jsonp('https://shc.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg', Object.assign(commonParams, {
    tpl: 3,
    page: 'detail',
    type: 'top',
    topid: topId
  }), options)
}
