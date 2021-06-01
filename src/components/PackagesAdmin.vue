<template>    

<div class="container pad-yellow-background pd50">
{{packages}}
</div>

</template>    
<script>
export default{
name: 'PackagesAdmin',
data(){
    return{
        packages: null
    }
},
methods:{
  async retrievePackages() {
              console.log('retriev orders frome')



    let responseUpserve = await this.$http.get(`/package/retrieve`);


    this.packages = responseUpserve.data.packs;




    }
},
    mounted(){
this.retrievePackages()
    }
}
</script>  