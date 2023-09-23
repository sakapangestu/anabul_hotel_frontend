<template>
  <ul class="menu-nav">
    <router-link
      v-if="role === 'Super Admin'"
      to="/dashboard"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon2-architecture-and-city"></i>
          <span class="menu-text">Dashboard</span>
        </a>
      </li>
    </router-link>
    <router-link
      v-if="role === 'Super Admin'"
      :to="{ name: 'Permintaan' }"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon fas fa-clipboard"></i>
          <span class="menu-text">Permintaan Pet Hotel</span>
        </a>
      </li>
    </router-link>
    <!--    <router-link-->
    <!--      v-if="role === 'Super Admin'"-->
    <!--      :to="{ name: 'Pethotel' }"-->
    <!--      v-slot="{ href, navigate, isActive, isExactActive }"-->
    <!--    >-->
    <!--      <li-->
    <!--        aria-haspopup="true"-->
    <!--        data-menu-toggle="hover"-->
    <!--        class="menu-item"-->
    <!--        :class="[-->
    <!--          isActive && 'menu-item-active',-->
    <!--          isExactActive && 'menu-item-active'-->
    <!--        ]"-->
    <!--      >-->
    <!--        <a :href="href" class="menu-link" @click="navigate">-->
    <!--          <i class="menu-icon fa fa-paw"></i>-->
    <!--          <span class="menu-text">Pet Hotel</span>-->
    <!--        </a>-->
    <!--      </li>-->
    <!--    </router-link>-->
    <li
      v-if="role === 'Super Admin'"
      aria-haspopup="true"
      data-menu-toggle="hover"
      class="menu-item menu-item-submenu"
      v-bind:class="{
        'menu-item-open': hasActiveChildren('/pethotel')
      }"
    >
      <a href="#" class="menu-link menu-toggle">
        <i class="menu-icon fa fa-paw"></i>
        <span class="menu-text">Pet Hotel</span>
        <i class="menu-arrow"></i>
      </a>
      <div class="menu-submenu">
        <span class="menu-arrow"></span>
        <ul class="menu-subnav">
          <li aria-haspopup="true" class="menu-item menu-item-parent">
            <span class="menu-link">
              <span class="menu-text">Pet Hotel</span>
            </span>
          </li>

          <router-link
            to="/pethotel/pet-hotel"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Pet Hotel</span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/pethotel/temporary-hotel"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Permintaan Aktifasi Hotel</span>
              </a>
            </li>
          </router-link>
        </ul>
      </div>
    </li>
    <router-link
      v-if="role === 'Super Admin'"
      :to="{ name: 'AdminPet' }"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon fa fa-user" aria-hidden="true"></i>
          <span class="menu-text">Admin Pet Hotel</span>
        </a>
      </li>
    </router-link>
    <router-link
      v-if="role === 'Super Admin'"
      :to="{ name: 'KelasHewan' }"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon fas fa-clipboard-check"></i>
          <span class="menu-text">Kelas Hewan</span>
        </a>
      </li>
    </router-link>
    <router-link
      v-if="role === 'Super Admin'"
      :to="{ name: 'KategoriHewan' }"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon fas fa-list-alt"></i>
          <span class="menu-text">Kategori Hewan</span>
        </a>
      </li>
    </router-link>
    <!--    <router-link-->
    <!--      v-if="role === 'Super Admin'"-->
    <!--      :to="{ name: 'SpesiesHewan' }"-->
    <!--      v-slot="{ href, navigate, isActive, isExactActive }"-->
    <!--    >-->
    <!--      <li-->
    <!--        aria-haspopup="true"-->
    <!--        data-menu-toggle="hover"-->
    <!--        class="menu-item"-->
    <!--        :class="[-->
    <!--          isActive && 'menu-item-active',-->
    <!--          isExactActive && 'menu-item-active'-->
    <!--        ]"-->
    <!--      >-->
    <!--        <a :href="href" class="menu-link" @click="navigate">-->
    <!--          <i class="menu-icon fab fa-yarn"></i>-->
    <!--          <span class="menu-text">Spesies Hewan</span>-->
    <!--        </a>-->
    <!--      </li>-->
    <!--    </router-link>-->
    <li
      v-if="role === 'Super Admin'"
      aria-haspopup="true"
      data-menu-toggle="hover"
      class="menu-item menu-item-submenu"
      v-bind:class="{
        'menu-item-open': hasActiveChildren('/spesies')
      }"
    >
      <a href="#" class="menu-link menu-toggle">
        <i class="menu-icon fas fa-clipboard-list"></i>
        <span class="menu-text">Spesies Hewan</span>
        <i class="menu-arrow"></i>
      </a>
      <div class="menu-submenu">
        <span class="menu-arrow"></span>
        <ul class="menu-subnav">
          <li aria-haspopup="true" class="menu-item menu-item-parent">
            <span class="menu-link">
              <span class="menu-text">Spesies Hewan</span>
            </span>
          </li>

          <router-link
            to="/spesies/spesies-hewan"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Spesies Hewan</span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/spesies/temporary-spesies"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Temporary Spesies</span>
              </a>
            </li>
          </router-link>
        </ul>
      </div>
    </li>

    <router-link
      v-if="role === 'Admin'"
      :to="{ name: 'Dashboard-Admin' }"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon2-architecture-and-city"></i>
          <span class="menu-text">Dashboard</span>
        </a>
      </li>
    </router-link>
    <!--    <router-link-->
    <!--      v-if="role === 'Admin'"-->
    <!--      to="/builder"-->
    <!--      v-slot="{ href, navigate, isActive, isExactActive }"-->
    <!--    >-->
    <!--      <li-->
    <!--        aria-haspopup="true"-->
    <!--        data-menu-toggle="hover"-->
    <!--        class="menu-item"-->
    <!--        :class="[-->
    <!--          isActive && 'menu-item-active',-->
    <!--          isExactActive && 'menu-item-active'-->
    <!--        ]"-->
    <!--      >-->
    <!--        <a :href="href" class="menu-link" @click="navigate">-->
    <!--          <i class="menu-icon flaticon2-expand"></i>-->
    <!--          <span class="menu-text">Layout Builder</span>-->
    <!--        </a>-->
    <!--      </li>-->
    <!--    </router-link>-->
    <router-link
      v-if="role === 'Admin'"
      :to="{ name: 'Staff' }"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon fas fa-user-tie"></i>
          <span class="menu-text">Staff Pet Hotel</span>
        </a>
      </li>
    </router-link>

    <li
      v-if="role === 'Admin'"
      aria-haspopup="true"
      data-menu-toggle="hover"
      class="menu-item menu-item-submenu"
      v-bind:class="{
        'menu-item-open': hasActiveChildren('/golongan')
      }"
    >
      <a href="#" class="menu-link menu-toggle">
        <i class="menu-icon fas fa-list-alt"></i>
        <span class="menu-text">Golongan Hewan</span>
        <i class="menu-arrow"></i>
      </a>
      <div class="menu-submenu">
        <span class="menu-arrow"></span>
        <ul class="menu-subnav">
          <li aria-haspopup="true" class="menu-item menu-item-parent">
            <span class="menu-link">
              <span class="menu-text">Golongan Hewan</span>
            </span>
          </li>

          <router-link
            to="/golongan/golongan-hewan"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Golongan Hewan</span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/golongan/detail-golongan"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Detail Golongan</span>
              </a>
            </li>
          </router-link>
          <!--          <router-link-->
          <!--            to="/golongan/spesies-baru"-->
          <!--            v-slot="{ href, navigate, isActive, isExactActive }"-->
          <!--          >-->
          <!--            <li-->
          <!--              aria-haspopup="true"-->
          <!--              data-menu-toggle="hover"-->
          <!--              class="menu-item"-->
          <!--              :class="[-->
          <!--                isActive && 'menu-item-active',-->
          <!--                isExactActive && 'menu-item-active'-->
          <!--              ]"-->
          <!--            >-->
          <!--              <a :href="href" class="menu-link" @click="navigate">-->
          <!--                <i class="menu-bullet menu-bullet-dot">-->
          <!--                  <span></span>-->
          <!--                </i>-->
          <!--                <span class="menu-text">Spesies Baru</span>-->
          <!--              </a>-->
          <!--            </li>-->
          <!--          </router-link>-->
        </ul>
      </div>
    </li>

    <li
      v-if="role === 'Admin'"
      aria-haspopup="true"
      data-menu-toggle="hover"
      class="menu-item menu-item-submenu"
      v-bind:class="{ 'menu-item-open': hasActiveChildren('/kandang') }"
    >
      <a href="#" class="menu-link menu-toggle">
        <i class="menu-icon fas fa-list"></i>
        <span class="menu-text">Kandang Hewan</span>
        <i class="menu-arrow"></i>
      </a>
      <div class="menu-submenu">
        <span class="menu-arrow"></span>
        <ul class="menu-subnav">
          <li aria-haspopup="true" class="menu-item menu-item-parent">
            <span class="menu-link">
              <span class="menu-text">Kandang Hewan</span>
            </span>
          </li>

          <router-link
            to="/kandang/kategori-kandang"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Kategori Kandang</span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/kandang/ukuran-kandang"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Ukuran Kandang</span>
              </a>
            </li>
          </router-link>
          <router-link
            to="/kandang/detail-kandang"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Detail Kandang</span>
              </a>
            </li>
          </router-link>
          <router-link
            to="/kandang/kandang-hewan"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Kandang Hewan</span>
              </a>
            </li>
          </router-link>
        </ul>
      </div>
    </li>

    <li
      v-if="role === 'Admin'"
      aria-haspopup="true"
      data-menu-toggle="hover"
      class="menu-item menu-item-submenu"
      v-bind:class="{
        'menu-item-open': hasActiveChildren('/layanan')
      }"
    >
      <a href="#" class="menu-link menu-toggle">
        <i class="menu-icon fas fa-file"></i>
        <span class="menu-text">Layanan Hewan</span>
        <i class="menu-arrow"></i>
      </a>
      <div class="menu-submenu">
        <span class="menu-arrow"></span>
        <ul class="menu-subnav">
          <li aria-haspopup="true" class="menu-item menu-item-parent">
            <span class="menu-link">
              <span class="menu-text">Layanan Hewan</span>
            </span>
          </li>

          <router-link
            to="/layanan/layanan-hewan"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Layanan Hewan</span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/layanan/detail-layanan"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Detail Layanan</span>
              </a>
            </li>
          </router-link>
        </ul>
      </div>
    </li>

    <!--    <router-link-->
    <!--      v-if="role === 'Admin'"-->
    <!--      :to="{ name: 'Kondisi' }"-->
    <!--      v-slot="{ href, navigate, isActive, isExactActive }"-->
    <!--    >-->
    <!--      <li-->
    <!--        aria-haspopup="true"-->
    <!--        data-menu-toggle="hover"-->
    <!--        class="menu-item"-->
    <!--        :class="[-->
    <!--          isActive && 'menu-item-active',-->
    <!--          isExactActive && 'menu-item-active'-->
    <!--        ]"-->
    <!--      >-->
    <!--        <a :href="href" class="menu-link" @click="navigate">-->
    <!--          <i class="menu-icon flaticon2-expand"></i>-->
    <!--          <span class="menu-text"> Laporan Kondisi</span>-->
    <!--        </a>-->
    <!--      </li>-->
    <!--    </router-link>-->
    <router-link
      v-if="role === 'Admin'"
      :to="{ name: 'Produk' }"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon fas fa-file-alt"></i>
          <span class="menu-text"> Makanan Hewan </span>
        </a>
      </li>
    </router-link>
    <router-link
      v-if="role === 'Admin'"
      :to="{ name: 'DetailReservasi' }"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon fas fa-file-archive"></i>
          <span class="menu-text"> Reservasi</span>
        </a>
      </li>
    </router-link>
    <router-link
      v-if="role === 'Admin'"
      :to="{ name: 'Regulasi' }"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon fas fa-clipboard"></i>
          <span class="menu-text"> Regulasi </span>
        </a>
      </li>
    </router-link>
    <router-link
      v-if="role === 'Admin'"
      :to="{ name: 'kondisihewan' }"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon fas fa-file-invoice"></i>
          <span class="menu-text"> Kondisi Hewan </span>
        </a>
      </li>
    </router-link>

    <li
      v-if="role === 'Admin'"
      aria-haspopup="true"
      data-menu-toggle="hover"
      class="menu-item menu-item-submenu"
      v-bind:class="{ 'menu-item-open': hasActiveChildren('/profile/profile') }"
    >
      <a href="#" class="menu-link menu-toggle">
        <i class="menu-icon fas fa-users"></i>
        <span class="menu-text">Profil</span>
        <i class="menu-arrow"></i>
      </a>
      <div class="menu-submenu">
        <span class="menu-arrow"></span>
        <ul class="menu-subnav">
          <li aria-haspopup="true" class="menu-item menu-item-parent">
            <span class="menu-link">
              <span class="menu-text">Profil</span>
            </span>
          </li>

          <router-link
            to="/profile/profil-admin"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Profil Admin</span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/profile/profil-hotel"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Profil Hotel</span>
              </a>
            </li>
          </router-link>
        </ul>
      </div>
    </li>

    <!--    <li-->
    <!--      aria-haspopup="true"-->
    <!--      data-menu-toggle="hover"-->
    <!--      class="menu-item menu-item-submenu"-->
    <!--      v-bind:class="{ 'menu-item-open': hasActiveChildren('/vue-bootstrap') }"-->
    <!--    >-->
    <!--      <a href="#" class="menu-link menu-toggle">-->
    <!--        <i class="menu-icon flaticon2-digital-marketing"></i>-->
    <!--        <span class="menu-text">Vue Bootstrap</span>-->
    <!--        <i class="menu-arrow"></i>-->
    <!--      </a>-->
    <!--      <div class="menu-submenu">-->
    <!--        <span class="menu-arrow"></span>-->
    <!--        <ul class="menu-subnav">-->
    <!--          <li aria-haspopup="true" class="menu-item menu-item-parent">-->
    <!--            <span class="menu-link">-->
    <!--              <span class="menu-text">Vue Bootstrap</span>-->
    <!--            </span>-->
    <!--          </li>-->

    <!--          <router-link-->
    <!--            to="/vue-bootstrap/alert"-->
    <!--            v-slot="{ href, navigate, isActive, isExactActive }"-->
    <!--          >-->
    <!--            <li-->
    <!--              aria-haspopup="true"-->
    <!--              data-menu-toggle="hover"-->
    <!--              class="menu-item"-->
    <!--              :class="[-->
    <!--                isActive && 'menu-item-active',-->
    <!--                isExactActive && 'menu-item-active'-->
    <!--              ]"-->
    <!--            >-->
    <!--              <a :href="href" class="menu-link" @click="navigate">-->
    <!--                <i class="menu-bullet menu-bullet-dot">-->
    <!--                  <span></span>-->
    <!--                </i>-->
    <!--                <span class="menu-text">Alert</span>-->
    <!--              </a>-->
    <!--            </li>-->
    <!--          </router-link>-->

    <!--          <router-link-->
    <!--            to="/vue-bootstrap/badge"-->
    <!--            v-slot="{ href, navigate, isActive, isExactActive }"-->
    <!--          >-->
    <!--            <li-->
    <!--              aria-haspopup="true"-->
    <!--              data-menu-toggle="hover"-->
    <!--              class="menu-item"-->
    <!--              :class="[-->
    <!--                isActive && 'menu-item-active',-->
    <!--                isExactActive && 'menu-item-active'-->
    <!--              ]"-->
    <!--            >-->
    <!--              <a :href="href" class="menu-link" @click="navigate">-->
    <!--                <i class="menu-bullet menu-bullet-dot">-->
    <!--                  <span></span>-->
    <!--                </i>-->
    <!--                <span class="menu-text">Badge</span>-->
    <!--              </a>-->
    <!--            </li>-->
    <!--          </router-link>-->

    <!--          <li-->
    <!--            aria-haspopup="true"-->
    <!--            data-menu-toggle="hover"-->
    <!--            class="menu-item menu-item-submenu"-->
    <!--            v-bind:class="{-->
    <!--              'menu-item-open': hasActiveChildren('/vue-bootstrap/button')-->
    <!--            }"-->
    <!--          >-->
    <!--            <a href="#" class="menu-link menu-toggle">-->
    <!--              <i class="menu-bullet menu-bullet-dot">-->
    <!--                <span></span>-->
    <!--              </i>-->
    <!--              <span class="menu-text">Buttons</span>-->
    <!--              <i class="menu-arrow"></i>-->
    <!--            </a>-->
    <!--            <div class="menu-submenu">-->
    <!--              <span class="menu-arrow"></span>-->
    <!--              <ul class="menu-subnav">-->
    <!--                <li aria-haspopup="true" class="menu-item menu-item-parent">-->
    <!--                  <span class="menu-link">-->
    <!--                    <span class="menu-text"></span>-->
    <!--                  </span>-->
    <!--                </li>-->

    <!--                <router-link-->
    <!--                  to="/vue-bootstrap/button"-->
    <!--                  v-slot="{ href, navigate, isActive, isExactActive }"-->
    <!--                >-->
    <!--                  <li-->
    <!--                    aria-haspopup="true"-->
    <!--                    data-menu-toggle="hover"-->
    <!--                    class="menu-item"-->
    <!--                    :class="[-->
    <!--                      isActive && 'menu-item-active',-->
    <!--                      isExactActive && 'menu-item-active'-->
    <!--                    ]"-->
    <!--                  >-->
    <!--                    <a :href="href" class="menu-link" @click="navigate">-->
    <!--                      <i class="menu-bullet menu-bullet-dot">-->
    <!--                        <span></span>-->
    <!--                      </i>-->
    <!--                      <span class="menu-text">Button</span>-->
    <!--                    </a>-->
    <!--                  </li>-->
    <!--                </router-link>-->

    <!--                <router-link-->
    <!--                  to="/vue-bootstrap/button-group"-->
    <!--                  v-slot="{ href, navigate, isActive, isExactActive }"-->
    <!--                >-->
    <!--                  <li-->
    <!--                    aria-haspopup="true"-->
    <!--                    data-menu-toggle="hover"-->
    <!--                    class="menu-item"-->
    <!--                    :class="[-->
    <!--                      isActive && 'menu-item-active',-->
    <!--                      isExactActive && 'menu-item-active'-->
    <!--                    ]"-->
    <!--                  >-->
    <!--                    <a :href="href" class="menu-link" @click="navigate">-->
    <!--                      <i class="menu-bullet menu-bullet-dot">-->
    <!--                        <span></span>-->
    <!--                      </i>-->
    <!--                      <span class="menu-text">Button Group</span>-->
    <!--                    </a>-->
    <!--                  </li>-->
    <!--                </router-link>-->

    <!--                <router-link-->
    <!--                  to="/vue-bootstrap/button-toolbar"-->
    <!--                  v-slot="{ href, navigate, isActive, isExactActive }"-->
    <!--                >-->
    <!--                  <li-->
    <!--                    aria-haspopup="true"-->
    <!--                    data-menu-toggle="hover"-->
    <!--                    class="menu-item"-->
    <!--                    :class="[-->
    <!--                      isActive && 'menu-item-active',-->
    <!--                      isExactActive && 'menu-item-active'-->
    <!--                    ]"-->
    <!--                  >-->
    <!--                    <a :href="href" class="menu-link" @click="navigate">-->
    <!--                      <i class="menu-bullet menu-bullet-dot">-->
    <!--                        <span></span>-->
    <!--                      </i>-->
    <!--                      <span class="menu-text">Button Toolbar</span>-->
    <!--                    </a>-->
    <!--                  </li>-->
    <!--                </router-link>-->
    <!--              </ul>-->
    <!--            </div>-->
    <!--          </li>-->

    <!--          <router-link-->
    <!--            to="/vue-bootstrap/card"-->
    <!--            v-slot="{ href, navigate, isActive, isExactActive }"-->
    <!--          >-->
    <!--            <li-->
    <!--              aria-haspopup="true"-->
    <!--              data-menu-toggle="hover"-->
    <!--              class="menu-item"-->
    <!--              :class="[-->
    <!--                isActive && 'menu-item-active',-->
    <!--                isExactActive && 'menu-item-active'-->
    <!--              ]"-->
    <!--            >-->
    <!--              <a :href="href" class="menu-link" @click="navigate">-->
    <!--                <i class="menu-bullet menu-bullet-dot">-->
    <!--                  <span></span>-->
    <!--                </i>-->
    <!--                <span class="menu-text">Card</span>-->
    <!--              </a>-->
    <!--            </li>-->
    <!--          </router-link>-->

    <!--          <router-link-->
    <!--            to="/vue-bootstrap/carousel"-->
    <!--            v-slot="{ href, navigate, isActive, isExactActive }"-->
    <!--          >-->
    <!--            <li-->
    <!--              aria-haspopup="true"-->
    <!--              data-menu-toggle="hover"-->
    <!--              class="menu-item"-->
    <!--              :class="[-->
    <!--                isActive && 'menu-item-active',-->
    <!--                isExactActive && 'menu-item-active'-->
    <!--              ]"-->
    <!--            >-->
    <!--              <a :href="href" class="menu-link" @click="navigate">-->
    <!--                <i class="menu-bullet menu-bullet-dot">-->
    <!--                  <span></span>-->
    <!--                </i>-->
    <!--                <span class="menu-text">Carousel</span>-->
    <!--              </a>-->
    <!--            </li>-->
    <!--          </router-link>-->

    <!--          <router-link-->
    <!--            to="/vue-bootstrap/collapse"-->
    <!--            v-slot="{ href, navigate, isActive, isExactActive }"-->
    <!--          >-->
    <!--            <li-->
    <!--              aria-haspopup="true"-->
    <!--              data-menu-toggle="hover"-->
    <!--              class="menu-item"-->
    <!--              :class="[-->
    <!--                isActive && 'menu-item-active',-->
    <!--                isExactActive && 'menu-item-active'-->
    <!--              ]"-->
    <!--            >-->
    <!--              <a :href="href" class="menu-link" @click="navigate">-->
    <!--                <i class="menu-bullet menu-bullet-dot">-->
    <!--                  <span></span>-->
    <!--                </i>-->
    <!--                <span class="menu-text">Collapse</span>-->
    <!--              </a>-->
    <!--            </li>-->
    <!--          </router-link>-->

    <!--          <router-link-->
    <!--            to="/vue-bootstrap/dropdown"-->
    <!--            v-slot="{ href, navigate, isActive, isExactActive }"-->
    <!--          >-->
    <!--            <li-->
    <!--              aria-haspopup="true"-->
    <!--              data-menu-toggle="hover"-->
    <!--              class="menu-item"-->
    <!--              :class="[-->
    <!--                isActive && 'menu-item-active',-->
    <!--                isExactActive && 'menu-item-active'-->
    <!--              ]"-->
    <!--            >-->
    <!--              <a :href="href" class="menu-link" @click="navigate">-->
    <!--                <i class="menu-bullet menu-bullet-dot">-->
    <!--                  <span></span>-->
    <!--                </i>-->
    <!--                <span class="menu-text">Dropdown</span>-->
    <!--              </a>-->
    <!--            </li>-->
    <!--          </router-link>-->

    <!--          <router-link-->
    <!--            to="/vue-bootstrap/embed"-->
    <!--            v-slot="{ href, navigate, isActive, isExactActive }"-->
    <!--          >-->
    <!--            <li-->
    <!--              aria-haspopup="true"-->
    <!--              data-menu-toggle="hover"-->
    <!--              class="menu-item"-->
    <!--              :class="[-->
    <!--                isActive && 'menu-item-active',-->
    <!--                isExactActive && 'menu-item-active'-->
    <!--              ]"-->
    <!--            >-->
    <!--              <a :href="href" class="menu-link" @click="navigate">-->
    <!--                <i class="menu-bullet menu-bullet-dot">-->
    <!--                  <span></span>-->
    <!--                </i>-->
    <!--                <span class="menu-text">Embed</span>-->
    <!--              </a>-->
    <!--            </li>-->
    <!--          </router-link>-->

    <!--          <li-->
    <!--            aria-haspopup="true"-->
    <!--            data-menu-toggle="hover"-->
    <!--            class="menu-item menu-item-submenu"-->
    <!--            v-bind:class="{-->
    <!--              'menu-item-open': hasActiveChildren('/vue-bootstrap/form')-->
    <!--            }"-->
    <!--          >-->
    <!--            <a href="#" class="menu-link menu-toggle">-->
    <!--              <i class="menu-bullet menu-bullet-dot">-->
    <!--                <span></span>-->
    <!--              </i>-->
    <!--              <span class="menu-text">Form</span>-->
    <!--              <i class="menu-arrow"></i>-->
    <!--            </a>-->
    <!--            <div class="menu-submenu">-->
    <!--              <span class="menu-arrow"></span>-->
    <!--              <ul class="menu-subnav">-->
    <!--                <li aria-haspopup="true" class="menu-item menu-item-parent">-->
    <!--                  <span class="menu-link">-->
    <!--                    <span class="menu-text"></span>-->
    <!--                  </span>-->
    <!--                </li>-->

    <!--                <router-link-->
    <!--                  to="/vue-bootstrap/form"-->
    <!--                  v-slot="{ href, navigate, isActive, isExactActive }"-->
    <!--                >-->
    <!--                  <li-->
    <!--                    aria-haspopup="true"-->
    <!--                    data-menu-toggle="hover"-->
    <!--                    class="menu-item"-->
    <!--                    :class="[-->
    <!--                      isActive && 'menu-item-active',-->
    <!--                      isExactActive && 'menu-item-active'-->
    <!--                    ]"-->
    <!--                  >-->
    <!--                    <a :href="href" class="menu-link" @click="navigate">-->
    <!--                      <i class="menu-bullet menu-bullet-dot">-->
    <!--                        <span></span>-->
    <!--                      </i>-->
    <!--                      <span class="menu-text">Form</span>-->
    <!--                    </a>-->
    <!--                  </li>-->
    <!--                </router-link>-->

    <!--                <router-link-->
    <!--                  to="/vue-bootstrap/form-checkbox"-->
    <!--                  v-slot="{ href, navigate, isActive, isExactActive }"-->
    <!--                >-->
    <!--                  <li-->
    <!--                    aria-haspopup="true"-->
    <!--                    data-menu-toggle="hover"-->
    <!--                    class="menu-item"-->
    <!--                    :class="[-->
    <!--                      isActive && 'menu-item-active',-->
    <!--                      isExactActive && 'menu-item-active'-->
    <!--                    ]"-->
    <!--                  >-->
    <!--                    <a :href="href" class="menu-link" @click="navigate">-->
    <!--                      <i class="menu-bullet menu-bullet-dot">-->
    <!--                        <span></span>-->
    <!--                      </i>-->
    <!--                      <span class="menu-text">Form Checkbox</span>-->
    <!--                    </a>-->
    <!--                  </li>-->
    <!--                </router-link>-->

    <!--                <router-link-->
    <!--                  to="/vue-bootstrap/form-file"-->
    <!--                  v-slot="{ href, navigate, isActive, isExactActive }"-->
    <!--                >-->
    <!--                  <li-->
    <!--                    aria-haspopup="true"-->
    <!--                    data-menu-toggle="hover"-->
    <!--                    class="menu-item"-->
    <!--                    :class="[-->
    <!--                      isActive && 'menu-item-active',-->
    <!--                      isExactActive && 'menu-item-active'-->
    <!--                    ]"-->
    <!--                  >-->
    <!--                    <a :href="href" class="menu-link" @click="navigate">-->
    <!--                      <i class="menu-bullet menu-bullet-dot">-->
    <!--                        <span></span>-->
    <!--                      </i>-->
    <!--                      <span class="menu-text">Form File</span>-->
    <!--                    </a>-->
    <!--                  </li>-->
    <!--                </router-link>-->

    <!--                <router-link-->
    <!--                  to="/vue-bootstrap/form-group"-->
    <!--                  v-slot="{ href, navigate, isActive, isExactActive }"-->
    <!--                >-->
    <!--                  <li-->
    <!--                    aria-haspopup="true"-->
    <!--                    data-menu-toggle="hover"-->
    <!--                    class="menu-item"-->
    <!--                    :class="[-->
    <!--                      isActive && 'menu-item-active',-->
    <!--                      isExactActive && 'menu-item-active'-->
    <!--                    ]"-->
    <!--                  >-->
    <!--                    <a :href="href" class="menu-link" @click="navigate">-->
    <!--                      <i class="menu-bullet menu-bullet-dot">-->
    <!--                        <span></span>-->
    <!--                      </i>-->
    <!--                      <span class="menu-text">Form Group</span>-->
    <!--                    </a>-->
    <!--                  </li>-->
    <!--                </router-link>-->

    <!--                <router-link-->
    <!--                  to="/vue-bootstrap/form-input"-->
    <!--                  v-slot="{ href, navigate, isActive, isExactActive }"-->
    <!--                >-->
    <!--                  <li-->
    <!--                    aria-haspopup="true"-->
    <!--                    data-menu-toggle="hover"-->
    <!--                    class="menu-item"-->
    <!--                    :class="[-->
    <!--                      isActive && 'menu-item-active',-->
    <!--                      isExactActive && 'menu-item-active'-->
    <!--                    ]"-->
    <!--                  >-->
    <!--                    <a :href="href" class="menu-link" @click="navigate">-->
    <!--                      <i class="menu-bullet menu-bullet-dot">-->
    <!--                        <span></span>-->
    <!--                      </i>-->
    <!--                      <span class="menu-text">Form Input</span>-->
    <!--                    </a>-->
    <!--                  </li>-->
    <!--                </router-link>-->

    <!--                <router-link-->
    <!--                  to="/vue-bootstrap/form-radio"-->
    <!--                  v-slot="{ href, navigate, isActive, isExactActive }"-->
    <!--                >-->
    <!--                  <li-->
    <!--                    aria-haspopup="true"-->
    <!--                    data-menu-toggle="hover"-->
    <!--                    class="menu-item"-->
    <!--                    :class="[-->
    <!--                      isActive && 'menu-item-active',-->
    <!--                      isExactActive && 'menu-item-active'-->
    <!--                    ]"-->
    <!--                  >-->
    <!--                    <a :href="href" class="menu-link" @click="navigate">-->
    <!--                      <i class="menu-bullet menu-bullet-dot">-->
    <!--                        <span></span>-->
    <!--                      </i>-->
    <!--                      <span class="menu-text">Form Radio</span>-->
    <!--                    </a>-->
    <!--                  </li>-->
    <!--                </router-link>-->

    <!--                <router-link-->
    <!--                  to="/vue-bootstrap/form-select"-->
    <!--                  v-slot="{ href, navigate, isActive, isExactActive }"-->
    <!--                >-->
    <!--                  <li-->
    <!--                    aria-haspopup="true"-->
    <!--                    data-menu-toggle="hover"-->
    <!--                    class="menu-item"-->
    <!--                    :class="[-->
    <!--                      isActive && 'menu-item-active',-->
    <!--                      isExactActive && 'menu-item-active'-->
    <!--                    ]"-->
    <!--                  >-->
    <!--                    <a :href="href" class="menu-link" @click="navigate">-->
    <!--                      <i class="menu-bullet menu-bullet-dot">-->
    <!--                        <span></span>-->
    <!--                      </i>-->
    <!--                      <span class="menu-text">Form Select</span>-->
    <!--                    </a>-->
    <!--                  </li>-->
    <!--                </router-link>-->

    <!--                <router-link-->
    <!--                  to="/vue-bootstrap/form-textarea"-->
    <!--                  v-slot="{ href, navigate, isActive, isExactActive }"-->
    <!--                >-->
    <!--                  <li-->
    <!--                    aria-haspopup="true"-->
    <!--                    data-menu-toggle="hover"-->
    <!--                    class="menu-item"-->
    <!--                    :class="[-->
    <!--                      isActive && 'menu-item-active',-->
    <!--                      isExactActive && 'menu-item-active'-->
    <!--                    ]"-->
    <!--                  >-->
    <!--                    <a :href="href" class="menu-link" @click="navigate">-->
    <!--                      <i class="menu-bullet menu-bullet-dot">-->
    <!--                        <span></span>-->
    <!--                      </i>-->
    <!--                      <span class="menu-text">Form Textarea</span>-->
    <!--                    </a>-->
    <!--                  </li>-->
    <!--                </router-link>-->
    <!--              </ul>-->
    <!--            </div>-->
    <!--          </li>-->

    <!--          <router-link-->
    <!--            to="/vue-bootstrap/image"-->
    <!--            v-slot="{ href, navigate, isActive, isExactActive }"-->
    <!--          >-->
    <!--            <li-->
    <!--              aria-haspopup="true"-->
    <!--              data-menu-toggle="hover"-->
    <!--              class="menu-item"-->
    <!--              :class="[-->
    <!--                isActive && 'menu-item-active',-->
    <!--                isExactActive && 'menu-item-active'-->
    <!--              ]"-->
    <!--            >-->
    <!--              <a :href="href" class="menu-link" @click="navigate">-->
    <!--                <i class="menu-bullet menu-bullet-dot">-->
    <!--                  <span></span>-->
    <!--                </i>-->
    <!--                <span class="menu-text">Image</span>-->
    <!--              </a>-->
    <!--            </li>-->
    <!--          </router-link>-->

    <!--          <router-link-->
    <!--            to="/vue-bootstrap/input-group"-->
    <!--            v-slot="{ href, navigate, isActive, isExactActive }"-->
    <!--          >-->
    <!--            <li-->
    <!--              aria-haspopup="true"-->
    <!--              data-menu-toggle="hover"-->
    <!--              class="menu-item"-->
    <!--              :class="[-->
    <!--                isActive && 'menu-item-active',-->
    <!--                isExactActive && 'menu-item-active'-->
    <!--              ]"-->
    <!--            >-->
    <!--              <a :href="href" class="menu-link" @click="navigate">-->
    <!--                <i class="menu-bullet menu-bullet-dot">-->
    <!--                  <span></span>-->
    <!--                </i>-->
    <!--                <span class="menu-text">Input Group</span>-->
    <!--              </a>-->
    <!--            </li>-->
    <!--          </router-link>-->

    <!--          <router-link-->
    <!--            to="/vue-bootstrap/jumbotron"-->
    <!--            v-slot="{ href, navigate, isActive, isExactActive }"-->
    <!--          >-->
    <!--            <li-->
    <!--              aria-haspopup="true"-->
    <!--              data-menu-toggle="hover"-->
    <!--              class="menu-item"-->
    <!--              :class="[-->
    <!--                isActive && 'menu-item-active',-->
    <!--                isExactActive && 'menu-item-active'-->
    <!--              ]"-->
    <!--            >-->
    <!--              <a :href="href" class="menu-link" @click="navigate">-->
    <!--                <i class="menu-bullet menu-bullet-dot">-->
    <!--                  <span></span>-->
    <!--                </i>-->
    <!--                <span class="menu-text">Jumbotron</span>-->
    <!--              </a>-->
    <!--            </li>-->
    <!--          </router-link>-->

    <!--          <router-link-->
    <!--            to="/vue-bootstrap/layout-grid-system"-->
    <!--            v-slot="{ href, navigate, isActive, isExactActive }"-->
    <!--          >-->
    <!--            <li-->
    <!--              aria-haspopup="true"-->
    <!--              data-menu-toggle="hover"-->
    <!--              class="menu-item"-->
    <!--              :class="[-->
    <!--                isActive && 'menu-item-active',-->
    <!--                isExactActive && 'menu-item-active'-->
    <!--              ]"-->
    <!--            >-->
    <!--              <a :href="href" class="menu-link" @click="navigate">-->
    <!--                <i class="menu-bullet menu-bullet-dot">-->
    <!--                  <span></span>-->
    <!--                </i>-->
    <!--                <span class="menu-text">Layout and Grid System</span>-->
    <!--              </a>-->
    <!--            </li>-->
    <!--          </router-link>-->

    <!--          <router-link-->
    <!--            to="/vue-bootstrap/link"-->
    <!--            v-slot="{ href, navigate, isActive, isExactActive }"-->
    <!--          >-->
    <!--            <li-->
    <!--              aria-haspopup="true"-->
    <!--              data-menu-toggle="hover"-->
    <!--              class="menu-item"-->
    <!--              :class="[-->
    <!--                isActive && 'menu-item-active',-->
    <!--                isExactActive && 'menu-item-active'-->
    <!--              ]"-->
    <!--            >-->
    <!--              <a :href="href" class="menu-link" @click="navigate">-->
    <!--                <i class="menu-bullet menu-bullet-dot">-->
    <!--                  <span></span>-->
    <!--                </i>-->
    <!--                <span class="menu-text">Link</span>-->
    <!--              </a>-->
    <!--            </li>-->
    <!--          </router-link>-->

    <!--          <router-link-->
    <!--            to="/vue-bootstrap/list-group"-->
    <!--            v-slot="{ href, navigate, isActive, isExactActive }"-->
    <!--          >-->
    <!--            <li-->
    <!--              aria-haspopup="true"-->
    <!--              data-menu-toggle="hover"-->
    <!--              class="menu-item"-->
    <!--              :class="[-->
    <!--                isActive && 'menu-item-active',-->
    <!--                isExactActive && 'menu-item-active'-->
    <!--              ]"-->
    <!--            >-->
    <!--              <a :href="href" class="menu-link" @click="navigate">-->
    <!--                <i class="menu-bullet menu-bullet-dot">-->
    <!--                  <span></span>-->
    <!--                </i>-->
    <!--                <span class="menu-text">List group</span>-->
    <!--              </a>-->
    <!--            </li>-->
    <!--          </router-link>-->

    <!--          <router-link-->
    <!--            to="/vue-bootstrap/media"-->
    <!--            v-slot="{ href, navigate, isActive, isExactActive }"-->
    <!--          >-->
    <!--            <li-->
    <!--              aria-haspopup="true"-->
    <!--              data-menu-toggle="hover"-->
    <!--              class="menu-item"-->
    <!--              :class="[-->
    <!--                isActive && 'menu-item-active',-->
    <!--                isExactActive && 'menu-item-active'-->
    <!--              ]"-->
    <!--            >-->
    <!--              <a :href="href" class="menu-link" @click="navigate">-->
    <!--                <i class="menu-bullet menu-bullet-dot">-->
    <!--                  <span></span>-->
    <!--                </i>-->
    <!--                <span class="menu-text">Media</span>-->
    <!--              </a>-->
    <!--            </li>-->
    <!--          </router-link>-->

    <!--          <router-link-->
    <!--            to="/vue-bootstrap/modal"-->
    <!--            v-slot="{ href, navigate, isActive, isExactActive }"-->
    <!--          >-->
    <!--            <li-->
    <!--              aria-haspopup="true"-->
    <!--              data-menu-toggle="hover"-->
    <!--              class="menu-item"-->
    <!--              :class="[-->
    <!--                isActive && 'menu-item-active',-->
    <!--                isExactActive && 'menu-item-active'-->
    <!--              ]"-->
    <!--            >-->
    <!--              <a :href="href" class="menu-link" @click="navigate">-->
    <!--                <i class="menu-bullet menu-bullet-dot">-->
    <!--                  <span></span>-->
    <!--                </i>-->
    <!--                <span class="menu-text">Modal</span>-->
    <!--              </a>-->
    <!--            </li>-->
    <!--          </router-link>-->

    <!--          <li-->
    <!--            aria-haspopup="true"-->
    <!--            data-menu-toggle="hover"-->
    <!--            class="menu-item menu-item-submenu"-->
    <!--            v-bind:class="{-->
    <!--              'menu-item-open': hasActiveChildren('/vue-bootstrap/nav')-->
    <!--            }"-->
    <!--          >-->
    <!--            <a href="#" class="menu-link menu-toggle">-->
    <!--              <i class="menu-bullet menu-bullet-dot">-->
    <!--                <span></span>-->
    <!--              </i>-->
    <!--              <span class="menu-text">Navigation</span>-->
    <!--              <i class="menu-arrow"></i>-->
    <!--            </a>-->
    <!--            <div class="menu-submenu">-->
    <!--              <span class="menu-arrow"></span>-->
    <!--              <ul class="menu-subnav">-->
    <!--                <li aria-haspopup="true" class="menu-item menu-item-parent">-->
    <!--                  <span class="menu-link">-->
    <!--                    <span class="menu-text"></span>-->
    <!--                  </span>-->
    <!--                </li>-->

    <!--                <router-link-->
    <!--                  to="/vue-bootstrap/nav"-->
    <!--                  v-slot="{ href, navigate, isActive, isExactActive }"-->
    <!--                >-->
    <!--                  <li-->
    <!--                    aria-haspopup="true"-->
    <!--                    data-menu-toggle="hover"-->
    <!--                    class="menu-item"-->
    <!--                    :class="[-->
    <!--                      isActive && 'menu-item-active',-->
    <!--                      isExactActive && 'menu-item-active'-->
    <!--                    ]"-->
    <!--                  >-->
    <!--                    <a :href="href" class="menu-link" @click="navigate">-->
    <!--                      <i class="menu-bullet menu-bullet-dot">-->
    <!--                        <span></span>-->
    <!--                      </i>-->
    <!--                      <span class="menu-text">Nav</span>-->
    <!--                    </a>-->
    <!--                  </li>-->
    <!--                </router-link>-->

    <!--                <router-link-->
    <!--                  to="/vue-bootstrap/navbar"-->
    <!--                  v-slot="{ href, navigate, isActive, isExactActive }"-->
    <!--                >-->
    <!--                  <li-->
    <!--                    aria-haspopup="true"-->
    <!--                    data-menu-toggle="hover"-->
    <!--                    class="menu-item"-->
    <!--                    :class="[-->
    <!--                      isActive && 'menu-item-active',-->
    <!--                      isExactActive && 'menu-item-active'-->
    <!--                    ]"-->
    <!--                  >-->
    <!--                    <a :href="href" class="menu-link" @click="navigate">-->
    <!--                      <i class="menu-bullet menu-bullet-dot">-->
    <!--                        <span></span>-->
    <!--                      </i>-->
    <!--                      <span class="menu-text">Navbar</span>-->
    <!--                    </a>-->
    <!--                  </li>-->
    <!--                </router-link>-->
    <!--              </ul>-->
    <!--            </div>-->
    <!--          </li>-->

    <!--          <li-->
    <!--            aria-haspopup="true"-->
    <!--            data-menu-toggle="hover"-->
    <!--            class="menu-item menu-item-submenu"-->
    <!--            v-bind:class="{-->
    <!--              'menu-item-open': hasActiveChildren('/vue-bootstrap/pagination')-->
    <!--            }"-->
    <!--          >-->
    <!--            <a href="#" class="menu-link menu-toggle">-->
    <!--              <i class="menu-bullet menu-bullet-dot">-->
    <!--                <span></span>-->
    <!--              </i>-->
    <!--              <span class="menu-text">Pagination</span>-->
    <!--              <i class="menu-arrow"></i>-->
    <!--            </a>-->
    <!--            <div class="menu-submenu">-->
    <!--              <span class="menu-arrow"></span>-->
    <!--              <ul class="menu-subnav">-->
    <!--                <li aria-haspopup="true" class="menu-item menu-item-parent">-->
    <!--                  <span class="menu-link">-->
    <!--                    <span class="menu-text"></span>-->
    <!--                  </span>-->
    <!--                </li>-->

    <!--                <router-link-->
    <!--                  to="/vue-bootstrap/pagination"-->
    <!--                  v-slot="{ href, navigate, isActive, isExactActive }"-->
    <!--                >-->
    <!--                  <li-->
    <!--                    aria-haspopup="true"-->
    <!--                    data-menu-toggle="hover"-->
    <!--                    class="menu-item"-->
    <!--                    :class="[-->
    <!--                      isActive && 'menu-item-active',-->
    <!--                      isExactActive && 'menu-item-active'-->
    <!--                    ]"-->
    <!--                  >-->
    <!--                    <a :href="href" class="menu-link" @click="navigate">-->
    <!--                      <i class="menu-bullet menu-bullet-dot">-->
    <!--                        <span></span>-->
    <!--                      </i>-->
    <!--                      <span class="menu-text">Pagination</span>-->
    <!--                    </a>-->
    <!--                  </li>-->
    <!--                </router-link>-->

    <!--                <router-link-->
    <!--                  to="/vue-bootstrap/pagination-nav"-->
    <!--                  v-slot="{ href, navigate, isActive, isExactActive }"-->
    <!--                >-->
    <!--                  <li-->
    <!--                    aria-haspopup="true"-->
    <!--                    data-menu-toggle="hover"-->
    <!--                    class="menu-item"-->
    <!--                    :class="[-->
    <!--                      isActive && 'menu-item-active',-->
    <!--                      isExactActive && 'menu-item-active'-->
    <!--                    ]"-->
    <!--                  >-->
    <!--                    <a :href="href" class="menu-link" @click="navigate">-->
    <!--                      <i class="menu-bullet menu-bullet-dot">-->
    <!--                        <span></span>-->
    <!--                      </i>-->
    <!--                      <span class="menu-text">Pagination Nav</span>-->
    <!--                    </a>-->
    <!--                  </li>-->
    <!--                </router-link>-->
    <!--              </ul>-->
    <!--            </div>-->
    <!--          </li>-->

    <!--          <li-->
    <!--            aria-haspopup="true"-->
    <!--            data-menu-toggle="hover"-->
    <!--            class="menu-item menu-item-submenu"-->
    <!--          >-->
    <!--            <a href="#" class="menu-link menu-toggle">-->
    <!--              <i class="menu-bullet menu-bullet-dot">-->
    <!--                <span></span>-->
    <!--              </i>-->
    <!--              <span class="menu-text">Notify</span>-->
    <!--              <i class="menu-arrow"></i>-->
    <!--            </a>-->
    <!--            <div class="menu-submenu">-->
    <!--              <span class="menu-arrow"></span>-->
    <!--              <ul class="menu-subnav">-->
    <!--                <li aria-haspopup="true" class="menu-item menu-item-parent">-->
    <!--                  <span class="menu-link">-->
    <!--                    <span class="menu-text"></span>-->
    <!--                  </span>-->
    <!--                </li>-->

    <!--                <router-link-->
    <!--                  to="/vue-bootstrap/popover"-->
    <!--                  v-slot="{ href, navigate, isActive, isExactActive }"-->
    <!--                >-->
    <!--                  <li-->
    <!--                    aria-haspopup="true"-->
    <!--                    data-menu-toggle="hover"-->
    <!--                    class="menu-item"-->
    <!--                    :class="[-->
    <!--                      isActive && 'menu-item-active',-->
    <!--                      isExactActive && 'menu-item-active'-->
    <!--                    ]"-->
    <!--                  >-->
    <!--                    <a :href="href" class="menu-link" @click="navigate">-->
    <!--                      <i class="menu-bullet menu-bullet-dot">-->
    <!--                        <span></span>-->
    <!--                      </i>-->
    <!--                      <span class="menu-text">Popover</span>-->
    <!--                    </a>-->
    <!--                  </li>-->
    <!--                </router-link>-->

    <!--                <router-link-->
    <!--                  to="/vue-bootstrap/toasts"-->
    <!--                  v-slot="{ href, navigate, isActive, isExactActive }"-->
    <!--                >-->
    <!--                  <li-->
    <!--                    aria-haspopup="true"-->
    <!--                    data-menu-toggle="hover"-->
    <!--                    class="menu-item"-->
    <!--                    :class="[-->
    <!--                      isActive && 'menu-item-active',-->
    <!--                      isExactActive && 'menu-item-active'-->
    <!--                    ]"-->
    <!--                  >-->
    <!--                    <a :href="href" class="menu-link" @click="navigate">-->
    <!--                      <i class="menu-bullet menu-bullet-dot">-->
    <!--                        <span></span>-->
    <!--                      </i>-->
    <!--                      <span class="menu-text">Toasts</span>-->
    <!--                    </a>-->
    <!--                  </li>-->
    <!--                </router-link>-->

    <!--                <router-link-->
    <!--                  to="/vue-bootstrap/tooltip"-->
    <!--                  v-slot="{ href, navigate, isActive, isExactActive }"-->
    <!--                >-->
    <!--                  <li-->
    <!--                    aria-haspopup="true"-->
    <!--                    data-menu-toggle="hover"-->
    <!--                    class="menu-item"-->
    <!--                    :class="[-->
    <!--                      isActive && 'menu-item-active',-->
    <!--                      isExactActive && 'menu-item-active'-->
    <!--                    ]"-->
    <!--                  >-->
    <!--                    <a :href="href" class="menu-link" @click="navigate">-->
    <!--                      <i class="menu-bullet menu-bullet-dot">-->
    <!--                        <span></span>-->
    <!--                      </i>-->
    <!--                      <span class="menu-text">Tooltip</span>-->
    <!--                    </a>-->
    <!--                  </li>-->
    <!--                </router-link>-->
    <!--              </ul>-->
    <!--            </div>-->
    <!--          </li>-->

    <!--          <li-->
    <!--            aria-haspopup="true"-->
    <!--            data-menu-toggle="hover"-->
    <!--            class="menu-item menu-item-submenu"-->
    <!--          >-->
    <!--            <a href="#" class="menu-link menu-toggle">-->
    <!--              <i class="menu-bullet menu-bullet-dot">-->
    <!--                <span></span>-->
    <!--              </i>-->
    <!--              <span class="menu-text">Progress</span>-->
    <!--              <i class="menu-arrow"></i>-->
    <!--            </a>-->
    <!--            <div class="menu-submenu">-->
    <!--              <span class="menu-arrow"></span>-->
    <!--              <ul class="menu-subnav">-->
    <!--                <li aria-haspopup="true" class="menu-item menu-item-parent">-->
    <!--                  <span class="menu-link">-->
    <!--                    <span class="menu-text"></span>-->
    <!--                  </span>-->
    <!--                </li>-->

    <!--                <router-link-->
    <!--                  to="/vue-bootstrap/progress"-->
    <!--                  v-slot="{ href, navigate, isActive, isExactActive }"-->
    <!--                >-->
    <!--                  <li-->
    <!--                    aria-haspopup="true"-->
    <!--                    data-menu-toggle="hover"-->
    <!--                    class="menu-item"-->
    <!--                    :class="[-->
    <!--                      isActive && 'menu-item-active',-->
    <!--                      isExactActive && 'menu-item-active'-->
    <!--                    ]"-->
    <!--                  >-->
    <!--                    <a :href="href" class="menu-link" @click="navigate">-->
    <!--                      <i class="menu-bullet menu-bullet-dot">-->
    <!--                        <span></span>-->
    <!--                      </i>-->
    <!--                      <span class="menu-text">Progress</span>-->
    <!--                    </a>-->
    <!--                  </li>-->
    <!--                </router-link>-->

    <!--                <router-link-->
    <!--                  to="/vue-bootstrap/spinner"-->
    <!--                  v-slot="{ href, navigate, isActive, isExactActive }"-->
    <!--                >-->
    <!--                  <li-->
    <!--                    aria-haspopup="true"-->
    <!--                    data-menu-toggle="hover"-->
    <!--                    class="menu-item"-->
    <!--                    :class="[-->
    <!--                      isActive && 'menu-item-active',-->
    <!--                      isExactActive && 'menu-item-active'-->
    <!--                    ]"-->
    <!--                  >-->
    <!--                    <a :href="href" class="menu-link" @click="navigate">-->
    <!--                      <i class="menu-bullet menu-bullet-dot">-->
    <!--                        <span></span>-->
    <!--                      </i>-->
    <!--                      <span class="menu-text">Spinner</span>-->
    <!--                    </a>-->
    <!--                  </li>-->
    <!--                </router-link>-->
    <!--              </ul>-->
    <!--            </div>-->
    <!--          </li>-->

    <!--          <router-link-->
    <!--            to="/vue-bootstrap/table"-->
    <!--            v-slot="{ href, navigate, isActive, isExactActive }"-->
    <!--          >-->
    <!--            <li-->
    <!--              aria-haspopup="true"-->
    <!--              data-menu-toggle="hover"-->
    <!--              class="menu-item"-->
    <!--              :class="[-->
    <!--                isActive && 'menu-item-active',-->
    <!--                isExactActive && 'menu-item-active'-->
    <!--              ]"-->
    <!--            >-->
    <!--              <a :href="href" class="menu-link" @click="navigate">-->
    <!--                <i class="menu-bullet menu-bullet-dot">-->
    <!--                  <span></span>-->
    <!--                </i>-->
    <!--                <span class="menu-text">Table</span>-->
    <!--              </a>-->
    <!--            </li>-->
    <!--          </router-link>-->

    <!--          <router-link-->
    <!--            to="/vue-bootstrap/tabs"-->
    <!--            v-slot="{ href, navigate, isActive, isExactActive }"-->
    <!--          >-->
    <!--            <li-->
    <!--              aria-haspopup="true"-->
    <!--              data-menu-toggle="hover"-->
    <!--              class="menu-item"-->
    <!--              :class="[-->
    <!--                isActive && 'menu-item-active',-->
    <!--                isExactActive && 'menu-item-active'-->
    <!--              ]"-->
    <!--            >-->
    <!--              <a :href="href" class="menu-link" @click="navigate">-->
    <!--                <i class="menu-bullet menu-bullet-dot">-->
    <!--                  <span></span>-->
    <!--                </i>-->
    <!--                <span class="menu-text">Tabs</span>-->
    <!--              </a>-->
    <!--            </li>-->
    <!--          </router-link>-->
    <!--        </ul>-->
    <!--      </div>-->
    <!--    </li>-->

    <!--    <li-->
    <!--      aria-haspopup="true"-->
    <!--      data-menu-toggle="hover"-->
    <!--      class="menu-item menu-item-submenu"-->
    <!--      v-bind:class="{ 'menu-item-open': hasActiveChildren('/error/error') }"-->
    <!--    >-->
    <!--      <a href="#" class="menu-link menu-toggle">-->
    <!--        <i class="menu-icon flaticon2-list-2"></i>-->
    <!--        <span class="menu-text">Error Pages</span>-->
    <!--        <i class="menu-arrow"></i>-->
    <!--      </a>-->
    <!--      <div class="menu-submenu">-->
    <!--        <span class="menu-arrow"></span>-->
    <!--        <ul class="menu-subnav">-->
    <!--          <li aria-haspopup="true" class="menu-item menu-item-parent">-->
    <!--            <span class="menu-link">-->
    <!--              <span class="menu-text">Error Pages</span>-->
    <!--            </span>-->
    <!--          </li>-->

    <!--          <router-link-->
    <!--            to="/error/error-1"-->
    <!--            v-slot="{ href, navigate, isActive, isExactActive }"-->
    <!--          >-->
    <!--            <li-->
    <!--              aria-haspopup="true"-->
    <!--              data-menu-toggle="hover"-->
    <!--              class="menu-item"-->
    <!--              :class="[-->
    <!--                isActive && 'menu-item-active',-->
    <!--                isExactActive && 'menu-item-active'-->
    <!--              ]"-->
    <!--            >-->
    <!--              <a :href="href" class="menu-link" @click="navigate">-->
    <!--                <i class="menu-bullet menu-bullet-dot">-->
    <!--                  <span></span>-->
    <!--                </i>-->
    <!--                <span class="menu-text">Error 1</span>-->
    <!--              </a>-->
    <!--            </li>-->
    <!--          </router-link>-->

    <!--          <router-link-->
    <!--            to="/error/error-2"-->
    <!--            v-slot="{ href, navigate, isActive, isExactActive }"-->
    <!--          >-->
    <!--            <li-->
    <!--              aria-haspopup="true"-->
    <!--              data-menu-toggle="hover"-->
    <!--              class="menu-item"-->
    <!--              :class="[-->
    <!--                isActive && 'menu-item-active',-->
    <!--                isExactActive && 'menu-item-active'-->
    <!--              ]"-->
    <!--            >-->
    <!--              <a :href="href" class="menu-link" @click="navigate">-->
    <!--                <i class="menu-bullet menu-bullet-dot">-->
    <!--                  <span></span>-->
    <!--                </i>-->
    <!--                <span class="menu-text">Error 2</span>-->
    <!--              </a>-->
    <!--            </li>-->
    <!--          </router-link>-->

    <!--          <router-link-->
    <!--            to="/error/error-3"-->
    <!--            v-slot="{ href, navigate, isActive, isExactActive }"-->
    <!--          >-->
    <!--            <li-->
    <!--              aria-haspopup="true"-->
    <!--              data-menu-toggle="hover"-->
    <!--              class="menu-item"-->
    <!--              :class="[-->
    <!--                isActive && 'menu-item-active',-->
    <!--                isExactActive && 'menu-item-active'-->
    <!--              ]"-->
    <!--            >-->
    <!--              <a :href="href" class="menu-link" @click="navigate">-->
    <!--                <i class="menu-bullet menu-bullet-dot">-->
    <!--                  <span></span>-->
    <!--                </i>-->
    <!--                <span class="menu-text">Error 3</span>-->
    <!--              </a>-->
    <!--            </li>-->
    <!--          </router-link>-->

    <!--          <router-link-->
    <!--            to="/error/error-4"-->
    <!--            v-slot="{ href, navigate, isActive, isExactActive }"-->
    <!--          >-->
    <!--            <li-->
    <!--              aria-haspopup="true"-->
    <!--              data-menu-toggle="hover"-->
    <!--              class="menu-item"-->
    <!--              :class="[-->
    <!--                isActive && 'menu-item-active',-->
    <!--                isExactActive && 'menu-item-active'-->
    <!--              ]"-->
    <!--            >-->
    <!--              <a :href="href" class="menu-link" @click="navigate">-->
    <!--                <i class="menu-bullet menu-bullet-dot">-->
    <!--                  <span></span>-->
    <!--                </i>-->
    <!--                <span class="menu-text">Error 4</span>-->
    <!--              </a>-->
    <!--            </li>-->
    <!--          </router-link>-->

    <!--          <router-link-->
    <!--            to="/error/error-5"-->
    <!--            v-slot="{ href, navigate, isActive, isExactActive }"-->
    <!--          >-->
    <!--            <li-->
    <!--              aria-haspopup="true"-->
    <!--              data-menu-toggle="hover"-->
    <!--              class="menu-item"-->
    <!--              :class="[-->
    <!--                isActive && 'menu-item-active',-->
    <!--                isExactActive && 'menu-item-active'-->
    <!--              ]"-->
    <!--            >-->
    <!--              <a :href="href" class="menu-link" @click="navigate">-->
    <!--                <i class="menu-bullet menu-bullet-dot">-->
    <!--                  <span></span>-->
    <!--                </i>-->
    <!--                <span class="menu-text">Error 5</span>-->
    <!--              </a>-->
    <!--            </li>-->
    <!--          </router-link>-->

    <!--          <router-link-->
    <!--            to="/error/error-6"-->
    <!--            v-slot="{ href, navigate, isActive, isExactActive }"-->
    <!--          >-->
    <!--            <li-->
    <!--              aria-haspopup="true"-->
    <!--              data-menu-toggle="hover"-->
    <!--              class="menu-item"-->
    <!--              :class="[-->
    <!--                isActive && 'menu-item-active',-->
    <!--                isExactActive && 'menu-item-active'-->
    <!--              ]"-->
    <!--            >-->
    <!--              <a :href="href" class="menu-link" @click="navigate">-->
    <!--                <i class="menu-bullet menu-bullet-dot">-->
    <!--                  <span></span>-->
    <!--                </i>-->
    <!--                <span class="menu-text">Error 6</span>-->
    <!--              </a>-->
    <!--            </li>-->
    <!--          </router-link>-->
    <!--        </ul>-->
    <!--      </div>-->
    <!--    </li>-->

    <!--    <li-->
    <!--      aria-haspopup="true"-->
    <!--      data-menu-toggle="hover"-->
    <!--      class="menu-item menu-item-submenu"-->
    <!--      v-bind:class="{ 'menu-item-open': hasActiveChildren('/wizard/wizard') }"-->
    <!--    >-->
    <!--      <a href="#" class="menu-link menu-toggle">-->
    <!--        <i class="menu-icon flaticon2-mail-1"></i>-->
    <!--        <span class="menu-text">Wizard</span>-->
    <!--        <i class="menu-arrow"></i>-->
    <!--      </a>-->
    <!--      <div class="menu-submenu">-->
    <!--        <span class="menu-arrow"></span>-->
    <!--        <ul class="menu-subnav">-->
    <!--          <li aria-haspopup="true" class="menu-item menu-item-parent">-->
    <!--            <span class="menu-link">-->
    <!--              <span class="menu-text">Wizard</span>-->
    <!--            </span>-->
    <!--          </li>-->

    <!--          <router-link-->
    <!--            to="/wizard/wizard-1"-->
    <!--            v-slot="{ href, navigate, isActive, isExactActive }"-->
    <!--          >-->
    <!--            <li-->
    <!--              aria-haspopup="true"-->
    <!--              data-menu-toggle="hover"-->
    <!--              class="menu-item"-->
    <!--              :class="[-->
    <!--                isActive && 'menu-item-active',-->
    <!--                isExactActive && 'menu-item-active'-->
    <!--              ]"-->
    <!--            >-->
    <!--              <a :href="href" class="menu-link" @click="navigate">-->
    <!--                <i class="menu-bullet menu-bullet-dot">-->
    <!--                  <span></span>-->
    <!--                </i>-->
    <!--                <span class="menu-text">Wizard 1</span>-->
    <!--              </a>-->
    <!--            </li>-->
    <!--          </router-link>-->

    <!--          <router-link-->
    <!--            to="/wizard/wizard-2"-->
    <!--            v-slot="{ href, navigate, isActive, isExactActive }"-->
    <!--          >-->
    <!--            <li-->
    <!--              aria-haspopup="true"-->
    <!--              data-menu-toggle="hover"-->
    <!--              class="menu-item"-->
    <!--              :class="[-->
    <!--                isActive && 'menu-item-active',-->
    <!--                isExactActive && 'menu-item-active'-->
    <!--              ]"-->
    <!--            >-->
    <!--              <a :href="href" class="menu-link" @click="navigate">-->
    <!--                <i class="menu-bullet menu-bullet-dot">-->
    <!--                  <span></span>-->
    <!--                </i>-->
    <!--                <span class="menu-text">Wizard 2</span>-->
    <!--              </a>-->
    <!--            </li>-->
    <!--          </router-link>-->

    <!--          <router-link-->
    <!--            to="/wizard/wizard-3"-->
    <!--            v-slot="{ href, navigate, isActive, isExactActive }"-->
    <!--          >-->
    <!--            <li-->
    <!--              aria-haspopup="true"-->
    <!--              data-menu-toggle="hover"-->
    <!--              class="menu-item"-->
    <!--              :class="[-->
    <!--                isActive && 'menu-item-active',-->
    <!--                isExactActive && 'menu-item-active'-->
    <!--              ]"-->
    <!--            >-->
    <!--              <a :href="href" class="menu-link" @click="navigate">-->
    <!--                <i class="menu-bullet menu-bullet-dot">-->
    <!--                  <span></span>-->
    <!--                </i>-->
    <!--                <span class="menu-text">Wizard 3</span>-->
    <!--              </a>-->
    <!--            </li>-->
    <!--          </router-link>-->

    <!--          <router-link-->
    <!--            to="/wizard/wizard-4"-->
    <!--            v-slot="{ href, navigate, isActive, isExactActive }"-->
    <!--          >-->
    <!--            <li-->
    <!--              aria-haspopup="true"-->
    <!--              data-menu-toggle="hover"-->
    <!--              class="menu-item"-->
    <!--              :class="[-->
    <!--                isActive && 'menu-item-active',-->
    <!--                isExactActive && 'menu-item-active'-->
    <!--              ]"-->
    <!--            >-->
    <!--              <a :href="href" class="menu-link" @click="navigate">-->
    <!--                <i class="menu-bullet menu-bullet-dot">-->
    <!--                  <span></span>-->
    <!--                </i>-->
    <!--                <span class="menu-text">Wizard 4</span>-->
    <!--              </a>-->
    <!--            </li>-->
    <!--          </router-link>-->
    <!--        </ul>-->
    <!--      </div>-->
    <!--    </li>-->

    <!--    <li-->
    <!--      aria-haspopup="true"-->
    <!--      data-menu-toggle="hover"-->
    <!--      class="menu-item menu-item-submenu"-->
    <!--      v-bind:class="{-->
    <!--        'menu-item-active': hasActiveChildren('/plugins/plugins')-->
    <!--      }"-->
    <!--    >-->
    <!--      <a href="#" class="menu-link menu-toggle">-->
    <!--        <i class="menu-icon flaticon2-image-file"></i>-->
    <!--        <span class="menu-text"> Plugins </span>-->
    <!--        <i class="menu-arrow"></i>-->
    <!--      </a>-->
    <!--      <div class="menu-submenu menu-submenu-classic menu-submenu-right">-->
    <!--        <ul class="menu-subnav">-->
    <!--          <router-link-->
    <!--            to="/plugins/cropper"-->
    <!--            v-slot="{ href, navigate, isActive, isExactActive }"-->
    <!--          >-->
    <!--            <li-->
    <!--              aria-haspopup="true"-->
    <!--              data-menu-toggle="hover"-->
    <!--              class="menu-item"-->
    <!--              :class="[-->
    <!--                isActive && 'menu-item-active',-->
    <!--                isExactActive && 'menu-item-active'-->
    <!--              ]"-->
    <!--            >-->
    <!--              <a :href="href" class="menu-link" @click="navigate">-->
    <!--                <i class="menu-bullet menu-bullet-dot"><span></span></i>-->
    <!--                <span class="menu-text"> Cropper </span>-->
    <!--              </a>-->
    <!--            </li>-->
    <!--          </router-link>-->
    <!--          <router-link-->
    <!--            to="/plugins/treeselect"-->
    <!--            v-slot="{ href, navigate, isActive, isExactActive }"-->
    <!--          >-->
    <!--            <li-->
    <!--              aria-haspopup="true"-->
    <!--              data-menu-toggle="hover"-->
    <!--              class="menu-item"-->
    <!--              :class="[-->
    <!--                isActive && 'menu-item-active',-->
    <!--                isExactActive && 'menu-item-active'-->
    <!--              ]"-->
    <!--            >-->
    <!--              <a :href="href" class="menu-link" @click="navigate">-->
    <!--                <i class="menu-bullet menu-bullet-dot"><span></span></i>-->
    <!--                <span class="menu-text"> Treeselect </span>-->
    <!--              </a>-->
    <!--            </li>-->
    <!--          </router-link>-->
    <!--        </ul>-->
    <!--      </div>-->
    <!--    </li>-->
  </ul>
</template>

<script>
import { getName, getImage, getRole, getEmail } from "@/service/jwt.service";

export default {
  data() {
    return {
      role: ""
    };
  },
  name: "KTMenu",
  methods: {
    hasActiveChildren(match) {
      return this.$route["path"].indexOf(match) !== -1;
    }
    // hasActiveChildren(match) {
    //   return this.$route["path"].indexOf(match) !== -1;
    // }
  },
  mounted() {
    this.name = getName();
    this.image = getImage();
    this.role = getRole();
    this.email = getEmail();

    const path = "/golongan/golongan-hewan";
    console.log(path.indexOf("/golongan/detail-golongan"));
  }
};
</script>

<style>
.menu-item-active a i {
  color: #100303 !important;
}
.menu-item:hover a i {
  color: #100303 !important;
}
/*.menu-submenu:hover a i {*/
/*  color: #fff !important;*/
/*}*/
</style>
