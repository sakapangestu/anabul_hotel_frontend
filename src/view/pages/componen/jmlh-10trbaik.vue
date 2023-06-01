<template>
  <div id="chart">
    <apexchart
      v-if="show"
      type="bar"
      height="350"
      width="550"
      :options="chartOptions2"
      :series="series2"
    ></apexchart>
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
      show: false,
      series2: [
        {
          name: "Jumlah Hotel",
          data: []
        }
      ],
      chartOptions2: {
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
      tophotel: {}
    };
  },
  methods: {
    fetchTopHotelArea() {
      this.$api
        .get(`dashboard/topHotel`)
        .then(res => {
          this.tophotel = res.data.data ? res.data.data : {};
          // console.log(this.tophotel);
          this.tophotel.map(e => {
            // console.log(e);
            this.series2[0].data.push(e.total);
            this.chartOptions2.xaxis.categories.push(e.name);
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
    this.fetchTopHotelArea();
  }
};
</script>
