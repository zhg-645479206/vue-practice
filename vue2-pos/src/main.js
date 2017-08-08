// import Vue from 'vue'
// import App from './App'

import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import router from './router'

Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,   
  template: '<App/>',
  components: { App }
})


// new Vue({
//   el: '#app',
//   render: h => h(App),
//    mounted:function(){
//       var orderHeight=document.body.clientHeight;
//       document.getElementById("order-list").style.height=orderHeight+'px';
//   }
// })