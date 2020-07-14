<template>
<div class="container section-pad">
<div class="row">

<div class="col-6 col-lg-3">

<h4>
  add a testimonial
</h4>

<form
  id="app"
@submit.prevent="checkForm"
>


  <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li :key="error" v-for="error in errors">{{ error }}</li>
    </ul>
  </p>


  <p>
    <label for="name">Title</label>
    <br>
    <input
      id="title"
      v-model="messageBody.title"
      type="text"
      name="title"
    >
  </p>


    <p>
    <label for="name">Body</label>
    <br>
    <textarea
      id="body"
      v-model="messageBody.body"
      type="text"
      name="body"
    ></textarea>
  </p>
  <p>
    <label for="name">Name</label>
    <br>
    <input
      id="name"
      v-model="messageBody.name"
      type="text"
      name="name"
    >
  </p>

  <p>
    <input
      type="submit"
      value="Submit"
    >
  </p>

</form>

</div>
<div class="col-6 col-lg-9 testimonials-list">
testimonials: 
<br>
<ul>

<li v-for="test in testimonials.slice().reverse()" :key="test.title">
    <b>{{test.title}}</b><br>
    <p>
       {{test.body}} 
    </p>

</li>

</ul>

</div>
</div>
</div>


</template>

<script type="text/javascript">

export default {
name: 'testimonialform',
data () {
return{
    errors: [],
    testimonials: null,
    messageBody: {
        title: null,
        body: null,
        name: null,
        email: this.emailAddress
    }
    }
  },
props: ['emailAddress'],
methods: {
    async checkForm() {
      try {
        let response = await this.$http.post("/user/submittestimonial", this.messageBody);
        // console.log(response.data.user.testimonials);
        console.log(response.data.usertestimonials)
        this.testimonials = response.data.user.testimonials

        this.messageBody = {
          title: null,
          body: null,
          name: null,
          email: this.emailAddress
        }
         } catch (err) {
        console.log(err.response);
      }
    },
    async getTestimonials() {

      try {
        let response = await this.$http.get("/user/gettestimonials/" + this.emailAddress);

        this.testimonials = response.data.usertestimonials
         } catch (err) {
        console.log(err.response);
      }

    },
    handler(){

        //  event.returnValue = 'Write something'
     console.log('page refresh')
     
     
     
    }
},
mounted () {
  console.log('mounted')
  this.getTestimonials()
},
updated () {
 console.log('updated')
   this.getTestimonials()
},
created() {
      window.addEventListener('beforeunload', this.handler)
    },
    beforeDestroy(){
      console.log('before destory')
    }
}
</script>

<style lang="scss">
li{
font-size: 10px;

 p{
  margin-bottom: 0;
}
}



.testimonials-list{
  // max-height: 400px;

  // overflow: scroll;
ul{
    max-height: 400px;
  // border: 1px solid black;
    border: 1px solid black;
  overflow: scroll;
  width: 90%;
  margin-top: 20px;
  padding-bottom: 40px;
  padding-top: 20px;
}
}




</style>