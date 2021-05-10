<template>
 
  <div>
      <div class="modal-dad">

      <div class="modal">
          <p class="text">Cadastrado com sucesso</p>
      </div>
            </div>
 
     

      <div class="container-forms">
           <form class="form" action="" method="post">
               <input v-model="nome" placeholder="Seu nome" class="teste" type="text" name="nome" id="">
                <input v-model="email"   placeholder="Email" class="teste" type="text" name="email" id="">

               <input v-model="CPF_CNPJ" v-mask="'###.###.###-##'"   placeholder="CPF ou CNPJ" class="teste" type="text" name="CPF_CNPJ" id="">
                     <input v-model="telefone" v-mask="'(##) #####-####'" placeholder="Telefone" class="teste" type="text" name="telefone" id="">
 
               <input v-model="cep" v-mask="'#####-###'" @blur="consultaCep()"  placeholder="CEP" class="teste cep" type="text" name="cep" id="">
 
               <input v-model="logradouro"  placeholder="Logradouro" class="teste logradouro" type="text" name="logradouro" id="">
 
               <input v-model="bairro"   placeholder="Bairro" class="teste bairro" type="text" name="bairro" id="">
 
               <input  v-model="localidade"  placeholder="Cidade" class="teste uf" type="text" name="localidade" id="">
                <input v-model="uf"   placeholder="Estado" class="teste localidade" type="text" name="uf" id="">
                 <input v-model="complemento" placeholder="Complemento" class="teste complemento " type="text" name="complemento" id="">
                 <input v-model="número" placeholder="Número" class="teste" type="text" name="número" id="">

                 <div>
                 <input @click="insert();" class="entrar" type="submit" value="Enviar">
                 
                </div>
           </form>
           <p>{{arr}}</p>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import {mapGetters} from 'vuex'
export default {
     data() {
         return  {
             nome:"",
             email:"",
             CPF_CNPJ:"",
             logradouro:"",
             número:"",
             bairro:"",
             localidade:"",
             uf:"",
             complemento:"",
             cep:"",
             telefone:"",
          }
     },
     
 computed: {
     ...mapGetters({
         arr:"arr"
     })
 },

    methods: {
           async insert(){
                 event.preventDefault()
                 let trim = document.querySelectorAll(".teste")
                 trim.forEach(item => item.trim)
                 let modalError = document.querySelector(".modal")
                let text = document.querySelector(".text")
                 let modal = document.querySelector(".modal-dad")
                   for(let i in this.$data)  {
                     if(this.$data[i] == "") {
                       modalError.classList.add("error")
                       modal.style.opacity = "1"
                        text.innerHTML ="Preencha todos os campos"
                         this.$store.commit("data")

                         setTimeout(()=>{modal.style.opacity = "0"},2000)  
                       
                        return 
                        
                      } 
                    


                     
                 }
                    if(!this.email.includes("@")){
                    return alert("Está faltando o @")
                }
                const myApi = await axios.post("http://localhost:8084/cadastro", {
                    nome: this.nome,
                    email:this.email,
                    CPF_CNPJ: this.CPF_CNPJ,
                    logradouro:this.logradouro,
                    número: this.número,
                    bairro: this.bairro,
                    localidade:this.localidade,
                    uf:this.uf,
                    complemento:this.complemento,
                    cep:this.cep,
                    telefone: this.telefone
                })
                if(myApi.data.message == "Esses dados já existem!") {
                    return alert("Esses dados ja existem")
                }
             
               
                  modalError.classList.remove("error")
                 modalError.classList.add("sucess")
                   modal.style.opacity = "1"
                    text.innerHTML ="Cadastrado com sucesso. Redirecionando..."
                    setTimeout(() => {
                            modal.style.opacity = "0"
                               modalError.classList.remove("sucess")
                                this.$router.push("/listagem")
                    },2000)
             },
           
            async consultaCep() {
 
                const e = await axios.get(`https://viacep.com.br/ws/${this.cep}/json/`)
                 for(let i in e.data) {
                     for(let abc in this.$data) {
                
                           if(abc == i) {
                               this.$data[abc] = e.data[i]
                           }
                          
                      }
                }
              
                 
            }
    }
}
</script>

<style>

.container-forms {
    display: flex;
    justify-content: center;
    padding-top: 60px;
   }
 
.form{
    display: flex;
    flex-direction: column;
}
.teste{
     border: none;
    margin-top: 10px;
     padding-top: 10px;
          width: 400px;
  padding-bottom: 5px;
 
}
input[type = "text"] {
    padding-left: 10px;
    outline: none;
}
.entrar {
    margin-top: 20px;
    background: #333;
    color: white;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    border: none;
    outline: none;
    cursor: pointer;
    transition: 1s ease;
}
.entrar:hover {
    background: rgb(255, 255, 0);
    color: black;
}
p{
    color: #cf180a;
}
.modal-dad { 

    display: flex;
    justify-content: flex-end;
    padding-right: 20px;
        transition: 1s ease;
        opacity: 0;

}
.modal {
     padding-left: 100px ;
    padding-right:100px;
    box-shadow: 1px 3px 14px 0px #000000;
    padding-top: 30px ;
    padding-bottom: 30px ;
    border-radius: 5px 5px;
   }
.modal p {
    color: white;
}
.error {
    background: red;
     transition: 1s ease;
}
.sucess {
    background: #2eb52b;
}
</style>