<template>

    <div>    <div>
        <!-- <button class="btn btn-primary right-hide-modal" @click="hideUserModal">hide</button> -->
        <div class="container nav-acc-header pad-yellow-background">

        <AllTransactions />
          
    </div>
        </div>
      
        </div>
</template>

<script type="text/javascript">

import AllTransactions from "@/components/AllTransactions";



export default {
name: 'UserProfile',
  components: {

   AllTransactions
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