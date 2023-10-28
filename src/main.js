import { createApp } from 'vue';
import App from './App.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import HomeComponent from './components/HomeComponent.vue';
import NavigationComponent from './components/NavigationComponent.vue';
import AboutMeComponent from './components/AboutMeComponent.vue';
import SongListComponent from './components/SongListComponent.vue';
import LandingComponent from "./components/LandingComponent.vue";
import SongFilterComponent from "./components/SongFilterComponent.vue";
import FormComponent from "./components/FormComponent.vue";
import router from './router.js';
import store from './store/store.js';

const app = createApp(App);

app.component('HeaderComponent', HeaderComponent);
app.component('HomeComponent', HomeComponent);
app.component('NavigationComponent', NavigationComponent);
app.component('AboutMeComponent', AboutMeComponent);
app.component('SongListComponent', SongListComponent);
app.component('LandingComponent', LandingComponent);
app.component('SongFilterComponent', SongFilterComponent);
app.component('FormComponent', FormComponent);

app.use(store);
app.use(router).mount('#app');
