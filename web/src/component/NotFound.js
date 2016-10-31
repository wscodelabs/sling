import React from 'react'
import {Link} from 'react-router'
const NotFound = ()=>{
  return (
    <div>
      <h4> OOps! page you are looking is not found</h4>
      <h6>Lets go to <Link to="/">Go to the home page →</Link></h6>
    </div>
  )

}

export default NotFound
