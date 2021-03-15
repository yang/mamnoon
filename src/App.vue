<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script type="text/javascript">


export default {
    metaInfo: {
      name: 'App',
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Nadi Mama',
      // all titles will be injected into this template
      titleTemplate: '%s | Beta Version',
                  meta: [
                { name: 'Nadi Mama', content:  'Welcome to Nadi Mama, the home for all things the Mama Group has to offer. Swipe through to see some of our latest special offerings hand curated by our lead chef, browse the full menu and order items individually, peruse our new retail items, learn more about wholesale resale opportunities of our house made products, make reservations for a special night at one of our locations, or simply stay in touch with us!'},
                { property: 'og:title', content: "Nadi Mama - Home for all things the Mama Group has to offer."},
                { property: 'og:site_name', content: 'Nadi Mama'},
                {property: 'og:type', content: 'website'},    
                {name: 'robots', content: 'index,follow'} 
            ]
    }
}




        



</script>

<style lang="scss">

html, body{
    // overflow-x: hidden;
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







.sm-button{
padding: 2px 9px;
margin: 0;
border: 0;
// background-color: #f05d5b;
background-color: #f58e58;
color: white;
border-radius: 4px;
margin: 0 10px 0 0;

&:hover{
  color: #fff367;
}
}


#upserveolo{
  img.itemimage {
  width: 100%;
}

.container {
  display: block;
}

.order-confirmation-modal,
.order-modal {
  position: fixed;
  z-index: 100;
  background: #ffffff99;
  height: 100vh;
  width: 100%;
  top: 0;
}

li {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  position: relative;
}

li button {
  position: absolute;
  right: 0;
  top: 20px;
}

.modal-body {
  background: white;
  padding: 15px;
  border-radius: 0px;
  border: 1px solid grey;
}

button {
  border: 1px solid #f05d5b;
    border: 1px solid #f58e58;
  // background-color: #f05d5b;
   background-color: #f58e58;
  color: #ffffff;
  padding: 5px 10px;
  border-radius: 4px;
  // border: 2px solid #f05d5b !important;
  // border: 2px solid #f58e58 !important;
    border: 2px solid #f58e58;

      &.deactivated{
             border: 2px solid #999999 !important;
      }
}

button:hover {
  // border: 1px solid #f05d5b;
  // border: 1px solid #f58e58;
  background-color: #f05d5b;
  background-color: #f58e58;
  color: #fff367;
  padding: 5px 10px;
}

button:disabled,
button[disabled="true"] {
  border: 1px solid #999999 !important;
  background-color: #cccccc;
  color: #666666;
}

div {
  // padding: 5px 10px;
}

.closeModal {
  opacity: 1;
  cursor: pointer;
}

.order-sidebar {
  padding-left: 0;
  li {
 
    font-size: .9rem;
    list-style-type: none;
    padding: 18px 0 22px;
    
  }
}

.hidden-drawer {
  // display: none;
  padding: 0;
  height: 0;
  transition: all 0.5s ease;
  overflow: hidden;
  &.expanded-drawer {
    transition: all 0.5s ease;
    // display: inline-block;
    // width: 100%;
    height: 100%;
  }
}

.display-block {
  display: block;
}

h2 {
  cursor: pointer;
}

.menu-line {
  border-bottom: 1px solid #ddd;
  padding: 10px 0 6px;
  margin: 6px 0;
}

h2.menu-header {
  // padding: 0 18px;
  font-size: 18px;
  font-weight: 400;
}


@media only screen and (max-width: 992px) {
h2.menu-header {
  font-size: 14px;
}

}



@media only screen and (max-width: 600px) {
h2.menu-header {
 padding-left: 10px;
     padding-right: 10px;
     line-height: 1.4;
}

}


button.delivery-option {
    width: 49%;

    border-radius: 4px;
    border: 2px solid #f05d5b;
    background: #fff;
    color: #f05d5b;
    padding-top: 5px;
  &.selected {
    background: #f05d5b;
    color: #ffffff;
  border: 2px solid #f05d5b;
    padding-top: 5px;
  }
}

button.filehalf {
    width: 49%;

    border-radius: 4px;
    border: 2px solid #f05d5b;
     border: 2px solid #f58e58;
    background: #fff;
        background: #f58e58;
    color: #f05d5b;
    color: #ffffff;
    padding-top: 5px;
  &.selected {
    background: #f05d5b;
        background: #f58e58;
    color: #ffffff;
  border: 2px solid #f05d5b;
   border: 2px solid #f58e58;
    padding-top: 5px;
  }

&.deactivated{
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;

}

&:hover{
  color: #fff367;
}


}

form input,
form textarea,
.giftcardinput {
  width: 100%;
  padding: 5px 9px;
  border-radius: 4px;
  border: 1px solid #b7b7b7;
  // margin-bottom: 10px;
      margin-bottom: 6px;
}

.backgroundImage {
  background-position: center center;
  background-size: cover;

  // height: 180px;
  // background-size: 129%;

  height: 100%;
}

.inline-block {
  display: inline-block;
  width: 100%;
}

.yellow-bg {
  background: #fff367;
  width: 100%;
  display: inherit;
  height: 180px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    opacity: 0.7;
  }

  position: relative;
  overflow: hidden;
}

.half-width2left {
  width: 65%;
  float: left;
  height: 180px;
  overflow: hidden;
}

.half-width2right {
  width: 35%;
  float: left;
  height: 180px;
  overflow: hidden;
}

.grey-bg {
  height: 180px;
}

.filtree-half {
  width: calc(50% - 0px);
  float: left;
  height: 180px;
  background: transparent;
  padding: 5px;
  overflow: hidden;
  margin-bottom: 5px;
}

.filtree-full {
  width: calc(100% - 0px);
  float: left;
  height: 180px;
  background: transparent;
  padding: 5px;
  overflow: hidden;
  margin-bottom: 5px;
}



@media only screen and (max-width: 768px) {

  .filtree-half {
    width: calc(100% - 0px);
    float: left;
    height: 180px;
    background: transparent;
    padding: 5px;
    overflow: hidden;
    margin-bottom: 5px;
  }
}

.content-box {
  // margin: 10px;


      position: inherit;
    bottom: 0;
    background: #fff367;
    padding: 10px;
    // width: 100%;  

  .name {
  }

  .food-description {
    font-size: 0.8rem;
    margin-bottom: 5px;
  }
}


.content-box-upper {
  // margin: 10px;
    position: absolute;
    bottom: 0;
    background: #fff367;
    padding: 10px;
    width: 100%;  

  .name {
    font-weight: 500;
  }

  .food-description {
    font-size: 0.8rem;
    margin-bottom: 0px;
  }

  height: 120px;

transition: all .5s ease;
&:hover{
  // background: #f05d5b;
  // color: #ffffff;
}

}


.text-left {
  text-align: left;
}

.online-menu {
  background-color: #f05d5b;
  padding: 20px 0 15px;
  text-align: center;
  position: relative;
  h4 {
    color: #fff367;
    font-size: 1.5rem;
    text-align: center;
  }
}

.food-price {
  font-size: 0.9rem;
  font-weight: 600;
}

.no-lr-margin {
  margin-left: 0;
  margin-right: 0;
}

.expand-contract {
  display: none;
  &.visible {
    display: inline-block;
  }
}

.closeModal {
  position: absolute;
  top: 11px;
  right: 15px;
}

.box {
  width: 33.33%;
  // border: 1px solid red;
  float: left;


    width: 20%;
    float: left;
    cursor: pointer;
    font-size: 14px;
    margin-bottom: 15px;

}

.box-inner {
  margin: 10px 0;
  // width: 25%;
  padding: 0px;

  border: 0px solid red;
  float: left;

    box-sizing: border-box;
    border: 1px solid #ddd;
    -webkit-transition: all 0.25s ease;
    transition: all 0.25s ease;
    width: 90%;

}











.order-modal-width {
  width: 700px;

  img {
    width: 100% !important;
  }
}

@media only screen and (max-width: 768px) {
  .order-modal-width {
    width: 100% !important;
    max-width: 96% !important;
  }
}

.order-modal-body {
  // max-height: 70vh;
  max-height: 80vh;
  overflow-y: scroll;
border-top: 0;
  textarea {
    width: 100%;
    margin: 0px 0;
    margin-bottom: 10px;
    height: 50px;
  }
}

.container.online-menu.order-modal-width {
  margin-top: 24px;
}

.float-right {
  float: right;
}

.item-image-container {
  text-align: center;

  background-position: 0;
  background-size: 100%;
  background-repeat: no-repeat;
  height: 300px;
  z-index: 1;

  background: #f0ecec;

  img, svg {
    width: auto !important;
    height: 300px;
  }


div{
  svg{
    height: 300px;
  }
}

}

.item-image-container > div > svg {
    height: 300px;
 
}


@media only screen and (max-width: 768px) {
.item-image-container {
  text-align: center;

  background-position: 0;
  background-size: 100%;
  background-repeat: no-repeat;
  height: 100px;
  z-index: 1;

  background: #f0ecec;

  img, svg {
    width: auto !important;
    height: 100px;
  }


div{
  svg{
    height: 100px;
  }
}

}





.item-image-container > div > svg {
    height: 100px;
 
}
}

.add-to-order-footer {
  padding: 15px 0 20px 0;
  width: 100%;
}

#value {
  margin: 10px;
  font-weight: 600;
}

.pt50 {
  padding-top: 50px;
}

.pt20 {
  padding-top: 20px;
}



.mt10 {
  margin-top: 10px;
}

.item-description-p {
  margin-top: 15px;
  margin-bottom: 5px;
}

textarea {
  width: 100%;
  padding: 5px 9px;
  border-radius: 4px;
  border: 1px solid #b7b7b7;
  margin-bottom: 10px;
  height: 50px;
}

.displayInlineBlock {
  width: 100%;
  display: inline-block;
}

.delivery-box {
  width: 100%;
  position: relative;
  height: 50px;
}

.updateAddress {
  width: 100%;
  position: relative;
  height: 40px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fff;
  padding: 5px 0;
}

.googleValidate {
  width: 100%;
  position: relative;
  height: 50px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
  pointer-events: none;
}

.pointer-all {
  pointer-events: all;
}

.display-none {
  display: none;
}



.tipButton{
  // margin-bottom: 20px;
    margin-bottom: 5px;
    width: calc(33% - 2px);
    border: 2px solid #f05d5b;
    border: 2px solid #f58e58;
    background-color: #ffffff;
    background-color: #f58e58;
    color: #f05d5b;
    color: #f58e58;
    color: #ffffff;
    padding: 5px 10px;
    border-radius: 4px;


transition: background-color .1s ease;
    &:hover{
        border: 2px solid #f05d5b;
        border: 2px solid #f58e58;
        color: #fff367;
    }

    &:disabled{
          &:hover{
        border: 1px solid #999999;
    }
    }

}



    .toggle{
      display: none;
    }

@media only screen and (max-width: 992px) {
.drawer-on-mobile{
    position: fixed;
    left: 100%;
    background: white;
    padding: 10px;
    width: 100%;
    max-width: 100%;
    top:0px;
    height: 100vh;
    border-left: 1px solid black;
    transition: all .25s ease;

    // border-left: 50px solid #F05D5B;
    z-index: 100;
&.expanded{
      left: 0;
      // border-left: 0px solid #F05D5B;


    .toggle{
    transform: translate(0px);
    }


}

    .toggle{
        display: block;
        position: fixed;
        bottom: 10px;
        right: 10px;
        z-index: 100;


    width: 100%;
    bottom: 0;
    left: 0;
    border-radius: 0;
    padding: 15px 10px;

    }


}}



@media only screen and (max-width: 768px) {


 .backgroundImage {
  background-position: center center;
  background-size: cover;

  // height: 150px;
  // background-size: 129%;
}

.inline-block {
  display: inline-block;
  width: 100%;
}

.yellow-bg {
  background: #fff367;
  width: 100%;
  display: inherit;
  height: 150px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    opacity: 0.7;
  }
}

.half-width2left {
  width: 65%;
  float: left;
  height: 150px;
  overflow: hidden;
}

.half-width2right {
  width: 35%;
  float: left;

  height: 180px;
  overflow: hidden;
}

.grey-bg {

  height: 150px;
}

.filtree-half {
  width: calc(100%);
  float: left;
  height: 150px;
  background: transparent;
  padding: 5px;
  overflow: hidden;
  margin-bottom: 5px;
}


}


input.formatted{
  border: 1px solid #b7b7b7;
  width: 100px;
  margin: 10px 0;


&.attention{
    border: 2px solid #f05d5b;
}

}


span.attention{
  color: #f05d5b;
}



ul.no-left-pad{
  padding-left: 0;
}


.mt10{
  margin-top: 10px;
}


.small-message{
    color: #f05d5b;
    color: #f58e58;
    font-size: .9rem;
    font-style: italic;

    &.grey{
      color: #343a40;
      font-size: .8rem;
    }
}


.smblk{
    color: #000;
    font-size: .9rem;
}



.fw{
width: 100%;
// margin-top: 20px;
// margin-top: 10px;

}




.removeClose{
    height: 27px;
    border-radius: 15px;


}


.removeClose > div{
margin-top: -3px;

    
}


.custom-tip-button{
  padding: 4px;
  border-radius: 4px;
    width: 68%;
}


.customtip{
  width: 100%;


&.activated{
  width: 30%
}

}


.full-height-slide{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
        overflow: hidden;
            background: #a5a5a5;
}

.yellow-bg{
      height: 100%;
}


.is-fullheight [id^="carousel_prev_"] {
  position: absolute;
  top: 110px;
    top: -55px;
    // position: 
  left: 20%;
    left: 30%;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    left: 5%;
    top: 102px;
    top: -55px;
  }
}
.is-fullheight [id^="carousel_next_"] {
  position: absolute;
  top: 110px;
    top: -55px;
  right: 20%;
    right: 30%;


  cursor: pointer;
  @media only screen and (max-width: 768px) {
    right: 5%;
    top: 102px;
    top: -55px;
  }
}

.is-fullheight{
  padding: 20px 0 0 0;
  // overflow: hidden;


  &.no-top-pad{
    padding-top: 0;
  }
}



.removeClose{
  background-color: transparent!important;
  background-color: #f58e58 !important;
  padding: 5px 7px;
&:active,
&:hover,
&:focus{
  outline: none;
}

  svg{
    &:active,
&:hover,
&:focus{
  outline: none;
}

      width: 10px;
    margin: 4.5px auto 10px
  
  }
}



.removeClose:hover{
    // background-color: #f05d5b;
      padding: 5px 7px;
  svg{
        width: 10px;


.cls-1closeModalRed {
    fill: #fff367 !important;
}
  }
}

.customer-info,
.address-info{
font-size: 1.2rem
}

label {
    display: inline-block;
    margin-bottom: 0.5rem;
}



form hr{
      margin-top: .75rem;
    margin-bottom: .75rem;

}

.drawer-on-mobile.expanded{
    height: 100%;
    overflow: scroll;
    padding-bottom: 160px;
}

// @
// padding: 5px 5px;

.tipButton.customtip,
.tipButton.quarter {

    font-size: 12px;

&.disabled{
  pointer-events: none;
  background: #666666;
  border: 2px solid #666666;
  color: #fff367;

}

}


@media only screen and (max-width: 1280px) {
.tipButton.quarter {
    margin-bottom: 5px;
    // width: calc(25% - 3.5px);


    width: calc(33% - 2.5px);
    // width: calc(33% - 1.4px);
    padding: 5px 5px !important;
    font-size: 12px;
}
}
@media only screen and (max-width: 992px) {
  .tipButton.quarter {
    width: calc(33% - 1.4px);
  }
}

@media only screen and (max-width: 640px) {
  .tipButton.quarter {
    width: calc(32.2%);
}
}



.mt8{
margin-top: 8px;
}

.mt5{
margin-top: 5px;
}


.mb20{
  margin-bottom: 20px;
}


.pt20{
  padding: 20px 0;
}

.pt40{
  padding: 40px 0;
}

@media only screen and (max-width: 768px) {
  .pt40{
  padding: 20px 0;
}
}

.no-bot-pad{
  padding-bottom: 0;
}

.cart-empty-class{
  background-color: #f3f3f3;
    padding: 20px 0;
    color: #a6a4a4;
    font-style: italic;
    font-size: 14px;
    border-radius: 5px;
}

li.modal-item{
  list-style-type: none;
  padding: 10px 0;
  font-size: 18px;
}


.slide-show-image-home{
//   width: 100%;
//   background-size: 110% 100%;

//   filter: blur(4px);
    // transform: scale(1.2);
    // overflow: hidden;


    width: 100%;
    background-size: 110% 100%;
    filter: blur(4px);
    overflow: hidden;
    height: 100%;
    position: absolute;



}


.slide-show-image{
    // position: absolute;
    // top: 0px;
    // left: 50%;
    // height: 440px;
    // width: auto !important;
    // transform: translate(-50%);



    position: absolute;
    top: 0px;
    left: 50%;
    height: 440px;
    width: auto !important;
    -webkit-transform: translate(-50%);
    transform: translate(-50%);
    width: 50% !important;
    background-size: 100%;
    background-position: center;
    color: transparent;

    }


#online-menu .owl-item{
      background: #a5a5a5 !important;
}

.loading-box{
    width: 500px;
    color: red;
    height: 500px;
    background: #fff;
    padding-top: 240px;
    left: 50%;
    position: absolute;
    transform: translate(-50%,-50px);
}



   i.small{
     font-size: 12px;
   }




#SixSeven{
    display: none;   
}
// #FourThree{
//     display: block;
// }

#FourThree{
    display: block;
}


@media only screen and (max-width: 768px) {

  .filtree-full,
.half-width2right,
.half-width2left,
.half-width2left{
    height: 240px !important;
}

svg#nadiIconSm{
    width: 100%;
    // height: 240px !important;
}

#SixSeven{
    display: none;
}
#FourThree{
    display: block !important;
}

}




}


.vs__dropdown-menu {
    padding: 5px 0 0;
}
.vs__dropdown-option {
    padding: 7px 10px !important;
}



@media only screen and (max-width: 992px) {


.half-width2right{
  display: none;
}
#upserveolo .half-width2left{
    width: 100% !important;
    float: left;
    height: 90px!important;
    overflow: hidden;
}


.half-width2left .food-description{
  display: none !important;
}

#upserveolo .filtree-full{
    height: 90px!important;
}

#upserveolo .content-box {
    padding: 5px 9px;
}

}


@media only screen and (max-width: 992px) {
.hide-mobile{
  display: none;
}

.mob-bottom-margin{
      margin-bottom: 22px;
}


svg#show-all{
    // margin-top: 20px !important;
}

}





@media only screen and (max-width: 768px) {

#SixSeven{
    display: block !important;
}
#FourThree{
    display: none !important;
}


}


input.custom-tip-button{
  border: 1px solid #b8b8b8;
  }

  #customTip{
    padding: 7px !important;
    margin-bottom: 0 !important;
    transform: translate(0px, -2px);
        margin-top: 2px;
  }

#upserveolo button.vs__clear{
    background: #f58e58;
    border-radius: 30px;
    padding: 0 6px;
    width: 28px;
    height: 27px;
    svg{
      transform: translate(.5px,-2.0px);
      transform: translate(0px, -2px);
      width: 11px;
      path{
        fill: #ffffff;
      }
    }


    &:hover{

    svg{
      transform: translate(.5px,-2.0px);
      transform: translate(0px, -2px);
      width: 11px;
      path{
        fill: #fff367;
      }
    }
    }

  }



.preorder-bottom-pad{
      margin-bottom: 15px;
}


.halfwidth-yellow1.wider.mbar.mbar1{


svg{
  transform: translate(-50%,-56%);
}

}
@media only screen and (max-width: 768px){


.halfwidth-yellow1.wider.mbar.mbar1{


svg{
    transform: translate(-50%, -77%);
}

}

}



.is-fullheight [id^=carousel_prev_]{
  display: block !important;
}



.filehalf h4{
  color: #fff367;
    font-size: 1.5rem;
    text-align: center;
}






// mamnoon @ home styling adjustments

#upserveolo.smallerBoxes .box {
    width: 25%;
        width: 20%;
    float: left;
cursor: pointer;
    font-size: 14px;
    margin-bottom: 15px;
}


.optionHeader{
    padding: 10px 0;
    // margin-bottom: 5px;
    font-weight: 500;

}

@media only screen and (max-width: 768px) {
#upserveolo.smallerBoxes .box {
    width: 50%;
    float: left;
    margin-bottom: 5px;

}

}




#upserveolo.smallerBoxes .box > div {
    width: 90%;
    // padding: 10px;  
    box-sizing: border-box;
    border: 1px solid #ddd;
        // height: 100px;

        transition: all .25s ease;


  
}


#upserveolo.smallerBoxes .box.selected > div {
    width: 90%;
    // padding: 10px;  
    box-sizing: border-box;
    border: 1px solid #f05d5b;
    background: #f05d5b;
    color: white;




}


.optionHeader{
  width: 100%;
  // text-align: center;
  border-bottom: 1px solid #ddd;
}

.pad-10{
  padding: 10px;
padding-bottom: 0;
  &:first-child{

  }
  p{
    margin-bottom: 0;
        font-size: 12px;
  }


.title-bolder{
  font-weight: bolder;
}

}



.hide-on-desktop{
  display: none;
}



@media only screen and (max-width: 992px) {
#upserveolo .box-inner{
  padding-bottom: 10px;
}



#upserveolo.smallerBoxes .box.selected > div {
    width: 100%;




}

.hide-on-desktop{
display: flow-root;
}


}


.fw{
  width: 100%;
  padding: 0 15px;
}


#upserveolo .item-description-p.noTopMarge,
.noTopMarge{
  margin-top: 0;
}



.right-column{
    position: -webkit-sticky;
    position: sticky;
    top: 150px;

   @media only screen and (max-width: 992px) {
      top: 0;
    }
 

}


#fine_foods .owl-stage-outer{
  background:#eee;
}


.no-lr-margin{
  margin-left: 0;
  margin-right: 0;
}

</style>