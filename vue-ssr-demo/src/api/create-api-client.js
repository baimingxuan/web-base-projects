import axios from 'axios'

export function createApi () {
    return {
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

