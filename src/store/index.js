import { createStore } from 'vuex'

export default createStore({
  state: {
    cardsAcquired: JSON.parse(localStorage.getItem('acquired')) || [],
  },
  getters: {
    cardsAcquired(state) {
      return state.cardsAcquired;
    },
  },
  mutations: {
    updatedAcquired: (state, data) => {
      state.cardsAcquired = data;
    },
  },
  actions: {
    addToAcquired: (context, data) => {
      return new Promise((resolve, reject) => {
          try {
              let acquired = JSON.parse(localStorage.getItem('acquired'));
              let updatedAcquired = [];
              if (acquired) {
                acquired.push(data);
                  updatedAcquired = acquired;
              } else {
                  updatedAcquired.push(data);
              }
              localStorage.setItem('acquired', JSON.stringify(updatedAcquired));
              context.commit('updatedAcquired', updatedAcquired);
              resolve(context.getters.cardsAcquired);
          } catch (err){
              reject(err);
          }
      })
  },
  deleteAcquired: (context, id) => {
      return new Promise((resolve, reject) => {
      try {
          let acquired = JSON.parse(localStorage.getItem('acquired'));
          let updatedAcquired = acquired.filter(acquired => acquired.id !== id);
          localStorage.setItem('acquired', JSON.stringify(updatedAcquired));
          context.commit('updatedAcquired', updatedAcquired);
          resolve(context.getters.cardsAcquired);
      }catch (err){
          reject(err);
      }
      })
  }
  },
  modules: {
  }
})
