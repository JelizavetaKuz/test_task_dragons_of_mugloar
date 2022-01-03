<template>
  <div class="shop d-flex flex-row flex-wrap mr-3 my-5">
    <div v-for="(item, i) in items" :key="i" class="col-xs-8 col-sm-6 col-md-4 col-lg-3 my-1 mx-auto px-2" >
      <ShopItem :item="item"></ShopItem>
    </div>
  </div>
</template>

<script>
import ShopItem from "@/components/ShopItem";
/**  id	String
 Item unique identifier

 name	String
 Item name

 cost	Number
 Item cost in gold**/
export default {
  name: "Shop",
  components: {ShopItem},
  data: function(){
    return{
    }
  },
  methods:{
  },
  computed: {
    items(){
      return this.$store.state.shop
    },
  },
  mounted () {
  }
}
</script>

<style scoped>

</style>