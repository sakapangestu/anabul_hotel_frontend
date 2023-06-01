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
              v-on:click="setActiveTab"
              data-tab="0"
              data-toggle="tab"
              href="#"
              role="tab"
            >
              Profile
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              v-on:click="setActiveTab"
              data-tab="1"
              data-toggle="tab"
              href="#"
              role="tab"
            >
              Change Password
            </a>
          </li>
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
                        v-if="profiladmin.image"
                        class="rounded-circle mt-5"
                        width="150px"
                        id="image"
                        :src="
                          `http://localhost:8080/user/profile/` +
                            profiladmin.image
                        "
                      />
                      <img
                        v-else
                        class="rounded-circle mt-5"
                        width="150px"
                        src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                      />
                      <span class="font-weight-bold">{{
                        profiladmin.name
                      }}</span>
                      <span class="text-black-50">{{ profiladmin.email }}</span>
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
                            v-model="profiladmin.name"
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
                            v-model="profiladmin.email"
                          />
                        </div>
                        <div class="col-md-9 mt-2">
                          <label class="labels">Tanggal Lahir</label>
                          <br />
                          <!--                          <input-->
                          <!--                            type="text"-->
                          <!--                            class="form-control"-->
                          <!--                            placeholder="enter address line 1"-->
                          <!--                            value=""-->
                          <!--                          />-->
                          <date-picker
                            class="w-100"
                            v-model="profiladmin.birth_date"
                            value-type="format"
                            placeholder="Tanggal Lahir Admin"
                          ></date-picker>
                        </div>
                        <div class="col-md-9 mt-2">
                          <label class="labels">No Hp</label
                          ><input
                            type="number"
                            class="form-control"
                            placeholder="Masukkan No Hp"
                            v-model="profiladmin.phone"
                            value=""
                          />
                        </div>
                        <div class="col-md-9 mt-2">
                          <label class="labels">Provinsi</label>
                          <b-form-select
                            v-model="profiladmin.province_id"
                            @change="resetProvince"
                            :label-field="provinces.name"
                            value-field="id_province"
                            text-field="name"
                            :options="provinces"
                          ></b-form-select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--                  {{profiladmin}}-->
                  <div class="col-md-4">
                    <div class="p-3 py-5">
                      <br />
                      <div class="col-md-12">
                        <label class="labels">Kota</label>
                        <b-form-select
                          v-model="profiladmin.city_id"
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
                          v-model="profiladmin.district_id"
                          @change="featchSubdistrict"
                          :label-field="districts.district_name"
                          value-field="id_district"
                          text-field="name"
                          :options="districts"
                        ></b-form-select>
                      </div>
                      <!--                      {{subdistricts}}-->
                      <div class="col-md-12 mt-2">
                        <label class="labels">Kelurahan</label>
                        <b-form-select
                          v-model="profiladmin.subdistrict_id"
                          :label-field="subdistricts.name"
                          value-field="id_subdistrict"
                          text-field="name"
                          :options="subdistricts"
                        ></b-form-select>
                      </div>
                      <div class="col-md-12 mt-2">
                        <label class="labels">Alamat</label
                        ><input
                          v-model="profiladmin.address"
                          type="text"
                          class="form-control"
                          placeholder="Masukkan Alamat"
                          value=""
                        />
                      </div>
                      <div class="col-md-12 mt-2">
                        <b-form-group
                          label="Gender"
                          v-slot="{ ariaDescribedby }"
                        >
                          <b-form-radio-group
                            v-model="profiladmin.gender"
                            :options="options"
                            :disabled="isDetail"
                            :aria-describedby="ariaDescribedby"
                            name="radios-stacked"
                            stacked
                          ></b-form-radio-group>
                        </b-form-group>
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

          <b-tab>
            <form @submit.prevent="changePassword">
              <div class="row mt-2">
                <div class="col-md-9">
                  <label class="labels">Password Lama</label
                  ><input
                    type="password"
                    class="form-control"
                    placeholder="Masukkan Password Lama"
                    value=""
                    v-model="changepas.old_password"
                  />
                </div>
              </div>
              <div class="row mt-2">
                <div class="col-md-9">
                  <label class="labels">Password Baru</label
                  ><input
                    type="password"
                    class="form-control"
                    placeholder="Masukkan Password Baru"
                    value=""
                    v-model="changepas.new_password"
                  />
                </div>
              </div>
              <div class="row mt-2">
                <div class="col-md-9">
                  <label class="labels">Konfirmasi Password</label
                  ><input
                    type="password"
                    class="form-control"
                    placeholder="Masukkan Konfirmasi Password"
                    value=""
                    v-model="changepas.confirm_password"
                  />
                </div>
              </div>
              <div class="mt-5 text-right">
                <button class="btn btn-primary profile-button" type="submit">
                  Save Password
                </button>
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
  saveRole,
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
      profiladmin: {
        id: "",
        name: "",
        hotel_id: "",
        email: "",
        birth_date: "",
        gender: "",
        province_id: 0,
        city_id: 0,
        district_id: 0,
        subdistrict_id: 0,
        address: "",
        phone: "",
        image: ""
      },
      changepas: {
        old_password: "",
        new_password: "",
        confirm_password: ""
      },
      provinces: [],
      citys: [],
      districts: [],
      subdistricts: [],
      options: [
        { text: "Laki - laki ", value: "Laki-laki" },
        { text: "Perempuan", value: "Perempuan" }
      ]
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
      this.profiladmin.city_id = "";
      this.profiladmin.subdistrict_id = "";
      this.profiladmin.district_id = "";
      this.featchCity(this.profiladmin.province_id);
    },
    featchProvince() {
      this.resetProvince();
      this.$api.get(`province/all`).then(res => {
        this.provinces = res.data.data.data ? res.data.data.data : [];
        // console.log(this.provinces);
      });
    },
    featchCity(province = this.profiladmin.province_id) {
      this.$api.get(`city/all?provinceId=${province}`).then(res => {
        this.citys = res.data.data.data ? res.data.data.data : [];
        console.log(this.citys);
      });
    },
    featchDistrict(city = this.profiladmin.city_id) {
      this.$api.get(`district/all?cityId=${city}`).then(res => {
        this.districts = res.data.data.data ? res.data.data.data : [];
      });
    },
    // checkFormValidity() {
    //   const valid = this.$refs.form.checkValidity();
    //   this.nameState = valid;
    //   return valid;
    // },
    featchSubdistrict(district = this.profiladmin.district_id) {
      //  console.log("this.profiladmin.district_id");
      // console.log(this.profiladmin);
      this.$api.get(`subdistrict/all?districtId=${district}`).then(res => {
        this.subdistricts = res.data.data.data ? res.data.data.data : [];
        // console.log(this.subdistricts);
      });
    },
    fetchProfilAdmin() {
      this.$api
        .get(`user/profile`)
        .then(res => {
          // console.log(res)
          this.profiladmin = res.data.data ? res.data.data : {};
          // this.profiladmin.phone = parseInt(this.profiladmin.phone)
          console.log(this.profiladmin);
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
    changePassword() {
      this.$api
        .put(`user/changepass`, this.changepas)
        .then(res => {
          this.changepas = res.data.data ? res.data.data : {};
        })
        .catch(err => {
          console.error(err);
          // alert(err);
        });
    },
    handleImage() {
      var output = document.getElementById("image");
      const file = this.$refs.image.files[0];
      // console.log(file);
      if (file) {
        output.src = URL.createObjectURL(file);
      } else {
        this.profiladmin.image = this.$refs.image.files[0];
      }
      // this.profiladmin.image = this.$refs.image.files[0];
    },
    handleSubmit() {
      this.profiladmin.phone = this.profiladmin.phone.toString();
      this.profiladmin.province_id = parseInt(this.profiladmin.province_id);
      this.profiladmin.city_id = parseInt(this.profiladmin.city_id);
      this.profiladmin.district_id = parseInt(this.profiladmin.district_id);
      this.profiladmin.subdistrict_id = parseInt(
        this.profiladmin.subdistrict_id
      );

      // this.profiladmin.nik = parseInt(this.profiladmin.nik);
      const config = {
        headers: { "content-type": "multipart/form-data" }
      };

      let formData = new FormData();

      formData.append("id", this.profiladmin.id);
      formData.append("name", this.profiladmin.name);
      formData.append("email", this.profiladmin.email);
      formData.append("birth_date", this.profiladmin.birth_date);
      formData.append("gender", this.profiladmin.gender);
      formData.append("address", this.profiladmin.address);
      if (this.$refs.image.files[0] !== undefined)
        formData.append("image", this.$refs.image.files[0]);
      formData.append("role", this.profiladmin.role);
      formData.append("hotel_id", this.profiladmin.hotel_id);
      formData.append("phone", this.profiladmin.phone);
      formData.append("province_id", this.profiladmin.province_id);
      formData.append("city_id", this.profiladmin.city_id);
      formData.append("district_id", this.profiladmin.district_id);
      formData.append("subdistrict_id", this.profiladmin.subdistrict_id);
      // Exit when the form isn't valid
      // if (!this.checkFormValidity()) {
      //   return;
      // }
      // evt.preventDefault();
      // if (!this.$v.addForm.$error) {
      //
      // }

      this.$api
        .put("user/profile", formData, config)
        .then(res => {
          if (res.status === 200) {
            this.fetchProfilAdmin();
            saveToken(res.data.data.token);
            saveImage(res.data.data.image);
            saveName(res.data.data.name);
            saveRole(res.data.data.role);
            saveEmail(res.data.data.email);
            saveHotelId(res.data.data.hotel_id);
            saveHotelprovince(res.data.data.province_id);
            saveHotelCity(res.data.data.city_id);
            saveHotelDistrict(res.data.data.district_id);
            saveHotelSubdistrict(res.data.data.subdistrict_id);
            // this.$bvModal.hide("modal-category");
            // this.toastAlert("update");
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
    setActiveTab(event) {
      const tab = event.target.closest('[role="tablist"]');
      const links = tab.querySelectorAll(".nav-link");
      // remove active tab links
      for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
      }

      // set clicked tab index to bootstrap tab
      this.tabIndex = parseInt(event.target.getAttribute("data-tab"));

      // set current active tab
      event.target.classList.add("active");

      // keep active tab
      localStorage.setItem("builderTab", this.tabIndex);
    },

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
    this.fetchProfilAdmin();
  },
  mounted() {
    // this.profiladmin.province_id = getHotelprovince();
    // this.profiladmin.city_id = getHotelCity();
    // this.profiladmin.district_id = getHotelDistrict();
    // this.profiladmin.subdistrict_id = getHotelSubdistrict();

    // set the tab from previous
    this.setActivePreviousTab();

    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Profil Admin" }]);

    this.$nextTick(() => {
      const hljs = this.$el.querySelectorAll(".hljs");
      hljs.forEach(hl => {
        hl.classList.remove("hljs");
        hl.classList.add(`language-${hl.classList[1]}`);
      });
    });
    // await this.fetchProfilAdmin();
    this.featchProvince();
    this.featchCity(getHotelprovince());
    this.featchDistrict(getHotelCity());
    this.featchSubdistrict(getHotelDistrict());
  }
};
</script>
