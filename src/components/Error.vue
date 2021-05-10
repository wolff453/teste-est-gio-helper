<template>
   <div>
       <img class="error" :src="erro" alt="">
   </div>
</template>

<script>

import erro from '../assets/erro.gif'


export default {
data() {
    return {
        erro
    }
}
}
</script>

<style>
     @media(max-width: 1100px) {
         .error {
             width: 100%;
         }
     }
</style>