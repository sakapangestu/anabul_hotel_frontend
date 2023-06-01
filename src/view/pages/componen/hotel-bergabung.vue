<template>
  <div id="chart">
    <apexchart
      v-if="show"
      type="bar"
      height="350"
      width="750"
      :options="chartOptions1"
      :series="series1"
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
      chartOptions1: {
        chart: {
          id: "vuechart-example"
        },
        xaxis: {
          categories: []
        }
      },
      series1: [
        {
          name: "Jumlah Hotel",
          data: []
        }
      ],
      joinhotel: []
    };
  },
  methods: {
    fetchHotelBergabung() {
      this.$api
        .get(
          `dashboard/totalJoinHotel?startMonth=01&startYear=2023&endMonth=12&endYear=2023`
        )
        .then(res => {
          this.joinhotel = res.data.data ? res.data.data : {};
          console.log(this.joinhotel);
          this.joinhotel.map(e => {
            console.log(e.month_year);
            this.series1[0].data.push(e.total);
            this.chartOptions1.xaxis.categories.push(e.month_year);
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
    this.fetchHotelBergabung();
  }
};
</script>
