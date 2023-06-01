<template>
  <div id="chart">
    <apexchart
      v-if="show"
      type="bar"
      height="350"
      width="545"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
import { getHotelId } from "@/service/jwt.service";
export default {
  name: "dashboard",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    VueApexCharts
  },

  data() {
    return {
      show: false,
      series: [
        {
          name: "Jumlah Produk",
          data: []
        }
      ],
      chartOptions: {
        chart: {
          type: "bar",
          height: 350
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: []
        }
      },
      topproduk: {},
      hotelId: ""
    };
  },
  methods: {
    fectTopProduk() {
      this.$api
        .get(`dashboard/topProduct?hotel_id=${getHotelId()}`)
        .then(res => {
          this.topproduk = res.data.data ? res.data.data : {};
          // console.log(this.topproduk);
          this.topproduk.map(e => {
            // console.log(e);
            this.series[0].data.push(e.total);
            this.chartOptions.xaxis.categories.push(e.name);
            this.show = true;
          });
        })
        .catch(err => {
          console.error(err);
          // alert(err);
        });
    }
  },
  mounted() {
    this.fectTopProduk();
    this.hotelId = getHotelId();
  }
};
</script>
