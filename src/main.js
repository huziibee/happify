import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import { createStore } from 'vuex';
import App from './App.vue'

import Home from './components/Home.vue';
import questionaire from './components/questionaire.vue';
import DadJokes from './components/DadJokes.vue';
import Happy from './components/Happy.vue';
import video from './components/video.vue'
import results from './components/results.vue'


// Create a new store instance.
const store = createStore({
  state () {
    return {
      QuestCompleted: 'Incomplete',
      VideosCompleted: 'Incomplete',
      DadCompleted: 'Incomplete',
      MeterCompleted: 'Incomplete',

      questPage: '/questionaire',
      dadPage: '/dadJokes',
      videoPage: '/funnyvideos',
      meterPage: '/happymeter',

      AllCompleted: false,
      points: 0,
    }
  }
})

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home},
        { path: '/questionaire', component: questionaire},
        { path: '/dadjokes', component: DadJokes},
        { path: '/happymeter', component: Happy}, 
        { path: '/funnyvideos', component: video},
        { path: '/results', component: results},
    ]
})

const app = createApp(App);
app.use(router);
app.use(store);

app.mount('#app');
