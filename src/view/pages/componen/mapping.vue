<template>
  <div>
    <l-map style="height: 500px" :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker
        v-for="marker in petHotel"
        :key="marker.id"
        :lat-lng="[marker.latitude, marker.longitude]"
      >
        <l-tooltip>
          <div>
            {{ marker.name }} <br />
            {{ marker.province }} <a>,</a> {{ marker.city }} <a>,</a>
            {{ marker.district }}<a>,</a> {{ marker.subdistrict }}<br />
            {{ marker.address }}
          </div>
        </l-tooltip>
      </l-marker>
    </l-map>
  </div>
</template>
<script>
// import L from "leaflet";
// import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import { LMap, LTileLayer, LMarker, LTooltip } from "vue2-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/pin.png"),
  iconUrl: require("leaflet/dist/images/pin.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});
export default {
  name: "MyAwesomeMap",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 5,
      center: [-1.9403, 113.5759],
      // Menyesuaikan Bentuk Object dari Backend
      dataOlahanAPI: [],
      dataMaps: {
        id: "",
        latitude: 0,
        longitude: 0,
        address: "",
        province: "",
        city: "",
        district: "",
        subdistrict: ""
      },
      petHotel: []
    };
  },
  methods: {
    fetchHotel() {
      // console.log()
      this.$api
        .get(`hotel/all`)
        .then(res => {
          this.petHotel = res.data.data.data.map(a => {
            return {
              id: a.id_hotel,
              name: a.name,
              longitude: a.longitude,
              latitude: a.latitude,
              address: a.address,
              province: a.province.name,
              city: a.city.name,
              district: a.district.name,
              subdistrict: a.subdistrict.name
            };
          });
          console.log(this.petHotel);
          // this.petHotel.map(m => {
          //   this.dataOlahanAPI.push(
          //     {
          //       id: m.id_hotel,
          //       lat: m.latitude,
          //       lng: m.longitude,
          //       name: m.name
          //       // address: `${m.province.name}, ${m.city.name}, ${m.district.name}, ${m.subdistrict.name}, ${m.address}`
          //     }
          //     // this.dataMaps.id = m.id_hotel,
          //     // this.dataMaps.id = m.latitude,
          //     // this.dataMaps.id = m.longitude,
          //     // this.dataMaps.id = m.name
          //   );
          // });
          // console.log(this.petHotel);
          // this.page = res.data.data.paginate.page;
          // this.perPage = res.data.data.paginate.perPage;
          // this.totalData = res.data.data.paginate.totalData;
          // this.totalPage = res.data.data.paginate.totalPage;
        })
        .catch(err => {
          console.error(err);
          // alert(err);
        });
    }
  },
  mounted() {
    this.fetchHotel();
  }
};
</script>

<style>
.cardmap {
  width: 150px;
  height: 50px;
}
</style>
