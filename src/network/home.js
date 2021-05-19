import axios from 'axios'
import { request } from './request'

export function getHomeMultidata() {
    return request({
        url: '/home/multidata'
    })
}

export function getHomeGoods(type, page) {
    //返回调用封装好的request函数
    return request({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}