import jsonp from 'assets/js/jsonp'
import { commonParams, options } from 'api/config'

export function getData () {
  return jsonp('https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg', commonParams, options)
}
