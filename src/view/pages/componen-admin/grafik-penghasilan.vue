<template>
  <div id="chart">
    <div class="row">
      <div class="col">
        <div class="row">
          <div class="col">
            <select id="inputState" class="form-control" v-model="startMonth">
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
          @click="fetchPenghasilan"
        >
          <i class="fa fa-eye mr-1" aria-hidden="true"></i>
          View
        </button>
        <button
          type="button"
          class="btn btn-sm btn-secondary ml-5"
          @click="resetPenghasilan"
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
        type="line"
        height="350"
        width="1115"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
    <!--    <div id="chart">-->
    <!--      <apexchart-->
    <!--        v-if="show"-->
    <!--        type="bar"-->
    <!--        height="400"-->
    <!--        width="1115"-->
    <!--        :options="chartOptions"-->
    <!--        :series="series"-->
    <!--      ></apexchart>-->
    <!--    </div>-->
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
          name: "Penghasilan",
          data: []
        }
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "straight"
        },
        title: {
          text: "Product Trends by Month",
          align: "left"
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep"
          ]
        }
      },
      penghasilan: [],
      hotelId: ""
    };
  },
  methods: {
    // Rp(rp) {
    //   return `Rp. ${rp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
    // },
    resetPenghasilan() {
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

      this.fetchPenghasilan();
    },
    fetchPenghasilan() {
      // console.log(getHotelId());
      this.$api
        .get(
          `dashboard/transaction/income?startMonth=${
            this.startMonth
          }&startYear=${this.startYear}&endMonth=${this.endMonth}&endYear=${
            this.endYear
          }&status=reservation&hotel_id=${getHotelId()}`
        )
        .then(res => {
          this.penghasilan = res.data.data ? res.data.data : {};
          console.log(this.penghasilan);
          let categories = [];
          let series = [];

          this.penghasilan.map(a => {
            categories.push(a.month_year);
            series.push(a.total);
          });

          this.chartOptions = {
            ...this.chartOptions,
            xaxis: {
              categories: categories
            }
          };

          this.series[0] = {
            name: "Penghasilan",
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

    this.fetchPenghasilan();
    this.hotelId = getHotelId();
  }
};
</script>
