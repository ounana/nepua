import { Query } from "./connect";

;(async ()=>{
  // let users = await Query<any>(`SELECT * FROM user ORDER BY id DESC`)
  // console.log(users)

  // let users = await Query<any>(`AlTER TABLE user ADD create_at timestamp `)
  // console.log(users)
  
  let users = await Query<any>(`UPDATE user SET create_at ='2021-08-01 09:53:32' WHERE id =6`)
  // console.log(users)

  let list = await Query<any>(`SELECT * FROM user ORDER BY create_at DESC`)
  console.log(list)

})()