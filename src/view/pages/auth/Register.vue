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
          <div class="col-6">
            <b-form-group
              id="example-input-group-0"
              label=""
              label-for="example-input-0"
            >
              <b-form-input
                class="form-control form-control-solid h-auto py-5 px-6"
                id="example-input-0"
                name="example-input-0"
                v-model="$v.form.hotel_name.$model"
                :state="validateState('hotel_name')"
                aria-describedby="input-0-live-feedback"
                placeholder="Nama Hotel"
              ></b-form-input>

              <b-form-invalid-feedback id="input-0-live-feedback">
                Nama Hotel Wajib Diisi.
              </b-form-invalid-feedback>
            </b-form-group>

            <b-form-group
              id="example-input-group-1"
              label=""
              label-for="example-input-1"
            >
              <b-form-input
                class="form-control form-control-solid h-auto py-5 px-6"
                id="example-input-1"
                name="example-input-1"
                v-model="$v.form.hotel_email.$model"
                :state="validateState('hotel_email')"
                aria-describedby="input-1-live-feedback"
                placeholder="Email"
              ></b-form-input>

              <b-form-invalid-feedback id="input-1-live-feedback">
                Email Wajib Diisi.
              </b-form-invalid-feedback>
            </b-form-group>

            <b-form-group
              id="example-input-group-2"
              label=""
              label-for="example-input-2"
            >
              <b-form-input
                class="form-control form-control-solid h-auto py-5 px-6"
                type="number"
                id="example-input-2"
                name="example-input-2"
                v-model="$v.form.hotel_phone.$model"
                :state="validateState('hotel_phone')"
                aria-describedby="input-2-live-feedback"
                placeholder="No Telepon Hotel"
              ></b-form-input>

              <b-form-invalid-feedback id="input-2-live-feedback">
                No Telepon Hotel Wajib Diisi.
              </b-form-invalid-feedback>
            </b-form-group>

            <b-form-group
              id="example-input-group-3"
              label=""
              label-for="example-input-3"
            >
              <b-form-input
                class="form-control form-control-solid h-auto py-5 px-6"
                type="number"
                id="example-input-3"
                name="example-input-3"
                v-model="$v.form.npwp.$model"
                :state="validateState('npwp')"
                aria-describedby="input-3-live-feedback"
                placeholder="NPWP"
              ></b-form-input>

              <b-form-invalid-feedback id="input-2-live-feedback">
                NPWP Wajib Diisi.
              </b-form-invalid-feedback>
            </b-form-group>
            <b-form-group
              id="example-input-group-4"
              label=""
              label-for="example-input-4"
            >
              <input
                type="file"
                id="file"
                ref="ktp"
                v-on:change="handleKtp()"
              />
            </b-form-group>

            <b-form-group
              id="example-input-group-11"
              label=""
              label-for="example-input-11"
            >
              <b-form-textarea
                id="example-input-11"
                name="example-input-11"
                v-model="$v.form.hotel_address.$model"
                placeholder="Masukkan Alamat..."
                :state="validateState('hotel_address')"
                aria-describedby="input-11-live-feedback"
                rows="3"
                max-rows="6"
                required
              ></b-form-textarea>
              <!--              <b-form-input-->
              <!--                class="form-control form-control-solid h-auto py-5 px-6"-->
              <!--                type="number"-->
              <!--                id="example-input-11"-->
              <!--                name="example-input-11"-->
              <!--                v-model="$v.form.hotel_address.$model"-->
              <!--                :state="validateState('hotel_address')"-->
              <!--                aria-describedby="input-11-live-feedback"-->
              <!--                placeholder="Alamat"-->
              <!--              ></b-form-input>-->

              <b-form-invalid-feedback id="input-11-live-feedback">
                Alamat Wajib Diisi.
              </b-form-invalid-feedback>
            </b-form-group>
          </div>

          <div class="col-6 float-right">
            <b-form-group
              id="example-input-group-5"
              label=""
              label-for="example-input-5"
            >
              <b-form-input
                class="form-control form-control-solid h-auto py-5 px-6"
                id="example-input-5"
                name="example-input-5"
                v-model="$v.form.admin_name.$model"
                :state="validateState('admin_name')"
                aria-describedby="input-5-live-feedback"
                placeholder="Nama Admin"
              ></b-form-input>

              <b-form-invalid-feedback id="input-5-live-feedback">
                Nama Admin Wajib Diisi.
              </b-form-invalid-feedback>
            </b-form-group>

            <b-form-group
              id="example-input-group-6"
              label=""
              label-for="example-input-6"
            >
              <b-form-input
                class="form-control form-control-solid h-auto py-5 px-6"
                type="number"
                id="example-input-6"
                name="example-input-6"
                v-model="$v.form.admin_phone.$model"
                :state="validateState('admin_phone')"
                aria-describedby="input-6-live-feedback"
                placeholder="No Telepon Admin"
              ></b-form-input>

              <b-form-invalid-feedback id="input-6-live-feedback">
                No Telepon Wajib Diisi.
              </b-form-invalid-feedback>
            </b-form-group>
            <b-form-group
              id="example-input-group-7"
              label=""
              label-for="example-input-7"
            >
              <b-form-input
                class="form-control form-control-solid h-auto py-5 px-6"
                type="number"
                id="example-input-7"
                name="example-input-7"
                v-model="$v.form.nik.$model"
                :state="validateState('nik')"
                aria-describedby="input-7-live-feedback"
                placeholder="NIK"
              ></b-form-input>

              <b-form-invalid-feedback id="input-6-live-feedback">
                NIK Wajib Diisi.
              </b-form-invalid-feedback>
            </b-form-group>
            <b-form-group
              id="example-input-group-8"
              label=""
              label-for="example-input-8"
            >
              <input
                type="file"
                id="file"
                ref="docs"
                v-on:change="handleDocument()"
              />
            </b-form-group>

            <b-form-group
              id="example-input-group-9"
              label=""
              label-for="example-input-9"
            >
              <input
                type="file"
                id="file"
                ref="selfie"
                v-on:change="handleSelfie()"
              />
            </b-form-group>
            <b-form-group
              id="example-input-group-10"
              label=""
              label-for="example-input-10"
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
import { email, required, minLength } from "vuelidate/lib/validators";
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
        document: null,
        admin_name: "",
        admin_phone: "",
        nik: "",
        ktp: null,
        selfie: null
      },
      loading: false,
      isError: false,
      uploadedFiles: []
    };
  },
  components: {
    // Dropzone
  },
  validations: {
    form: {
      hotel_name: {
        required,
        minLength: minLength(3)
      },
      hotel_email: {
        required,
        email
      },
      hotel_phone: {
        required,
        minLength: minLength(11)
      },
      npwp: {
        required,
        minLength: minLength(16)
      },
      admin_name: {
        required,
        minLength: minLength(3)
      },
      admin_phone: {
        required,
        minLength: minLength(11)
      },
      nik: {
        required,
        minLength: minLength(16)
      },
      hotel_address: {
        required
      }
      // password: {
      //   required,
      //   minLength: minLength(3)
      // }
    }
  },
  methods: {
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
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    resetForm() {
      this.form = {
        hotel_name: null,
        hotel_email: null,
        hotel_phone: null,
        hotel_address: null,
        hotel_image: null,
        npwp: null,
        document: null,
        admin_name: null,
        admin_phone: null,
        nik: null,
        ktp: null,
        selfie: null
      };

      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    cek() {
      console.log(this.form);
    },
    onSubmit() {
      this.form.hotel_phone = parseInt(this.form.hotel_phone);
      this.form.admin_phone = parseInt(this.form.admin_phone);
      this.form.nik = parseInt(this.form.nik);
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
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
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    })
  }
};
</script>
