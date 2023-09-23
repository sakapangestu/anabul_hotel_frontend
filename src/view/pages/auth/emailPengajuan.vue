<template>
  <div
    class="container-fluid bg-white"
    style="height: 100vh; padding-top: 50px;"
    v-if="!this.isAuthenticated"
  >
    <div class="row my-auto">
      <div class="col-lg-6 mx-auto">
        <div class="tab-content forgot-1 text-center">
          <img src="@/assets/icon/button/app_logo.png" style="width: 350px" />
          <form
            class="text-center text-mantra-dark"
            @submit.prevent="submitReset"
          >
            <h3 class="font-weight-bold font-size-3 ml-2">
              Pengajuan Kembali?
            </h3>

            <p class="text-muted font-weight-semi-bold mr-5 ml-5">
              Jangan khawatir, kami akan mengirimkan petunjuk pengajuan ulang
              <br />
              kepada Anda.
            </p>

            <div class="mt-2 col-sm-8 mx-auto">
              <div class="form-group">
                <label for="forgot-email" class="float-left">Email Hotel</label>
                <input
                  type="email"
                  id="forgot-email"
                  aria-describedby="emailHelp"
                  class="form-control form-control-solid form-control-lg"
                  placeholder="Masukkan alamat email anda"
                  v-model="formData.email"
                  required
                />
                <span class="form-text text-muted float-left mb-5"
                  >Masukkan Email Hotel</span
                >
                <!--                <label for="forgot-email" class="auth-forgot-2 float-left "-->
                <!--                  >Email</label-->
                <!--                >-->
                <!--                <input-->
                <!--                  type="email"-->
                <!--                  class="form-control auth-border-clr pt-4 pb-4 pl-3"-->
                <!--                  id="forgot-email"-->
                <!--                  aria-describedby="emailHelp"-->
                <!--                  placeholder="Masukkan alamat email anda"-->
                <!--                  v-model="form.email"-->
                <!--                  required-->
                <!--                />-->
              </div>
            </div>

            <div class="col-sm-8 mx-auto">
              <button
                type="submit"
                ref="loading_submit1"
                class="btn-orange w-100 reset-btn"
              >
                <!--                <div class="spinner d-inline">-->
                <!--                  <span-->
                <!--                    v-if="loading"-->
                <!--                    class="spinner-border spinner-border-sm"-->
                <!--                    role="status"-->
                <!--                    aria-hidden="true"-->
                <!--                  ></span>-->
                <!--                </div>-->
                <span class="ml-2 d-inline">
                  Kirim
                </span>
              </button>
            </div>

            <div class="col-sm-8 mt-3 mx-auto">
              <router-link :to="{ name: 'login' }" class="auth-forgot-2">
                <i class="ri-arrow-left-line ri-mid mr-2 ri-lg"></i>
                Kembali ke Login
              </router-link>
            </div>
          </form>
        </div>
        <div class="forgot-2" style="display: none">
          <div class="card card-custom">
            <div
              class="position-absolute top-0 right-0 text-right mt-5 mb-15 mb-lg-0 flex-column-auto justify-content-center py-5 px-10"
            >
              <!--              <span class="font-weight-bold font-size-3 text-dark-60">-->
              <!--                Tidak jadi melakukan pengajuan ulang?-->
              <!--              </span>-->
              <!--              <router-link-->
              <!--                class="font-weight-bold font-size-3 ml-2"-->
              <!--                :to="{ name: 'login' }"-->
              <!--              >-->
              <!--                Kembali ke halaman Login!-->
              <!--              </router-link>-->
            </div>
            <div class="card-body p-0">
              <!--begin: Wizard-->
              <div
                class="wizard wizard-1"
                id="kt_wizard_v1"
                data-wizard-state="step-first"
                data-wizard-clickable="true"
              >
                <!--begin: Wizard Nav-->
                <div class="wizard-nav border-bottom">
                  <div class="wizard-steps p-8 p-lg-10">
                    <div
                      class="wizard-step"
                      data-wizard-type="step"
                      data-wizard-state="current"
                    >
                      <div class="wizard-label">
                        <i class="wizard-icon flaticon-map-location"></i>
                        <h3 class="wizard-title">1. Profil Hotel</h3>
                      </div>
                      <i class="wizard-arrow flaticon2-next"></i>
                    </div>
                    <div class="wizard-step" data-wizard-type="step">
                      <div class="wizard-label">
                        <i class="wizard-icon flaticon-user"></i>
                        <h3 class="wizard-title">2. Profil Admin</h3>
                      </div>
                      <i class="wizard-arrow flaticon2-next"></i>
                    </div>
                    <div class="wizard-step" data-wizard-type="step">
                      <div class="wizard-label">
                        <i class="wizard-icon flaticon-list"></i>
                        <h3 class="wizard-title">3. Unggah Dokumen</h3>
                      </div>
                      <!--              <i class="wizard-arrow flaticon2-next"></i>-->
                    </div>
                    <!--            <div class="wizard-step" data-wizard-type="step">-->
                    <!--              <div class="wizard-label">-->
                    <!--                <i class="wizard-icon flaticon-truck"></i>-->
                    <!--                <h3 class="wizard-title">4. Delivery Address</h3>-->
                    <!--              </div>-->
                    <!--              <i class="wizard-arrow flaticon2-next"></i>-->
                    <!--            </div>-->
                    <!--            <div class="wizard-step" data-wizard-type="step">-->
                    <!--              <div class="wizard-label">-->
                    <!--                <i class="wizard-icon flaticon-globe"></i>-->
                    <!--                <h3 class="wizard-title">5. Review and Submit</h3>-->
                    <!--              </div>-->
                    <!--              <i class="wizard-arrow last flaticon2-next"></i>-->
                    <!--            </div>-->
                  </div>
                </div>
                <!--end: Wizard Nav-->

                <!--begin: Wizard Body-->
                <div
                  class="row justify-content-center my-10 px-8 my-lg-15 px-lg-10"
                >
                  <div class="col">
                    <!--begin: Wizard Form-->
                    <form class="form" id="kt_form">
                      <!--begin: Wizard Step 1-->
                      <div
                        class="pb-5"
                        data-wizard-type="step-content"
                        data-wizard-state="current"
                      >
                        <h3 class="mb-10 font-weight-bold text-dark">
                          Masukkan Profil Hotel Anda!
                        </h3>
                        <b-badge variant="danger"
                          >Informasi : Wajib mengisi semua form!!</b-badge
                        >
                        <div class="form-group">
                          <label>Nama Hotel</label>
                          <input
                            type="text"
                            class="form-control form-control-solid form-control-lg"
                            placeholder="Nama Hotel"
                            v-model="form.hotel_name"
                          />
                          <span class="form-text text-muted"
                            >Masukkan Nama Hotel Nama</span
                          >
                        </div>
                        <div class="form-group">
                          <label>Email Hotel</label>
                          <input
                            type="email"
                            class="form-control form-control-solid form-control-lg"
                            placeholder="Email Hotel"
                            v-model="form.hotel_email"
                          />
                          <span class="form-text text-muted"
                            >Masukkan Email Hotel</span
                          >
                        </div>
                        <div class="form-group">
                          <label>No Hp Hotel</label>
                          <input
                            type="number"
                            class="form-control form-control-solid form-control-lg"
                            placeholder="Email Hotel"
                            v-model="form.hotel_phone"
                          />
                          <span class="form-text text-muted"
                            >Masukkan No Hp Hotel Hotel</span
                          >
                        </div>
                        <div class="form-group">
                          <label>NPWP</label>
                          <input
                            type="number"
                            class="form-control form-control-solid form-control-lg"
                            placeholder="NPWP"
                            v-model="form.npwp"
                          />
                          <span class="form-text text-muted"
                            >Masukkan NPWP</span
                          >
                        </div>
                        <div class="row">
                          <div class="col-xl-6">
                            <div class="form-group">
                              <label>Provinsi Hotel</label>
                              <b-form-select
                                class="form-control form-control-solid form-control-lg"
                                v-model="form.hotel_province"
                                @change="resetProvince"
                                :label-field="provinces.name"
                                value-field="id_province"
                                text-field="name"
                                :options="provinces"
                              ></b-form-select>
                              <span class="form-text text-muted"
                                >Masukkan Alamat Provinsi Hotel</span
                              >
                            </div>
                          </div>
                          <div class="col-xl-6">
                            <div class="form-group">
                              <label>Kota Hotel</label>
                              <b-form-select
                                class="form-control form-control-solid form-control-lg"
                                v-model="form.hotel_city"
                                @change="fetchDistrict"
                                :label-field="cities.name"
                                value-field="id_city"
                                text-field="name"
                                :options="cities"
                              ></b-form-select>
                              <span class="form-text text-muted"
                                >Masukkan Alamat Kota Hotel</span
                              >
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-xl-6">
                            <div class="form-group">
                              <label>Kecamatan Hotel</label>
                              <b-form-select
                                class="form-control form-control-solid form-control-lg"
                                v-model="form.hotel_district"
                                @change="fetchSubdistrict"
                                :label-field="districts.name"
                                value-field="id_district"
                                text-field="name"
                                :options="districts"
                              ></b-form-select>
                              <span class="form-text text-muted"
                                >Masukkan Alamat Kecamatan Hotel</span
                              >
                            </div>
                          </div>
                          <div class="col-xl-6">
                            <div class="form-group">
                              <label>Kelurahan Hotel</label>
                              <b-form-select
                                class="form-control form-control-solid form-control-lg"
                                v-model="form.hotel_subdistrict"
                                :label-field="subdistricts.name"
                                value-field="id_subdistrict"
                                text-field="name"
                                :options="subdistricts"
                              ></b-form-select>
                              <span class="form-text text-muted"
                                >Masukkan Alamat Kelurahan Hotel</span
                              >
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <label>Alamat Hotel</label>
                          <b-form-textarea
                            class="form-control form-control-solid form-control-lg"
                            v-model="form.hotel_address"
                            placeholder="Masukkan Alamat Hotel..."
                            rows="3"
                            max-rows="6"
                            required
                          ></b-form-textarea>
                          <span class="form-text text-muted"
                            >Masukkan Alamat Hotel</span
                          >
                        </div>
                        <div class="form-group">
                          <label>Diskripsi Hotel</label>
                          <b-form-textarea
                            class="form-control form-control-solid form-control-lg"
                            v-model="form.hotel_description"
                            placeholder="Masukkan Diskripsi Hotel..."
                            rows="3"
                            max-rows="6"
                            required
                          ></b-form-textarea>
                          <span class="form-text text-muted"
                            >Masukkan Diskripsi Hotel</span
                          >
                        </div>
                        <div class="form-group">
                          <label>Kategori dan Ukuran Kandang</label>
                          <b-form-textarea
                            class="form-control form-control-solid form-control-lg"
                            v-model="form.hotel_cage"
                            placeholder="Masukkan Kategori dan Ukuran Kandang..."
                            rows="3"
                            max-rows="6"
                            required
                          ></b-form-textarea>
                          <span class="form-text text-muted"
                            >Masukkan Kategori dan Ukuran Kandang</span
                          >
                        </div>
                        <div class="form-group">
                          <label>Layanan Hotel</label>
                          <b-form-textarea
                            class="form-control form-control-solid form-control-lg"
                            v-model="form.hotel_service"
                            placeholder="Masukkan Layanan Hotel..."
                            rows="3"
                            max-rows="6"
                            required
                          ></b-form-textarea>
                          <span class="form-text text-muted"
                            >Masukkan Layanan Hotel</span
                          >
                        </div>
                      </div>

                      <!--end: Wizard Step 1-->

                      <!--begin: Wizard Step 2-->
                      <div class="pb-5" data-wizard-type="step-content">
                        <h4 class="mb-10 font-weight-bold text-dark">
                          Masukkan Profil Admin Anda!
                        </h4>
                        <div class="form-group">
                          <label>Nama Admin</label>
                          <input
                            type="text"
                            class="form-control form-control-solid form-control-lg"
                            placeholder="Nama Admin"
                            v-model="form.admin_name"
                          />
                          <span class="form-text text-muted"
                            >Masukkan Nama Admin</span
                          >
                        </div>
                        <div class="form-group">
                          <label>No Hp Admin</label>
                          <input
                            type="number"
                            class="form-control form-control-solid form-control-lg"
                            placeholder="Masukkan No Hp Admin"
                            v-model="form.admin_phone"
                          />
                          <span class="form-text text-muted"
                            >Masukkan No Hp Admin</span
                          >
                        </div>
                        <div class="form-group">
                          <label>NIK Admin</label>
                          <input
                            type="number"
                            class="form-control form-control-solid form-control-lg"
                            placeholder="Masukkan NIK"
                            v-model="form.nik"
                          />
                          <span class="form-text text-muted"
                            >Masukkan NIK Admin</span
                          >
                        </div>
                      </div>
                      <!--end: Wizard Step 2-->

                      <!--begin: Wizard Step 3-->
                      <div class="pb-5" data-wizard-type="step-content">
                        <h4 class="mb-10 font-weight-bold text-dark">
                          Masukkan Dokumen Anda!
                        </h4>
                        <b-form-group
                          label="SIUP/AKTA/NIB"
                          type="file"
                          label-for="name-input"
                          invalid-feedback="SIUP/AKTA/NIB Harus di Isi"
                        >
                          <b-link
                            target="_blank"
                            :href="
                              `http://localhost:8080/hotel/document/` +
                                form.document
                            "
                          >
                            {{
                              form.documentName
                                ? form.documentName
                                : form.document
                            }}
                          </b-link>
                          <br />
                          <input
                            type="file"
                            id="name-input"
                            ref="docs"
                            v-on:change="handleDocument()"
                          />
                        </b-form-group>
                        <b-form-group
                          label="KTP "
                          label-for="name-input"
                          invalid-feedback="KTP Harus di Isi"
                        >
                          <b-link
                            target="_blank"
                            :href="`http://localhost:8080/user/ktp/` + form.ktp"
                          >
                            <div class="table-img1">
                              <img
                                id="ktpimage"
                                :src="
                                  `http://localhost:8080/user/ktp/` + form.ktp
                                "
                                alt="KTP"
                              />
                            </div>
                          </b-link>
                          <input
                            class="form-control form-control-solid form-control-lg"
                            type="file"
                            id="name-input"
                            ref="ktp"
                            v-on:change="handleKtp()"
                          />
                          <span class="form-text text-muted"
                            >Masukkan Foto KTP</span
                          >
                        </b-form-group>
                        <b-form-group
                          label="Selfie Beserta Ktp"
                          label-for="name-input"
                          invalid-feedback="Selfie Harus di Isi"
                        >
                          <b-link
                            target="_blank"
                            :href="
                              `http://localhost:8080/user/selfie/` + form.selfie
                            "
                          >
                            <div class="table-img1">
                              <img
                                id="selfieimage"
                                :src="
                                  `http://localhost:8080/user/selfie/` +
                                    form.selfie
                                "
                                alt="Selfie"
                              />
                            </div>
                          </b-link>
                          <input
                            class="form-control form-control-solid form-control-lg"
                            type="file"
                            id="name-input"
                            ref="selfie"
                            v-on:change="handleSelfie()"
                          />
                          <span class="form-text text-muted"
                            >Masukkan Selfie Admin</span
                          >
                        </b-form-group>
                        <b-form-group
                          label="Gambar Hotel "
                          label-for="name-input"
                          invalid-feedback="Gambar Harus di Isi"
                        >
                          <b-link
                            target="_blank"
                            :href="
                              `http://localhost:8080/hotel/profile/` +
                                form.hotel_image
                            "
                          >
                            <div class="table-img1">
                              <img
                                id="image"
                                :src="
                                  `http://localhost:8080/hotel/profile/` +
                                    form.hotel_image
                                "
                                alt="Admin Pet"
                              />
                            </div>
                          </b-link>
                          <input
                            class="form-control form-control-solid form-control-lg"
                            type="file"
                            id="name-input"
                            ref="hotel_image"
                            v-on:change="handleImageHotel()"
                          />
                          <span class="form-text text-muted"
                            >Masukkan Foto Hotel
                          </span>
                        </b-form-group>
                      </div>

                      <!--begin: Wizard Actions -->
                      <div
                        class="d-flex justify-content-between border-top pt-10"
                      >
                        <div class="mr-2">
                          <button
                            class="btn btn-light-primary font-weight-bold text-uppercase px-9 py-4"
                            data-wizard-type="action-prev"
                          >
                            Sebelumnya
                          </button>
                        </div>
                        <div>
                          <button
                            @click="onSubmit"
                            ref="loading_submit"
                            class="btn btn-success font-weight-bold text-uppercase px-9 py-4"
                            data-wizard-type="action-submit"
                          >
                            Submit
                          </button>
                          <button
                            class="btn btn-primary font-weight-bold text-uppercase px-9 py-4"
                            data-wizard-type="action-next"
                          >
                            Selanjutnya
                          </button>
                        </div>
                      </div>
                      <!--end: Wizard Actions -->
                    </form>
                    <!--end: Wizard Form-->
                  </div>
                </div>
                <!--end: Wizard Body-->
              </div>
            </div>
            <!--end: Wizard-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/sass/pages/wizard/wizard-1.scss";
</style>

<script>
import { mapGetters } from "vuex";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import KTUtil from "@/assets/js/components/util";
import KTWizard from "@/assets/js/components/wizard";
// import { LOGOUT } from "@/core/services/store/auth.module";
import Swal from "sweetalert2";
export default {
  name: "emailPengajuan",
  data() {
    return {
      loading: false,
      form: {
        hotel_name: "",
        hotel_email: "",
        hotel_phone: "",
        hotel_image: null,
        hotel_address: "",
        npwp: "",
        hotel_province: "",
        hotel_city: "",
        hotel_district: "",
        hotel_subdistrict: "",
        hotel_description: "",
        document: null,
        admin_name: "",
        admin_phone: "",
        nik: "",
        hotel_service: "",
        hotel_cage: "",
        ktp: null,
        selfie: null
      },
      isError: false,
      uploadedFiles: [],
      provinces: [],
      cities: [],
      districts: [],
      subdistricts: [],
      email: "",
      formData: {
        email: ""
      }
    };
  },
  components: {},
  computed: {
    ...mapGetters(["isAuthenticated"])
  },
  methods: {
    resetProvince() {
      this.form.hotel_city = "";
      this.form.hotel_subdistrict = "";
      this.form.hotel_district = "";
      this.fetchCity(this.form.hotel_province);
    },
    handleKtp() {
      // console.log("KTP");
      // console.log(this.$refs.ktp.files[0]);
      var output = document.getElementById("ktpimage");
      const file = this.$refs.ktp.files[0];
      console.log(file);
      if (file) {
        output.src = URL.createObjectURL(file);
      } else {
        this.form.ktp = this.$refs.ktp.files[0];
      }
      // this.addForm.ktp = this.$refs.ktp.files[0];
    },
    handleDocument() {
      // console.log("DOKUMEN");
      // console.log(this.$refs.docs.files[0]);
      this.form.document = this.$refs.docs.files[0];
      this.form.documentName = this.$refs.docs.files[0].name;
    },
    handleSelfie() {
      // console.log("SELFIE");
      // console.log(this.$refs);
      var output = document.getElementById("selfieimage");
      const file = this.$refs.selfie.files[0];
      console.log(file);
      if (file) {
        output.src = URL.createObjectURL(file);
      } else {
        this.form.selfie = this.$refs.selfie.files[0];
      }
    },
    handleImageHotel() {
      // console.log("HOTEL IMAGE");
      // console.log(this.$refs);
      var output = document.getElementById("image");
      const file = this.$refs.hotel_image.files[0];
      console.log(file);
      if (file) {
        output.src = URL.createObjectURL(file);
      } else {
        this.form.hotel_image = this.$refs.hotel_image.files[0];
      }
    },
    fetchProvinces() {
      this.resetProvince();
      this.$api
        .get(`province/all`)
        .then(res => {
          this.provinces = res.data.data.data ? res.data.data.data : [];
          // console.log(this.ktghewan);
        })
        .catch(err => {
          console.error(err);
          // alert(err);
        });
    },
    fetchCity(province = this.form.hotel_province) {
      this.$api
        .get(`city/all?provinceId=${province}`)
        .then(res => {
          this.cities = res.data.data.data ? res.data.data.data : [];
          // console.log(this.ktghewan);
        })
        .catch(err => {
          console.error(err);
          // alert(err);
        });
    },
    fetchDistrict(city = this.form.hotel_city) {
      this.$api
        .get(`district/all?cityId=${city}`)
        .then(res => {
          this.districts = res.data.data.data ? res.data.data.data : [];
          // console.log(this.ktghewan);
        })
        .catch(err => {
          console.error(err);
          // alert(err);
        });
    },
    fetchSubdistrict(district = this.form.hotel_district) {
      this.$api
        .get(`subdistrict/all?districtId=${district}`)
        .then(res => {
          this.subdistricts = res.data.data.data ? res.data.data.data : [];
          // console.log(this.ktghewan);
        })
        .catch(err => {
          console.error(err);
          // alert(err);
        });
    },
    onSubmit() {
      this.form.hotel_phone = parseInt(this.form.hotel_phone);
      this.form.admin_phone = parseInt(this.form.admin_phone);
      this.form.hotel_province = parseInt(this.form.hotel_province);
      this.form.hotel_city = parseInt(this.form.hotel_city);
      this.form.hotel_district = parseInt(this.form.hotel_district);
      this.form.hotel_subdistrict = parseInt(this.form.hotel_subdistrict);
      this.form.nik = parseInt(this.form.nik);
      // this.$v.form.$touch();
      // if (this.$v.form.$anyError) {
      //   return;
      // }
      // clear existing errors
      // this.$store.dispatch(LOGOUT);

      // set spinner to submit button
      const submitButton = this.$refs["loading_submit"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      // dummy delay
      setTimeout(() => {
        const config = {
          headers: { "content-type": "multipart/form-data" }
        };

        let formData = new FormData();
        formData.append("id_request", this.form.id_request);
        formData.append("hotel_name", this.form.hotel_name);
        formData.append("hotel_email", this.form.hotel_email);
        formData.append("hotel_phone", this.form.hotel_phone);
        formData.append("hotel_address", this.form.hotel_address);
        formData.append("hotel_description", this.form.hotel_description);
        if (this.$refs.hotel_image.files[0] !== undefined)
          formData.append("hotel_image", this.$refs.hotel_image.files[0]);
        // if (this.form.hotel_image !== "")
        //   formData.append("hotel_image", this.form.hotel_image);
        formData.append("npwp", this.form.npwp);
        if (this.$refs.docs.files[0] !== undefined)
          formData.append("document", this.$refs.docs.files[0]);
        // if (this.form.document !== "")
        //   formData.append("document", this.form.document);
        formData.append("admin_name", this.form.admin_name);
        formData.append("admin_phone", this.form.admin_phone);
        formData.append("hotel_province", this.form.hotel_province);
        formData.append("hotel_city", this.form.hotel_city);
        formData.append("hotel_district", this.form.hotel_district);
        formData.append("hotel_subdistrict", this.form.hotel_subdistrict);
        formData.append("hotel_service", this.form.hotel_service);
        formData.append("hotel_cage", this.form.hotel_cage);
        formData.append("nik", this.form.nik);
        if (this.$refs.ktp.files[0] !== undefined)
          formData.append("ktp", this.$refs.ktp.files[0]);
        // if (this.form.ktp !== "")
        //   formData.append("ktp", this.form.ktp);
        if (this.$refs.selfie.files[0] !== undefined)
          formData.append("selfie", this.$refs.selfie.files[0]);
        // if (this.form.selfie !== "")
        //   formData.append("selfie", this.form.selfie);
        // send register request
        this.$api
          .put(`request/update`, formData, config)
          .then(res => {
            // console.log(res.data.data.token)
            console.log(res);
            if (res.status === 200) {
              // console.log(res.data.data.role);

              this.isError = false;
              this.loading = false;
              if (res.data.status === true) {
                this.$router.push({ name: "login" });
                Swal.fire({
                  icon: "success",
                  title: "Pengajuan Berhasil di kirim?",
                  text:
                    "Mohon Tunggu Email Konfirmasi, Selambat-lambatnya 3 Hari",
                  width: "28em",
                  confirmButtonText: "Oke",
                  confirmButtonColor: "#00ff00",
                  focusCancel: true
                });
                submitButton.classList.remove(
                  "spinner",
                  "spinner-light",
                  "spinner-right"
                );
              }
              // this.$store.commit("setAuth", res.data);
            } else {
              this.isError = true;
              this.loading = false;
            }
          })
          .catch(err => {
            console.log(err);
            this.loading = false;
            this.isError = true;
            // this.$v.$reset();

            if (err.message === "Request failed with status code 400 ")
              submitButton.classList.remove(
                "spinner",
                "spinner-light",
                "spinner-right"
              );
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Semua data wajib diisi!",
              showConfirmButton: false,
              width: "25em",
              timer: 2500
            });
            submitButton.classList.remove(
              "spinner",
              "spinner-light",
              "spinner-right"
            );
          });
      }, 2000);
    },
    submitReset() {
      // set spinner to submit button
      const submitButton = this.$refs["loading_submit1"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      // dummy delay
      setTimeout(() => {
        console.log(this.formData.email);
        // send login request
        this.$api
          .post(`request/email`, this.formData)
          .then(res => {
            if (res.status === 200) {
              // console.log(res);
              // loginBtn.classList.remove("disabled1");
              this.form = res.data.data ? res.data.data : {};
              console.log(this.form);
              document.querySelector(".forgot-1").style.display = "none";
              document.querySelector(".forgot-2").style.display = "";
              localStorage.setItem("forgotEmail", this.formData.email);
              this.loading = false;
              submitButton.classList.remove(
                "spinner",
                "spinner-light",
                "spinner-right"
              );
              // console.log(localStorage.getItem("forgotEmail"));
            } else {
              this.loading = false;
              submitButton.classList.remove(
                "spinner",
                "spinner-light",
                "spinner-right"
              );
            }
          })
          .catch(() => {
            this.loading = false;
            // loginBtn.classList.remove("disabled1");
            Swal.fire({
              icon: "error",
              title: "Email not found!",
              text: "Make sure you enter the correct email",
              width: 400,
              confirmButtonText: "OK",
              confirmButtonColor: "#164875"
            });
            submitButton.classList.remove(
              "spinner",
              "spinner-light",
              "spinner-right"
            );
          });

        // loginBtn.classList.remove("spinner", "spinner-light", "spinner-right");
      }, 2000);
    }
  },
  mounted() {
    if (this.isAuthenticated) {
      this.$router.push({ name: "admin-dashboard" });
    }
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Wizard" },
      { title: "Wizard-1" }
    ]);

    // Initialize form wizard
    const wizard = new KTWizard("kt_wizard_v1", {
      startStep: 1, // initial active step number
      clickableSteps: true // allow step clicking
    });

    // Validation before going to next page
    wizard.on("beforeNext", function(/*wizardObj*/) {
      // validate the form and use below function to stop the wizard's step
      // wizardObj.stop();
    });

    // Change event
    wizard.on("change", function(/*wizardObj*/) {
      setTimeout(() => {
        KTUtil.scrollTop();
      }, 500);
    });

    this.fetchProvinces();
    this.fetchCity();
    this.fetchDistrict();
    this.fetchSubdistrict();
  }
};
</script>

<style>
.bg-orange {
  background-color: #fd8833;
}

.orange {
  color: #fd8833;
}

.pointer {
  cursor: pointer;
}

.auth-forgot-1 {
  font-family: "Source Sans Pro";
  font-weight: 700;
  font-size: 30px;
  line-height: 38px;
  color: #000000;
}

.auth-forgot-2 {
  font-family: "Source Sans Pro";
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #757575;
}

.auth-forgot-2:hover {
  font-family: "Source Sans Pro";
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #5c5c5c;
}

.reset-btn {
  border-radius: 5px;
  padding-top: 15px;
  padding-bottom: 15px;
  border: 0;
  font-family: "Source Sans Pro";
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
}

.btn-orange {
  color: #fff;
  background-color: #dc822a;
  border-color: #dc822a;
  font-family: sans-serif;
}

.btn-orange :hover {
  color: #fff;
  background-color: #dc822a;
  border-color: #dc822a;
}

.btn-orange :active {
  color: #fff !important;
  background-color: #dc822a !important;
  border-color: #dc822a !important;
}

.btn-orange :focus,
.btn-orange .focus {
  color: #fff;
  background-color: #dc822a;
  border-color: #dc822a;
  box-shadow: 0 0 0 0.2rem rgba(238, 179, 90, 0.589);
}

.btn-orange .disabled,
.btn-orange :disabled {
  color: #fff;
  background-color: #dc822a;
  border-color: #dc822a;
}
.table-img img {
  width: 90px; /* Set the width of the image */
  height: auto; /* Maintain the aspect ratio */
  border: 2px solid lightgrey; /* Add a border */
  border-radius: 5px; /* Add rounded corners */
  margin: 10px; /* Add some margin around the image */
  padding: 5px; /* Add padding inside the border */
  background-color: #ebebeb;
}
.table-img1 img {
  border-radius: 25px;
  max-height: 18rem;
}
.pointer {
  cursor: pointer;
}

.gutter-b {
  margin-bottom: 10px;
}
</style>
