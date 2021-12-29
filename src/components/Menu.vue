<template>
  <div>
    <div class="lives-panel">
      <div v-for="times in this.get_game_session.lives" :key="times">"V"</div>
      <p>{{this.get_game_session.gameId}}</p>
      <p>{{this.get_game_session.gold}}</p>
      <p>{{this.get_game_session.score}}</p>
      <p>{{this.get_game_session.turn}}</p>
    </div>
    <b-form-group>
      <b-form-radio-group
          id="btn-radios-1"
          v-model="selected"
          :options="options"
          name="radios-btn-default"
          buttons
      />
    </b-form-group>
    <div>
      <div v-if="selected==='ads'"><AdsList></AdsList></div>
      <div v-else><Shop></Shop></div>
    </div>


  </div>
</template>

<script>
import axios from "axios"
import Shop from "@/components/Shop";
import AdsList from "@/components/AdsList";
//icons
// shop-window
// heart-fill
// files
// dash-circle-fill
// clock
// person-fill
// building
// search
export default {
  name: "Menu",
  components: {Shop, AdsList},
  data: function () {
   return {
     investigation:{},
     selected: 'ads',
     options: [
       { text: 'Ads', value: 'ads' },
       { text: 'Shop', value: 'shop' },
     ]
   }
  },
  methods:{
    go_to_shop: function() {
      this.$router.push("/Shop")
    },
    investigate: function(){
      axios
          .post('https://dragonsofmugloar.com/api/v2/'+this.get_game_session.gameId+'/investigate/reputation')
          .then(response => (this.investigation = response.data))
    }
  },
  computed: {
    get_game_session(){
      return this.$store.state.game_session
    }
  },
  mounted() {
    this.$store.commit("updateAds")
  }
}
</script>

<style scoped>

</style>