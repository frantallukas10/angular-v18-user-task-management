
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/angular-v18-user-task-management"
  }
],
  assets: new Map([
['index.csr.html', {size: 2537, hash: '3054a977e3371e6bfbe84359080e898046cf8c19f7bde25a4c448937194da76d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 2745, hash: '99c5a85d113c2c1461c3b2515107531ee7fec8c3cb79757333855405afc03099', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['index.html', {size: 8749, hash: '081042330a2e82c4c5747d568a6d4726228d2c878a4e4c7c1708a2ba3df1df77', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['styles-PH5QZW6A.css', {size: 186, hash: '08ViHY/xP6M', text: () => import('./assets-chunks/styles-PH5QZW6A_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
