/**
 * Created by linxin on 2016/12/1.
 */
import Vue from 'vue';
import Vuex from  'vuex';
import * as actions from './actions';
import * as getters from './getters';
Vue.use(Vuex);

const state = {
    count: 0
}
const mutations = {
    INCREMENT(state){
        state.count ++ ;
    },
    DECREMENT(state){
        state.count -- ;
    }
}

// const actions = {
//     increment : ({ commit }) => commit('INCREMENT'),
//     decrement : ({ commit }) => commit('DECREMENT')
// }

export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations
})