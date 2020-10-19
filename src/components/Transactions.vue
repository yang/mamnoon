<template>

    <div>    <div>
        <!-- <button class="btn btn-primary right-hide-modal" @click="hideUserModal">hide</button> -->
        <div class="container nav-acc-header pad-yellow-background">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" @click="logUserOut"> Logout</a>
            </li>
          </ul>
        <AllTransactions />
          <div>

polling:

<input type="text" v-model="externalTransactionId" />
{{externalTransactionId}}
<button @click="retrievePoll(externalTransactionId)">
  retrive
</button>

{{pollResults}}


          </div>
    </div>
        </div>
      
        </div>
</template>

<script type="text/javascript">

import AllTransactions from "@/components/AllTransactions";
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

   AllTransactions
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

this.$http.get('/polling-request', {
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
    background: #fff367;
    padding: 20px 30px;
    margin-bottom: 20px;
}




@media only screen and (max-width: 1080px) {
  .fixed-profile{
    top: 92px;
}  
}

</style>