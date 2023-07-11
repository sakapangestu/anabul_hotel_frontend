<template>
  <div id="chart">
    <div class="col">
      <apexchart
        type="pie"
        width="350"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
    <div class="col">
      <b-table-simple>
        <b-thead>
          <b-tr>
            <b-th>No</b-th>
            <b-th>Nama Kandang</b-th>
            <b-th>Total Isi</b-th>
            <b-th>Total Kosong</b-th>
            <b-th>Antrian</b-th>
          </b-tr>
        </b-thead>
        <b-tbody>
          <b-tr v-for="(total, index) in listTotalKategori" :key="total.id">
            <b-td style="width: 6em">
              {{ ++index }}
            </b-td>
            <b-td>{{ total.cage_category }}-{{ total.cage_type }}</b-td>
            <b-td>{{ total.total_filled_cage }}</b-td>
            <b-td>{{ total.total_unfilled_cage }}</b-td>
            <b-td>{{ total.total_whish_cage_detail }}</b-td>
          </b-tr>
        </b-tbody>
      </b-table-simple>
      <!--      <b-list-group>-->
      <!--        <b-list-group-item-->
      <!--          class="d-flex justify-content-between align-items-center"-->
      <!--        >-->
      <!--          <div>-->
      <!--            <h6>NAMA KANDANG</h6>-->
      <!--          </div>-->
      <!--          <div>-->
      <!--            <h6>TOTAL ISI</h6>-->
      <!--          </div>-->
      <!--          <div>-->
      <!--            <h6>TOTAL KOSONG</h6>-->
      <!--          </div>-->
      <!--          <div>-->
      <!--            <h6>ANTRIAN</h6>-->
      <!--          </div>-->
      <!--        </b-list-group-item>-->
      <!--        <b-list-group-item-->
      <!--          class="d-flex justify-content-between align-items-center"-->
      <!--          v-for="total in listTotalKategori"-->
      <!--          :key="total.id"-->
      <!--        >-->
      <!--          <div>{{ total.cage_category }}-{{ total.cage_type }}</div>-->
      <!--          <b-badge variant="primary" class="text-center" pill>{{-->
      <!--            total.total_filled_cage-->
      <!--          }}</b-badge>-->
      <!--          <b-badge variant="primary" class="text-center" pill>{{-->
      <!--            total.total_unfilled_cage-->
      <!--          }}</b-badge>-->
      <!--          <b-badge variant="primary" class="text-center" pill>{{-->
      <!--            total.total_whish_cage_detail-->
      <!--          }}</b-badge>-->
      <!--        </b-list-group-item>-->
      <!--      </b-list-group>-->
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
      series: [],
      chartOptions: {
        chart: {
          width: 380,
          type: "pie"
        },
        labels: ["Terisi", "Kosong"],
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
      kandang: {
        cage_filled: 0,
        cage_unfilled: 0
        // request_accept: 0,
        // request_process: 0,
        // request_reject: 0
      },
      listTotalKategori: [],
      hotelId: ""
    };
  },
  methods: {
    fetchPermintaan() {
      // console.log(getHotelId());
      this.$api
        .get(`dashboard/cage/total?hotel_id=${getHotelId()}`)
        .then(res => {
          this.kandang = res.data.data ? res.data.data : {};
          this.series.push(this.kandang.cage_filled);
          this.series.push(this.kandang.cage_unfilled);
          // this.series.push(this.kandang.request_reject);
          this.listTotalKategori = this.kandang.TotalCageByDetail;
          console.log(this.listTotalKategori);
        })
        .catch(err => {
          console.error(err);
          // alert(err);
        });
    }
  },
  mounted() {
    this.fetchPermintaan();
    this.hotelId = getHotelId();
  }
};
</script>
