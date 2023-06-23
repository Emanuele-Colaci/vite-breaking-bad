<script>
import { store } from '../store.js';
export default {
    data(){
        return{
            store,
            types: [
                "Bug",
                "Dark",
                "Dragon",
                "Electric",
                "Fairy",
                "Fighting",
                "Fire",
                "Flying",
                "Ghost",
                "Grass",
                "Ground",
                "Ice",
                "Normal",
                "Poison",
                "Psychic",
                "Rock",
                "Steel",
                "Water",
                "White",
                "Yellow"
            ]
        }
    },
    methods: {
        search() {
            this.$emit('search');
        }
    }
}
</script>
<template>
    <div class="container d-flex align-start justify-between">
        <div>
            <div class="blue">
                
            </div>
            <div class="red">
                
            </div>
            <div class="yellow">
        
            </div>
            <div class="green">
        
            </div>
        </div>
        <div>
            <input type="text" v-model="store.pokemonText" placeholder="Pokemon" @keyup.enter="$emit('search')">
        </div>
        <div>
            <select v-model="store.pokemonType" @change="search">
                <option value="" selected>Seleziona stato</option>
                <option v-for="(type, index) in types" :key="index" :value="type">{{ type }}</option>
            </select>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .blue, .red, .yellow, .green{
        border: 3px solid #fff;
        margin-right: 10px;
        display: inline-block;
        border-radius: 50%;
    }
    .blue{
        width: 50px;
        height: 50px;
        background-color: blue;
    }

    .red, .yellow, .green{
        width: 30px;
        height: 30px;
    }
    .red{
        background-color: red;
    }
    .yellow{
        background-color: yellow;
    }
    .green{
        background-color: green;
    }
</style>