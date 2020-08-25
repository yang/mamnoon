<template>
    <section :id="tag" class="section hero is-primary is-fullheight mb-80">
      <div class="newsletter-section">
        <div class="pad-cont">
            <h4 class="noselect">
             {{header}}
            </h4>
            <p class="thick-white noselect">
          {{body}}
            </p> 
        </div>
      </div>
      <div class="newsletter-section">
        <div class="pad-cont" style="padding-top: 25px;">
            <CampaignMonitor />
        </div>
      </div>



    </section>
</template>



<script>

import CampaignMonitor from '@/components/CampaignMonitor.vue'

import Send from '@/components/Send.vue'

export default {
props: ['title', 'description','header','body'],
components: {
    Send,
    CampaignMonitor
}


};
</script>



<style lang="scss">
#newsletter{
    margin-bottom: 100px;
    padding: 0;
    display: inline-block;
    width: 100%;
}



.newsletter-section{
    width: 50%;

    display: inline-block;
    h4{
        text-align: left;
    }
    .pad-cont{
           padding: 20px 30px;
    }
}

@media only screen and (max-width: 960px) {
.newsletter-section{
    width: 100%;
    display: inline-block;
    text-align: left;
    padding-bottom: 0px;
    h4{
        text-align: left;
    }
    .pad-cont{
        padding: 20px 30px;
    }


    &:first-child{
        .pad-cont{
            padding-bottom:0;
            p{
                margin-bottom: 0;
            }
        }
    }

&:nth-child(2){
       .pad-cont{
        padding-bottom: 15px;
       }
}

}



}


.thick-white{
    color: white;
    font-weight: 600;
    margin-bottom: 0;
}



</style>