<template>
  <div class="ads_list d-flex flex-row flex-wrap mr-3 my-5">
    <div v-for="(ad, i) in get_ads" :key="i" class="col-xs-8 col-sm-4 col-lg-3 col-xl-2 my-1 mx-auto px-2" >
      <AdsCard :ad="ad"></AdsCard>
    </div>
  </div>
</template>

<script>
import AdsCard from "@/components/AdsCard";
export default {
  name: "AdsList",
  components:{AdsCard},
  data: function (){
    return {
      purchase:{}
    }
  },
  computed:{
    get_ads(){
      return this.$store.state.ads
    },
  },
  mounted() {
  }
}
</script>

<style scoped>

</style>