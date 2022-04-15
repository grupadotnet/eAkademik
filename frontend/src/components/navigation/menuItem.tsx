import React from 'react'
import Layout from 'antd'
import "./index.css"
import styled from "styled-components";
import {ProfileFilled } from '@ant-design/icons'
import './index.css'
function MenuItem(){
  return ( 
    
    <div className ="MenuItem">
      <ul className="unstyled">
      <li style={{position: 'relative', right: '60px'}}> <ProfileFilled style={{position: 'relative', right: '15px', }} />  Invoice
        </li>
      
        </ul>
 </div>

  )
}





export default MenuItem;