<template>
<div>






<footer class="secPadMed">

<div class="container">


<div class="row">



<div v-if="footer.newsletter" class="col-md-6 col-12 mb40">




<h4>{{footer.newsletter.header}}
</h4>
<p>  
{{footer.newsletter.description}}
</p>
<EmailSignup />
</div>

<div v-if="footer.footer_links" v-for="linkgroup in footer.footer_links"class="col-md-3 col-12" style="display:none;">
<ul>
<li>

<h4>
{{linkgroup.link_group_title}}
</h4>
</li>
<li v-for="link in linkgroup.link_group">
    <a v-if="link.links.new_tab" target="_blank" :href="link.links.link">{{link.links.text}}</a>
    <a v-else :href="link.links.link">{{link.links.text}}</a>
</li>
</ul>
</div>


</div>
</div>
</footer>


</div>
</template>

<script>


import EmailSignup from '@/components/EmailSignup.vue'


export default{
components: {
EmailSignup
},
data(){
return{

      footer: null
}
},
methods:{
    async globalFooter(){



this.footer = this.$store.state.footer;

}



    
},
    mounted(){

this.globalFooter();
    }

}

</script>





<style lang="scss">


footer h4{
    text-align: left;
    color: #fff;
}


footer ul{
    list-style-type: none;
    padding-left: 0;
}

footer{
    background: black;
}

footer p,
footer ul li h4,
footer ul li a{
    color: #fff;
}

footer p{
    font-size: 12px;
}

footer ul li{
    margin-bottom: 6px;
    a{
        font-size: 12px;
    }

}
.mb40{
    margin-bottom: 40px;
}
</style>

