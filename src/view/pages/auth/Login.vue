<template>
  <div class="login-wrapper">
    <!--begin::Content header-->
    <div
      class="position-absolute top-0 right-0 text-right mt-5 mb-15 mb-lg-0 flex-column-auto justify-content-center py-5 px-10"
    >
      <span class="font-weight-bold font-size-3 text-dark-60">
        Don't have an account yet?
      </span>
      <router-link
        class="font-weight-bold font-size-3 ml-2"
        :to="{ name: 'register' }"
      >
        Sign Up!
      </router-link>
    </div>
    <!--end::Content header-->

    <!--begin::Signin-->
    <div class="login-form login-signin">
      <div class="text-center mb-10 mb-lg-20">
        <h3 class="font-size-h1">Sign In</h3>
        <p class="text-muted font-weight-semi-bold">
          Enter your username and password
        </p>
      </div>

      <!--begin::Form-->
      <b-form class="form" @submit.stop.prevent="onSubmit">
        <div role="alert" class="alert alert-danger" v-if="isError">
          <div class="alert-text">
            Lorem dsafjsadkjfsdafja sdfjsdafjsadl fjasdfjasdlf j
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
          <a
            href="#"
            class="text-dark-60 text-hover-primary my-3 mr-2"
            id="kt_login_forgot"
          >
            Forgot Password ?
          </a>
          <button
            ref="kt_login_signin_submit"
            class="btn btn-primary font-weight-bold px-9 py-4 my-3 font-size-3"
          >
            Sign In
          </button>
        </div>
        <!--end::Action-->
      </b-form>
      <!--end::Form-->
    </div>
    <!--end::Signin-->
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
import {saveImage, saveName, saveToken, saveRole, saveEmail} from "@/service/jwt.service";

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
        minLength: minLength(6)
      }
    }
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    resetForm() {
      this.form = {
        email: null,
        password: null
      };

      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
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
              localStorage.setItem("isAuthenticated", true);
              if (res.data.data.role === "Super Admin") {
                this.$router.push({ name: "dashboard" });
                Swal.fire({
                  title: "",
                  text: "Succes Login",
                  icon: "success",
                  showConfirmButton: false,
                  // confirmButtonClass: "btn btn-secondary",
                  timer: 1500
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
            this.$v.$reset();
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
  // mounted() {
  //   if (this.isAuthenticated) {
  //     this.$router.push({ name: "dashboard" });
  //   }
  // },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    })
  }
};
</script>
