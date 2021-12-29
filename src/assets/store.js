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
        turn: Number
    },
    ads: [],
    shop: [],
    empty:{},
    prob : {
        "Suicide mission":"#5b0404",
        "Playing with fire":"#960202",
        "Rather detrimental":"#e31806",
        "Risky":"#e84a11",
        "Gamble":"#ec7907",
        "Hmmm....":"#e7b309",
        "Quite likely":"#d7e518",
        "Walk in the park":"#71d716",
        "Piece of cake":"#06b919",
        "Sure thing":"#02ab29"}
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

}
//export store module
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations, plugins: [createPersistedState()]
})