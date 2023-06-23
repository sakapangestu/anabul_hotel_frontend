<template>
  <div class="row mb-3">
    <!-- Earnings (Monthly) Card Example -->
    <div class="col-xl-3 col-md-6 mb-4">
      <div class="card h-100">
        <div class="card-body">
          <div class="row align-items-center">
            <div class="col mr-2">
              <div class="text-xs font-weight-bold text-uppercase mb-1">
                Total Pet Hotel
              </div>
              <div class="h5 mb-0 font-weight-bold text-gray-800">
                {{ totalPethotel }}
              </div>
            </div>
            <div class="col-auto">
              <i class="fas fa-calendar fa-2x text-primary"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Earnings (Annual) Card Example -->
    <div class="col-xl-3 col-md-6 mb-4">
      <div class="card h-100">
        <div class="card-body">
          <div class="row no-gutters align-items-center">
            <div class="col mr-2">
              <div class="text-xs font-weight-bold text-uppercase mb-1">
                Total Kelas Hewan
              </div>
              <div class="h5 mb-0 font-weight-bold text-gray-800">
                {{ totalKelas }}
              </div>
            </div>
            <div class="col-auto">
              <i class="fas fa-shopping-cart fa-2x text-success"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- New User Card Example -->
    <div class="col-xl-3 col-md-6 mb-4">
      <div class="card h-100">
        <div class="card-body">
          <div class="row no-gutters align-items-center">
            <div class="col mr-2">
              <div class="text-xs font-weight-bold text-uppercase mb-1">
                Total Kategori Hewan
              </div>
              <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                {{ totalKategori }}
              </div>
            </div>
            <div class="col-auto">
              <i class="fas fa-users fa-2x text-info"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Pending Requests Card Example -->
    <div class="col-xl-3 col-md-6 mb-4">
      <div class="card h-100">
        <div class="card-body">
          <div class="row no-gutters align-items-center">
            <div class="col mr-2">
              <div class="text-xs font-weight-bold text-uppercase mb-1">
                Total Spesies Hewan
              </div>
              <div class="h5 mb-0 font-weight-bold text-gray-800">
                {{ totalSpecies }}
              </div>
              <!--              <div class="mt-2 mb-0 text-muted text-xs">-->
              <!--                <span class="text-danger mr-2"-->
              <!--                  ><i class="fas fa-arrow-down"></i> {{totalSpecies}}</span-->
              <!--                >-->
              <!--&lt;!&ndash;                <span>Since yesterday</span>&ndash;&gt;-->
              <!--              </div>-->
            </div>
            <div class="col-auto">
              <i class="fas fa-comments fa-2x text-warning"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--     Area Chart-->
    <b-container class="bv-example-row">
      <b-row>
        <div class="col">
          <div class="row">
            <div class="card col">
              <div id="chart" class="mt-3">
                <a> MAPPING LOKASIN </a>
                <div class="mt-3">
                  <mapping></mapping>
                </div>
                <div class="mt-3 mb-3">
                  <a>Total Pet Hotel Seluruh Indonesia = {{ totalPethotel }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-row>
      <b-row class="mt-3">
        <div class="col">
          <div class="row">
            <div class="card col">
              <div id="chart">
                <div class="mt-3">
                  <a> JUMLAH PET HOTEL SETIAP DAERAH</a>
                </div>
                <div class="mt-5">
                  <JmlhHotel></JmlhHotel>
                </div>
              </div>
            </div>
            <div class="card col">
              <div id="chart">
                <div class="mt-3">
                  <a> 10 PET HOTEL TERLARIS SETIAP DAERAH </a>
                </div>
                <div class="mt-5">
                  <JmlhTerbaik></JmlhTerbaik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-row>
      <b-row class="mt-5">
        <div class="col">
          <div class="row">
            <div class="card col-8">
              <div id="chart">
                <div class="mt-3">
                  <a> JUMLAH PET HOTEL BERGABUNG SETIAP BULAN </a>
                </div>
                <div class="mt-3">
                  <HotelBergabung></HotelBergabung>
                </div>
              </div>
            </div>
            <div class="card col-4">
              <p class="pt-10">JUMLAH PERMINTAAN PET HOTEL YANG BERGABUNG</p>
              <b-col class="card-body d-flex align-items-center" sm="4">
                <div id="chart">
                  <permintaan></permintaan>
                </div>
              </b-col>
            </div>
          </div>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import VueApexCharts from "vue-apexcharts";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import HotelBergabung from "@/view/pages/componen/hotel-bergabung";
import JmlhTerbaik from "@/view/pages/componen/jmlh-10trbaik";
import JmlhHotel from "@/view/pages/componen/Jmlh-hotel";
import Permintaan from "@/view/pages/componen/permintaan";
import mapping from "@/view/pages/componen/mapping";
export default {
  name: "dashboard",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    VueApexCharts,
    HotelBergabung,
    JmlhTerbaik,
    JmlhHotel,
    Permintaan,
    mapping
  },

  data() {
    return {
      totalSpecies: 0,
      totalPethotel: 0,
      totalKelas: 0,
      totalKategori: 0,
      spshewan: [],
      pethotel: [],
      klshewan: [],
      ktghewan: []
    };
  },
  methods: {
    featchSpesies() {
      this.$api
        .get(`species/all`)
        .then(res => {
          this.spshewan = res.data.data.data ? res.data.data.data : [];
          this.totalSpecies = this.spshewan.length;
        })
        .catch(err => {
          console.error(err);
          // alert(err);
        });
    },
    featchHotel() {
      this.$api
        .get(`hotel/all`)
        .then(res => {
          this.pethotel = res.data.data.data ? res.data.data.data : [];
          this.totalPethotel = this.pethotel.length;
        })
        .catch(err => {
          console.error(err);
          // alert(err);
        });
    },
    featchKelas() {
      this.$api
        .post(`class/all`)
        .then(res => {
          this.klshewan = res.data.data.data ? res.data.data.data : [];
          // console.log(this.klshewan);
          this.totalKelas = this.klshewan.length;
        })
        .catch(err => {
          console.error(err);
          // alert(err);
        });
    },
    featchKategori() {
      this.$api
        .get(`category/all`)
        .then(res => {
          this.ktghewan = res.data.data.data ? res.data.data.data : [];
          // console.log(this.ktghewan);
          this.totalKategori = this.ktghewan.length;
        })
        .catch(err => {
          console.error(err);
          // alert(err);
        });
    }
  },
  mounted() {
    this.featchSpesies();
    this.featchHotel();
    this.featchKelas();
    this.featchKategori();
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Dashboard" }]);
  }
};
</script>
