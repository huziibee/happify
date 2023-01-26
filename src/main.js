import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'

import Home from './components/Home.vue';
import questionaire from './components/questionaire.vue';
import DadJokes from './components/DadJokes.vue';
import Happy from './components/Happy.vue';
import video from './components/video.vue'
import results from './components/results.vue'

// import Questions from './components/Questions.vue'
// import questionaire from './components/questionaire.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home},
        { path: '/questionaire', component: questionaire},
        { path: '/dadjokes', component: DadJokes},
        { path: '/happymeter', component: Happy}, 
        { path: '/funnyvideos', component: video},
        { path: '/results', component: Happy},
        // { path: '/questionaire', component: questionaire},
    ]
})

// Vue.use(VueRouter);
const app = createApp(App);
app.use(router);

app.mount('#app');
