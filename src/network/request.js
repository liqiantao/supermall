import axios from 'axios'
//封装
export function request(config) {
    //创建实例
    const instance = axios.create({
            baseURL: 'http://152.136.185.210:7878/api/m5',
            timeout: 5000
        })
        //拦截器
    instance.interceptors.request.use(config => {
        // console.log(config.data);
        return config
    }, err => {
        // console.log(err.data);
        return err
    })

    return instance(config);
}