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
              placeholder="Search name temporary hotel"
              v-model="search"
              @input="fetchTemporaryHotel()"
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
            <!--              ><i class="fa fa-plus-circle" aria-hidden="true"></i> Create-->
            <!--              Spesies Hewan</b-button-->
            <!--            >-->
            <b-modal ref="my-modal" hide-footer :title="modalTitle">
              <b-form ref="form" @submit.prevent="changeStatusReject">
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
                    :options="['Proses', 'Aktif', 'Tidak Aktif']"
                    class="per-page"
                    required
                  >
                  </b-form-select>
                </b-form-group>
                <!--                <b-form-group-->
                <!--                  label="Spesies Hewan"-->
                <!--                  label-for="name-input"-->
                <!--                  invalid-feedback="hotelActivation is required"-->
                <!--                  :state="nameState"-->
                <!--                >-->
                <!--                  <b-form-input-->
                <!--                    id="name-input"-->
                <!--                    v-model="addForm.name"-->
                <!--                    :state="nameState"-->
                <!--                    required-->
                <!--                  ></b-form-input>-->
                <!--                </b-form-group>-->
                <!--                {{ hotel }}-->
                <!--                <b-form-group-->
                <!--                  label="Kategori Hewan"-->
                <!--                  label-for="name-input"-->
                <!--                  invalid-feedback="class is required"-->
                <!--                  :state="nameState"-->
                <!--                >-->
                <!--                  <b-form-select-->
                <!--                    v-model="addForm.category_id"-->
                <!--                    :label-field="hotel.name"-->
                <!--                    value-field="id_category"-->
                <!--                    text-field="name"-->
                <!--                    :options="hotel"-->
                <!--                  ></b-form-select>-->
                <!--                </b-form-group>-->
                <!--                <b-form-group-->
                <!--                  label="Status"-->
                <!--                  label-for="name-input"-->
                <!--                  invalid-feedback="Status is required"-->
                <!--                  :state="nameState"-->
                <!--                >-->
                <!--                  <b-form-select-->
                <!--                    :state="nameState"-->
                <!--                    id="name-input"-->
                <!--                    v-model="addForm.status"-->
                <!--                    :options="['Diproses', 'Diterima', 'Ditolak']"-->
                <!--                    class="per-page"-->
                <!--                    @change="changeStatus(addForm)"-->
                <!--                    required-->
                <!--                  >-->
                <!--                  </b-form-select>-->
                <!--                </b-form-group>-->
                <b-button
                  ref="kt_login_signup_submit"
                  class="mt-3"
                  type="submit"
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
                  <b-th>Nama Hotel</b-th>
                  <b-th>Alasan Inaktivasi</b-th>
                  <b-th>Status</b-th>
                  <b-th>Action</b-th>
                </b-tr>
              </b-thead>
              <b-tbody>
                <b-tr v-for="(item, index) in temporaryHotel" :key="item.id">
                  <b-td style="width: 6em;">
                    {{ ++index + (page - 1) * perPage }}
                  </b-td>
                  <b-td>{{ item.hotel.name }}</b-td>
                  <b-td>{{ item.reason }}</b-td>
                  <b-td>
                    <b-badge variant="warning" v-if="item.status === 'Proses'"
                      >Diproses</b-badge
                    >
                    <b-badge variant="success" v-if="item.status === 'Aktif'"
                      >Aktif</b-badge
                    >
                    <b-badge
                      variant="danger"
                      v-if="item.status === 'Tidak Aktif'"
                      >Tidak Aktif</b-badge
                    >
                  </b-td>
                  <b-td class="action-cols">
                    <!--                    <span class="action-button">-->
                    <!--                      <img-->
                    <!--                        class="pointer"-->
                    <!--                        style="width: 20px"-->
                    <!--                        @click="onDetail(item)"-->
                    <!--                        src="@/assets/icon/button/view.png"-->
                    <!--                        alt="detail"-->
                    <!--                      />-->
                    <!--                    </span>-->
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
                        @click="onDelete(item.id_hotel_activation)"
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
              @change="fetchTemporaryHotel()"
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
                    @click="fetchTemporaryHotel(page - 1)"
                    >Previous</a
                  >
                </li>

                <li
                  class="page-item"
                  :class="{ active: pg === page }"
                  v-for="pg in totalPage"
                  :key="pg.id"
                >
                  <a
                    class="page-link"
                    href="#"
                    @click="fetchTemporaryHotel(pg)"
                    >{{ pg }}</a
                  >
                </li>

                <li class="page-item" :class="{ disabled: page === totalPage }">
                  <a
                    class="page-link"
                    href="#"
                    @click="fetchTemporaryHotel(page + 1)"
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
      sortBy: "created_at",
      orderBy: "desc",
      page: 1,
      title: "",
      modalVisible: false,
      perPage: 5,
      totalData: 0,
      totalPage: 0,
      loading: false,
      nameState: null,
      isEdit: null,
      isDetail: null,
      submittedNames: [],
      modalTitle: "",
      // Note 'isActive' is left out and will not appear in the rendered table
      temporaryHotel: [],
      hotel: [],
      addForm: {
        hotel_id: "",
        status: "",
        id_hotel_activation: ""
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
      this.modalTitle = "Tambah Spesies Hewan";
      this.$refs["my-modal"].show();
      this.isEdit = false;
      this.addForm = {};
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    fetchPetHotel() {
      this.$api
        .get(`hotel/all`)
        .then(res => {
          this.hotel = res.data.data.data ? res.data.data.data : [];
          // console.log(this.hotel);
        })
        .catch(err => {
          console.error(err);
          // alert(err);
        });
    },
    changeStatusReject() {
      const submitButton = this.$refs["kt_login_signup_submit"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      setTimeout(() => {
        this.$api
          .put(`hotelActivation/status`, {
            id_hotel_activation: this.addForm.id_hotel_activation,
            status: this.addForm.status,
            hotel_id: this.addForm.hotel_id
          })
          .then(res => {
            if (res.status === 200) {
              // console.log(res.status);
              this.loading = false;
              this.hideModal();
              this.fetchTemporaryHotel();
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
      }, 2000);
    },
    changeStatus(data) {
      console.log(data);
      this.$api
        .put(`hotelActivation/status`, {
          id_hotel_activation: data.id_hotel_activation,
          status: data.status
        })
        .then(res => {
          if (res.status === 200) {
            this.hideModal();
            this.fetchTemporaryHotel();
            Swal.fire({
              icon: "success",
              title: "Ubah Status Berhasil",
              text: "Status Spesies Berhasil Diubah",
              width: "28em",
              showCloseButton: false,
              showCancelButton: false,
              timer: 1500,
              showConfirmButton: false
            });
            // this.$bvModal.hide("modal-category");
            // this.toastAlert("update");
          }
        });
    },
    fetchTemporaryHotel(page = 1) {
      this.$api
        .get(
          `hotelActivation/all?perPage=${this.perPage}&page=${page}&search=${this.search}&sortBy=${this.sortBy}&orderBy=${this.orderBy}`
        )
        .then(res => {
          this.temporaryHotel = res.data.data.data ? res.data.data.data : [];
          console.log(this.temporaryHotel);
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
    onDetail(data) {
      alert("DETAIL");
      console.log(data);
    },
    onEdit(data) {
      this.showModal();
      this.isEdit = true;
      this.modalTitle = `Edit ${data.hotel.name}`;
      this.addForm = Object.assign({}, data);
    },
    onDelete(id) {
      console.log(id);
      Swal.fire({
        icon: "warning",
        title: "Hapus data ?",
        text: "Perhatian: Menghapus master data ini akan mempengaruhi data di bawahnya. Apakah Anda yakin ingin melanjutkan?",
        width: "28em",
        showCancelButton: true,
        confirmButtonText: "Hapus",
        confirmButtonColor: "#e63b3b",
        focusCancel: true
      }).then(result => {
        if (result.isConfirmed) {
          this.$api
            .delete(`hotelActivation/delete/${id}`)
            .then(res => {
              if (res.status === 200) {
                this.fetchTemporaryHotel();
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
          .put("hotelActivation/update", this.addForm)
          .then(res => {
            if (res.status === 200) {
              this.hideModal();
              this.fetchTemporaryHotel();
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
              // this.$bvModal.hide("modal-hotelActivation");
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
          .post("hotelActivation/add", this.addForm)
          .then(res => {
            if (res.status === 201) {
              this.hideModal();
              this.fetchTemporaryHotel();
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
            if (err.message === "Request failed with status code 409") {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Kode temporary hotel sudah ada!",
                showConfirmButton: false,
                width: "25em",
                timer: 2500
              });
            }
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
        if (this.temporaryHotel.length === this.perPage) {
          meta.endSection = this.page * this.perPage;
          meta.startSection = meta.endSection - (this.perPage - 1);
        } else {
          meta.endSection =
            this.page * this.perPage -
            (this.perPage - this.temporaryHotel.length);
          meta.startSection =
            meta.endSection - (this.temporaryHotel.length - 1);
        }
      }
      return meta;
    }
  },
  mounted() {
    this.fetchTemporaryHotel();
    this.fetchPetHotel();
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Permintaan Aktivasi Pet Hotel" }]);
  }
};
</script>

<style>
.pointer {
  cursor: pointer;
}

.gutter-b {
  margin-bottom: 10px;
}
</style>
