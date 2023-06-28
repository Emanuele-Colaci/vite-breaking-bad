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
      this.apiPokemon()
    },
    methods:{
      apiPokemon(){
          let myUrl = store.apiUrl

          if(this.store.pokemonType !== ''){
              myUrl += `&eq[type1]=${this.store.pokemonType} `
          }

          if(this.store.pokemonText !== ''){
            myUrl += `&q[name]=${this.store.pokemonText} `
          }

          axios.get(myUrl).then((pokemon) => {
              store.pokemonList = pokemon.data.docs;
              store.loading = false
          })
      },
      nextPage(){
           let pageNext= store.pageString + store.current_page
        if(store.current_page <= store.totalPages){
          store.current_page++
            
          let pageUrl = store.apiUrl + pageNext
           
          console.log(pageUrl)
          axios.get(pageUrl).then((response)=> {
            store.pokemonList = response.data.docs})
            store.loading = false
            return pageUrl, pageNext
        }else{
            store.current_page= store.minPage
            let pageUrl = store.apiUrl + store.pageString + store.current_page
            
            axios.get(pageUrl).then((response)=> {
              store.pokemonList = response.data.docs})
              store.loading = false
              return pageUrl
        }
      },
      //pagina precedente
      prevPage(pageUrl){
        if(store.current_page <= store.minPage){
          let last_page = store.totalPages
          last_page--
          store.current_page = store.totalPages
          let pagePrev = store.pageString + last_page
          pageUrl = store.apiUrl + pagePrev
          axios.get(pageUrl).then((response)=> {
            store.pokemonList = response.data.docs})
            store.loading = false
          return  pagePrev, store.myUrl, pageUrl, last_page
        }else{
          store.current_page--
          let pagePrev =store.pageString+ store.current_page
          pageUrl= store.apiUrl + pagePrev
          axios.get(pageUrl).then((response)=> {
            store.pokemonList = response.data.docs})
            store.loading = false
        }
      }
    }
}
</script>
<template>
  <div>
    <AppHeader @search="apiPokemon"/>
    <AppMain @next_page="nextPage" @prev_page="prevPage"/>
  </div>
</template>
<style lang="scss">
  @use './styles/generals.scss' as *;
  @use './styles/partials/variables' as *;
</style>