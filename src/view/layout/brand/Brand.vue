<template>
  <!-- begin:: Aside -->
  <div class="brand flex-column-auto" id="kt_brand" ref="kt_brand">
    <div class="brand-logo">
      <router-link to="/">
        <a class="anabul-brand text-white"> {{namaHotel}} </a>
        <!--        <img :src="siteLogo()" alt="Logo" />-->
      </router-link>
    </div>
    <div class="brand-tools" v-if="allowMinimize">
      <button
        class="brand-toggle btn btn-sm px-0"
        id="kt_aside_toggle"
        ref="kt_aside_toggle"
      >
        <span class="svg-icon svg-icon svg-icon-xl">
          <inline-svg
            class="svg-icon"
            src="media/svg/icons/Navigation/Angle-double-left.svg"
          />
        </span>
      </button>
    </div>
  </div>
  <!-- end:: Aside -->
</template>

<style lang="scss" scoped>
.aside-toggle {
  outline: none;
}
.anabul-brand {
  font-size: 15px;
  width: 10px;
}
</style>

<script>
import { mapGetters } from "vuex";
// import objectPath from "object-path";
import KTLayoutBrand from "@/assets/js/layout/base/brand.js";
import KTLayoutAsideToggle from "@/assets/js/layout/base/aside-toggle.js";
import { getHotelName } from "@/service/jwt.service";

export default {
  name: "KTBrand",
  data() {
    return {
      namaHotel: getHotelName() ? getHotelName() : "Anabul Hotel"
    };
  },
  // components: {
  //   getHotelName,
  // },
  mounted() {
    console.log(getHotelName());
    // Init Brand Panel For Logo
    KTLayoutBrand.init(this.$refs["kt_brand"]);

    // Init Aside Menu Toggle
    KTLayoutAsideToggle.init(this.$refs["kt_aside_toggle"]);
  },
  methods: {
    // fetchHotel() {
    //   // console.log()
    //   this.$api
    //     .get(`hotel/all`)
    //     .then(res => {
    //       this.petHotel = res.data.data.data ? res.data.data.data : [];
    //       // console.log(this.petHotel);
    //     })
    //     .catch(err => {
    //       console.error(err);
    //       // alert(err);
    //     });
    // }
    // siteLogo() {
    //   const menuAsideLeftSkin = this.layoutConfig("brand.self.theme");
    //   // set brand logo
    //   const logoObject = this.layoutConfig("self.logo");
    //
    //   let logo;
    //   if (typeof logoObject === "string") {
    //     logo = logoObject;
    //   }
    //   if (typeof logoObject === "object") {
    //     logo = objectPath.get(logoObject, menuAsideLeftSkin + "");
    //   }
    //   if (typeof logo === "undefined") {
    //     const logos = this.layoutConfig("self.logo");
    //     logo = logos[Object.keys(logos)[0]];
    //   }
    //   return process.env.BASE_URL + logo;
    // }
  },
  computed: {
    ...mapGetters(["layoutConfig"]),

    allowMinimize() {
      return !!this.layoutConfig("aside.self.minimize.toggle");
    }
  }
};
</script>
