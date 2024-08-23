/*
 * @Author: Tina Huang
 * @Date: 2024-08-22 17:03:18
 * @LastEditors: Tina Huang
 * @LastEditTime: 2024-08-23 09:37:52
 * @Description: 
 */
import { App } from "obsidian";
import { AppContext } from "./context";
import * as React from "react";

export const useApp = (): App => {
  return React.useContext(AppContext);
};