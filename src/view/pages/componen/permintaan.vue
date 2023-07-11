<template>
  <div id="chart">
    <div class="row">
      <div class="col">
        <select id="inputState" class="form-control" v-model="year">
          <option selected disabled>
            Choose DO
          </option>
          <option v-for="y in years" :key="y.id" :value="y.name">
            {{ y.name }}
          </option>
        </select>
      </div>
      <div class="col">
        <button
          type="button"
          class="btn btn-sm btn-primary ml-5"
          @click="fetchPermintaan"
        >
          <i class="fa fa-eye mr-1" aria-hidden="true"></i>
          View
        </button>
      </div>
      <div class="col">
        <button
          type="button"
          class="btn btn-sm btn-secondary ml-5"
          @click="resetPermintaan"
        >
          <!--      <i class="fa fa-refresh mr-1" aria-hidden="true"></i>-->
          <i class="fas fa-redo"></i>
          Reset
        </button>
      </div>
    </div>
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
      years: [],
      year: "",
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
        request_reject: 0,
      }
    };
  },
  methods: {
    resetPermintaan() {
      this.years = [];

      this.year = new Date().getFullYear();

      const year = new Date().getFullYear();
      for (let i = 0; i < 5; i++) {
        this.years.push({
          name: (year - i).toString()
        });
      }

      this.fetchPermintaan();
    },
    fetchPermintaan() {
      this.series = [];
      this.$api
        .get(`dashboard/request/total?year=${this.year}`)
        .then(res => {
          this.permintaan = res.data.data ? res.data.data : {};
          console.log(this.permintaan);

          this.series.push(this.permintaan.request_process);
          this.series.push(this.permintaan.request_accept);
          this.series.push(this.permintaan.request_reject);
          // this.series.push(this.years);
          // console.log(this.permintaan);
        })
        .catch(err => {
          console.error(err);
          // alert(err);
        });
    }
  },
  mounted() {
    this.year = new Date().getFullYear();

    const year = new Date().getFullYear();
    for (let i = 0; i < 5; i++) {
      this.years.push({
        name: (year - i).toString()
      });
    }

    this.fetchPermintaan();
  }
};
</script>
