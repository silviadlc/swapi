import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios);


export default new Vuex.Store({
  state: {

  },

  getters: {
    people: state => {
      return state.people;
    },
    starships: state => {
      return state.starships;
    },
    planets: state => {
      return state.planets;
    }
  },

  mutations: {
    setPeople (state, items) {
      state.people = items
    },

    setStarships (state, items) {
      state.starships = items
    },

    setPlanets (state, items) {
      state.planets = items
    }
  },
  
  actions: {
    getPeople({ commit }) {
      axios.get('https://swapi.dev/api/people').then((response) => {
        console.log(response.data)
        this.people = response.data.results
      })
    },

    getStarships({ commit }) {
      axios.get('https://swapi.dev/api/starships').then((response) => {
        this.starships = response.data.results;
      })
    },

    getPlanets({ commit }) {
      axios.get('https://swapi.dev/api/planets').then((response) => {
        console.log(response.data)
        this.planets = response.data.results
      })
    },
  },
  modules: {
  
  }
})
