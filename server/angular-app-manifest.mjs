
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
['index.csr.html', {size: 2535, hash: 'b9eeb247632f26c957f1c98f1465bcdf3cfad8e54b87b7f8e33ce04725018279', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 2743, hash: '2c77a078b6faca2971d8d425b86b3f96ba02e0eebd8caf76cf585c8e499ac626', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['t/index.html', {size: 8747, hash: 'd7a471fa218beec76b62bdf758b1ac5f998300107fcdb8f834e6dad17a9d565b', text: () => import('./assets-chunks/t_index_html.mjs').then(m => m.default)}], 
['styles-PH5QZW6A.css', {size: 186, hash: '08ViHY/xP6M', text: () => import('./assets-chunks/styles-PH5QZW6A_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
