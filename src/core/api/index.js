import request from './http'
import mock from  "@/mock"
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
      url:'/test/test.php'
    })
  }
  getJson(){
    return request({
      method:'post',
      url:'/test/json.php',
      headers: {'Content-type': 'x-www-form-urlencoded'},
      data:{
        uname:'Fred',
        upwd:'123'
      }
    })
  }
  login(data){
    return mock.get("/login",{
      params: data
    })
  }
  // 是Get请求用params queryString params  不需要请求头
  // data 传默认  fromData
  // 设置请求头    application/x-www-form-urlencoded   Request payload
  // $GET["xxxx"]
}
export default new Apis()
