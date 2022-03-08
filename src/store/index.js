import { createStore } from 'vuex';

const store = createStore({
    state(){
        return {
            isLogin: false
        }
    },
    mutations: {
        toggleLoginStatus(state, bol){
            state.isLogin = bol;
        }
    }
})

export default store;