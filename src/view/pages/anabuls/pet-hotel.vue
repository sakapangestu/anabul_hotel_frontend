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
                    v-model="addForm.no_hp"
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
                    :label-field="provinces.name"
                    value-field="id_province"
                    text-field="province_name"
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
                    :label-field="districts.name"
                    value-field="id_district"
                    text-field="name"
                    :options="districts"
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
                <b-form-group
                  label="Syarat Penitipan"
                  label-for="name-input"
                  invalid-feedback="species is required"
                  :state="nameState"
                >
                  <b-form-textarea
                    id="textarea"
                    v-model="addForm.requirement"
                    placeholder="Enter something..."
                    :state="nameState"
                    rows="3"
                    max-rows="6"
                    :disabled="isDetail"
                    required
                  ></b-form-textarea>
                </b-form-group>
                <b-form-group
                  label="Peraturan"
                  label-for="name-input"
                  invalid-feedback="species is required"
                  :state="nameState"
                >
                  <b-form-textarea
                    id="textarea"
                    v-model="addForm.regulation"
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
                      `http://localhost:8080/hotel/profile/` + addForm.image
                    "
                  >
                    <div class="table-img1">
                      <img
                        id="image"
                        :src="
                          `http://localhost:8080/hotel/profile/` +
                            addForm.image
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
                      `http://localhost:8080/hotel/document/` +
                        addForm.document
                    "
                    :state="nameState"
                    required
                  ></b-link>
                  {{
                    addForm.documentName
                      ? addForm.documentName
                      : addForm.document
                  }}
                  <!--                  <span v-if="addForm.documentName">-->
                  <!--                    {{  }}-->
                  <!--                  </span>-->
                  <br />
                  <input
                    type="file"
                    id="name-input"
                    ref="docs"
                    v-on:change="handleDocument()"
                  />
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
            <!--            <b-modal-->
            <!--              id="modal-prevent-closing"-->
            <!--              ref="modal"-->
            <!--              title="Submit Your Name"-->
            <!--              @show="resetModal"-->
            <!--              @hidden="resetModal"-->
            <!--              @ok="handleOk"-->
            <!--            >-->
            <!--              <form ref="form" @submit.stop.prevent="handleSubmit">-->
            <!--                <b-form-group-->
            <!--                  label="Name"-->
            <!--                  label-for="name-input"-->
            <!--                  invalid-feedback="Name is required"-->
            <!--                  :state="nameState"-->
            <!--                >-->
            <!--                  <b-form-input-->
            <!--                    id="name-input"-->
            <!--                    v-model="addForm.name"-->
            <!--                    :state="nameState"-->
            <!--                    required-->
            <!--                  ></b-form-input>-->
            <!--                </b-form-group>-->
            <!--              </form>-->
            <!--            </b-modal>-->
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
                    <i class="fas fa-sort ml-3" @click="fetchSort"></i
                  ></b-th>
                  <b-th>Hotel Email</b-th>
                  <b-th>Provinsi</b-th>
                  <b-th>Kota</b-th>
                  <b-th>Kecamatan</b-th>
                  <b-th>Action</b-th>
                </b-tr>
              </b-thead>
              <b-tbody>
                <b-tr v-for="(item, index) in petHotel" :key="item.id">
                  <b-td style="width: 6em;">
                    {{ ++index + (page - 1) * perPage }}
                  </b-td>
                  <b-td>
                    <div class="table-img">
                      <img
                        :src="
                          `http://localhost:8080/hotel/profile/` + item.image
                        "
                        alt="pet hotel"
                      />
                    </div>
                  </b-td>
                  <b-td
                    >{{ item.name }} <br />
                    {{ item.no_hp }}</b-td
                  >
                  <b-td>{{ item.email }}</b-td>
                  <b-td v-if="item.province">{{
                    item.province.province_name
                  }}</b-td>
                  <b-td v-else>-</b-td>
                  <b-td v-if="item.city">{{ item.city.name }}</b-td>
                  <b-td v-else>-</b-td>
                  <b-td v-if="item.district">{{ item.district.name }} </b-td>
                  <b-td v-else>-</b-td>
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
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import KTCard from "@/view/content/Card.vue";
// import { required } from "vuelidate/lib/validators";
import Swal from "sweetalert2";
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
      submittedNames: [],
      modalTitle: "",
      // Note 'isActive' is left out and will not appear in the rendered table
      petHotel: [],
      provinces: [],
      cities: [],
      districts: [],
      addForm: {
        id_hotel: "",
        name: "",
        email: "",
        province_id: "",
        city_id: "",
        district_id: "",
        address: "",
        no_hp: "",
        image: null,
        document: null,
        npwp: null,
        latitude: "",
        longitude: "",
        open_time: "",
        close_time: "",
        map_link: "",
        requirement: "",
        description: "",
        regulation: ""
      }
      // validations: {
      //   addForm: {
      //     name: { required }
      //   }
      // }
    };
  },
  methods: {
    handleDocument() {
      // console.log("DOKUMEN");
      // console.log(this.$refs.docs.files[0]);
      this.addForm.document = this.$refs.docs.files[0];
      this.addForm.documentName = this.$refs.docs.files[0].name;
    },
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
    fetchCity() {
      this.$api
        .get(`city/all`)
        .then(res => {
          this.cities = res.data.data.data ? res.data.data.data : [];
          // console.log(this.ktghewan);
        })
        .catch(err => {
          console.error(err);
          // alert(err);
        });
    },
    fetchDistrict() {
      this.$api
        .get(`district/all`)
        .then(res => {
          this.districts = res.data.data.data ? res.data.data.data : [];
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
    fetchRequest(page = 1) {
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
    fetchSort() {
      if (this.orderBy === "desc") {
        this.orderBy = "asc";
      } else {
        this.orderBy = "desc";
      }
      this.fetchRequest();
    },
    onDetail(data) {
      this.showModal();
      this.isDetail = true;
      this.isEdit = false;
      this.modalTitle = `${data.name} Details`;
      this.addForm = Object.assign({}, data);
    },
    onEdit(data) {
      this.showModal();
      this.isDetail = false;
      this.isEdit = true;
      this.modalTitle = `Edit ${data.name}`;
      this.addForm = Object.assign({}, data);
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
            .delete(`hotel/delete/${id}`)
            .then(res => {
              if (res.status === 200) {
                this.fetchRequest();
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
      this.addForm.no_hp = parseInt(this.addForm.no_hp);
      this.addForm.npwp = parseInt(this.addForm.npwp);
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
      if (this.$refs.image.files[0] !== undefined)
        formData.append("image", this.$refs.image.files[0]);
      formData.append("address", this.addForm.address);
      if (this.$refs.docs.files[0] !== undefined)
        formData.append("document", this.$refs.docs.files[0]);
      formData.append("npwp", this.addForm.npwp);
      formData.append("requirement", this.addForm.requirement);
      formData.append("description", this.addForm.description);
      formData.append("regulation", this.addForm.regulation);
      formData.append("open_time", this.addForm.open_time);
      formData.append("close_time", this.addForm.close_time);
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
              this.fetchRequest();
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
    this.fetchRequest();
    this.fetchProvinces();
    this.fetchCity();
    this.fetchDistrict();
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
.pointer {
  cursor: pointer;
}

.gutter-b {
  margin-bottom: 10px;
}
</style>
