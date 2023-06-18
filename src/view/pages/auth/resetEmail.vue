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
              Forgot Password?
            </h3>

            <p class="text-muted font-weight-semi-bold mr-5 ml-5">
              Jangan khawatir, kami akan mengirimkan petunjuk penyetelan ulang
              <br />
              kepada Anda.
            </p>

            <div class="mt-2 col-sm-8 mx-auto">
              <div class="form-group">
                <label for="forgot-email" class="auth-forgot-2 float-left "
                  >Email</label
                >
                <input
                  type="email"
                  class="form-control auth-border-clr pt-4 pb-4 pl-3"
                  id="forgot-email"
                  aria-describedby="emailHelp"
                  placeholder="Masukkan alamat email anda"
                  v-model="form.email"
                  required
                />
              </div>
            </div>

            <div class="col-sm-8 mx-auto">
              <button
                type="submit"
                id="submit-email"
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
                  Reset Password
                </span>
              </button>
            </div>

            <div class="col-sm-8 mt-3 mx-auto">
              <router-link :to="{ name: 'login' }" class="auth-forgot-2">
                <i class="ri-arrow-left-line ri-mid mr-2 ri-lg"></i>
                Back to log in
              </router-link>
            </div>
          </form>
        </div>
        <div class="forgot-2 text-center" style="display: none">
          <!--          <img-->
          <!--            src="@/assets/img/auth/forgot2.png"-->
          <!--            class="img-responsive mx-auto d-block"-->
          <!--            style="padding-bottom: 10px;"-->
          <!--          />-->
          <img src="@/assets/icon/button/app_logo.png" style="width: 350px" />
          <div class="text-center">
            <h3 class="text-center auth-forgot-1 mt-4 mb-2">
              Check your email
            </h3>

            <p class="auth-forgot-2">
              We sent a password reset link to <br />
              <strong>{{ form.email }}</strong>
            </p>

            <div class="mt-2 col-sm-8 mx-auto">
              <a
                href="https://mail.google.com/"
                target="_blank"
                class="btn btn-orange w-100 reset-btn"
              >
                Open email app
              </a>
            </div>

            <p class="auth-forgot-2 mt-3">
              Didn’t receive the email?
              <span class="orange pointer">Click to resend</span>
            </p>

            <div class="col-sm-8 mt-4 mx-auto">
              <router-link :to="{ name: 'login' }" class="auth-forgot-2">
                <i class="ri-arrow-left-line ri-mid ri-lg"></i>
                Back to log in
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
// import { LOGOUT } from "@/core/services/store/auth.module";
import Swal from "sweetalert2";
export default {
  name: "reset-pass",
  data() {
    return {
      loading: false,
      email: "",
      form: {
        email: ""
      }
    };
  },
  components: {},
  mounted() {
    if (this.isAuthenticated) {
      this.$router.push({ name: "admin-dashboard" });
    }
  },
  computed: {
    ...mapGetters(["isAuthenticated"])
  },
  methods: {
    submitReset() {
      const loginBtn = document.querySelector("#submit-email");
      loginBtn.classList.add("disabled1");

      // dummy delay
      setTimeout(() => {
        console.log(this.form.email);
        // send login request
        this.$api
          .post(`auth/forgotpass`, this.form)
          .then(res => {
            if (res) {
              this.loading = false;
              loginBtn.classList.remove("disabled1");
              document.querySelector(".forgot-1").style.display = "none";
              document.querySelector(".forgot-2").style.display = "";
              localStorage.setItem("forgotEmail", this.form.email);
              console.log(localStorage.getItem("forgotEmail"));
            }
          })
          .catch(() => {
            this.loading = false;
            loginBtn.classList.remove("disabled1");
            Swal.fire({
              icon: "error",
              title: "Email not found!",
              text: "Make sure you enter the correct email",
              width: 400,
              confirmButtonText: "OK",
              confirmButtonColor: "#164875"
            });
          });

        loginBtn.classList.remove("spinner", "spinner-light", "spinner-right");
      }, 2000);
    }
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
</style>
