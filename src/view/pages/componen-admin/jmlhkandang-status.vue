<template>
  <div id="chart">
    <apexchart
      type="pie"
      width="350"
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
      series: [],
      chartOptions: {
        chart: {
          width: 380,
          type: "pie"
        },
        labels: ["Terisi", "Kosong"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      },
      kandang: {
        cage_filled: 0,
        cage_unfilled: 0
        // request_accept: 0,
        // request_process: 0,
        // request_reject: 0
      },
      hotelId: ""
    };
  },
  methods: {
    fetchPermintaan() {
      // console.log(getHotelId());
      this.$api
        .get(`dashboard/cage/total?hotel_id=${getHotelId()}`)
        .then(res => {
          this.kandang = res.data.data ? res.data.data : {};
          console.log(this.kandang);
          this.series.push(this.kandang.cage_filled);
          this.series.push(this.kandang.cage_unfilled);
          // this.series.push(this.kandang.request_reject);
          // console.log(this.kandang);
        })
        .catch(err => {
          console.error(err);
          // alert(err);
        });
    }
  },
  mounted() {
    this.fetchPermintaan();
    this.hotelId = getHotelId();
  }
};
</script>
