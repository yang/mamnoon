<template>
  <div>
    <footer class="secPadFooter">
      <div class="beta">
        this site is in beta. feedback?
        <a href="https://forms.gle/9d5kmR6PzZwmgUV78" target="_blank"
          ><u>submit here</u></a
        >!
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-12">
            <h4>{{ $store.state.footer.newsletter.header }}</h4>
            <p>
              {{ $store.state.footer.newsletter.description }}
            </p>
            <EmailSignup />
          </div>

          <div
            v-if="$store.state.footer.footer_links"
            v-for="linkgroup in $store.state.footer.footer_links"
            class="col-md-3 col-12"
            style=""
          >
            <ul class="footer-links">
              <li>
                <h4>
                  {{ linkgroup.link_group_title }}
                </h4>
              </li>
              <li v-for="link in linkgroup.link_group">
                <a
                  v-if="link.links.new_tab"
                  target="_blank"
                  :href="link.links.link"
                  >{{ link.links.text }}</a
                >
                <a v-else :href="link.links.link">{{ link.links.text }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import EmailSignup from "@/components/EmailSignup.vue";

export default {
  components: {
    EmailSignup,
  },
  data() {
    return {
      footer: null,
    };
  },
  methods: {
    async globalFooter() {
      this.footer = this.$store.state.footer;
    },
  },
  mounted() {
    this.globalFooter();
  },
};
</script>

<style lang="scss">
  @import '@/assets/styles/css/globalfooter.scss';
</style>
