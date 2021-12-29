<template>
 <div>
   <div v-for="(item, i) in items" :key="i">* {{item.name}}</div>
 </div>
</template>

<script>
import axios from "axios";
/**  id	String
 Item unique identifier

 name	String
 Item name

 cost	Number
 Item cost in gold**/
export default {
  name: "Shop",
  data: function(){
    return{
      ads:[],
      purchase:{}
    }
  },
  methods:{
    buy: function (itemId){
      axios.post("https://dragonsofmugloar.com/api/v2/"+this.get_game_session.gameId+"/shop/buy/"+itemId)
          .then(response => {
            this.purchase = response.data
            /**shoppingSuccess	String
             Whether or not the purchase was successful

             gold	Number
             Amount of gold left after the transaction.

             lives	Number
             Amount of lives left after the transaction

             level	Number
             Dragon level after transaction

             turn	Number
             Current turn. Note the turn increases even if the purchase is unsuccessful.**/
            this.$store.commit("updateShop")
          })
    }
  },
  computed: {
    get_game_session(){
      return this.$store.state.game_session
    },
    items(){
      return this.$store.state.shop
    },
  },
  mounted () {
    this.$store.commit("updateShop");
  }
}
</script>

<style scoped>

</style>