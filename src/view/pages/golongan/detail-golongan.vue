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
              placeholder="Search name detal golongan hewan"
              v-model="search"
              @input="fetchdetailGroup()"
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
              ><i class="fa fa-plus-circle" aria-hidden="true"></i> Create
              Detail Golongan Hewan</b-button
            >
            <b-modal ref="my-modal" hide-footer :title="modalTitle">
              <b-form ref="form" @submit.prevent="handleOk">
                <b-form-group
                  label="Minimal Berat"
                  label-for="name-input"
                  invalid-feedback="group is required"
                  :state="nameState"
                >
                  <b-form-input
                    step="0.01"
                    type="number"
                    id="name-input"
                    v-model="addForm.min_weight"
                    :state="nameState"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  label="Maksimal Berat"
                  label-for="name-input"
                  invalid-feedback="group is required"
                  :state="nameState"
                >
                  <b-form-input
                    step="0.01"
                    type="number"
                    id="name-input"
                    v-model="addForm.max_weight"
                    :state="nameState"
                    required
                  ></b-form-input>
                </b-form-group>
                <!--                {{ spesies }}-->
                <!--                <b-form-group-->
                <!--                  label="Hotel"-->
                <!--                  label-for="name-input"-->
                <!--                  invalid-feedback="Hotel is required"-->
                <!--                  :state="nameState"-->
                <!--                >-->
                <!--                  <b-form-select-->
                <!--                    v-model="addForm.hotel_id"-->
                <!--                    :label-field="hotel.name"-->
                <!--                    value-field="id_hotel"-->
                <!--                    text-field="name"-->
                <!--                    :options="hotel"-->
                <!--                  ></b-form-select>-->
                <!--                </b-form-group>-->
                <b-form-group
                  label="Spesies"
                  label-for="name-input"
                  invalid-feedback="spesies is required"
                  :state="nameState"
                >
                  <b-form-select
                    v-model="addForm.species_id"
                    :label-field="spesies.name"
                    value-field="id_species"
                    text-field="name"
                    :options="spesies"
                  ></b-form-select>
                </b-form-group>
                <b-form-group
                  label="Golongan"
                  label-for="name-input"
                  invalid-feedback="golongan is required"
                  :state="nameState"
                >
                  <b-form-select
                    v-model="addForm.group_id"
                    :label-field="golongan.name"
                    value-field="id_group"
                    text-field="name"
                    :options="golongan"
                  ></b-form-select>
                </b-form-group>
                <b-button class="mt-3" type="submit" variant="primary" block
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
                  <b-th>Golongan</b-th>
                  <b-th>Spesies</b-th>
                  <!--                  <b-th>Hotel</b-th>-->
                  <b-th>Minimal Berat (Kg)</b-th>
                  <b-th>Maksimal Berat (Kg)</b-th>
                  <b-th>Action</b-th>
                </b-tr>
              </b-thead>
              <b-tbody>
                <b-tr v-for="(item, index) in detailgol" :key="item.id">
                  <b-td style="width: 6em;">
                    {{ ++index + (page - 1) * perPage }}
                  </b-td>
                  <b-td>{{ item.group.name }}</b-td>
                  <b-td>{{ item.species.name }}</b-td>
                  <!--                  <b-td>{{ item.hotel.name }}</b-td>-->
                  <b-td>{{ item.min_weight }}</b-td>
                  <b-td>{{ item.max_weight }}</b-td>
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
                        @click="onDelete(item.id_group_detail)"
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
              @change="fetchdetailGroup()"
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
                    @click="fetchdetailGroup(page - 1)"
                    >Previous</a
                  >
                </li>

                <li
                  class="page-item"
                  :class="{ active: pg === page }"
                  v-for="pg in totalPage"
                  :key="pg.id"
                >
                  <a class="page-link" href="#" @click="fetchdetailGroup(pg)">{{
                    pg
                  }}</a>
                </li>

                <li class="page-item" :class="{ disabled: page === totalPage }">
                  <a
                    class="page-link"
                    href="#"
                    @click="fetchdetailGroup(page + 1)"
                    >Next</a
                  >
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </template>
      <div class="mt-3">
        <b-badge
          ><a style="font-size: larger"
            > <a>Informasi :</a> Tambahkan permintaan species baru jika belum terdaftar didalam
            detail golongan!!!</a
          ></b-badge
        >
      </div>
      <div class="mt-15">
        <spesiesBaru></spesiesBaru>
      </div>
    </div>
  </div>
</template>

<script>
import KTCard from "@/view/content/Card.vue";
import spesiesBaru from "@/view/pages/componen-golongan/spesies-baru";
// import { required } from "vuelidate/lib/validators";
import Swal from "sweetalert2";
import { getHotelId } from "@/service/jwt.service";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
export default {
  components: {
    KTCard,
    spesiesBaru
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
      nameState: null,
      isEdit: null,
      isDetail: null,
      submittedNames: [],
      modalTitle: "",
      hotelId: "",
      // Note 'isActive' is left out and will not appear in the rendered table
      detailgol: [],
      hotel: [],
      golongan: [],
      spesies: [],
      addForm: {
        name: "",
        hotel_id: "",
        group_id: "",
        species_id: "",
        min_weight: "",
        max_weight: ""
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
      this.modalTitle = "Tambah Detail Golongan Hewan";
      this.$refs["my-modal"].show();
      this.isEdit = false;
      this.addForm = {};
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    // fetchHotel() {
    //   this.$api
    //     .get(`hotel/all`)
    //     .then(res => {
    //       this.hotel = res.data.data.data ? res.data.data.data : [];
    //       // console.log(this.klshewan);
    //     })
    //     .catch(err => {
    //       console.error(err);
    //       // alert(err);
    //     });
    // },
    fetchSpesies() {
      this.$api
        .get(`species/all`)
        .then(res => {
          this.spesies = res.data.data.data ? res.data.data.data : [];
          // console.log(this.spesies);
        })
        .catch(err => {
          console.error(err);
          // alert(err);
        });
    },
    fetchGroup() {
      this.$api
        .get(`group/all`)
        .then(res => {
          this.golongan = res.data.data.data ? res.data.data.data : [];
          // console.log(this.spesies);
        })
        .catch(err => {
          console.error(err);
          // alert(err);
        });
    },
    fetchdetailGroup(page = 1) {
      this.$api
        .get(
          `groupDetail/all?perPage=${this.perPage}&page=${page}&search=${this.search}&sortBy=${this.sortBy}&orderBy=${this.orderBy}`
        )
        .then(res => {
          this.detailgol = res.data.data.data ? res.data.data.data : [];
          console.log(this.detailgol);
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
      this.modalTitle = `Edit ${data.species.name}`;
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
            .delete(`groupDetail/delete/${id}`)
            .then(res => {
              if (res.status === 200) {
                this.fetchdetailGroup();
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
      if (this.addForm.min_weight) {
        this.addForm.min_weight = parseFloat(this.addForm.min_weight);
      }
      if (this.addForm.max_weight) {
        this.addForm.max_weight = parseFloat(this.addForm.max_weight);
      }
      console.log(this.addForm);
      if (this.isEdit) {
        this.addForm.hotel_id = this.hotelId;
        this.$api
          .put("groupDetail/update", this.addForm)
          .then(res => {
            if (res.status === 200) {
              this.hideModal();
              this.fetchdetailGroup();
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
              // this.$bvModal.hide("modal-group");
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
        this.addForm.hotel_id = this.hotelId;
        this.$api
          .post("groupDetail/add", this.addForm)
          .then(res => {
            if (res.status === 201) {
              this.hideModal();
              this.fetchdetailGroup();
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
        if (this.detailgol.length === this.perPage) {
          meta.endSection = this.page * this.perPage;
          meta.startSection = meta.endSection - (this.perPage - 1);
        } else {
          meta.endSection =
            this.page * this.perPage - (this.perPage - this.detailgol.length);
          meta.startSection = meta.endSection - (this.detailgol.length - 1);
        }
      }
      return meta;
    }
  },
  mounted() {
    this.fetchdetailGroup();
    this.fetchSpesies();
    this.fetchGroup();
    this.hotelId = getHotelId();
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Detail Golongan Hewan" }]);
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
