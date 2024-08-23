import * as React from "react";
import { App, FileManager, Keymap, MetadataCache, Scope, Vault, Workspace } from 'obsidian';

export const AppContext = React.createContext<App>({
  keymap: new Keymap,
  scope: new Scope,
  workspace: new Workspace,
  vault: new Vault,
  metadataCache: new MetadataCache,
  fileManager: new FileManager,
  lastEvent: null
});