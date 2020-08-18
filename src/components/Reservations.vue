<template>
  <section class="section hero is-primary is-fullheight position-relative mb-80">
        <h4>Reservations</h4>
        {{data}}
    </section>
</template>

<script>
import carousel from "vue-owl-carousel";
import Next from "@/components/svgIcons/Next";
import Prev from "@/components/svgIcons/Prev";


export default {
    components:{
        carousel,
        Next,
        Prev
    },
    name: 'reservations',
    props: ['data']
}
</script>
