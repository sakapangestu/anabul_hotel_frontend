<template>
  <div class="topbar-item">
    <div
      class="btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2"
      id="kt_quick_user_toggle"
    >
      <span
        class="text-muted font-weight-bold font-size-base d-none d-md-inline mr-1"
      >
        Hi,
      </span>
      <span
        class="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3"
      >
        {{ name }}
      </span>
      <span class="symbol symbol-35 symbol-light-success">
        <img
          v-if="image"
          alt="Pic"
          :src="`http://localhost:8080/user/profile/` + image"
        />
        <span v-else class="symbol-label font-size-h5 font-weight-bold">
          {{ name.charAt(0) }}
        </span>
      </span>
    </div>

    <div
      id="kt_quick_user"
      ref="kt_quick_user"
      class="offcanvas offcanvas-right p-10"
    >
      <!--begin::Header-->
      <div
        class="offcanvas-header d-flex align-items-center justify-content-between pb-5"
      >
        <h3 class="font-weight-bold m-0">
          User Profile
          <!--          <small class="text-muted font-size-sm ml-2">12 messages</small>-->
        </h3>
        <a
          href="#"
          class="btn btn-xs btn-icon btn-light btn-hover-primary"
          id="kt_quick_user_close"
        >
          <i class="ki ki-close icon-xs text-muted"></i>
        </a>
      </div>
      <!--end::Header-->

      <!--begin::Content-->
      <perfect-scrollbar
        class="offcanvas-content pr-5 mr-n5 scroll"
        style="max-height: 90vh; position: relative;"
      >
        <!--begin::Header-->
        <div class="d-flex align-items-center mt-5">
          <div class="symbol symbol-100 mr-5">
            <img v-if="image" class="symbol-label" :src="picture" alt="" />
            <img
              v-else
              class="symbol-label"
              src="@/assets/image/default_user.png"
              alt=""
            />
            <i class="symbol-badge bg-success"></i>
          </div>
          <div class="d-flex flex-column">
            <a
              href="#"
              class="font-weight-bold font-size-h5 text-dark-75 text-hover-primary"
            >
              {{ name }}
            </a>
            <div class="text-muted mt-1">
              <b-badge variant="success" v-if="this.role === 'Super Admin'"
                >Super Admin
              </b-badge>
              <b-badge variant="success" v-if="this.role === 'Admin'"
                >Admin
              </b-badge>
            </div>
            <div class="navi mt-2">
              <a href="#" class="navi-item">
                <span class="navi-link p-0 pb-2">
                  <span class="navi-icon mr-1">
                    <span class="svg-icon svg-icon-lg svg-icon-primary">
                      <!--begin::Svg Icon-->
                      <inline-svg
                        src="media/svg/icons/Communication/Mail-notification.svg"
                      />
                      <!--end::Svg Icon-->
                    </span>
                  </span>
                  <span class="navi-text text-muted text-hover-primary">
                    {{ email }}
                  </span>
                </span>
              </a>
            </div>
            <button class="btn btn-light-primary btn-bold" @click="onLogout">
              Sign out
            </button>
          </div>
        </div>
        <!--end::Header-->
        <div class="separator separator-dashed mt-8 mb-5"></div>
        <!--begin::Nav-->
        <div class="navi navi-spacer-x-0 p-0">
          <!--end:Item-->
          <!--begin::Item-->
          <!--          <router-link-->
          <!--            to="/builder"-->
          <!--            @click.native="closeOffcanvas"-->
          <!--            href="#"-->
          <!--            class="navi-item"-->
          <!--          >-->
          <!--            <div class="navi-link">-->
          <!--              <div class="symbol symbol-40 bg-light mr-3">-->
          <!--                <div class="symbol-label">-->
          <!--                  <span class="svg-icon svg-icon-md svg-icon-warning">-->
          <!--                    &lt;!&ndash;begin::Svg Icon&ndash;&gt;-->
          <!--                    <inline-svg src="media/svg/icons/Shopping/Chart-bar1.svg" />-->
          <!--                    &lt;!&ndash;end::Svg Icon&ndash;&gt;-->
          <!--                  </span>-->
          <!--                </div>-->
          <!--              </div>-->
          <!--              <div class="navi-text">-->
          <!--                <div class="font-weight-bold">My Messages</div>-->
          <!--                <div class="text-muted">Inbox and tasks</div>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--          </router-link>-->
          <!--end:Item-->
          <!--begin::Item-->
          <!--          <router-link-->
          <!--            to="/builder"-->
          <!--            @click.native="closeOffcanvas"-->
          <!--            href="#"-->
          <!--            class="navi-item"-->
          <!--          >-->
          <!--            <div class="navi-link">-->
          <!--              <div class="symbol symbol-40 bg-light mr-3">-->
          <!--                <div class="symbol-label">-->
          <!--                  <span class="svg-icon svg-icon-md svg-icon-danger">-->
          <!--                    &lt;!&ndash;begin::Svg Icon&ndash;&gt;-->
          <!--                    <inline-svg src="media/svg/icons/Files/Selected-file.svg" />-->
          <!--                    &lt;!&ndash;end::Svg Icon&ndash;&gt;-->
          <!--                  </span>-->
          <!--                </div>-->
          <!--              </div>-->
          <!--              <div class="navi-text">-->
          <!--                <div class="font-weight-bold">My Activities</div>-->
          <!--                <div class="text-muted">Logs and notifications</div>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--          </router-link>-->
          <!--end:Item-->
          <!--begin::Item-->
          <!--          <router-link-->
          <!--            to="/builder"-->
          <!--            @click.native="closeOffcanvas"-->
          <!--            href="#"-->
          <!--            class="navi-item"-->
          <!--          >-->
          <!--            <div class="navi-link">-->
          <!--              <div class="symbol symbol-40 bg-light mr-3">-->
          <!--                <div class="symbol-label">-->
          <!--                  <span class="svg-icon svg-icon-md svg-icon-primary">-->
          <!--                    &lt;!&ndash;begin::Svg Icon&ndash;&gt;-->
          <!--                    <inline-svg-->
          <!--                      src="media/svg/icons/Communication/Mail-opened.svg"-->
          <!--                    />-->
          <!--                    &lt;!&ndash;end::Svg Icon&ndash;&gt;-->
          <!--                  </span>-->
          <!--                </div>-->
          <!--              </div>-->
          <!--              <div class="navi-text">-->
          <!--                <div class="font-weight-bold">My Tasks</div>-->
          <!--                <div class="text-muted">latest tasks and projects</div>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--          </router-link>-->
          <!--end:Item-->
        </div>
        <!--end::Nav-->
        <!--        <div class="separator separator-dashed my-7"></div>-->
        <!--begin::Notifications-->
        <!--        <div>-->
        <!--          &lt;!&ndash;begin:Heading&ndash;&gt;-->
        <!--          <h5 class="mb-5">Recent Notifications</h5>-->
        <!--          &lt;!&ndash;end:Heading&ndash;&gt;-->
        <!--          <template v-for="(item, i) in list">-->
        <!--            &lt;!&ndash;begin::Item &ndash;&gt;-->
        <!--            <div-->
        <!--              class="d-flex align-items-center rounded p-5 gutter-b"-->
        <!--              v-bind:class="`bg-light-${item.type}`"-->
        <!--              v-bind:key="i"-->
        <!--            >-->
        <!--              <span-->
        <!--                class="svg-icon mr-5"-->
        <!--                v-bind:class="`svg-icon-${item.type}`"-->
        <!--              >-->
        <!--                <span class="svg-icon svg-icon-lg">-->
        <!--                  &lt;!&ndash;begin::Svg Icon&ndash;&gt;-->
        <!--                  <inline-svg :src="item.svg" />-->
        <!--                  &lt;!&ndash;end::Svg Icon&ndash;&gt;-->
        <!--                </span>-->
        <!--              </span>-->
        <!--              <div class="d-flex flex-column flex-grow-1 mr-2">-->
        <!--                <a-->
        <!--                  href="#"-->
        <!--                  class="font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1"-->
        <!--                >-->
        <!--                  {{ item.title }}-->
        <!--                </a>-->
        <!--                <span class="text-muted font-size-sm">-->
        <!--                  {{ item.desc }}-->
        <!--                </span>-->
        <!--              </div>-->
        <!--              <span-->
        <!--                class="font-weight-bolder py-1 font-size-lg"-->
        <!--                v-bind:class="`text-${item.type}`"-->
        <!--              >-->
        <!--                {{ item.alt }}-->
        <!--              </span>-->
        <!--            </div>-->
        <!--            &lt;!&ndash;end::Item &ndash;&gt;-->
        <!--          </template>-->
        <!--        </div>-->
        <!--end::Notifications-->
      </perfect-scrollbar>
      <!--end::Content-->
    </div>
  </div>
</template>

<style lang="scss" scoped>
#kt_quick_user {
  overflow: hidden;
}
</style>

<script>
// import { LOGOUT } from "@/core/services/store/auth.module";
import KTLayoutQuickUser from "@/assets/js/layout/extended/quick-user.js";
// import KTOffcanvas from "@/assets/js/components/offcanvas.js";
import { getName, getImage, getRole, getEmail } from "@/service/jwt.service";

export default {
  name: "KTQuickUser",
  data() {
    return {
      name: "",
      image: "",
      role: "",
      email: ""
    };
  },
  mounted() {
    // Init Quick User Panel
    KTLayoutQuickUser.init(this.$refs["kt_quick_user"]);
    this.name = getName();
    this.image = getImage();
    this.role = getRole();
    this.email = getEmail();
    this.fetchProfilAdmin();
    console.log(this.image);
  },
  methods: {
    onLogout() {
      this.$api
        .post("auth/logout")
        .then(res => {
          console.log(res);
          localStorage.clear();
          this.$router.push({ name: "login" });
        })
        .catch(() => {
          localStorage.clear();
          this.$router.push({ name: "login" });
        });
      // this.$store
      //   .dispatch(LOGOUT)
      //   .then(() => this.$router.push({ name: "login" }));
    },
    // closeOffcanvas() {
    //   new KTOffcanvas(KTLayoutQuickUser.getElement()).hide();
    // }
    fetchProfilAdmin() {
      this.$api
        .get(`user/profile`)
        .then(res => {
          // console.log(res)
          this.image = res.data.data ? res.data.data.image : {};
          // this.profiladmin.phone = parseInt(this.profiladmin.phone)
          // this.page = res.data.data.paginate.page;
          // this.perPage = res.data.data.paginate.perPage;
          // this.totalData = res.data.data.paginate.totalData;
          // this.totalPage = res.data.data.paginate.totalPage;
        })
        .catch(err => {
          console.error(err);
          // alert(err);
        });
    }
  },
  computed: {
    picture() {
      return `http://localhost:8080/user/profile/` + this.image;
    }
  }
};
</script>
