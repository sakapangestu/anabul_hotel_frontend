const TOKEN = "token";
const ID = "idUser";

export const getToken = () => {
  return window.localStorage.getItem(TOKEN);
};
export const saveToken = token => {
  window.localStorage.setItem(TOKEN, token);
};
export const destroyToken = () => {
  window.localStorage.removeItem(TOKEN);
};

export const getID = () => {
  return window.localStorage.getItem(ID);
};
export const saveID = id => {
  window.localStorage.setItem(ID, id);
};
export const destroyID = () => {
  window.localStorage.removeItem(ID);
};

export const getName = () => {
  return window.localStorage.getItem("name");
};
export const saveName = name => {
  window.localStorage.setItem("name", name);
};
export const destroyName = () => {
  window.localStorage.removeItem("name");
};

export const getEmail = () => {
  return window.localStorage.getItem("email");
};
export const saveEmail = email => {
  window.localStorage.setItem("email", email);
};
export const destroyEmail = () => {
  window.localStorage.removeItem("email");
};

export const getPhone = () => {
  return window.localStorage.getItem("phone");
};
export const savePhone = phone => {
  window.localStorage.setItem("phone", phone);
};
export const destroyPhone = () => {
  window.localStorage.removeItem("phone");
};

export const getPassword = () => {
  return window.localStorage.getItem("password");
};
export const savePassword = password => {
  window.localStorage.setItem("password", password);
};
export const destroyPassword = () => {
  window.localStorage.removeItem("password");
};

export const getRole = () => {
  return window.localStorage.getItem("role");
};
export const saveRole = role => {
  window.localStorage.setItem("role", role);
};
export const destroyRole = () => {
  window.localStorage.removeItem("role");
};

export const getAddress = () => {
  return window.localStorage.getItem("address");
};
export const saveAddres = address => {
  window.localStorage.setItem("address", address);
};
export const destroyAddress = () => {
  window.localStorage.removeItem("address");
};

export const getGender = () => {
  return window.localStorage.getItem("gender");
};
export const saveGender = gender => {
  window.localStorage.setItem("gender", gender);
};
export const destroyGender = () => {
  window.localStorage.removeItem("gender");
};

export const getImage = () => {
  return window.localStorage.getItem("image");
};
export const saveImage = image => {
  window.localStorage.setItem("image", image);
};
export const destroyImage = () => {
  window.localStorage.removeItem("image");
};

export const getNIK = () => {
  return window.localStorage.getItem("nik");
};
export const saveNIK = NIK => {
  window.localStorage.setItem("nik", NIK);
};
export const destroyNIK = () => {
  window.localStorage.removeItem("nik");
};

export const getHotelId = () => {
  return window.localStorage.getItem("hotel_id");
};
export const saveHotelId = HotelId => {
  window.localStorage.setItem("hotel_id", HotelId);
};
export const destroyHotelId = () => {
  window.localStorage.removeItem("hotel_id");
};
export const getHotelprovince = () => {
  return window.localStorage.getItem("province_id");
};
export const saveHotelprovince = ProvinceId => {
  window.localStorage.setItem("province_id", ProvinceId);
};
export const destroyprovince = () => {
  window.localStorage.removeItem("province_id");
};
export const getHotelCity = () => {
  return window.localStorage.getItem("city_id");
};
export const saveHotelCity = CityId => {
  window.localStorage.setItem("city_id", CityId);
};
export const destroyCity = () => {
  window.localStorage.removeItem("city_id");
};
export const getHotelDistrict = () => {
  return window.localStorage.getItem("district_id");
};
export const saveHotelDistrict = DistrictId => {
  window.localStorage.setItem("district_id", DistrictId);
};
export const destroyDistrict = () => {
  window.localStorage.removeItem("district_id");
};
export const getHotelSubdistrict = () => {
  return window.localStorage.getItem("subdistrict_id");
};
export const saveHotelSubdistrict = SubdistrictId => {
  window.localStorage.setItem("subdistrict_id", SubdistrictId);
};
export const destroySubdistrict = () => {
  window.localStorage.removeItem("subdistrict_id");
};
export const getHotelName = () => {
  return window.localStorage.getItem("hotel.name");
};
export const saveHotelName = HotelName => {
  window.localStorage.setItem("hotel.name", HotelName);
};
export const destroyHotelName = () => {
  window.localStorage.removeItem("hotel.name");
};
export default {
  getToken,
  saveToken,
  destroyToken,
  saveID,
  getID,
  destroyID,
  getName,
  saveName,
  destroyName,
  getEmail,
  saveEmail,
  destroyEmail,
  getRole,
  saveRole,
  destroyRole,
  getPhone,
  savePhone,
  destroyPhone,
  getPassword,
  savePassword,
  destroyPassword,
  getAddress,
  saveAddres,
  destroyAddress,
  getGender,
  saveGender,
  destroyGender,
  getImage,
  saveImage,
  destroyImage,
  getNIK,
  saveNIK,
  destroyNIK,
  getHotelId,
  saveHotelId,
  destroyHotelId,
  getHotelprovince,
  saveHotelprovince,
  destroyprovince,
  getHotelCity,
  saveHotelCity,
  destroyCity,
  getHotelDistrict,
  saveHotelDistrict,
  destroyDistrict,
  getHotelSubdistrict,
  saveHotelSubdistrict,
  destroySubdistrict,
  getHotelName,
  saveHotelName,
  destroyHotelName

};
