import Vue from 'vue'

import vuex from 'vuex'
import axios from 'axios'
 Vue.use(vuex)

export default new vuex.Store({
    state: {
        arr:""
    },
    getters: {
        arr(state) {
            return state.arr
        }
    },
    mutations: {
        async data(state){
           const d = await axios.get("http://localhost:8084/listagem")
           console.log(d,state)
            
        }
    }
})