import Mock from "mockjs";
const UsersData = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 ~ 10 个元素
  "userList|1-10": [
    {
      id: 1,
      username: 'admin',
      password: '123456',
      avatar: 'https://avatars0.githubusercontent.com/u/22588905?v=4&s=120',
      name: '达康书记'
    }
  ]
});


export { UsersData }


  // export { UsersData ,UsersFn,userLogin };
  // export  {naem,userInfo,sex} 暴露多个模块,引入 使用{名字不能改}
  // import {naem,userInfo,sex} from  ./userInfo
  // export default UsersData
  // 暴露一个模块,引入名字自定义
  // import xxxx from ./userInfo
