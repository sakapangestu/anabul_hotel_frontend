import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/landing-page",
      component: () => import("@/view/layout/Layout"),
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          component: () => import("@/view/pages/Dashboard.vue")
        },
        {
          path: "/dashboard-admin",
          name: "Dashboard-Admin",
          component: () => import("@/view/pages/Dashboard-admin.vue")
        },
        {
          path: "/builder",
          name: "builder",
          component: () => import("@/view/pages/Builder.vue")
        },
        {
          path: "/anabul-admin",
          name: "AnabulsAdmin",
          component: () => import("@/view/pages/admin/anabul-admin.vue"),
          children: [
            {
              path: "detail-inventaris",
              name: "DetailInventaris",
              component: () =>
                import("@/view/pages/admin/detail-inventaris.vue")
            },
            {
              path: "detail-laser",
              name: "DetailLaser",
              component: () => import("@/view/pages/admin/detail-laser.vue")
            },
            {
              path: "detail-reservasi",
              name: "DetailReservasi",
              component: () => import("@/view/pages/admin/detail-reservasi.vue")
            },
            {
              path: "produk",
              name: "Produk",
              component: () => import("@/view/pages/admin/produk.vue")
            },
            {
              path: "rating-penilaian",
              name: "RatingPenilaian",
              component: () => import("@/view/pages/admin/rating-penilaian.vue")
            },
            // {
            //   path: "kondisi",
            //   name: "Kondisi",
            //   component: () => import("@/view/pages/admin/kondisi.vue")
            // },
            {
              path: "regulasi",
              name: "Regulasi",
              component: () => import("@/view/pages/admin/regulasi.vue")
            },
            {
              path: "staff",
              name: "Staff",
              component: () => import("@/view/pages/admin/staff.vue")
            },
            {
              path: "kondisihewan",
              name: "kondisihewan",
              component: () => import("@/view/pages/admin/kondisi-hewan.vue")
            }
          ]
        },
        {
          path: "/anabul",
          name: "Anabuls",
          component: () => import("@/view/pages/anabuls/anabul.vue"),
          children: [
            // {
            //   path: "pet-hotel",
            //   name: "Pethotel",
            //   component: () => import("@/view/pages/anabuls/pet-hotel.vue")
            // },
            // {
            //   path: "temporary-hotel",
            //   name: "temporary-hotel",
            //   component: () =>
            //     import("@/view/pages/anabuls/temporary-hotel.vue")
            // },
            {
              path: "permintaan",
              name: "Permintaan",
              component: () => import("@/view/pages/anabuls/permintaan.vue")
            },
            {
              path: "kelas-hewan",
              name: "KelasHewan",
              component: () => import("@/view/pages/anabuls/kelas-hewan.vue")
            },
            {
              path: "admin-pet",
              name: "AdminPet",
              component: () => import("@/view/pages/anabuls/admin-pet.vue")
            },
            {
              path: "kategori-hewan",
              name: "KategoriHewan",
              component: () => import("@/view/pages/anabuls/kategori-hewan.vue")
            },
            {
              path: "spesies-hewan",
              name: "SpesiesHewan",
              component: () => import("@/view/pages/spesies/spesies-hewan.vue")
            }
          ]
        },
        {
          path: "/spesies",
          name: "spesies",
          component: () => import("@/view/pages/spesies/spesies.vue"),
          children: [
            {
              path: "spesies-hewan",
              name: "spesies-hewan",
              component: () => import("@/view/pages/spesies/spesies-hewan.vue")
            },
            {
              path: "temporary-spesies",
              name: "temporary-spesies",
              component: () =>
                import("@/view/pages/spesies/temporary-spesies.vue")
            }
          ]
        },
        {
          path: "/pethotel",
          name: "pethotel",
          component: () => import("@/view/pages/pethotel/pethotel.vue"),
          children: [
            {
              path: "pet-hotel",
              name: "pet-hotel",
              component: () => import("@/view/pages/pethotel/pet-hotel.vue")
            },
            {
              path: "temporary-hotel",
              name: "temporary-hotel",
              component: () =>
                import("@/view/pages/pethotel/temporary-hotel.vue")
            }
          ]
        },

        {
          path: "/golongan",
          name: "golongan",
          component: () => import("@/view/pages/golongan/golongan.vue"),
          children: [
            {
              path: "detail-golongan",
              name: "detail-golongan",
              component: () =>
                import("@/view/pages/golongan/detail-golongan.vue")
            },
            {
              path: "golongan-hewan",
              name: "golongan-hewan",
              component: () =>
                import("@/view/pages/golongan/golongan-hewan.vue")
            }
            // {
            //   path: "spesies-baru",
            //   name: "spesies-baru",
            //   component: () =>
            //     import("@/view/pages/golongan/spesies-baru.vue")
            // }
          ]
        },
        {
          path: "/kandang",
          name: "kandang",
          component: () => import("@/view/pages/kandang/kandang.vue"),
          children: [
            {
              path: "kandang-hewan",
              name: "kandang-hewan",
              component: () => import("@/view/pages/kandang/kandang-hewan.vue")
            },
            {
              path: "kategori-kandang",
              name: "kategori-kandang",
              component: () =>
                import("@/view/pages/kandang/kategori-kandang.vue")
            },
            {
              path: "ukuran-kandang",
              name: "ukuran-kandang",
              component: () => import("@/view/pages/kandang/ukuran-kandang.vue")
            },
            {
              path: "detail-kandang",
              name: "detail-kandang",
              component: () => import("@/view/pages/kandang/detail-kandang.vue")
            }
          ]
        },
        {
          path: "/layanan",
          name: "layanan",
          component: () => import("@/view/pages/layanan/layanan.vue"),
          children: [
            {
              path: "detail-layanan",
              name: "detail-layanan",
              component: () => import("@/view/pages/layanan/detail-layanan.vue")
            },
            {
              path: "layanan-hewan",
              name: "layanan-hewan",
              component: () => import("@/view/pages/layanan/layanan-hewan.vue")
            }
          ]
        },
        {
          path: "/profile",
          name: "profile",
          component: () => import("@/view/pages/profile-admin/profile.vue"),
          children: [
            {
              path: "profil-admin",
              name: "profil-admin",
              component: () =>
                import("@/view/pages/profile-admin/profil-admin.vue")
            },
            {
              path: "profil-hotel",
              name: "profil-hotel",
              component: () =>
                import("@/view/pages/profile-admin/profil-hotel.vue")
            }
          ]
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/view/pages/auth/Login")
    },
    {
      path: "/register",
      name: "register",
      component: () => import("@/view/pages/auth/Wizard-1")
    },
    // {
    //   path: "/",
    //   component: () => import("@/view/pages/auth/Auth"),
    //   children: [
    //     {
    //       name: "login",
    //       path: "/login",
    //       component: () => import("@/view/pages/auth/Login")
    //     },
    //     {
    //       name: "register",
    //       path: "/register",
    //       component: () => import("@/view/pages/auth/Register")
    //     }
    //   ]
    // },
    {
      name: "wizard",
      path: "/wizard",
      component: () => import("@/view/pages/wizard/Wizard"),
      children: [
        {
          name: "wizard-1",
          path: "/wizard-1",
          component: () => import("@/view/pages/wizard/Wizard-1")
        }
      ]
    },
    {
      name: "email",
      path: "/email",
      component: () => import("@/view/pages/auth/resetEmail")
    },
    {
      name: "resetPassword",
      path: "/resetPassword",
      component: () => import("@/view/pages/auth/resetPassword")
    },
    {
      name: "resetSucces",
      path: "/resetSucces",
      component: () => import("@/view/pages/auth/resetSucces")
    },
    {
      name: "landing-page",
      path: "/landing-page",
      component: () => import("@/view/pages/landing-page/landing-page")
    },
    {
      name: "verifySuccess",
      path: "/verifySuccess",
      component: () => import("@/view/pages/auth/verifySucces")
    },
    {
      name: "emailPengajuan",
      path: "/emailPengajuan",
      component: () => import("@/view/pages/auth/emailPengajuan")
    }
  ]
});
