import {Commit, createStore} from 'vuex'
import {User} from "@/classes/user";

export default createStore({
    state: {
        user: new User()
    },
    mutations: {
        SET_USER: (state, user) => state.user = user
    },
    actions: {
        setUser: ({commit}: { commit: Commit }, user: User) => commit('SET_USER', user)
    },
    modules: {}
})
