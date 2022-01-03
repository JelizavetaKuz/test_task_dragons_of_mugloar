import Vuex from 'vuex'
import axios from "axios";
import Vue from "vue";
import createPersistedState from 'vuex-persistedstate'


Vue.use(Vuex);

//to handle state
const state = {
    game_session: {
        gameId:	String,
        lives:	Number,
        gold:	Number,
        level:	Number,
        score:	Number,
        highScore:	Number,
        turn: Number,
        gameOver: String,
    },
    ads: [],
    shop: [],
    reputation:{
        people: Number,
        state: Number,
        underworld: Number
    },
    prob : {
        "Impossible":"#b303c7",
        "Suicide mission":"#ff2a83",
        "Playing with fire":"#fd4161",
        "Rather detrimental":"#ff1818",
        "Risky":"#ff6118",
        "Gamble":"#fd952e",
        "Hmmm....":"#e7b309",
        "Quite likely":"#d7e518",
        "Walk in the park":"#71d716",
        "Piece of cake":"#06b919",
        "Sure thing":"#0b5d47"}
}


//to handle state
const getters = {
}

//to handle actions
const actions = {

}

//to handle mutations
const mutations = {
    changeGame (state, payload) {
        state.game_session = payload;
    },
    updateState(state, payload){
        Object.assign(state.game_session, payload)
    },
    updateAds(state) {
        axios.get('https://dragonsofmugloar.com/api/v2/'+ state.game_session.gameId +'/messages')
            .then(response => {state.ads = response.data})
    },
    updateShop(state) {
        axios.get('https://dragonsofmugloar.com/api/v2/'+ state.game_session.gameId +'/shop')
            .then(response => {state.shop = response.data})
    },
    investigate(state){
        axios
            .post('https://dragonsofmugloar.com/api/v2/'+state.game_session.gameId+'/investigate/reputation')
            .then(response => (state.reputation = response.data))
    }

}
//export store module
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations, plugins: [createPersistedState()]
})