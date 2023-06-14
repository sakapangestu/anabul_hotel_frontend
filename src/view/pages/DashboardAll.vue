<template>
  <div>
    <div v-if="role === 'Super Admin'">
<!--      <dashboard></dashboard>-->
    </div>
    <div v-if="role === 'Admin'">
<!--      <dashboard-admin></dashboard-admin>-->
    </div>
  </div>
</template>

<script>
// import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import VueApexCharts from "vue-apexcharts";
// import dashboard from "@/view/pages/Dashboard";
// import dashboardAdmin from "@/view/pages/Dashboard-admin";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import { getRole } from "@/service/jwt.service";

export default {
  name: "dashboard",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    VueApexCharts,
    // dashboard,
    // dashboardAdmin
  },
  data() {
    return {
      role: ""
    };
  },
  mounted() {
    this.role = getRole();
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Dashboard" }]);
  },
  methods: {}
};
</script>
