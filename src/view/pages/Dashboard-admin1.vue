
<template>
  <div>
    <apexchart
      width="500"
      type="bar"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
// import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import VueApexCharts from "vue-apexcharts";

export default {
  name: "dashboard",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    VueApexCharts
  },
  data: function() {
    return {
      chartOptions: {
        chart: {
          id: "vuechart-example"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 35, 50, 49, 60, 70, 91]
        }
      ]
    };
  },
  mounted() {
    // this.$store.dispatch(SET_BREADCRUMB, [{ title: "Dashboard" }]);
  },
  methods: {
    // setActiveTab1(event) {
    //   this.tabIndex = this.setActiveTab(event);
    // },
    // setActiveTab2(event) {
    //   this.tabIndex2 = this.setActiveTab(event);
    // },
    // /**
    //  * Set current active on click
    //  * @param event
    //  */
    // setActiveTab(event) {
    //   // get all tab links
    //   const tab = event.target.closest('[role="tablist"]');
    //   const links = tab.querySelectorAll(".nav-link");
    //   // remove active tab links
    //   for (let i = 0; i < links.length; i++) {
    //     links[i].classList.remove("active");
    //   }
    //
    //   // set current active tab
    //   event.target.classList.add("active");
    //
    //   // set clicked tab index to bootstrap tab
    //   return parseInt(event.target.getAttribute("data-tab"));
    // }
  }
};
</script>

