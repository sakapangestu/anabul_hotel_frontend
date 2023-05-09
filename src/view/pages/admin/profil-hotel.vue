<template>
  <div>
    <!--begin::Notice-->
    <!--end::Notice-->

    <div class="card card-custom gutter-b">
      <div class="card-header card-header-tabs-line">
        <ul
          class="nav nav-dark nav-bold nav-tabs nav-tabs-line"
          role="tablist"
          ref="builder-tab"
        >
          <li class="nav-item">
            <a
              class="nav-link active"
              v-on:click="setActiveTab"
              data-tab="0"
              data-toggle="tab"
              href="#"
              role="tab"
            >
              Profile
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              v-on:click="setActiveTab"
              data-tab="1"
              data-toggle="tab"
              href="#"
              role="tab"
            >
              Change Password
            </a>
          </li>
        </ul>
      </div>

      <!--begin::Form-->
      <form class="form" v-on:submit="submit($event)">
        <div class="card-body">
          <b-tabs class="hide-tabs" v-model="tabIndex">
            <b-tab active>
              <div class="container rounded bg-white mt-5 mb-5">
                <div class="row">
                  <div class="col-md-3 border-right">
                    <div
                      class="d-flex flex-column align-items-center text-center p-3 py-5"
                    >
                      <img
                        class="rounded-circle mt-5"
                        width="150px"
                        src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                      /><span class="font-weight-bold">Edogaru</span
                      ><span class="text-black-50">edogaru@mail.com.my</span
                      ><span> </span>
                    </div>
                  </div>
                  <div class="col-md-5 border-right">
                    <div class="p-3 py-5">
                      <div
                        class="d-flex justify-content-between align-items-center mb-3"
                      >
                        <h4 class="text-right">Profile Settings</h4>
                      </div>
                      <div class="row mt-2">
                        <div class="col-md-6">
                          <label class="labels">Name</label
                          ><input
                            type="text"
                            class="form-control"
                            placeholder="first name"
                            value=""
                          />
                        </div>
                        <div class="col-md-6">
                          <label class="labels">Surname</label
                          ><input
                            type="text"
                            class="form-control"
                            value=""
                            placeholder="surname"
                          />
                        </div>
                      </div>
                      <div class="row mt-3">
                        <div class="col-md-12">
                          <label class="labels">Mobile Number</label
                          ><input
                            type="text"
                            class="form-control"
                            placeholder="enter phone number"
                            value=""
                          />
                        </div>
                        <div class="col-md-12">
                          <label class="labels">Address Line 1</label
                          ><input
                            type="text"
                            class="form-control"
                            placeholder="enter address line 1"
                            value=""
                          />
                        </div>
                        <div class="col-md-12">
                          <label class="labels">Address Line 2</label
                          ><input
                            type="text"
                            class="form-control"
                            placeholder="enter address line 2"
                            value=""
                          />
                        </div>
                        <div class="col-md-12">
                          <label class="labels">Postcode</label
                          ><input
                            type="text"
                            class="form-control"
                            placeholder="enter address line 2"
                            value=""
                          />
                        </div>
                        <div class="col-md-12">
                          <label class="labels">State</label
                          ><input
                            type="text"
                            class="form-control"
                            placeholder="enter address line 2"
                            value=""
                          />
                        </div>
                        <div class="col-md-12">
                          <label class="labels">Area</label
                          ><input
                            type="text"
                            class="form-control"
                            placeholder="enter address line 2"
                            value=""
                          />
                        </div>
                        <div class="col-md-12">
                          <label class="labels">Email ID</label
                          ><input
                            type="text"
                            class="form-control"
                            placeholder="enter email id"
                            value=""
                          />
                        </div>
                        <div class="col-md-12">
                          <label class="labels">Education</label
                          ><input
                            type="text"
                            class="form-control"
                            placeholder="education"
                            value=""
                          />
                        </div>
                      </div>
                      <div class="row mt-3">
                        <div class="col-md-6">
                          <label class="labels">Country</label
                          ><input
                            type="text"
                            class="form-control"
                            placeholder="country"
                            value=""
                          />
                        </div>
                        <div class="col-md-6">
                          <label class="labels">State/Region</label
                          ><input
                            type="text"
                            class="form-control"
                            value=""
                            placeholder="state"
                          />
                        </div>
                      </div>
                      <div class="mt-5 text-center">
                        <button
                          class="btn btn-primary profile-button"
                          type="button"
                        >
                          Save Profile
                        </button>
                      </div>
                    </div>
                  </div>
<!--                  <div class="col-md-4">-->
<!--                    <div class="p-3 py-5">-->
<!--                      <div-->
<!--                        class="d-flex justify-content-between align-items-center experience"-->
<!--                      >-->
<!--                        <span>Edit Experience</span-->
<!--                        ><span class="border px-3 p-1 add-experience"-->
<!--                          ><i class="fa fa-plus"></i>&nbsp;Experience</span-->
<!--                        >-->
<!--                      </div>-->
<!--                      <br />-->
<!--                      <div class="col-md-12">-->
<!--                        <label class="labels">Experience in Designing</label-->
<!--                        ><input-->
<!--                          type="text"-->
<!--                          class="form-control"-->
<!--                          placeholder="experience"-->
<!--                          value=""-->
<!--                        />-->
<!--                      </div>-->
<!--                      <br />-->
<!--                      <div class="col-md-12">-->
<!--                        <label class="labels">Additional Details</label-->
<!--                        ><input-->
<!--                          type="text"-->
<!--                          class="form-control"-->
<!--                          placeholder="additional details"-->
<!--                          value=""-->
<!--                        />-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
                </div>
              </div>
            </b-tab>

            <b-tab>
              <div class="form-group row">
                <label class="col-lg-3 col-form-label">
                  Desktop Fixed Header:
                </label>
                <div class="col-lg-9 col-xl-4">
                  <span class="switch switch-icon">
                    <label>
                      <input
                        type="checkbox"
                        v-model="config.header.self.fixed.desktop"
                        value="true"
                        checked=""
                      />
                      <span></span>
                    </label>
                  </span>
                  <div class="form-text text-muted">
                    Enable fixed header for desktop mode
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-lg-3 col-form-label">
                  Mobile Fixed Header:
                </label>
                <div class="col-lg-9 col-xl-4">
                  <span class="switch switch-icon">
                    <label>
                      <input
                        type="checkbox"
                        v-model="config.header.self.fixed.mobile"
                        value="true"
                        checked=""
                      />
                      <span></span>
                    </label>
                  </span>
                  <div class="form-text text-muted">
                    Enable fixed header for mobile mode
                  </div>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-lg-3 col-form-label">
                  Display Header Menu:
                </label>
                <div class="col-lg-9 col-xl-4">
                  <span class="switch switch-icon">
                    <label>
                      <input
                        type="checkbox"
                        v-model="config.header.menu.self.display"
                        value="true"
                        checked=""
                      />
                      <span></span>
                    </label>
                  </span>
                  <div class="form-text text-muted">
                    Display header menu
                  </div>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-lg-3 col-form-label">
                  Header Menu Layout:
                </label>
                <div class="col-lg-9 col-xl-4">
                  <select
                    class="form-control"
                    v-model="config.header.menu.self.layout"
                  >
                    <option value="default" selected="">Default</option>
                    <option value="tab">Tab</option>
                  </select>
                  <div class="form-text text-muted">
                    Select header menu layout style
                  </div>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-lg-3 col-form-label">
                  Header Menu Arrows:
                </label>
                <div class="col-lg-9 col-xl-4">
                  <span class="switch switch-icon">
                    <label>
                      <input
                        type="checkbox"
                        v-model="config.header.menu.self['root-arrow']"
                        value="true"
                      />
                      <span></span>
                    </label>
                  </span>
                  <div class="form-text text-muted">
                    Enable header menu root link arrows
                  </div>
                </div>
              </div>
            </b-tab>
          </b-tabs>
        </div>
      </form>
      <!--end::Form-->
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";

export default {
  name: "builder",
  components: {},
  data() {
    return {
      tabIndex: 0
    };
  },
  computed: {
    ...mapGetters(["layoutConfig"]),

    config() {
      return this.layoutConfig();
    }
  },
  mounted() {
    // set the tab from previous
    this.setActivePreviousTab();

    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Layout Builder" }]);

    this.$nextTick(() => {
      const hljs = this.$el.querySelectorAll(".hljs");
      hljs.forEach(hl => {
        hl.classList.remove("hljs");
        hl.classList.add(`language-${hl.classList[1]}`);
      });
    });
  },
  destroyed() {
    localStorage.removeItem("builderTab");
  },
  methods: {
    /**
     * Reset config
     */
    reset(event) {
      event.preventDefault();
      // remove existing saved config
      localStorage.removeItem("config");
      window.location.reload();
    },

    /**
     * Set previous tab active
     */
    setActivePreviousTab() {
      this.tabIndex = parseInt(localStorage.getItem("builderTab")) || 0;
      const links = this.$refs["builder-tab"].querySelectorAll(".nav-link");
      // remove active tab links
      for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
      }
      this.$refs["builder-tab"]
        .querySelector(`[data-tab="${this.tabIndex}"]`)
        .classList.add("active");
    },
    /**
     * Set current active on click
     * @param event
     */
    setActiveTab(event) {
      const tab = event.target.closest('[role="tablist"]');
      const links = tab.querySelectorAll(".nav-link");
      // remove active tab links
      for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
      }

      // set clicked tab index to bootstrap tab
      this.tabIndex = parseInt(event.target.getAttribute("data-tab"));

      // set current active tab
      event.target.classList.add("active");

      // keep active tab
      localStorage.setItem("builderTab", this.tabIndex);
    },

    /**
     * Submit form
     * @param event
     */
    submit(event) {
      event.preventDefault();
      // save new config to localStorage
      localStorage.setItem("config", JSON.stringify(this.config));
      window.location.reload();
    }
  }
};
</script>
