import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    userinfo: JSON.parse(sessionStorage.getItem("userinfo") )
  },
  mutations: {
    // set
    SET_TOKEN: (state,token) =>{
      state.token=token
      localStorage.setItem("token",token)
    },
    SET_USERINFO: (state,userinfo) =>{
      state.userinfo=userinfo
      sessionStorage.setItem("userinfo",JSON.stringify(userinfo))
    },
    REMOVEN_INFO: (state) =>{
      state.userinfo = ''
      state.userinfo = {}
      localStorage.setItem("token",'')
      sessionStorage.setItem("userinfo",JSON.stringify(''))
    }
  },
  getters: {
    // get
    getUser: state => {
      return state.userinfo
    }
  },
  actions: {
  },
  modules: {
  }
})
