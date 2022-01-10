<template>
    <div>    <div>
        <!-- <button class="btn btn-primary right-hide-modal" @click="hideUserModal">hide</button> -->
        <div class="container nav-acc-header pad-yellow-background">
        <TodaysTransactions />
    </div>
        </div>
      
        </div>
</template>

<script type="text/javascript">

import TodaysTransactions from "@/components/TodaysTransactions";
import VueJwtDecode from "vue-jwt-decode";


export default {
name: 'UserProfile',
data () {
return {
externalTransactionId: '',
pollResults: {}
}
},
  components: {

  TodaysTransactions
  },
  methods:{
        logUserOut() {
      localStorage.removeItem("jwt");
      this.$router.push("/");
    },
retrievePoll(suppliedId){
console.log(suppliedId)
// Optionally the request above could also be done as

let self = this

this.$http.get('/order/polling-request', {
    params: {
   externalTransactionId: suppliedId
    }
  })
  .then(function (response) {
    console.log(response);
    self.pollResults = response
  })
  .catch(function (error) {
    console.log(error);
  })


}

  }

}
</script>

<style lang="scss">
.fixed-profile{
    position: fixed;
    top: 142px;
    width: 100%;
    background: #ffffff;
    padding: 30px 0;
    z-index: 99;
    height: 100vh;
}


.right-hide-modal{
    float: right;
    margin-right: 20px;
}

.pad-yellow-background{
    // background: #fff367;
    padding: 20px 30px;
    margin-bottom: 20px;
}

.container.pad-yellow-background{
  padding-left: 0 !important;
  padding-right: 0 !important;
  padding-top: 0 !important;
}


@media only screen and (max-width: 1080px) {
  .fixed-profile{
    top: 92px;
}  
}

</style>