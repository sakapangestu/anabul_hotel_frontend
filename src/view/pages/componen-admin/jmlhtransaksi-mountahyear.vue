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
      <div class="col">
        <button
          type="button"
          class="btn btn-sm btn-primary ml-5"
          @click="fetchTransaksimounthyear"
        >
          <i class="fa fa-eye mr-1" aria-hidden="true"></i>
          View
        </button>
        <button
          type="button"
          class="btn btn-sm btn-secondary ml-5"
          @click="resetTransaksimounthyear"
        >
          <!--      <i class="fa fa-refresh mr-1" aria-hidden="true"></i>-->
          <i class="fas fa-redo"></i>
          Reset
        </button>
      </div>
    </div>

    <div id="chart">
      <apexchart
        v-if="show"
        type="bar"
        height="400"
        width="1115"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
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
      years: [],
      startMonth: [],
      endMonth: [],
      startYear: [],
      endYear: [],
      series: [
        {
          name: "Proses",
          data: []
        },
        {
          name: "Diterima",
          data: []
        },
        {
          name: "Selesai",
          data: []
        },
        {
          name: "Ditolak",
          data: []
        },
        {
          name: "Dibatalkan",
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
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded"
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"]
        },
        xaxis: {
          categories: []
        },
        // yaxis: {
        //   title: {
        //     text: "$ (thousands)"
        //   }
        // },
        fill: {
          opacity: 1
        }
        // tooltip: {
        //   y: {
        //     formatter: function(val) {
        //       return "$ " + val + " thousands";
        //     }
        //   }
        // }
      },
      transaksimonthyear: [],
      hotelId: ""
    };
  },
  methods: {
    resetTransaksimounthyear() {
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

      this.fetchTransaksimounthyear();
    },
    fetchTransaksimounthyear() {
      // console.log(getHotelId());
      this.$api
        .get(
          `dashboard/transactionStatus/monthYear?startMonth=${
            this.startMonth
          }&startYear=${this.startYear}&endMonth=${this.endMonth}&endYear=${
            this.endYear
          }&status=reservation&hotel_id=${getHotelId()}`
        )
        .then(res => {
          this.transaksimonthyear = res.data.data ? res.data.data : {};
          // console.log(res.data.data);
          this.chartOptions = {
            // ... = SPREAD OPERATOR
            ...this.chartOptions,
            xaxis: {
              categories: this.transaksimonthyear.list_date
            }
          };
          // console.log(this.chartOptions.xaxis.categories);
          this.transaksimonthyear.list_total_transaction.map(e => {
            // console.log(e.month_year);

            if (e.status === "Proses") {
              this.series[0].data = e.total_transaction;
            }
            if (e.status === "Diterima") {
              this.series[1].data = e.total_transaction;
            }
            if (e.status === "Selesai") {
              this.series[2].data = e.total_transaction;
            }
            if (e.status === "Ditolak") {
              this.series[3].data = e.total_transaction;
            }
            if (e.status === "Dibatalkan") {
              this.series[4].data = e.total_transaction;
            }
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

    this.fetchTransaksimounthyear();
    this.hotelId = getHotelId();
  }
};
</script>
