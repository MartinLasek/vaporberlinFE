import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'
import {emptyUser,emptyMeetup} from './empty-objects'

Vue.use(Vuex);

const state = {
  user: emptyUser,
  userPatch: emptyUser,
  meetup: emptyMeetup,
  token: '',
  topicList: []
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  plugins: [createPersistedState()]
});
