<template>
  <div>
    <Nav3 />
    <div class="main-content">
      <h5>work for mama</h5>
      <p>
        interested in joining mama's team? we're always looking for qualified
        applicants, and can't wait to hear from you.
      </p>
      <p>
        visit the links below to see current openings. when submitting your
        cover letter and resume, please be sure that all attachments are in pdf
        format. thank you
      </p>
      <p>
        for current opportunities at our restaurants and commissary, visit
        <a href="http://www.poachedjobs.com">poachedjobs.com</a> and search by
        the name of the restaurant you're interested in.
      </p>
      <p>
        for current openings in our head office, visit
        <a href="http://www.indeed.com">indeed.com</a> and search for mama restaurant
        group.
      </p>
    <div class="image"></div>
    </div>
    <!-- spot for image -->
    <footer>
      <GlobalFooter />
    </footer>
  </div>
</template>
<script>
import Nav3 from "@/components/Nav3";
import GlobalFooter from "@/components/GlobalFooter";
export default {
  components: {
    Nav3,
    GlobalFooter,
  },
};
</script>

<style lang="scss">

.bottom {
  position: fixed !important;
  bottom: 0 !important;
  width: 100vw !important;
  margin-left: auto !important;
  margin-right: auto !important;
}

.image {
  @media only screen and (max-width: 992px){
    width: 80%;
    height: 80%;
    background-repeat: no-repeat;

  }
  width: 550px;
  height: 550px;
  background-image: url("http://mamnoontogo.net/wp-content/uploads/2022/02/CareersImage.png");
  background-size: contain;
  margin: auto;
  margin-top: 45px;
}

.main-content {
  width: 100%;
  margin: auto;
  text-align: center;
  padding-top: 1.5vh;
  text-align: center;
  margin-top: 80px;
  height: 100%;
  padding-bottom: 20px;
  background-color: $nadi-red-color !important;
}

.main-content p {
  color: $nadi-white-color;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  @media only screen and (max-width: 992px) {
    width: 90%;
  }
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 20px;
}

.main-content h5 {
  color: $nadi-white-color;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 47px;
}

.main-content a {
  color: $nadi-white-color;
  text-decoration: underline;
}
</style>
