<template>
  <div id="chart">
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
        },
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
    fetchTransaksiDate() {
     // console.log(this.hotelId);
      this.$api
        .get(
          `dashboard/transactionStatus/date?startDate=2023-05-24&endDate=2023-05-25&status=reservation&hotel_id=${getHotelId()}`
        )
        .then(res => {
          this.transaksidate = res.data.data ? res.data.data : {};
          // console.log(this.transaksidate);
          this.chartOptions.xaxis.categories = this.transaksidate.list_date;
          // console.log(this.chartOptions.xaxis.categories);
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
    this.fetchTransaksiDate();
    this.hotelId = getHotelId();
  }
};
</script>
