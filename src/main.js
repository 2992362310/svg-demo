import './assets/main.css';

// windicss
import 'virtual:windi.css';

import { createApp } from 'vue';
import App from './App.vue';

String.prototype.getByteLen = function () {
  let len = 0;
  for (let i = 0; i < this.length; i++) {
    this.charCodeAt(i) < 256 ? (len += 0.55) : (len += 1);
  }
  return len;
};

createApp(App).mount('#app');
