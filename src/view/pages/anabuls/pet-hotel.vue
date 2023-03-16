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
            <b-modal ref="my-modal" hide-footer title="Using Component Methods">
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
                          `http://localhost:8080/user/profile/` + item.image
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
                  <b-td>{{ item.province.province_name }}</b-td>
                  <b-td>{{ item.city.name }}</b-td>
                  <b-td>{{ item.district.name }} </b-td>
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
import KTCard from "@/view/content/Card.vue";
// import { required } from "vuelidate/lib/validators";
import Swal from "sweetalert2";
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
      modalVisible: false,
      perPage: 10,
      totalData: 0,
      totalPage: 0,
      nameState: null,
      isEdit: null,
      isDetail: null,
      submittedNames: [],
      // Note 'isActive' is left out and will not appear in the rendered table
      petHotel: [],
      addForm: {
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
        map_link: "",
        requirement: "",
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
      this.addForm = Object.assign({}, data);
    },
    onEdit(data) {
      this.showModal();
      this.isDetail = false;
      this.isEdit = true;
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
          .put("hotel/update", this.addForm)
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
  }
};
</script>

<style>
.table-img img {
  border-radius: 8px;
  max-height: 5rem;
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
