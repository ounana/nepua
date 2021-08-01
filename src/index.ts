import { Query } from "./connect";

;(async ()=>{
  // let users = await Query<any>(`SELECT * FROM user ORDER BY id DESC`)
  // console.log(users)

  // let users = await Query<any>(`AlTER TABLE user ADD create_at timestamp `)
  // console.log(users)
  
  let users = await Query<any>(`AlTER TABLE user CHANGE age age int(3)`)
  // console.log(users)

  let list = await Query<any>(`SELECT * FROM user ORDER BY create_at DESC`)
  console.log(list)

  //前端 展示界面 发起一个请求连接上数据库
  
})()