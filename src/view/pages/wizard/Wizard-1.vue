<template>
  <div class="card card-custom">
    <div
      class="position-absolute top-0 right-0 text-right mt-5 mb-15 mb-lg-0 flex-column-auto justify-content-center py-5 px-10"
    >
      <span class="font-weight-bold font-size-3 text-dark-60">
        Already have an account?
      </span>
      <router-link
        class="font-weight-bold font-size-3 ml-2"
        :to="{ name: 'login' }"
      >
        Sign In!
      </router-link>
    </div>
    <div class="card-body p-0">
      <!--begin: Wizard-->
      <div
        class="wizard wizard-1"
        id="kt_wizard_v1"
        data-wizard-state="step-first"
        data-wizard-clickable="true"
      >
        <!--begin: Wizard Nav-->
        <div class="wizard-nav border-bottom">
          <div class="wizard-steps p-8 p-lg-10">
            <div
              class="wizard-step"
              data-wizard-type="step"
              data-wizard-state="current"
            >
              <div class="wizard-label">
                <i class="wizard-icon flaticon-bus-stop"></i>
                <h3 class="wizard-title">1. Setup Location</h3>
              </div>
              <i class="wizard-arrow flaticon2-next"></i>
            </div>
            <div class="wizard-step" data-wizard-type="step">
              <div class="wizard-label">
                <i class="wizard-icon flaticon-list"></i>
                <h3 class="wizard-title">2. Enter Details</h3>
              </div>
              <i class="wizard-arrow flaticon2-next"></i>
            </div>
            <div class="wizard-step" data-wizard-type="step">
              <div class="wizard-label">
                <i class="wizard-icon flaticon-responsive"></i>
                <h3 class="wizard-title">3. Select Services</h3>
              </div>
              <i class="wizard-arrow flaticon2-next"></i>
            </div>
            <!--            <div class="wizard-step" data-wizard-type="step">-->
            <!--              <div class="wizard-label">-->
            <!--                <i class="wizard-icon flaticon-truck"></i>-->
            <!--                <h3 class="wizard-title">4. Delivery Address</h3>-->
            <!--              </div>-->
            <!--              <i class="wizard-arrow flaticon2-next"></i>-->
            <!--            </div>-->
            <!--            <div class="wizard-step" data-wizard-type="step">-->
            <!--              <div class="wizard-label">-->
            <!--                <i class="wizard-icon flaticon-globe"></i>-->
            <!--                <h3 class="wizard-title">5. Review and Submit</h3>-->
            <!--              </div>-->
            <!--              <i class="wizard-arrow last flaticon2-next"></i>-->
            <!--            </div>-->
          </div>
        </div>
        <!--end: Wizard Nav-->

        <!--begin: Wizard Body-->
        <div class="row justify-content-center my-10 px-8 my-lg-15 px-lg-10">
          <div class="col-xl-12 col-xxl-7">
            <!--begin: Wizard Form-->
            <form class="form" id="kt_form">
              <!--begin: Wizard Step 1-->
              <div
                class="pb-5"
                data-wizard-type="step-content"
                data-wizard-state="current"
              >
                <h3 class="mb-10 font-weight-bold text-dark">
                  Setup Your Current Location
                </h3>
                <div class="form-group">
                  <label>Nama Hotel</label>
                  <input
                    type="text"
                    class="form-control form-control-solid form-control-lg"
                    placeholder="Nama Hotel"
                    v-model="form.hotel_name"
                  />
                  <span class="form-text text-muted"
                    >Masukkan Nama Hotel Nama</span
                  >
                </div>
                <div class="form-group">
                  <label>Email Hotel</label>
                  <input
                    type="email"
                    class="form-control form-control-solid form-control-lg"
                    placeholder="Email Hotel"
                    v-model="form.hotel_email"
                  />
                  <span class="form-text text-muted">Masukkan Email Hotel</span>
                </div>
                <div class="form-group">
                  <label>No Hp Hotel</label>
                  <input
                    type="number"
                    class="form-control form-control-solid form-control-lg"
                    placeholder="Email Hotel"
                    v-model="form.hotel_email"
                  />
                  <span class="form-text text-muted"
                    >Masukkan No Hp Hotel Hotel</span
                  >
                </div>
                <div class="form-group">
                  <label>NPWP</label>
                  <input
                    type="number"
                    class="form-control form-control-solid form-control-lg"
                    placeholder="NPWP"
                    v-model="form.hotel_email"
                  />
                  <span class="form-text text-muted">Masukkan NPWP</span>
                </div>
                <div class="row">
                  <div class="col-xl-6">
                    <div class="form-group">
                      <label>Provinsi Hotel</label>
                      <b-form-select
                        class="form-control form-control-solid form-control-lg"
                        v-model="form.hotel_province"
                        @change="resetProvince"
                        :label-field="provinces.name"
                        value-field="id_province"
                        text-field="name"
                        :options="provinces"
                      ></b-form-select>
                      <span class="form-text text-muted"
                        >Masukkan Alamat Provinsi Hotel</span
                      >
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group">
                      <label>Kota Hotel</label>
                      <b-form-select
                        class="form-control form-control-solid form-control-lg"
                        v-model="form.hotel_city"
                        @change="fetchDistrict"
                        :label-field="cities.name"
                        value-field="id_city"
                        text-field="name"
                        :options="cities"
                      ></b-form-select>
                      <span class="form-text text-muted"
                        >Masukkan Alamat Kota Hotel</span
                      >
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-6">
                    <div class="form-group">
                      <label>Kecamatan Hotel</label>
                      <b-form-select
                        class="form-control form-control-solid form-control-lg"
                        v-model="form.hotel_district"
                        @change="fetchSubdistrict"
                        :label-field="districts.name"
                        value-field="id_district"
                        text-field="name"
                        :options="districts"
                      ></b-form-select>
                      <span class="form-text text-muted"
                        >Masukkan Alamat Kecamatan Hotel</span
                      >
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group">
                      <label>Kelurahan Hotel</label>
                      <b-form-select
                        class="form-control form-control-solid form-control-lg"
                        v-model="form.hotel_subdistrict"
                        :label-field="subdistricts.name"
                        value-field="id_subdistrict"
                        text-field="name"
                        :options="subdistricts"
                      ></b-form-select>
                      <span class="form-text text-muted"
                        >Masukkan Alamat Kelurahan Hotel</span
                      >
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label>Alamat Hotel</label>
                  <b-form-textarea
                    class="form-control form-control-solid form-control-lg"
                    v-model="form.hotel_address"
                    placeholder="Masukkan Alamat Hotel..."
                    rows="3"
                    max-rows="6"
                    required
                  ></b-form-textarea>
                  <span class="form-text text-muted"
                    >Masukkan Alamat Hotel</span
                  >
                </div>
              </div>
              <!--end: Wizard Step 1-->

              <!--begin: Wizard Step 2-->
              <div class="pb-5" data-wizard-type="step-content">
                <h4 class="mb-10 font-weight-bold text-dark">
                  Enter the Details of your Delivery
                </h4>
                <div class="form-group">
                  <label>Nama Admin</label>
                  <input
                    type="text"
                    class="form-control form-control-solid form-control-lg"
                    placeholder="Nama Admin"
                    v-model="form.admin_name"
                  />
                  <span class="form-text text-muted">Masukkan Nama Admin</span>
                </div>
                <div class="form-group">
                  <label>No Hp Admin</label>
                  <input
                    type="number"
                    class="form-control form-control-solid form-control-lg"
                    placeholder="Masukkan No Hp Hotel"
                    v-model="form.admin_phone"
                  />
                  <span class="form-text text-muted">Masukkan No Hp Admin</span>
                </div>
                <div class="form-group">
                  <label>NIK Admin</label>
                  <input
                    type="number"
                    class="form-control form-control-solid form-control-lg"
                    placeholder="Masukkan NIK"
                    v-model="form.nik"
                  />
                  <span class="form-text text-muted">Masukkan NIK Admin</span>
                </div>
              </div>
              <!--end: Wizard Step 2-->

              <!--begin: Wizard Step 3-->
              <div class="pb-5" data-wizard-type="step-content">
                <h4 class="mb-10 font-weight-bold text-dark">
                  Select your Services
                </h4>
                <div class="form-group">
                  <label>Dokumen SIUP/AKTE/NIB</label>
                  <input
                    class="form-control form-control-solid form-control-lg"
                    type="file"
                    id="file"
                    ref="docs"
                    v-on:change="handleDocument()"
                  />
                  <span class="form-text text-muted"
                    >Masukkan Dokumen SIUP/AKTE/NIB</span
                  >
                </div>
                <div class="form-group">
                  <label>KTP</label>
                  <input
                    class="form-control form-control-solid form-control-lg"
                    type="file"
                    id="file"
                    ref="ktp"
                    v-on:change="handleKtp()"
                  />
                  <span class="form-text text-muted">Masukkan Foto KTP</span>
                </div>
                <div class="form-group">
                  <label>Selfie Admin</label>
                  <input
                    class="form-control form-control-solid form-control-lg"
                    type="file"
                    id="file"
                    ref="selfie"
                    v-on:change="handleSelfie()"
                  />
                  <span class="form-text text-muted"
                    >Masukkan Selfie Admin</span
                  >
                </div>
                <div class="form-group">
                  <div class="form-group">
                    <label>Foto Hotel</label>
                    <input
                      class="form-control form-control-solid form-control-lg"
                      type="file"
                      id="file"
                      ref="hotel_image"
                      v-on:change="handleImageHotel()"
                    />
                    <span class="form-text text-muted"
                      >Masukkan Foto Hotel
                    </span>
                  </div>
                </div>
              </div>
              <!--end: Wizard Step 3-->

              <!--begin: Wizard Step 4-->
              <div class="pb-5" data-wizard-type="step-content">
                <h4 class="mb-10 font-weight-bold text-dark">
                  Setup Your Delivery Location
                </h4>
                <div class="form-group">
                  <label>Address Line 1</label>
                  <input
                    type="text"
                    class="form-control form-control-solid form-control-lg"
                    name="locaddress1"
                    placeholder="Address Line 1"
                    value="Address Line 1"
                  />
                  <span class="form-text text-muted"
                    >Please enter your Address.</span
                  >
                </div>
                <div class="form-group">
                  <label>Address Line 2</label>
                  <input
                    type="text"
                    class="form-control form-control-solid form-control-lg"
                    name="locaddress2"
                    placeholder="Address Line 2"
                    value="Address Line 2"
                  />
                  <span class="form-text text-muted"
                    >Please enter your Address.</span
                  >
                </div>
                <div class="row">
                  <div class="col-xl-6">
                    <div class="form-group">
                      <label>Postcode</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="locpostcode"
                        placeholder="Postcode"
                        value="3072"
                      />
                      <span class="form-text text-muted"
                        >Please enter your Postcode.</span
                      >
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group">
                      <label>City</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="loccity"
                        placeholder="City"
                        value="Preston"
                      />
                      <span class="form-text text-muted"
                        >Please enter your City.</span
                      >
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-6">
                    <div class="form-group">
                      <label>State</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="locstate"
                        placeholder="State"
                        value="VIC"
                      />
                      <span class="form-text text-muted"
                        >Please enter your State.</span
                      >
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group">
                      <label>Country</label>
                      <select
                        name="loccountry"
                        class="form-control form-control-solid form-control-lg"
                      >
                        <option value="">Select</option>
                        <option value="AF">Afghanistan</option>
                        <option value="AX">Åland Islands</option>
                        <option value="AL">Albania</option>
                        <option value="DZ">Algeria</option>
                        <option value="AS">American Samoa</option>
                        <option value="AD">Andorra</option>
                        <option value="AO">Angola</option>
                        <option value="AI">Anguilla</option>
                        <option value="AQ">Antarctica</option>
                        <option value="AG">Antigua and Barbuda</option>
                        <option value="AR">Argentina</option>
                        <option value="AM">Armenia</option>
                        <option value="AW">Aruba</option>
                        <option value="AU" selected>Australia</option>
                        <option value="AT">Austria</option>
                        <option value="AZ">Azerbaijan</option>
                        <option value="BS">Bahamas</option>
                        <option value="BH">Bahrain</option>
                        <option value="BD">Bangladesh</option>
                        <option value="BB">Barbados</option>
                        <option value="BY">Belarus</option>
                        <option value="BE">Belgium</option>
                        <option value="BZ">Belize</option>
                        <option value="BJ">Benin</option>
                        <option value="BM">Bermuda</option>
                        <option value="BT">Bhutan</option>
                        <option value="BO"
                          >Bolivia, Plurinational State of</option
                        >
                        <option value="BQ"
                          >Bonaire, Sint Eustatius and Saba</option
                        >
                        <option value="BA">Bosnia and Herzegovina</option>
                        <option value="BW">Botswana</option>
                        <option value="BV">Bouvet Island</option>
                        <option value="BR">Brazil</option>
                        <option value="IO"
                          >British Indian Ocean Territory</option
                        >
                        <option value="BN">Brunei Darussalam</option>
                        <option value="BG">Bulgaria</option>
                        <option value="BF">Burkina Faso</option>
                        <option value="BI">Burundi</option>
                        <option value="KH">Cambodia</option>
                        <option value="CM">Cameroon</option>
                        <option value="CA">Canada</option>
                        <option value="CV">Cape Verde</option>
                        <option value="KY">Cayman Islands</option>
                        <option value="CF">Central African Republic</option>
                        <option value="TD">Chad</option>
                        <option value="CL">Chile</option>
                        <option value="CN">China</option>
                        <option value="CX">Christmas Island</option>
                        <option value="CC">Cocos (Keeling) Islands</option>
                        <option value="CO">Colombia</option>
                        <option value="KM">Comoros</option>
                        <option value="CG">Congo</option>
                        <option value="CD"
                          >Congo, the Democratic Republic of the</option
                        >
                        <option value="CK">Cook Islands</option>
                        <option value="CR">Costa Rica</option>
                        <option value="CI">Côte d'Ivoire</option>
                        <option value="HR">Croatia</option>
                        <option value="CU">Cuba</option>
                        <option value="CW">Curaçao</option>
                        <option value="CY">Cyprus</option>
                        <option value="CZ">Czech Republic</option>
                        <option value="DK">Denmark</option>
                        <option value="DJ">Djibouti</option>
                        <option value="DM">Dominica</option>
                        <option value="DO">Dominican Republic</option>
                        <option value="EC">Ecuador</option>
                        <option value="EG">Egypt</option>
                        <option value="SV">El Salvador</option>
                        <option value="GQ">Equatorial Guinea</option>
                        <option value="ER">Eritrea</option>
                        <option value="EE">Estonia</option>
                        <option value="ET">Ethiopia</option>
                        <option value="FK">Falkland Islands (Malvinas)</option>
                        <option value="FO">Faroe Islands</option>
                        <option value="FJ">Fiji</option>
                        <option value="FI">Finland</option>
                        <option value="FR">France</option>
                        <option value="GF">French Guiana</option>
                        <option value="PF">French Polynesia</option>
                        <option value="TF">French Southern Territories</option>
                        <option value="GA">Gabon</option>
                        <option value="GM">Gambia</option>
                        <option value="GE">Georgia</option>
                        <option value="DE">Germany</option>
                        <option value="GH">Ghana</option>
                        <option value="GI">Gibraltar</option>
                        <option value="GR">Greece</option>
                        <option value="GL">Greenland</option>
                        <option value="GD">Grenada</option>
                        <option value="GP">Guadeloupe</option>
                        <option value="GU">Guam</option>
                        <option value="GT">Guatemala</option>
                        <option value="GG">Guernsey</option>
                        <option value="GN">Guinea</option>
                        <option value="GW">Guinea-Bissau</option>
                        <option value="GY">Guyana</option>
                        <option value="HT">Haiti</option>
                        <option value="HM"
                          >Heard Island and McDonald Islands</option
                        >
                        <option value="VA"
                          >Holy See (Vatican City State)</option
                        >
                        <option value="HN">Honduras</option>
                        <option value="HK">Hong Kong</option>
                        <option value="HU">Hungary</option>
                        <option value="IS">Iceland</option>
                        <option value="IN">India</option>
                        <option value="ID">Indonesia</option>
                        <option value="IR">Iran, Islamic Republic of</option>
                        <option value="IQ">Iraq</option>
                        <option value="IE">Ireland</option>
                        <option value="IM">Isle of Man</option>
                        <option value="IL">Israel</option>
                        <option value="IT">Italy</option>
                        <option value="JM">Jamaica</option>
                        <option value="JP">Japan</option>
                        <option value="JE">Jersey</option>
                        <option value="JO">Jordan</option>
                        <option value="KZ">Kazakhstan</option>
                        <option value="KE">Kenya</option>
                        <option value="KI">Kiribati</option>
                        <option value="KP"
                          >Korea, Democratic People's Republic of</option
                        >
                        <option value="KR">Korea, Republic of</option>
                        <option value="KW">Kuwait</option>
                        <option value="KG">Kyrgyzstan</option>
                        <option value="LA"
                          >Lao People's Democratic Republic</option
                        >
                        <option value="LV">Latvia</option>
                        <option value="LB">Lebanon</option>
                        <option value="LS">Lesotho</option>
                        <option value="LR">Liberia</option>
                        <option value="LY">Libya</option>
                        <option value="LI">Liechtenstein</option>
                        <option value="LT">Lithuania</option>
                        <option value="LU">Luxembourg</option>
                        <option value="MO">Macao</option>
                        <option value="MK"
                          >Macedonia, the former Yugoslav Republic of</option
                        >
                        <option value="MG">Madagascar</option>
                        <option value="MW">Malawi</option>
                        <option value="MY">Malaysia</option>
                        <option value="MV">Maldives</option>
                        <option value="ML">Mali</option>
                        <option value="MT">Malta</option>
                        <option value="MH">Marshall Islands</option>
                        <option value="MQ">Martinique</option>
                        <option value="MR">Mauritania</option>
                        <option value="MU">Mauritius</option>
                        <option value="YT">Mayotte</option>
                        <option value="MX">Mexico</option>
                        <option value="FM"
                          >Micronesia, Federated States of</option
                        >
                        <option value="MD">Moldova, Republic of</option>
                        <option value="MC">Monaco</option>
                        <option value="MN">Mongolia</option>
                        <option value="ME">Montenegro</option>
                        <option value="MS">Montserrat</option>
                        <option value="MA">Morocco</option>
                        <option value="MZ">Mozambique</option>
                        <option value="MM">Myanmar</option>
                        <option value="NA">Namibia</option>
                        <option value="NR">Nauru</option>
                        <option value="NP">Nepal</option>
                        <option value="NL">Netherlands</option>
                        <option value="NC">New Caledonia</option>
                        <option value="NZ">New Zealand</option>
                        <option value="NI">Nicaragua</option>
                        <option value="NE">Niger</option>
                        <option value="NG">Nigeria</option>
                        <option value="NU">Niue</option>
                        <option value="NF">Norfolk Island</option>
                        <option value="MP">Northern Mariana Islands</option>
                        <option value="NO">Norway</option>
                        <option value="OM">Oman</option>
                        <option value="PK">Pakistan</option>
                        <option value="PW">Palau</option>
                        <option value="PS"
                          >Palestinian Territory, Occupied</option
                        >
                        <option value="PA">Panama</option>
                        <option value="PG">Papua New Guinea</option>
                        <option value="PY">Paraguay</option>
                        <option value="PE">Peru</option>
                        <option value="PH">Philippines</option>
                        <option value="PN">Pitcairn</option>
                        <option value="PL">Poland</option>
                        <option value="PT">Portugal</option>
                        <option value="PR">Puerto Rico</option>
                        <option value="QA">Qatar</option>
                        <option value="RE">Réunion</option>
                        <option value="RO">Romania</option>
                        <option value="RU">Russian Federation</option>
                        <option value="RW">Rwanda</option>
                        <option value="BL">Saint Barthélemy</option>
                        <option value="SH"
                          >Saint Helena, Ascension and Tristan da Cunha</option
                        >
                        <option value="KN">Saint Kitts and Nevis</option>
                        <option value="LC">Saint Lucia</option>
                        <option value="MF">Saint Martin (French part)</option>
                        <option value="PM">Saint Pierre and Miquelon</option>
                        <option value="VC"
                          >Saint Vincent and the Grenadines</option
                        >
                        <option value="WS">Samoa</option>
                        <option value="SM">San Marino</option>
                        <option value="ST">Sao Tome and Principe</option>
                        <option value="SA">Saudi Arabia</option>
                        <option value="SN">Senegal</option>
                        <option value="RS">Serbia</option>
                        <option value="SC">Seychelles</option>
                        <option value="SL">Sierra Leone</option>
                        <option value="SG">Singapore</option>
                        <option value="SX">Sint Maarten (Dutch part)</option>
                        <option value="SK">Slovakia</option>
                        <option value="SI">Slovenia</option>
                        <option value="SB">Solomon Islands</option>
                        <option value="SO">Somalia</option>
                        <option value="ZA">South Africa</option>
                        <option value="GS"
                          >South Georgia and the South Sandwich Islands</option
                        >
                        <option value="SS">South Sudan</option>
                        <option value="ES">Spain</option>
                        <option value="LK">Sri Lanka</option>
                        <option value="SD">Sudan</option>
                        <option value="SR">Suriname</option>
                        <option value="SJ">Svalbard and Jan Mayen</option>
                        <option value="SZ">Swaziland</option>
                        <option value="SE">Sweden</option>
                        <option value="CH">Switzerland</option>
                        <option value="SY">Syrian Arab Republic</option>
                        <option value="TW">Taiwan, Province of China</option>
                        <option value="TJ">Tajikistan</option>
                        <option value="TZ">Tanzania, United Republic of</option>
                        <option value="TH">Thailand</option>
                        <option value="TL">Timor-Leste</option>
                        <option value="TG">Togo</option>
                        <option value="TK">Tokelau</option>
                        <option value="TO">Tonga</option>
                        <option value="TT">Trinidad and Tobago</option>
                        <option value="TN">Tunisia</option>
                        <option value="TR">Turkey</option>
                        <option value="TM">Turkmenistan</option>
                        <option value="TC">Turks and Caicos Islands</option>
                        <option value="TV">Tuvalu</option>
                        <option value="UG">Uganda</option>
                        <option value="UA">Ukraine</option>
                        <option value="AE">United Arab Emirates</option>
                        <option value="GB">United Kingdom</option>
                        <option value="US">United States</option>
                        <option value="UM"
                          >United States Minor Outlying Islands</option
                        >
                        <option value="UY">Uruguay</option>
                        <option value="UZ">Uzbekistan</option>
                        <option value="VU">Vanuatu</option>
                        <option value="VE"
                          >Venezuela, Bolivarian Republic of</option
                        >
                        <option value="VN">Viet Nam</option>
                        <option value="VG">Virgin Islands, British</option>
                        <option value="VI">Virgin Islands, U.S.</option>
                        <option value="WF">Wallis and Futuna</option>
                        <option value="EH">Western Sahara</option>
                        <option value="YE">Yemen</option>
                        <option value="ZM">Zambia</option>
                        <option value="ZW">Zimbabwe</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <!--end: Wizard Step 4-->

              <!--begin: Wizard Step 5-->
              <div class="pb-5" data-wizard-type="step-content">
                <h4 class="mb-10 font-weight-bold text-dark">
                  Review your Details and Submit
                </h4>
                <div class="border-bottom mb-5 pb-5">
                  <div class="font-weight-bold mb-3">
                    Current Address:
                  </div>
                  <div class="line-height-md">
                    Address Line 1
                    <br />
                    Address Line 2 <br />
                    Melbourne 3000, VIC, Australia
                  </div>
                </div>
                <div class="border-bottom mb-5 pb-5">
                  <div class="font-weight-bold mb-3">
                    Delivery Details:
                  </div>
                  <div class="line-height-md">
                    Package: Complete Workstation (Monitor, Computer, Keyboard &
                    Mouse)
                    <br />
                    Weight: 25kg <br />
                    Dimensions: 110cm (w) x 90cm (h) x 150cm (L)
                  </div>
                </div>
                <div class="border-bottom mb-5 pb-5">
                  <div class="font-weight-bold mb-3">
                    Delivery Service Type:
                  </div>
                  <div class="line-height-md">
                    Overnight Delivery with Regular Packaging
                    <br />
                    Preferred Morning (8:00AM - 11:00AM) Delivery
                  </div>
                </div>
                <div class="mb-5">
                  <div class="font-weight-bold mb-3">
                    Delivery Address:
                  </div>
                  <div class="line-height-md">
                    Address Line 1
                    <br />
                    Address Line 2 <br />
                    Preston 3072, VIC, Australia
                  </div>
                </div>
              </div>
              <!--end: Wizard Step 5-->

              <!--begin: Wizard Actions -->
              <div class="d-flex justify-content-between border-top pt-10">
                <div class="mr-2">
                  <button
                    class="btn btn-light-primary font-weight-bold text-uppercase px-9 py-4"
                    data-wizard-type="action-prev"
                  >
                    Previous
                  </button>
                </div>
                <div>
                  <button
                    v-on:click="onSubmit"
                    class="btn btn-success font-weight-bold text-uppercase px-9 py-4"
                    data-wizard-type="action-submit"
                  >
                    Submit
                  </button>
                  <button
                    class="btn btn-primary font-weight-bold text-uppercase px-9 py-4"
                    data-wizard-type="action-next"
                  >
                    Next Step
                  </button>
                </div>
              </div>
              <!--end: Wizard Actions -->
            </form>
            <!--end: Wizard Form-->
          </div>
        </div>
        <!--end: Wizard Body-->
      </div>
    </div>
    <!--end: Wizard-->
  </div>
</template>

<style lang="scss">
@import "@/assets/sass/pages/wizard/wizard-1.scss";
</style>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import KTUtil from "@/assets/js/components/util";
import KTWizard from "@/assets/js/components/wizard";
import Swal from "sweetalert2";

export default {
  name: "Wizard-1",
  data() {
    return {
      // Remove this dummy login info
      form: {
        hotel_name: "",
        hotel_email: "",
        hotel_phone: "",
        hotel_image: null,
        hotel_address: "",
        npwp: "",
        hotel_province: "",
        hotel_city: "",
        hotel_district: "",
        hotel_subdistrict: "",
        document: null,
        admin_name: "",
        admin_phone: "",
        nik: "",
        ktp: null,
        selfie: null
      },
      loading: false,
      isError: false,
      uploadedFiles: [],
      provinces: [],
      cities: [],
      districts: [],
      subdistricts: []
    };
  },
  methods: {
    resetProvince() {
      this.form.hotel_city = "";
      this.form.hotel_subdistrict = "";
      this.form.hotel_district = "";
      this.fetchCity(this.form.hotel_province);
    },
    handleKtp() {
      // console.log("KTP");
      // console.log(this.$refs.ktp.files[0]);
      this.form.ktp = this.$refs.ktp.files[0];
    },
    handleDocument() {
      // console.log("DOKUMEN");
      // console.log(this.$refs.docs.files[0]);
      this.form.document = this.$refs.docs.files[0];
    },
    handleSelfie() {
      // console.log("SELFIE");
      // console.log(this.$refs);
      this.form.selfie = this.$refs.selfie.files[0];
    },
    handleImageHotel() {
      // console.log("HOTEL IMAGE");
      // console.log(this.$refs);
      this.form.hotel_image = this.$refs.hotel_image.files[0];
    },
    // validateState(name) {
    //   const { $dirty, $error } = this.$v.form[name];
    //   return $dirty ? !$error : null;
    // },
    // resetForm() {
    //   this.form = {
    //     hotel_name: null,
    //     hotel_email: null,
    //     hotel_phone: null,
    //     hotel_address: null,
    //     hotel_image: null,
    //     hotel_province: null,
    //     hotel_subdistrict: null,
    //     hotel_district: null,
    //     hotel_city: null,
    //     npwp: null,
    //     document: null,
    //     admin_name: null,
    //     admin_phone: null,
    //     nik: null,
    //     ktp: null,
    //     selfie: null
    //   };
    //
    //   // this.$nextTick(() => {
    //   //   // this.$v.$reset();
    //   // });
    // },
    cek() {
      console.log(this.form);
    },
    fetchProvinces() {
      this.resetProvince();
      this.$api
        .get(`province/all`)
        .then(res => {
          this.provinces = res.data.data.data ? res.data.data.data : [];
          // console.log(this.ktghewan);
        })
        .catch(err => {
          console.error(err);
          // alert(err);
        });
    },
    fetchCity(province = this.form.hotel_province) {
      this.$api
        .get(`city/all?provinceId=${province}`)
        .then(res => {
          this.cities = res.data.data.data ? res.data.data.data : [];
          // console.log(this.ktghewan);
        })
        .catch(err => {
          console.error(err);
          // alert(err);
        });
    },
    fetchDistrict(city = this.form.hotel_city) {
      this.$api
        .get(`district/all?cityId=${city}`)
        .then(res => {
          this.districts = res.data.data.data ? res.data.data.data : [];
          // console.log(this.ktghewan);
        })
        .catch(err => {
          console.error(err);
          // alert(err);
        });
    },
    fetchSubdistrict(district = this.form.hotel_district) {
      this.$api
        .get(`subdistrict/all?districtId=${district}`)
        .then(res => {
          this.subdistricts = res.data.data.data ? res.data.data.data : [];
          // console.log(this.ktghewan);
        })
        .catch(err => {
          console.error(err);
          // alert(err);
        });
    },
    onSubmit() {
      this.form.hotel_phone = parseInt(this.form.hotel_phone);
      this.form.admin_phone = parseInt(this.form.admin_phone);
      this.form.hotel_province = parseInt(this.form.hotel_province);
      this.form.hotel_city = parseInt(this.form.hotel_city);
      this.form.hotel_district = parseInt(this.form.hotel_district);
      this.form.hotel_subdistrict = parseInt(this.form.hotel_subdistrict);
      this.form.nik = parseInt(this.form.nik);
      // this.$v.form.$touch();
      // if (this.$v.form.$anyError) {
      //   return;
      // }
      // clear existing errors
      // this.$store.dispatch(LOGOUT);

      // set spinner to submit button
      const submitButton = this.$refs["kt_login_signup_submit"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      // dummy delay
      setTimeout(() => {
        const config = {
          headers: { "content-type": "multipart/form-data" }
        };

        let formData = new FormData();

        formData.append("hotel_name", this.form.hotel_name);
        formData.append("hotel_email", this.form.hotel_email);
        formData.append("hotel_phone", this.form.hotel_phone);
        formData.append("hotel_address", this.form.hotel_address);
        if (this.$refs.hotel_image.files[0] !== undefined)
          formData.append("hotel_image", this.$refs.hotel_image.files[0]);
        formData.append("npwp", this.form.npwp);
        if (this.$refs.docs.files[0] !== undefined)
          formData.append("document", this.$refs.docs.files[0]);
        formData.append("admin_name", this.form.admin_name);
        formData.append("admin_phone", this.form.admin_phone);
        formData.append("hotel_province", this.form.hotel_province);
        formData.append("hotel_city", this.form.hotel_city);
        formData.append("hotel_district", this.form.hotel_district);
        formData.append("hotel_subdistrict", this.form.hotel_subdistrict);
        formData.append("nik", this.form.nik);
        if (this.$refs.ktp.files[0] !== undefined)
          formData.append("ktp", this.$refs.ktp.files[0]);
        if (this.$refs.selfie.files[0] !== undefined)
          formData.append("selfie", this.$refs.selfie.files[0]);
        // send register request
        this.$api
          .post(`request/add`, formData, config)
          .then(res => {
            // console.log(res.data.data.token)
            console.log(res);
            if (res.status === 200) {
              // console.log(res.data.data.role);

              this.isError = false;
              this.loading = false;
              if (res.data.status === true) {
                this.$router.push({ name: "login" });
                Swal.fire({
                  title: "",
                  text: "Sukses Registrasi dan Menunggu verifikasi Email ",
                  icon: "success",
                  showConfirmButton: false,
                  // confirmButtonClass: "btn btn-secondary",
                  timer: 4000
                });
              }
              // this.$store.commit("setAuth", res.data);
            } else {
              this.isError = true;
              this.loading = false;
            }
          })
          .catch(err => {
            this.loading = false;
            this.isError = true;
            this.form.password = "";
            // this.$v.$reset();
            if (
              !err.message === "Request failed with status code 404" ||
              !err.message === "Request failed with status code 400"
            )
              alert(err.message);
          });

        submitButton.classList.remove(
          "spinner",
          "spinner-light",
          "spinner-right"
        );
      }, 2000);
    }
    // submit: function(e) {
    //   e.preventDefault();
    //   Swal.fire({
    //     title: "",
    //     text: "The application has been successfully submitted!",
    //     icon: "success",
    //     confirmButtonClass: "btn btn-secondary"
    //   });
    // }
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Wizard" },
      { title: "Wizard-1" }
    ]);

    // Initialize form wizard
    const wizard = new KTWizard("kt_wizard_v1", {
      startStep: 1, // initial active step number
      clickableSteps: true // allow step clicking
    });

    // Validation before going to next page
    wizard.on("beforeNext", function(/*wizardObj*/) {
      // validate the form and use below function to stop the wizard's step
      // wizardObj.stop();
    });

    // Change event
    wizard.on("change", function(/*wizardObj*/) {
      setTimeout(() => {
        KTUtil.scrollTop();
      }, 500);
    });

    this.fetchProvinces();
  }
};
</script>
