<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script type="text/javascript">


export default {

}
</script>

<style lang="scss">

html, body{
    overflow-x: hidden;
}

#preview-coverflow,
#preview{
      border: 0 !important;
    outline: none;
}

.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .25s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.section-pad{
  margin-top: 50px;
  margin-bottom: 50px;
  border-bottom: 1px solid grey;
  padding-bottom: 40px;
}
h4.error{
  color: red
}
.mb-80{
  margin-bottom: 80px;
}


.is-fullheight,
.familymeal,
.narrow {
  background-color: #f05d5b;
  h4 {
    color: #fff367;
  }
}

.position-relative{
  position: relative;
}


.mb-80{
  margin-bottom: 80px;
}


.snipcart-layout.snipcart-modal,
.snipcart-modal__container{
  // background: pink !important;
  
}

</style>