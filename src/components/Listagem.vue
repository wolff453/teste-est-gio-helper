<template>
 <div>
     <table id="customers">
         <tr>
             <th>ID</th>
              <th>Nome</th>
               <th>Email</th>
                <th>CPF/CNPJ</th>
                 <th>Logradouro</th>
                  <th>Número</th>
                   <th>Bairro</th>
                    <th>Localidade</th>
                    <th>UF</th>

                    <th>Complemento</th>
                    <th>CEP</th>
                    <th>Telefone</th>
                    <th>Editar</th>
 
         </tr>
         <tr v-for="(item,index) in arr" :key="index">
             <td>{{item.ID}}</td>
             <td>{{item.nome}}</td>
             <td>{{item.email}}</td>
              <td class="aapoulo">{{item.CPF_CNPJ}}</td>
               <td>{{item.logradouro}}</td>
                <td>{{item.número}}</td>
               <td>{{item.bairro}}</td>
               <td>{{item.localidade}}</td>
                <td>{{item.uf}}</td>
                <td>{{item.complemento}}</td>
                <td>{{item.cep}}</td>
                <td>{{item.telefone}}</td>
                 <router-link class="enter" :to="'/editar/'+ item.ID">Editar</router-link>
  


         </tr>
         
     </table>

    
   
 </div>
</template>

<script>
import axios from 'axios'
 export default {
    data() {
        return {
            arr: [],
            del:""
         }
    },
    async mounted(){
        const d = await axios.get("http://localhost:8084/listagem")
        this.arr = d.data.e
 
    },
   
    methods: {
       async deletar(){
              
            const del = await axios.patch(`http://localhost:8084/deletar/${this.del}`)
            console.log(del)

         
       }
    },

    
}
</script>

<style>
 #customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
}
.search-delete{
    margin-top: 20px;
 }
 .texto {
     width: 300px;
     border: none;
     
     margin-top: 10px;
    padding-top: 10px;
     padding-bottom: 5px;
 
 }
.inputs{
    display: flex;
   flex-direction: column;
}
.delete {
    border-radius: 5px 5px;
    border: none;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 5px;
    padding-top: 5px;
    margin-top: 5px;
    background: #333;
    color: white;
    cursor: pointer;
}
.enter {
    text-decoration: underline;
    padding-top: 10px;
    color: black;
}
</style>