/*
 * @Author: Tina Huang
 * @Date: 2024-08-22 17:04:51
 * @LastEditors: Tina Huang
 * @LastEditTime: 2024-08-23 09:59:34
 * @Description: 
 */
import { ItemView, WorkspaceLeaf } from "obsidian";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ReactView } from "./views/ReactView";
import { createRoot } from "react-dom/client";
import {AppView} from './views/App'

export const VIEW_TYPE_EXAMPLE = "example-view";

export class ExampleView extends ItemView {
  files = null
  constructor(leaf: WorkspaceLeaf, files: any) {
    super(leaf);
    files = files
  }

  getViewType() {
    return VIEW_TYPE_EXAMPLE;
  }

  getDisplayText() {
    return "Example view";
  }

  async onOpen() {
    const root = createRoot(this.containerEl.children[1]);
    root.render(
      <React.StrictMode>
        <AppView files={this.files} />,
      </React.StrictMode>
    );
  }

  async onClose() {
    ReactDOM.unmountComponentAtNode(this.containerEl.children[1]);
  }
}