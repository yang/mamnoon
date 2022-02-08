<template>
  <div>
    <Nav3 />
    <div
      style="width: 100%; margin: auto; text-align: center; padding-top: 1.5vh;"
    >
      <h5>work for mama</h5>
      <p style="margin-left: auto; margin-right: auto;">
        interested in joining mama's team? we're always looking for qualified
        applicants, and can't wait to hear from you.
      </p>
      <p style="margin-left: auto; margin-right: auto;">
        visit the links below to see current openings. when submitting your
        cover letter and resume, please be sure that all attachments are in pdf
        format. thank you
      </p>
    </div>
    <!-- Start of dynamic loading with top links -->
    <div class="nav-links">
      <a @click="showAlert('Retail')"><u>retail</u></a>
      <a @click="showAlert('Digital')"><u>digital</u></a>
      <a @click="showAlert('Restaurant')"><u>restaurants</u></a>
      <a @click="showAlert('All Jobs')"><u>all jobs</u></a>
    </div>
    <div v-if="jobsArr" v-for="item in jobsArr">
      <div class="postings">
        <h5>
          <b>{{ item.restaurant_name }}:</b> <i>{{ item.title }}</i>
        </h5>
        <p>{{ item.description }}</p>
        <hr />
      </div>
    </div>
    <GlobalFooter />
  </div>
</template>
<script>
import Nav3 from "@/components/Nav3";
import GlobalFooter from "@/components/GlobalFooter";
export default {
  data() {
    return {
      pageData: null,
      ffdata: null,
      jobsArr: null,
    };
  },
  components: {
    Nav3,
    GlobalFooter,
  },
  methods: {
    async individualRestaurant() {
      let responseAcf = await this.$http.get(
        `https://mamnoontogo.net/wp-json/acf/v3/restaurant/188`
      );
      let AcfBlock = responseAcf;
      this.pageData = AcfBlock.data.acf.content_fields;

      for (var item in AcfBlock.data.acf.content_fields) {
        // console.log(item)

        // console.log(AcfBlock.data.acf.content_fields[item].acf_fc_layout)

        let acf = AcfBlock.data.acf.content_fields;
        if (acf[item].acf_fc_layout === "careers") {
          console.log("acf[item]", acf[item]);
          this.ffdata = acf[item].careers_repeater;
        }
        this.jobsArr = this.ffdata;
      }

      await this.getB();
    },
    getB() {
      console.log("done");
      console.log(document);
    },
    showAlert(type) {
      console.log('type', type);
      const allJobs = this.ffdata;
      let retailArr = allJobs.filter((item) => item.type === "Retail");
      let digitalArr = allJobs.filter((item) => item.type === "Digital");
      let restArr = allJobs.filter((item) => item.type === "Restaurant");
      if(type === "Retail"){
        this.jobsArr = retailArr;
      } else if(type === "Digital"){
        this.jobsArr = digitalArr;
      } else if(type === "Restaurant"){
        this.jobsArr = restArr;
      } else if(type === "All Jobs"){
        this.jobsArr = allJobs;
      }
    },
  },
  mounted() {
    this.individualRestaurant();
  },
};
</script>

<style>
.careers {
  padding-top: 120px;
}

.careers p {
  margin-left: 37%;
  margin-right: 20%;
}

.postings {
  height: 100px;
  width: 400px;
  margin-left: 100px;
  margin-top: 50px;
}

.postings p {
  margin-left: auto;
}

.nav-links {
  margin-left: auto;
  margin-right: auto;
  width: 800px;
  font-size: 24px;
  padding-left: 7vw;
}

.nav-links a {
  margin-left: 20px;
  margin-right: 20px;
}
</style>
