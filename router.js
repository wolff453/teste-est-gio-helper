import Vue from 'vue'
import Form from './src/components/Form'
import Router from 'vue-router'
import Listagem from './src/components/Listagem'
import Edit from  './src/components/Edit'
import Erro from './src/components/Error'
Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
      {
          path: "/",
          component: Form
      },
      {
        path:"/listagem",
        component: Listagem
      },
      {
        path:"/editar/:ID",
        component: Edit
      },
      {
        path:"*",
        component: Erro
      }
      // {
      //   path:"*",
      //   component: Erro
      // }
  ]  
})

