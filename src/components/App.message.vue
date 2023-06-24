<script>
import { store } from '../store.js';
export default {
    data(){
        return{
            store
        }
    },
    computed:{
        number(){
           return store.pokemonList.length
        }
    }
}
</script>
<template>
    <div>
        <p><strong>{{ number }}</strong> pokemon trovati</p>
        <input v-model="store.pokemonPage" @keyup.enter="$emit('search')" type="text" placeholder="Scrivi numero pagina">
        <label>Numero pagina da 1 a 105</label>
    </div>
</template>
<style lang="scss" scoped>
    strong{
        color: red;
    }
    input{
        margin: 15px;
    }
</style>