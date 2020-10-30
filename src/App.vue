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






// snipcart styles
// snipcart styles
// snipcart styles
// snipcart styles

.snipcart-layout.snipcart-modal,
.snipcart-modal__container{
  // background: pink !important;
  
}

.snipcart-cart-summary__content,
.snipcart-cart-summary,
.snipcart-layout__col > div,
.snipcart__box,
.snipcart-item-line__container {

    background: #FFF35B;
}

.snipcart__button--icon{
  background: transparent;
  border: 0;
}


.snipcart__font--secondary, .snipcart__font--subtitle {
    color: #595959;
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif; 
}


.snipcart-discount-box__button.snipcart__font--bold{
  border-radius: 2px;
  border: 2px solid #838484;
  text-transform: lowercase;
  padding: 12px 0;
}

// .snipcart__font--secondary,
.snipcart-layout__content,
.snipcart-item-list,
.snipcart-discount-box__button.snipcart__font--bold,
.snipcart-cart__footer,
.snipcart-cart-header,
.snipcart-modal {
    background-color: #ffffff;
}


.snipcart-cart-button.snipcart__font--bold.snipcart__font--secondary.snipcart-cart-button--secondary.snipcart-cart-button--fit,
.snipcart-cart-button--highlight {
    background-image: none;
    background-color: #f05d5b;
    color: white !important;
    text-transform: lowercase;
    font-weight: bold;
}

.snipcart-cart-button__icon,
.snipcart-cart-button--highlight svg{
  display: none;
}
// snipcart styles
// snipcart styles
// snipcart styles
// snipcart styles




.snipcart,
.snipcart *{
   font-family: Helvetica Neue,Helvetica,Arial,sans-serif; 
}

.snipcart-form{
  box-shadow: none;
}




.snipcart__box--badge.snipcart__font--bold.snipcart__font--secondary,
.snipcart__box--badge.snipcart__box--badge.snipcart__box--badge-highlight.snipcart__font--bold.snipcart__font--secondary{
  background-color: #f05d5b !important;
  background: none;
  color: white;



    }


.snipcart__box--badge {
    height: 36px;
    width: 36px;
    border: #f05d5b;
    }



.snipcart-cart-summary-fees__item.snipcart-cart-summary-fees__total.snipcart__font--bold{
  background-color: transparent;
}
    
    .snipcart-featured-payment-methods__title,
.snipcart-cart-summary__separator{
background: #ffffff;
}



.snipcart-cart-summary-fees__notice.snipcart__font--regular{
  line-height: 18px;
}

.snipcart__font--subtitle{
  text-transform: lowercase;
}


.snipcart-discount-box.snipcart__font--secondary.snipcart-cart__discount-box{
  background: transparent
}

.snipcart-discount-box__cancel.snipcart__font--std.snipcart__font--secondary,
.snipcart__font--tiny,
.snipcart__font--slim{
  color: #838484;
  font-weight: 600;
}

.snipcart-billing-completed__information.snipcart__font--std{
    color: #838484;
  font-weight: 400;
}

.snipcart-modal__close-title.snipcart__font--std,
.snipcart__actions--link{
  color: #f05d5b;
  font-weight: 600;
}





.snipcart__icon--blue-light path{
    fill: #f05d5b;
}


.snipcart__icon--blue-dark path{
    fill: #ffffff;
}


.snipcart-cart-header__option.snipcart-cart-header__count.snipcart__font--secondary.snipcart__font--bold .snipcart__icon--blue-dark path{
    fill: #f05d5b;
}

.snipcart-checkout-step__icon.snipcart-billing-completed__step-icon .snipcart__icon--blue-dark path{
fill: #f05d5b;
}




button.snipcart-cart-header__close-button.snipcart-modal__close:active,
button.snipcart-cart-header__close-button.snipcart-modal__close:focus{
  outline: none;
}

.snipcart-item-line {
    box-shadow: none;
}



.snipcart-payment-form--desktop{
  background-color: #ffffff;
}

.snipcart-payment-form--focused{
border: 1px solid #f05d5b !important;
}

// .snipcart-item-line__container {
//     margin: 0 0 0 0 !important;
// }


.snipcart-payment-form.snipcart-payment-form--desktop{
  background: #ffffff;
}




.snipcart-item-list{
  margin-bottom: 0;
}


.snipcart-item-line{
  margin-bottom: 24px;
}


.snipcart-item-line__container {
    margin: 0 0 0 0;
}


.snipcart-cart__footer{
  margin-top: 0;
}
.snipcart-cart__footer-col,
.snipcart-cart__footer-col.cart__footer-discount-box.snipcart-cart__actions{
  margin-top: 24px;
}



.sm-button{
padding: 2px 9px;
margin: 0;
border: 0;
background-color: #f05d5b;
color: white;
border-radius: 4px;
margin: 0 10px 0 0;
}

</style>