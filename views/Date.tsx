/*
 * @Author: Tina Huang
 * @Date: 2024-08-22 15:31:11
 * @LastEditors: Tina Huang
 * @LastEditTime: 2024-08-23 09:38:37
 * @Description: 
 */
import * as React from 'react'
const moment = require('moment')
// import { useApp } from '../hook'

export const DateBox = () => {
  // const { vault } = useApp();
  return <div className='date__box'>
    <h4>{moment().format('MMMM')}</h4>
    <p>Today is {moment().format('dddd')}, {moment().format('MMMM Do YYYY')}</p>
  </div>
}