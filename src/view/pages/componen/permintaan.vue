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
        labels: ["Diproses", "Diterima", "Ditolak"],
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
      permintaan: {
        request_accept: 0,
        request_process: 0,
        request_reject: 0
      }
    };
  },
  methods: {
    fetchPermintaan() {
      this.$api
        .get(`dashboard/request/total`)
        .then(res => {
          this.permintaan = res.data.data ? res.data.data : {};
          // console.log(this.permintaan);
          this.series.push(this.permintaan.request_process);
          this.series.push(this.permintaan.request_accept);
          this.series.push(this.permintaan.request_reject);
          // console.log(this.permintaan);
        })
        .catch(err => {
          console.error(err);
          // alert(err);
        });
    }
  },
  mounted() {
    this.fetchPermintaan();
  }
};
</script>
