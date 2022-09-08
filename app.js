// destructuring array
const namaProvinsi = ["DKI Jakarta", "Banten", "Bali", "Jawa Timur"];
const [jakarta, banten, bali, jatim, jateng = "Jawa Tengah"] = namaProvinsi;
console.log(jakarta, banten, bali, jatim, jateng);

// destructuring object
const person = {
  "nama lengkap": "toni setiawan",
  umur: "20 Tahun",
};
const { "nama lengkap": nama, umur, hobi = "ngoding" } = person;
console.log(nama, umur, hobi);

// destructuring function
const product = {
  "nama product": "redmi note 8",
  merk: "xiaomi",
  tipe: "handphone",
  "memori internal": "64gb",
};

const sayHello = ({
  merk,
  "nama product": np,
  tipe,
  ram = "4gb",
  "memori internal": internal,
}) => {
  console.log(np, merk, tipe, ram, internal);
};

sayHello(product);
