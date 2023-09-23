<template>
  <div class="card card-custom">
    <div
      class="position-absolute top-0 right-0 text-right mt-5 mb-15 mb-lg-0 flex-column-auto justify-content-center py-5 px-10"
    >
      <span class="font-weight-bold font-size-3 text-dark-60">
        Sudah memiliki akun?
      </span>
      <router-link
        class="font-weight-bold font-size-3 ml-2"
        :to="{ name: 'login' }"
      >
        Login!
      </router-link>
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
            <div class="wizard-step" data-wizard-type="step">
              <div class="wizard-label">
                <i class="wizard-icon flaticon-clipboard"></i>
                <h3 class="wizard-title">1. Persyaratan</h3>
              </div>
              <i class="wizard-arrow flaticon2-next"></i>
            </div>
            <div
              class="wizard-step"
              data-wizard-type="step"
              data-wizard-state="current"
            >
              <div class="wizard-label">
                <i class="wizard-icon flaticon-map-location"></i>
                <h3 class="wizard-title">2. Profil Hotel</h3>
              </div>
              <i class="wizard-arrow flaticon2-next"></i>
            </div>
            <div class="wizard-step" data-wizard-type="step">
              <div class="wizard-label">
                <i class="wizard-icon flaticon-user"></i>
                <h3 class="wizard-title">3. Profil Admin</h3>
              </div>
              <i class="wizard-arrow flaticon2-next"></i>
            </div>
            <div class="wizard-step" data-wizard-type="step">
              <div class="wizard-label">
                <i class="wizard-icon flaticon-list"></i>
                <h3 class="wizard-title">4. Unggah Dokumen</h3>
              </div>
              <!--              <i class="wizard-arrow flaticon2-next"></i>-->
            </div>
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
        <div class="row justify-content-center my-10 px-8 my-lg-15 px-lg-10">
          <div class="col-xl-12 col-xxl-8">
            <!--begin: Wizard Form-->
            <form class="form" id="kt_form">
              <!--begin: Wizard Step 1-->
              <div class="pb-5" data-wizard-type="step-content">
                <!--                <h4 class="mb-10 font-weight-bold text-dark">-->
                <!--                  Siapkan Syarat Kebutuhan Registrasi-->
                <!--                </h4>-->
                <div id="app" class="container">
                  <h1 class="text-center my-4">Persyaratan Registrasi</h1>
                  <b-badge variant="danger"
                    >Mohon dipersiapkan syarat dibawah ini untuk melakukan pendaftaran!</b-badge
                  >
                  <ul class="list-group">
                    <li
                      v-for="requirement in requirements"
                      :key="requirement.id"
                      class="form-control form-control-solid form-control-lg"
                    >
                      {{ requirement.id }}<a class="mr-3">.</a>
                      {{ requirement.text }}
                    </li>
                  </ul>
                </div>
              </div>

              <!--end: Wizard Step 1-->

              <!--begin: Wizard Step 2-->
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
                  <span class="form-text text-muted">Masukkan Email Hotel</span>
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
                  <span class="form-text text-muted">Masukkan NPWP</span>
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

                <!--                <div class="row">-->
                <!--                  <div class="col">-->
                <!--                    <div-->
                <!--                      v-for="(layanan, index) in petLayanan"-->
                <!--                      :key="layanan.id"-->
                <!--                    >-->
                <!--                      <b-button v-b-toggle="'collapse' + index">-->
                <!--                        Layanan {{ index + 1 }}-->
                <!--                      </b-button>-->
                <!--                      <b-button-->
                <!--                        v-if="index === petLayanan.length - 1 && index !== 0"-->
                <!--                        @click="deleteLayanan"-->
                <!--                      >-->
                <!--                        X-->
                <!--                      </b-button>-->
                <!--                      <b-collapse :id="'collapse' + index">-->
                <!--                        <b-card>-->
                <!--                          <b-form-group-->
                <!--                            label="Nama Layanan"-->
                <!--                            label-for="name-input"-->
                <!--                            invalid-feedback="Nama Layanan is required"-->
                <!--                          >-->
                <!--                            <b-form-input-->
                <!--                              type="text"-->
                <!--                              id="name-input"-->
                <!--                              v-model="layanan.name"-->
                <!--                            ></b-form-input>-->
                <!--                          </b-form-group>-->
                <!--                        </b-card>-->
                <!--                      </b-collapse>-->
                <!--                    </div>-->
                <!--                    <b-button variant="primary" @click="addLayanan">-->
                <!--                      Tambah Layanan-->
                <!--                    </b-button>-->
                <!--                  </div>-->
                <!--                  <div class="col">-->
                <!--                    <div-->
                <!--                      v-for="(kategori, index) in petKategori"-->
                <!--                      :key="kategori.id"-->
                <!--                    >-->
                <!--                      <b-button v-b-toggle="'collapse1' + index">-->
                <!--                        Kategori Kandang {{ index + 1 }}-->
                <!--                      </b-button>-->
                <!--                      <b-button-->
                <!--                        v-if="index === petKategori.length - 1 && index !== 0"-->
                <!--                        @click="deleteKategori"-->
                <!--                      >-->
                <!--                        X-->
                <!--                      </b-button>-->
                <!--                      <b-collapse :id="'collapse1' + index">-->
                <!--                        <b-card>-->
                <!--                          <b-form-group-->
                <!--                            label="Kategori Kandang"-->
                <!--                            label-for="name-input"-->
                <!--                            invalid-feedback="Kategori Kandang is required"-->
                <!--                          >-->
                <!--                            <b-form-input-->
                <!--                              type="text"-->
                <!--                              id="name-input"-->
                <!--                              v-model="kategori.name"-->
                <!--                            ></b-form-input>-->
                <!--                          </b-form-group>-->
                <!--                        </b-card>-->
                <!--                      </b-collapse>-->
                <!--                    </div>-->
                <!--                    <b-button variant="primary" @click="addKategori">-->
                <!--                      Tambah Kategori Kandang-->
                <!--                    </b-button>-->
                <!--                  </div>-->
                <!--                  <div class="col">-->
                <!--                    <div v-for="(ukuran, index) in petUkuran" :key="ukuran.id">-->
                <!--                      <b-button v-b-toggle="'collapse2' + index">-->
                <!--                        Ukuran Kandang {{ index + 1 }}-->
                <!--                      </b-button>-->
                <!--                      <b-button-->
                <!--                        v-if="index === petUkuran.length - 1 && index !== 0"-->
                <!--                        @click="deleteUkuran"-->
                <!--                      >-->
                <!--                        X-->
                <!--                      </b-button>-->
                <!--                      <b-collapse :id="'collapse2' + index">-->
                <!--                        <b-card>-->
                <!--                          <b-form-group-->
                <!--                            label="Nama Ukuran"-->
                <!--                            label-for="name-input"-->
                <!--                            invalid-feedback="Kategori Kandang is required"-->
                <!--                          >-->
                <!--                            <b-form-input-->
                <!--                              type="text"-->
                <!--                              id="name-input"-->
                <!--                              v-model="ukuran.name"-->
                <!--                            ></b-form-input>-->
                <!--                          </b-form-group>-->
                <!--                          <b-form-group-->
                <!--                            label="Panjang Kandang"-->
                <!--                            label-for="name-input"-->
                <!--                            invalid-feedback="Panjang Kandang is required"-->
                <!--                          >-->
                <!--                            <b-form-input-->
                <!--                              type="number"-->
                <!--                              id="name-input"-->
                <!--                              v-model="ukuran.long"-->
                <!--                            ></b-form-input>-->
                <!--                          </b-form-group>-->
                <!--                          <b-form-group-->
                <!--                            label="Lebar Kandang"-->
                <!--                            label-for="name-input"-->
                <!--                            invalid-feedback="Lebar Kandang is required"-->
                <!--                          >-->
                <!--                            <b-form-input-->
                <!--                              type="number"-->
                <!--                              id="name-input"-->
                <!--                              v-model="ukuran.wide"-->
                <!--                            ></b-form-input>-->
                <!--                          </b-form-group>-->
                <!--                          <b-form-group-->
                <!--                            label="Tinggi Kandang"-->
                <!--                            label-for="name-input"-->
                <!--                            invalid-feedback="Tinggi Kandang is required"-->
                <!--                          >-->
                <!--                            <b-form-input-->
                <!--                              type="number"-->
                <!--                              id="name-input"-->
                <!--                              v-model="ukuran.tall"-->
                <!--                            ></b-form-input>-->
                <!--                          </b-form-group>-->
                <!--                        </b-card>-->
                <!--                      </b-collapse>-->
                <!--                    </div>-->
                <!--                    <b-button variant="primary" @click="addUkuran">-->
                <!--                      Tambah Ukuran Kandang-->
                <!--                    </b-button>-->
                <!--                  </div>-->
                <!--                </div>-->
              </div>
              <!--end: Wizard Step 2-->

              <!--begin: Wizard Step 3-->
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
                  <span class="form-text text-muted">Masukkan Nama Admin</span>
                </div>
                <div class="form-group">
                  <label>No Hp Admin</label>
                  <input
                    type="number"
                    class="form-control form-control-solid form-control-lg"
                    placeholder="Masukkan No Hp Admin"
                    v-model="form.admin_phone"
                  />
                  <span class="form-text text-muted">Masukkan No Hp Admin</span>
                </div>
                <div class="form-group">
                  <label>NIK Admin</label>
                  <input
                    type="number"
                    class="form-control form-control-solid form-control-lg"
                    placeholder="Masukkan NIK"
                    v-model="form.nik"
                  />
                  <span class="form-text text-muted">Masukkan NIK Admin</span>
                </div>
              </div>
              <!--begin: Wizard Step 4-->
              <div class="pb-5" data-wizard-type="step-content">
                <h4 class="mb-10 font-weight-bold text-dark">
                  Masukkan Dokumen Anda!
                </h4>
                <div class="form-group">
                  <label>Dokumen SIUP/AKTE/NIB</label>
                  <input
                    class="form-control form-control-solid form-control-lg"
                    type="file"
                    id="file"
                    ref="docs"
                    v-on:change="handleDocument()"
                  />
                  <span class="form-text text-muted"
                    >Masukkan Dokumen SIUP/AKTE/NIB</span
                  >
                </div>
                <div class="form-group">
                  <label>KTP</label>
                  <input
                    class="form-control form-control-solid form-control-lg"
                    type="file"
                    id="file"
                    ref="ktp"
                    v-on:change="handleKtp()"
                  />
                  <span class="form-text text-muted">Masukkan Foto KTP</span>
                </div>
                <div class="form-group">
                  <label>Selfie + KTP Admin</label>
                  <input
                    class="form-control form-control-solid form-control-lg"
                    type="file"
                    id="file"
                    ref="selfie"
                    v-on:change="handleSelfie()"
                  />
                  <span class="form-text text-muted"
                    >Masukkan Selfie Admin</span
                  >
                </div>
                <div class="form-group">
                  <div class="form-group">
                    <label>Foto Hotel</label>
                    <input
                      class="form-control form-control-solid form-control-lg"
                      type="file"
                      id="file"
                      ref="hotel_image"
                      v-on:change="handleImageHotel()"
                    />
                    <span class="form-text text-muted"
                      >Masukkan Foto Hotel
                    </span>
                  </div>
                </div>
              </div>
              <!--end: Wizard Step 4-->

              <!--begin: Wizard Actions -->
              <div class="d-flex justify-content-between border-top pt-10">
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
</template>

<style lang="scss">
@import "@/assets/sass/pages/wizard/wizard-1.scss";
</style>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import KTUtil from "@/assets/js/components/util";
import KTWizard from "@/assets/js/components/wizard";
import Swal from "sweetalert2";

export default {
  name: "Wizard-1",
  data() {
    return {
      // Remove this dummy login info
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
      loading: false,
      isError: false,
      uploadedFiles: [],
      provinces: [],
      cities: [],
      districts: [],
      subdistricts: [],
      requirements: [
        {
          id: 1,
          text:
            "Mengisi form registrasi selengka-lengkapnya dan sedetail-detailnya. "
        },
        { id: 2, text: "Menyiapkan scan surat izin usaha dalam bentuk pdf." },
        { id: 3, text: "Menyiapkan foto KTP dengan jelas." },
        {
          id: 4,
          text: "Menyiapkan foto diri selfie dengan memegang ktp dengan jelas."
        },
        {
          id: 5,
          text: "Menyiapkan foto profil hotel dengan jelas."
        },
        {
          id: 6,
          text:
            "Selesai melakukan registrasi harap menunggu konfirmasi dari pihak Anabul Hotel 3x24 Jam di jam kerja "
        }
      ]
      // petLayanan: [{}],
      // petKategori: [{}],
      // petUkuran: [{}]
    };
  },
  methods: {
    // deleteLayanan() {
    //   this.petLayanan.pop();
    // },
    // deleteKategori() {
    //   this.petKategori.pop();
    // },
    // deleteUkuran() {
    //   this.petUkuran.pop();
    // },
    // addLayanan() {
    //   this.petLayanan.push({});
    // },
    // addKategori() {
    //   this.petKategori.push({});
    // },
    // addUkuran() {
    //   this.petUkuran.push({});
    // },
    resetProvince() {
      this.form.hotel_city = "";
      this.form.hotel_subdistrict = "";
      this.form.hotel_district = "";
      this.fetchCity(this.form.hotel_province);
    },
    handleKtp() {
      // console.log("KTP");
      // console.log(this.$refs.ktp.files[0]);
      this.form.ktp = this.$refs.ktp.files[0];
    },
    handleDocument() {
      // console.log("DOKUMEN");
      // console.log(this.$refs.docs.files[0]);
      this.form.document = this.$refs.docs.files[0];
    },
    handleSelfie() {
      // console.log("SELFIE");
      // console.log(this.$refs);
      this.form.selfie = this.$refs.selfie.files[0];
    },
    handleImageHotel() {
      // console.log("HOTEL IMAGE");
      // console.log(this.$refs);
      this.form.hotel_image = this.$refs.hotel_image.files[0];
    },
    // validateState(name) {
    //   const { $dirty, $error } = this.$v.form[name];
    //   return $dirty ? !$error : null;
    // },
    // resetForm() {
    //   this.form = {
    //     hotel_name: null,
    //     hotel_email: null,
    //     hotel_phone: null,
    //     hotel_address: null,
    //     hotel_image: null,
    //     hotel_province: null,
    //     hotel_subdistrict: null,
    //     hotel_district: null,
    //     hotel_city: null,
    //     npwp: null,
    //     document: null,
    //     admin_name: null,
    //     admin_phone: null,
    //     nik: null,
    //     ktp: null,
    //     selfie: null
    //   };
    //
    //   // this.$nextTick(() => {
    //   //   // this.$v.$reset();
    //   // });
    // },
    cek() {
      console.log(this.form);
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

        formData.append("hotel_name", this.form.hotel_name);
        formData.append("hotel_email", this.form.hotel_email);
        formData.append("hotel_phone", this.form.hotel_phone);
        formData.append("hotel_address", this.form.hotel_address);
        formData.append("hotel_description", this.form.hotel_description);
        if (this.$refs.hotel_image.files[0] !== undefined)
          formData.append("hotel_image", this.$refs.hotel_image.files[0]);
        formData.append("npwp", this.form.npwp);
        if (this.$refs.docs.files[0] !== undefined)
          formData.append("document", this.$refs.docs.files[0]);
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
        if (this.$refs.selfie.files[0] !== undefined)
          formData.append("selfie", this.$refs.selfie.files[0]);
        // send register request
        this.$api
          .post(`request/add`, formData, config)
          .then(res => {
            // console.log(res.data.data.token)
            console.log(res);
            if (res.status === 201) {
              // console.log(res.data.data.role);

              this.isError = false;
              this.loading = false;
              if (res.data.status === true) {
                this.$router.push({ name: "login" });
                Swal.fire({
                  title: "",
                  text: "Sukses Registrasi dan Menunggu verifikasi Email ",
                  icon: "success",
                  showConfirmButton: false,
                  // confirmButtonClass: "btn btn-secondary",
                  timer: 4000
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
    }
    // submit: function(e) {
    //   e.preventDefault();
    //   Swal.fire({
    //     title: "",
    //     text: "The application has been successfully submitted!",
    //     icon: "success",
    //     confirmButtonClass: "btn btn-secondary"
    //   });
    // }
  },
  mounted() {
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
  }
};
</script>
