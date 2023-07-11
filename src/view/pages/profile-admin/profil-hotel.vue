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
              Album Hotel
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
          <b-tab>
            <label class="mt-3">Kategori Album</label>
            <div class="row">
              <div class="col-9">
                <b-form-select
                  v-model="serviceId"
                  :label-field="layanan.name"
                  value-field="id_service"
                  text-field="name"
                  :options="layanan"
                  @change="getAlbumHotel()"
                ></b-form-select>
              </div>
              <div class="col-3">
                <button
                  type="button"
                  class="btn btn-sm btn-secondary ml-5"
                  @click="resetLayanan"
                >
                  <!--      <i class="fa fa-refresh mr-1" aria-hidden="true"></i>-->
                  <i class="fas fa-redo"></i>
                  Reset
                </button>
              </div>
            </div>

            <form @submit.prevent="submitImage">
              <div class="p-2 pt-4 d-flex align-items-center overflow-auto">
                <section
                  v-for="srcold in imageAlbumOld"
                  :key="srcold.id"
                  style="position: relative;"
                  class="text-right"
                >
                  <i
                    class="fas fa-times-circle"
                    @click="onDelete(srcold.id_hotel_album)"
                  ></i>
                  <img
                    style="height: 260px !important;"
                    class="imageAlbum ml-5"
                    :src="`http://localhost:8080/hotel/album/` + srcold.image"
                  />
                </section>
              </div>
              <hr />
              <H1> Tambah Album Hotel </H1>
              <div class="p-2 pt-4 d-flex align-items-center overflow-auto">
                <img
                  class="mr-2"
                  v-for="src in imageURLs"
                  :key="src.id"
                  style="width: 260px !important;"
                  :src="src"
                  id="uploadalbum"
                  alt=""
                />
              </div>
              <div>
                <b-form-group
                  label="Kategori Album"
                  label-for="name-input"
                  invalid-feedback="Kategori Album is required"
                >
                  <b-form-select
                    v-model="service_id"
                    :label-field="layanan.name"
                    value-field="id_service"
                    text-field="name"
                    :options="layanan"
                  ></b-form-select>
                </b-form-group>
                <input
                  type="file"
                  id="upload-album"
                  @change="handleAlbumImage()"
                  ref="albumhotel"
                  hidden
                />
                <label for="upload-album" class="btn btn-warning text-dark">
                  Add Picture
                </label>
              </div>
              <div class="mt-5 text-right">
                <button class="btn btn-primary profile-button" type="submit">
                  Save Image Hotel
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
  getHotelId
  // saveToken
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
      service_id: "",
      serviceId: "",
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
      // changepas: {
      //   old_password: "",
      //   new_password: "",
      //   confirm_password: ""
      // },
      provinces: [],
      citys: [],
      districts: [],
      subdistricts: [],
      layanan: [],
      imageURLs: [],
      imagesAlbumNew: [],
      imageAlbumOld: []
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
    onDelete(id) {
      Swal.fire({
        icon: "warning",
        title: "Hapus data ?",
        text: "Data yang dihapus tidak dapat dikembalikan",
        width: "28em",
        showCancelButton: true,
        confirmButtonText: "Hapus",
        confirmButtonColor: "#e63b3b",
        focusCancel: true
      }).then(result => {
        if (result.isConfirmed) {
          this.$api
            .delete(`hotelAlbum/delete/${id}`)
            .then(res => {
              if (res.status === 200) {
                this.getAlbumHotel();
                Swal.fire({
                  icon: "warning",
                  title: "Hapus Berhasil",
                  text: "Data berhasil dihapus",
                  width: "28em",
                  showCloseButton: false,
                  showCancelButton: false,
                  timer: 1500,
                  showConfirmButton: false
                });
                // this.toastAlert("menghapus");
              }
            })
            .catch(err => {
              alert(err);
            });
        }
      });
    },
    resetLayanan() {
      this.serviceId = "";
      this.getAlbumHotel();
    },
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
    fetchLayanan() {
      this.$api
        .get(`service/all`)
        .then(res => {
          this.layanan = res.data.data.data ? res.data.data.data : [];
          // console.log(this.layanan);
        })
        .catch(err => {
          console.error(err);
          // alert(err);
        });
    },
    fetchProfilHotel() {
      this.$api
        .get(`hotel/profile`)
        .then(res => {
          this.profilhotel = res.data.data ? res.data.data : {};
          // console.log(this.profilhotel.id_hotel);
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
        this.profilhotel.image = this.$refs.image.files[0];
      }
      // this.profilhotel.image = this.$refs.image.files[0];
    },
    handleAlbumImage() {
      const files = this.$refs.albumhotel.files[0];
      const src = URL.createObjectURL(files);
      this.imagesAlbumNew.push(files);
      this.imageURLs.push(src);
      console.log(this.imagesAlbumNew);
      console.log(this.imageURLs);
    },
    getAlbumHotel() {
      this.hotelId = getHotelId();
      this.$api
        .get(
          `hotelAlbum/all?serviceId=${this.serviceId}&hotel_id=${this.hotelId}`
        )
        .then(res => {
          this.imageAlbumOld = res.data.data.data ? res.data.data.data : {};
          console.log(this.imageAlbumOld);
        })
        .catch(err => {
          console.error(err);
          // alert(err);
        });
    },
    submitImage() {
      const config = {
        headers: { "content-type": "multipart/form-data" }
      };

      let formData = new FormData();
      formData.append("hotel_id", getHotelId());
      formData.append("service_id", this.service_id);
      console.log(this.service_id);
      this.imagesAlbumNew.map(image => {
        formData.append("image", image);
        this.$api
          .post("hotelAlbum/add", formData, config)
          .then(res => {
            if (res.status === 201) {
              this.imagesAlbumNew = [];
              this.imageURLs = [];
              this.getAlbumHotel();
              Swal.fire({
                icon: "success",
                title: "Tambah Berhasil",
                text: "Data berhasil ditambah",
                width: "28em",
                showCloseButton: false,
                showCancelButton: false,
                timer: 1500,
                showConfirmButton: false
              });
              // saveToken(res.data.data.token);
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
      });
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
            Swal.fire({
              icon: "success",
              title: "Edit Berhasil",
              text: "Data berhasil diedit",
              width: "28em",
              showCloseButton: false,
              showCancelButton: false,
              timer: 1500,
              showConfirmButton: false
            });
            // saveToken(res.data.data.token);
            saveImage(res.data.data.image);
            saveName(res.data.data.name);
            saveEmail(res.data.data.email);
            saveHotelId(res.data.data.id_hotel);
            saveHotelprovince(res.data.data.province_id);
            saveHotelCity(res.data.data.city_id);
            saveHotelDistrict(res.data.data.district_id);
            saveHotelSubdistrict(res.data.data.subdistrict_id);
            window.location.reload();
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
    this.fetchProfilHotel();
  },
  mounted() {
    // set the tab from previous
    this.setActivePreviousTab();

    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Profil Hotel" }]);


    // this.fetchProfilHotel();
    this.hotelId = getHotelId();
    this.featchProvince();
    this.featchCity(getHotelprovince());
    this.featchDistrict(getHotelCity());
    this.featchSubdistrict(getHotelDistrict());
    this.getAlbumHotel();
    this.fetchLayanan();

    this.$nextTick(() => {
      const hljs = this.$el.querySelectorAll(".hljs");
      hljs.forEach(hl => {
        hl.classList.remove("hljs");
        hl.classList.add(`language-${hl.classList[1]}`);
      });
    });
  }
};
</script>
<style>
.close {
  position: absolute;
  /*z-index: 1;*/
  right: 0px;
}
/*.imageAlbum {*/
/*  position: relative;*/
/*  width: 100%;*/
/*}*/
</style>
