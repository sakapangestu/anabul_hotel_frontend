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
              placeholder="Search name kelas hewan"
              v-model="search"
              @input="fetchRequest()"
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
                  label="Hotel Name"
                  label-for="name-input"
                  invalid-feedback="Nama Harus di Isi"
                  :state="nameState"
                >
                  <b-form-input
                    id="name-input"
                    v-model="addForm.hotel_name"
                    :state="nameState"
                    :disabled="isDetail"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  label="Email Hotel"
                  label-for="name-input"
                  invalid-feedback="Email Harus di isi"
                  :state="nameState"
                >
                  <b-form-input
                    type="email"
                    id="name-input"
                    v-model="addForm.hotel_email"
                    :state="nameState"
                    :disabled="isDetail"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  label="No Hp Hotel"
                  label-for="name-input"
                  invalid-feedback="No Hp Harus di is"
                  :state="nameState"
                >
                  <b-form-input
                    type="number"
                    id="name-input"
                    v-model="addForm.hotel_phone"
                    :state="nameState"
                    :disabled="isDetail"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  label="Dokumen SIB/SIUB/AKTA"
                  label-for="name-input"
                  invalid-feedback="Dokumen Harus di Isi"
                  :state="nameState"
                >
                  <b-link
                    target="_blank"
                    :href="
                      `http://localhost:8080/request/document/` +
                        addForm.document
                    "
                    :state="nameState"
                    required
                    >SIB/SIUP/AKTA</b-link
                  >
                </b-form-group>
                <b-form-group
                  label="Provinsi Hotel"
                  label-for="name-input"
                  invalid-feedback="class is required"
                  :state="nameState"
                >
                  <b-form-select
                    :disabled="isDetail"
                    v-model="addForm.hotel_province"
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
                    v-model="addForm.hotel_city"
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
                    v-model="addForm.hotel_district"
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
                    v-model="addForm.hotel_subdistrict"
                    :label-field="subdistricts.name"
                    value-field="id_subdistrict"
                    text-field="name"
                    :options="subdistricts"
                  ></b-form-select>
                </b-form-group>
                <b-form-group
                  label="Alamat"
                  label-for="name-input"
                  invalid-feedback="Alamat Harus di Isi"
                  :state="nameState"
                >
                  <b-form-textarea
                    id="textarea"
                    v-model="addForm.hotel_address"
                    placeholder="Enter something..."
                    :state="nameState"
                    rows="3"
                    max-rows="6"
                    :disabled="isDetail"
                    required
                  ></b-form-textarea>
                </b-form-group>
                <b-form-group
                  label="Gambar Hotel "
                  label-for="name-input"
                  invalid-feedback="Gambar Harus di Isi"
                  :state="nameState"
                >
                  <b-link
                    target="_blank"
                    :href="
                      `http://localhost:8080/hotel/profile/` +
                        addForm.hotel_image
                    "
                  >
                    <div class="table-img1">
                      <img
                        :src="
                          `http://localhost:8080/hotel/profile/` +
                            addForm.hotel_image
                        "
                        alt="Admin Pet"
                      />
                    </div>
                  </b-link>
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
                  label="Nama Admin"
                  label-for="name-input"
                  invalid-feedback="Nama Admin harus di isi"
                  :state="nameState"
                >
                  <b-form-input
                    id="name-input"
                    v-model="addForm.admin_name"
                    :state="nameState"
                    :disabled="isDetail"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  label="No Hp Admin"
                  label-for="name-input"
                  invalid-feedback="No Hp Admin harus di isi"
                  :state="nameState"
                >
                  <b-form-input
                    id="name-input"
                    type="number"
                    v-model="addForm.admin_phone"
                    :state="nameState"
                    :disabled="isDetail"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  label="NIK"
                  label-for="name-input"
                  invalid-feedback="NIK harus di isi"
                  :state="nameState"
                >
                  <b-form-input
                    id="name-input"
                    type="number"
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
                        :src="`http://localhost:8080/user/ktp/` + addForm.ktp"
                        alt="KTP"
                      />
                    </div>
                  </b-link>
                </b-form-group>
                <b-form-group
                  label="Selfie "
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
                        :src="
                          `http://localhost:8080/user/selfie/` + addForm.selfie
                        "
                        alt="Selfie"
                      />
                    </div>
                  </b-link>
                </b-form-group>
                <b-form-group
                  label="Status"
                  label-for="name-input"
                  invalid-feedback="Status is required"
                  :state="nameState"
                >
                  <b-form-select
                    :state="nameState"
                    id="name-input"
                    v-model="addForm.status"
                    :options="['Proses', 'Terima', 'Tolak']"
                    class="per-page"
                    @change="changeStatus(addForm)"
                    required
                  >
                  </b-form-select>
                </b-form-group>
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
                  <b-th
                    >Hotel Nama
                    <i class="fas fa-sort ml-3" @click="fetchSort"></i
                  ></b-th>
                  <b-th>Hotel Email</b-th>
                  <b-th>NPWP</b-th>
                  <b-th>Admin Name</b-th>
                  <b-th>NIK</b-th>
                  <b-th>Status</b-th>
                  <b-th>Action</b-th>
                </b-tr>
              </b-thead>
              <b-tbody>
                <b-tr v-for="(item, index) in permintaan" :key="item.id">
                  <b-td style="width: 6em;">
                    {{ ++index + (page - 1) * perPage }}
                  </b-td>
                  <b-td>
                    <div class="table-img">
                      <img
                        :src="
                          `http://localhost:8080/hotel/profile/` +
                            item.hotel_image
                        "
                        alt="Admin Pet"
                      />
                    </div>
                    <br />
                    {{ item.hotel_name }}</b-td
                  >
                  <b-td
                    >{{ item.hotel_email }} <br />
                    {{ item.hotel_phone }}</b-td
                  >
                  <b-td>{{ item.npwp }}</b-td>
                  <b-td
                    >{{ item.admin_name }} <br />
                    {{ item.admin_phone }}
                  </b-td>
                  <b-td>{{ item.nik }}</b-td>
                  <b-td>
                    <b-badge variant="success" v-if="item.status === 'Terima'"
                      >Diterima</b-badge
                    >
                    <b-badge variant="warning" v-if="item.status === 'Proses'"
                      >Diproses</b-badge
                    >
                    <b-badge variant="danger" v-if="item.status === 'Tolak'"
                      >Ditolak</b-badge
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
                    <span class="action-button">
                      <img
                        class="pointer"
                        style="width: 20px"
                        @click="onDelete(item.id_request)"
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
              @change="fetchRequest()"
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
                    @click="fetchRequest(page - 1)"
                    >Previous</a
                  >
                </li>

                <li
                  class="page-item"
                  :class="{ active: pg === page }"
                  v-for="pg in totalPage"
                  :key="pg.id"
                >
                  <a class="page-link" href="#" @click="fetchRequest(pg)">{{
                    pg
                  }}</a>
                </li>

                <li class="page-item" :class="{ disabled: page === totalPage }">
                  <a class="page-link" href="#" @click="fetchRequest(page + 1)"
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
import KTCard from "@/view/content/Card.vue";
// import { required } from "vuelidate/lib/validators";
import Swal from "sweetalert2";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
export default {
  components: {
    KTCard
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
      submittedNames: [],
      modalTitle: "",
      // Note 'isActive' is left out and will not appear in the rendered table
      permintaan: [],
      provinces: [],
      cities: [],
      districts: [],
      subdistricts: [],
      addForm: {
        hotel_name: "",
        hotel_email: "",
        hotel_phone: "",
        hotel_address: "",
        hotel_image: "",
        hotel_province: "",
        hotel_city: "",
        hotel_district: "",
        hotel_subdistrict: "",
        npwp: "",
        document: "",
        admin_name: "",
        admin_phone: "",
        nik: "",
        ktp: "",
        selfie: "",
        status: ""
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
      this.$refs["my-modal"].show();
      this.isEdit = false;
      this.addForm = {};
    },
    resetProvince() {
      this.addForm.hotel_city = "";
      this.addForm.hotel_subdistrict = "";
      this.addForm.hotel_district = "";
      this.fetchCity(this.addForm.hotel_province);
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    changeStatus(data) {
      console.log(data);
      this.$api
        .put(`request/status`, {
          id_request: data.id_request,
          status: data.status
        })
        .then(() => {
          this.fetchRequest();
        });
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
    fetchCity(province = this.addForm.hotel_province) {
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
    fetchDistrict(city = this.addForm.hotel_city) {
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
    fetchSubdistrict(district = this.addForm.hotel_district) {
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
    fetchRequest(page = 1) {
      this.$api
        .get(
          `request/all?perPage=${this.perPage}&page=${page}&search=${this.search}&sortBy=${this.sortBy}&orderBy=${this.orderBy}`
        )
        .then(res => {
          this.permintaan = res.data.data.data ? res.data.data.data : [];
          // console.log(this.permintaan);
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
    fetchSort() {
      if (this.orderBy === "desc") {
        this.orderBy = "asc";
      } else {
        this.orderBy = "desc";
      }
      this.fetchRequest();
    },
    async onDetail(data) {
      this.showModal();
      await this.fetchProvinces();
      await this.fetchCity(data.hotel_province);
      await this.fetchDistrict(data.hotel_city);
      await this.fetchSubdistrict(data.hotel_district);
      this.isDetail = true;
      this.isEdit = false;
      this.modalTitle = `${data.hotel_name} Details`;
      this.addForm = Object.assign({}, data);
    },
    onEdit(data) {
      this.showModal();
      this.isEdit = true;
      this.isDetail = false;
      this.modalTitle = `Edit ${data.hotel_name}`;
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
            .delete(`request/delete/${id}`)
            .then(res => {
              if (res.status === 200) {
                this.fetchRequest();
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
          .put("request/update", this.addForm)
          .then(res => {
            if (res.status === 200) {
              this.hideModal();
              this.fetchRequest();
              // this.$bvModal.hide("modal-category");
              // this.toastAlert("update");
            }
          })
          .catch(err => {
            if (err.message === "Request failed with status code 409") {
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
            }
          });
      } else {
        this.$api
          .post("request/add", this.addForm)
          .then(res => {
            if (res.status === 200) {
              this.hideModal();
              this.fetchRequest();
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
        if (this.permintaan.length === this.perPage) {
          meta.endSection = this.page * this.perPage;
          meta.startSection = meta.endSection - (this.perPage - 1);
        } else {
          meta.endSection =
            this.page * this.perPage - (this.perPage - this.permintaan.length);
          meta.startSection = meta.endSection - (this.permintaan.length - 1);
        }
      }
      return meta;
    }
  },
  mounted() {
    this.fetchRequest();
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Permintaan" }]);
  }
};
</script>

<style>
.table-img img {
  border-radius: 8px;
  max-height: 5rem;
}
.table-img1 img {
  border-radius: 25px;
  max-height: 18rem;
}

.table-img-1 {
  max-height: 3em;
  border-radius: 6px;
}

.pointer {
  cursor: pointer;
}

.gutter-b {
  margin-bottom: 10px;
}
</style>
