<template>
  <div class="row">
    <div class="col-12">
      <div class="row">
        <div class="col-md-5 ml-2 mb-5 mt-4 pl-1 pr-1 search-section">
          <div class="input-group">
            <div class="input-group-prepend bg-white">
              <span class="input-group-text input-search" id="basic-addon1">
                <div class="font-12">
                  <img
                    src="@/assets/image/search.png"
                    alt="search"
                    class="search-icon"
                  />
                </div>
              </span>
            </div>
            <input
              type="text"
              class="form-control search-input"
              placeholder="Search pet Hotel"
              v-model="search"
              @input="fetchHotel()"
            />
          </div>
        </div>
        <div class="ml-15 col-6 mt-4">
          <div>
            <!--            <b-button-->
            <!--              id="show-btn"-->
            <!--              @click="showModal"-->
            <!--              variant="dark"-->
            <!--              class="float-right"-->
            <!--              ><i class="fa fa-plus-circle" aria-hidden="true"></i> Create Kelas-->
            <!--              Hewan</b-button-->
            <!--            >-->
            <b-modal ref="my-modal" hide-footer :title="modalTitle">
              <b-form ref="form" @submit.prevent="handleOk">
                <b-form-group
                  label="Name Hotel"
                  label-for="name-input"
                  invalid-feedback="Name is required"
                  :state="nameState"
                >
                  <b-form-input
                    id="name-input"
                    v-model="addForm.name"
                    :state="nameState"
                    :disabled="isDetail"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  label="Email Hotel"
                  label-for="name-input"
                  invalid-feedback="Name is required"
                  :state="nameState"
                >
                  <b-form-input
                    type="email"
                    id="name-input"
                    v-model="addForm.email"
                    :state="nameState"
                    :disabled="isDetail"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  label="No Hp Hotel"
                  label-for="name-input"
                  invalid-feedback="Name is required"
                  :state="nameState"
                >
                  <b-form-input
                    type="number"
                    id="name-input"
                    v-model="addForm.phone"
                    :state="nameState"
                    :disabled="isDetail"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  label="Provinsi Hotel"
                  label-for="name-input"
                  invalid-feedback="class is required"
                  :state="nameState"
                >
                  <b-form-select
                    :disabled="isDetail"
                    v-model="addForm.province_id"
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
                  invalid-feedback="class is required"
                  :state="nameState"
                >
                  <b-form-select
                    :disabled="isDetail"
                    v-model="addForm.city_id"
                    @change="fetchDistrict"
                    :label-field="cities.name"
                    value-field="id_city"
                    text-field="name"
                    :options="cities"
                  ></b-form-select>
                </b-form-group>
                <b-form-group
                  label="Kecematan Hotel"
                  label-for="name-input"
                  invalid-feedback="class is required"
                  :state="nameState"
                >
                  <b-form-select
                    :disabled="isDetail"
                    v-model="addForm.district_id"
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
                  invalid-feedback="class is required"
                  :state="nameState"
                >
                  <b-form-select
                    :disabled="isDetail"
                    v-model="addForm.subdistrict_id"
                    :label-field="subdistricts.name"
                    value-field="id_subdistrict"
                    text-field="name"
                    :options="subdistricts"
                  ></b-form-select>
                </b-form-group>
                <b-form-group
                  label="Alamat"
                  label-for="name-input"
                  invalid-feedback="species is required"
                  :state="nameState"
                >
                  <b-form-textarea
                    id="textarea"
                    v-model="addForm.address"
                    placeholder="Enter something..."
                    :state="nameState"
                    rows="3"
                    max-rows="6"
                    :disabled="isDetail"
                    required
                  ></b-form-textarea>
                </b-form-group>
                <b-form-group
                  label="Waktu Buka"
                  label-for="name-input"
                  invalid-feedback="species is required"
                  :state="nameState"
                >
                  <date-picker
                    class="w-100"
                    :disabled="isDetail"
                    id="name-input"
                    v-model="addForm.open_time"
                    format="HH:mm"
                    value-type="format"
                    type="time"
                  ></date-picker>
                </b-form-group>
                <b-form-group
                  label="Waktu Tutup"
                  label-for="name-input"
                  invalid-feedback="species is required"
                  :state="nameState"
                >
                  <date-picker
                    class="w-100"
                    :disabled="isDetail"
                    id="name-input"
                    v-model="addForm.close_time"
                    format="HH:mm"
                    value-type="format"
                    type="time"
                  ></date-picker>
                </b-form-group>
                <b-form-group
                  label="Diskripsi Hotel"
                  label-for="name-input"
                  invalid-feedback="species is required"
                  :state="nameState"
                >
                  <b-form-textarea
                    id="textarea"
                    v-model="addForm.description"
                    placeholder="Enter something..."
                    :state="nameState"
                    rows="3"
                    max-rows="6"
                    :disabled="isDetail"
                    required
                  ></b-form-textarea>
                </b-form-group>
                <!--                <b-form-group-->
                <!--                  label="Syarat Penitipan"-->
                <!--                  label-for="name-input"-->
                <!--                  invalid-feedback="species is required"-->
                <!--                  :state="nameState"-->
                <!--                >-->
                <!--                  <b-form-textarea-->
                <!--                    id="textarea"-->
                <!--                    v-model="addForm.requirement"-->
                <!--                    placeholder="Enter something..."-->
                <!--                    :state="nameState"-->
                <!--                    rows="3"-->
                <!--                    max-rows="6"-->
                <!--                    :disabled="isDetail"-->
                <!--                    required-->
                <!--                  ></b-form-textarea>-->
                <!--                </b-form-group>-->
                <!--                <b-form-group-->
                <!--                  label="Peraturan"-->
                <!--                  label-for="name-input"-->
                <!--                  invalid-feedback="species is required"-->
                <!--                  :state="nameState"-->
                <!--                >-->
                <!--                  <b-form-textarea-->
                <!--                    id="textarea"-->
                <!--                    v-model="addForm.regulation"-->
                <!--                    placeholder="Enter something..."-->
                <!--                    :state="nameState"-->
                <!--                    rows="3"-->
                <!--                    max-rows="6"-->
                <!--                    :disabled="isDetail"-->
                <!--                    required-->
                <!--                  ></b-form-textarea>-->
                <!--                </b-form-group>-->
                <b-form-group
                  label="Gambar Hotel "
                  label-for="name-input"
                  invalid-feedback="Gambar Harus di Isi"
                  :state="nameState"
                >
                  <b-link
                    target="_blank"
                    :href="
                      `http://localhost:8080/hotel/profile/` + addForm.image
                    "
                  >
                    <div class="table-img1">
                      <img
                        id="image"
                        :src="
                          `http://localhost:8080/hotel/profile/` + addForm.image
                        "
                        alt="Admin Pet"
                      />
                    </div>
                  </b-link>
                  <input
                    type="file"
                    id="name-input"
                    ref="image"
                    v-on:change="handleImage()"
                  />
                </b-form-group>
                <b-form-group
                  label="NPWP"
                  label-for="name-input"
                  invalid-feedback="NPWP Harus di isi"
                  :state="nameState"
                >
                  <b-form-input
                    type="number"
                    id="name-input"
                    v-model="addForm.npwp"
                    :state="nameState"
                    :disabled="isDetail"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  label="SIUP/AKTA/NIB"
                  type="file"
                  label-for="name-input"
                  invalid-feedback="SIUP/AKTA/NIB Harus di Isi"
                  :state="nameState"
                >
                  <b-link
                    target="_blank"
                    :href="
                      `http://localhost:8080/hotel/document/` + addForm.document
                    "
                    :state="nameState"
                    required
                  >
                    {{
                      addForm.documentName
                        ? addForm.documentName
                        : addForm.document
                    }}
                  </b-link>
                  <br />
                  <input
                    type="file"
                    id="name-input"
                    ref="docs"
                    v-on:change="handleDocument()"
                  />
                </b-form-group>
                <b-form-group label="Status" v-slot="{ ariaDescribedby }">
                  <b-form-radio-group
                    v-model="addForm.status"
                    :options="options"
                    :disabled="isDetail"
                    :aria-describedby="ariaDescribedby"
                    name="radios-stacked"
                    stacked
                  ></b-form-radio-group>
                </b-form-group>
                <b-form-group
                  label="Keterangan Tidak Aktif"
                  label-for="name-input"
                  invalid-feedback="Name is required"
                  :state="nameState"
                  v-if="addForm.status === 'Tidak Aktif'"
                >
                  <b-form-input
                    id="name-input"
                    type="text"
                    v-model="addForm.inactive_reason"
                  ></b-form-input>
                </b-form-group>
                <div
                  class="btn btn-primary"
                  @click="changeStatusReject(addForm)"
                  ref="kt_login_signup_submit"
                >
                  Kirim Email
                </div>
                <b-button
                  class="mt-3"
                  type="submit"
                  v-if="!isDetail"
                  variant="primary"
                  block
                  >Submit</b-button
                >
              </b-form>
            </b-modal>
          </div>
        </div>
      </div>
      <KTCard ref="preview" v-bind:title="title" v-bind:example="true">
        <template v-slot:body>
          <div>
            <b-table-simple>
              <b-thead>
                <b-tr>
                  <b-th>No</b-th>
                  <b-th>Image</b-th>
                  <b-th
                    >Hotel Nama
                    <!--                    <i class="fas fa-sort ml-3" @click="fetchSort"></i-->
                  </b-th>
                  <b-th>Hotel Email</b-th>
                  <b-th>Provinsi</b-th>
                  <b-th>Kota</b-th>
                  <b-th>Kecamatan</b-th>
                  <b-th>Kelurahan</b-th>
                  <b-th>Status</b-th>
                  <b-th>Action</b-th>
                </b-tr>
              </b-thead>
              <b-tbody>
                <b-tr v-for="(item, index) in petHotel" :key="item.id">
                  <b-td style="width: 6em;">
                    {{ ++index + (page - 1) * perPage }}
                  </b-td>
                  <b-td v-if="item.image">
                    <div class="table-img">
                      <img
                        :src="
                          `http://localhost:8080/hotel/profile/` + item.image
                        "
                        alt="pet hotel"
                      />
                    </div>
                  </b-td>
                  <b-td v-else>
                    <div class="table-img">
                      <img src="@/assets/image/default_pet.png" />
                    </div>
                  </b-td>
                  <b-td
                    >{{ item.name }} <br />
                    {{ item.phone }}</b-td
                  >
                  <b-td>{{ item.email }}</b-td>
                  <b-td v-if="item.province">{{ item.province.name }}</b-td>
                  <b-td v-else>-</b-td>
                  <b-td v-if="item.city">{{ item.city.name }}</b-td>
                  <b-td v-else>-</b-td>
                  <b-td v-if="item.district">{{ item.district.name }} </b-td>
                  <b-td v-else>-</b-td>
                  <b-td v-if="item.subdistrict"
                    >{{ item.subdistrict.name }}
                  </b-td>
                  <b-td v-else>-</b-td>
                  <b-td>
                    <b-badge variant="success" v-if="item.status === 'Aktif'">
                      Aktif</b-badge
                    >
                    <b-badge variant="success" v-if="item.status === 'Tidak Aktif'">
                      Tidak Aktif</b-badge
                    >
                  </b-td>
                  <b-td class="action-cols">
                    <span class="action-button">
                      <img
                        class="pointer"
                        style="width: 20px"
                        @click="onDetail(item)"
                        src="@/assets/icon/button/view.png"
                        alt="detail"
                      />
                    </span>
                    <!--                    <b-button variant="primary" @click="onEdit"-->
                    <!--                      >Detail</b-button-->
                    <!--                    >-->
                    <span class="action-button">
                      <img
                        class="pointer"
                        style="width: 20px"
                        @click="onEdit(item)"
                        src="@/assets/icon/button/edit.png"
                        alt="edit"
                      />
                    </span>
                    <span class="action-button">
                      <img
                        class="pointer"
                        style="width: 20px"
                        @click="onDelete(item.id_hotel)"
                        src="@/assets/icon/button/delete.png"
                        alt="del"
                      />
                    </span>
                  </b-td>
                </b-tr>
              </b-tbody>
            </b-table-simple>
          </div>
        </template>
      </KTCard>
      <template>
        <div class="row">
          <div class="col-1">
            <b-form-select
              v-model="perPage"
              :options="[5, 10, 25]"
              class="per-page"
              @change="fetchHotel()"
            >
            </b-form-select>
          </div>
          <div class="col-2 mt-3">
            <div class="overflow-auto float-left">
              <div>
                Showing {{ countSection.startSection }} to
                {{ countSection.endSection }} of {{ totalData }} Entries
              </div>
            </div>
          </div>
          <div class="col">
            <nav aria-label="..." class="float-right">
              <ul class="pagination">
                <li class="page-item" :class="{ disabled: page === 1 }">
                  <a
                    class="page-link"
                    href="#"
                    tabindex="-1"
                    aria-disabled="true"
                    @click="fetchHotel(page - 1)"
                    >Previous</a
                  >
                </li>

                <li
                  class="page-item"
                  :class="{ active: pg === page }"
                  v-for="pg in totalPage"
                  :key="pg.id"
                >
                  <a class="page-link" href="#" @click="fetchHotel(pg)">{{
                    pg
                  }}</a>
                </li>

                <li class="page-item" :class="{ disabled: page === totalPage }">
                  <a class="page-link" href="#" @click="fetchHotel(page + 1)"
                    >Next</a
                  >
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import KTCard from "@/view/content/Card.vue";
// import { required } from "vuelidate/lib/validators";
import Swal from "sweetalert2";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
export default {
  components: {
    KTCard,
    DatePicker
  },
  data() {
    return {
      search: "",
      sortBy: "",
      orderBy: "",
      page: 1,
      title: "",
      perPage: 10,
      totalData: 0,
      totalPage: 0,
      nameState: null,
      isEdit: null,
      isDetail: null,
      submittedNames: [],
      loading: false,
      modalTitle: "",
      // Note 'isActive' is left out and will not appear in the rendered table
      petHotel: [],
      provinces: [],
      cities: [],
      districts: [],
      subdistricts: [],
      options: [
        { text: "Aktif", value: "Aktif" },
        { text: "Tidak Aktif", value: "Tidak Aktif" }
      ],
      addForm: {
        id_hotel: "",
        name: "",
        email: "",
        province_id: "",
        city_id: "",
        district_id: "",
        subdistrict_id: "",
        address: "",
        phone: "",
        image: null,
        document: null,
        npwp: null,
        latitude: "",
        longitude: "",
        open_time: "",
        close_time: "",
        map_link: "",
        // requirement: "",
        description: "",
        status: "",
        inactive_reason: ""
        // regulation: ""
      }
      // validations: {
      //   addForm: {
      //     name: { required }
      //   }
      // }
    };
  },
  methods: {
    resetProvince() {
      this.addForm.city_id = "";
      this.addForm.subdistrict_id = "";
      this.addForm.district_id = "";
      this.fetchCity(this.addForm.province_id);
    },
    handleDocument() {
      // console.log("DOKUMEN");
      // console.log(this.$refs.docs.files[0]);
      this.addForm.document = this.$refs.docs.files[0];
      this.addForm.documentName = this.$refs.docs.files[0].name;
    },
    // changeStatus(data) {
    //   if (data.status !== "Tidak Aktif") {
    //     this.$api
    //       .put(`hotel/status`, {
    //         id_hotel: data.id_hotel,
    //         status: data.status,
    //         inactive_reason: ""
    //       })
    //       .then(res => {
    //         if (res.status === 200) {
    //           // this.hideModal();
    //           this.fetchHotel();
    //           Swal.fire({
    //             icon: "success",
    //             title: "Ubah Status Berhasil",
    //             text: "Email Konfirmasi Sudah Dikirim Kepada Pendaftar",
    //             width: "28em",
    //             showCloseButton: false,
    //             showCancelButton: false,
    //             timer: 1500,
    //             showConfirmButton: false
    //           });
    //           // this.$bvModal.hide("modal-category");
    //           // this.toastAlert("update");
    //         }
    //       });
    //   }
    // },
    changeStatusReject() {
      const submitButton = this.$refs["kt_login_signup_submit"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");
      console.log(this.addForm.status);
      setTimeout(() => {
        if (this.addForm.status === "Tidak Aktif") {
          this.$api
            .put(`hotel/status`, {
              id_hotel: this.addForm.id_hotel,
              status: this.addForm.status,
              inactive_reason: this.addForm.inactive_reason
            })
            .then(res => {
              if (res.status === 200) {
                // console.log(res.status);
                this.loading = false;
                this.hideModal();
                this.fetchHotel();
                Swal.fire({
                  icon: "success",
                  title: "Ubah Status Berhasil",
                  text: "Email Konfirmasi Sudah Dikirim Kepada Pendaftar",
                  width: "28em",
                  showCloseButton: false,
                  showCancelButton: false,
                  timer: 1500,
                  showConfirmButton: false
                });
                submitButton.classList.remove(
                  "spinner",
                  "spinner-light",
                  "spinner-right"
                );
                // this.$bvModal.hide("modal-category");
                // this.toastAlert("update");
              } else {
                this.loading = false;
              }
            });
        } else {
          this.$api
            .put(`hotel/status`, {
              id_hotel: this.addForm.id_hotel,
              status: this.addForm.status
            })
            .then(res => {
              if (res.status === 200) {
                // console.log(res.status);
                this.loading = false;
                this.hideModal();
                this.fetchHotel();
                Swal.fire({
                  icon: "success",
                  title: "Ubah Status Berhasil",
                  text: "Email Konfirmasi Sudah Dikirim Kepada Pendaftar",
                  width: "28em",
                  showCloseButton: false,
                  showCancelButton: false,
                  timer: 1500,
                  showConfirmButton: false
                });
                submitButton.classList.remove(
                  "spinner",
                  "spinner-light",
                  "spinner-right"
                );
                // this.$bvModal.hide("modal-category");
                // this.toastAlert("update");
              } else {
                this.loading = false;
              }
            });
        }
      }, 2000);
    },
    // changeStatusReject(data) {
    //   if (data.status === "Tidak Aktif") {
    //     this.$api
    //       .put(`hotel/status`, {
    //         id_hotel: data.id_hotel,
    //         status: data.status,
    //         inactive_reason: data.inactive_reason
    //       })
    //       .then(res => {
    //         if (res.status === 200) {
    //           // this.hideModal();
    //           this.fetchHotel();
    //           Swal.fire({
    //             icon: "success",
    //             title: "Ubah Status Berhasil",
    //             text: "Notifikasi Konfirmasi Sudah Dikirim Kepada Pendaftar",
    //             width: "28em",
    //             showCloseButton: false,
    //             showCancelButton: false,
    //             timer: 1500,
    //             showConfirmButton: false
    //           });
    //           // this.$bvModal.hide("modal-category");
    //           // this.toastAlert("update");
    //         }
    //       });
    //   }
    // },
    handleImage() {
      // console.log("SELFIE");
      // console.log(this.$refs);
      var output = document.getElementById("image");
      const file = this.$refs.image.files[0];
      console.log(file);
      if (file) {
        output.src = URL.createObjectURL(file);
      } else {
        this.addForm.image = this.$refs.image.files[0];
      }
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
    fetchCity(province = this.addForm.province_id) {
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
    fetchDistrict(city = this.addForm.city_id) {
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
    fetchSubdistrict(district = this.addForm.district_id) {
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
    showModal() {
      this.$refs["my-modal"].show();
      this.isEdit = false;
      this.addForm = {};
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    fetchHotel(page = 1) {
      // console.log()
      this.$api
        .get(
          `hotel/all?perPage=${this.perPage}&page=${page}&search=${this.search}&sortBy=${this.sortBy}&orderBy=${this.orderBy}`
        )
        .then(res => {
          this.petHotel = res.data.data.data ? res.data.data.data : [];
          // console.log(this.petHotel);
          this.page = res.data.data.paginate.page;
          this.perPage = res.data.data.paginate.perPage;
          this.totalData = res.data.data.paginate.totalData;
          this.totalPage = res.data.data.paginate.totalPage;
        })
        .catch(err => {
          console.error(err);
          // alert(err);
        });
    },
    // fetchSort() {
    //   if (this.orderBy === "desc") {
    //     this.orderBy = "asc";
    //   } else {
    //     this.orderBy = "desc";
    //   }
    //   this.fetchHotel();
    // },
    async onDetail(data) {
      this.showModal();
      await this.fetchProvinces();
      await this.fetchCity(data.province_id);
      await this.fetchDistrict(data.city_id);
      await this.fetchSubdistrict(data.district_id);
      this.isDetail = true;
      this.isEdit = false;
      this.modalTitle = `${data.name} Details`;
      this.addForm = Object.assign({}, data);
    },
    async onEdit(data) {
      // console.log(data);
      this.showModal();
      await this.fetchProvinces();
      await this.fetchCity(data.province_id);
      await this.fetchDistrict(data.city_id);
      await this.fetchSubdistrict(data.district_id);
      this.isDetail = false;
      this.isEdit = true;
      this.modalTitle = `Edit ${data.name}`;
      this.addForm = Object.assign({}, data);
    },
    onDelete(id) {
      Swal.fire({
        icon: "warning",
        title: "Hapus data ?",
        text: "Data yang dihapus tidak dapat dikembalikan",
        width: "28em",
        showCancelButton: true,
        confirmButtonText: "Hapus",
        confirmButtonColor: "#e63b3b",
        focusCancel: true
      }).then(result => {
        if (result.isConfirmed) {
          this.$api
            .delete(`hotel/delete/${id}`)
            .then(res => {
              if (res.status === 200) {
                this.fetchHotel();
                Swal.fire({
                  icon: "warning",
                  title: "Hapus Berhasil",
                  text: "Data berhasil dihapus",
                  width: "28em",
                  showCloseButton: false,
                  showCancelButton: false,
                  timer: 1500,
                  showConfirmButton: false
                });
                // this.toastAlert("menghapus");
              }
            })
            .catch(err => {
              alert(err);
            });
        }
      });
    },
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      return valid;
    },
    resetModal() {
      this.name = "";
      this.nameState = null;
    },
    handleOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      this.addForm.phone = parseInt(this.addForm.phone);
      this.addForm.npwp = parseInt(this.addForm.npwp);
      this.addForm.province_id = parseInt(this.addForm.province_id);
      this.addForm.city_id = parseInt(this.addForm.city_id);
      this.addForm.district_id = parseInt(this.addForm.district_id);
      this.addForm.subdistrict_id = parseInt(this.addForm.subdistrict_id);
      // this.$v.addForm.$touch();
      // if (this.$v.addForm.$anyError) {
      //   return;
      // }
      const config = {
        headers: { "content-type": "multipart/form-data" }
      };

      let formData = new FormData();

      formData.append("id_hotel", this.addForm.id_hotel);
      formData.append("name", this.addForm.name);
      formData.append("email", this.addForm.email);
      formData.append("province_id", this.addForm.province_id);
      formData.append("city_id", this.addForm.city_id);
      formData.append("district_id", this.addForm.district_id);
      formData.append("subdistrict_id", this.addForm.subdistrict_id);
      if (this.$refs.image.files[0] !== undefined)
        formData.append("image", this.$refs.image.files[0]);
      formData.append("address", this.addForm.address);
      if (this.$refs.docs.files[0] !== undefined)
        formData.append("document", this.$refs.docs.files[0]);
      formData.append("npwp", this.addForm.npwp);
      // formData.append("requirement", this.addForm.requirement);
      formData.append("description", this.addForm.description);
      // formData.append("regulation", this.addForm.regulation);
      formData.append("open_time", this.addForm.open_time);
      formData.append("close_time", this.addForm.close_time);
      formData.append("close_time", this.addForm.phone);
      formData.append("close_time", this.addForm.npwp);
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      // evt.preventDefault();
      // if (!this.$v.addForm.$error) {
      //
      // }
      if (this.isEdit) {
        this.$api
          .put("hotel/update", formData, config)
          .then(res => {
            if (res.status === 200) {
              this.hideModal();
              this.fetchHotel();
              Swal.fire({
                icon: "success",
                title: "Edit Berhasil",
                text: "Data berhasil diedit",
                width: "28em",
                showCloseButton: false,
                showCancelButton: false,
                timer: 1500,
                showConfirmButton: false
              });
              // this.$bvModal.hide("modal-category");
              // this.toastAlert("update");
            }
          })
          .catch(err => {
            if (err.message === "Request failed with status code 409") {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Kode kategori sudah ada!",
                showConfirmButton: false,
                width: "25em",
                timer: 2500
              });
            }
          });
      } else {
        this.$api
          .post("hotel/add", this.addForm)
          .then(res => {
            if (res.status === 200) {
              this.hideModal();
              this.fetchHotel();
              Swal.fire({
                icon: "success",
                title: "Tambah Berhasil",
                text: "Data berhasil ditambahkan",
                width: "28em",
                showCloseButton: false,
                showCancelButton: false,
                timer: 1500,
                showConfirmButton: false
              });
              // this.toastAlert("tambah");
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    resetForm() {
      this.addForm = {};
      this.$v.$reset();
    }
  },
  toastAlert(act) {
    Swal.fire({
      toast: true,
      position: "top-end",
      showClass: { popup: "" },
      icon: "success",
      title: `Berhasil ${act} data`,
      showConfirmButton: false,
      timer: 2500,
      timerProgressBar: true,
      didOpen: toast => {
        toast.addEventListener("mouseenter", this.$swal.stopTimer);
        toast.addEventListener("mouseleave", this.$swal.resumeTimer);
      }
    });
  },
  computed: {
    countSection() {
      let meta = {};
      if (this.perPage === 1) {
        meta.startSection = this.page;
        meta.endSection = meta.startSection;
      } else {
        if (this.petHotel.length === this.perPage) {
          meta.endSection = this.page * this.perPage;
          meta.startSection = meta.endSection - (this.perPage - 1);
        } else {
          meta.endSection =
            this.page * this.perPage - (this.perPage - this.petHotel.length);
          meta.startSection = meta.endSection - (this.petHotel.length - 1);
        }
      }
      return meta;
    }
  },
  mounted() {
    this.fetchHotel();
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Pet Hotel" }]);
  }
};
</script>

<style>
.table-img img {
  width: 90px; /* Set the width of the image */
  height: auto; /* Maintain the aspect ratio */
  border: 2px solid lightgrey; /* Add a border */
  border-radius: 5px; /* Add rounded corners */
  margin: 10px; /* Add some margin around the image */
  padding: 5px; /* Add padding inside the border */
  background-color: #ebebeb;
}
.table-img1 img {
  width: 90px; /* Set the width of the image */
  height: auto; /* Maintain the aspect ratio */
  border: 2px solid grey; /* Add a border */
  border-radius: 5px; /* Add rounded corners */
  margin: 10px; /* Add some margin around the image */
  padding: 5px; /* Add padding inside the border */
}
.pointer {
  cursor: pointer;
}

.gutter-b {
  margin-bottom: 10px;
}
</style>
