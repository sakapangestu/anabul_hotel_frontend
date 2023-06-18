<template>
  <div>
    <!--begin::Content header-->
    <div
      class="position-absolute top-0 right-0 text-right mt-5 mb-15 mb-lg-0 flex-column-auto justify-content-center py-5 px-10"
    >
      <span class="font-weight-bold font-size-3 text-dark-60">
        Already have an account?
      </span>
      <router-link
        class="font-weight-bold font-size-3 ml-2"
        :to="{ name: 'login' }"
      >
        Sign In!
      </router-link>
    </div>
    <!--end::Content header-->

    <!--begin::Signup-->
    <div class="login-form login-signin">
      <div class="text-center mb-10 mb-lg-20">
        <h3 class="font-size-h1" @click="cek()">Sign Up</h3>
        <p class="text-muted font-weight-semi-bold">
          Enter your details to create your account
        </p>
      </div>

      <!--begin::Form-->
      <b-form class="form" @submit.stop.prevent="onSubmit">
        <div class="row">
          <div class="col-4">
            <b-form-group
              label="Name Hotel"
              label-for="name-input"
              invalid-feedback="Name Wajib Di Isi"
            >
              <b-form-input
                id="name-input"
                type="text"
                v-model="form.hotel_name"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label="Email Hotel"
              label-for="name-input"
              invalid-feedback="Email Hotel Wajib Di Isi"
            >
              <b-form-input
                id="name-input"
                type="email"
                v-model="form.hotel_email"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label="No Hp Hotel"
              label-for="name-input"
              invalid-feedback="No Hp Wajib Di Isi"
            >
              <b-form-input
                type="number"
                id="name-input"
                v-model="form.hotel_phone"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label="NPWP"
              label-for="name-input"
              invalid-feedback="NPWP Wajib Di Isi"
            >
              <b-form-input
                type="number"
                id="name-input"
                v-model="form.npwp"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label="KTP"
              label-for="name-input"
              invalid-feedback="KTP Wajib Di Isi"
            >
              <input
                type="file"
                id="file"
                ref="ktp"
                v-on:change="handleKtp()"
              />
            </b-form-group>
          </div>

          <div class="col-4">
            <b-form-group
              label="Provinsi Hotel"
              label-for="name-input"
              invalid-feedback="Provinsi Wajib Di Isi"
            >
              <b-form-select
                v-model="form.hotel_province"
                @change="resetProvince"
                :label-field="provinces.name"
                value-field="id_province"
                text-field="name"
                :options="provinces"
              ></b-form-select>
            </b-form-group>
            <b-form-group
              label="Kota Hotel"
              label-for="name-input"
              invalid-feedback="Kota Wajib Di Isi"
            >
              <b-form-select
                v-model="form.hotel_city"
                @change="fetchDistrict"
                :label-field="cities.name"
                value-field="id_city"
                text-field="name"
                :options="cities"
              ></b-form-select>
            </b-form-group>
            <b-form-group
              label="Kecamatan Hotel"
              label-for="name-input"
              invalid-feedback="Kecamatan Wajin Di Isi"
            >
              <b-form-select
                v-model="form.hotel_district"
                @change="fetchSubdistrict"
                :label-field="districts.name"
                value-field="id_district"
                text-field="name"
                :options="districts"
              ></b-form-select>
            </b-form-group>
            <b-form-group
              label="Kelurahan Hotel"
              label-for="name-input"
              invalid-feedback="Kelurahan Wajib Di Isi"
            >
              <b-form-select
                v-model="form.hotel_subdistrict"
                :label-field="subdistricts.name"
                value-field="id_subdistrict"
                text-field="name"
                :options="subdistricts"
              ></b-form-select>
            </b-form-group>
            <b-form-group
              label="Alamat"
              label-for="name-input"
              invalid-feedback="Alamat Wajib Di Isi"
            >
              <b-form-textarea
                id="textarea"
                v-model="form.hotel_address"
                placeholder="Masukkan Alamat Hotel..."
                rows="3"
                max-rows="6"
                required
              ></b-form-textarea>
            </b-form-group>
          </div>
          <div class="col-4">
            <b-form-group
              label="Name Admin"
              label-for="name-input"
              invalid-feedback="Name Admin Di Isi"
            >
              <b-form-input
                id="name-input"
                type="text"
                v-model="form.admin_name"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label="No Hp Admin"
              label-for="name-input"
              invalid-feedback="No Hp Admin Wajib Di Isi"
            >
              <b-form-input
                type="number"
                id="name-input"
                v-model="form.admin_phone"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label="NIK Admin"
              label-for="name-input"
              invalid-feedback="No Hp Admin Wajib Di Isi"
            >
              <b-form-input
                type="number"
                id="name-input"
                v-model="form.nik"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label="Dokumen SIUP/AKTE/NIB"
              label-for="name-input"
              invalid-feedback="Dokumen SIUP/AKTE/NIB Wajib Di Isi"
            >
              <input
                type="file"
                id="file"
                ref="docs"
                v-on:change="handleDocument()"
              />
            </b-form-group>
            <b-form-group
              label="Selfie Admin"
              label-for="name-input"
              invalid-feedback="Selfie Admin Wajib Di Isi"
            >
              <input
                type="file"
                id="file"
                ref="selfie"
                v-on:change="handleSelfie()"
              />
            </b-form-group>
            <b-form-group
              label="Foto Hotel"
              label-for="name-input"
              invalid-feedback="Foto Hotel Wajib Di Isi"
            >
              <input
                type="file"
                id="file"
                ref="hotel_image"
                v-on:change="handleImageHotel()"
              />
            </b-form-group>
          </div>
        </div>

        <!--begin::Action-->
        <div class="form-group d-flex flex-wrap float-right">
          <button
            v-on:click="$router.push('login')"
            class="btn btn-light-primary font-weight-bold px-9 py-4 my-3 font-size-3 mx-4"
          >
            Cancel
          </button>
          <button
            type="submit"
            ref="kt_login_signup_submit"
            class="btn btn-primary font-weight-bold px-9 py-4 my-3 font-size-3 mx-4"
          >
            Submit
          </button>
        </div>
        <!--end::Action-->
      </b-form>
      <!--end::Form-->
    </div>
    <!--end::Signup-->
  </div>
</template>

<style lang="scss" scoped>
.spinner.spinner-right {
  padding-right: 3.5rem !important;
}
.login-wrapper {
  min-width: 60%;
  max-width: 70%;
}

.custom-file-label {
  background-color: red !important;
}

//.register-files {
//  background-color: red;
//}
</style>

<script>
// import Dropzone from "@/view/content/components/Dropfile";
import { mapState } from "vuex";
import { LOGOUT } from "@/core/services/store/auth.module";
import { validationMixin } from "vuelidate";
// import { email, required, minLength } from "vuelidate/lib/validators";
import Swal from "sweetalert2";
// import { saveToken } from "@/service/jwt.service";
export default {
  mixins: [validationMixin],
  name: "register",
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
        document: null,
        admin_name: "",
        admin_phone: "",
        nik: "",
        ktp: null,
        selfie: null
      },
      loading: false,
      isError: false,
      uploadedFiles: [],
      provinces: [],
      cities: [],
      districts: [],
      subdistricts: []
    };
  },
  components: {
    // Dropzone
  },
  // validations: {
  //   form: {
  //     hotel_name: {
  //       required,
  //       minLength: minLength(3)
  //     },
  //     hotel_email: {
  //       required,
  //       email
  //     },
  //     hotel_phone: {
  //       required,
  //       minLength: minLength(11)
  //     },
  //     npwp: {
  //       required,
  //       minLength: minLength(16)
  //     },
  //     admin_name: {
  //       required,
  //       minLength: minLength(3)
  //     },
  //     admin_phone: {
  //       required,
  //       minLength: minLength(11)
  //     },
  //     nik: {
  //       required,
  //       minLength: minLength(16)
  //     },
  //     hotel_address: {
  //       required
  //     },
  //     hotel_province: {
  //       required
  //     },
  //     hotel_city: {
  //       required
  //     },
  //     hotel_district: {
  //       required
  //     },
  //     hotel_subdistrict: {
  //       required
  //     }
  // password: {
  //   required,
  //   minLength: minLength(3)
  // }
  // }
  // },
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
      this.$store.dispatch(LOGOUT);

      // set spinner to submit button
      const submitButton = this.$refs["kt_login_signup_submit"];
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
            if (res.status === 200) {
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
              }
              // this.$store.commit("setAuth", res.data);
            } else {
              this.isError = true;
              this.loading = false;
            }
          })
          .catch(err => {
            this.loading = false;
            this.isError = true;
            this.form.password = "";
            // this.$v.$reset();
            if (
              !err.message === "Request failed with status code 404" ||
              !err.message === "Request failed with status code 400"
            )
              alert(err.message);
          });

        submitButton.classList.remove(
          "spinner",
          "spinner-light",
          "spinner-right"
        );
      }, 2000);
    }
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    })
  },
  mounted() {
    this.fetchProvinces();
    this.fetchCity();
    this.fetchDistrict();
    this.fetchSubdistrict();
  }
};
</script>
