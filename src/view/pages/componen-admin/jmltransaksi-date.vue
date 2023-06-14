<template>
  <div id="chart">
    <date-picker v-model="data_date" @submit="fetchTransaksiDate" range>
    </date-picker>
    <button
      type="button"
      class="btn btn-sm btn-primary ml-5"
      @click="fetchTransaksiDate"
    >
      <i class="fa fa-eye mr-1" aria-hidden="true"></i>
      View
    </button>
    <button
      type="button"
      class="btn btn-sm btn-secondary ml-5"
      @click="resertTransksiDate"
    >
      <!--      <i class="fa fa-refresh mr-1" aria-hidden="true"></i>-->
      <i class="fas fa-redo"></i>
      Reset
    </button>
    <div id="chart">
      <apexchart
        ref="jmltxdate"
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
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import VueApexCharts from "vue-apexcharts";
import { getHotelId } from "@/service/jwt.service";
import moment from "moment";
export default {
  name: "dashboard",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    VueApexCharts,
    DatePicker
  },

  data() {
    return {
      data_date: [],
      show: false,
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
        //       return "j" + val + " thousands";
        //     }
        //   }
        // }
      },
      transaksidate: {},
      hotelId: ""
    };
  },
  methods: {
    resertTransksiDate() {
      //SET DEFAULT
      this.data_date = [];
      this.data_date.push(new Date(Date.now() - 6 * 24 * 60 * 60 * 1000));
      this.data_date.push(new Date());
      // console.log(this.data_date);
      this.fetchTransaksiDate();
    },
    fetchTransaksiDate() {
      const startDate = moment(String(this.data_date[0]))
        .locale("id")
        .format("YYYY-MM-DD");
      const endDate = moment(String(this.data_date[1]))
        .locale("id")
        .format("YYYY-MM-DD");
      // console.log(startDate);
      // console.log(endDate);
      this.$api
        .get(
          `dashboard/transactionStatus/date?startDate=${startDate}&endDate=${endDate}&status=reservation&hotel_id=${getHotelId()}`
        )
        .then(res => {
          this.transaksidate = res.data.data ? res.data.data : {};
          // this.chartOptions.xaxis.categories = this.transaksidate.list_date;
          // this.$refs.jmltxdate.refresh();
          this.chartOptions = {
            // ... = SPREAD OPERATOR
            ...this.chartOptions,
            xaxis: {
              categories: this.transaksidate.list_date
            }
          };
          // this.$refs.jmltxdate.updateOptions({
          //   xaxis: {
          //     categories: this.transaksidate.list_date
          //   }
          // });
          this.transaksidate.list_total_transaction.map(e => {
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
    this.data_date.push(new Date(Date.now() - 6 * 24 * 60 * 60 * 1000));
    this.data_date.push(new Date());

    this.fetchTransaksiDate();
    this.hotelId = getHotelId();
  }
};
</script>
