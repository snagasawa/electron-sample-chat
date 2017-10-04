import { app, Menu } from 'electron'
import create from './createWindow'

function setAppMenu() {
  const template = [
    {
      label: 'File',
      submenu: [
        { label: 'New Window', accelerator: 'CmdOrCtrl+N', clinck: createWindow },
        { type: 'separtor' },
        { label: 'Close', accelerator: 'CmdOrCtrl+W', clinck: 'close' },
      ]
    },
    {
      label: 'Edit',
      submenu: [
        { label: 'Copy', accelerator: 'CmdOrCtrl+C', role: 'copy' },
        { label: 'Paste', accelerator: 'CmdOrCtrl+V', role: 'paste' },
        { label: 'Cut', accelerator: 'CmdOrCtrl+X', role: 'cut' },
        { label: 'Select All', accelerator: 'CmdOrCtrl+A', role: 'selectall' },
      ]
    },
    {
      label: 'View',
      submenu: [
        {
          lable: 'label'
        }

      ]
    }
  ]
}
