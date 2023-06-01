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
              placeholder="Search name reservasi hewan"
              v-model="search"
              @input="fetchReservasi()"
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
            <!--              Kategori Kandang Hewan</b-button-->
            <!--            >-->
            <b-modal ref="my-modal" hide-footer :title="modalTitle">
              <b-form ref="form" @submit.prevent="handleOk">
                <b-form-group
                  label="Kategori Kandang"
                  label-for="name-input"
                  invalid-feedback="Kategori Kandang is required"
                  :state="nameState"
                >
                  <b-form-input
                    id="name-input"
                    v-model="addForm.user.name"
                    :state="nameState"
                    disabled
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  label="Waktu Reservasi"
                  label-for="name-input"
                  invalid-feedback="Waktu Reservasi is required"
                  :state="nameState"
                >
                  <date-picker
                    format="YYYY-MM-DD HH:mm"
                    id="name-input"
                    :state="nameState"
                    v-model="addForm.CreatedAt"
                    value-type="format"
                    type="datetime"
                    :disabled="isDetail"
                    class="w-100"
                    required
                  ></date-picker>
                </b-form-group>
                <b-form-group
                  label="Waktu Masuk Hotel"
                  label-for="name-input"
                  invalid-feedback="Waktu Masuk Hotel is required"
                  :state="nameState"
                >
                  <date-picker
                    format="YYYY-MM-DD HH:mm"
                    id="name-input"
                    :state="nameState"
                    type="datetime"
                    v-model="addForm.start_date"
                    value-type="format"
                    :disabled="isDetail"
                    class="w-100"
                    required
                  ></date-picker>
                </b-form-group>
                <b-form-group
                  label="Waktu Keluar Hotel"
                  label-for="name-input"
                  invalid-feedback="Waktu Keluar Hotel is required"
                  :state="nameState"
                >
                  <date-picker
                    format="YYYY-MM-DD HH:mm"
                    id="name-input"
                    :state="nameState"
                    type="datetime"
                    v-model="addForm.end_date"
                    value-type="format"
                    :disabled="isDetail"
                    class="w-100"
                    required
                  ></date-picker>
                </b-form-group>
                <b-form-group
                  label="Total Harga"
                  label-for="name-input"
                  invalid-feedback="Total Harga is required"
                  :state="nameState"
                >
                  <b-form-input
                    step="0.01"
                    type="number"
                    id="name-input"
                    :disabled="isDetail"
                    v-model="addForm.total_cost"
                    :state="nameState"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  label="Dp Pembayaran"
                  label-for="name-input"
                  invalid-feedback="Dp Pembayaran is required"
                  :state="nameState"
                >
                  <b-form-input
                    step="0.01"
                    type="number"
                    id="name-input"
                    :disabled="isDetail"
                    v-model="addForm.dp_cost"
                    :state="nameState"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  label="Status Pembayaran"
                  label-for="name-input"
                  invalid-feedback="Status is required"
                  :state="nameState"
                >
                  <b-form-select
                    :state="nameState"
                    id="name-input"
                    :disabled="isDetail"
                    v-model="addForm.payment_status"
                    :options="['Dibayar', 'Belum Dibayar']"
                    class="per-page"
                    @change="changeStatusPembayaran(addForm)"
                    required
                  >
                  </b-form-select>
                </b-form-group>
                <b-form-group
                  label="Status Masuk"
                  label-for="name-input"
                  invalid-feedback="Status Masuk is required"
                  :state="nameState"
                >
                  <b-form-select
                    :state="nameState"
                    id="name-input"
                    :disabled="isDetail"
                    v-model="addForm.check_in_status"
                    :options="['Masuk', 'Keluar']"
                    class="per-page"
                    @change="changeStatusMasuk(addForm)"
                    required
                  >
                  </b-form-select>
                </b-form-group>
                <b-form-group
                  label="Status Masuk"
                  label-for="name-input"
                  invalid-feedback="Status Masuk is required"
                  :state="nameState"
                >
                  <b-form-select
                    :state="nameState"
                    id="name-input"
                    :disabled="isDetail"
                    v-model="addForm.reservation_status"
                    :options="['Proses', 'Diterima', 'Ditolak', 'Selesai']"
                    class="per-page"
                    @change="changeStatusReservasi(addForm)"
                    required
                  >
                  </b-form-select>
                </b-form-group>
                <b-form-checkbox v-model="addForm.agreement" disabled>
                  Menyetujui syarat dan peraturan penitipan hewan
                </b-form-checkbox>
                <!--                <b-form-group-->
                <!--                  label="Diskripsi"-->
                <!--                  label-for="name-input"-->
                <!--                  invalid-feedback="Diskripsi is required"-->
                <!--                  :state="nameState"-->
                <!--                >-->
                <!--                  <b-form-textarea-->
                <!--                    id="textarea"-->
                <!--                    v-model="addForm.description"-->
                <!--                    placeholder="Enter something..."-->
                <!--                    :state="nameState"-->
                <!--                    rows="3"-->
                <!--                    max-rows="6"-->
                <!--                    :disabled="isDetail"-->
                <!--                    required-->
                <!--                  ></b-form-textarea>-->
                <!--                </b-form-group>-->
                <!--                {{ ktghewan }}-->
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
                  <b-th>Nama</b-th>
                  <b-th>Waktu Reservasi</b-th>
                  <b-th>Masuk Hotel</b-th>
                  <b-th>Keluar Hotel</b-th>
                  <b-th>Total Pembayaran</b-th>
                  <b-th>Status Pembayaran</b-th>
                  <b-th>Status Masuk</b-th>
                  <b-th>Status Reservasi</b-th>
                  <b-th>Action</b-th>
                </b-tr>
              </b-thead>
              <b-tbody>
                <b-tr v-for="(item, index) in reservasi" :key="item.id">
                  <b-td style="width: 6em;">
                    {{ ++index + (page - 1) * perPage }}
                  </b-td>
<!--                  <b-td>{{ item }}</b-td>-->
                  <b-td>{{ item.user.name }}</b-td>
                  <b-td>{{ convertDate(item.CreatedAt) }}</b-td>
                  <b-td>{{ convertDate(item.start_date) }}</b-td>
                  <b-td>{{ convertDate(item.end_date) }}</b-td>
                  <b-td>{{ Rp(item.total_cost) }}</b-td>
                  <b-td>
                    <b-badge
                      variant="success"
                      v-if="item.payment_status === 'Dibayar'"
                      >Dibayar</b-badge
                    >
                    <b-badge
                      variant="warning"
                      v-if="item.payment_status === 'Belum Dibayar'"
                      >Belum Dibayar</b-badge
                    >
                  </b-td>
                  <b-td>
                    <b-badge
                      variant="success"
                      v-if="item.check_in_status === 'Masuk'"
                      >Masuk</b-badge
                    >
                    <b-badge
                      variant="warning"
                      v-if="item.check_in_status === 'Keluar'"
                      >Keluar</b-badge
                    >
                  </b-td>
                  <b-td>
                    <b-badge
                      variant="warning"
                      v-if="item.reservation_status === 'Proses'"
                      >Diproses</b-badge
                    >
                    <b-badge
                      variant="success"
                      v-if="item.reservation_status === 'Diterima'"
                      >Diterima</b-badge
                    >
                    <b-badge
                      variant="danger"
                      v-if="item.reservation_status === 'Ditolak'"
                      >Ditolak</b-badge
                    >
                    <b-badge
                      variant="primary"
                      v-if="item.reservation_status === 'Selesai'"
                      >Selesai</b-badge
                    >
                  </b-td>
                  <b-td class="action-cols-1">
                    <div>
                      <button
                        :id="`popover-1-${item.id_reservation}`"
                        class="btn btn-invc p-0"
                      >
                        <div class="action-wrapper">
                          <img
                            src="@/assets/icon/button/actions.png"
                            alt="actions-btn"
                          />
                        </div>
                      </button>
                      <b-popover
                        :target="`popover-1-${item.id_reservation}`"
                        placement="right"
                        triggers="hover"
                      >
                        <div class="action-wrapper font-12">
                          <table>
                            <div></div>
                            <tr class="pointer" @click="onDetail(item)">
                              <td>Detail</td>
                            </tr>
                            <tr class="pointer" @click="onEdit(item)">
                              <td>Edit</td>
                            </tr>
                            <tr
                              class="pointer"
                              @click="onDelete(item.id_reservation)"
                            >
                              <td>Delete</td>
                            </tr>
                          </table>
                        </div>
                      </b-popover>
                    </div></b-td
                  >
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
              @change="fetchReservasi()"
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
                    @click="fetchReservasi(page - 1)"
                    >Previous</a
                  >
                </li>

                <li
                  class="page-item"
                  :class="{ active: pg === page }"
                  v-for="pg in totalPage"
                  :key="pg.id"
                >
                  <a class="page-link" href="#" @click="fetchReservasi(pg)">{{
                    pg
                  }}</a>
                </li>

                <li class="page-item" :class="{ disabled: page === totalPage }">
                  <a
                    class="page-link"
                    href="#"
                    @click="fetchReservasi(page + 1)"
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
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import moment from "moment";
import Swal from "sweetalert2";
import { getHotelId } from "@/service/jwt.service";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
export default {
  components: {
    KTCard,
    DatePicker
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
      // optionsPembayaran: [
      //   { text: " Dibayar ", value: "Dibayar " },
      //   { text: "Belum Dibayar", value: "Belum Dibayar" }
      // ],
      optionsStatus: [
        { text: " Masuk ", value: "Masuk " },
        { text: "Keluar", value: "Keluar" }
      ],
      optionsReservasi: [
        { text: " Proses ", value: "Proses " },
        { text: "Diterima", value: "Diterima" },
        { text: "Ditolak", value: "Ditolak" },
        { text: "Selesai", value: "Selesai" }
      ],
      // Note 'isActive' is left out and will not appear in the rendered table
      reservasi: [],
      hotel: [],
      addForm: {
        user: {},
        reservation_detail: [],
        hotel_id: "",
        CreatedAt: "",
        start_date: "",
        end_date: "",
        total_cost: "",
        dp_cost: "",
        payment_status: "",
        check_in_status: "",
        reservation_status: "",
        agreement: ""
      }
      // validations: {
      //   addForm: {
      //     name: { required }
      //   }
      // }
    };
  },
  methods: {
    convertDate(date_moment) {
      return moment(String(date_moment))
        .locale("id")
        .format("DD-MM-YYYY HH:mm ");
    },
    convertDateForm(date_moment) {
      return moment(String(date_moment))
        .locale("id")
        .format("YYYY-MM-DD HH:mm");
    },
    Rp(rp) {
      return `Rp. ${rp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
    },
    showModal() {
      this.$refs["my-modal"].show();
      this.isEdit = false;
      this.addForm = {};
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    // fetchUser() {
    //   this.$api
    //     .get(`category/all`)
    //     .then(res => {
    //       this.ktghewan = res.data.data.data ? res.data.data.data : [];
    //       // console.log(this.ktghewan);
    //     })
    //     .catch(err => {
    //       console.error(err);
    //       // alert(err);
    //     });
    // },
    changeStatusPembayaran(data) {
      console.log(data);
      this.$api
        .put(`reservation/paymentStatus`, {
          id_reservation: data.id_reservation,
          payment_status: data.payment_status
        })
        .then(() => {
          this.fetchRequest();
        });
    },
    changeStatusMasuk(data) {
      console.log(data);
      this.$api
        .put(`reservation/checkinStatus`, {
          id_reservation: data.id_reservation,
          check_in_status: data.check_in_status
        })
        .then(() => {
          this.fetchRequest();
        });
    },
    changeStatusReservasi(data) {
      console.log(data);
      this.$api
        .put(`reservation/reservationStatus`, {
          id_reservation: data.id_reservation,
          reservation_status: data.reservation_status
        })
        .then(() => {
          this.fetchRequest();
        });
    },
    fetchReservasi(page = 1) {
      this.$api
        .get(
          `reservation/all?perPage=${this.perPage}&page=${page}&search=${this.search}&sortBy=${this.sortBy}&orderBy=${this.orderBy}`
        )
        .then(res => {
          this.reservasi = res.data.data.data ? res.data.data.data : [];
          console.log(this.reservasi);
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
      this.showModal();
      this.isDetail = true;
      this.modalTitle = `${data.user.name} Details`;
      this.isEdit = false;
      this.addForm = Object.assign({}, data);
    },
    onEdit(data) {
      this.showModal();
      this.isEdit = true;
      this.modalTitle = `Edit ${data.user.name}`;
      this.isDetail = false;
      this.addForm = Object.assign({}, data);
      this.addForm.start_date = this.convertDateForm(this.addForm.start_date);
      this.addForm.end_date = this.convertDateForm(this.addForm.end_date);
      this.addForm.CreatedAt = this.convertDateForm(this.addForm.CreatedAt);
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
            .delete(`reservation/delete/${id}`)
            .then(res => {
              if (res.status === 200) {
                this.fetchReservasi();
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
        this.addForm.hotel_id = this.hotelId;
        this.$api
          .put("reservation/update", this.addForm)
          .then(res => {
            if (res.status === 200) {
              this.hideModal();
              this.fetchReservasi();
              // this.$bvModal.hide("modal-service");
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
          .post("reservation/add", this.addForm)
          .then(res => {
            if (res.status === 200) {
              this.hideModal();
              this.fetchReservasi();
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
        if (this.reservasi.length === this.perPage) {
          meta.endSection = this.page * this.perPage;
          meta.startSection = meta.endSection - (this.perPage - 1);
        } else {
          meta.endSection =
            this.page * this.perPage - (this.perPage - this.reservasi.length);
          meta.startSection = meta.endSection - (this.reservasi.length - 1);
        }
      }
      return meta;
    }
  },
  mounted() {
    this.fetchReservasi();
    this.hotelId = getHotelId();
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Reservasi Hewan" }]);
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
