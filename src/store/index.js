import Vue from 'vue'
import Vuex from 'vuex';
import * as firebase from 'firebase'


Vue.use(Vuex)

export const store = new Vuex.Store({
  states: {
      user: null,
      loading: false,
      error: null

  },
  mutations:{
  setUser (state,payload){
    state.user = payload  
  },
  setLoading (state, payload){
      state.loading = payload
  },
  setError (state,payload) {
      state.loading = payload
  },
  clearError(state){
      state.error = null
  }

  },
  actions:{
      signUserUp ({commit}, payload){
       commit('setLoading',true)
       commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(
          user =>{
           commit('setLoading', false)
           const newUser = {
               id:user.uid,
               registeredMeetups:[]
           }
           commit('setUser', newUser)
          }
      )
      .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
      )
      },

    },
  getters:{
     user (state) {
         return state.user;
     } 
  } 
})