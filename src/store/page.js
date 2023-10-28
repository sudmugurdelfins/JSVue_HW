export default {
    namespaced: true,
    state: {
        activePage: 'home',
    },
    mutations: {
        setPage(state, page) {
            state.activePage = page;
        },
    },
};