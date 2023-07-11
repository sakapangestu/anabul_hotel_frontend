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
              placeholder="Search name staff"
              v-model="search"
              @input="fetchStaff()"
            />
          </div>
        </div>
        <div class="ml-15 col-6 mt-4">
          <div>
            <b-button
              id="show-btn"
              @click="showModal"
              variant="dark"
              class="float-right"
              ><i class="fa fa-plus-circle" aria-hidden="true"></i> Create Staff
            </b-button>
            <b-modal ref="my-modal" hide-footer :title="modalTitle">
              <b-form ref="form" @submit.prevent="handleOk">
                <b-form-group
                  label="Nama Staff"
                  label-for="name-input"
                  invalid-feedback="species is required"
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
                  label="Email Staff"
                  label-for="name-input"
                  invalid-feedback="species is required"
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
                  label="No Hp Staff"
                  label-for="name-input"
                  invalid-feedback="species is required"
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
                  label="Tanggal Kelahiran"
                  label-for="name-input"
                  invalid-feedback="species is required"
                  :state="nameState"
                >
                  <date-picker
                    id="name-input"
                    :state="nameState"
                    v-model="addForm.birth_date"
                    value-type="format"
                    :disabled="isDetail"
                    class="w-100"
                    required
                  ></date-picker>
                </b-form-group>
                <b-form-group label="Gender" v-slot="{ ariaDescribedby }">
                  <b-form-radio-group
                    v-model="addForm.gender"
                    :options="options"
                    :disabled="isDetail"
                    :aria-describedby="ariaDescribedby"
                    name="radios-stacked"
                    stacked
                  ></b-form-radio-group>
                </b-form-group>
                <b-form-group
                  label="NIK"
                  label-for="name-input"
                  invalid-feedback="NIK harus di isi"
                  :state="nameState"
                >
                  <b-form-input
                    type="number"
                    id="name-input"
                    v-model="addForm.nik"
                    :state="nameState"
                    :disabled="isDetail"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  label="KTP "
                  label-for="name-input"
                  invalid-feedback="KTP Harus di Isi"
                  :state="nameState"
                >
                  <b-link
                    target="_blank"
                    :href="`http://localhost:8080/user/ktp/` + addForm.ktp"
                  >
                    <div class="table-img1">
                      <img
                        id="ktpimage"
                        :src="`http://localhost:8080/user/ktp/` + addForm.ktp"
                        alt="KTP"
                      />
                    </div>
                  </b-link>
                  <input
                    type="file"
                    id="name-input"
                    ref="ktp"
                    v-on:change="handleKtp()"
                  />
                </b-form-group>
                <b-form-group
                  label="Selfie Beserta Ktp"
                  label-for="name-input"
                  invalid-feedback="Selfie Harus di Isi"
                  :state="nameState"
                >
                  <b-link
                    target="_blank"
                    :href="
                      `http://localhost:8080/user/selfie/` + addForm.selfie
                    "
                  >
                    <div class="table-img1">
                      <img
                        id="selfieimage"
                        :src="
                          `http://localhost:8080/user/selfie/` + addForm.selfie
                        "
                        alt="Selfie"
                      />
                    </div>
                  </b-link>
                  <input
                    type="file"
                    id="name-input"
                    ref="selfie"
                    v-on:change="handleSelfie()"
                  />
                </b-form-group>
                <b-form-group
                  label="Gambar Staff "
                  label-for="name-input"
                  invalid-feedback="Gambar Harus di Isi"
                  :state="nameState"
                >
                  <b-link
                    target="_blank"
                    :href="
                      `http://localhost:8080/user/profile/` + addForm.image
                    "
                  >
                    <div class="table-img1">
                      <img
                        id="image"
                        :src="
                          `http://localhost:8080/user/profile/` + addForm.image
                        "
                        alt="Staff Pet"
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
                <b-button
                  class="mt-3"
                  type="submit"
                  variant="primary"
                  v-if="!isDetail"
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
                    >Nama</b-th>
                  <b-th>Email</b-th>
                  <b-th>Alamat</b-th>
                  <b-th>Action</b-th>
                </b-tr>
              </b-thead>
              <b-tbody>
                <b-tr v-for="(item, index) in staffPet" :key="item.id">
                  <b-td style="width: 6em;">
                    {{ ++index + (page - 1) * perPage }}
                  </b-td>
                  <b-td v-if="item.image">
                    <div class="table-img">
                      <img
                        :src="
                          `http://localhost:8080/user/profile/` + item.image
                        "
                        alt="pet hotel"
                      />
                    </div>
                  </b-td>
                  <b-td v-else>
                    <div class="table-img">
                      <img src="@/assets/image/default_user.png" />
                    </div>
                  </b-td>
                  <b-td
                    >{{ item.name }} <br />
                    {{ item.phone }}</b-td
                  >
                  <b-td>{{ item.email }} </b-td>
                  <b-td>{{ item.address }}</b-td>
                  <!--                  <b-td>{{ item.role }} </b-td>-->
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
                        @click="onDelete(item.id)"
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
              @change="fetchStaff()"
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
                    @click="fetchStaff(page - 1)"
                    >Previous</a
                  >
                </li>

                <li
                  class="page-item"
                  :class="{ active: pg === page }"
                  v-for="pg in totalPage"
                  :key="pg.id"
                >
                  <a class="page-link" href="#" @click="fetchStaff(pg)">{{
                    pg
                  }}</a>
                </li>

                <li class="page-item" :class="{ disabled: page === totalPage }">
                  <a class="page-link" href="#" @click="fetchStaff(page + 1)"
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
import { getHotelId } from "@/service/jwt.service";
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
      sortBy: "name",
      orderBy: "desc",
      page: 1,
      title: "",
      perPage: 10,
      totalData: 0,
      totalPage: 0,
      nameState: null,
      isEdit: null,
      isDetail: null,
      modalTitle: "",
      submittedNames: [],
      hotel: [],
      hotelId: "",
      // Note 'isActive' is left out and will not appear in the rendered table
      staffPet: [],
      provinces: [],
      cities: [],
      districts: [],
      subdistricts: [],
      options: [
        { text: "Laki - laki ", value: "Laki-laki" },
        { text: "Perempuan", value: "Perempuan" }
      ],
      addForm: {
        id: "",
        name: "",
        email: "",
        nik: "",
        ktp: "",
        selfie: "",
        role: "",
        province_id: "",
        city_id: "",
        district_id: "",
        subdistrict_id: "",
        birth_date: "",
        address: "",
        phone: "",
        hotel_id: "",
        image: "",
        gender: ""
      }
      // validations: {
      //   addForm: {
      //     name: { required }
      //   }
      // }
    };
  },
  methods: {
    showModal() {
      this.modalTitle = "Tambah Staff Hotel";
      this.$refs["my-modal"].show();
      this.isEdit = false;
      this.addForm = {};
    },
    resetProvince() {
      this.addForm.city_id = "";
      this.addForm.subdistrict_id = "";
      this.addForm.district_id = "";
      this.fetchCity(this.addForm.province_id);
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    handleKtp() {
      // console.log("DOKUMEN");
      // console.log(this.$refs.docs.files[0]);
      var output = document.getElementById("ktpimage");
      const file = this.$refs.ktp.files[0];
      console.log(file);
      if (file) {
        output.src = URL.createObjectURL(file);
      } else {
        this.addForm.ktp = this.$refs.ktp.files[0];
      }
      // this.addForm.ktp = this.$refs.ktp.files[0];
    },
    handleSelfie() {
      // console.log("DOKUMEN");
      // console.log(this.$refs.docs.files[0]);
      var output = document.getElementById("selfieimage");
      const file = this.$refs.selfie.files[0];
      console.log(file);
      if (file) {
        output.src = URL.createObjectURL(file);
      } else {
        this.addForm.selfie = this.$refs.selfie.files[0];
      }
    },
    handleImage() {
      // console.log("DOKUMEN");
      // console.log(this.$refs.docs.files[0]);
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
    fetchStaff(page = 1) {
      this.$api
        .get(
          `staff/all?perPage=${this.perPage}&page=${page}&search=${this.search}&sortBy=${this.sortBy}&orderBy=${this.orderBy}`
        )
        .then(res => {
          // console.log(res);
          this.staffPet = res.data.data.data ? res.data.data.data : [];
          // console.log(this.staffPet);
          // console.log(this.staffPet);
          // this.page = res.data.data.paginate.page;
          // this.perPage = res.data.data.paginate.perPage;
          // this.totalData = res.data.data.paginate.totalData;
          // this.totalPage = res.data.data.paginate.totalPage;
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
    //   this.fetchStaff();
    // },
    async onDetail(data) {
      this.showModal();
      await this.fetchProvinces();
      await this.fetchCity(data.province_id);
      await this.fetchDistrict(data.city_id);
      await this.fetchSubdistrict(data.district_id);
      this.isDetail = true;
      this.modalTitle = `${data.name} Details`;
      this.isEdit = false;
      this.addForm = Object.assign({}, data);
    },
    async onEdit(data) {
      this.showModal();
      await this.fetchProvinces();
      await this.fetchCity(data.province_id);
      await this.fetchDistrict(data.city_id);
      await this.fetchSubdistrict(data.district_id);
      this.isEdit = true;
      this.isDetail = false;
      this.addForm = Object.assign({}, data);
      this.modalTitle = `Edit ${data.name}`;
      console.log(data);
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
            .delete(`staff/delete/${id}`)
            .then(res => {
              if (res.status === 200) {
                this.fetchStaff();
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
      this.addForm.nik = parseInt(this.addForm.nik);
      this.addForm.province_id = parseInt(this.addForm.province_id);
      this.addForm.city_id = parseInt(this.addForm.city_id);
      this.addForm.district_id = parseInt(this.addForm.district_id);
      this.addForm.subdistrict_id = parseInt(this.addForm.subdistrict_id);

      const config = {
        headers: { "content-type": "multipart/form-data" }
      };
      this.addForm.role = "Staff";
      let formData = new FormData();
      formData.append("id", this.addForm.id);
      formData.append("name", this.addForm.name);
      formData.append("email", this.addForm.email);
      formData.append("phone", this.addForm.phone);
      formData.append("nik", this.addForm.nik);
      formData.append("province_id", this.addForm.province_id);
      formData.append("city_id", this.addForm.city_id);
      formData.append("district_id", this.addForm.district_id);
      formData.append("subdistrict_id", this.addForm.subdistrict_id);
      formData.append("birth_date", this.addForm.birth_date);
      formData.append("gender", this.addForm.gender);
      if (this.$refs.ktp.files[0] !== undefined)
        formData.append("ktp", this.$refs.ktp.files[0]);
      if (this.$refs.selfie.files[0] !== undefined)
        formData.append("selfie", this.$refs.selfie.files[0]);
      formData.append("address", this.addForm.address);
      if (this.$refs.image.files[0] !== undefined)
        formData.append("image", this.$refs.image.files[0]);
      formData.append("role", this.addForm.role);
      formData.append("hotel_id", getHotelId());

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
          .put("staff/update", formData, config)
          .then(res => {
            if (res.status === 200) {
              this.hideModal();
              this.fetchStaff();
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
          .post("staff/add", formData, config)
          .then(res => {
            if (res.status === 201) {
              this.hideModal();
              this.fetchStaff();
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
        if (this.staffPet.length === this.perPage) {
          meta.endSection = this.page * this.perPage;
          meta.startSection = meta.endSection - (this.perPage - 1);
        } else {
          meta.endSection =
            this.page * this.perPage - (this.perPage - this.staffPet.length);
          meta.startSection = meta.endSection - (this.staffPet.length - 1);
        }
      }
      return meta;
    }
  },
  mounted() {
    this.fetchStaff();
    this.fetchProvinces();
    this.hotelId = getHotelId();
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Staff Hotel" }]);
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
  border-radius: 25px;
  max-height: 18rem;
}
.pointer {
  cursor: pointer;
}

.gutter-b {
  margin-bottom: 10px;
}
</style>
