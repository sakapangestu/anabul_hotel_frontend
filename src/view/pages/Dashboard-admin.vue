<template>
  <div class="row mb-3">
    <!-- Earnings (Monthly) Card Example -->
    <div class="col-xl-3 col-md-6 mb-4">
      <div class="card h-100">
        <div class="card-body">
          <div class="row align-items-center">
            <div class="col mr-2">
              <div class="text-xs font-weight-bold text-uppercase mb-1">
                Total Staff Hotel
              </div>
              <div class="h5 mb-0 font-weight-bold text-gray-800">
                {{ totalStaff }}
              </div>
            </div>
            <div class="col-auto">
              <i class="fas fa-hotel fa-2x text-primary"></i>
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
                Total Hewan Dititipkan
              </div>
              <div class="h5 mb-0 font-weight-bold text-gray-800">
                {{ totalHewanDalam }}
              </div>
            </div>
            <div class="col-auto">
              <i class="far fa-newspaper fa-2x text-success"></i>
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
                Total Kandang
              </div>
              <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                {{ totalKandang }}
              </div>
            </div>
            <div class="col-auto">
              <i class="fas fa-trailer fa-2x text-info"></i>
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
                Total Layanan
              </div>
              <div class="h5 mb-0 font-weight-bold text-gray-800">
                {{ tottalLayanan }}
              </div>
              <!--              <div class="mt-2 mb-0 text-muted text-xs">-->
              <!--                <span class="text-danger mr-2"-->
              <!--                  ><i class="fas fa-arrow-down"></i> {{totalStaff}}</span-->
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
              <div id="chart">
                <div class="mt-5">
                  <a> GRAFIK PENGHASILAN PERBULAN</a>
                </div>
                <div class="mt-3">
                  <grafikPenghasilan></grafikPenghasilan>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-row>
      <b-row>
        <div class="col">
          <div class="row">
            <div class="card col">
              <div id="chart">
                <div class="mt-5">
                  <a> JUMLAH TRANSAKSI SETIAP HARINYA</a>
                </div>
                <div class="mt-3">
                  <Jmlhtransaksidate></Jmlhtransaksidate>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-row>
      <b-row>
        <div class="col">
          <div class="row">
            <div class="card col">
              <div id="chart">
                <div class="mt-3">
                  <a> JUMLAH TRANSAKSI SETIAP BULANNYA</a>
                </div>
                <div class="mt-3">
                  <JmlhtransaksiMountahyear></JmlhtransaksiMountahyear>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-row>
      <b-row class="mt-5">
        <div class="col">
          <div class="row">
            <div class="card col-6">
              <div id="chart">
                <div class="mt-5">
                  <a>10 JUMLAH LAYANAN TERBANYAK MASUK </a>
                </div>
                <div class="mt-3">
                  <PeliharaanTerbanyak></PeliharaanTerbanyak>
                </div>
              </div>
            </div>
            <div class="card col-6">
              <div id="chart">
                <div class="mt-5">
                  <a>DAFTAR STAFF DAN JUMLAH HEWAN YANG DITANGANI</a>
                </div>
                <div class="mt-3">
                  <daftarStaff></daftarStaff>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-row>
      <b-row class="mt-5">
        <div class="col">
          <div class="row">
            <div class="card col-6">
              <div id="chart">
                <div class="mt-5">
                  <a>10 JUMLAH PRODUK TERLARIS </a>
                </div>
                <div class="mt-3">
                  <produkTerbanyak></produkTerbanyak>
                </div>
              </div>
            </div>
            <div class="card col-6">
              <div class="mt-5">
                <a>STATUS JUMLAH KANDANG</a>
              </div>
              <div class="mt-3">
                <jmlhkandangStatus></jmlhkandangStatus>
              </div>
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
import { getHotelId } from "@/service/jwt.service";
import Jmlhtransaksidate from "@/view/pages/componen-admin/jmltransaksi-date";
import JmlhtransaksiMountahyear from "@/view/pages/componen-admin/jmlhtransaksi-mountahyear";
import PeliharaanTerbanyak from "@/view/pages/componen-admin/peliharaan-terbanyak";
import daftarStaff from "@/view/pages/componen-admin/daftar-staff";
import produkTerbanyak from "@/view/pages/componen-admin/produk-terbanyak";
import jmlhkandangStatus from "@/view/pages/componen-admin/jmlhkandang-status";
import grafikPenghasilan from "@/view/pages/componen-admin/grafik-penghasilan";
export default {
  name: "dashboard",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    VueApexCharts,
    Jmlhtransaksidate,
    JmlhtransaksiMountahyear,
    PeliharaanTerbanyak,
    daftarStaff,
    produkTerbanyak,
    jmlhkandangStatus,
    grafikPenghasilan
  },

  data() {
    return {
      hotel_id: "",
      totalStaff: 0,
      totalHewanDititipkan: 0,
      totalKandang: 0,
      tottalLayanan: 0,
      totalHewanDalam: 0,
      staff: [],
      hewandititipkan: {},
      kandang: [],
      layanan: []
    };
  },
  methods: {
    fetchStaff() {
      this.$api
        .get(`staff/all`)
        .then(res => {
          this.staff = res.data.data.data ? res.data.data.data : [];
          this.totalStaff = this.staff.length;
        })
        .catch(err => {
          console.error(err);
          // alert(err);
        });
    },
    fetchHewanDititipkan() {
      this.$api
        .get(`dashboard/petIn/total?hotel_id=${this.hotel_id}`)
        .then(res => {
          this.hewandititipkan = res.data.data ? res.data.data : {};
          this.totalHewanDalam = this.hewandititipkan.pet_in;
          // console.log(res.data.data);
          // this.totalHewanDititipkan = this.hewandititipkan.length;
        })
        .catch(err => {
          console.error(err);
          // alert(err);
        });
    },
    fetchKandang() {
      this.$api
        .get(`cage/all`)
        .then(res => {
          this.kandang = res.data.data.data ? res.data.data.data : [];
          this.totalKandang = this.kandang.length;
        })
        .catch(err => {
          console.error(err);
          // alert(err);
        });
    },
    fetchLayanan() {
      this.$api
        .get(`service/all`)
        .then(res => {
          this.layanan = res.data.data.data ? res.data.data.data : [];
          // console.log(this.layanan);
          this.tottalLayanan = this.layanan.length;
        })
        .catch(err => {
          console.error(err);
          // alert(err);
        });
    }
  },
  mounted() {
    this.hotel_id = getHotelId();
    this.fetchStaff();
    this.fetchHewanDititipkan();
    this.fetchKandang();
    this.fetchLayanan();
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Dashboard" }]);
  }
};
</script>
