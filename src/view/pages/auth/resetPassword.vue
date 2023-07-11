<template>
  <div
    class="container-fluid bg-white"
    style="height: 100vh; padding-top: 10px;"
  >
    <div class="row my-auto">
      <div class="col-lg-6 mx-auto">
        <div class="tab-content text-center">
          <!--          <img-->
          <!--            src="@/assets/img/auth/forgot1.png"-->
          <!--            class="img-responsive mx-auto d-block"-->
          <!--            style="padding-bottom: 10px;"-->
          <!--          />-->
          <img src="@/assets/icon/button/app_logo.png" style="width: 300px" />
          <form
            @submit.prevent="submitPassword"
            class="text-center text-mantra-dark"
          >
            <h3 class="text-center auth-forgot-1 mt-2 mb-2">
              Atur password baru
            </h3>

            <p class="auth-forgot-2">
              Kata sandi baru Anda harus berbeda dengan kata sandi yang <br />
              digunakan sebelumnya.
            </p>

            <div class="mt-2 col-sm-8 mx-auto">
              <div class="form-group">
                <label class="float-left">Password Baru</label>
                <input
                  type="password"
                  class="form-control form-control-solid form-control-lg"
                  id="new-pw"
                  placeholder="Masukkan password baru anda"
                  v-model="form.password"
                  @keyup="validateInput"
                  required
                />
                <span class="form-text text-muted float-left"
                  >Masukkan Password Baru</span
                >
              </div>
              <!--              <div class="form-group">-->
              <!--                <label for="new-pw" class="auth-forgot-3 float-left"-->
              <!--                  >New Password</label-->
              <!--                >-->
              <!--                <input-->
              <!--                  type="password"-->
              <!--                  class="form-control auth-border-clr pt-4 pb-4 pl-3"-->
              <!--                  id="new-pw"-->
              <!--                  placeholder="Masukkan password baru anda"-->
              <!--                  v-model="form.password"-->
              <!--                  @keyup="validateInput"-->
              <!--                  required-->
              <!--                />-->
              <!--                <small class="float-left auth-forgot-2 my-1"-->
              <!--                  >Must be at least 8 characters.</small-->
              <!--                >-->
              <!--              </div>-->
              <div class="form-group">
                <label class="float-left">Konfirmasi Password</label>
                <input
                  type="password"
                  class="form-control form-control-solid form-control-lg"
                  id="conf-pw"
                  placeholder="Masukkan password baru anda"
                  v-model="form.passwordConfirm"
                  @keyup="validateInput"
                  required
                />
                <span class="form-text text-muted float-left"
                  >Masukkan Konfirmasi Password</span
                >
              </div>
              <!--              <div class="form-group">-->
              <!--                <label for="conf-pw" class="auth-forgot-3 float-left">-->
              <!--                  Confirm New Password</label-->
              <!--                >-->
              <!--                <input-->
              <!--                  type="password"-->
              <!--                  class="form-control auth-border-clr pt-4 pb-4 pl-3"-->
              <!--                  id="conf-pw"-->
              <!--                  placeholder="Masukkan password baru anda"-->
              <!--                  v-model="form.passwordConfirm"-->
              <!--                  @keyup="validateInput"-->
              <!--                  required-->
              <!--                />-->
              <!--              </div>-->
            </div>

            <div class="col-sm-8 mx-auto">
              <button
                id="submit-password"
                ref="loading_submit"
                class="btn btn-orange w-100 outline-none mt-4 reset-btn"
                type="submit"
                disabled
              >
                Submit
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
      </div>
    </div>
  </div>
</template>

<script>
// import Swal from "sweetalert2";

export default {
  name: "reset-confirm",
  data() {
    return {
      error: "",
      loading: false,
      form: {
        password: "",
        passwordConfirm: "",
        email: localStorage.getItem("forgotEmail"),
        token: this.$route.query.token ? this.$route.query.token : null
      }
    };
  },
  components: {},
  mounted() {
    console.log(localStorage.getItem("forgotEmail"));
  },
  methods: {
    submitPassword() {
      const submitButton = this.$refs["loading_submit"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");
      // dummy delay
      setTimeout(() => {
        // send login request
        this.$api
          .put(`auth/resetpass`, this.form)
          .then(res => {
            // console.log(res.data.data.token)
            if (res.status === 200) {
              // console.log(res.data.data.role);
              this.isError = false;
              this.loading = false;
              // localStorage.setItem("token", res.data.data.token);
              this.$router.push({ name: "resetSucces" });
              submitButton.classList.remove(
                "spinner",
                "spinner-light",
                "spinner-right"
              );
              // this.$store.commit("setAuth", res.data);
            } else {
              this.isError = true;
              this.loading = false;
              submitButton.classList.remove(
                "spinner",
                "spinner-light",
                "spinner-right"
              );
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
            submitButton.classList.remove(
              "spinner",
              "spinner-light",
              "spinner-right"
            );
          });
      }, 2000);
    },
    validateInput() {
      const pass = document.querySelector("#new-pw").value;
      const confPw = document.querySelector("#conf-pw").value;
      const validPass = /^.{8,64}$/;

      if (
        pass === confPw &&
        pass !== "" &&
        confPw !== "" &&
        validPass.test(pass)
      ) {
        document.querySelector("#submit-password").removeAttribute("disabled");
        document.querySelector("#submit-password").classList.remove("disabled");
        this.ok = true;
      } else {
        document
          .querySelector("#submit-password")
          .setAttribute("disabled", "disabled");
        document.querySelector("#submit-password").classList.add("disabled");
        this.ok = false;
      }
    }
  }
};
</script>

<style>
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

.auth-forgot-3 {
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #757575;
}

.auth-help {
  font-family: "Source Sans Pro";
  font-style: normal;
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
  background-color: #fd8833;
  color: #ffffff;
  border-radius: 5px;
  padding-top: 15px;
  padding-bottom: 15px;
  border: 0;
  font-family: "Source Sans Pro";
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
}

.reset-btn:disabled {
  background-color: #ffa869;
  color: #fff;
}

::-webkit-input-placeholder {
  /* Edge */
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height, or 129% */
  color: #c4c4c4;
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height, or 129% */
  color: #c4c4c4;
}

::placeholder {
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height, or 129% */
  color: #c4c4c4;
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
