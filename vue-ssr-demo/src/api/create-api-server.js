import axios from 'axios'

export function createApi () {
    let api
    const isProd = process.env.NODE_ENV === 'production'
    axios.defaults.baseURL = isProd ? '' : ''

    if (process.__API__) {
        api = process.__API__
    } else {
        api = {
            get (target, params = {}) {
                return new Promise((resolve, reject) => {
                    axios.request({
                        url: target,
                        method: 'get',
                        params
                    }).then(res => {
                        resolve(res.data);
                    }).catch(error => {
                        reject(error)
                    })
                })
            },
            post (target, params = {}) {
                return new Promise((resolve, reject) => {
                    axios.request({
                        url: target,
                        method: 'post',
                        params
                    }).then(res => {
                        resolve(res.data)
                    }).catch(error => {
                        reject(error)
                    })
                })
            }
        }
    }
    return api
}
