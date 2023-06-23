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
    </div>
</template>
<style lang="scss" scoped>
    strong{
        color: red;
    }
</style>