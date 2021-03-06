import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入iconfont
import 'assets/iconfont/iconfont.css'

// 按需引入vant组件
import { Icon, Toast, Tabbar, TabbarItem, Form, Field, Button, Swipe, SwipeItem, NavBar, Circle ,Tab, Tabs} from 'vant'

Vue.use(Icon);
Vue.use(Toast);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(NavBar);
Vue.use(Circle);
Vue.use(Tab);
Vue.use(Tabs);
//引入请求js
import mRequest from './network/cloudMusic';
Vue.prototype.$request = mRequest;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
