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
              @input="fetchClass()"
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
              ><i class="fa fa-plus-circle" aria-hidden="true"></i> Create Kelas
              Hewan</b-button
            >
            <b-modal ref="my-modal" hide-footer :title="modalTitle">
              <b-form ref="form" @submit.prevent="handleOk">
                <b-form-group
                  label="Name"
                  label-for="name-input"
                  invalid-feedback="Name is required"
                  :state="nameState"
                >
                  <b-form-input
                    id="name-input"
                    v-model="addForm.name"
                    :state="nameState"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-button class="mt-3" type="submit" variant="primary" block
                  >Submit</b-button
                >
              </b-form>
            </b-modal>
            <b-modal
              id="modal-prevent-closing"
              ref="modal"
              title="Submit Your Name"
              @show="resetModal"
              @hidden="resetModal"
              @ok="handleOk"
            >
              <form ref="form" @submit.stop.prevent="handleSubmit">
                <b-form-group
                  label="Name"
                  label-for="name-input"
                  invalid-feedback="Name is required"
                  :state="nameState"
                >
                  <b-form-input
                    id="name-input"
                    v-model="addForm.name"
                    :state="nameState"
                    required
                  ></b-form-input>
                </b-form-group>
              </form>
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
                    >Kelas Hewan
                    <i class="fas fa-sort ml-3" @click="fetchSort"></i
                  ></b-th>
                  <b-th>Action</b-th>
                </b-tr>
              </b-thead>
              <b-tbody>
                <b-tr v-for="(item, index) in klshewan" :key="item.id">
                  <b-td style="width: 6em;">
                    {{ ++index + (page - 1) * perPage }}
                  </b-td>
                  <b-td>{{ item.name }}</b-td>
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
                        @click="onDelete(item.id_class)"
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
              @change="fetchClass()"
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
                    @click="fetchClass(page - 1)"
                    >Previous</a
                  >
                </li>

                <li
                  class="page-item"
                  :class="{ active: pg === page }"
                  v-for="pg in totalPage"
                  :key="pg.id"
                >
                  <a class="page-link" href="#" @click="fetchClass(pg)">{{
                    pg
                  }}</a>
                </li>

                <li class="page-item" :class="{ disabled: page === totalPage }">
                  <a class="page-link" href="#" @click="fetchClass(page + 1)"
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
      modalVisible: false,
      perPage: 10,
      totalData: 0,
      totalPage: 0,
      nameState: null,
      isEdit: null,
      isDetail: null,
      submittedNames: [],
      modalTitle: "",
      // Note 'isActive' is left out and will not appear in the rendered table
      klshewan: [],
      addForm: {
        name: ""
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
      this.modalTitle = "Tambah Kelas Hewan";
      this.$refs["my-modal"].show();
      this.isEdit = false;
      this.addForm = {};
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    fetchClass(page = 1) {
      console.log(page);
      this.$api
        .post(`class/all`, {
          perPage: this.perPage,
          page: page,
          search: this.search,
          sortBy: this.sortBy,
          orderBy: this.orderBy
        })
        .then(res => {
          this.klshewan = res.data.data.data ? res.data.data.data : [];
          this.page = res.data.data.paginate.page;
          this.perPage = res.data.data.paginate.perPage;
          this.totalData = res.data.data.paginate.totalData;
          this.totalPage = res.data.data.paginate.totalPage;
          // console.log(this.totalPage);
          // this.rows = res.data.total;
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
      this.fetchClass();
    },
    onDetail(data) {
      alert("DETAIL");
      console.log(data);
    },
    onEdit(data) {
      this.showModal();
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
            .delete(`class/delete/${id}`)
            .then(res => {
              if (res.status === 200) {
                this.fetchClass();
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
          .put("class/update", this.addForm)
          .then(res => {
            if (res.status === 200) {
              this.hideModal();
              this.fetchClass();
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
          .post("class/add", this.addForm)
          .then(res => {
            if (res.status === 200) {
              this.hideModal();
              this.fetchClass();
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
        if (this.klshewan.length === this.perPage) {
          meta.endSection = this.page * this.perPage;
          meta.startSection = meta.endSection - (this.perPage - 1);
        } else {
          meta.endSection =
            this.page * this.perPage - (this.perPage - this.klshewan.length);
          meta.startSection = meta.endSection - (this.klshewan.length - 1);
        }
      }
      return meta;
    }
  },
  mounted() {
    this.fetchClass();
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Kelas Hewan" }]);
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
