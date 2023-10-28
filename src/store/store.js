// store/index.js
import { createStore } from 'vuex';
import page from "@/store/page";
import user from "@/store/user";

export default createStore({
    state: {
        allSongs: [],
    },
    modules: {
        user,
        page
    },
    mutations: {
        setAllSongs(state, songs) {
            state.allSongs = songs;
        },
    },
    getters: {
        isLoggedIn: (state) => state.user.loggedIn
    }
});
