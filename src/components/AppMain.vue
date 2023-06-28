<script>
import AppPokemon from './AppPokemon.vue';
import { store } from '../store.js';
import AppLoad from './AppLoad.vue';
import AppMessage from './App.message.vue';
export default {
    components:{
        AppPokemon,
        AppLoad,
        AppMessage
    },
    data(){
        return{
            store
        }
    }
}
</script>
<template>
    <div>
        <div class="container grey d-flex flex-direction" v-if="store.loading === false">
            <button class="btn btn-custom " @click="$emit('next_page')">next</button>
            <div class="black d-flex" >
                <div v-for="(pokemon, index) in store.pokemonList" :key="index" class="pokemon">
                    <AppPokemon :Pokemon="pokemon"/>
                </div>
            </div>
            <AppMessage @search="updatePage"/>
            <button class="btn btn-custom " @click="$emit('prev_page')">prev</button>
        </div>
        <AppLoad v-else/>
    </div>
</template>
<style lang="scss" scoped>
    .grey{
        background-color: #dedede;
        border-radius: 20px;
        height: 80vh;
        text-align: center;
        .black{
            background-image: linear-gradient(to right, #40464B 70%, #777B7F );
            width: 800px;
            margin: 2rem auto;
            overflow-y: auto;
            flex-wrap: wrap;
            .pokemon{
                margin: 5px 10px;
                width: calc(100% / 5 - 20px);
            }
        }
    }

    @media screen and (max-width: 835px){
        .grey{
            .black{
                .pokemon{
                        width: calc(100% / 3 - 20px);
                }
    
            }
        }

    }
    @media screen and (max-width: 560px){
        .grey{
            .black{
                .pokemon{
                        width: calc(100% / 2 - 20px);
                }
    
            }
        }

    }
</style>