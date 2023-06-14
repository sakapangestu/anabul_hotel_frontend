<template>
  <div id="chart">
    <div class="row">
      <div class="col">
        <div class="row">
          <div class="col">
            <select id="inputState" class="form-control" v-model="startMonth">
              <option selected disabled>
                Choose NS
              </option>
              <option value="01">
                Januari
              </option>
              <option value="02">
                Februari
              </option>
              <option value="03">
                Maret
              </option>
              <option value="04">
                April
              </option>
              <option value="05">Mei</option>
              <option value="06">Juni</option>
              <option value="07">Juli</option>
              <option value="08">
                Agustus
              </option>
              <option value="09">
                September
              </option>
              <option value="10">
                Oktober
              </option>
              <option value="11">
                November
              </option>
              <option value="12">
                Desember
              </option>
            </select>
          </div>
          <div class="col">
            <select id="inputState" class="form-control" v-model="startYear">
              <option selected disabled>
                Choose DO
              </option>
              <option v-for="year in years" :key="year.id" :value="year.name">
                {{ year.name }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="p-1">-</div>
      <div class="col">
        <div class="row">
          <div class="col">
            <select id="inputState" class="form-control" v-model="endMonth">
              <option selected disabled>
                Choose NS
              </option>
              <option value="01">
                Januari
              </option>
              <option value="02">
                Februari
              </option>
              <option value="03">
                Maret
              </option>
              <option value="04">
                April
              </option>
              <option value="05">Mei</option>
              <option value="06">Juni</option>
              <option value="07">Juli</option>
              <option value="08">
                Agustus
              </option>
              <option value="09">
                September
              </option>
              <option value="10">
                Oktober
              </option>
              <option value="11">
                November
              </option>
              <option value="12">
                Desember
              </option>
            </select>
          </div>
          <div class="col">
            <select id="inputState" class="form-control" v-model="endYear">
              <option selected disabled>
                Choose DO
              </option>
              <option v-for="year in years" :key="year.id" :value="year.name">
                {{ year.name }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <button
        type="button"
        class="btn btn-sm btn-primary ml-5"
        @click="fetchHotelBergabung"
      >
        <i class="fa fa-eye mr-1" aria-hidden="true"></i>
        View
      </button>
      <button
        type="button"
        class="btn btn-sm btn-secondary ml-5"
        @click="resetHotelBergabung"
      >
        <!--      <i class="fa fa-refresh mr-1" aria-hidden="true"></i>-->
        <i class="fas fa-redo"></i>
        Reset
      </button>
    </div>
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
      years: [],
      startMonth: [],
      endMonth: [],
      startYear: [],
      endYear: [],
      chartOptions1: {
        chart: {
          id: "vuechart-example"
        },
        xaxis: {
          categories: ["1", "2", "1", "1", "1", "1"]
        }
      },
      series1: [
        {
          name: "Jumlah Hotel",
          data: [1, 2, 3, 4, 5, 6]
        }
      ],
      joinhotel: []
    };
  },
  methods: {
    resetHotelBergabung() {
      // SET DEFAULT START MONTH
      if (new Date().getMonth()) {
        this.startMonth = "01";
      }
      // SET DEFAULT START YEAR
      this.startYear = new Date().getFullYear();
      // SET DEFAULT END MONTH
      if (new Date().getMonth() + 1 < 10) {
        this.endMonth = `0${new Date().getMonth() + 1}`;
      } else {
        this.endMonth = `${new Date().getMonth() + 1}`;
      }
      // SET DEFAULT END YEAR
      this.endYear = new Date().getFullYear();

      //SET AT LEAST 5 YEAR A GO UNTIL NOW
      const year = new Date().getFullYear();
      for (let i = 0; i < 5; i++) {
        this.years.push({
          name: (year - i).toString()
        });
      }

      this.fetchHotelBergabung();
    },
    fetchHotelBergabung() {
      this.$api
        .get(
          `dashboard/totalJoinHotel?startMonth=${this.startMonth}&startYear=${this.startYear}&endMonth=${this.endMonth}&endYear=${this.endYear}`
        )
        .then(res => {
          this.joinhotel = res.data.data ? res.data.data : {};

          let categories = [];
          let series = [];

          this.joinhotel.map(a => {
            categories.push(a.month_year);
            series.push(a.total);
          });

          this.chartOptions1 = {
            ...this.chartOptions1,
            xaxis: {
              categories: categories
            }
          };

          this.series1[0] = {
            name: "Jumlah Hotel",
            data: series
          };

          this.show = true;
        })
        .catch(err => {
          console.error(err);
          // alert(err);
        });
    }
  },
  mounted() {
    // SET DEFAULT START MONTH DATA DO MONTH
    if (new Date().getMonth()) {
      this.startMonth = "01";
    }
    // SET DEFAULT START YEAR DATA DO MONTH
    this.startYear = new Date().getFullYear();
    // SET DEFAULT END MONTH DATA DO MONTH
    if (new Date().getMonth() + 1 < 10) {
      this.endMonth = `0${new Date().getMonth() + 1}`;
    } else {
      this.endMonth = `${new Date().getMonth() + 1}`;
    }
    // SET DEFAULT END YEAR DATA DO MONTH
    this.endYear = new Date().getFullYear();

    //SET AT LEAST 5 YEAR A GO UNTIL NOW
    const year = new Date().getFullYear();
    for (let i = 0; i < 5; i++) {
      this.years.push({
        name: (year - i).toString()
      });
    }

    this.fetchHotelBergabung();
  }
};
</script>
