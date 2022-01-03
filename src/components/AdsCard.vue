<template>
    <div class="ad_card h-100 d-flex flex-column justify-content-between px-2 mt-1 border rounded" :style="change_color()">
      <h4 class="title text-left mt-2" >{{this.ad.message}}</h4>
      <div class="d-flex flex-column">
        <div class="d-flex flew-row position-relative justify-content-between align-items-end" style="top:30px;">
          <div class="flex-row">
            <svg width="70px" height="70px" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <!-- Generator: Sketch 61.2 (89653) - https://sketch.com -->
              <title>money bag</title>
              <desc>Created with Sketch.</desc>
              <g id="money-bag" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="bounding-box">
                  <polygon id="shape" points="0 0 240 0 240 240 0 240"></polygon>
                </g>
                <g id="money-bag-copy" fill="#e5bf18" transform="translate(56.700164, 35.000000)">
                  <path d="M43.6934825,0.407135794 C59.617292,4.24317039 67.5791968,4.24317039 83.5030063,0.407135794 C85.4787085,-0.0688094768 89.693989,-0.0688094768 96.1488478,0.407135794 C98.9936601,0.407135794 101.299836,2.58607069 101.299836,5.27392311 C101.299836,6.0382486 101.109302,6.79182889 100.743666,7.47362757 L83.3325013,39.9413224 C112.170088,61.4356471 126.491885,89.0975179 126.297892,122.926935 C126.206203,138.916007 119.298106,180 63.299824,180 C7.30154162,180 0.164079009,146.500358 0.301756318,122.926935 C0.495719255,89.716158 14.7740584,62.1165328 43.1367736,40.1280591 L25.8447688,7.45041657 C24.57253,5.04632828 25.6038833,2.12298034 28.1483608,0.920936201 C28.8636035,0.583046268 29.6522871,0.407135794 30.4519527,0.407135794 C37.0262175,-0.135711931 41.4400608,-0.135711931 43.6934825,0.407135794 Z" id="Combined-Shape" stroke="#340e0e" stroke-width="10"></path>
                  <rect id="tie" fill="#340e0e" x="49.2998361" y="37" width="10" height="27" rx="5"></rect>
                  <rect id="tie" fill="#340e0e" x="32" y="34" width="63" height="10" rx="5"></rect>
                  <rect id="coin" stroke="#340e0e" stroke-width="10" fill="#e5bf18" x="90" y="156" width="55" height="24" rx="12"></rect>
                  <rect id="coin" stroke="#340e0e" stroke-width="10" fill="#e5bf18" x="77.2998361" y="132" width="55" height="24" rx="12"></rect>
                  <rect id="coin" stroke="#340e0e" stroke-width="10" fill="#e5bf18" x="90.2998361" y="108" width="55" height="24" rx="12"></rect>
                </g>
              </g>
            </svg>
            <span class="position-relative" style="right: 45px; top: 5px">{{this.ad["reward"]}}</span>
          </div>
          <h4 class="m-0 px-1 pt-1" style="color: var(--black-red);">
            <b-icon-clock-history style="color: var(--black-red);"/>
            {{this.ad["expiresIn"]}}
          </h4>
        </div>
        <b-button @click="solve_ad()">
          Give it a try
        </b-button>
      </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "adsCard",
  props:["ad"],
  data: function (){
    return {
      solve_info: {}
    }
  },
  methods:{
    solve_ad: function(){
      axios.post('https://dragonsofmugloar.com/api/v2/'+this.get_game_session.gameId+'/solve/'+this.ad["adId"])
          .then(response => {
            this.solve_info = response.data;
            if (this.solve_info["lives"] === 0){
              this.$store.commit("updateState", {"gameOver": this.solve_info["message"]});
            }
            const update = {
              "lives": this.solve_info["lives"],
              "gold": this.solve_info["gold"],
              "score": this.solve_info["score"],
              "turn": this.solve_info["turn"]
            };
            /**success	Boolean => Whether the attempt to solve the message was successful.
             lives	Number => Amount of lives left after the attempt
             gold	Number => Amount of gold after the attempt
             score	Number => Score after the attempt
             highScore	Number => The current highest score
             turn	Number => Current turn number
             message	String => Text explanation of what happened on the last turn.**/
            this.$store.commit("updateState", update);
            this.$store.commit("updateAds");
            this.$store.commit("investigate");
            this.makeToast(this.solve_info, this.makeMessage(this.solve_info))
          });
    },
    change_color: function (){
      if(this.ad["encrypted"] === 1){
        this.ad["message"] = atob(this.ad["message"])
        this.ad["probability"] = atob(this.ad["probability"])
      }
      const prob = this.ad["probability"]
      return {
        backgroundColor: this.$store.state.prob[prob]
      }
    },
    makeToast(solve, message ) {
      this.$bvToast.toast( message, {
        title: solve["message"],
        toaster:"b-toaster-bottom-right",
        variant: solve["success"]?"success":"danger",
        solid: true,
        autoHideDelay: 5000,
        appendToast:true
      })
    },
    makeMessage(solve){
      const h = this.$createElement;
      const vNodesMsgSuccess = h(
          'div',
          { class: ['text-center', 'mb-0'] },
          [
            h('b-icon-dash-circle-fill', { style: { color: 'var(--yellow-money)' }}),
            '+'+this.ad["reward"],
            h('br'),
            h('b-icon-star', { style: { color: 'var(--yellow-money)' }}),
            '+'+this.ad["reward"],
          ]
      )
      const vNodesMsgFail = h(
          'div',
          { class: ['text-center', 'mb-0'] },
          [
            h('b-icon-heart-fill', { style: { color: 'var(--bloody)' }}),
            '-1',
          ]
      )
      return solve["success"]? vNodesMsgSuccess: vNodesMsgFail;
    }
  }
  ,computed:{
    get_game_session(){
      return this.$store.state.game_session
    }
  },
}
</script>

<style scoped>

</style>