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
              placeholder="Search name detail kandang hewan"
              v-model="search"
              @input="fetchProduk()"
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
              Detail Kandang</b-button
            >
            <b-modal ref="my-modal" hide-footer :title="modalTitle">
              <b-form ref="form" @submit.prevent="handleOk">
                <b-form-group
                  label="Nama Produk"
                  label-for="name-input"
                  invalid-feedback="Nama Produk is required"
                  :state="nameState"
                >
                  <b-form-input
                    id="name-input"
                    v-model="addForm.name"
                    :state="nameState"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  label="Satuan"
                  label-for="name-input"
                  invalid-feedback="Satuan is required"
                  :state="nameState"
                >
                  <b-form-input
                    id="name-input"
                    v-model="addForm.unit_type"
                    :state="nameState"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  label="Kategori Hewan"
                  label-for="name-input"
                  invalid-feedback="class is required"
                  :state="nameState"
                >
                  <b-form-select
                    v-model="addForm.category_id"
                    :label-field="ktghewan.name"
                    value-field="id_category"
                    text-field="name"
                    :options="ktghewan"
                  ></b-form-select>
                </b-form-group>
                <b-form-group
                  label="Harga"
                  label-for="name-input"
                  invalid-feedback="Harga is required"
                  :state="nameState"
                >
                  <b-form-input
                    step="0.01"
                    type="number"
                    id="name-input"
                    v-model="addForm.price"
                    :state="nameState"
                    required
                  ></b-form-input>
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
                  <b-th>Nama Produk</b-th>
                  <b-th>Kategori Hewan</b-th>
                  <b-th>Satuan</b-th>
                  <b-th>Harga</b-th>
                  <b-th>Status</b-th>
                  <b-th>Action</b-th>
                </b-tr>
              </b-thead>
              <b-tbody>
                <b-tr v-for="(item, index) in produk" :key="item.id">
                  <b-td style="width: 6em;">
                    {{ ++index + (page - 1) * perPage }}
                  </b-td>
                  <b-td>{{ item.name }}</b-td>
                  <b-td>{{ item.category.name }}</b-td>
                  <b-td>{{ item.unit_type }}</b-td>
                  <b-td>{{ Rp(item.price) }}</b-td>
                  <b-td>
                    <b-badge variant="success" v-if="item.status === 'Tersedia'"
                      >Tersedia</b-badge
                    >
                    <b-badge variant="warning" v-if="item.status === 'Kosong'"
                      >Kosong</b-badge
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
                    <b-button variant="primary" @click="onEdit(item)"
                      >Edit</b-button
                    >
                    <b-button
                      class="ml-3"
                      variant="danger"
                      @click="onDelete(item.id_product)"
                      >Delete</b-button
                    >
                    <!--                    <span class="action-button">-->
                    <!--                      <img-->
                    <!--                        class="pointer"-->
                    <!--                        style="width: 20px"-->
                    <!--                        @click="onEdit(item)"-->
                    <!--                        src="@/assets/icon/button/edit.png"-->
                    <!--                        alt="edit"-->
                    <!--                      />-->
                    <!--                    </span>-->
                    <!--                    <span class="action-button">-->
                    <!--                      <img-->
                    <!--                        class="pointer"-->
                    <!--                        style="width: 20px"-->
                    <!--                        @click="onDelete(item.id_group)"-->
                    <!--                        src="@/assets/icon/button/delete.png"-->
                    <!--                        alt="del"-->
                    <!--                      />-->
                    <!--                    </span>-->
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
              @change="fetchProduk()"
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
                    @click="fetchProduk(page - 1)"
                    >Previous</a
                  >
                </li>

                <li
                  class="page-item"
                  :class="{ active: pg === page }"
                  v-for="pg in totalPage"
                  :key="pg.id"
                >
                  <a class="page-link" href="#" @click="fetchProduk(pg)">{{
                    pg
                  }}</a>
                </li>

                <li class="page-item" :class="{ disabled: page === totalPage }">
                  <a class="page-link" href="#" @click="fetchProduk(page + 1)"
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
import { getHotelId } from "@/service/jwt.service";
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
      nameState: null,
      isEdit: null,
      isDetail: null,
      submittedNames: [],
      modalTitle: "",
      hotelId: "",
      // Note 'isActive' is left out and will not appear in the rendered table
      produk: [],
      options: [
        { text: " Tersedia ", value: "Tersedia " },
        { text: "Kosong", value: "Kosong" }
      ],
      ktghewan: [],
      addForm: {
        name: "",
        hotel_id: "",
        unit_type: "",
        category_id: "",
        price: "",
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
    Rp(rp) {
      return `Rp. ${rp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
    },
    showModal() {
      this.modalTitle = "Tambah Produk Hewan";
      this.$refs["my-modal"].show();
      this.isEdit = false;
      this.addForm = {};
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    fetchCategory() {
      this.$api
        .get(`category/all`)
        .then(res => {
          this.ktghewan = res.data.data.data ? res.data.data.data : [];
          // console.log(this.ktghewan);
        })
        .catch(err => {
          console.error(err);
          // alert(err);
        });
    },
    fetchProduk(page = 1) {
      this.$api
        .get(
          `product/all?perPage=${this.perPage}&page=${page}&search=${this.search}&sortBy=${this.sortBy}&orderBy=${this.orderBy}`
        )
        .then(res => {
          this.produk = res.data.data.data ? res.data.data.data : [];
          console.log(this.produk);
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
            .delete(`product/delete/${id}`)
            .then(res => {
              if (res.status === 200) {
                this.fetchProduk();
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
      this.addForm.quantity = parseInt(this.addForm.quantity);
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      // evt.preventDefault();
      // if (!this.$v.addForm.$error) {
      //
      // }
      if (this.addForm.price) {
        this.addForm.price = parseFloat(this.addForm.price);
      }
      console.log(this.addForm);
      if (this.isEdit) {
        this.addForm.hotel_id = this.hotelId;
        this.$api
          .put("product/update", this.addForm)
          .then(res => {
            if (res.status === 200) {
              this.hideModal();
              this.fetchProduk();
              // this.$bvModal.hide("modal-group");
              // this.toastAlert("update");
            }
          })
          .catch(err => {
            if (err.message === "Request failed with status code 409") {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Kode Produk sudah ada!",
                showConfirmButton: false,
                width: "25em",
                timer: 2500
              });
            }
          });
      } else {
        this.addForm.hotel_id = this.hotelId;
        this.$api
          .post("product/add", this.addForm)
          .then(res => {
            if (res.status === 200) {
              this.hideModal();
              this.fetchProduk();
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
        if (this.produk.length === this.perPage) {
          meta.endSection = this.page * this.perPage;
          meta.startSection = meta.endSection - (this.perPage - 1);
        } else {
          meta.endSection =
            this.page * this.perPage -
            (this.perPage - this.produk.length);
          meta.startSection = meta.endSection - (this.produk.length - 1);
        }
      }
      return meta;
    }
  },
  mounted() {
    this.fetchProduk();
    this.fetchCategory();
    this.hotelId = getHotelId();
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Makanan Hewan" }]);
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
