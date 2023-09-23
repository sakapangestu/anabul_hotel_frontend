<template>
  <div>
    <!-- ***** Preloader Start ***** -->
    <!--    <div id="preloader">-->
    <!--        <div class="jumper">-->
    <!--            <div></div>-->
    <!--            <div></div>-->
    <!--            <div></div>-->
    <!--        </div>-->
    <!--    </div>-->
    <!-- ***** Preloader End ***** -->

    <!-- ***** Header Area Start ***** -->
    <header class="header-area header-sticky">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <nav class="main-nav">
              <!-- ***** Logo Start ***** -->
              <a href="" class="logo">
                Anabul Hotel
              </a>
              <!-- ***** Logo End ***** -->
              <!-- ***** Menu Start ***** -->
              <ul class="nav">
                <li class="scroll-to-section">
                  <a href="#welcome" class="menu-item">Beranda</a>
                </li>
                <li class="scroll-to-section">
                  <a href="#about" class="menu-item">Tentang</a>
                </li>
                <!--                <li class="scroll-to-section">-->
                <!--                  <a href="#testimonials" class="menu-item">Testimonials</a>-->
                <!--                </li>-->
                <!--                <li class="scroll-to-section">-->
                <!--                  <a href="#contact-us" class="menu-item">Contact Us</a>-->
                <!--                </li>-->
                <li class="scroll-to-section">
                  <router-link to="login">Login</router-link>
                </li>
              </ul>
              <a class="menu-trigger">
                <span>Menu</span>
              </a>
              <!-- ***** Menu End ***** -->
            </nav>
          </div>
        </div>
      </div>
    </header>
    <!-- ***** Header Area End ***** -->

    <!-- ***** Welcome Area Start ***** -->
    <div class="welcome-area" id="welcome">
      <!-- ***** Header Text Start ***** -->
      <div class="header-text">
        <div class="container">
          <div class="row">
            <div
              class="left-text col-lg-6 col-md-12 col-sm-12 col-xs-12"
              data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
            >
              <h1>Layanan Penitipan Hewan <em>Anabul Hotel</em></h1>
              <p>
                Selamat datang di Anabul Hotel, solusi terbaik untuk manajemen
                reservasi pet hotel. Bergabunglah bersama kami untuk mendapatkan
                kemudahan dalam mendaftarkan dan mengelola tempat penitipan
                hewan peliharaan Anda. Kami memastikan pengalaman nyaman dan
                aman bagi hewan peliharaan Anda, sementara Anda dapat fokus pada
                kebahagiaan anda. Bergabung sekarang dan nikmati kemudahan
                manajemen operasional pet hotel Anda!
              </p>
              <a href="register" class="main-button">Registrasi Sekarang!!</a>
              <a
                href="https://drive.google.com/drive/folders/1C0CPF10AMjwfut7T8yCuHHb_4C2CL5Si?usp=sharing"
                class="main-button ml-2"
                target="_blank"
                ><img
                  src="@/assets/image/game.png"
                  class="playstore mr-2"
                />Install Aplikasi Mobile Sekarang!!</a
              >
            </div>
          </div>
        </div>
      </div>
      <!-- ***** Header Text End ***** -->
    </div>
    <!-- ***** Welcome Area End ***** -->

    <!-- ***** Features Big Item Start ***** -->
    <section class="section" id="about">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-4 col-md-6 col-sm-12 col-xs-12"
            data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
          >
            <div class="features-item">
              <div class="features-icon">
                <h2>01</h2>
                <img class="icon" src="@/assets/images/booking.png" alt="" />
                <h4>Fitur Reservasi</h4>
                <p>
                  Memudahkan pengguna dalam melakukan reservasi Pet Hotel di
                  mana saja dan kapan saja
                </p>
                <!--                <a href="#testimonials" class="main-button">-->
                <!--                  Read More-->
                <!--                </a>-->
              </div>
            </div>
          </div>
          <div
            class="col-lg-4 col-md-6 col-sm-12 col-xs-12"
            data-scroll-reveal="enter bottom move 30px over 0.6s after 0.4s"
          >
            <div class="features-item">
              <div class="features-icon">
                <h2>02</h2>
                <img class="icon" src="@/assets/images/report.png" alt="" />
                <h4>Fitur Laporan Aktifitas Hewan</h4>
                <p>
                  Memberikan informasi kegiatan hewan yang diberikan kepada
                  customer saat berada pada Pet Hotel
                </p>
                <!--                <a href="#testimonials" class="main-button">-->
                <!--                  Discover More-->
                <!--                </a>-->
              </div>
            </div>
          </div>
          <div
            class="col-lg-4 col-md-6 col-sm-12 col-xs-12"
            data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
          >
            <div class="features-item">
              <div class="features-icon">
                <h2>03</h2>
                <img
                  class="icon"
                  src="@/assets/images/notifications.png"
                  alt=""
                />
                <h4>Fitur Notifikasi</h4>
                <p>
                  Memudahkan customer dalam mendapatkan informasi kegiatan hewan
                  peliharaannya di Pet Hotel
                </p>
                <!--                <a href="#testimonials" class="main-button">-->
                <!--                  More Detail-->
                <!--                </a>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ***** Features Big Item End ***** -->

    <div class="left-image-decor"></div>

    <!-- ***** Features Big Item Start ***** -->
    <section class="section" id="promotion">
      <div class="container">
        <div class="row">
          <div
            class="left-image col-lg-5 col-md-12 col-sm-12 mobile-bottom-fix-big"
            data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
          >
            <img
              src="@/assets/images/left-image.png"
              class="rounded img-fluid d-block mx-auto"
              alt="App"
            />
          </div>
          <div
            class="right-text offset-lg-1 col-lg-6 col-md-12 col-sm-12 mobile-bottom-fix"
          >
            <ul>
              <li
                data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
              >
                <img src="@/assets/images/about-icon-01.png" alt="" />
                <div class="text">
                  <h4>Fitur Reservasi</h4>
                  <p>
                    Memudahkan pengguna dalam melakukan reservasi Pet Hotel di
                    mana saja dan kapan saja
                  </p>
                </div>
              </li>
              <li
                data-scroll-reveal="enter right move 30px over 0.6s after 0.5s"
              >
                <img src="@/assets/images/about-icon-02.png" alt="" />
                <div class="text">
                  <h4>Fitur Laporan Aktifitas Hewan</h4>
                  <p>
                    Memberikan informasi kegiatan hewan yang diberikan kepada
                    customer saat berada pada Pet Hotel
                  </p>
                </div>
              </li>
              <li
                data-scroll-reveal="enter right move 30px over 0.6s after 0.6s"
              >
                <img src="@/assets/images/about-icon-03.png" alt="" />
                <div class="text">
                  <h4>Fitur Notifikasi</h4>
                  <p>
                    Memudahkan customer dalam mendapatkan informasi kegiatan
                    hewan peliharaannya di Pet Hotel
                  </p>
                </div>
              </li>
              <li
                data-scroll-reveal="enter right move 30px over 0.6s after 0.6s"
              >
                <img src="@/assets/images/about-icon-03.png" alt="" />
                <div class="text">
                  <h4>Install Mobile</h4>
                  <p>
                    Jangan Ketinggalan, Instal Aplikasi Ini dan Nikmati
                    Kepraktisannya!
                    <a
                      href="https://drive.google.com/drive/folders/1C0CPF10AMjwfut7T8yCuHHb_4C2CL5Si?usp=sharing"
                      target="_blank"
                      >Install Sekarang</a
                    >
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!-- ***** Features Big Item End ***** -->

    <!-- ***** Testimonials Starts ***** -->
    <section class="section" id="testimonials">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <div class="center-heading">
              <h2>
                #1 Layanan penitipan hewan Anabul Hotel
                <em>berbasis web dan aplikasi mobile di Indonesia</em>
              </h2>
              <p>
                Kini semua pet hotel bisa memiliki aplikasi secara mudah. Buat
                Usaha anda terlihat profesional dan dapat ditemukan dari seluruh
                Indonesia.
              </p>
            </div>
          </div>
          <!--          <div-->
          <!--            class="col-lg-10 col-md-12 col-sm-12 mobile-bottom-fix-big"-->
          <!--            data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"-->
          <!--          >-->
          <!--            <div class="owl-carousel owl-theme">-->
          <!--              <div class="item service-item">-->
          <!--                <div class="author">-->
          <!--                  <i-->
          <!--                    ><img-->
          <!--                      src="@/assets/images/testimonial-author-1.png"-->
          <!--                      alt="Author One"-->
          <!--                  /></i>-->
          <!--                </div>-->
          <!--                <div class="testimonial-content">-->
          <!--                  <ul class="stars">-->
          <!--                    <li><i class="fa fa-star"></i></li>-->
          <!--                    <li><i class="fa fa-star"></i></li>-->
          <!--                    <li><i class="fa fa-star"></i></li>-->
          <!--                    <li><i class="fa fa-star"></i></li>-->
          <!--                    <li><i class="fa fa-star"></i></li>-->
          <!--                  </ul>-->
          <!--                  <h4>Jonathan Smart</h4>-->
          <!--                  <p>-->
          <!--                    “Nullam hendrerit, elit a semper pharetra, ipsum nibh-->
          <!--                    tristique tortor, in tempus urna elit in mauris.”-->
          <!--                  </p>-->
          <!--                  <span>Besta CTO</span>-->
          <!--                </div>-->
          <!--              </div>-->
          <!--              <div class="item service-item">-->
          <!--                <div class="author">-->
          <!--                  <i-->
          <!--                    ><img-->
          <!--                      src="@/assets/images/testimonial-author-1.png"-->
          <!--                      alt="Second Author"-->
          <!--                  /></i>-->
          <!--                </div>-->
          <!--                <div class="testimonial-content">-->
          <!--                  <ul class="stars">-->
          <!--                    <li><i class="fa fa-star"></i></li>-->
          <!--                    <li><i class="fa fa-star"></i></li>-->
          <!--                    <li><i class="fa fa-star"></i></li>-->
          <!--                    <li><i class="fa fa-star"></i></li>-->
          <!--                    <li><i class="fa fa-star"></i></li>-->
          <!--                  </ul>-->
          <!--                  <h4>Martino Tino</h4>-->
          <!--                  <p>-->
          <!--                    “Morbi non mi luctus felis molestie scelerisque. In ac-->
          <!--                    libero viverra, placerat est interdum, rhoncus leo.”-->
          <!--                  </p>-->
          <!--                  <span>Web Analyst</span>-->
          <!--                </div>-->
          <!--              </div>-->
          <!--              <div class="item service-item">-->
          <!--                <div class="author">-->
          <!--                  <i-->
          <!--                    ><img-->
          <!--                      src="@/assets/images/testimonial-author-1.png"-->
          <!--                      alt="Author Third"-->
          <!--                  /></i>-->
          <!--                </div>-->
          <!--                <div class="testimonial-content">-->
          <!--                  <ul class="stars">-->
          <!--                    <li><i class="fa fa-star"></i></li>-->
          <!--                    <li><i class="fa fa-star"></i></li>-->
          <!--                    <li><i class="fa fa-star"></i></li>-->
          <!--                  </ul>-->
          <!--                  <h4>George Tasa</h4>-->
          <!--                  <p>-->
          <!--                    “Fusce rutrum in dolor sit amet lobortis. Ut at vehicula-->
          <!--                    justo. Donec quam dolor, congue a fringilla sed, maximus et-->
          <!--                    urna.”-->
          <!--                  </p>-->
          <!--                  <span>System Admin</span>-->
          <!--                </div>-->
          <!--              </div>-->
          <!--              <div class="item service-item">-->
          <!--                <div class="author">-->
          <!--                  <i-->
          <!--                    ><img-->
          <!--                      src="@/assets/images/testimonial-author-1.png"-->
          <!--                      alt="Fourth Author"-->
          <!--                  /></i>-->
          <!--                </div>-->
          <!--                <div class="testimonial-content">-->
          <!--                  <ul class="stars">-->
          <!--                    <li><i class="fa fa-star"></i></li>-->
          <!--                    <li><i class="fa fa-star"></i></li>-->
          <!--                    <li><i class="fa fa-star"></i></li>-->
          <!--                    <li><i class="fa fa-star"></i></li>-->
          <!--                  </ul>-->
          <!--                  <h4>Sir James</h4>-->
          <!--                  <p>-->
          <!--                    "Fusce rutrum in dolor sit amet lobortis. Ut at vehicula-->
          <!--                    justo. Donec quam dolor, congue a fringilla sed, maximus et-->
          <!--                    urna."-->
          <!--                  </p>-->
          <!--                  <span>New Villager</span>-->
          <!--                </div>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--          </div>-->
        </div>
      </div>
    </section>
    <!-- ***** Testimonials Ends ***** -->
    <!-- ***** Footer Start ***** -->
    <!--    <footer id="contact-us">-->
    <!--      <div class="container">-->
    <!--        <div class="footer-content">-->
    <!--          <div class="row">-->
    <!--            &lt;!&ndash; ***** Contact Form Start ***** &ndash;&gt;-->
    <!--            <div class="col-lg-6 col-md-12 col-sm-12">-->
    <!--              <div class="contact-form">-->
    <!--                <form id="contact" action="" method="post">-->
    <!--                  <div class="row">-->
    <!--                    <div class="col-md-6 col-sm-12">-->
    <!--                      <fieldset>-->
    <!--                        <input-->
    <!--                          name="name"-->
    <!--                          type="text"-->
    <!--                          id="name"-->
    <!--                          placeholder="Full Name"-->
    <!--                          required=""-->
    <!--                          style="background-color: rgba(250,250,250,0.3);"-->
    <!--                        />-->
    <!--                      </fieldset>-->
    <!--                    </div>-->
    <!--                    <div class="col-md-6 col-sm-12">-->
    <!--                      <fieldset>-->
    <!--                        <input-->
    <!--                          name="email"-->
    <!--                          type="text"-->
    <!--                          id="email"-->
    <!--                          placeholder="E-Mail Address"-->
    <!--                          required=""-->
    <!--                          style="background-color: rgba(250,250,250,0.3);"-->
    <!--                        />-->
    <!--                      </fieldset>-->
    <!--                    </div>-->
    <!--                    <div class="col-lg-12">-->
    <!--                      <fieldset>-->
    <!--                        <textarea-->
    <!--                          name="message"-->
    <!--                          rows="6"-->
    <!--                          id="message"-->
    <!--                          placeholder="Your Message"-->
    <!--                          required=""-->
    <!--                          style="background-color: rgba(250,250,250,0.3);"-->
    <!--                        ></textarea>-->
    <!--                      </fieldset>-->
    <!--                    </div>-->
    <!--                    <div class="col-lg-12">-->
    <!--                      <fieldset>-->
    <!--                        <button-->
    <!--                          type="submit"-->
    <!--                          id="form-submit"-->
    <!--                          class="main-button"-->
    <!--                        >-->
    <!--                          Send Message Now-->
    <!--                        </button>-->
    <!--                      </fieldset>-->
    <!--                    </div>-->
    <!--                  </div>-->
    <!--                </form>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--            &lt;!&ndash; ***** Contact Form End ***** &ndash;&gt;-->
    <!--            <div class="right-content col-lg-6 col-md-12 col-sm-12">-->
    <!--              <h2>More About <em>Lava</em></h2>-->
    <!--              <p>-->
    <!--                Phasellus dapibus urna vel lacus accumsan, iaculis eleifend leo-->
    <!--                auctor. Duis at finibus odio. Vivamus ut pharetra arcu, in porta-->
    <!--                metus. Suspendisse blandit pulvinar ligula ut elementum.-->
    <!--                <br /><br />If you need this contact form to send email to your-->
    <!--                inbox, you may follow our-->
    <!--                <a-->
    <!--                  rel="nofollow"-->
    <!--                  href="https://templatemo.com/contact"-->
    <!--                  target="_parent"-->
    <!--                  >contact</a-->
    <!--                >-->
    <!--                page for more detail.-->
    <!--              </p>-->
    <!--              <ul class="social">-->
    <!--                <li>-->
    <!--                  <a href="https://fb.com/templatemo"-->
    <!--                    ><i class="fa fa-facebook"></i-->
    <!--                  ></a>-->
    <!--                </li>-->
    <!--                <li>-->
    <!--                  <a href="#"><i class="fa fa-twitter"></i></a>-->
    <!--                </li>-->
    <!--                <li>-->
    <!--                  <a href="#"><i class="fa fa-linkedin"></i></a>-->
    <!--                </li>-->
    <!--                <li>-->
    <!--                  <a href="#"><i class="fa fa-rss"></i></a>-->
    <!--                </li>-->
    <!--                <li>-->
    <!--                  <a href="#"><i class="fa fa-dribbble"></i></a>-->
    <!--                </li>-->
    <!--              </ul>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        <div class="row">-->
    <!--          <div class="col-lg-12">-->
    <!--            <div class="sub-footer">-->
    <!--              <p>-->
    <!--                Copyright &copy; 2020 Lava Landing Page | Designed by-->
    <!--                <a rel="nofollow" href="https://templatemo.com">TemplateMo</a>-->
    <!--              </p>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </footer>-->
  </div>
</template>
<!--<script>-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      googlePlayStoreLink:-->
<!--        "https://drive.google.com/drive/folders/1C0CPF10AMjwfut7T8yCuHHb_4C2CL5Si?usp=sharing" // Ganti dengan URL tautan Google Play Store aplikasi Anda-->
<!--    };-->
<!--  }-->
<!--};-->
<!--</script>-->
<style>
.playstore {
  width: 25px;
  height: 25px;
}
.icon {
  width: 100px;
  height: 100px;
}
</style>
