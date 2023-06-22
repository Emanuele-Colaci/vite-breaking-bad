<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { store } from './store.js';
export default {
    components:{
      AppHeader,
      AppMain
    },
    data(){
        return{
            store
        }
    },
    mounted(){
        axios.get(store.apiUrl).then((pokemon) => {
            store.pokemonList = pokemon.data.docs;
            store.loading = false
        })
    }
}
</script>
<template>
  <div>
    <AppHeader />
    <AppMain />
  </div>
</template>
<style lang="scss">
  @use './styles/generals.scss' as *;
  @use './styles/partials/variables' as *;
</style>