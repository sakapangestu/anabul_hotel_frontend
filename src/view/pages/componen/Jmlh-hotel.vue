<template>
  <div id="chart">
    <div class="row">
      <div class="col">
        <a>Provinsi</a>
        <b-select
          v-model="province_id"
          @change="resetProvince"
          :label-field="provinces.name"
          value-field="id_province"
          text-field="name"
          :options="provinces"
        >
        </b-select>
      </div>
      <div class="col">
        <a>Kota</a>
        <b-select
          v-model="city_id"
          @change="fetchDistrict"
          :label-field="cities.name"
          value-field="id_city"
          text-field="name"
          :options="cities"
        >
        </b-select>
      </div>
      <div class="col">
        <a>Kecamatan</a>
        <b-select
          v-model="district_id"
          @change="fetchTotalHotelArea"
          :label-field="districts.name"
          value-field="id_district"
          text-field="name"
          :options="districts"
        >
        </b-select>
      </div>
      <div class="col">
        <br />
        <button
          type="button"
          class="btn btn-sm btn-secondary ml-5"
          @click="resetTotalHotelArea"
        >
          <!--      <i class="fa fa-refresh mr-1" aria-hidden="true"></i>-->
          <i class="fas fa-redo"></i>
          Reset
        </button>
      </div>
    </div>
    <!--    <apexchart-->
    <!--      v-if="show"-->
    <!--      type="bar"-->
    <!--      height="350"-->
    <!--      width="550"-->
    <!--      :options="chartOptions2"-->
    <!--      :series="series2"-->
    <!--    ></apexchart>-->
    <b-list-group>
      <b-list-group-item
        class="d-flex justify-content-between align-items-center"
        v-for="total in totalhotel"
        :key="total.id"
      >
        <div>
          {{total.name}}
        </div>
        <b-badge variant="primary" pill>{{ total.total }}</b-badge>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
export default {
  name: "dashboard",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    VueApexCharts
  },

  data() {
    return {
      // show: false,
      provinces: [],
      cities: [],
      districts: [],
      province_id: "",
      city_id: "",
      district_id: "",
      totalhotel: []
    };
  },
  methods: {
    resetTotalHotelArea() {
      this.province_id = "";
      this.city_id = "";
      this.district_id = "";
      this.fetchTotalHotelArea();
    },
    resetProvince() {
      this.city_id = "";
      this.district_id = "";
      this.fetchTotalHotelArea();
      this.fetchCity(this.province_id);
    },
    fetchProvinces() {
      this.resetProvince();
      this.$api
        .get(`province/all`)
        .then(res => {
          this.provinces = res.data.data.data ? res.data.data.data : [];
          // console.log(this.ktghewan);
        })
        .catch(err => {
          console.error(err);
          // alert(err);
        });
    },
    fetchCity(province = this.province_id) {
      this.fetchTotalHotelArea();
      // console.log(this.province_id);
      this.$api
        .get(`city/all?provinceId=${province}`)
        .then(res => {
          this.cities = res.data.data.data ? res.data.data.data : [];
          // console.log(this.cities);
        })
        .catch(err => {
          console.error(err);
          // alert(err);
        });
    },
    fetchDistrict(city = this.city_id) {
      this.district_id = "";
      this.fetchTotalHotelArea();
      this.$api
        .get(`district/all?cityId=${city}`)
        .then(res => {
          this.districts = res.data.data.data ? res.data.data.data : [];
          // console.log(this.ktghewan);
        })
        .catch(err => {
          console.error(err);
          // alert(err);
        });
    },
    fetchTotalHotelArea() {
      this.$api
        .get(
          `dashboard/totalHotel?provinceId=${this.province_id}&cityId=${this.city_id}&districtId=${this.district_id}`
        )
        .then(res => {
          this.totalhotel = res.data.data ? res.data.data : {};
          console.log(this.totalhotel);
        })
        .catch(err => {
          console.error(err);
          // alert(err);
        });
    }
  },
  mounted() {
    this.fetchTotalHotelArea();
    this.fetchProvinces();
  }
};
</script>
