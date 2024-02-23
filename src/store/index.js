import { createStore } from 'vuex'
import axios from 'axios';
import { SweetAlert } from 'sweetalert';
import { useCookies } from 'vue3-cookies';
const {cookies} = useCookies()
import router from '@/router';
const lifeURL = 'https://lifechoicesapp-jj9i.onrender.com/'
export default createStore({
  state: {
    // where we create variables. the properties we use to define
    users: null,
    user: null,
    products: null,
    product: null
  },
  getters: {
  },
  mutations: {
    // allows us to updates values in our state
    setUsers(state, value){
      state.users = value
    },
    setUser(state, value){
      state.user = value
    },
    setProducts(state, value){
      state.products = value
    },
    setProduct(state, value){
      state.product = value
    },
  },
  actions: {
    async register(context, payload){
      try {
        let {msg} = (await axios.post(`${lifeURL}users/register`, payload)).data
        if(msg) {
          context.dispatch('fetchUsers')
          sweet({
            title: 'Registration',
            text: msg,
            icon: "success",
            timer: 2000
          })
          //
          router.push({name: 'login'})
        }
      } catch (e) {
        sweet({
          title: 'Error',
          text: 'Please try again later',
          icon: "error",
          timer: 2000
        })
      }
    },
    async fetchUsers(context){
      try {
        let { results } = (await axios.get(`${lifeURL}users`)).data
        if(results){
          context.commit('setUsers', results)
        }
      } catch (e) {
        sweet({
          title: 'Error',
          text: 'An error occured when retrieving Users',
          icon: "error",
          timer: 2000
        })
      }
    }
  },
  modules: {
  }
})