<template>
  <div class="menu d-flex flex-column px-3">
    <div class="hud d-flex flex-row position-fixed fixed-top pt-3 mx-3 justify-content-between bg-white">
      <div class="d-flex flex-column">
        <b-row class="d-flex flex-row justify-content-between m-0">
          <b-row class="lives-panel m-0">
            <div v-for="times in get_lives" :key="times" >
              <b-icon-heart-fill style="color: var(--bloody);" class="mr-1"></b-icon-heart-fill>
            </div>
          </b-row>
            <div>
              <span>
                <b-icon-clock style="color: var(--black-red)" class="mr-1"/>{{get_turn}}</span>
            </div>
        </b-row>
        <b-row class="d-flex flex-row justify-content-between m-0">
          <div>
            <span>
              <b-icon-dash-circle-fill style="color: var(--yellow-money)"/>
              X{{get_gold}}
            </span>
          </div>
          <div>
            <span>
              <b-icon-star style="color: var(--yellow-money)"/>{{get_score}}
            </span>
          </div>
        </b-row>
      </div>
      <div class=" d-flex flex-row justify-content-between">
        <b-form-group class="">
          <b-form-radio-group
              id="btn-radios-1"
              v-model="selected"
              name="radios-btn-default"
              buttons
              button-variant="link"
              class="display-2 p-0"
          >
            <b-form-radio value="ads" class="p-0">
              <svg class="d-block b-icon bi ml-3 mt-3" width="1.6em" height="1.6em" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 720 720" style="enable-background:new 0 0 512 512;" xml:space="preserve">
              <g fill="#e5bf18" fill-rule="nonzero">
                <path d="M128,0C92.9,0,64,28.9,64,64v298.7H0V448c0,35.1,28.9,64,64,64h298.7h0.7c34.8-0.3,63.3-29.2,63.3-64V149.3H512V64
                  c0-35.1-28.9-64-64-64H128z M128,42.7h260c-2.4,6.7-4,13.8-4,21.3v384c0,12.1-9.3,21.3-21.3,21.3c-12,0.2-21.2-9.3-21.3-21.3
                  l-0.7-85.3h-234V64C106.7,51.9,115.9,42.7,128,42.7z M448,42.7c12.1,0,21.3,9.3,21.3,21.3v42.7h-42.7V64
                  C426.7,51.9,435.9,42.7,448,42.7z M42.7,405.3h170.7H298h0.7V448v0.7c0.1,7.3,1.6,14.1,4,20.7H64c-12.1,0-21.3-9.3-21.3-21.3V405.3
                  z"/>
              </g>
            </svg>
            </b-form-radio>
            <b-form-radio value="shop" class="p-0">
              <svg class="d-block b-icon bi ml-3 mr-2 mt-3" width="1.6em" height="1.6em" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>noun-potion-shop-886715</title>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="noun-potion-shop-886715" transform="translate(0.645000, 6.515000)" fill="#e5bf18" fill-rule="nonzero">
                    <path d="M14.7339083,8.782982 C14.7339083,9.4627235 14.1834933,10.0127246 13.5041657,10.0127246 C12.8244242,10.0127246 12.2744231,9.46230964 12.2744231,8.782982 L12.2744231,3.65631147 C12.2744231,2.97656997 12.824838,2.42656887 13.5041657,2.42656887 C14.1839072,2.42656887 14.7339083,2.97698383 14.7339083,3.65631147 L14.7339083,8.782982 Z" id="Path"></path>
                    <path d="M35.7252882,8.782982 C35.7252882,9.4627235 35.1748732,10.0127246 34.4959306,10.0127246 C33.8161891,10.0127246 33.265418,9.46230964 33.265418,8.782982 L33.265418,3.65631147 C33.265418,2.97656997 33.8162083,2.42656887 34.4959306,2.42656887 C35.1749213,2.42656887 35.7252882,2.97698383 35.7252882,3.65631147 L35.7252882,8.782982 Z" id="Path"></path>
                    <path d="M45.5742011,4.85034659 L36.0968962,4.85034659 L36.0968962,3.6555415 C36.0968962,2.77277746 35.3788101,2.05428708 34.4956418,2.05428708 C33.6121271,2.05428708 32.8943874,2.77274858 32.8943874,3.6555415 L32.8943874,4.85034659 L15.1041689,4.85034659 L15.1041689,3.6555415 C15.1041689,2.77277746 14.3857074,2.05428708 13.5029145,2.05428708 C12.6201216,2.05428708 11.9008901,2.77274858 11.9008901,3.6555415 L11.9008901,4.85034659 L-2.73549244e-15,4.85034659 L-2.73549244e-15,0 L45.5746823,0 C46.9120286,0 48,1.08806763 48,2.42531766 C48,3.7625677 46.9115474,4.85025034 45.5739124,4.85025034 L45.5742011,4.85034659 Z M37.2108542,3.73677361 L45.5748748,3.73677361 C46.2982257,3.73677361 46.8866195,3.14838937 46.8866195,2.42502892 C46.8866195,1.70166847 46.2982353,1.11328423 45.5748748,1.11328423 L35.4506967,1.11328423 C36.4778402,1.5008981 37.2109505,2.49423022 37.2109505,3.65515651 L37.2108542,3.73677361 Z M16.2185118,3.73677361 L31.7815844,3.73677361 L31.7815844,3.65556556 C31.7815844,2.49463927 32.5139632,1.50127827 33.5414532,1.11369328 L14.458643,1.11369328 C15.4854016,1.50130715 16.2185118,2.49463927 16.2185118,3.65556556 L16.2185118,3.73677361 Z M1.11357297,3.73677361 L10.7882796,3.73677361 L10.7882796,3.65556556 C10.7882796,2.49463927 11.5206583,1.50127827 12.5481484,1.11369328 L1.11405421,1.11369328 L1.11357297,3.73677361 Z" id="Shape" stroke="#e5bf18" stroke-width="0.3"></path>
                    <path d="M40.7483974,36.2815934 L7.25266132,36.2815934 L1.35457442,21.5558661 L7.25189135,6.83013882 L11.9029113,6.83013882 L11.9029113,8.78211578 C11.9029113,9.66487982 12.6209974,10.3833702 13.5041657,10.3833702 C14.3869297,10.3833702 15.1054201,9.6649087 15.1054201,8.78211578 L15.1054201,6.83013882 L32.8946762,6.83013882 L32.8946762,8.78211578 C32.8946762,9.66487982 33.6127623,10.3833702 34.4959306,10.3833702 C35.3794453,10.3833702 36.097955,9.6649087 36.097955,8.78211578 L36.097955,6.83013882 L40.7489749,6.83013882 L46.6460031,21.5558661 L40.7483974,36.2815934 Z M8.0053096,35.1680205 L39.9947866,35.1680205 L45.4455194,21.5558661 L39.9947866,7.94467426 L37.210758,7.94467426 L37.210758,8.78269326 C37.210758,10.2801939 35.9926612,11.4975206 34.4959306,11.4975206 C32.9992,11.4975206 31.7811032,10.2798089 31.7811032,8.78269326 L31.7811032,7.94467426 L16.2180306,7.94467426 L16.2180306,8.78269326 C16.2180306,10.2801939 14.9999338,11.4975206 13.5032032,11.4975206 C12.0064726,11.4975206 10.7883758,10.2798089 10.7883758,8.78269326 L10.7883758,7.94467426 L8.00511711,7.94467426 L2.55322937,21.5558661 L8.0053096,35.1680205 Z" id="Shape" stroke="#e5bf18" stroke-width="0.3"></path>
                    <path d="M22.6367153,31.9312507 C21.178387,31.9312507 19.7594236,31.5075415 18.5338196,30.7067026 C16.854413,29.609299 15.7024376,27.9226739 15.290791,25.9594361 C14.8791155,23.9954283 15.2569546,21.9892645 16.355182,20.3098579 C17.7470038,18.1796322 20.0993666,16.9085036 22.6484573,16.9085036 C22.8559842,16.9085036 23.0657729,16.9171508 23.2736848,16.9344449 L24.2643509,15.4181762 C24.1451687,15.2719296 24.062079,15.0989841 24.023359,14.9106295 C23.9575658,14.5985788 24.0173436,14.2793867 24.1921659,14.0128318 C24.4136101,13.6748426 24.7873163,13.4729462 25.1918792,13.4729462 C25.4234677,13.4729462 25.6490505,13.5398674 25.8434204,13.6669408 L31.2054139,17.1708939 C31.7562042,17.5310679 31.9118445,18.2720511 31.5520556,18.8224853 C31.2719588,19.2514563 30.7226795,19.4548542 30.2365573,19.3206384 L29.2447362,20.836907 C30.5673568,23.2731006 30.4531121,26.1992854 28.9311841,28.5287415 C27.5378223,30.6585822 25.1850746,31.9312507 22.63685,31.9312507 L22.6367153,31.9312507 Z M22.6479944,17.6501798 C20.3508772,17.6501798 18.2311424,18.7960916 16.9761832,20.715441 C15.9877308,22.2293997 15.6464404,24.0371031 16.017856,25.8066927 C16.3893101,27.5763787 17.4262322,29.096016 18.939806,30.0851421 C20.0451018,30.8073669 21.3230639,31.1889942 22.6366373,31.1889942 C24.9337545,31.1889942 27.054163,30.0426974 28.3095072,28.1222893 C29.7190384,25.9654034 29.7885284,23.2393151 28.4895942,21.0094743 L28.374926,20.8117164 L29.9750255,18.3631071 L30.2772975,18.5307879 C30.5615233,18.7112502 30.7995122,18.618763 30.9299648,18.4179965 C31.0668178,18.2093339 31.0081652,17.9296221 30.7995026,17.7938952 L25.4371242,14.289557 C25.2348523,14.1575934 24.9446111,14.2196281 24.8141489,14.4203947 C24.7479794,14.5211552 24.7250457,14.6414634 24.7498591,14.7595099 C24.774297,14.8771906 24.8434743,14.9783168 24.9446044,15.044111 L25.2551536,15.2471336 L25.0585219,15.5618118 L23.646777,17.7213926 L23.4193174,17.6954513 C23.1636672,17.6649979 22.9049949,17.6503357 22.6478433,17.6503357 L22.6479944,17.6501798 Z" id="Shape" stroke="#e5bf18"></path>
                    <path d="M26.4519298,13.6944452 L27.0696404,11.8154231 C27.2722876,11.5056246 27.7546466,11.462766 28.1482759,11.7195529 L32.0639719,14.2779795 C32.4568505,14.5351408 32.6117497,14.9941889 32.4091025,15.3035831 L30.9372035,16.62476 L26.4519298,13.6944452 Z" id="Path"></path>
                    <path d="M17.8128365,21.2613516 C16.0691371,23.9288257 16.8180318,27.5049637 19.4862758,29.2486631 C22.1537499,30.9915925 25.729888,30.2430828 27.4728174,27.5744538 C27.4728174,27.5744538 28.3574582,25.8935072 27.3709307,24.9941791 C26.3836333,24.0952552 23.270345,25.3618699 21.460043,23.4678045 C19.650511,21.5736717 19.1215398,20.9067792 18.5711056,20.8687618 C18.0203152,20.8300379 17.8127884,21.261265 17.8127884,21.261265 L17.8128365,21.2613516 Z" id="Path"></path>
                  </g>
                </g>
              </svg>
            </b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </div>

      <b-modal ref="gameOver" hide-footer title="GameOver">
        <div class="d-block text-center">
          <h3>{{this.$store.state.game_session.gameOver}}</h3>
        </div>
        <b-button class="mt-3" variant="outline-warning" block @click="go_to_start()">Start New Game</b-button>
      </b-modal>

      <div class="" v-b-popover.hover.leftbottom="reputationData" >
        <b-iconstack font-scale="2" class="m-2">
          <b-icon-bar-chart-fill stacked style="color: var(--yellow-money)"></b-icon-bar-chart-fill>
          <b-icon-search stacked style="color: #5b0404" ></b-icon-search>
        </b-iconstack>
      </div>
    </div>


    <div class="mx-2 mt-5">
      <div v-if="selected==='ads'"><AdsList></AdsList></div>
      <div v-else><Shop></Shop></div>
    </div>


  </div>
</template>

<script>
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
   }
  },
  methods:{
    go_to_start: function() {
      this.$router.push("/");
    },
    showModal() {
      this.$refs['gameOver'].show()
    }

  },
  computed: {
    get_reputation(){
      return this.$store.state.reputation
    },
    get_score(){
      return this.$store.state.game_session.score
    },
    get_lives(){
      if (this.$store.state.game_session.lives ===0){
        this.showModal()
      }
      return this.$store.state.game_session.lives
    },
    get_gold(){
      return this.$store.state.game_session.gold
    },
    get_turn(){
      return this.$store.state.game_session.turn
    },
    reputationData() {
      let body = "<div class='d-flex flex-column'>" +
          "<span> People: "+this.$store.state.reputation.people+"</span>"+
          "<span> State: "+this.$store.state.reputation.state+"</span>"+
          "<span> Underworld: "+this.$store.state.reputation.underworld+"</span>"+
          "</div>"
      return {
        html: true,
        title: "Reputation",
        content: body
      }
    },
  },
  mounted() {
  }
}
</script>

<style scoped>
.btn .b-icon.bi{
  font-size: 180%;
}
</style>