<template>







  <div class="mamnoon">
    <Nav />

<NewsletterArchive />
  </div>
</template>
<script>
import NewsletterArchive from "@/components/NewsletterArchive";
import Nav from "@/components/Nav";
export default {
        metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Newsletter Archive',
      // all titles will be injected into this template
      titleTemplate: '%s | Nadi Mama'
  },
  components: {
    NewsletterArchive,
    Nav
  }
};
</script>


<style lang="scss">
.mamnoon{
  padding-top: 132px;
}

@media only screen and (max-width: 992px) {
  .mamnoon{
    padding-top: 112px;
}

}

h1{
 color: #F05D5B;
 text-align: center;
 margin: 30px auto;
}


.pad{
    padding-top: 50px;
    padding-bottom: 50px;
}


.pad-sm{
    padding-top: 25px;
    padding-bottom: 25px;
}

.mb20{
  margin-bottom: 20px;
}


.ff{
  h2{
color: #F05D5B;
  }

  h3{
font-style: italic;
font-size: 1em;
font-weight: bold;
  }

  p{

  }

  a{
    color: #F05D5B;
    text-decoration: underline;
  }
}



   @media only screen and (max-width: 992px) {

     .ff{
       padding-top: 0;
     }


.list-of-links{
  margin-top: 40px;
  a{
    display: block;
  }
}


   }

#gist ul{
    list-style-type: none;
    li{
        margin-bottom: 25px;
        border-bottom: 1px solid #ddd;
        padding-bottom: 26px;
    }
}

.ff a {
    color: #F05D5B;
    text-decoration: underline;
    // display: block;
    text-decoration: none;
    font-size: 1.4em;
    font-weight: 600;
}


</style>