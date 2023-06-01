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
          name: "Jumlah Peliharaan",
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
      toplayanan: {},
      hotelId: ""
    };
  },
  methods: {
    fetchTopLayanan() {
      this.$api
        .get(`dashboard/topService?hotel_id=${getHotelId()}`)
        .then(res => {
          this.toplayanan = res.data.data ? res.data.data : {};
          console.log(res.data.data);
          // this.toplayanan.map(e => {
          //   // console.log(e);
          //   this.series[0].data.push(e.total);
          //   this.chartOptions.xaxis.categories.push(e.name);
          //   this.show = true;
          // });
        })
        .catch(err => {
          console.error(err);
          // alert(err);
        });
    }
  },
  mounted() {
    this.fetchTopLayanan();
    this.hotelId = getHotelId();
  }
};
</script>
