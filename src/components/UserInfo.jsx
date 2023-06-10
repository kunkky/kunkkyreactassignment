import React from "react"

const UserInfo = (props) => {
let users;
    for (users of props.info){
        console.log(1);
    }
  return (
    
    <div>
          {
          <>
            <div className="usercard">
                  
                  <div className="userinfo"> username:{props.info[0].username}</div>
                  <div className="userinfo">last Name: {props.info[0].lastname}</div>
                      <div className="userinfo">Email:{props.info[0].email}</div>
                  <div className="userinfo">Password:{props.info[0].phone}</div>

            </div>
        </>
          }
    UserInfo</div>
  )
}

export default UserInfo