import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Unicon from "vue-unicons";
import { uniEdit } from "vue-unicons/src/icons";

Unicon.add([uniEdit]);
Vue.use(Unicon);
Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
