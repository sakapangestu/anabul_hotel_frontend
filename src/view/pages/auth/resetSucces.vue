<template>
  <div
    class="container-fluid bg-white"
    style="height: 100vh; padding-top: 90px;"
  >
    <div class="row my-auto">
      <div class="col-lg-6 mx-auto">
        <div class="tab-content forgot-1 text-center">
          <!--          <img-->
          <!--            src="@/assets/img/auth/forgot3.png"-->
          <!--            class="img-responsive mx-auto d-block"-->
          <!--            style="padding-bottom: 10px;"-->
          <!--          />-->
          <img src="@/assets/icon/button/app_logo.png" style="width: 300px" />
          <form class="text-center text-mantra-dark">
            <h3 class="text-center auth-forgot-1 mt-4 mb-3">
              Password reset
            </h3>

            <p class="auth-forgot-2">
              Your password has been successfully reset. <br />
              Click link below to login magically.
            </p>

            <div class="col-sm-8 mx-auto">
              <router-link
                :to="{ name: 'login' }"
                id="login-button"
                class="w-100 outline-none mt-4 login-btn d-flex justify-content-center"
              >
                Continue
              </router-link>
            </div>

            <div class="col-sm-8 mt-4 mx-auto">
              <router-link :to="{ name: 'login' }" class="auth-forgot-2">
                <i class="ri-arrow-left-line ri-mid mr-2 ri-lg"></i>
                Back to log in
              </router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "reset-pass",
  data() {
    return {};
  },
  components: {},
  methods: {
    // page1() {
    //   document.querySelector(".forgot-1").style.display = "none";
    //   document.querySelector(".forgot-2").style.display = "";
    // },
    // page2() {
    //   document.querySelector(".forgot-1").style.display = "";
    //   document.querySelector(".forgot-2").style.display = "none";
    // }
  },
  mounted() {}
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

.login-btn {
  background-color: #fd8833;
  color: #fff;
  border-radius: 5px;
  padding-top: 15px;
  padding-bottom: 15px;
  border: 0;
  font-family: "Source Sans Pro";
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
}

.login-btn:hover {
  background-color: #ff6a00;
  color: #fff;
}

.login-btn:focus {
  background-color: #fd8833;
  color: #fff;
}

.login-btn:active {
  background-color: #fd8833;
  color: #fff;
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
