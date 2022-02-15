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
  @import '@/assets/styles/css/careers.scss';
</style>
