<template>
  <div>
    <b-table-simple>
      <b-thead>
        <b-tr>
          <b-th class="text-center">No</b-th>
          <b-th class="text-center">Nama Peliharaan</b-th>
          <b-th class="text-center">Total Peliharaan Masuk</b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr v-for="(total, index) in toppeliharaan" :key="total.id">
          <b-td style="width: 6em" class="text-center">
            {{ ++index }}
          </b-td>
          <b-td class="text-center">{{ total.name }}</b-td>
          <b-td class="text-center">{{ total.total }}</b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
<!--    <b-list-group>-->
<!--      <b-list-group-item-->
<!--        class="d-flex justify-content-between align-items-center"-->
<!--      >-->
<!--        <div>-->
<!--          <h6>NAMA PELIHARAAN</h6>-->
<!--        </div>-->
<!--        <div>-->
<!--          <h6>TOTAL</h6>-->
<!--        </div>-->
<!--      </b-list-group-item>-->
<!--      <b-list-group-item-->
<!--        class="d-flex justify-content-between align-items-center"-->
<!--        v-for="total in toppeliharaan"-->
<!--        :key="total.id"-->
<!--      >-->
<!--        <div>-->
<!--          {{ total.name }}-->
<!--        </div>-->
<!--        <b-badge variant="primary" pill>{{ total.total }}</b-badge>-->
<!--      </b-list-group-item>-->
<!--    </b-list-group>-->
  </div>
  <!--  <div id="chart">-->
  <!--    <apexchart-->
  <!--      v-if="show"-->
  <!--      type="bar"-->
  <!--      height="350"-->
  <!--      width="545"-->
  <!--      :options="chartOptions"-->
  <!--      :series="series"-->
  <!--    ></apexchart>-->
  <!--  </div>-->
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
      // series: [
      //   {
      //     name: "Jumlah Peliharaan",
      //     data: []
      //   }
      // ],
      // chartOptions: {
      //   chart: {
      //     type: "bar",
      //     height: 350
      //   },
      //   plotOptions: {
      //     bar: {
      //       borderRadius: 4,
      //       horizontal: true
      //     }
      //   },
      //   dataLabels: {
      //     enabled: false
      //   },
      //   xaxis: {
      //     categories: []
      //   }
      // },
      toppeliharaan: [],
      hotelId: ""
    };
  },
  methods: {
    fetchTopPeliharaan() {
      this.$api
        .get(`dashboard/topJoinPet?hotel_id=${getHotelId()}`)
        .then(res => {
          this.toppeliharaan = res.data.data ? res.data.data : {};
          // console.log(this.toppeliharaan);
          // this.toppeliharaan.map(e => {
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
    this.fetchTopPeliharaan();
    this.hotelId = getHotelId();
  }
};
</script>
