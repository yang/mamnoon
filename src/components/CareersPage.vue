<template>
  <div>
    <Nav3 />
    <div class="main-content">
      <h5>work for mama</h5>
      <br />
      <p>
        interested in joining mama's team? we're always looking for qualified
        applicants, and can't wait to hear from you.
      </p>
      <br />
      <p>
        visit the links below to see current openings. when submitting your
        cover letter and resume, please be sure that all attachments are in pdf
        format. thank you
      </p>
      <br />
      <p>
        for current opportunities at our restaurants and commissary, visting
        <a href="http://www.poachedjobs.com">poachedjobs.com</a> and search by
        the name of the restaurant you're interested in.
      </p>
      <br />
      <p>
        for current openings in our head office, visit
        <a href="http://www.indeed.com">indeed.com</a> and search for mama
        group.
      </p>
      <br />
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
$nadi-color: #f05d5b;

body {
  background-color: $nadi-color !important;
}

.bottom {
  position: fixed !important;
  bottom: 0 !important;
  width: 100vw !important;
  margin-left: auto !important;
  margin-right: auto !important;
}

.main-content {
  width: 30%;
  margin: auto;
  text-align: center;
  padding-top: 1.5vh;
  height: 800px;
  text-align: center;
  margin-top: 120px;
}

.main-content p {
  color: white;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

.main-content h5 {
  color: white;
  text-align: center;
}

.main-content a {
  color: white;
  text-decoration: underline;
}

</style>
