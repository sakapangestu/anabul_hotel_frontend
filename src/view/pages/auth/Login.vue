<template>
  <div class="d-flex flex-column flex-root">
    <div
      class="login login-1 login-signin-on d-flex flex-column flex-lg-row flex-row-fluid bg-white"
      id="kt_login"
    >
      <!--begin::Aside-->
      <div
        class="login-aside d-flex flex-row-auto bgi-size-cover bgi-no-repeat"
        :style="{ backgroundImage: `url(/media/bg/app_logo.png)` }"
      >
        <!--begin: Aside Container -->
        <div class="d-flex flex-row-fluid flex-column justify-content-between">
          <!--begin: Aside header -->
          <!--          <a href="#" class="flex-column-auto">-->
          <!--            <img src="media/logos/logo-letteZr-1.png" class="h-25" />-->
          <!--          </a>-->
          <!--end: Aside header -->
          <!--begin: Aside content -->
          <div
            class="flex-column-fluid d-flex flex-column justify-content-center"
          >
            <!--            <h3 class="font-size-h1 mt-10 mb-5 text-white">-->
            <!--              Welcome to Metronic!-->
            <!--            </h3>-->
            <!--            <p class="font-weight-lighter text-white opacity-80">-->
            <!--              The ultimate Bootstrap, Angular 8, React &amp; VueJS admin theme-->
            <!--              framework for next generation web apps.-->
            <!--            </p>-->
          </div>
        </div>
        <!--end: Aside Container -->
      </div>
      <!--begin::Aside-->

      <!--begin::Content-->
      <div
        class="flex-row-fluid d-flex flex-column position-relative p-7 overflow-hidden"
      >
        <div class="d-flex flex-column-fluid flex-center mt-30 mt-lg-0">
          <div class="login-wrapper">
            <!--begin::Content header-->
            <div
              class="position-absolute top-0 right-0 text-right mt-5 mb-15 mb-lg-0 flex-column-auto justify-content-center py-5 px-10"
            >
              <span class="font-weight-bold font-size-3 text-dark-60">
                Belum memiliki akun?
              </span>
              <router-link
                class="font-weight-bold font-size-3 ml-2"
                :to="{ name: 'register' }"
              >
                Registrasi!
              </router-link>
            </div>
            <!--end::Content header-->

            <!--begin::Signin-->
            <div class="login-form login-signin">
              <div class="text-center mb-10 mb-lg-20">
                <h3 class="font-size-h1">Login</h3>
                <p class="text-muted font-weight-semi-bold">
                  Masukkan nama pengguna dan kata sandi Anda
                </p>
              </div>

              <!--begin::Form-->
              <b-form class="form" @submit.stop.prevent="onSubmit">
                <div role="alert" class="alert alert-danger" v-if="isError">
                  <div class="alert-text">
                    <strong>Login gagal</strong> <br />
                    Pastikan email & password sudah benar!
                  </div>
                </div>

                <div
                  role="alert"
                  v-bind:class="{ show: errors.length }"
                  class="alert fade alert-danger"
                >
                  <div class="alert-text" v-for="(error, i) in errors" :key="i">
                    {{ error }}
                  </div>
                </div>

                <b-form-group
                  id="example-input-group-1"
                  label=""
                  label-for="example-input-1"
                >
                  <b-form-input
                    class="form-control form-control-solid h-auto py-5 px-6"
                    id="example-input-1"
                    name="example-input-1"
                    v-model="$v.form.email.$model"
                    :state="validateState('email')"
                    placeholder="Masukkan Email...."
                    aria-describedby="input-1-live-feedback"
                  ></b-form-input>

                  <b-form-invalid-feedback id="input-1-live-feedback">
                    Email is required and a valid email address.
                  </b-form-invalid-feedback>
                </b-form-group>

                <b-form-group
                  id="example-input-group-2"
                  label=""
                  label-for="example-input-2"
                >
                  <b-form-input
                    class="form-control form-control-solid h-auto py-5 px-6"
                    type="password"
                    id="example-input-2"
                    name="example-input-2"
                    v-model="$v.form.password.$model"
                    :state="validateState('password')"
                    placeholder="Masukkan Password..."
                    aria-describedby="input-2-live-feedback"
                  ></b-form-input>

                  <b-form-invalid-feedback id="input-2-live-feedback">
                    Password is required.
                  </b-form-invalid-feedback>
                </b-form-group>

                <!--begin::Action-->
                <div
                  class="form-group d-flex flex-wrap justify-content-between align-items-center"
                >
                  <router-link :to="{ name: 'email' }"
                    ><a
                      href="#"
                      class="text-dark-60 text-hover-primary my-3 mr-2"
                      id="kt_login_forgot"
                    >
                      Lupa Password ?
                    </a></router-link
                  >
                  <button
                    ref="kt_login_signin_submit"
                    class="btn btn-primary font-weight-bold px-9 py-4 my-3 font-size-3"
                  >
                    Login
                  </button>
                </div>
                <!--end::Action-->
              </b-form>
              <!--end::Form-->
            </div>
            <!--end::Signin-->
          </div>
        </div>
      </div>
      <!--end::Content-->
    </div>
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
</style>

<script>
import { mapState } from "vuex";
import { LOGOUT } from "@/core/services/store/auth.module";

import { validationMixin } from "vuelidate";
import { email, minLength, required } from "vuelidate/lib/validators";
import Swal from "sweetalert2";
import {
  saveImage,
  saveName,
  saveToken,
  saveRole,
  saveEmail,
  saveHotelId,
  saveHotelprovince,
  saveHotelCity,
  saveHotelDistrict,
  saveHotelSubdistrict,
  getRole,
  saveHotelName
} from "@/service/jwt.service";

export default {
  mixins: [validationMixin],
  name: "login",
  data() {
    return {
      // Remove this dummy login info
      form: {
        email: "",
        password: ""
      },
      loading: false,
      isError: false
    };
  },
  validations: {
    form: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(5)
      }
    }
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    // resetForm() {
    //   this.form = {
    //     email: null,
    //     password: null
    //   };
    //
    //   this.$nextTick(() => {
    //     this.$v.$reset();
    //   });
    // },
    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }

      // const email = this.$v.form.email.$model;
      // const password = this.$v.form.password.$model;

      // clear existing errors
      this.$store.dispatch(LOGOUT);

      // set spinner to submit button
      const submitButton = this.$refs["kt_login_signin_submit"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      // dummy delay
      setTimeout(() => {
        // send login request
        this.$api
          .post(`auth/login`, this.form)
          .then(res => {
            // console.log(res.data.data.token)
            if (res.status === 200) {
              // console.log(res.data.data.role);
              this.isError = false;
              this.loading = false;
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
              if (res.data.data.role === "Admin") {
                saveHotelName(res.data.data.hotel.name);
              }
              // saveHotelName(res.data.data.hotel.name);
              // localStorage.setItem("token", res.data.data.token);
              localStorage.setItem("isAuthenticated", true);

              if (res.data.data.role === "Super Admin") {
                this.$router.push({ name: "dashboard" });
                Swal.fire({
                  title: "",
                  text: "Succes Login",
                  icon: "success",
                  showConfirmButton: false,
                  // confirmButtonClass: "btn btn-secondary",
                  timer: 10000
                });
              } else if (res.data.data.role === "Admin") {
                this.$router.push({ name: "Dashboard-Admin" });
                Swal.fire({
                  title: "",
                  text: "Succes Login",
                  icon: "success",
                  showConfirmButton: false,
                  // confirmButtonClass: "btn btn-secondary",
                  timer: 10000
                });
              }
              window.location.reload();
              // this.$store.commit("setAuth", res.data);
            } else {
              this.isError = true;
              this.loading = false;
            }
          })
          .catch(err => {
            console.log(err.response);
            this.loading = false;
            this.isError = true;
            this.form.password = "";
            this.$v.$reset();
            // if (
            //   !err.message === "Request failed with status code 404" ||
            //   !err.message === "Request failed with status code 400"
            // )
            //   Swal.fire({
            //     icon: "error",
            //     title: "Oops...",
            //     text: "Akun Hotel Anda Telah Di Inaktivasi",
            //     width: "28em",
            //     confirmButtonText: "Oke",
            //     confirmButtonColor: "#00ff00",
            //     focusCancel: true
            //   });
            if (
              err.response.data.message ===
              "Your pet hotel account has been inactivated"
            ) {
              this.isError = false;
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Akun Hotel Anda Telah Di Inaktivasi",
                width: "28em",
                confirmButtonText: "Oke",
                confirmButtonColor: "#00ff00",
                focusCancel: true,
              });
            }
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
    }),
    backgroundImage() {
      return process.env.BASE_URL + "media/bg/app_logo.png";
    }
  },
  mounted() {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (isAuthenticated) {
      const role = getRole();
      if (role === "Super Admin") {
        this.$router.push({ name: "dashboard" });
      } else if (role === "Admin") {
        this.$router.push({ name: "Dashboard-Admin" });
      }
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/sass/pages/login/login-1.scss";
</style>
<style>
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
</style>
