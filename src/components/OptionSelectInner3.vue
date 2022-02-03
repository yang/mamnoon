<template>

<div class="box-inner">
<!-- {{packageObjectMaximum}}-->
<div class="pad-10 leftmodbuttons">
<!-- {{mod.id}} -->
<span class="title-bolder">{{mod.name.replace('add ','')}} <span class="italicize" v-if="mod.price != 0.0"><span class="thin">+</span>${{mod.price}}</span></span>
<br />
</div>
<div v-if="modifier.name.includes(': choose 1')">
    <div v-for="(piece,i) in upserveList" :key="'E'+ i">
    <div v-if="piece.name.toLowerCase() === mod.name"><div class="pad-10"><p>{{piece.description}}</p></div></div>
    </div>
</div>
</div>


</template>

<script> 
import NadiIconxx from "@/components/svgIcons/NadiIconxx";
export default{
name: 'OptionSelectInner',
props: ["packageObjectMaximum", "currentModifiers","currentItem","upserveList","mod","modifier", "m"],
components:{
NadiIconxx
}
}
</script>     








