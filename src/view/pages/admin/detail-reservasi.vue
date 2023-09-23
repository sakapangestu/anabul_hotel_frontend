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
        <div class="col-5 mt-4">
          <div>
            <date-picker
              v-model="date_reservation"
              @input="fetchReservasi()"
              range
            >
            </date-picker>
            <button
              type="button"
              class="btn btn-sm btn-secondary ml-5"
              @click="resetReservasi"
            >
              <!--      <i class="fa fa-refresh mr-1" aria-hidden="true"></i>-->
              <i class="fas fa-redo"></i>
              Reset
            </button>
            <b-modal ref="my-modal" size="xl" hide-footer :title="modalTitle">
              <b-form ref="form" @submit.prevent="handleOk">
                <div class="row">
                  <div class="col">
                    <b-form-group
                      label="Nama *"
                      label-for="name-input"
                      invalid-feedback="Nama is required"
                    >
                      <b-form-input
                        id="name-input"
                        v-model="addForm.user.name"
                        required
                        disabled
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group
                      label="Waktu Reservasi *"
                      label-for="name-input"
                      invalid-feedback="Waktu Reservasi is required"
                    >
                      <date-picker
                        format="YYYY-MM-DD HH:mm"
                        id="name-input"
                        v-model="addForm.CreatedAt"
                        value-type="format"
                        type="datetime"
                        :disabled="isDetail"
                        class="w-100"
                        required
                      ></date-picker>
                    </b-form-group>
                    <b-form-group
                      label="Waktu Masuk Hotel *"
                      label-for="name-input"
                      invalid-feedback="Waktu Masuk Hotel is required"
                    >
                      <date-picker
                        format="YYYY-MM-DD HH:mm"
                        id="name-input"
                        type="datetime"
                        v-model="addForm.start_date"
                        value-type="format"
                        :disabled="isDetail"
                        class="w-100"
                        required
                      ></date-picker>
                    </b-form-group>
                    <b-form-group
                      label="Waktu Keluar Hotel *"
                      label-for="name-input"
                      invalid-feedback="Waktu Keluar Hotel is required"
                    >
                      <date-picker
                        format="YYYY-MM-DD HH:mm"
                        id="name-input"
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
                    >
                      <b-form-input
                        type="number"
                        id="name-input"
                        :disabled="isDetail"
                        v-model="addForm.total_cost"
                      ></b-form-input>
                    </b-form-group>
                    <!--                    <b-form-group-->
                    <!--                      label="Dp Pembayaran"-->
                    <!--                      label-for="name-input"-->
                    <!--                      invalid-feedback="Dp Pembayaran is required"-->
                    <!--                    >-->
                    <!--                      <b-form-input-->
                    <!--                        type="number"-->
                    <!--                        id="name-input"-->
                    <!--                        :disabled="isDetail"-->
                    <!--                        v-model="addForm.dp_cost"-->
                    <!--                      ></b-form-input>-->
                    <!--                    </b-form-group>-->
                    <b-form-group
                      label="Uang Pembayaran"
                      label-for="name-input"
                      invalid-feedback="Dp Pembayaran is required"
                    >
                      <b-form-input
                        type="number"
                        id="name-input"
                        :disabled="isDetail"
                        v-model="addForm.payment"
                        @input="HasilPerhitungan"
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group
                      label="Kembalian Pembayaran"
                      label-for="name-input"
                      invalid-feedback="Kembalian Pembayaran is required"
                    >
                      <b-form-input
                        type="number"
                        id="name-input"
                        :disabled="isDetail"
                        v-model="addForm.change"
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group
                      label="Status Reservasi"
                      label-for="name-input"
                      invalid-feedback="Status Reservasi is required"
                    >
                      <b-form-select
                        id="name-input"
                        :disabled="isDetail"
                        v-model="addForm.reservation_status"
                        :options="['Proses', 'Diterima', 'Ditolak', 'Selesai']"
                        class="per-page"
                        @change="changeStatusReservasi(addForm)"
                      >
                      </b-form-select>
                    </b-form-group>
                    <b-form-group
                      label="Status Pembayaran"
                      label-for="name-input"
                      invalid-feedback="Status is required"
                    >
                      <b-form-select
                        id="name-input"
                        :disabled="isDetail"
                        v-model="addForm.payment_status"
                        :options="['Dibayar', 'Belum Dibayar']"
                        class="per-page"
                        @change="changeStatusPembayaran(addForm)"
                      >
                      </b-form-select>
                    </b-form-group>
                    <b-form-group
                      label="Status Masuk"
                      label-for="name-input"
                      invalid-feedback="Status Masuk is required"
                    >
                      <b-form-select
                        id="name-input"
                        :disabled="isDetail"
                        v-model="addForm.check_in_status"
                        :options="['Masuk', 'Keluar']"
                        class="per-page"
                        @change="changeStatusMasuk(addForm)"
                      >
                      </b-form-select>
                    </b-form-group>

                    <b-form-group
                      label="Keterangan Penolakan"
                      label-for="name-input"
                      invalid-feedback="Keterangan Penolakan is required"
                      v-if="addForm.reservation_status === 'Ditolak'"
                    >
                      <b-form-input
                        type="text"
                        id="name-input"
                        v-model="addForm.reject_reason"
                      ></b-form-input>
                    </b-form-group>
                    <div
                      class="btn btn-primary"
                      @click="changeStatusReservasiReject(addForm)"
                      v-if="addForm.reservation_status === 'Ditolak'"
                    >
                      Submit Status
                    </div>
                    <b-form-checkbox v-model="addForm.agreement" disabled>
                      Menyetujui syarat dan peraturan penitipan hewan
                    </b-form-checkbox>
                    <!--                    <div class="col">-->
                    <!--                      <inventoris></inventoris>-->
                    <!--                    </div>-->
                  </div>
                  <div class="col">
                    <div v-for="(pet, index) in petDetails" :key="pet.id">
                      <b-button
                        @click="fetchCageByCageDetailID(pet.cage_detail_id)"
                        v-b-toggle="'collapse-' + index"
                        class="m-1"
                      >
                        Detail Reservasi Hewan {{ index + 1 }}
                      </b-button>
                      <b-button
                        v-if="index === petDetails.length - 1 && index !== 0"
                        @click="deletePet"
                        >X</b-button
                      >
                      <b-collapse :id="'collapse-' + index">
                        <b-card>
                          <b-form-group
                            label="Nama Hewan *"
                            label-for="name-input"
                            invalid-feedback="Nama Hewan is required"
                          >
                            <b-form-select
                              v-model="pet.pet_id"
                              :label-field="pets.name"
                              value-field="id_pet"
                              text-field="name"
                              :disabled="isDetail"
                              :options="pets"
                              required
                            ></b-form-select>
                          </b-form-group>
                          <b-form-group
                            label="Berat Hewan *"
                            label-for="name-input"
                            invalid-feedback="Berat hewan is required"
                          >
                            <b-form-input
                              type="number"
                              id="name-input"
                              :disabled="isDetail"
                              v-model="pet.weight"
                              required
                            ></b-form-input>
                          </b-form-group>
                          <b-form-group
                            label="Golongan Hewan"
                            label-for="name-input"
                            invalid-feedback="Golongan Hewan is required"
                          >
                            <b-form-select
                              v-model="pet.group_id"
                              :label-field="golongan.name"
                              value-field="id_group"
                              text-field="name"
                              :disabled="isDetail"
                              :options="golongan"
                            ></b-form-select>
                          </b-form-group>
                          <b-form-group
                            label="Detail Kandang *"
                            label-for="name-input"
                            invalid-feedback="Detail Kandang is required"
                          >
                            <b-form-select
                              v-model="pet.cage_detail_id"
                              :disabled="isDetail"
                              required
                            >
                              <!--                              <option :value="null" disabled>-->
                              <!--                                &#45;&#45; Please select an option &#45;&#45;-->
                              <!--                              </option>-->
                              <option
                                v-for="det in detailkandang"
                                :key="det.id"
                                :value="det.cage_detail_id"
                              >
                                {{ det.cage_category }}
                                {{ det.cage_type }}
                              </option>
                            </b-form-select>
                          </b-form-group>
                          <b-form-group
                            label="Kandang Hewan"
                            label-for="name-input"
                            invalid-feedback="Kandang Hewan is required"
                          >
                            <!--                            {{ pet.cage_id }}-->
                            <b-form-select
                              v-model="pet.cage_id"
                              :label-field="kandang.name"
                              value-field="id_cage"
                              :disabled="isDetail"
                              text-field="name"
                              :options="kandang"
                            ></b-form-select>
                          </b-form-group>
                          <b-form-group
                            label="Status Vaksin *"
                            label-for="name-input"
                            invalid-feedback="Status Vaksin is required"
                          >
                            <b-form-input
                              type="text"
                              id="name-input"
                              :disabled="isDetail"
                              v-model="pet.vaccination"
                              required
                            ></b-form-input>
                          </b-form-group>
                          <b-form-group
                            label="Alergi Makanan"
                            label-for="name-input"
                            invalid-feedback="Alergis required"
                          >
                            <b-form-input
                              type="text"
                              id="name-input"
                              :disabled="isDetail"
                              v-model="pet.allergy"
                            ></b-form-input>
                          </b-form-group>
                          <b-form-group
                            label="Penyakit Kutu *"
                            label-for="name-input"
                            invalid-feedback="Penyakit Kutu required"
                          >
                            <b-form-input
                              type="text"
                              id="name-input"
                              :disabled="isDetail"
                              v-model="pet.flea_disease"
                              required
                            ></b-form-input>
                          </b-form-group>
                          <b-form-group
                            label="Riwayat Penyakit Lain"
                            label-for="name-input"
                            invalid-feedback="Riwayat Penyakit Lain required"
                          >
                            <b-form-input
                              type="text"
                              id="name-input"
                              :disabled="isDetail"
                              v-model="pet.another_disease"
                            ></b-form-input>
                          </b-form-group>
                          <b-form-group
                            label="Nama Staff"
                            label-for="name-input"
                            invalid-feedback="Nama Staff is required"
                          >
                            <b-form-select
                              v-model="pet.staff_id"
                              :label-field="staff.name"
                              value-field="id"
                              :disabled="isDetail"
                              text-field="name"
                              :options="staff"
                            ></b-form-select>
                          </b-form-group>
                          <!--                          <b-form-group-->
                          <!--                            label="Biaya Kandang"-->
                          <!--                            label-for="name-input"-->
                          <!--                            invalid-feedback="Harga is required"-->
                          <!--                          >-->
                          <!--                            <b-form-input-->
                          <!--                              type="number"-->
                          <!--                              id="name-input"-->
                          <!--                              :disabled="isDetail"-->
                          <!--                              v-model="pet.cage_cost"-->
                          <!--                            ></b-form-input>-->
                          <!--                          </b-form-group>-->
                          <!--                          <b-form-group-->
                          <!--                            label="Total Biaya Perhewan"-->
                          <!--                            label-for="name-input"-->
                          <!--                            invalid-feedback="Harga is required"-->
                          <!--                          >-->
                          <!--                            <b-form-input-->
                          <!--                              type="number"-->
                          <!--                              :disabled="isDetail"-->
                          <!--                              id="name-input"-->
                          <!--                              v-model="pet.subtotal_cost"-->
                          <!--                            ></b-form-input>-->
                          <!--                          </b-form-group>-->
                          <div
                            v-for="(ly,
                            indexLayanan) in pet.reservation_services"
                            :key="ly.id"
                          >
                            <b-button
                              v-b-toggle="'collapseL-' + index + indexLayanan"
                              class="m-1"
                            >
                              Detail Layanan {{ indexLayanan + 1 }}
                            </b-button>
                            <b-button
                              v-if="
                                indexLayanan ===
                                  pet.reservation_services.length - 1 &&
                                  indexLayanan !== 0
                              "
                              @click="deleteLayanan(index)"
                              >X</b-button
                            >
                            <b-collapse
                              :id="'collapseL-' + index + indexLayanan"
                            >
                              <b-form-group
                                label="Nama Layanan *"
                                label-for="name-input"
                                invalid-feedback="Nama Layanan is required"
                              >
                                <b-form-select
                                  v-model="ly.service_id"
                                  :label-field="layanan.name"
                                  value-field="id_service"
                                  text-field="name"
                                  :disabled="isDetail"
                                  :options="layanan"
                                  required
                                ></b-form-select>
                              </b-form-group>
                              <b-form-group
                                label="Kuantitas Layanan *"
                                label-for="name-input"
                                invalid-feedback="Harga is required"
                              >
                                <b-form-input
                                  type="number"
                                  id="name-input"
                                  :disabled="isDetail"
                                  v-model="ly.quantity"
                                  required
                                ></b-form-input>
                              </b-form-group>
                              <b-form-group
                                label="Catatan Layanan"
                                label-for="name-input"
                                invalid-feedback="Catatan Layanan required"
                              >
                                <b-form-input
                                  type="text"
                                  id="name-input"
                                  :disabled="isDetail"
                                  v-model="ly.note"
                                ></b-form-input>
                              </b-form-group>
                              <!--                              <b-form-group-->
                              <!--                                label="Biaya Layanan"-->
                              <!--                                label-for="name-input"-->
                              <!--                                invalid-feedback="Harga is required"-->
                              <!--                              >-->
                              <!--                                <b-form-input-->
                              <!--                                  type="number"-->
                              <!--                                  id="name-input"-->
                              <!--                                  disabled-->
                              <!--                                  v-model="ly.service_cost"-->
                              <!--                                ></b-form-input>-->
                              <!--                              </b-form-group>-->
                              Detail Layanan
                            </b-collapse>
                          </div>
                          <b-button
                            variant="primary"
                            @click="addLayanan(index)"
                          >
                            Tambah Layanan
                          </b-button>
                          <div
                            v-for="(mk, indexMkn) in pet.reservation_products"
                            :key="mk.id"
                          >
                            <b-button
                              v-b-toggle="'collapseM-' + index + indexMkn"
                              class="m-1"
                            >
                              Detail Makanan {{ indexMkn + 1 }}
                            </b-button>
                            <b-button
                              v-if="
                                indexMkn ===
                                  pet.reservation_products.length - 1 &&
                                  indexMkn !== 0
                              "
                              @click="deleteMakanan(index)"
                              >X</b-button
                            >
                            <b-collapse :id="'collapseM-' + index + indexMkn">
                              <b-form-group
                                label="Nama Makanan *"
                                label-for="name-input"
                                invalid-feedback="Nama Layanan is required"
                              >
                                <b-form-select
                                  v-model="mk.product_id"
                                  :label-field="produk.name"
                                  value-field="id_product"
                                  text-field="name"
                                  :disabled="isDetail"
                                  :options="produk"
                                  required
                                ></b-form-select>
                              </b-form-group>
                              <b-form-group
                                label="Kuantitas Makanan *"
                                label-for="name-input"
                                invalid-feedback="Harga is required"
                              >
                                <b-form-input
                                  type="number"
                                  id="name-input"
                                  :disabled="isDetail"
                                  v-model="mk.quantity"
                                  required
                                ></b-form-input>
                              </b-form-group>
                              <b-form-group
                                label="Catatan Makanan"
                                label-for="name-input"
                                invalid-feedback="Catatan Layanan required"
                              >
                                <b-form-input
                                  type="text"
                                  id="name-input"
                                  :disabled="isDetail"
                                  v-model="mk.note"
                                ></b-form-input>
                              </b-form-group>
                              <!--                              <b-form-group-->
                              <!--                                label="Biaya Makanan"-->
                              <!--                                label-for="name-input"-->
                              <!--                                invalid-feedback="Harga is required"-->
                              <!--                              >-->
                              <!--                                <b-form-input-->
                              <!--                                  type="number"-->
                              <!--                                  id="name-input"-->
                              <!--                                  disabled-->
                              <!--                                  v-model="mk.product_cost"-->
                              <!--                                ></b-form-input>-->
                              <!--                              </b-form-group>-->
                              Detail Makanan
                            </b-collapse>
                          </div>
                          <b-button
                            variant="primary"
                            @click="addMakanan(index)"
                          >
                            Tambah Makanan
                          </b-button>
                        </b-card>
                      </b-collapse>
                    </div>
                    <b-button variant="primary" @click="addPet">
                      Tambah Hewan
                    </b-button>
                  </div>
                  <div class="col">
                    <div v-for="(ivt, index) in petInventoris" :key="ivt.id">
                      <b-button v-b-toggle="'collapseivt-' + index" class="m-1">
                        Detail Mainan Hewan {{ index + 1 }}
                      </b-button>
                      <b-button
                        v-if="index === petInventoris.length - 1 && index !== 0"
                        @click="deleteIvt"
                        >X</b-button
                      >
                      <b-collapse :id="'collapseivt-' + index">
                        <b-card>
                          <b-form-group
                            label="Barang Pelanggan"
                            label-for="name-input"
                            invalid-feedback="Barang Pelanggan required"
                          >
                            <b-form-input
                              type="text"
                              id="name-input"
                              :disabled="isDetail"
                              v-model="ivt.name"
                            ></b-form-input>
                          </b-form-group>
                          <b-form-group
                            label="Jumlah Barang"
                            label-for="name-input"
                            invalid-feedback="Berat hewan is required"
                          >
                            <b-form-input
                              type="number"
                              id="name-input"
                              :disabled="isDetail"
                              v-model="ivt.quantity"
                            ></b-form-input>
                          </b-form-group>
                          <b-form-group
                            label="Catatan Barang Pelanggan"
                            label-for="name-input"
                            invalid-feedback="Barang Pelanggan required"
                          >
                            <b-form-input
                              type="text"
                              id="name-input"
                              :disabled="isDetail"
                              v-model="ivt.note"
                            ></b-form-input>
                          </b-form-group>
                        </b-card>
                      </b-collapse>
                    </div>
                    <b-button variant="primary" @click="addIvt">
                      Tambah Mainan
                    </b-button>
                  </div>
                </div>
                <b-button class="mt-3" type="submit" variant="primary" block
                  >Submit</b-button
                >
              </b-form>
            </b-modal>
            <b-modal
              ref="my-modalinvoice"
              size="lg"
              hide-footer
              :title="modalTitleInvoice"
            >
              <div class="container">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="card">
                      <div class="card-body">
                        <div class="row">
                          <div class="col-sm-6">
                            <div class="text-muted">
                              <h5 class="font-size-16 mb-3">Nama Customor:</h5>
                              <h5 class="font-size-15 mb-2">
                                {{ invoice.name }}
                              </h5>
                            </div>
                            <div class="text-muted">
                              <h5 class="font-size-16 mb-3">ID Reservasi:</h5>
                              <h5 class="font-size-15 mb-2">
                                {{ invoice.id_reservation }}
                              </h5>
                            </div>
                          </div>
                          <!-- end col -->
                          <div class="col-sm-6">
                            <div class="text-muted text-sm-end">
                              <div>
                                <h5 class="font-size-15 mb-1">
                                  Waktu Mulai Reservasi:
                                </h5>
                                <p>
                                  {{ convertDateInvoice(this.form.start_date) }}
                                </p>
                              </div>
                              <div class="mt-4">
                                <h5 class="font-size-15 mb-1">
                                  Waktu Selesai Reservasi:
                                </h5>
                                <p>
                                  {{ convertDateInvoice(this.form.end_date) }}
                                </p>
                              </div>
                            </div>
                          </div>
                          <!-- end col -->
                        </div>
                        <!-- end row -->

                        <div class="py-2">
                          <h5 class="font-size-15">Order Summary</h5>

                          <div class="table-responsive">
                            <table
                              class="table align-middle table-nowrap table-centered mb-0"
                            >
                              <thead>
                                <tr>
                                  <th style="width: 70px;">No.</th>
                                  <th>Nama Hewan</th>
                                  <th>Harga Kandang</th>
                                  <th>Harga Layanan</th>
                                  <th>Harga Produk</th>
                                  <th class="text-end" style="width: 120px;">
                                    Sub Total
                                  </th>
                                </tr>
                              </thead>
                              <!-- end thead -->
                              <tbody>
                                <!-- end tr -->
                                <tr
                                  v-for="(item, index) in invoice.detail"
                                  :key="item.id"
                                >
                                  <td>{{ ++index }}</td>
                                  <td>{{ item.pet }}</td>
                                  <td>{{ Rp(item.cage_cost) }}</td>
                                  <td>{{ Rp(item.total_service_cost) }}</td>
                                  <td>{{ Rp(item.total_product_cost) }}</td>
                                  <td>{{ Rp(item.subtotal_cost) }}</td>
                                </tr>

                                <tr>
                                  <th
                                    scope="row"
                                    colspan="4"
                                    class="border-0 text-end"
                                  >
                                    Total :
                                  </th>
                                  <td class="border-0 text-end">
                                    <h6 class="m-0 fw-semibold">
                                      {{ Rp(this.form.total_cost) }}
                                    </h6>
                                  </td>
                                </tr>
                                <!-- end tr -->
                              </tbody>
                              <!-- end tbody -->
                            </table>
                            <!-- end table -->
                          </div>
                          <!-- end table responsive -->
                          <div class="d-print-none mt-4">
                            <div class="float-end">
                              <a
                                href="javascript:window.print()"
                                class="btn btn-success me-1"
                                ><i class="fa fa-print"></i
                              ></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- end col -->
                </div>
              </div>
            </b-modal>
          </div>
        </div>
        <div class="col mt-4 ">
          <b-button
            id="export"
            @click="handleExport"
            variant="success"
            class="float-right"
            ><i class="fas fa-cloud-download-alt"></i> Export
          </b-button>
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
                  <b-th>Status Reservasi</b-th>
                  <b-th>Status Pembayaran</b-th>
                  <b-th>Status Masuk</b-th>

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
                      variant="warning"
                      v-if="item.reservation_status === 'Proses'"
                      >Diproses</b-badge
                    >
                    <b-badge
                      variant="success"
                      v-else-if="item.reservation_status === 'Diterima'"
                      >Diterima</b-badge
                    >
                    <b-badge
                      variant="danger"
                      v-else-if="item.reservation_status === 'Ditolak'"
                      >Ditolak</b-badge
                    >
                    <b-badge
                      variant="primary"
                      v-else-if="item.reservation_status === 'Selesai'"
                      >Selesai</b-badge
                    >
                    <b-badge
                      variant="danger"
                      v-else-if="item.reservation_status === 'Dibatalkan'"
                      >Dibatalkan</b-badge
                    >
                    <div v-else>-</div>
                  </b-td>
                  <b-td>
                    <b-badge
                      variant="success"
                      v-if="item.payment_status === 'Dibayar'"
                      >Dibayar</b-badge
                    >
                    <b-badge
                      variant="warning"
                      v-else-if="item.payment_status === 'Belum Dibayar'"
                      >Belum Dibayar</b-badge
                    >
                    <div v-else>-</div>
                  </b-td>
                  <b-td>
                    <b-badge
                      variant="success"
                      v-if="item.check_in_status === 'Masuk'"
                      >Masuk</b-badge
                    >
                    <b-badge
                      variant="warning"
                      v-else-if="item.check_in_status === 'Keluar'"
                      >Keluar</b-badge
                    >
                    <div v-else>-</div>
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
                    <!--                    <i class="fas fa-receipt"></i>-->
                    <b-button variant="primary" @click="onDetailInvoice(item)"
                      >Invoice</b-button
                    >
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
// import Multiselect from "vue-multiselect";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import moment from "moment";
import Swal from "sweetalert2";
import { getHotelId } from "@/service/jwt.service";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
// import inventoris from "@/view/pages/componen inventoris/inventoris"
export default {
  components: {
    KTCard,
    DatePicker
    // inventoris
    // Multiselect
  },
  data() {
    return {
      petDetails: [],
      petInventoris: [],
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
      modalTitleInvoice: "",
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
      invoice: {},
      hotel: [],
      date_reservation: [],
      reservationId: "",
      addForm: {
        user: {},
        user_id: "",
        reservation_details: [],
        reservation_inventories: [],
        payment: "",
        change: "",
        hotel_id: "",
        CreatedAt: "",
        start_date: "",
        end_date: "",
        // total_cost: "",
        // dp_cost: "",
        payment_status: "",
        check_in_status: "",
        reservation_status: "",
        agreement: "",
        reject_reason: ""
      },
      form: {
        name: "",
        start_date: "",
        end_date: "",
        total_cost: "",
        id_reservation: ""
      },
      pets: [],
      layanan: [],
      produk: [],
      golongan: [],
      kandang: [],
      detailkandang: [],
      staff: []
      // validations: {
      //   addForm: {
      //     name: { required }
      //   }
      // }
    };
  },
  methods: {
    resetReservasi() {
      this.date_reservation = [];
      this.date_reservation.push(
        new Date(Date.now() - 6 * 24 * 60 * 60 * 1000)
      );
      this.date_reservation.push(new Date());
      this.fetchReservasi();
    },
    HasilPerhitungan() {
      this.addForm.change = this.addForm.payment - this.addForm.total_cost;
    },
    fetchCageByCageDetailID(cageDetailID) {
      console.log(cageDetailID);
      this.$api
        .get(`cage/all?statusCage=Kosong&cageDetailId=${cageDetailID}`)
        .then(res => {
          this.kandang = res.data.data.data ? res.data.data.data : [];
        })
        .catch(err => {
          console.error(err);
          // alert(err);
        });
    },
    addPet() {
      this.petDetails.push({
        reservation_services: [{}],
        reservation_products: [{}]
      });
    },
    addIvt() {
      this.petInventoris.push({});
    },
    deleteIvt() {
      this.petInventoris.pop();
    },
    deletePet() {
      this.petDetails.pop();
    },
    deleteLayanan(index) {
      this.petDetails[index].reservation_services.pop();
    },
    deleteMakanan(index) {
      this.petDetails[index].reservation_products.pop();
    },
    addLayanan(index) {
      this.petDetails[index].reservation_services.push({});
    },
    addMakanan(index) {
      this.petDetails[index].reservation_products.push({});
    },

    convertDate(date_moment) {
      return moment(String(date_moment))
        .locale("id")
        .format("DD-MM-YYYY HH:mm");
    },
    convertDateForm(date_moment) {
      return moment(String(date_moment))
        .locale("id")
        .format("YYYY-MM-DD HH:mm");
    },
    convertDateEdit(date_moment) {
      return moment(String(date_moment))
        .locale("id")
        .format("YYYY-MM-DD HH:mm:ss");
    },
    convertDateInvoice(date_moment) {
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
    showModalInvoice() {
      this.$refs["my-modalinvoice"].show();
      this.form = {};
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    hideModalInvoice() {
      this.$refs["my-modalinvoice"].hide();
    },
    fetchPet(id) {
      // console.log(this.addForm.user_id);
      this.$api
        .get(`pet/all?userId=${id}`)
        .then(res => {
          this.pets = res.data.data.data ? res.data.data.data : [];
        })
        .catch(err => {
          console.error(err);
          // alert(err);
        });
    },
    fetchService(id) {
      // console.log(this.addForm.user_id);
      this.$api
        .get(`service/all?hotel_id=${id}`)
        .then(res => {
          this.layanan = res.data.data.data ? res.data.data.data : [];
        })
        .catch(err => {
          console.error(err);
          // alert(err);
        });
    },
    fetchProduk(id) {
      // console.log(this.addForm.user_id);
      this.$api
        .get(`product/all?hotel_id=${id}`)
        .then(res => {
          this.produk = res.data.data.data ? res.data.data.data : [];
        })
        .catch(err => {
          console.error(err);
          // alert(err);
        });
    },
    fetchGolongan(id) {
      // console.log(this.addForm.user_id);
      this.$api
        .get(`group/all?hotel_id=${id}`)
        .then(res => {
          this.golongan = res.data.data.data ? res.data.data.data : [];
        })
        .catch(err => {
          console.error(err);
          // alert(err);
        });
    },
    fetchKandang(id) {
      // console.log(this.addForm.user_id);
      this.$api
        .get(`cage/all?statusCage=Kosong&hotel_id=${id}`)
        .then(res => {
          this.kandang = res.data.data.data ? res.data.data.data : [];
        })
        .catch(err => {
          console.error(err);
          // alert(err);
        });
    },
    fetchDetailKandang(id) {
      this.$api
        .get(`cageDetail/all?hotel_id=${id}`)
        .then(res => {
          // this.detailkandang = res.data.data.data ? res.data.data.data : [];
          this.detailkandang = res.data.data.data.map(e => {
            return {
              cage_detail_id: e.id_cage_detail,
              cage_category: e.cage_category.name,
              cage_type: e.cage_type.name
            };
          });
          console.log(this.detailkandang);
        })
        .catch(err => {
          console.error(err);
          // alert(err);
        });
    },
    fetchStaff(id) {
      // console.log(this.addForm.user_id);
      this.$api
        .get(`staff/all?hotel_id=${id}`)
        .then(res => {
          this.staff = res.data.data.data ? res.data.data.data : [];
        })
        .catch(err => {
          console.error(err);
          // alert(err);
        });
    },
    changeStatusPembayaran(data) {
      console.log(data);
      this.$api
        .put(`reservation/paymentStatus`, {
          id_reservation: data.id_reservation,
          payment_status: data.payment_status
        })
        .then(() => {
          this.fetchReservasi();
          Swal.fire({
            icon: "success",
            title: "Ubah Status Berhasil",
            text: "Notifikasi Konfirmasi Sudah Dikirim Kepada Pendaftar",
            width: "28em",
            showCloseButton: false,
            showCancelButton: false,
            timer: 1500,
            showConfirmButton: false
          });
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
          this.fetchReservasi();
          Swal.fire({
            icon: "success",
            title: "Ubah Status Berhasil",
            text: "Notifikasi Konfirmasi Sudah Dikirim Kepada Pendaftar",
            width: "28em",
            showCloseButton: false,
            showCancelButton: false,
            timer: 1500,
            showConfirmButton: false
          });
        });
    },
    changeStatusReservasi(data) {
      if (data.reservation_status !== "Ditolak") {
        this.$api
          .put(`reservation/reservationStatus`, {
            id_reservation: data.id_reservation,
            reservation_status: data.reservation_status,
            reject_reason: ""
          })
          .then(res => {
            if (res.status === 200) {
              // this.hideModal();
              this.fetchReservasi();
              Swal.fire({
                icon: "success",
                title: "Ubah Status Berhasil",
                text: "Notifikasi Konfirmasi Sudah Dikirim Kepada Pendaftar",
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
      }
    },
    changeStatusReservasiReject(data) {
      if (data.reservation_status === "Ditolak") {
        this.$api
          .put(`reservation/reservationStatus`, {
            id_reservation: data.id_reservation,
            reservation_status: data.reservation_status,
            reject_reason: data.reject_reason
          })
          .then(res => {
            if (res.status === 200) {
              // this.hideModal();
              this.fetchReservasi();
              Swal.fire({
                icon: "success",
                title: "Ubah Status Berhasil",
                text: "Notifikasi Konfirmasi Sudah Dikirim Kepada Pendaftar",
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
      }
    },
    fetchReservasi(page = 1) {
      const startDate = moment(String(this.date_reservation[0]))
        .locale("id")
        .format("YYYY-MM-DD");
      const endDate = moment(String(this.date_reservation[1]))
        .locale("id")
        .format("YYYY-MM-DD");
      this.$api
        .get(
          `reservation/all?perPage=${this.perPage}&page=${page}&startDate=${startDate}&endDate=${endDate}&search=${this.search}&sortBy=${this.sortBy}&orderBy=${this.orderBy}`
        )
        .then(res => {
          this.reservasi = res.data.data.data ? res.data.data.data : [];
          // console.log(this.reservasi);
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
    fetchReservasiInvoice(reservasiId) {
      console.log(reservasiId);
      this.reservationId = reservasiId;
      // const startDate = moment(String(this.date_reservation[0]))
      //   .locale("id")
      //   .format("YYYY-MM-DD");
      // const endDate = moment(String(this.date_reservation[1]))
      //   .locale("id")
      //   .format("YYYY-MM-DD");
      this.$api
        .get(`reservation/bill?reservationId=${this.reservationId}`)
        .then(res => {
          this.invoice = res.data.data ? res.data.data : {};
          console.log(res);
          console.log(this.invoice);
        })
        .catch(err => {
          console.error(err);
          // alert(err);
        });
    },
    onDetailInvoice(data) {
      this.showModalInvoice();
      this.modalTitleInvoice = `${data.user.name} Details Invoice`;
      this.fetchReservasiInvoice(data.id_reservation);
      this.form = Object.assign({}, data);
      console.log(this.invoice);
    },
    onDetail(data) {
      this.showModal();
      this.petDetails = [];
      this.petInventoris = [];
      this.isDetail = true;
      this.modalTitle = `${data.user.name} Details`;
      this.isEdit = false;
      this.addForm = Object.assign({}, data);
      this.fetchPet(this.addForm.user_id);
      this.fetchService(this.addForm.hotel_id);
      this.fetchProduk(this.addForm.hotel_id);
      this.fetchGolongan(this.addForm.hotel_id);
      this.fetchKandang(this.addForm.hotel_id);
      this.fetchDetailKandang(this.addForm.hotel_id);
      this.fetchStaff(this.addForm.hotel_id);
      this.addForm.start_date = this.convertDateForm(this.addForm.start_date);
      this.addForm.end_date = this.convertDateForm(this.addForm.end_date);
      this.addForm.CreatedAt = this.convertDateForm(this.addForm.CreatedAt);
      this.addForm.reservation_details.map(e => {
        this.petDetails.push(e);
        console.log(e);
      });
      this.addForm.reservation_inventories.map(i => {
        this.petInventoris.push(i);
        // console.log(i);
      });
    },
    onEdit(data) {
      this.showModal();
      this.petDetails = [];
      this.petInventoris = [];
      this.isEdit = true;
      this.modalTitle = `Edit ${data.user.name}`;
      this.isDetail = false;
      this.addForm = Object.assign({}, data);
      this.fetchPet(this.addForm.user_id);
      this.fetchService(this.addForm.hotel_id);
      this.fetchProduk(this.addForm.hotel_id);
      this.fetchGolongan(this.addForm.hotel_id);
      this.fetchKandang(this.addForm.hotel_id);
      this.fetchDetailKandang(this.addForm.hotel_id);
      this.fetchStaff(this.addForm.hotel_id);
      this.addForm.start_date = this.convertDateForm(this.addForm.start_date);
      this.addForm.end_date = this.convertDateForm(this.addForm.end_date);
      this.addForm.CreatedAt = this.convertDateForm(this.addForm.CreatedAt);
      this.addForm.reservation_details.map(e => {
        this.petDetails.push(e);
        console.log(e);
      });
      this.addForm.reservation_inventories.map(i => {
        this.petInventoris.push(i);
        // console.log(i);
      });
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
      console.log(this.petDetails);
      // Prevent modal from closing
      bvModalEvent.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    // handleSubmit() {
    //   console.log(this.petDetails);
    // },
    handleExport() {
      this.$api
        .get(`reservation/export?hotel_id=${this.hotelId}`, {
          responseType: "blob"
        })
        .then(response => {
          // const outputFilename = "xyzzzz.xls";
          // fs.writeFileSync(outputFilename, response.data);
          // return outputFilename;
          console.log(response);
          // Let's create a link in the document that we'll
          // programmatically 'click'.
          const link = document.createElement("a");

          // Tell the browser to associate the response data to
          // the URL of the link we created above.
          link.href = window.URL.createObjectURL(new Blob([response.data]));

          // Tell the browser to download, not render, the file.
          link.setAttribute("download", "report.xlsx");

          // Place the link in the DOM.
          document.body.appendChild(link);

          // Make the magic happen!
          link.click();
        }); // Please catch me!
    },
    handleSubmit() {
      // Exit when the form isn't valid
      // if (!this.checkFormValidity()) {
      //   return;
      // }
      // evt.preventDefault();
      // if (!this.$v.addForm.$error) {
      //
      // }
      console.log(this.petDetails);
      if (this.addForm.total_cost) {
        this.addForm.total_cost = parseFloat(this.addForm.total_cost);
      }
      // if (this.addForm.dp_cost) {
      //   this.addForm.dp_cost = parseFloat(this.addForm.dp_cost);
      // }
      if (this.addForm.payment) {
        this.addForm.payment = parseFloat(this.addForm.payment);
      }
      if (this.addForm.change) {
        this.addForm.change = parseFloat(this.addForm.change);
      }
      this.addForm.reservation_details = this.petDetails;
      this.addForm.reservation_details.map(e => {
        e.reservation_services.map(s => {
          s.quantity = s.quantity >>> 0;
        });
        e.reservation_products.map(p => {
          p.quantity = p.quantity >>> 0;
        });
      });
      this.addForm.reservation_inventories = this.petInventoris;
      this.addForm.reservation_inventories.map(i => {
        i.quantity = i.quantity >>> 0;
      });
      if (this.isEdit) {
        this.addForm.hotel_id = this.hotelId;
        this.addForm.start_date = this.convertDateEdit(this.addForm.start_date);
        this.addForm.end_date = this.convertDateEdit(this.addForm.end_date);
        this.$api
          .put("reservation/update/v2", this.addForm)
          .then(res => {
            if (res.status === 200) {
              this.hideModal();
              this.fetchReservasi();
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
              // this.$bvModal.hide("modal-service");
              // this.toastAlert("update");
              this.petDetails = [];
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
    this.date_reservation.push(new Date(Date.now() - 6 * 24 * 60 * 60 * 1000));
    this.date_reservation.push(new Date());

    this.fetchReservasi();
    this.hotelId = getHotelId();
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Reservasi Hewan" }]);
  }
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
.pointer {
  cursor: pointer;
}

.gutter-b {
  margin-bottom: 10px;
}
.btn-icon {
  font-size: 20px;
}
</style>
