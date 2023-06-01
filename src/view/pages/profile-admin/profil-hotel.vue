<template>
  <div>
    <!--begin::Notice-->
    <!--end::Notice-->

    <div class="card card-custom gutter-b">
      <div class="card-header card-header-tabs-line">
        <ul
          class="nav nav-dark nav-bold nav-tabs nav-tabs-line"
          role="tablist"
          ref="builder-tab"
        >
          <li class="nav-item">
            <a
              class="nav-link active"
              data-tab="0"
              data-toggle="tab"
              href="#"
              role="tab"
            >
              Profile
            </a>
          </li>
          <!--          <li class="nav-item">-->
          <!--            <a-->
          <!--              class="nav-link"-->
          <!--              v-on:click="setActiveTab"-->
          <!--              data-tab="1"-->
          <!--              data-toggle="tab"-->
          <!--              href="#"-->
          <!--              role="tab"-->
          <!--            >-->
          <!--              Change Password-->
          <!--            </a>-->
          <!--          </li>-->
        </ul>
      </div>
      <!--begin::Form-->
      <div class="card-body">
        <b-tabs class="hide-tabs" v-model="tabIndex">
          <b-tab active>
            <form @submit.prevent="handleSubmit">
              <div class="container rounded bg-white mt-5 mb-5">
                <div class="row">
                  <div class="col-md-3 border-right">
                    <div
                      class="d-flex flex-column align-items-center text-center p-3 py-5"
                    >
                      <img
                        v-if="profilhotel.image"
                        class="rounded-circle mt-5"
                        width="150px"
                        id="image"
                        :src="
                          `http://localhost:8080/hotel/profile/` +
                            profilhotel.image
                        "
                      />
                      <img
                        v-else
                        class="rounded-circle mt-5"
                        width="150px"
                        src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                      />
                      <span class="font-weight-bold">{{
                        profilhotel.name
                      }}</span>
                      <span class="text-black-50">{{ profilhotel.email }}</span>
                      <div class="mt-2">
                        <input
                          type="file"
                          id="upload"
                          v-on:change="handleImage()"
                          ref="image"
                          hidden
                        />
                        <label
                          for="upload"
                          class="btn btn-secondary profile-button"
                        >
                          Foto Profile
                        </label>
                      </div>
                      <span></span>
                    </div>
                  </div>
                  <div class="col-md-5 border-right">
                    <div class="p-3 py-5">
                      <div
                        class="d-flex justify-content-between align-items-center mb-3"
                      >
                        <h4 class="text-right">Profile Settings</h4>
                      </div>
                      <div class="row mt-2">
                        <div class="col-md-9">
                          <label class="labels">Name</label
                          ><input
                            type="text"
                            class="form-control"
                            placeholder="Masukkan Nama"
                            value=""
                            v-model="profilhotel.name"
                          />
                        </div>
                      </div>
                      <div class="row mt-2">
                        <div class="col-md-9">
                          <label class="labels">Email</label
                          ><input
                            type="email"
                            class="form-control"
                            placeholder="Masukkan Email"
                            value=""
                            v-model="profilhotel.email"
                          />
                        </div>
                        <div class="col-md-9 mt-2">
                          <label class="labels">Jam Buka</label>
                          <br />
                          <date-picker
                            class="w-100"
                            :disabled="isDetail"
                            id="name-input"
                            v-model="profilhotel.open_time"
                            format="HH:mm"
                            value-type="format"
                            type="time"
                          ></date-picker>
                        </div>
                        <div class="col-md-9 mt-2">
                          <label class="labels">Jam Tutup</label>
                          <br />
                          <date-picker
                            class="w-100"
                            :disabled="isDetail"
                            id="name-input"
                            v-model="profilhotel.close_time"
                            format="HH:mm"
                            value-type="format"
                            type="time"
                          ></date-picker>
                        </div>
                        <div class="col-md-9 mt-2">
                          <label class="labels">No Hp</label
                          ><input
                            type="number"
                            class="form-control"
                            placeholder="Masukkan No Hp"
                            v-model="profilhotel.phone"
                            value=""
                          />
                        </div>
                        <div class="col-md-9 mt-2">
                          <label class="labels">Diskripsi</label>
                          <b-form-textarea
                            id="textarea"
                            v-model="profilhotel.description"
                            placeholder="Enter something..."
                            rows="3"
                            max-rows="6"
                            :disabled="isDetail"
                            required
                          ></b-form-textarea>
                        </div>
                        <div class="col-md-9  mt-2">
                          <label class="labels">Alamat</label
                          ><input
                            v-model="profilhotel.address"
                            type="text"
                            class="form-control"
                            placeholder="Masukkan Alamat"
                            value=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="p-3 py-5">
                      <br />
                      <div class="col-md-12 mt-2">
                        <label class="labels">Provinsi</label>
                        <b-form-select
                          v-model="profilhotel.province_id"
                          @change="resetProvince"
                          :label-field="provinces.name"
                          value-field="id_province"
                          text-field="name"
                          :options="provinces"
                        ></b-form-select>
                      </div>
                      <div class="col-md-12  mt-2">
                        <label class="labels">Kota</label>
                        <b-form-select
                          v-model="profilhotel.city_id"
                          @change="featchDistrict"
                          :label-field="citys.city_name"
                          value-field="id_city"
                          text-field="name"
                          :options="citys"
                        ></b-form-select>
                      </div>
                      <br />
                      <div class="col-md-12">
                        <label class="labels">Kecamatan</label
                        ><b-form-select
                          v-model="profilhotel.district_id"
                          @change="featchSubdistrict"
                          :label-field="districts.district_name"
                          value-field="id_district"
                          text-field="name"
                          :options="districts"
                        ></b-form-select>
                      </div>
                      <!--                      {{subdistricts}}-->
                      <div class="col-md-12  mt-2">
                        <label class="labels">Kelurahan</label>
                        <b-form-select
                          v-model="profilhotel.subdistrict_id"
                          :label-field="subdistricts.name"
                          value-field="id_subdistrict"
                          text-field="name"
                          :options="subdistricts"
                        ></b-form-select>
                      </div>
                      <div class="col-md-12  mt-2">
                        <label class="labels">Latitude</label
                        ><input
                          v-model="profilhotel.latitude"
                          type="text"
                          class="form-control"
                          placeholder="Masukkan Alamat"
                          value=""
                        />
                      </div>
                      <div class="col-md-12  mt-2">
                        <label class="labels">Longitude</label
                        ><input
                          v-model="profilhotel.longitude"
                          type="text"
                          class="form-control"
                          placeholder="Masukkan Alamat"
                          value=""
                        />
                      </div>
                      <div class="col-md-12 mt-2">
                        <label class="labels">Link Maps</label
                        ><input
                          v-model="profilhotel.map_link"
                          type="text"
                          class="form-control"
                          placeholder="Masukkan Alamat"
                          value=""
                        />
                      </div>
                      <div class="mt-5 text-right">
                        <button
                          class="btn btn-primary profile-button"
                          type="submit"
                        >
                          Save Profile
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </b-tab>
        </b-tabs>
      </div>
      <!--end::Form-->
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import Swal from "sweetalert2";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import {
  getHotelCity,
  getHotelDistrict,
  getHotelprovince,
  // getHotelSubdistrict,
  saveEmail,
  saveHotelCity,
  saveHotelDistrict,
  saveHotelId,
  saveHotelprovince,
  saveHotelSubdistrict,
  saveImage,
  saveName,
  saveToken
} from "@/service/jwt.service";

export default {
  name: "builder",
  components: {
    DatePicker
  },
  data() {
    return {
      search: "",
      sortBy: "created_at",
      orderBy: "desc",
      page: 1,
      title: "",
      modalVisible: false,
      // perPage: 5,
      // totalData: 0,
      // totalPage: 0,
      tabIndex: 0,
      // nameState: null,
      isEdit: null,
      isDetail: null,
      // submittedNames: [],
      // modalTitle: "",
      hotelId: "",
      provinceId: "",
      cityId: "",
      districtId: "",
      subdistrictId: "",
      // Note 'isActive' is left out and will not appear in the rendered table
      profilhotel: {
        id_hotel: "",
        name: "",
        email: "",
        province_id: 0,
        city_id: 0,
        district_id: 0,
        subdistrict_id: 0,
        address: "",
        phone: "",
        latitude: "",
        longitude: "",
        map_link: "",
        description: "",
        open_time: "",
        close_time: "",
        image: ""
      },
      provinces: [],
      citys: [],
      districts: [],
      subdistricts: []
      // validations: {
      //   addForm: {
      //     name: { required }
      //   }
      // }
    };
  },
  computed: {
    ...mapGetters(["layoutConfig"]),

    config() {
      return this.layoutConfig();
    }
  },
  destroyed() {
    localStorage.removeItem("builderTab");
  },
  methods: {
    resetProvince() {
      this.profilhotel.city_id = "";
      this.profilhotel.subdistrict_id = "";
      this.profilhotel.district_id = "";
      this.featchCity(this.profilhotel.province_id);
    },
    featchProvince() {
      this.resetProvince();
      this.$api.get(`province/all`).then(res => {
        this.provinces = res.data.data.data ? res.data.data.data : [];
        // console.log(this.provinces);
      });
    },
    featchCity(province = this.profilhotel.province_id) {
      this.$api.get(`city/all?provinceId=${province}`).then(res => {
        this.citys = res.data.data.data ? res.data.data.data : [];
      });
    },
    featchDistrict(city = this.profilhotel.city_id) {
      this.$api.get(`district/all?cityId=${city}`).then(res => {
        this.districts = res.data.data.data ? res.data.data.data : [];
      });
    },
    // checkFormValidity() {
    //   const valid = this.$refs.form.checkValidity();
    //   this.nameState = valid;
    //   return valid;
    // },
    featchSubdistrict(district = this.profilhotel.district_id) {
      this.$api.get(`subdistrict/all?districtId=${district}`).then(res => {
        this.subdistricts = res.data.data.data ? res.data.data.data : [];
      });
    },
    fetchProfilHotel() {
      this.$api
        .get(`hotel/profile`)
        .then(res => {
          this.profilhotel = res.data.data ? res.data.data : {};
          // console.log(this.profilhotel.id_hotel);
          // this.page = res.data.data.paginate.page;
          // this.perPage = res.data.data.paginate.perPage;
          // this.totalData = res.data.data.paginate.totalData;
          // this.totalPage = res.data.data.paginate.totalPage;
        })
        .catch(err => {
          console.error(err);
          // alert(err);
        });
    },
    handleImage() {
      var output = document.getElementById("image");
      const file = this.$refs.image.files[0];
      console.log(file);
      if (file) {
        output.src = URL.createObjectURL(file);
      } else {
        this.profilhotel.image = this.$refs.image.files[0];
      }
      // this.profilhotel.image = this.$refs.image.files[0];
    },
    handleSubmit() {
      this.profilhotel.phone = this.profilhotel.phone.toString();
      this.profilhotel.province_id = parseInt(this.profilhotel.province_id);
      this.profilhotel.city_id = parseInt(this.profilhotel.city_id);
      this.profilhotel.district_id = parseInt(this.profilhotel.district_id);
      this.profilhotel.subdistrict_id = parseInt(
        this.profilhotel.subdistrict_id
      );

      // this.profilhotel.nik = parseInt(this.profilhotel.nik);
      const config = {
        headers: { "content-type": "multipart/form-data" }
      };

      let formData = new FormData();

      formData.append("id_hotel", this.profilhotel.id_hotel);
      formData.append("name", this.profilhotel.name);
      formData.append("email", this.profilhotel.email);
      formData.append("open_time", this.profilhotel.open_time);
      formData.append("close_time", this.profilhotel.close_time);
      formData.append("phone", this.profilhotel.phone);
      formData.append("address", this.profilhotel.address);
      if (this.$refs.image.files[0] !== undefined)
        formData.append("image", this.$refs.image.files[0]);
      formData.append("latitude", this.profilhotel.latitude);
      formData.append("longitude", this.profilhotel.longitude);
      formData.append("map_link", this.profilhotel.map_link);
      formData.append("description", this.profilhotel.description);
      formData.append("province_id", this.profilhotel.province_id);
      formData.append("city_id", this.profilhotel.city_id);
      formData.append("district_id", this.profilhotel.district_id);
      formData.append("subdistrict_id", this.profilhotel.subdistrict_id);

      this.$api
        .put("hotel/profile", formData, config)
        .then(res => {
          if (res.status === 200) {
            this.fetchProfilHotel();
            saveToken(res.data.data.token);
            saveImage(res.data.data.image);
            saveName(res.data.data.name);
            saveEmail(res.data.data.email);
            saveHotelId(res.data.data.id_hotel);
            saveHotelprovince(res.data.data.province_id);
            saveHotelCity(res.data.data.city_id);
            saveHotelDistrict(res.data.data.district_id);
            saveHotelSubdistrict(res.data.data.subdistrict_id);
          }
        })
        .catch(err => {
          if (err.message === "Request failed with status code 409") {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Kode kategori sudah ada!",
              showConfirmButton: false,
              width: "25em",
              timer: 2500
            });
          }
        });
    },
    /**
     * Reset config
     */
    reset(event) {
      event.preventDefault();
      // remove existing saved config
      localStorage.removeItem("config");
      window.location.reload();
    },

    /**
     * Set previous tab active
     */
    setActivePreviousTab() {
      this.tabIndex = parseInt(localStorage.getItem("builderTab")) || 0;
      const links = this.$refs["builder-tab"].querySelectorAll(".nav-link");
      // remove active tab links
      for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
      }
      this.$refs["builder-tab"]
        .querySelector(`[data-tab="${this.tabIndex}"]`)
        .classList.add("active");
    },
    /**
     * Set current active on click
     * @param event
     */
    // setActiveTab(event) {
    //   const tab = event.target.closest('[role="tablist"]');
    //   const links = tab.querySelectorAll(".nav-link");
    //   // remove active tab links
    //   for (let i = 0; i < links.length; i++) {
    //     links[i].classList.remove("active");
    //   }
    //
    //   // set clicked tab index to bootstrap tab
    //   this.tabIndex = parseInt(event.target.getAttribute("data-tab"));
    //
    //   // set current active tab
    //   event.target.classList.add("active");
    //
    //   // keep active tab
    //   localStorage.setItem("builderTab", this.tabIndex);
    // },

    /**
     * Submit form
     * @param event
     */
    submit(event) {
      event.preventDefault();
      // save new config to localStorage
      localStorage.setItem("config", JSON.stringify(this.config));
      window.location.reload();
    }
  },
  created() {
    this.fetchProfilHotel();
  },
  mounted() {
    // this.profilhotel.province_id = getHotelprovince();
    // // console.log(this.profilhotel.provinceId);
    // this.profilhotel.city_id = getHotelCity();
    // this.profilhotel.district_id = getHotelDistrict();
    // this.profilhotel.subdistrict_id = getHotelSubdistrict();

    // set the tab from previous
    this.setActivePreviousTab();

    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Profil Hotel" }]);

    this.$nextTick(() => {
      const hljs = this.$el.querySelectorAll(".hljs");
      hljs.forEach(hl => {
        hl.classList.remove("hljs");
        hl.classList.add(`language-${hl.classList[1]}`);
      });
    });
    // this.fetchProfilHotel();
    this.featchProvince();
    this.featchCity(getHotelprovince());
    this.featchDistrict(getHotelCity());
    this.featchSubdistrict(getHotelDistrict());
  }
};
</script>
