<template>
  <div id="elementContainer" >
    <input id="pac-input" class="controls" type="text" placeholder="Enter a location" />
   







    <div class="map-container">
      <div id="map"></div>


    </div>
  </div>
</template>    


<script>
export default {
    data() {
          return {
            currentData: {}
          }
      },
  methods: {
    reload() {
      this.$forceUpdate();
    },
    initMap() {

let self = this

      let map;
      let geocoder;

      map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 47.6145714, lng: -122.3278329 },
        zoom: 8,
        scaleControl: true,
      });

      let bounds;
      bounds = new google.maps.LatLngBounds();
      google.maps.event.addListenerOnce(map, "tilesloaded", function (evt) {
        bounds = map.getBounds();
      });
      let marker = new google.maps.Marker({
        center: { lat: 47.6145714, lng: -122.3278329 },
      });
      let polygon = new google.maps.Polygon({
        path: [
          { lat: 46.6145714, lng: -122.3278329 },
          { lat: 47.6145714, lng: -121.3278329 },
          { lat: 48.6145714, lng: -122.3278329 },
          { lat: 47.6145714, lng: -123.3278329 },
        ],
        geodesic: true,
        strokeColor: "#FFd000",
        strokeOpacity: 1.0,
        strokeWeight: 4,
        fillColor: "#FFd000",
        fillOpacity: 0.35,
      });

      polygon.setMap(map);

    //   var input = /** @type {!HTMLInputElement} */ (document.getElementById(
    //     "pac-input"
    //   ));

      var input = document.getElementById("pac-input");


      var types = document.getElementById("type-selector");
      map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
      map.controls[google.maps.ControlPosition.TOP_LEFT].push(types);

      var autocomplete = new google.maps.places.Autocomplete(input);

      autocomplete.addListener("place_changed", function () {
        marker.setMap(null);

        var place = autocomplete.getPlace();
        var newBounds = new google.maps.LatLngBounds(
          bounds.getSouthWest(),
          bounds.getNorthEast()
        ); //Changed
        // removed newBounds = bounds;
        if (!place.geometry) {
          geocodeAddress(input.value); //Added on 27/09/2016
          //window.alert("Autocomplete's returned place contains no geometry");
          return;
        }
        marker.setPosition(place.geometry.location);
        marker.setMap(map);
        newBounds.extend(place.geometry.location);
        map.fitBounds(newBounds);
        if (
          google.maps.geometry.poly.containsLocation(
            place.geometry.location,
            polygon
          )
        ) {
            console.log(place)






        let googleAddress = place

        self.$store.commit("googleAddress", { googleAddress });






        } else {
          alert("The address is outside of the area.");
          initMap();
        }
      });
    },
  },
  mounted() {
    this.initMap();
  },
};
</script>




<style lang="scss">  
#pac-input{
  width: 100%;
  padding: 12px 12px;
border-radius: 4px;
  border: 1px solid #b7b7b7;
  margin-bottom: 20px;



}

</style>