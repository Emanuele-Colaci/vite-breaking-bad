import { reactive } from "vue";

export const store = reactive({
    apiUrl: 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=10',
    pageUrl: '',
    pageString: '&page=',
    totalPages: 105,
    minPage: 1,
    current_page: 1,
    pokemonType: '',
    pokemonText: '',
    pokemonPage: [],
    pokemonList: [],
    loading: true
})