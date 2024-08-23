
/*
 * @Author: Tina Huang
 * @Date: 2024-08-22 17:17:28
 * @LastEditors: Tina Huang
 * @LastEditTime: 2024-08-23 10:00:05
 * @Description: 
 */

import * as React from "react";
import { DateBox } from "./Date";
import { TodoView } from './TodoView'

export const AppView = (props: { files: any; }) => {
  const {files} = props
  return <div>
    <DateBox />
    <TodoView files={files} />
  </div>
}