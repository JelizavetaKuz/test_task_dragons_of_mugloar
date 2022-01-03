<template>
  <div>
    <img class="w-75" src="https://dragonsofmugloar.com/assets/logo.png"/>
    <br>
    <button type="button" class="btn btn-primary start" style="color: var(--yellow-money); background-color: var(--black-red)"  @click="go_to_menu()">Start Adventure</button>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "Start",
  data: function () {
    return {}
  },
  methods: {
    go_to_menu: function() {
      this.$router.push("/Menu");
    }
  },
  mounted () {
    axios
        .post('https://dragonsofmugloar.com/api/v2/game/start')
        .then(response =>  {
          this.$store.commit("changeGame", response.data);
          this.$store.commit("updateShop");
          this.$store.commit("updateAds");
          this.$store.commit("investigate");
        });
    console.log(this.$store.state)

  }
}
</script>

<style scoped>

</style>