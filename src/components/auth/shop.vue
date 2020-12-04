<template>
<div>
  <div class="open-modal" v-if="modalOpen">
      <div class="container nav-acc-header mb-80 modalContainer position-relative no-padding" style="padding:0;">
 <!-- {{currentPopupItem}} -->



<div class="columnblock">
     <img :src="currentPopupItem.shop_item.image" />


</div>
<div class="columnblock text-left pad10">



<h3 class="merch-modal-header">{{currentPopupItem.shop_item.name}}</h3>

<h4 class="text-left red merch-modal-price">${{parseFloat(currentPopupItem.shop_item.price)}}</h4>
<p class="thick-grey merch-modal-description">{{currentPopupItem.shop_item.description}}</p>
<div style="width: 100%;text-align: center;">

<!-- {{currentPopupItem.index}} -->
                  <button
                    style="margin:0 auto;"
                    class="snipcart-add-item"
                    v-bind:data-item-id="currentPopupItem.shop_item.id"
                    v-bind:data-item-price="currentPopupItem.shop_item.price"
                    v-bind:data-item-image="currentPopupItem.shop_item.image"
                    v-bind:data-item-name="currentPopupItem.shop_item.name"
                    v-bind:data-item-description="currentPopupItem.shop_item.description"
                    v-bind:data-item-weight="currentPopupItem.shop_item.weight"
                    v-bind:itemId="currentPopupItem.shop_item.id"
                    v-bind:data-itemId="currentPopupItem.shop_item.id"
                    v-bind:data-item-url="currentPopupItem.shop_item.url"
                  >
                    <AddToCart />
                  </button>
</div>




</div>


   <button class="modal-close" @click="modalClose()">
     <CloseModalRed />
     </button>
    </div>  </div> 
  <div class="container nav-acc-header mb-80">
    <div class="row">
      <section id="alacarte" class="section hero is-primary is-fullheight fw">
        <div class>
          <h4 class="noselect">mama shop</h4>
          <p
            class="description-para noselect"
          >for merchandise and other special items, browse the brand new mama shop</p>
        </div>


<div class="category-filter">
<ul class="inline-filters">
  <li @click="filterItems('all')" :class="{underline: currentCategory === 'all'}" class="text-center">all</li>
  <li @click="filterItems(name)" class="text-center" :class="{underline: currentCategory === name}" v-for="name in uniqueNames" :key="name">
    {{name}}
  </li>
</ul>
</div>



        <!---->
      </section>
    </div>
    <div class="row">
      <!-- shop -->

      <!-- {{ story}} -->
<!-- <div v-if="item.shop_item.category === currentCategory"> -->


 <!-- <div class="shopthird" v-if="currentCategory === 'all'" v-for="(item, index) in shopItems" -->

 <div class="shopthird" v-for="(item, index) in shopItems"
        :key="item.shop_item.id">
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAATCAYAAACUef2IAAAKHmlDQ1BJQ0MgUHJvZmlsZQAASImFlgdUVNcWhs+90xtthqH3DtLbANJ7k15FZRhg6A5DFbEhwQhEEBERUAISqoLRUGNBRLEQBBSwByQIKDFYABWV3IEkGt9b7+1Z5+5v/XP2PnvunbXuDwCpkMnhxMECAMQnJHO9HW1kA4OCZXG/ATyQARSgCsyYrCSOtaenG0Di7/zvWBwFEC/f1uT1+s/v/2cIhUcksQCAQhBmsDjcZISLEfZNS+bweAZhGhcZCuEPPGavMm9iQAtbY8XVPb7etggzAMCTmUwuGwCiHaLLprLYSB9iOMI6CeHRCQjz+luwopiIRryD8LrIuJR0AEi8eXTi47ciOkkHYVWkloNwIG+2sC/6s/91Vtg/ZzGZ7H84Pi6F9ddv5N0dckSCnw+SxZElCSKBFogDKSAdyAIO4IKtiBKNKBHIc/jvdYzVOltkJwdsQyqiARtEgWSk3uGLXj6rnZJBGmAieyIQxQ352PKe6VrL1/TVrhD9xmctsRsAk1xEZH/WmAoAdD4FgLr4WVN4hYxTCMD5QVYKN3VNQ/MuGEAE/IAGxIA0UED+M5pADxgBM2AF7IEL8AC+IAhsBixk3nhkqjSQCfaAHJAHCsFhUAYqwQlQD06BM6AdnAOXwFVwEwyCEfAAjIMp8BzMg0WwDEEQDqJAVEgMkoGUIA1ID2JAFpA95AZ5Q0FQKMSGEqAUKBPaC+VBRVAZVAU1QD9CndAl6Do0BN2DJqBZ6BX0HkbBZJgGS8HKsDbMgK1hV9gX3gSz4UQ4A86GD8ClcDV8Em6DL8E34RF4HH4OL6AAioSio+RQmigGyhblgQpGRaK4qJ2oXFQJqhrVjOpC9aFuo8ZRc6h3aCyaipZFa6LN0E5oPzQLnYjeic5Hl6Hr0W3oXvRt9AR6Hv0JQ8FIYjQwphhnTCCGjUnD5GBKMLWYVswVzAhmCrOIxWLpWBWsMdYJG4SNwW7H5mOPYVuw3dgh7CR2AYfDieE0cOY4DxwTl4zLwR3FncRdxA3jpnBv8SS8DF4P74APxifgs/Al+Eb8Bfwwfhq/TBAgKBFMCR6EcMI2QgGhhtBFuEWYIiwTBYkqRHOiLzGGuIdYSmwmXiE+JL4mkUjyJBOSFymatJtUSjpNukaaIL0jC5HVybbkEHIK+QC5jtxNvkd+TaFQlClWlGBKMuUApYFymfKY8paPyqfF58wXzreLr5yvjW+Y7wU/gV+J35p/M38Gfwn/Wf5b/HMCBAFlAVsBpsBOgXKBToExgQVBqqCuoIdgvGC+YKPgdcEZIZyQspC9ULhQttAJoctCk1QUVYFqS2VR91JrqFeoUzQsTYXmTIuh5dFO0QZo88JCwgbC/sLpwuXC54XH6Si6Mt2ZHkcvoJ+hj9Lfi0iJWItEiOwXaRYZFlkSlRC1Eo0QzRVtER0RfS8mK2YvFit2UKxd7JE4Wlxd3Es8Tfy4+BXxOQmahJkESyJX4ozEfUlYUl3SW3K75AnJfskFKWkpRymO1FGpy1Jz0nRpK+kY6WLpC9KzMlQZC5lomWKZizLPZIVlrWXjZEtle2Xn5STlnORS5KrkBuSW5VXk/eSz5FvkHykQFRgKkQrFCj0K84oyiu6KmYpNiveVCEoMpSilI0p9SkvKKsoByvuU25VnVERVnFUyVJpUHqpSVC1VE1WrVe+oYdUYarFqx9QG1WF1Q/Uo9XL1WxqwhpFGtMYxjaF1mHUm6xLWVa8b0yRrWmumajZpTmjRtdy0srTatV5oK2oHax/U7tP+pGOoE6dTo/NAV0jXRTdLt0v3lZ66HkuvXO+OPkXfQX+Xfof+SwMNgwiD4wZ3DamG7ob7DHsMPxoZG3GNmo1mjRWNQ40rjMcYNIYnI59xzQRjYmOyy+ScyTtTI9Nk0zOmf5hpmsWaNZrNrFdZH7G+Zv2kubw507zKfNxC1iLU4nuLcUs5S6ZlteUTKwWrcKtaq2lrNesY65PWL2x0bLg2rTZLtqa2O2y77VB2jna5dgP2QvZ+9mX2jx3kHdgOTQ7zjoaO2x27nTBOrk4HncacpZxZzg3O8y7GLjtcel3Jrj6uZa5P3NTduG5d7rC7i/sh94cblDYkbGj3AB7OHoc8HnmqeCZ6/uyF9fL0Kvd66q3rnend50P12eLT6LPoa+Nb4PvAT9Uvxa/Hn98/xL/BfynALqAoYDxQO3BH4M0g8aDooI5gXLB/cG3wwkb7jYc3ToUYhuSEjG5S2ZS+6fpm8c1xm89v4d/C3HI2FBMaENoY+oHpwaxmLoQ5h1WEzbNsWUdYz8OtwovDZyPMI4oipiPNI4siZ9jm7EPs2SjLqJKouWjb6LLolzFOMZUxS7EesXWxK3EBcS3x+PjQ+M4EoYTYhN6t0lvTtw5xNDg5nPFE08TDifNcV25tEpS0KakjmYa8SPtTVFO+SZlItUgtT32b5p92Nl0wPSG9f5v6tv3bpjMcMn7Yjt7O2t6TKZe5J3Nih/WOqp3QzrCdPbsUdmXvmtrtuLt+D3FP7J5fsnSyirLe7A3Y25Utlb07e/Ibx2+acvhyuDlj+8z2VX6L/jb624H9+vuP7v+UG557I08nryTvQz4r/8Z3ut+VfrdyIPLAQIFRwfFCbGFC4ehBy4P1RYJFGUWTh9wPtRXLFucWvzm85fD1EoOSyiPEIylHxkvdSjuOKh4tPPqhLKpspNymvKVCsmJ/xdKx8GPDx62ON1dKVeZVvv8++vu7VY5VbdXK1SUnsCdSTzyt8a/p+4HxQ0OteG1e7ce6hLrxeu/63gbjhoZGycaCJrgppWn2ZMjJwVN2pzqaNZurWugteafB6ZTTz34M/XH0jOuZnrOMs80/Kf1U0UptzW2D2ra1zbdHtY93BHUMdbp09nSZdbX+rPVz3Tm5c+Xnhc8XXCBeyL6wcjHj4kI3p3vuEvvSZM+WngeXAy/f6fXqHbjieuXaVYerl/us+y5eM7927rrp9c4bjBvtN41utvUb9rf+YvhL64DRQNst41sdgyaDXUPrhy4MWw5fum13++od5zs3RzaMDI36jd4dCxkbvxt+d+Ze3L2X91PvLz/Y/RDzMPeRwKOSx5KPq39V+7Vl3Gj8/ITdRP8TnycPJlmTz39L+u3DVPZTytOSaZnphhm9mXOzDrODzzY+m3rOeb48l/O74O8VL1Rf/PSH1R/984HzUy+5L1de5b8We133xuBNz4LnwuPF+MXlpdy3Ym/r3zHe9b0PeD+9nPYB96H0o9rHrk+unx6uxK+scJhc5qoVQCELjowE4FUdAJQgxDsMIl5o45r/+svPQF84m78ZNFV95iCXNY+2GkYA1FkB4LcbADfEoxxHlhLCZCR78iyiFYD19f9Zf0VSpL7e2hlkLmJN3q6svJYCANcFwEfuysrysZWVjzXIsPcA6E78v7N9xWvekBdYxH+exvCoX3on+DrWfOMX9+TrDHgTG4Cv859BL8YUR/rntgAAAFZlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA5KGAAcAAAASAAAARKACAAQAAAABAAAAFqADAAQAAAABAAAAEwAAAABBU0NJSQAAAFNjcmVlbnNob3SNOxOvAAAB1GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4yMjwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlVzZXJDb21tZW50PlNjcmVlbnNob3Q8L2V4aWY6VXNlckNvbW1lbnQ+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4xOTwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgrI6awnAAAAMElEQVQ4EWN8Fxf/n4EGgIkGZoKNHDUYHrKjQTEaFPAQgDNGU8VoUMBDAM4YeqkCABdVAtCcSWeTAAAAAElFTkSuQmCC
"  class="lazy" :data-src="item.shop_item.image.replace('.jpg','-768x768.jpg')"/>

        <div class="order-bottom" style="text-align: center;">
          {{item.shop_item.name}}, ${{parseFloat(item.shop_item.price)}}
          <div class="order-panel">

            <button class="snipcart-add-item"
              @click="modalPopup(item,index)"
            >
              <ShopNow />
            </button>
  
          </div>
        </div>
      </div>
       <!-- <div class="shopthird" v-if="item.shop_item.category === currentCategory" v-for="item in shopItems" -->
       <div class="shopthird" v-for="item in shopItems"
        :key="item.shop_item.id">

<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAATCAYAAACUef2IAAAKHmlDQ1BJQ0MgUHJvZmlsZQAASImFlgdUVNcWhs+90xtthqH3DtLbANJ7k15FZRhg6A5DFbEhwQhEEBERUAISqoLRUGNBRLEQBBSwByQIKDFYABWV3IEkGt9b7+1Z5+5v/XP2PnvunbXuDwCpkMnhxMECAMQnJHO9HW1kA4OCZXG/ATyQARSgCsyYrCSOtaenG0Di7/zvWBwFEC/f1uT1+s/v/2cIhUcksQCAQhBmsDjcZISLEfZNS+bweAZhGhcZCuEPPGavMm9iQAtbY8XVPb7etggzAMCTmUwuGwCiHaLLprLYSB9iOMI6CeHRCQjz+luwopiIRryD8LrIuJR0AEi8eXTi47ciOkkHYVWkloNwIG+2sC/6s/91Vtg/ZzGZ7H84Pi6F9ddv5N0dckSCnw+SxZElCSKBFogDKSAdyAIO4IKtiBKNKBHIc/jvdYzVOltkJwdsQyqiARtEgWSk3uGLXj6rnZJBGmAieyIQxQ352PKe6VrL1/TVrhD9xmctsRsAk1xEZH/WmAoAdD4FgLr4WVN4hYxTCMD5QVYKN3VNQ/MuGEAE/IAGxIA0UED+M5pADxgBM2AF7IEL8AC+IAhsBixk3nhkqjSQCfaAHJAHCsFhUAYqwQlQD06BM6AdnAOXwFVwEwyCEfAAjIMp8BzMg0WwDEEQDqJAVEgMkoGUIA1ID2JAFpA95AZ5Q0FQKMSGEqAUKBPaC+VBRVAZVAU1QD9CndAl6Do0BN2DJqBZ6BX0HkbBZJgGS8HKsDbMgK1hV9gX3gSz4UQ4A86GD8ClcDV8Em6DL8E34RF4HH4OL6AAioSio+RQmigGyhblgQpGRaK4qJ2oXFQJqhrVjOpC9aFuo8ZRc6h3aCyaipZFa6LN0E5oPzQLnYjeic5Hl6Hr0W3oXvRt9AR6Hv0JQ8FIYjQwphhnTCCGjUnD5GBKMLWYVswVzAhmCrOIxWLpWBWsMdYJG4SNwW7H5mOPYVuw3dgh7CR2AYfDieE0cOY4DxwTl4zLwR3FncRdxA3jpnBv8SS8DF4P74APxifgs/Al+Eb8Bfwwfhq/TBAgKBFMCR6EcMI2QgGhhtBFuEWYIiwTBYkqRHOiLzGGuIdYSmwmXiE+JL4mkUjyJBOSFymatJtUSjpNukaaIL0jC5HVybbkEHIK+QC5jtxNvkd+TaFQlClWlGBKMuUApYFymfKY8paPyqfF58wXzreLr5yvjW+Y7wU/gV+J35p/M38Gfwn/Wf5b/HMCBAFlAVsBpsBOgXKBToExgQVBqqCuoIdgvGC+YKPgdcEZIZyQspC9ULhQttAJoctCk1QUVYFqS2VR91JrqFeoUzQsTYXmTIuh5dFO0QZo88JCwgbC/sLpwuXC54XH6Si6Mt2ZHkcvoJ+hj9Lfi0iJWItEiOwXaRYZFlkSlRC1Eo0QzRVtER0RfS8mK2YvFit2UKxd7JE4Wlxd3Es8Tfy4+BXxOQmahJkESyJX4ozEfUlYUl3SW3K75AnJfskFKWkpRymO1FGpy1Jz0nRpK+kY6WLpC9KzMlQZC5lomWKZizLPZIVlrWXjZEtle2Xn5STlnORS5KrkBuSW5VXk/eSz5FvkHykQFRgKkQrFCj0K84oyiu6KmYpNiveVCEoMpSilI0p9SkvKKsoByvuU25VnVERVnFUyVJpUHqpSVC1VE1WrVe+oYdUYarFqx9QG1WF1Q/Uo9XL1WxqwhpFGtMYxjaF1mHUm6xLWVa8b0yRrWmumajZpTmjRtdy0srTatV5oK2oHax/U7tP+pGOoE6dTo/NAV0jXRTdLt0v3lZ66HkuvXO+OPkXfQX+Xfof+SwMNgwiD4wZ3DamG7ob7DHsMPxoZG3GNmo1mjRWNQ40rjMcYNIYnI59xzQRjYmOyy+ScyTtTI9Nk0zOmf5hpmsWaNZrNrFdZH7G+Zv2kubw507zKfNxC1iLU4nuLcUs5S6ZlteUTKwWrcKtaq2lrNesY65PWL2x0bLg2rTZLtqa2O2y77VB2jna5dgP2QvZ+9mX2jx3kHdgOTQ7zjoaO2x27nTBOrk4HncacpZxZzg3O8y7GLjtcel3Jrj6uZa5P3NTduG5d7rC7i/sh94cblDYkbGj3AB7OHoc8HnmqeCZ6/uyF9fL0Kvd66q3rnend50P12eLT6LPoa+Nb4PvAT9Uvxa/Hn98/xL/BfynALqAoYDxQO3BH4M0g8aDooI5gXLB/cG3wwkb7jYc3ToUYhuSEjG5S2ZS+6fpm8c1xm89v4d/C3HI2FBMaENoY+oHpwaxmLoQ5h1WEzbNsWUdYz8OtwovDZyPMI4oipiPNI4siZ9jm7EPs2SjLqJKouWjb6LLolzFOMZUxS7EesXWxK3EBcS3x+PjQ+M4EoYTYhN6t0lvTtw5xNDg5nPFE08TDifNcV25tEpS0KakjmYa8SPtTVFO+SZlItUgtT32b5p92Nl0wPSG9f5v6tv3bpjMcMn7Yjt7O2t6TKZe5J3Nih/WOqp3QzrCdPbsUdmXvmtrtuLt+D3FP7J5fsnSyirLe7A3Y25Utlb07e/Ibx2+acvhyuDlj+8z2VX6L/jb624H9+vuP7v+UG557I08nryTvQz4r/8Z3ut+VfrdyIPLAQIFRwfFCbGFC4ehBy4P1RYJFGUWTh9wPtRXLFucWvzm85fD1EoOSyiPEIylHxkvdSjuOKh4tPPqhLKpspNymvKVCsmJ/xdKx8GPDx62ON1dKVeZVvv8++vu7VY5VbdXK1SUnsCdSTzyt8a/p+4HxQ0OteG1e7ce6hLrxeu/63gbjhoZGycaCJrgppWn2ZMjJwVN2pzqaNZurWugteafB6ZTTz34M/XH0jOuZnrOMs80/Kf1U0UptzW2D2ra1zbdHtY93BHUMdbp09nSZdbX+rPVz3Tm5c+Xnhc8XXCBeyL6wcjHj4kI3p3vuEvvSZM+WngeXAy/f6fXqHbjieuXaVYerl/us+y5eM7927rrp9c4bjBvtN41utvUb9rf+YvhL64DRQNst41sdgyaDXUPrhy4MWw5fum13++od5zs3RzaMDI36jd4dCxkbvxt+d+Ze3L2X91PvLz/Y/RDzMPeRwKOSx5KPq39V+7Vl3Gj8/ITdRP8TnycPJlmTz39L+u3DVPZTytOSaZnphhm9mXOzDrODzzY+m3rOeb48l/O74O8VL1Rf/PSH1R/984HzUy+5L1de5b8We133xuBNz4LnwuPF+MXlpdy3Ym/r3zHe9b0PeD+9nPYB96H0o9rHrk+unx6uxK+scJhc5qoVQCELjowE4FUdAJQgxDsMIl5o45r/+svPQF84m78ZNFV95iCXNY+2GkYA1FkB4LcbADfEoxxHlhLCZCR78iyiFYD19f9Zf0VSpL7e2hlkLmJN3q6svJYCANcFwEfuysrysZWVjzXIsPcA6E78v7N9xWvekBdYxH+exvCoX3on+DrWfOMX9+TrDHgTG4Cv859BL8YUR/rntgAAAFZlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA5KGAAcAAAASAAAARKACAAQAAAABAAAAFqADAAQAAAABAAAAEwAAAABBU0NJSQAAAFNjcmVlbnNob3SNOxOvAAAB1GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4yMjwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlVzZXJDb21tZW50PlNjcmVlbnNob3Q8L2V4aWY6VXNlckNvbW1lbnQ+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4xOTwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgrI6awnAAAAMElEQVQ4EWN8Fxf/n4EGgIkGZoKNHDUYHrKjQTEaFPAQgDNGU8VoUMBDAM4YeqkCABdVAtCcSWeTAAAAAElFTkSuQmCC
" class="lazy" v-bind:data-src="item.shop_item.image.replace('.jpg','-768x768.jpg')"/>


        <div class="order-bottom" style="text-align: center;">
          {{item.shop_item.name}}
          <div class="order-panel">
            <button style="background: transparent; border: 0;"
              @click="modalPopup(item)"
            >
              <ShopNow />
            </button>
  
          </div>
        </div>
      </div>



    </div>
  </div>

<button class="toggle snipcart-checkout"><span>
  
  
  <svg style="margin-top: -5px;margin-left: -5px;" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" alt="" title="" class="snipcart-cart-header__icon snipcart__icon--blue-dark snipcart__icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M51.714 20.47L55 60H9l3.286-39.53h9.857v-6.588C22.143 8.424 26.556 4 32 4c5.444 0 9.857 4.424 9.857 9.882v6.589h9.857zM25.43 13.883v16.47h-3.286v-6.587h-6.834l-2.737 32.94h38.856l-2.737-32.94h-6.834v6.588h-3.286v-16.47c0-3.634-2.947-6.589-6.571-6.589-3.624 0-6.571 2.955-6.571 6.588zm3.285 9.883V20.47h6.572v3.294h-6.572z" fill="#313749"></path></svg>
  
  


     <span class="snipcart-items-count" style="font-size: 14px;margin-top: 20px;"></span></span></button>




  </div>
</template>

<script type="text/javascript">
import "@/assets/snipcartdefault.css";
import VueLazyload from 'vue-lazyload';
import AddToCart from "@/components/svgIcons/AddToCart";
import ShopNow from "@/components/svgIcons/ShopNow";
import CloseModalRed from "@/components/svgIcons/CloseModalRed";
import Carousel from "@/components/Carousel";


export default {
  name: "shop",
  components: {
    AddToCart,
    ShopNow,
    CloseModalRed,
    VueLazyload
  },
  data() {
    return {

  modalOpen: false,
  currentCategory: 'all',
  currentPopupItem: null,
  shopItems: [],
      story: {
        content: {
          body: [],
        },
      },
    };
  },
            computed: {
    uniqueNames: function() {
      var filtered_array = [];
      for(var i =0; i < this.shopItems.length; i++) {
        if(filtered_array.indexOf(this.shopItems[i].shop_item.category) === -1) {
          filtered_array.push(this.shopItems[i].shop_item.category)
        }
      }
    return filtered_array;
    }
  },
  mounted () {
this.individualRestaurant()





      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://cdn.snipcart.com/themes/v3.0.18/default/snipcart.js')
      recaptchaScript.setAttribute('data-autopop', 'false')
      recaptchaScript.setAttribute('data-api-key', 'MTAyNTVhZGQtMzU2Mi00ZWEwLWI1ZjctNWQwY2MwYjZiYjZkNjM3MjYyOTQ3OTQ3OTcxNTA1')
      document.head.appendChild(recaptchaScript)

  // window.scrollTo(0, 0);
  // window.addEventListener("scroll", this.lazyLoad);
  },
  methods: {
  // lazyLoad: function () {
  //   let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  //   let active = false;
  //   if (active === false) {
  //     active = true;
  //     setTimeout(() => {
  //       lazyImages.forEach(function (lazyImage) {
  //         if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
  //           lazyImage.src = lazyImage.dataset.src;
  //           lazyImage.classList.remove("lazy");
  //           lazyImages = lazyImages.filter(function (image) {
  //             return image !== lazyImage;
  //           });

  //           if (lazyImages.length === 0) {
  //             window.removeEventListener("scroll", this.lazyLoad);
  //           }
  //         }
  //       });
  //       active = false;
  //     }, 200)

  //   }
  // },
filterItems (category) {
  this.currentCategory = category
},
  async individualRestaurant(){

    let responseAcf = await this.$http.get(`https://mamnoontogo.net/wp-json/acf/v3/restaurant/188`)

    let AcfBlock = responseAcf
    let pageData = AcfBlock.data.acf.content_fields

    for(let i = 0;i<pageData.length;i++){
    if(pageData[i].acf_fc_layout === 'online_shop'){
      this.shopItems = pageData[i].online_shop
    }
    }

},
modalPopup(item,index){

this.modalOpen = true
this.currentPopupItem = item
this.currentPopupItem.index = index
},
modalClose(){
  this.modalOpen = false
  this.currentPopupItem = null
}
  },
};







</script>


<style lang="scss">

#alacarte{
  border: 5px solid white;
     border-top:0;
    //  border-bottom: 20px;
}
.shopthird {
  width: 33.33333333%;
  float: left;
  margin-bottom: 0px;
  border: 5px solid white;
 
  img {
    width: 100%;
  }


@media only screen and (max-width: 1080px) {
width: 50%
}


@media only screen and (max-width: 768px) {

width: 100%

}



}

.open-modal{
  width: 100%;
  height: 100%;
  background: rgba(255,255,255,.6);
  position: fixed;
// top: 92px;
    top: 72px;
    text-align: center;
    padding-top:20px;


@media only screen and (max-width: 768px) {
      // padding-top: 0px;
    z-index: 100;
        top: 0;
            // padding-top: 10px;

                padding-top: 0;
}

    
}

.modalContainer{
      background: #fff367;
        border: 5px solid white;
}


.modal-close{
  top: 5px;
  right: 10px;
  position: absolute;
  background: transparent;
  border: 0;
}

.columnblock{
  width: 50%;
  float: left;


@media only screen and (max-width: 768px) {

width: 100%

}

}




.columnblock img{
  width: 100%;
}

.no-padding{
  padding: 0;
  display: inline-block;
}
.text-left{
  text-align: left;
}




button,
button:focus,
button:active{
  outline: none;
}


.pad10{
  padding: 10px;
}

.pad30{
  padding: 30px;
}


h4.text-left.red{
  color: #f05d5b;
  font-weight: 600;
}



p.thick-grey{
color:#595959;
  font-weight: 600;

}






.category-filter{
background-color: #F58E58;
    min-height: 50px;
    text-align: center;
    padding-top: 8px;
    padding-bottom: 10px;

.inline-filters{

padding-left: 0;
margin: 0px auto 0;
li{
      display: inline;
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    font-weight: 700;
    font-size: 20px;
    text-align: center;
    padding: 0 20px;
    color: #fff;

cursor: pointer;
    &.underline{
    color: #fff367;
  }
}
}
  
}


.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.fw{
  width: 100%;
}


.snipcart__box--badge, .snipcart__font--subtitle, .snipcart__font--xlarge {
    font-size: 15px !important;
}






.pad10{
  padding: 30px;
}





@media only screen and (max-width: 768px) {


  .pad10{
  padding: 10px;
}

.merch-modal-header{
  font-size: 1rem;
}

.merch-modal-price{
margin-top: 10px;font-size: 1rem;margin-bottom:.25rem;
}




.merch-modal-description{
margin-top: 5px;font-size: .8rem;font-weight: 300;margin-bottom: 0.25rem;
}


.order-panel{
 padding: 5px 0
}


svg#shopnow {
    width: 120px;
    margin: 5px auto;
}

}


    .toggle{
        display: block;
        position: fixed;
        bottom: 10px;
        right: 10px;
        z-index: 100;
            border: 1px solid #f05d5b;
    background-color: #f05d5b;
    color: #ffffff;
    padding: 5px 10px;
    border-radius: 4px;
    }



.shopping-bag{

        width: 20px;
	.st0{fill:#FFFFFF;}
	.st1{fill:#FFFFFF;}
	.st2{fill:#FFFFFF;}
	.st3{fill:#FFFFFF;}
	.st4{fill:#FFFFFF;}
}

  .toggle.snipcart-checkout{
display: none;
  }


@media only screen and (max-width: 768px) {

  .toggle.snipcart-checkout{
display: block
  }
}

</style>