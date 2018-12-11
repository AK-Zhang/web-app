import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
  count: 1,
  stockID: {}
}
const mutations = {
  add(state) {
    state.count += 1;
  },
  reduce(state) {
    state.count -= 1;
  },
  param(stockID, obj) {
    stockID = obj;
  }
}
export default new Vuex.Store({
  state,
  mutations
});