<template>
  <div>
    <div v-for="(ad, i) in get_ads" :key="i">* {{ad.message}}</div>
  </div>
</template>

<script>
export default {
  name: "AdsList",
  data: function (){
    return {

    }
  },
  computed:{
    get_ads(){
      return this.$store.state.ads
    },
  },
  mounted() {
    this.$store.commit("updateAds")
  }
}
</script>

<style scoped>

</style>