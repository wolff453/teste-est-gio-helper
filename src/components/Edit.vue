<template>
   <div class="search-delete">
         <div class="inputs">
             <div class="input-1">
        <input v-model="campo" class="texto" placeholder="Digite aqui o campo que você deseja deletar" type="text" name="" id="">
        <br>
 
             </div>
             <div class="input-2">
         <input @click="edit"  class="delete" type="submit" value="Deletar">

             </div>
    </div>
     </div>
</template>

<script>
    import axios from 'axios'
export default {
    data(){
        return {
            campo:"",
         }
    },
        mounted(){
            console.log(this.$route.params.ID)
        },
        methods: {
           async edit(){
           
              
               const ed = await axios.patch(`http://localhost:8084/deletar/${this.$route.params.ID}`,this.campo)
               this.$router.push("/listagem")
               console.log(ed)
            }
        }
      
}
</script>

<style>
.texto {
    text-transform: lowercase;
}
</style>