<template>
  <div class="">

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "adsCard",
  methods:{
    solve_ad: function(adId){
      axios
          .post('https://dragonsofmugloar.com/api/v2/'+this.get_game_session.gameId+'/solve/'+adId)
          .then(response => {
            this.solve_info = response.data;
            var update = {
              lives: this.solve_info["lives"],
              gold: this.solve_info["gold"],
              score: this.solve_info["score"],
              turn: this.solve_info["turn"]
            }
            /**success	Boolean => Whether the attempt to solve the message was successful.
             lives	Number => Amount of lives left after the attempt
             gold	Number => Amount of gold after the attempt
             score	Number => Score after the attempt
             highScore	Number => The current highest score
             turn	Number => Current turn number
             message	String => Text explanation of what happened on the last turn.**/
            this.$store.commit("updateState", update)
            this.$store.commit("updateAds")
          })
    }
  },computed:{

  },
  mounted () {
    axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => (this.info = response))
  }
}
</script>

<style scoped>

</style>