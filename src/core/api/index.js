import request from './http'
// console.dir(request)
// import axios from "axios"
// console.dir(axios);
//request==axios
// https://cnodejs.org
class Apis {
  getTopics(){
    return request({
      method:'get',
      url:'/api/v1/topics'
    })
  }
  getItem(){
    return request({
      method : 'get',
      url : '/api/v1/topic/5433d5e4e737cbe96dcef312'
    })
  }
  getPhp(){
    return request({
      method:'get',
      url:'/test/'
    })
  }
}
export default new Apis()
