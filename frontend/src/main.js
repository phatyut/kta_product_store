import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
const app = createApp(App);


import { createRouter, createWebHistory } from 'vue-router';


//  _________________________page________________________
import ViewMain from './components/viewrate/ViewMain.vue';
// import ViewData from './components/viewdata/ViewData.vue';
const route = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/',component:ViewMain},
        
    ]
})
app.use(route)
app.mount('#app');
