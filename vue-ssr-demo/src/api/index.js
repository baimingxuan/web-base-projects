import { createApi } from 'create-api'

export function fetchItem () {
  return new Promise((resolve, reject) => {
    createApi.get('').then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}

